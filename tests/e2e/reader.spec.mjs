import { test as base, expect } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import { chapterManifest, chapterPath } from '../../site/content/manifest.ts';
import { withBasePath } from '../../site/config/deployment.ts';
import { getMessages } from '../../site/config/i18n.ts';

const at = pathname => withBasePath(pathname, process.env.NEXT_PUBLIC_BASE_PATH);
const [opening, g01] = chapterManifest;

const test = base.extend({
  health: [async ({ page }, use, testInfo) => {
    const pageErrors = [], consoleErrors = [], expected = new Set();
    page.on('pageerror', error => pageErrors.push(error.message));
    page.on('console', message => {
      if (message.type() === 'error') consoleErrors.push({ text: message.text(), url: message.location().url });
    });
    await use({ allowHttpFailure: (url, status) => expected.add(`${url}|${status}`) });
    const unexpected = consoleErrors.filter(error => {
      const status = /^Failed to load resource: the server responded with a status of (\d+) \([^)]*\)$/.exec(error.text)?.[1];
      return !status || !expected.has(`${error.url}|${status}`);
    });
    if (pageErrors.length || consoleErrors.length) await testInfo.attach('browser-errors', {
      body: JSON.stringify({ pageErrors, consoleErrors, expectedHttpFailures: [...expected] }, null, 2), contentType: 'application/json',
    });
    expect(pageErrors, 'unexpected uncaught browser errors').toEqual([]);
    expect(unexpected, 'unexpected browser console errors').toEqual([]);
  }, { auto: true }],
});

async function openSearch(page) {
  await page.getByRole('button', { name: '搜索章节', exact: true }).click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  return dialog;
}

test('localized chrome and matching page roles remain coherent across languages and viewport sizes', async ({ page }) => {
  async function roles() {
    return page.evaluate(() => Object.fromEntries(Object.entries({
      header: '.site-header', brand: '.wordmark', content: '.book-intro, .reading-index, .chapter-column',
      title: 'h1', body: 'body', search: '.search-trigger', nav: '.site-header nav',
    }).map(([role, selector]) => {
      const element = document.querySelector(selector), style = window.getComputedStyle(element), rect = element.getBoundingClientRect();
      return [role, {
        left: rect.left, width: rect.width, height: rect.height,
        type: [style.fontFamily, style.fontSize, style.fontWeight, style.lineHeight, style.letterSpacing],
      }];
    })));
  }
  for (const width of [1440, 320]) {
    await page.setViewportSize({ width, height: 900 });
    const snapshots = {};
    for (const locale of ['en', 'zh']) for (const kind of ['home', 'index']) {
      const route = `${locale === 'zh' ? '/zh' : ''}/${kind === 'index' ? 'read/' : ''}`;
      const messages = getMessages(locale);
      await page.goto(at(route));
      await expect(page).toHaveTitle(kind === 'home' ? messages.title : `${messages.contents} | ${messages.title}`);
      await expect(page.locator('.wordmark')).toHaveText(messages.title);
      await expect(page.locator('.wordmark')).toHaveAttribute('aria-label', `${messages.title} · ${messages.home}`);
      await expect(page.locator('.wordmark')).toHaveAttribute('lang', messages.lang);
      const brandGeometry = await page.locator('.wordmark').evaluate(element => {
        const bounds = element.getBoundingClientRect();
        const phraseLines = [...element.children].map(phrase => {
          const range = document.createRange(); range.selectNodeContents(phrase);
          return new Set([...range.getClientRects()].map(rect => rect.top)).size;
        });
        return { height: bounds.height, phraseLines };
      });
      expect(brandGeometry.height).toBeGreaterThanOrEqual(44);
      expect(brandGeometry.phraseLines, 'book-title phrases must not split internally').toEqual([1, 1]);
      await expect(page.getByRole('navigation', { name: messages.navigation, exact: true })).toBeVisible();
      await expect(page.getByRole('button', { name: locale === 'en' ? 'Search chapters' : '搜索章节', exact: true })).toBeVisible();
      if (kind === 'index') {
        const links = page.locator('.available-chapters a');
        await expect(links).toHaveCount(chapterManifest.length);
        for (const [index, chapter] of chapterManifest.entries()) {
          await expect(links.nth(index)).toHaveText(messages.chapterLabels[chapter.id] ?? chapter.title);
          await expect(links.nth(index)).toHaveAttribute('href', at(chapterPath(chapter)));
          await expect(links.nth(index)).toHaveAttribute('hreflang', 'zh');
          await expect(links.nth(index)).toHaveAttribute('lang', messages.lang);
        }
        if (locale === 'en') await expect(page.locator('.reading-index')).toContainText(messages.englishUnavailable);
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
      snapshots[`${locale}-${kind}`] = await roles();
    }
    for (const kind of ['home', 'index']) {
      const en = snapshots[`en-${kind}`], zh = snapshots[`zh-${kind}`];
      for (const role of ['brand', 'title', 'body', 'search']) expect(zh[role].type, `${width}px ${kind} ${role} typography`).toEqual(en[role].type);
      for (const role of ['header', 'content']) {
        expect(zh[role].left, `${width}px ${kind} ${role} left`).toBeCloseTo(en[role].left, 0);
        expect(zh[role].width, `${width}px ${kind} ${role} width`).toBeCloseTo(en[role].width, 0);
      }
      expect(zh.header.height, `${width}px ${kind} shared header height`).toBeCloseTo(en.header.height, 0);
    }
    await page.goto(at(chapterPath(g01)));
    await expect(page).toHaveTitle(`${g01.title} | ${getMessages('zh').title}`);
    const reading = await roles(), index = snapshots['zh-index'];
    expect(reading.header.left).toBeCloseTo(index.header.left, 0);
    expect(reading.header.width).toBeCloseTo(index.header.width, 0);
    expect(reading.brand.type).toEqual(index.brand.type);
    expect(reading.content.width).toBeCloseTo(index.content.width, 0);
  }
});

test('entry, truthful availability, approved chapters, previous/next and static 404', async ({ page, request }) => {
  await page.goto(at('/'));
  await expect(page).toHaveTitle('Vibe Coding, Then What?');
  await page.getByRole('link', { name: /Browse chapters/ }).click();
  await expect(page).toHaveURL(new RegExp(`${at('/read/')}$`));
  await expect(page.getByText('English chapters are not available yet.', { exact: false })).toBeVisible();
  await page.locator('.available-chapters').getByRole('link', { name: getMessages('en').chapterLabels[opening.id], exact: true }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(opening.title);
  await expect(page.locator('article')).toHaveAttribute('data-source-sha256', opening.sha256);
  await expect(page.locator('article')).not.toContainText('中文初稿 · 待 review');
  await page.locator('.chapter-pagination a[rel="next"]').click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(g01.title);
  await expect(page.locator('article')).toHaveAttribute('data-source-sha256', g01.sha256);
  await expect(page.locator('.chapter-pagination a[rel="next"]')).toHaveCount(0);
  await page.locator('.chapter-pagination a[rel="prev"]').click();
  await expect(page).toHaveURL(new RegExp(`${at(chapterPath(opening))}$`));
  await page.getByRole('link', { name: 'Switch to English', exact: true }).click();
  await expect(page).toHaveURL(new RegExp(`${at('/read/')}$`));
  const missing = await request.get(at('/not-a-reviewed-chapter/'));
  expect(missing.status()).toBe(404);
  const body = await missing.text();
  expect(body).toContain('Page not found'); expect(body).toContain('这一页还没找到');
});

test('Chinese search uses the real prefixed resource, native heading focus and Escape return', async ({ page, baseURL }) => {
  await page.goto(at('/zh/read/'));
  const fetched = page.waitForResponse(response => response.url() === new URL(at('/search-index/zh.json'), baseURL).href);
  const dialog = await openSearch(page);
  const response = await fetched;
  expect(response.status()).toBe(200);
  const index = await response.json();
  expect(index.locale).toBe('zh'); expect(index.entries.length).toBeGreaterThan(0);
  expect(index.entries.every(entry => chapterManifest.some(chapter => chapter.id === entry.chapterId && chapter.sha256 === entry.sourceHash))).toBe(true);
  await dialog.getByRole('searchbox').fill('状态');
  const first = dialog.locator('.search-results a').first();
  await expect(first).toBeVisible();
  const destination = new URL(await first.getAttribute('href'), page.url());
  expect(destination.origin).toBe(new URL(baseURL).origin);
  expect(destination.pathname).toBe(at(chapterPath(g01)));
  const headingId = decodeURIComponent(destination.hash.slice(1));
  expect(index.entries.some(entry => entry.headingId === headingId && entry.chapterId === g01.id)).toBe(true);
  await dialog.getByRole('searchbox').press('Enter');
  await expect(page).toHaveURL(destination.href);
  await expect(page.locator(`[id="${headingId}"]`)).toBeFocused();
  await expect(page.locator('dialog')).not.toBeVisible();
  const reopened = await openSearch(page);
  await reopened.getByRole('searchbox').fill('报名');
  await reopened.getByRole('searchbox').press('Escape');
  await expect(page.locator('.search-trigger')).toBeFocused();
  await openSearch(page);
  await expect(page.getByRole('searchbox')).toHaveValue('报名');
});

test('actual search failure/retry retains the query through loading and error', async ({ page, baseURL, health }) => {
  const url = new URL(at('/search-index/zh.json'), baseURL).href;
  let release, calls = 0;
  const gate = new Promise(resolve => { release = resolve; });
  health.allowHttpFailure(url, 503);
  await page.route(url, async route => {
    if (++calls === 1) { await gate; await route.fulfill({ status: 503, body: 'Temporary search failure' }); }
    else await route.continue();
  });
  try {
    await page.goto(at('/zh/read/'));
    const dialog = await openSearch(page);
    await dialog.getByRole('searchbox').fill('状态');
    await expect(dialog.locator('.search-feedback')).toHaveAttribute('aria-busy', 'true');
    release();
    await expect(dialog.getByRole('status')).toHaveText('搜索暂时不可用');
    await expect(dialog.getByRole('searchbox')).toHaveValue('状态');
    await dialog.getByRole('button', { name: '重试', exact: true }).click();
    await expect(dialog.locator('.search-results a').first()).toBeVisible();
    await expect(dialog.getByRole('searchbox')).toHaveValue('状态');
    expect(calls).toBe(2);
  } finally { release(); }
});

test('English search is honest and never fetches another-language corpus', async ({ page }) => {
  const resources = [];
  page.on('request', request => { if (request.url().includes('/search-index/')) resources.push(request.url()); });
  await page.goto(at('/read/'));
  await page.getByRole('button', { name: 'Search chapters', exact: true }).click();
  const dialog = page.getByRole('dialog');
  await expect(dialog.getByRole('status')).toHaveText('No English chapters are available to search yet.');
  await expect(dialog.locator('.search-results a')).toHaveCount(0);
  expect(resources).toEqual([]);
  await dialog.getByRole('link', { name: /Browse Chinese chapters/ }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('章节目录');
  await expect(page).toHaveURL(new RegExp(`${at('/zh/read/')}$`));
});

async function chooseAppearance(page, label) {
  await page.getByRole('button', { name: /^外观:/ }).click();
  await page.getByRole('radio', { name: label, exact: true }).check();
}

test('appearance separates System/Day/Night and persists explicit choices across refresh', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto(at(chapterPath(g01)));
  await expect(page.locator('html')).toHaveAttribute('data-theme-preference', 'system');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  const dialog = await openSearch(page);
  await dialog.getByRole('searchbox').fill('状态');
  const result = dialog.locator('.search-results a').first();
  await expect(result).toBeVisible();
  const destination = new URL(await result.getAttribute('href'), page.url());
  await dialog.getByRole('searchbox').press('Enter');
  await expect(page).toHaveURL(destination.href);
  await expect(page.locator(`[id="${decodeURIComponent(destination.hash.slice(1))}"]`)).toBeFocused();
  expect(await page.locator('.appearance-trigger').evaluate(element => element.getBoundingClientRect().bottom)).toBeLessThan(0);
  // Clicking the offscreen header scrolls it into view before opening its popover.
  await chooseAppearance(page, '日间');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme-preference', 'light');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await chooseAppearance(page, '夜间');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme-preference', 'dark');
  await chooseAppearance(page, '跟随系统');
  expect(await page.evaluate(() => window.localStorage.getItem('btf.theme'))).toBeNull();
  await page.emulateMedia({ colorScheme: 'light' });
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await expect(page.locator('html')).toHaveAttribute('data-theme-preference', 'system');
  await page.getByRole('button', { name: /^外观:/ }).click();
  await expect(page.getByRole('radio', { name: '跟随系统', exact: true })).toBeFocused();
  await page.mouse.move(20, 400);
  await page.mouse.wheel(0, 400);
  await expect(page.locator('.appearance-panel')).not.toBeVisible();
  await expect(page.locator('.appearance-trigger')).toBeFocused();
  expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(0);
  await page.getByRole('button', { name: /^外观:/ }).click();
  await expect(page.locator('.appearance-panel')).toBeVisible();
  await page.setViewportSize({ width: 320, height: 900 });
  await expect(page.locator('.appearance-panel')).not.toBeVisible();
  await expect(page.locator('.appearance-trigger')).toBeFocused();
  await chooseAppearance(page, '夜间');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('denied storage retains usable System fallback and a session-only choice', async ({ page }) => {
  await page.addInitScript(() => Object.defineProperty(window, 'localStorage', {
    configurable: true, get() { throw new Error('Test storage denial'); },
  }));
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto(at('/zh/read/'));
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await chooseAppearance(page, '日间');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme-preference', 'system');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('copy denial reveals a real manual URL and correction is deliberate preview only', async ({ page, context, baseURL }) => {
  await page.addInitScript(() => Object.defineProperty(window.navigator, 'clipboard', {
    configurable: true, value: { async writeText() { throw new Error('Test clipboard denial'); } },
  }));
  const external = [];
  page.on('request', request => { if (new URL(request.url()).origin === 'https://github.com') external.push(request.url()); });
  await page.goto(`${at(chapterPath(g01))}?discard=private#old`);
  const actions = page.locator('.section-actions').nth(1);
  const headingId = await actions.getAttribute('data-heading-id');
  await actions.locator('summary').click();
  await actions.getByRole('button', { name: '复制本节链接', exact: true }).click();
  const expected = new URL(at(chapterPath(g01)), baseURL); expected.hash = encodeURIComponent(headingId);
  await expect(actions.getByRole('textbox', { name: '本节链接', exact: true })).toHaveValue(expected.href);
  await expect(actions.getByRole('status')).toContainText('无法自动复制');
  await expect(actions.locator('.correction-preview')).toHaveCount(0);
  await actions.getByRole('button', { name: '查看纠错信息', exact: true }).click();
  await expect(actions.locator('.correction-preview')).toContainText(g01.sha256);
  const issue = new URL(await actions.getByRole('link', { name: /在 GitHub 查看并编辑草稿/ }).getAttribute('href'));
  expect(issue.origin + issue.pathname).toBe('https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/issues/new');
  expect(issue.searchParams.get('body')).toContain(expected.href);
  expect(issue.searchParams.get('body')).toContain(g01.sha256);
  expect(issue.searchParams.get('body')).not.toContain('discard=private');
  expect(context.pages()).toHaveLength(1); expect(external).toEqual([]);
});

function tableGeometry(elements) {
  return elements.map(element => {
    const bounds = element.getBoundingClientRect();
    return {
      left: bounds.left, right: bounds.right, viewport: window.innerWidth,
      clientWidth: element.clientWidth, scrollWidth: element.scrollWidth, scrollLeft: element.scrollLeft,
      overflowX: window.getComputedStyle(element).overflowX,
    };
  });
}

async function attachGeometry(testInfo, name, geometry) {
  await mkdir(testInfo.outputDir, { recursive: true });
  const file = testInfo.outputPath(`${name}.json`);
  await writeFile(file, JSON.stringify(geometry, null, 2));
  await testInfo.attach(name, { path: file, contentType: 'application/json' });
}

test('narrow keyboard navigation bounds real tables and preserves local code overflow', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto(at(chapterPath(g01)));
  const skip = page.getByRole('link', { name: '跳到正文', exact: true });
  await skip.focus(); await expect(skip).toBeInViewport();
  expect(await skip.evaluate(element => window.getComputedStyle(element).outlineStyle)).not.toBe('none');
  await skip.press('Enter'); await expect(page.locator('main')).toBeFocused();
  const summary = page.locator('.mobile-book-navigation summary');
  await summary.focus(); await summary.press('Enter');
  const details = page.locator('.mobile-book-navigation details');
  await expect(details).toHaveAttribute('open', '');
  await page.keyboard.press('Tab');
  await expect(details.getByRole('link').first()).toBeFocused();
  await page.keyboard.press('Escape'); await expect(summary).toBeFocused();
  await expect(details).not.toHaveAttribute('open', '');
  const code = page.locator('article pre').first();
  await code.focus(); await expect(code).toBeFocused();
  const table = page.locator('article [role="region"]').first();
  await table.focus(); await expect(table).toBeFocused();
  expect(await page.locator('article pre').evaluateAll(elements => elements.some(element => element.scrollWidth > element.clientWidth))).toBe(true);
  const geometry = await page.locator('article [role="region"]').evaluateAll(tableGeometry);
  expect(geometry.length).toBeGreaterThan(0);
  for (const region of geometry) {
    expect(region.clientWidth).toBeGreaterThan(0);
    expect(region.left).toBeGreaterThanOrEqual(-1);
    expect(region.right).toBeLessThanOrEqual(region.viewport + 1);
    expect(region.overflowX).toMatch(/^(auto|scroll)$/);
  }
  await attachGeometry(testInfo, 'real-content-table-geometry', geometry);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
  await page.screenshot({ path: testInfo.outputPath('narrow-reader.png') });
});

test('bounded long inline-code fixture scrolls within the actual rendered table', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto(at(chapterPath(g01)));
  const region = page.locator('article [role="region"]').first();
  await expect(region.locator('table')).toBeVisible();
  const before = await region.evaluate(element => ({ clientWidth: element.clientWidth, scrollWidth: element.scrollWidth }));
  // Test-only content, using the existing table and its real inline-code styling; no width/CSS override.
  const fixtureText = 'RV03_LONG_TABLE_VALUE_'.repeat(32);
  await region.evaluate((element, text) => {
    const cell = element.querySelector('tbody td');
    if (!cell) throw new Error('Approved rendered table cell is missing');
    const code = document.createElement('code'); code.textContent = text;
    cell.replaceChildren(code);
    element.dataset.e2eFixture = 'rv03-bounded-long-inline-code';
    element.scrollLeft = 0;
  }, fixtureText);
  await expect.poll(() => region.evaluate(element => element.scrollWidth - element.clientWidth)).toBeGreaterThan(0);
  await region.focus(); await expect(region).toBeFocused();
  await page.keyboard.press('ArrowRight');
  await expect.poll(() => region.evaluate(element => element.scrollLeft)).toBeGreaterThan(0);
  const [after] = await region.evaluateAll(tableGeometry);
  expect(after.overflowX).toMatch(/^(auto|scroll)$/);
  expect(after.left).toBeGreaterThanOrEqual(-1);
  expect(after.right).toBeLessThanOrEqual(after.viewport + 1);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
  await attachGeometry(testInfo, 'bounded-long-table-geometry', {
    fixture: 'rv03-bounded-long-inline-code', characters: fixtureText.length, before, after,
  });
  await page.screenshot({ path: testInfo.outputPath('long-table-fixture.png') });
});
