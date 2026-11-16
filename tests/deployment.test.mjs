import assert from 'node:assert/strict';
import test from 'node:test';
import { parseBasePath, withBasePath } from '../site/config/deployment.ts';

test('root and repository deployments are accepted', () => {
  assert.equal(parseBasePath(), '');
  assert.equal(parseBasePath('/'), '');
  assert.equal(parseBasePath('/vibe-coding-then-what'), '/vibe-coding-then-what');
  assert.equal(parseBasePath('/books/frontend'), '/books/frontend');
});

test('ambiguous or unsafe deployment prefixes fail before the build', () => {
  for (const value of [
    'vibe-coding-then-what', '/book/', '//host', 'https://example.com',
    '/book/../private', '/book%2fprivate', '/book?draft=1', '/book#intro',
    '/book\\private', '/book name',
  ]) {
    assert.throws(() => parseBasePath(value), /NEXT_PUBLIC_BASE_PATH/, value);
  }
});

test('literal search URLs stay on the same origin for root aliases and nested deployments', () => {
  const origin = 'https://reader.example';
  for (const prefix of [undefined, '', '/', '/vibe-coding-then-what', '/books/frontend']) {
    for (const pathname of ['/search-index/zh.json', '/zh/read/a-page-and-a-system/#%E7%8A%B6%E6%80%81']) {
      const href = withBasePath(pathname, prefix);
      const resolved = new URL(href, `${origin}/zh/read/`);
      assert.equal(resolved.origin, origin);
      assert.equal(resolved.pathname, `${parseBasePath(prefix)}${pathname.split('#')[0]}`);
      assert.equal(resolved.hash, pathname.includes('#') ? '#%E7%8A%B6%E6%80%81' : '');
      assert.ok(!href.startsWith('//'));
    }
  }
  assert.throws(() => withBasePath('/search-index/zh.json', '//outside.example'), /NEXT_PUBLIC_BASE_PATH/);
});
