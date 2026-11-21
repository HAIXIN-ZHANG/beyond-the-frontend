import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';
import { parseBasePath } from '../site/config/deployment.ts';
import { homeContent } from '../site/components/home-content.ts';
import { getMessages } from '../site/config/i18n.ts';
import { themeStorageKey } from '../site/theme/runtime.ts';
import { loadBook } from '../site/content/load-book.ts';
import { chapterPath } from '../site/content/manifest.ts';
import { walkMarkdown } from '../site/content/markdown.ts';
import { buildSearchIndex } from '../site/content/build-search-index.ts';
import { readSearchIndex } from '../site/content/search.ts';

const output = fileURLToPath(new URL('../site/out/', import.meta.url));
const basePath = parseBasePath(process.env.NEXT_PUBLIC_BASE_PATH);
const pages = [
  ['index.html', 'en', 'Vibe Coding, Then What?', '/zh/'],
  ['read/index.html', 'en', 'Chapters | Vibe Coding, Then What?', '/zh/read/'],
  ['zh/index.html', 'zh-CN', 'Vibe Coding 之后：能跑，然后呢？', '/'],
  ['zh/read/index.html', 'zh-CN', '章节目录 | Vibe Coding 之后：能跑，然后呢？', '/read/'],
  ['404.html', 'en', 'Page not found | Vibe Coding, Then What?', '/zh/'],
];
const chapters = await loadBook();
pages.push(...chapters.map(chapter => [
  `${chapterPath(chapter.entry).slice(1)}index.html`, 'zh-CN', `${chapter.title} | Vibe Coding 之后：能跑，然后呢？`, '/read/',
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
  assert.ok(html.includes('class="search-dialog"') && html.includes('aria-haspopup="dialog"'), `${page}: missing search dialog or trigger`);
  const messages = getMessages(language === 'en' ? 'en' : 'zh');
  const footers = [...html.matchAll(/<footer\b([^>]*)>([\s\S]*?)<\/footer>/g)]
    .filter(([, tag]) => attributes(tag).class?.split(/\s+/).includes('site-footer'));
  assert.equal(footers.length, 1, `${page}: expected one site footer`);
  const bylines = [...footers[0][2].matchAll(/<p\b([^>]*)>([\s\S]*?)<\/p>/g)]
    .filter(([, tag]) => attributes(tag).class?.split(/\s+/).includes('footer-byline'));
  assert.equal(bylines.length, 1, `${page}: expected one footer author line`);
  assert.equal(bylines[0][2].replace(/<!--[\s\S]*?-->/g, ''), escapeHtml(messages.authorLabel + messages.authorName),
    `${page}: incorrect localized footer author`);

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
    assert.ok(html.includes('data-sidebar="expanded" data-enhanced="false"'), `${page}: static sidebar fallback missing`);
    assert.ok(html.includes('aria-controls="reader-book-navigation"') && html.includes('id="reader-book-navigation"'), `${page}: resize control target missing`);
    assert.ok(html.includes('class="chapter-header-menu"') && html.includes('name="reader-tools"'), `${page}: static navigation disclosures missing`);
    assert.equal((html.match(/<h1\b/g) || []).length, 1, `${page}: source title must be the only H1`);
    assert.ok(article.includes(chapter.title), `${page}: source title was lost`);
    assert.ok(html.includes(`data-source-sha256="${chapter.entry.sha256}"`), `${page}: wrong reviewed revision`);
    assert.equal((article.match(/class="section-actions"/g) || []).length, chapter.headingIds.length, `${page}: missing heading sharing actions`);
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
    assert.ok(!html.includes('class="reading-attribution"'), `${page}: old sidebar attribution remains`);
    const bookRail = html.match(/<aside\b[^>]*class="book-rail"[^>]*>([\s\S]*?)<\/aside>/)?.[1];
    const bookNavigation = bookRail?.match(/<div\b[^>]*id="reader-book-navigation"[^>]*>([\s\S]*?)<\/div>/)?.[1];
    assert.ok(bookNavigation && !bookNavigation.includes(escapeHtml(messages.authorName)) && !bookNavigation.includes('class="book-info"'), `${page}: book information mixed into chapter navigation`);
    const bookInfos = [...html.matchAll(/<section\b([^>]*)>([\s\S]*?)<\/section>/g)]
      .filter(([, tag]) => attributes(tag).class?.split(/\s+/).includes('book-info'));
    assert.equal(bookInfos.length, 2, `${page}: desktop/mobile book information missing`);
    assert.ok(bookRail.includes('class="book-info"'), `${page}: expanded sidebar dock missing`);
    for (const [, tag, content] of bookInfos) {
      assert.equal(attributes(tag)['aria-label'], messages.bookInformation, `${page}: book information label differs`);
      assert.ok(content.includes(`class="book-info-label">${escapeHtml(messages.authorCaption)}</span>`) &&
        content.includes(`class="book-info-name">${escapeHtml(messages.authorName)}</span>`), `${page}: labelled book author missing`);
      const infoLinks = [...content.matchAll(/<a\b[^>]*>/g)].map(([tag]) => attributes(tag));
      assert.ok(infoLinks.some(link => link.href === 'https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/issues'), `${page}: book information feedback missing`);
    }
    if (chapter.entry.id === 'opening') {
      assert.ok(article.includes('id="关于本书的-ai-协作" class="legacy-heading-target" role="group" aria-labelledby="我为什么想写这本书" tabindex="-1"'), `${page}: static legacy target missing`);
      assert.ok(!chapter.headingIds.includes('关于本书的-ai-协作'), `${page}: alias became a canonical heading`);
      assert.ok(article.includes('作者：缸子太子与世界') && article.includes('这本书从资料整理、正文起草到反复修改，都有 AI 的帮助。'), `${page}: attribution lost`);
    } else if (chapter.entry.id === 'G01') {
      assert.equal((article.match(/<table\b/g) || []).length, 2, `${page}: source tables missing`);
      assert.equal((article.match(/<pre\b/g) || []).length, 4, `${page}: source text diagrams/examples missing`);
      assert.ok(article.includes('https://www.rfc-editor.org/rfc/rfc9110.html#section-15.3.3'), `${page}: citation lost`);
    }
    const position = chapters.indexOf(chapter);
    for (const [rel, adjacent] of [['prev', chapters[position - 1]], ['next', chapters[position + 1]]]) {
      const destinations = links.filter(link => link.rel === rel).map(link => link.href);
      assert.deepEqual(destinations, adjacent ? [`${basePath}${chapterPath(adjacent.entry)}`] : [], `${page}: wrong ${rel} chapter`);
    }
    assert.equal(html.includes('已到当前最后一章'), position === chapters.length - 1, `${page}: incorrect last-chapter state`);
    const counts = { table: 0, code: 0 };
    walkMarkdown(chapter.tree, node => { if (node.type === 'table' || node.type === 'code') counts[node.type] += 1; });
    assert.equal((article.match(/<table\b/g) || []).length, counts.table, `${page}: source tables missing`);
    assert.equal((article.match(/<pre\b/g) || []).length, counts.code, `${page}: source code/diagrams missing`);
  }
  if (page === 'read/index.html' || page === 'zh/read/index.html') {
    for (const item of chapters) assert.ok(links.some(link => link.href === `${basePath}${chapterPath(item.entry)}`), `${page}: available chapter absent`);
    if (page === 'read/index.html') {
      assert.ok(html.includes('English chapters are not available yet') && html.includes('Chinese · Reviewed draft'), `${page}: missing language availability explanation`);
      assert.ok(!links.some(link => /^\/read\/[^/]+\//.test(link.href?.slice(basePath.length) || '')), `${page}: invented English article`);
    }
  }

  if (page === 'index.html' || page === 'zh/index.html') {
    const locale = page === 'index.html' ? 'en' : 'zh', messages = getMessages(locale), copy = homeContent[locale];
    assert.equal((html.match(/<h1\b/g) || []).length, 1, `${page}: home requires one real H1`);
    assert.ok(html.includes(escapeHtml(messages.description)), `${page}: approved home description changed`);
    assert.ok(html.includes(`alt="${escapeHtml(copy.illustrationAlt)}"`), `${page}: system illustration lacks localized description`);
    assert.ok(html.includes(`src="${basePath}/illustrations/home-systems-desktop.svg"`) && html.includes(`srcSet="${basePath}/illustrations/home-systems-mobile.svg"`), `${page}: local responsive art missing`);
    for (const [variant, width, height] of [['desktop', 410, 112], ['mobile', 304, 54]]) {
      const asset = await readFile(path.join(output, `illustrations/home-systems-${variant}.svg`), 'utf8');
      assert.ok(asset.startsWith('<svg') && asset.includes(`width="${width}"`) && asset.includes(`height="${height}"`), `${page}: approved SVG dimensions changed`);
    }
    assert.ok(!html.includes('figma.com/api/mcp/asset/'), `${page}: expiring design URL exposed`);
    for (const chapter of chapters) assert.ok(links.some(link => link.href === `${basePath}${chapterPath(chapter.entry)}`), `${page}: real home chapter absent`);
    if (locale === 'en') assert.ok(html.includes(messages.englishUnavailable), `${page}: English availability missing`);
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

const sectionCounts = {};
for (const locale of ['en', 'zh']) {
  const index = readSearchIndex(JSON.parse(await readFile(path.join(output, `search-index/${locale}.json`), 'utf8')), locale);
  assert.deepEqual(index, buildSearchIndex(chapters, locale), `${locale}: exported index differs from approved source nodes`);
  sectionCounts[locale] = index.entries.length;
  for (const entry of index.entries) {
    const [route, fragment] = entry.href.split('#');
    const target = await readFile(path.join(output, route.slice(1), 'index.html'), 'utf8');
    assert.ok(target.includes(`id="${decodeURIComponent(fragment)}"`), `Search target missing: ${entry.href}`);
    assert.ok(!entry.href.startsWith(basePath + basePath + '/') || !basePath, 'Search prefix doubled');
  }
}

console.log(`Static export verified: ${pages.length} pages, ${checked} local links/assets, basePath=${basePath || '/'}`);
console.log(`Static search indexes verified: zh=${sectionCounts.zh} reviewed sections; en=${sectionCounts.en}; all heading targets exist.`);
