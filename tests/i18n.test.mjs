import assert from 'node:assert/strict';
import test from 'node:test';
import { alternateLocalePath, defaultLocale, getMessages } from '../site/config/i18n.ts';

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
    ['/beyond-the-frontend/read/', 'en', '/beyond-the-frontend', '/zh/read/'],
    ['/beyond-the-frontend/zh/read/', 'zh', '/beyond-the-frontend', '/read/'],
  ];
  for (const [pathname, locale, basePath, expected] of cases) {
    assert.equal(alternateLocalePath(pathname, locale, basePath), expected);
  }
});
