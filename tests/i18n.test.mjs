import assert from 'node:assert/strict';
import test from 'node:test';
import { alternateLocalePath, defaultLocale, getMessages } from '../site/config/i18n.ts';
import { chapterManifest } from '../site/content/manifest.ts';

test('localized book identity and English catalog labels preserve the Chinese-only publication boundary', () => {
  assert.equal(getMessages('en').title, 'Vibe Coding, Then What?');
  assert.equal(getMessages('zh').title, 'Vibe Coding 之后：能跑，然后呢？');
  assert.deepEqual(Object.keys(getMessages('en').chapterLabels), chapterManifest.map(chapter => chapter.id));
  for (const chapter of chapterManifest) {
    assert.equal(chapter.locale, 'zh');
    assert.ok(getMessages('en').chapterLabels[chapter.id].length > 0);
    assert.doesNotMatch(getMessages('en').chapterLabels[chapter.id], /\p{Script=Han}/u);
    assert.equal(getMessages('zh').chapterLabels[chapter.id] ?? chapter.title, chapter.title);
  }
});

test('English is default and unknown languages are rejected', () => {
  assert.equal(defaultLocale, 'en');
  assert.equal(getMessages().lang, 'en');
  assert.equal(getMessages('zh').lang, 'zh-CN');
  assert.throws(() => getMessages('fr'), /Unsupported locale/);
});

test('language switching preserves the current page without doubling the deployment prefix', () => {
  const cases = [
    ['/', 'en', '', '/zh/'],
    ['/read/', 'en', '', '/zh/read/'],
    ['/zh/', 'zh', '', '/'],
    ['/zh/read/', 'zh', '', '/read/'],
    ['/vibe-coding-then-what/', 'en', '/vibe-coding-then-what', '/zh/'],
    ['/vibe-coding-then-what/zh/', 'zh', '/vibe-coding-then-what', '/'],
    ['/vibe-coding-then-what/read/', 'en', '/vibe-coding-then-what', '/zh/read/'],
    ['/vibe-coding-then-what/zh/read/', 'zh', '/vibe-coding-then-what', '/read/'],
  ];
  for (const [pathname, locale, basePath, expected] of cases) {
    assert.equal(alternateLocalePath(pathname, locale, basePath), expected);
  }
});
