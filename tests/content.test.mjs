import assert from 'node:assert/strict';
import test from 'node:test';
import { createHash } from 'node:crypto';
import { mkdtemp, mkdir, writeFile, symlink, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { chapterManifest, chapterPath, validateManifest } from '../site/content/manifest.ts';
import { loadBook } from '../site/content/load-book.ts';
import { parseMarkdown, nodeText } from '../site/content/markdown.ts';
import { resolveChapterLink } from '../site/content/links.ts';
import { alternateLocalePath } from '../site/config/i18n.ts';

test('only the two reviewed sources load with their original titles, attribution, diagrams and citations', async () => {
  const chapters = await loadBook();
  assert.deepEqual(chapters.map(chapter => chapter.entry.id), ['opening', 'G01']);
  assert.equal(chapters[0].title, '写在前面：能跑，然后呢？');
  assert.match(nodeText(chapters[0].tree), /作者：Jason Zhang/);
  assert.match(nodeText(chapters[0].tree), /创作方式：AI 全程辅助创作/);
  assert.equal(chapters[1].tree.children.filter(node => node.type === 'code').length, 4);
  assert.equal(chapters[1].tree.children.filter(node => node.type === 'table').length, 2);
  const urls = chapters.flatMap(chapter => chapter.tree.children.filter(node => node.type === 'paragraph')
    .flatMap(node => node.children.filter(child => child.type === 'link').map(child => child.url)));
  assert.ok(urls.includes('/zh/read/a-page-and-a-system/'));
  assert.ok(urls.includes('/zh/read/before-we-start/'));
  assert.ok(urls.some(url => url.startsWith('https://www.rfc-editor.org/')));
  assert.doesNotMatch(nodeText(chapters[0].tree), /中文初稿 · 待 review/);
});

test('manifest rejects duplicates, invalid order, traversal and absent review provenance', () => {
  assert.doesNotThrow(() => validateManifest(chapterManifest));
  for (const replacement of [
    { ...chapterManifest[1], id: 'opening' }, { ...chapterManifest[1], slug: 'before-we-start' },
    { ...chapterManifest[1], source: chapterManifest[0].source }, { ...chapterManifest[1], order: 1 },
    { ...chapterManifest[1], source: 'book/../private.md' }, { ...chapterManifest[1], slug: '../outside' },
    { ...chapterManifest[1], sha256: 'unreviewed' }, { ...chapterManifest[1], review: '' },
  ]) assert.throws(() => validateManifest([chapterManifest[0], replacement]));
  assert.throws(() => validateManifest([]));
  assert.equal(chapterPath(chapterManifest[1]), '/zh/read/a-page-and-a-system/');
});

test('changed bytes, missing files and symlinks outside book fail instead of silently rendering', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'vctw-source-test-'));
  try {
    await mkdir(path.join(root, 'book'));
    const body = '# Fixture\n\nReviewed text.\n';
    const entry = { ...chapterManifest[0], title: 'Fixture', source: 'book/fixture.md', sha256: createHash('sha256').update(body).digest('hex') };
    await writeFile(path.join(root, entry.source), body);
    assert.equal((await loadBook(root, [entry]))[0].title, 'Fixture');
    await writeFile(path.join(root, entry.source), body + 'Changed');
    await assert.rejects(loadBook(root, [entry]), /hash mismatch/);
    await rm(path.join(root, entry.source));
    await assert.rejects(loadBook(root, [entry]), /ENOENT/);
    await writeFile(path.join(root, 'outside.md'), body);
    await symlink(path.join(root, 'outside.md'), path.join(root, entry.source));
    await assert.rejects(loadBook(root, [entry]), /escapes book/);
  } finally { await rm(root, { recursive: true, force: true }); }
});

test('the exact stale preamble alone is omitted; substantive and later blockquotes survive', () => {
  const parsed = parseMarkdown('# Title\n\n> 中文初稿 · 待 review\n\n> Keep this caveat.\n\n## Section\n\n> 中文初稿 · 待 review\n');
  assert.equal(parsed.tree.children.filter(node => node.type === 'blockquote').length, 2);
  assert.match(nodeText(parsed.tree), /Keep this caveat/);
  assert.match(nodeText(parsed.tree), /中文初稿 · 待 review/);
  assert.equal(parseMarkdown('# Title\n\n> 中文初稿 · 待 review\n> Additional context\n').tree.children[1].type, 'blockquote');
});

test('headings use source text with deterministic Unicode IDs and collision-safe duplicate suffixes', () => {
  const source = '# Title\n\n## 中文：标题？\n\n## Hello\n\n## Hello\n\n### Hello-2\n\n## `API` 与 **数据**\n';
  const first = parseMarkdown(source);
  assert.deepEqual(first.headingIds, ['title', '中文标题', 'hello', 'hello-2', 'hello-2-2', 'api-与-数据']);
  assert.deepEqual(first.headings.map(heading => heading.title), ['中文：标题？', 'Hello', 'Hello', 'Hello-2', 'API 与 数据']);
  assert.deepEqual(parseMarkdown(source).headings, first.headings);
  assert.throws(() => parseMarkdown('Text\n\n# Title'), /exactly one H1/);
  assert.throws(() => parseMarkdown('# Title\n\n# Another title'), /exactly one H1/);
});

test('Markdown retains ordered lists, inline markup and fenced text without executing HTML', () => {
  const parsed = parseMarkdown('# Title\n\n3. **A**\n4. *B*\n\n```text\n<script>literal</script>\n  → preserve spacing\nonClick="literal code"\n```\n\n| Key | Value |\n| --- | --- |\n| `x` | **y** |');
  assert.equal(parsed.tree.children.find(node => node.type === 'list').start, 3);
  assert.match(parsed.tree.children.find(node => node.type === 'code').value, /<script>literal<\/script>\n {2}→ preserve spacing/);
  assert.match(parsed.tree.children.find(node => node.type === 'code').value, /onClick="literal code"/);
  assert.equal(parsed.tree.children.find(node => node.type === 'table').children.length, 2);
  for (const unsafe of ['<script>alert(1)</script>', '<img src=x onerror=alert(1)>', '<iframe src="x"></iframe>']) {
    assert.throws(() => parseMarkdown('# Title\n\n' + unsafe), /unsafe Markdown node: html/);
  }
});

test('relative links use only reviewed routes and real heading IDs; citation fragments survive', () => {
  const current = chapterManifest[0];
  const targets = chapterManifest.map(entry => ({ entry, headingIds: ['title', '中文标题'] }));
  assert.equal(resolveChapterLink('01-a-page-and-a-system.md#中文标题', current, targets), '/zh/read/a-page-and-a-system/#%E4%B8%AD%E6%96%87%E6%A0%87%E9%A2%98');
  assert.equal(resolveChapterLink('#title', current, targets), '#title');
  const citation = 'https://www.rfc-editor.org/rfc/rfc9110.html#section-15.3.3';
  assert.equal(resolveChapterLink(citation, current, targets), citation);
  for (const url of ['future.md', '../../planning/private.md', '01-a-page-and-a-system.md#missing', '/book/drafts/zh/private.md']) {
    assert.throws(() => resolveChapterLink(url, current, targets));
  }
});

test('dangerous and obfuscated schemes are rejected after Markdown entity decoding', () => {
  const entry = chapterManifest[0];
  const targets = [{ entry, headingIds: [] }];
  for (const url of ['javascript:alert(1)', 'JaVaScRiPt:alert(1)', 'data:text/html,x', 'vbscript:x', '//attacker.invalid/x', 'java\tscript:x', '%6aavascript:alert(1)', '\\attacker.invalid']) {
    assert.throws(() => resolveChapterLink(url, entry, targets), url);
  }
  const parsed = parseMarkdown('# Title\n\n[bad](javascript&colon;alert)');
  const link = parsed.tree.children[1].children[0];
  assert.equal(link.url, 'javascript:alert');
  assert.throws(() => resolveChapterLink(link.url, entry, targets), /Unsafe/);
});

test('untranslated chapter switches to the English index once under both deployment prefixes', () => {
  for (const prefix of ['', '/vibe-coding-then-what']) for (const chapter of chapterManifest) {
    assert.equal(alternateLocalePath(prefix + chapterPath(chapter), 'zh', prefix), '/read/');
  }
});
