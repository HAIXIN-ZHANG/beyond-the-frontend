import assert from 'node:assert/strict';
import test from 'node:test';
import { parseBasePath } from '../site/config/deployment.ts';

test('root and repository deployments are accepted', () => {
  assert.equal(parseBasePath(), '');
  assert.equal(parseBasePath('/'), '');
  assert.equal(parseBasePath('/beyond-the-frontend'), '/beyond-the-frontend');
  assert.equal(parseBasePath('/books/frontend'), '/books/frontend');
});

test('ambiguous or unsafe deployment prefixes fail before the build', () => {
  for (const value of [
    'beyond-the-frontend', '/book/', '//host', 'https://example.com',
    '/book/../private', '/book%2fprivate', '/book?draft=1', '/book#intro',
    '/book\\private', '/book name',
  ]) {
    assert.throws(() => parseBasePath(value), /NEXT_PUBLIC_BASE_PATH/, value);
  }
});
