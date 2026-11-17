import assert from 'node:assert/strict';
import test from 'node:test';
import { loadBook } from '../site/content/load-book.ts';
import { buildSearchIndex } from '../site/content/build-search-index.ts';
import { normalizeSearch, searchEntries, readSearchIndex } from '../site/content/search.ts';
import { sectionUrl, correctionUrl } from '../site/components/reading/sharing.ts';

const chapters = await loadBook();
const chinese = buildSearchIndex(chapters, 'zh');
const english = buildSearchIndex(chapters, 'en');

test('static indexes contain only approved public sections, real IDs and source revisions', () => {
  assert.equal(chinese.entries.length, 20);
  assert.deepEqual(english.entries, []);
  for (const entry of chinese.entries) {
    const chapter = chapters.find(item => item.entry.id === entry.chapterId);
    assert.ok(chapter);
    assert.equal(entry.sourceHash, chapter.entry.sha256);
    assert.ok(chapter.headingIds.includes(entry.headingId));
    assert.equal(decodeURIComponent(entry.href.split('#')[1]), entry.headingId);
    assert.equal(entry.href.split('#')[0], `/zh/read/${chapter.entry.slug}/`);
    assert.deepEqual(Object.keys(entry).sort(), ['chapterId', 'chapterTitle', 'headingId', 'headingTitle', 'locale', 'sourceHash', 'href', 'text'].sort());
  }
  assert.doesNotMatch(JSON.stringify(chinese), /book\/drafts|docs\/|\.local|待 review|frontmatter/);
  assert.match(JSON.stringify(chinese), /作者：Jason Zhang/);
  assert.deepEqual(readSearchIndex(JSON.parse(JSON.stringify(chinese)), 'zh'), chinese);
});

test('Chinese literal matching ranks the actual heading above incidental body mentions', () => {
  const results = searchEntries(chinese, '状态', 'zh');
  assert.ok(results.length > 1);
  assert.equal(results[0].entry.headingTitle, '状态：我们在描述哪一份事实？');
  assert.equal(results[0].entry.chapterId, 'G01');
  assert.ok(results[0].entry.href.endsWith('#%E7%8A%B6%E6%80%81%E6%88%91%E4%BB%AC%E5%9C%A8%E6%8F%8F%E8%BF%B0%E5%93%AA%E4%B8%80%E4%BB%BD%E4%BA%8B%E5%AE%9E'));
  const fullHeading = '时间：先发生什么，用户要等到哪里？';
  assert.equal(searchEntries(chinese, fullHeading, 'zh')[0].entry.headingTitle, fullHeading);
  assert.ok(searchEntries(chinese, '报名 数据库', 'zh').length);
  assert.equal(searchEntries(chinese, '不存在的词语', 'zh').length, 0);
});

test('queries normalize Unicode, case and whitespace while keeping literal punctuation', () => {
  assert.equal(normalizeSearch('  ＡＩ\t 产品\n '), 'ai 产品');
  assert.deepEqual(searchEntries(chinese, 'HTTP', 'zh'), searchEntries(chinese, '  ｈｔｔｐ  ', 'zh'));
  assert.ok(searchEntries(chinese, '202 Accepted', 'zh').length);
  const entry = { ...chinese.entries[0], headingTitle: 'Café a+b', text: 'Literal [x].* and a+b; not axxb.', href: '/zh/read/before-we-start/#test', headingId: 'test' };
  const index = { version: 1, locale: 'zh', entries: [entry] };
  assert.equal(searchEntries(index, 'cafe\u0301', 'zh').length, 1);
  assert.equal(searchEntries(index, '[x].*', 'zh').length, 1);
  assert.equal(searchEntries(index, 'a+b', 'zh').length, 1);
  assert.equal(searchEntries(index, 'a.*b', 'zh').length, 0);
  for (const query of ['', ' \n\t ']) assert.deepEqual(searchEntries(chinese, query, 'zh'), []);
});

test('language boundaries never fall back to a different corpus', () => {
  assert.deepEqual(searchEntries(chinese, '状态', 'en'), []);
  assert.deepEqual(searchEntries(english, '状态', 'en'), []);
  assert.deepEqual(searchEntries({ ...chinese, entries: chinese.entries.map(entry => ({ ...entry, locale: 'en' })) }, '状态', 'zh'), []);
  assert.throws(() => readSearchIndex(chinese, 'en'));
  assert.throws(() => readSearchIndex({ ...english, entries: [{ ...chinese.entries[0], locale: 'en' }] }, 'en'), /English corpus/);
});

test('ranking ties are stable and excerpts stay bounded near a real body match', () => {
  const entries = [0, 1, 2].map(number => ({ ...chinese.entries[0], chapterId: String(number), chapterTitle: 'Fixture', headingTitle: 'Section', text: '前文'.repeat(80) + 'needle' + '后文'.repeat(80) }));
  const results = searchEntries({ version: 1, locale: 'zh', entries }, 'needle', 'zh');
  assert.deepEqual(results.map(result => result.entry.chapterId), ['0', '1', '2']);
  assert.ok(results[0].excerpt.includes('needle'));
  assert.ok(Array.from(results[0].excerpt).length <= 142);
});

test('malformed, wrong-language or unsafe fetched index data is rejected for retry', () => {
  for (const value of [null, {}, { ...chinese, version: 99 }, { ...chinese, entries: 'wrong' },
    { ...chinese, entries: [{ ...chinese.entries[0], href: 'javascript:alert(1)' }] },
    { ...chinese, entries: [{ ...chinese.entries[0], sourceHash: 'unreviewed' }] },
    { ...chinese, entries: [{ ...chinese.entries[0], headingId: 'different' }] },
  ]) assert.throws(() => readSearchIndex(value, 'zh'));
});

test('section sharing uses actual origin, deployment prefix and encoded heading without query leakage', () => {
  for (const prefix of ['', '/vibe-coding-then-what']) {
    const url = sectionUrl(`http://localhost:44771${prefix}/zh/read/a-page-and-a-system/?private=discard#old`, '状态 / API & 数据？');
    const parsed = new URL(url);
    assert.equal(parsed.origin, 'http://localhost:44771');
    assert.equal(parsed.pathname, `${prefix}/zh/read/a-page-and-a-system/`);
    assert.equal(parsed.search, '');
    assert.equal(decodeURIComponent(parsed.hash.slice(1)), '状态 / API & 数据？');
    assert.ok(!url.includes('%25E7'));
  }
  assert.throws(() => sectionUrl('file:///tmp/example.html', 'heading'));
});

test('correction drafts encode only explicit public chapter, heading, revision and real URL context', () => {
  const context = { chapterId: 'G01', chapterTitle: '标题 & question?', sourceHash: chapters[1].entry.sha256 };
  const location = sectionUrl('https://preview.example/reading/zh/read/a-page-and-a-system/?discard=yes', '状态？');
  const url = new URL(correctionUrl(context, '状态？ & API', location));
  assert.equal(url.origin + url.pathname, 'https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/issues/new');
  assert.equal(url.searchParams.get('title'), '纠错：标题 & question? · 状态？ & API');
  const body = url.searchParams.get('body');
  for (const expected of [context.chapterTitle, context.chapterId, context.sourceHash, '状态？ & API', location]) assert.ok(body.includes(expected));
  assert.doesNotMatch(body, /private=|discard=|book\/|docs\/|prompt|logs/);
  assert.ok(body.startsWith(`章节：${context.chapterTitle} (${context.chapterId})\n小节：状态？ & API\n链接：${location}\n原稿版本 SHA-256：${context.sourceHash}\n`));
  assert.ok(body.endsWith('建议修改：\n'));
});
