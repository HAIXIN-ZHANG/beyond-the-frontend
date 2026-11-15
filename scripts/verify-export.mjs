import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';
import { parseBasePath } from '../site/config/deployment.ts';
import { themeStorageKey } from '../site/theme/runtime.ts';

const output = fileURLToPath(new URL('../site/out/', import.meta.url));
const basePath = parseBasePath(process.env.NEXT_PUBLIC_BASE_PATH);
const pages = [
  ['index.html', 'en', 'Beyond the Frontend: It Works. Now What?', '/zh/'],
  ['read/index.html', 'en', 'Chapters | Beyond the Frontend', '/zh/read/'],
  ['zh/index.html', 'zh-CN', '前端往后看：能跑，然后呢？', '/'],
  ['zh/read/index.html', 'zh-CN', '章节目录 | Beyond the Frontend', '/read/'],
  ['404.html', 'en', 'Page not found | Beyond the Frontend', '/zh/'],
];
let checked = 0;

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)]
    .map(([, name, value]) => [name.toLowerCase(), value.replaceAll('&amp;', '&')]));
}

for (const [page, language, title, alternatePath] of pages) {
  const html = await readFile(path.join(output, page), 'utf8');
  assert.ok(html.includes(`<html lang="${language}"`), `${page}: incorrect document language`);
  assert.ok(html.includes(`<title>${title}</title>`), `${page}: incorrect page title`);
  assert.match(html, /id="main"/, `${page}: missing skip-link target`);
  assert.match(html, /beyond-the-frontend\/issues/, `${page}: outdated issue URL`);

  // Exercise the actual emitted script, including any production bundler changes.
  const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1] || '';
  const bootstrap = head.match(/<script\b[^>]*id="btf-theme-bootstrap"[^>]*>([\s\S]*?)<\/script>/)?.[1];
  assert.ok(bootstrap, `${page}: missing pre-body theme bootstrap`);
  for (const [stored, dark, expected] of [[null, true, 'dark'], ['light', true, 'light'], ['dark', false, 'dark']]) {
    const dataset = {};
    const window = {
      localStorage: { getItem: key => { assert.equal(key, themeStorageKey); return stored; } },
      matchMedia: () => ({ matches: dark, addEventListener() {} }),
      addEventListener() {},
    };
    vm.runInNewContext(bootstrap, { window, document: { documentElement: { dataset } } }, { timeout: 1000 });
    assert.equal(dataset.theme, expected, `${page}: emitted theme script has incorrect initial state`);
  }

  const alternateLanguage = language === 'en' ? 'zh' : 'en';
  const links = [...html.matchAll(/<a\b[^>]*>/g)].map(([tag]) => attributes(tag));
  assert.ok(links.some(link => link.hreflang === alternateLanguage && link.href === `${basePath}${alternatePath}`),
    `${page}: incorrect language-switch destination`);

  if (page === '404.html') {
    assert.ok(html.includes('Page not found') && html.includes('这一页还没找到'), '404 must offer both languages');
    const metadata = [...html.matchAll(/<meta\b[^>]*>/g)].map(([tag]) => attributes(tag));
    assert.ok(metadata.some(meta => meta.name === 'robots' && /\bnoindex\b/.test(meta.content || '')),
      '404 must be excluded from search-engine indexing');
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
