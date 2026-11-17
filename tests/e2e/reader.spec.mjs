import { test as base, expect } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import { chapterManifest, chapterPath } from '../../site/content/manifest.ts';
import { withBasePath } from '../../site/config/deployment.ts';
import { getMessages } from '../../site/config/i18n.ts';

const at = pathname => withBasePath(pathname, process.env.NEXT_PUBLIC_BASE_PATH);
const [opening, g01, browserChapter] = chapterManifest;

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

test('every real search match remains available with a truthful count and contextual highlights', async ({ page }) => {
  for (const width of [1440, 390, 320]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto(at('/zh/read/'));
    const dialog = await openSearch(page);
    await dialog.getByRole('searchbox').fill('报名');
    await expect(dialog.getByRole('status')).toHaveText('14 条匹配 · 中文已审阅草稿');
    const links = dialog.locator('.search-results a');
    await expect(links).toHaveCount(14);
    const response = await page.request.get(at('/search-index/zh.json'));
    const index = await response.json();
    const expected = index.entries.filter(entry => `${entry.chapterTitle} ${entry.headingTitle} ${entry.text}`.includes('报名'));
    expect(new Set(await links.evaluateAll(elements => elements.map(element => element.getAttribute('href'))))).toEqual(new Set(expected.map(entry => at(entry.href))));
    for (const item of await dialog.locator('.search-results li').all()) {
      await expect(item.locator('mark').first()).toHaveText('报名');
      expect(Array.from(await item.locator('p').innerText()).length).toBeLessThanOrEqual(66);
    }
    await dialog.getByRole('searchbox').press('ArrowDown');
    for (let index = 1; index < 14; index++) await page.keyboard.press('ArrowDown');
    await expect(links.last()).toBeFocused();
    const destination = new URL(await links.last().getAttribute('href'), page.url());
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(destination.href);
    await expect(page.locator(`[id="${decodeURIComponent(destination.hash.slice(1))}"]`)).toBeFocused();
  }
});

test('mobile outline stays nearby without shifting position on opening or hiding anchor targets', async ({ page }) => {
  for (const width of [390, 320]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto(at(chapterPath(g01)));
    const summary = page.locator('.mobile-outline summary');
    await summary.click();
    const target = page.locator('.mobile-outline').getByRole('link', { name: '时间：先发生什么，用户要等到哪里？', exact: true });
    const hash = decodeURIComponent((await target.getAttribute('href')).slice(1));
    await target.click();
    const heading = page.locator(`[id="${hash}"]`);
    await expect(heading).toBeFocused();
    await expect(summary).toBeInViewport();
    const position = await page.evaluate(() => window.scrollY);
    await summary.focus(); await summary.press('Enter');
    expect(await page.evaluate(() => window.scrollY)).toBe(position);
    await summary.press('Escape');
    await expect(summary).toBeFocused();
    expect(await page.evaluate(() => window.scrollY)).toBe(position);
    const geometry = await page.evaluate(id => ({
      heading: document.getElementById(id).getBoundingClientRect().top,
      toolbar: document.querySelector('.reading-tools').getBoundingClientRect().bottom,
    }), hash);
    expect(geometry.heading).toBeGreaterThanOrEqual(geometry.toolbar);
    await page.locator('.reading-tools').evaluate(element => {
      const samples = [...element.querySelectorAll('summary')].map(summary => ({ summary,
        size: parseFloat(window.getComputedStyle(summary).fontSize), line: parseFloat(window.getComputedStyle(summary).lineHeight) }));
      for (const { summary, size, line } of samples) {
        summary.style.fontSize = `${size * 2}px`; summary.style.lineHeight = `${line * 2}px`;
      }
    });
    await summary.press('Enter');
    await expect(target).toBeVisible();
    await target.focus(); await target.press('Enter');
    await expect(heading).toBeFocused();
    expect(await heading.evaluate(element => element.getBoundingClientRect().top)).toBeGreaterThanOrEqual(
      await page.locator('.reading-tools').evaluate(element => element.getBoundingClientRect().bottom));
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
  }
});

test('both home locales show exactly the approved Chinese reading destinations and current availability', async ({ page }) => {
  for (const locale of ['en', 'zh']) {
    await page.goto(at(locale === 'en' ? '/' : '/zh/'));
    const links = page.locator('.home-chapters a');
    await expect(links).toHaveCount(chapterManifest.length);
    await expect(page.locator('.book-intro > .availability-note')).toHaveText(getMessages(locale).availableNotice(chapterManifest.length));
    for (const [index, chapter] of chapterManifest.entries()) {
      await expect(links.nth(index)).toHaveAttribute('href', at(chapterPath(chapter)));
      await expect(links.nth(index)).toHaveAttribute('hreflang', 'zh');
      await expect(links.nth(index)).toHaveText(getMessages(locale).chapterLabels[chapter.id] ?? chapter.title);
    }
    if (locale === 'en') await expect(page.locator('.home-chapters')).toContainText('English chapters are not available yet.');
    await links.last().click(); await expect(page.locator('article')).toHaveAttribute('data-source-sha256', browserChapter.sha256);
  }
});

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
  for (const width of [1440, 768, 375, 320]) {
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
        await expect(page.locator('.reading-index > .availability-note')).toHaveText(messages.availableNotice(chapterManifest.length));
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
    for (const chapter of [g01, opening]) {
      if (chapter !== g01) await page.goto(at(chapterPath(chapter)));
      const title = page.locator('article h1 .heading-link');
      await expect(title).toHaveText(chapter.title);
      const phraseLines = await title.evaluate(element => {
        const text = element.firstChild, phrases = element.textContent.match(/[^：，。！？]+[：，。！？]?/gu);
        let offset = 0;
        return phrases.map(phrase => {
          const range = document.createRange(); range.setStart(text, offset); offset += phrase.length; range.setEnd(text, offset);
          return { phrase, lines: new Set([...range.getClientRects()].map(rect => rect.top)).size };
        });
      });
      for (const phrase of phraseLines) expect(phrase.lines, `short title phrase ${phrase.phrase}`).toBe(1);
    }
  }
});

test('approved browser chapter renders illustrative source safely and every indexed heading remains reachable', async ({ page, request }, testInfo) => {
  const response = await request.get(at('/search-index/zh.json'));
  expect(response.status()).toBe(200);
  const entries = (await response.json()).entries.filter(entry => entry.chapterId === browserChapter.id);
  expect(entries).toHaveLength(9);
  for (const width of [1440, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(at(chapterPath(browserChapter)));
    await expect(page).toHaveTitle(`${browserChapter.title} | ${getMessages('zh').title}`);
    const article = page.locator('article');
    await expect(article).toHaveAttribute('data-chapter-id', browserChapter.id);
    await expect(article).toHaveAttribute('data-source-sha256', browserChapter.sha256);
    await expect(article.getByRole('heading', { level: 1 })).toHaveText(browserChapter.title);
    await expect(article.locator('pre')).toHaveCount(4);
    await expect(article.locator('table')).toHaveCount(2);
    await expect(article.locator('pre').first()).toContainText('<input id="query" type="search">');
    await expect(article.locator('#query, #search, .course-card')).toHaveCount(0);
    await expect(article.getByRole('link', { name: '返回：一个页面，究竟连着什么？', exact: true }))
      .toHaveAttribute('href', at(chapterPath(g01)));
    await expect(page.locator('.chapter-pagination a[rel="prev"]')).toHaveAttribute('href', at(chapterPath(g01)));
    await expect(page.locator('.chapter-pagination a[rel="next"]')).toHaveCount(0);
    await expect(page.locator('.chapter-pagination')).toContainText('已到当前最后一章');
    for (const [label, theme] of [['日间', 'light'], ['夜间', 'dark']]) {
      await chooseAppearance(page, label);
      await page.reload();
      await expect(page.locator('html')).toHaveAttribute('data-theme', theme);
      await page.screenshot({ path: testInfo.outputPath(`browser-chapter-${width}-${theme}.png`) });
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
    }
    const regions = await article.locator('pre, [role="region"]').evaluateAll(elements => elements.map(element => {
      const rect = element.getBoundingClientRect();
      return { left: rect.left, right: rect.right, viewport: window.innerWidth, width: element.clientWidth, overflow: window.getComputedStyle(element).overflowX };
    }));
    expect(regions).toHaveLength(6);
    for (const region of regions) {
      expect(region.width).toBeGreaterThan(0);
      expect(region.left).toBeGreaterThanOrEqual(0);
      expect(region.right).toBeLessThanOrEqual(region.viewport);
      expect(region.overflow).toMatch(/^(auto|scroll)$/);
    }
    await attachGeometry(testInfo, `browser-content-geometry-${width}`, regions);
    if (width <= 390) {
      const code = article.locator('pre').first(); await code.focus(); await code.press('ArrowRight');
      expect(await code.evaluate(element => element.scrollWidth > element.clientWidth)).toBe(true);
      await expect.poll(() => code.evaluate(element => element.scrollLeft)).toBeGreaterThan(0);
    }
    for (const entry of entries) {
      const dialog = await openSearch(page);
      await dialog.getByRole('searchbox').fill(entry.headingTitle);
      const target = dialog.locator(`.search-results a[href="${at(entry.href)}"]`);
      await expect(target).toHaveCount(1);
      await expect(target.locator('strong')).toHaveText(entry.headingTitle);
      await target.click();
      await expect(page).toHaveURL(new URL(at(entry.href), page.url()).href);
      await expect(page.locator(`[id="${entry.headingId}"]`)).toBeFocused();
    }
    await page.getByRole('link', { name: 'Switch to English', exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`${at('/read/')}$`));
    await expect(page.locator('.reading-index')).toContainText(getMessages('en').englishUnavailable);
    const missingEnglish = await request.get(at('/read/browser-foundations/'));
    expect(missingEnglish.status()).toBe(404);
  }
});

test('enlarged header text wraps controls instead of overlapping intact book-title phrases', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 900 });
  for (const locale of ['en', 'zh']) {
    await page.goto(at(locale === 'zh' ? '/zh/' : '/'));
    // Explicit computed-text enlargement is a text stress test, not native browser zoom.
    await page.locator('header').evaluate(header => {
      const samples = [...header.querySelectorAll('*')].map(element => {
        const style = window.getComputedStyle(element);
        return { element, size: Number.parseFloat(style.fontSize), line: Number.parseFloat(style.lineHeight) };
      });
      for (const { element, size, line } of samples) {
        element.style.fontSize = `${size * 2}px`;
        if (Number.isFinite(line)) element.style.lineHeight = `${line * 2}px`;
      }
    });
    const geometry = await page.locator('header').evaluate(header => {
      const search = header.querySelector('.search-trigger').getBoundingClientRect();
      return [...header.querySelectorAll('.wordmark span')].map(phrase => {
        const rect = phrase.getBoundingClientRect();
        return {
          left: rect.left, right: rect.right, viewport: window.innerWidth,
          overlaps: rect.left < search.right && rect.right > search.left && rect.top < search.bottom && rect.bottom > search.top,
        };
      });
    });
    for (const phrase of geometry) {
      expect(phrase.overlaps, 'enlarged title must not overlap Search').toBe(false);
      expect(phrase.left).toBeGreaterThanOrEqual(0);
      expect(phrase.right).toBeLessThanOrEqual(phrase.viewport);
    }
    await page.getByRole('button', { name: locale === 'en' ? 'Search chapters' : '搜索章节', exact: true }).click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator('.search-trigger')).toBeFocused();
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
  await expect(page.locator('.chapter-pagination a[rel="next"]')).toHaveAttribute('href', at(chapterPath(browserChapter)));
  await page.locator('.chapter-pagination a[rel="next"]').click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(browserChapter.title);
  await expect(page.locator('article')).toHaveAttribute('data-source-sha256', browserChapter.sha256);
  await expect(page.locator('.chapter-pagination a[rel="next"]')).toHaveCount(0);
  await expect(page.locator('.chapter-pagination')).toContainText('已到当前最后一章');
  await expect(page.locator('.chapter-pagination a[rel="prev"]')).toHaveAttribute('href', at(chapterPath(g01)));
  await page.locator('.chapter-pagination a[rel="prev"]').click();
  await expect(page).toHaveURL(new RegExp(`${at(chapterPath(g01))}$`));
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

test('search locks the reading position while results scroll and restores normal document scrolling on close or navigation', async ({ page }) => {
  await page.goto(at(chapterPath(g01)));
  for (const closeWith of ['Escape', 'Close', 'result']) {
    const heading = page.locator('article h2').nth(1);
    if (closeWith === 'Escape') { await heading.focus(); await page.keyboard.press('Control+k'); }
    else await page.getByRole('button', { name: '搜索章节', exact: true }).click();
    const dialog = page.getByRole('dialog'); await expect(dialog).toBeVisible();
    if (await dialog.getByRole('searchbox').inputValue()) await dialog.getByRole('searchbox').fill('');
    await expect(dialog).toContainText('搜索已提供的章节');
    const position = await page.evaluate(() => window.scrollY);
    await page.mouse.move(2, 850);
    await page.mouse.wheel(0, 500);
    // A rendered frame observes the delivered wheel; no sleep or retry can hide movement.
    await page.evaluate(() => new Promise(resolve => window.requestAnimationFrame(resolve)));
    expect(await page.evaluate(() => window.scrollY), 'modal backdrop must not scroll the reader').toBe(position);
    await dialog.getByRole('searchbox').fill('状态');
    const first = dialog.locator('.search-results a').first();
    await expect(first).toBeVisible();
    const destination = new URL(await first.getAttribute('href'), page.url());
    const bounds = await dialog.boundingBox();
    await page.mouse.move(bounds.x + bounds.width / 2, bounds.y + bounds.height - 20);
    await page.mouse.wheel(0, 500);
    await expect.poll(() => dialog.evaluate(element => element.scrollTop)).toBeGreaterThan(0);
    expect(await page.evaluate(() => window.scrollY)).toBe(position);
    if (closeWith === 'Escape') await page.keyboard.press('Escape');
    else if (closeWith === 'Close') await dialog.getByRole('button', { name: '关闭', exact: true }).click();
    else { await dialog.getByRole('searchbox').press('Enter'); await expect(page).toHaveURL(destination.href); }
    await expect(dialog).not.toBeVisible();
    if (closeWith !== 'result') {
      await expect(closeWith === 'Escape' ? heading : page.locator('.search-trigger')).toBeFocused();
      expect(await page.evaluate(() => window.scrollY)).toBe(position);
    } else await expect(page.locator(`[id="${decodeURIComponent(destination.hash.slice(1))}"]`)).toBeFocused();
    const restored = await page.evaluate(() => window.scrollY);
    await page.mouse.move(2, 850); await page.mouse.wheel(0, 150);
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(restored);
  }
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
