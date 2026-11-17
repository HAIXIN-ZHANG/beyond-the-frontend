import assert from 'node:assert/strict';
import test from 'node:test';
import { request } from 'node:http';
import { mkdtemp, mkdir, writeFile, symlink, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { createStaticPreview } from '../scripts/static-preview.mjs';

function get(server, pathname, method = 'GET') {
  return new Promise((resolve, reject) => {
    const req = request({ host: '127.0.0.1', port: server.address().port, path: pathname, method, agent: false }, response => {
      let body = '';
      response.setEncoding('utf8');
      response.on('data', chunk => { body += chunk; });
      response.on('end', () => resolve({ status: response.statusCode, headers: response.headers, body }));
    });
    req.on('error', reject); req.end();
  });
}

async function fixture(run) {
  const root = await mkdtemp(path.join(tmpdir(), 'vctw-preview-'));
  try {
    const directory = path.join(root, 'out');
    await mkdir(path.join(directory, 'zh'), { recursive: true });
    await writeFile(path.join(directory, 'index.html'), '<h1>Built entry</h1>');
    await writeFile(path.join(directory, '404.html'), '<h1>Built 404</h1>');
    await writeFile(path.join(directory, 'zh/index.html'), '<h1>Chinese entry</h1>');
    await writeFile(path.join(directory, 'data.json'), '{"built":true}');
    await writeFile(path.join(root, 'private.txt'), 'Must stay outside the export');
    await symlink(path.join(root, 'private.txt'), path.join(directory, 'escape.txt'));
    await run(directory);
  } finally { await rm(root, { recursive: true, force: true }); }
}

test('preview serves only the exact built root/prefix, JSON, HEAD and actual 404', async () => fixture(async directory => {
  for (const basePath of ['', '/vibe-coding-then-what']) {
    const server = await createStaticPreview({ directory, basePath, port: 0 });
    try {
      const home = await get(server, `${basePath}/?test=1`);
      assert.equal(home.status, 200); assert.match(home.body, /Built entry/);
      assert.match((await get(server, `${basePath}/zh/`)).body, /Chinese entry/);
      const json = await get(server, `${basePath}/data.json`);
      assert.equal(json.status, 200); assert.match(json.headers['content-type'], /application\/json/);
      const head = await get(server, `${basePath}/data.json`, 'HEAD');
      assert.equal(head.body, ''); assert.equal(head.headers['content-length'], json.headers['content-length']);
      assert.equal((await get(server, `${basePath}/`, 'POST')).status, 405);
      const missing = await get(server, `${basePath}/absent/`);
      assert.equal(missing.status, 404); assert.match(missing.body, /Built 404/);
      if (basePath) {
        assert.equal((await get(server, '/')).status, 404);
        assert.equal((await get(server, `${basePath}-other/`)).status, 404);
        const redirect = await get(server, basePath);
        assert.equal(redirect.status, 308); assert.equal(redirect.headers.location, `${basePath}/`);
      }
    } finally { await new Promise(resolve => server.close(resolve)); }
  }
}));

test('preview rejects encoded/raw traversal, malformed paths and escaping symlinks', async () => fixture(async directory => {
  const server = await createStaticPreview({ directory, basePath: '/book', port: 0 });
  try {
    for (const pathname of ['/book/../private.txt', '/book/%2e%2e/private.txt', '/book/%2e%2e%2fprivate.txt', '/book/%5c..%5cprivate.txt', '/book/%00', '/book/%zz', '//outside/path']) {
      const response = await get(server, pathname);
      assert.equal(response.status, 400, pathname);
      assert.doesNotMatch(response.body, /Must stay outside/);
    }
    const escaped = await get(server, '/book/escape.txt');
    assert.equal(escaped.status, 404); assert.doesNotMatch(escaped.body, /Must stay outside/);
    assert.equal((await get(server, '/book/zh/absent/')).status, 404);
  } finally { await new Promise(resolve => server.close(resolve)); }
}));

test('preview refuses to start without a complete built export', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'vctw-missing-export-'));
  try { await assert.rejects(createStaticPreview({ directory: root, port: 0 }), /ENOENT/); }
  finally { await rm(root, { recursive: true, force: true }); }
});
