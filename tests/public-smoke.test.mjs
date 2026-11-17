import assert from 'node:assert/strict';
import test from 'node:test';
import { createServer } from 'node:http';
import { createReleaseMetadata, pagesBasePath } from '../scripts/release-metadata.mjs';
import { smokePublicRelease, validatePublicTarget } from '../scripts/public-smoke.mjs';

const commit = 'd390f53420f88deda0627328d140be058a91feac';

async function fixture(change, run) {
  const metadata = createReleaseMetadata(commit, pagesBasePath);
  const documents = new Map();
  function set(route, body, type = 'text/html', status = 200) { documents.set(`${pagesBasePath}${route}`, { body, type, status }); }
  set('/release.json', JSON.stringify(metadata), 'application/json');
  for (const route of ['/', '/read/', '/zh/', '/zh/read/', ...metadata.chapters.map(chapter => chapter.route)]) {
    const chapter = metadata.chapters.find(item => item.route === route);
    set(route, `<html lang="${route.startsWith('/zh/') ? 'zh-CN' : 'en'}"><link rel="stylesheet" href="${pagesBasePath}/style.css"><script src="${pagesBasePath}/app.js"></script><p>English chapters are not available yet</p>${chapter ? `<article data-source-sha256="${chapter.sha256}">中文</article>` : ''}</html>`);
  }
  set('/style.css', 'body{color:black}', 'text/css');
  set('/app.js', 'console.log("public")', 'text/javascript');
  set('/search-index/en.json', JSON.stringify({ version: 1, locale: 'en', entries: [] }), 'application/json');
  set('/search-index/zh.json', JSON.stringify({ version: 1, locale: 'zh', entries: metadata.chapters.map(chapter => ({
    chapterId: chapter.id, chapterTitle: '中文', headingId: 'heading', headingTitle: 'heading',
    locale: 'zh', sourceHash: chapter.sha256, href: `${chapter.route}#heading`, text: '正文',
  })) }), 'application/json');
  set('/__release-smoke-missing__/', '<meta name="robots" content="noindex"><h1>Page not found</h1><p>这一页还没找到</p>', 'text/html', 404);
  change(documents);
  const server = createServer((request, response) => {
    const item = documents.get(new URL(request.url, 'http://127.0.0.1').pathname);
    response.writeHead(item?.status ?? 404, { 'Content-Type': item?.type ?? 'text/html' });
    response.end(item?.body ?? 'missing');
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try { await run(`http://127.0.0.1:${server.address().port}${pagesBasePath}/`); }
  finally { await new Promise(resolve => server.close(resolve)); }
}

test('public smoke defaults to loopback and rejects alternate origins, prefixes and credentials', () => {
  assert.equal(validatePublicTarget().hostname, '127.0.0.1');
  assert.equal(validatePublicTarget(`https://haixin-zhang.github.io${pagesBasePath}/`).protocol, 'https:');
  for (const url of [
    'https://example.com/vibe-coding-then-what/', 'http://haixin-zhang.github.io/vibe-coding-then-what/',
    'http://127.0.0.1:4179/', `http://user@127.0.0.1${pagesBasePath}/`,
    `http://127.0.0.1${pagesBasePath}/?secret=1`, `http://127.0.0.1${pagesBasePath}/#fragment`,
  ]) assert.throws(() => validatePublicTarget(url));
});

test('public smoke checks identity, actual routes/assets, approved Chinese search and real 404 over HTTP', async () => {
  await fixture(() => {}, async url => {
    const result = await smokePublicRelease({ url, commit });
    const routes = 4 + createReleaseMetadata(commit, pagesBasePath).chapters.length;
    assert.equal(result.commit, commit); assert.equal(result.routes, routes); assert.equal(result.assets, 2);
    // Metadata + reading routes + two assets + two indexes + actual 404.
    assert.equal(result.requests, routes + 6);
    await assert.rejects(smokePublicRelease({ url, commit: 'a'.repeat(40) }), /identity/);
  });
});

test('public smoke detects missing assets, prefix leaks, soft 404, unreviewed search and fabricated English', async () => {
  const alterations = [
    docs => docs.delete(`${pagesBasePath}/app.js`),
    docs => { const doc = docs.get(`${pagesBasePath}/`); doc.body = doc.body.replace(`${pagesBasePath}/style.css`, '/style.css'); },
    docs => { docs.get(`${pagesBasePath}/__release-smoke-missing__/`).status = 200; },
    docs => { const doc = docs.get(`${pagesBasePath}/search-index/zh.json`); const json = JSON.parse(doc.body); json.entries[0].sourceHash = 'a'.repeat(64); doc.body = JSON.stringify(json); },
    docs => { const doc = docs.get(`${pagesBasePath}/search-index/en.json`); doc.body = JSON.stringify({ version: 1, locale: 'en', entries: [{}] }); },
    docs => { const doc = docs.get(`${pagesBasePath}/read/`); doc.body = doc.body.replace('English chapters are not available yet', 'Ready'); },
    docs => { docs.get(`${pagesBasePath}/read/`).body += `<a href="${pagesBasePath}/read/invented/">invented</a>`; },
  ];
  for (const change of alterations) await fixture(change, async url => {
    await assert.rejects(smokePublicRelease({ url, commit }));
  });
});
