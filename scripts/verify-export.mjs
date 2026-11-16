import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';
import { parseBasePath } from '../site/config/deployment.ts';
import { themeStorageKey } from '../site/theme/runtime.ts';
import { loadBook } from '../site/content/load-book.ts';
import { chapterPath } from '../site/content/manifest.ts';

const output = fileURLToPath(new URL('../site/out/', import.meta.url));
const basePath = parseBasePath(process.env.NEXT_PUBLIC_BASE_PATH);
const pages = [
  ['index.html', 'en', 'Vibe Coding, Then What?', '/zh/'],
  ['read/index.html', 'en', 'Chapters | Vibe Coding, Then What?', '/zh/read/'],
  ['zh/index.html', 'zh-CN', 'Vibe Coding 之后：能跑，然后呢？', '/'],
  ['zh/read/index.html', 'zh-CN', '章节目录 | Vibe Coding, Then What?', '/read/'],
  ['404.html', 'en', 'Page not found | Vibe Coding, Then What?', '/zh/'],
];
const chapters = await loadBook();
pages.push(...chapters.map(chapter => [
  `${chapterPath(chapter.entry).slice(1)}index.html`, 'zh-CN', `${chapter.title} | Vibe Coding, Then What?`, '/read/',
]));
let checked = 0;

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)]
    .map(([, name, value]) => [name.toLowerCase(), value.replaceAll('&amp;', '&')]));
}

function escapeHtml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;').replaceAll("'", '&#x27;');
}

for (const [page, language, title, alternatePath] of pages) {
  const html = await readFile(path.join(output, page), 'utf8');
  assert.ok(html.includes(`<html lang="${language}"`), `${page}: incorrect document language`);
  assert.ok(html.includes(`<title>${title}</title>`), `${page}: incorrect page title`);
  assert.match(html, /id="main"/, `${page}: missing skip-link target`);
  assert.match(html, /vibe-coding-then-what\/issues/, `${page}: outdated issue URL`);

  // Verify the actual production-serialized head script, not only its source function.
  const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1] || '';
  const bootstrap = head.match(/<script\b[^>]*id="btf-theme-bootstrap"[^>]*>([\s\S]*?)<\/script>/)?.[1];
  assert.ok(bootstrap, `${page}: missing pre-body theme bootstrap`);
  for (const [stored, dark, expected, preference] of [
    [null, true, 'dark', 'system'], ['invalid', true, 'dark', 'system'],
    ['light', true, 'light', 'light'], ['dark', false, 'dark', 'dark'],
  ]) {
    const dataset = {};
    const window = {
      localStorage: { getItem: key => { assert.equal(key, themeStorageKey); return stored; } },
      matchMedia: () => ({ matches: dark, addEventListener() {} }),
      addEventListener() {},
    };
    vm.runInNewContext(bootstrap, { window, document: { documentElement: { dataset } } }, { timeout: 1000 });
    assert.equal(dataset.theme, expected, `${page}: emitted script resolves the wrong appearance`);
    assert.equal(dataset.themePreference, preference, `${page}: emitted script confuses preference and appearance`);
  }

  const alternateLanguage = language === 'en' ? 'zh' : 'en';
  const links = [...html.matchAll(/<a\b[^>]*>/g)].map(([tag]) => attributes(tag));
  assert.ok(links.some(link => link.href === 'https://github.com/HAIXIN-ZHANG/vibe-coding-then-what'),
    `${page}: incorrect repository link`);
  assert.ok(links.some(link => link.href === 'https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/issues'),
    `${page}: incorrect feedback link`);
  assert.ok(!html.includes('/beyond-the-frontend') && !html.includes('Beyond the Frontend'),
    `${page}: former brand or deployment path remains in the exported page`);
  assert.ok(links.some(link => link.hreflang === alternateLanguage && link.href === `${basePath}${alternatePath}`),
    `${page}: incorrect language-switch destination`);

  if (page === '404.html') {
    assert.ok(html.includes('Page not found') && html.includes('这一页还没找到'), '404 must offer both languages');
    const metadata = [...html.matchAll(/<meta\b[^>]*>/g)].map(([tag]) => attributes(tag));
    assert.ok(metadata.some(meta => meta.name === 'robots' && /\bnoindex\b/.test(meta.content || '')),
      '404 must be excluded from search-engine indexing');
  }

  const chapter = chapters.find(item => `${chapterPath(item.entry).slice(1)}index.html` === page);
  if (chapter) {
    const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
    assert.ok(article, `${page}: missing chapter body`);
    assert.equal((html.match(/<h1\b/g) || []).length, 1, `${page}: source title must be the only H1`);
    assert.ok(article.includes(chapter.title), `${page}: source title was lost`);
    assert.ok(html.includes(`data-source-sha256="${chapter.entry.sha256}"`), `${page}: wrong reviewed revision`);
    assert.ok(html.includes('中文 · 已审阅草稿'), `${page}: missing truthful draft context`);
    assert.ok(!article.includes('中文初稿 · 待 review'), `${page}: stale authoring preamble exposed`);
    assert.ok(!html.includes('book/drafts/'), `${page}: internal source path exposed`);
    const articleTags = [...article.matchAll(/<[a-z][\w-]*\b[^>]*>/gi)].map(([tag]) => tag);
    assert.ok(!articleTags.some(tag => /^<(?:script|iframe)\b/i.test(tag) ||
      Object.keys(attributes(tag)).some(name => /^on/i.test(name))), `${page}: executable manuscript HTML`);
    const ids = [...html.matchAll(/<[a-z][\w-]*\b[^>]*>/gi)]
      .map(([tag]) => attributes(tag).id).filter(id => id !== undefined);
    assert.equal(ids.length, new Set(ids).size, `${page}: duplicate DOM IDs`);
    for (const id of chapter.headingIds) assert.ok(ids.includes(id), `${page}: missing source heading ${id}`);
    for (const link of links.filter(item => item.href?.startsWith('#'))) {
      assert.ok(ids.includes(decodeURIComponent(link.href.slice(1))), `${page}: broken heading anchor ${link.href}`);
    }
    for (const code of chapter.tree.children.filter(node => node.type === 'code')) {
      assert.ok(article.includes(escapeHtml(code.value)), `${page}: original preformatted text changed`);
    }
    if (chapter.entry.id === 'opening') {
      assert.ok(article.includes('作者：Jason Zhang') && article.includes('创作方式：AI 全程辅助创作。'), `${page}: attribution lost`);
      assert.ok(links.some(link => link.rel === 'next' && link.href === `${basePath}${chapterPath(chapters[1].entry)}`), `${page}: wrong next chapter`);
    } else {
      assert.equal((article.match(/<table\b/g) || []).length, 2, `${page}: source tables missing`);
      assert.equal((article.match(/<pre\b/g) || []).length, 4, `${page}: source text diagrams/examples missing`);
      assert.ok(article.includes('https://www.rfc-editor.org/rfc/rfc9110.html#section-15.3.3'), `${page}: citation lost`);
      assert.ok(!links.some(link => link.rel === 'next'), `${page}: invented unwritten next chapter`);
      assert.ok(links.some(link => link.rel === 'prev' && link.href === `${basePath}${chapterPath(chapters[0].entry)}`), `${page}: wrong previous chapter`);
    }
  }
  if (page === 'read/index.html' || page === 'zh/read/index.html') {
    for (const item of chapters) assert.ok(links.some(link => link.href === `${basePath}${chapterPath(item.entry)}`), `${page}: available chapter absent`);
    if (page === 'read/index.html') {
      assert.ok(html.includes('English chapters are not available yet') && html.includes('Chinese · Reviewed draft'), `${page}: missing language availability explanation`);
      assert.ok(!links.some(link => /^\/read\/[^/]+\//.test(link.href?.slice(basePath.length) || '')), `${page}: invented English article`);
    }
  }

  // Validate emitted links and assets against the actual static export, not dev routing.
  for (const [, attribute] of html.matchAll(/\b(?:href|src)="([^"#]+)"/g)) {
    if (!attribute.startsWith('/')) continue;
    const url = new URL(attribute.replaceAll('&amp;', '&'), 'https://static.invalid');
    assert.equal(url.origin, 'https://static.invalid', `${page}: unexpected external asset`);
    assert.ok(!basePath || url.pathname.startsWith(`${basePath}/`), `${page}: missing base path: ${attribute}`);
    let relative = decodeURIComponent(url.pathname.slice(basePath.length));
    if (relative.endsWith('/')) relative += 'index.html';
    const target = path.resolve(output, `.${relative}`);
    assert.ok(target.startsWith(`${path.resolve(output)}${path.sep}`), `${page}: invalid asset path`);
    assert.ok((await stat(target)).isFile(), `${page}: missing asset ${attribute}`);
    checked += 1;
  }
}

console.log(`Static export verified: ${pages.length} pages, ${checked} local links/assets, basePath=${basePath || '/'}`);
