import { expect } from '@playwright/test';

// A user can hide navigation to gain reading space; it must not shrink the usable expanded article.
// Compare actual containing boxes, not root clientWidth (classic stable gutters differ on Linux).
export async function expectReadableHiddenReader(page, expandedArticleWidth) {
  await expect(page.locator('.chapter-layout')).toHaveAttribute('data-sidebar', 'hidden');
  const reopen = page.getByRole('button', { name: '显示章节栏', exact: true });
  await expect(reopen).toBeVisible();
  const geometry = await page.evaluate(() => {
    const layout = document.querySelector('.chapter-layout'), main = layout.parentElement;
    const body = document.querySelector('.reader-body'), article = document.querySelector('article');
    const button = document.querySelector('[data-reopen-sidebar]'), style = window.getComputedStyle(main);
    const rect = element => { const r = element.getBoundingClientRect(); return { left:r.left, right:r.right, width:r.width, height:r.height }; };
    const bounds = main.getBoundingClientRect();
    const left = bounds.left + parseFloat(style.borderLeftWidth) + parseFloat(style.paddingLeft);
    const right = bounds.right - parseFloat(style.borderRightWidth) - parseFloat(style.paddingRight);
    const b = button.getBoundingClientRect(), hit = document.elementFromPoint(b.x + b.width / 2, b.y + b.height / 2);
    return { mainContent:{left,right,width:right-left}, layout:rect(layout), body:rect(body), article:rect(article),
      heading:rect(article.querySelector('h1')), reopen:rect(button), hit:button.contains(hit),
      overflow:document.documentElement.scrollWidth > document.documentElement.clientWidth };
  });
  expect(expandedArticleWidth, 'expanded reading baseline must be usable').toBeGreaterThan(0);
  expect(geometry.layout.width).toBeCloseTo(geometry.mainContent.width, 0);
  expect(geometry.layout.left).toBeCloseTo(geometry.mainContent.left, 0);
  expect(geometry.layout.right).toBeCloseTo(geometry.mainContent.right, 0);
  expect(geometry.body.width, 'hidden reader must fill its available column').toBeCloseTo(geometry.layout.width, 0);
  expect(geometry.body.left).toBeCloseTo(geometry.layout.left, 0);
  expect(geometry.body.right).toBeCloseTo(geometry.layout.right, 0);
  expect(geometry.article.width, 'hiding navigation must not reduce readable prose width').toBeGreaterThanOrEqual(expandedArticleWidth);
  for (const box of [geometry.article, geometry.heading, geometry.reopen]) {
    expect(box.width).toBeGreaterThan(0);
    expect(box.left).toBeGreaterThanOrEqual(geometry.mainContent.left);
    expect(box.right).toBeLessThanOrEqual(geometry.mainContent.right);
  }
  expect(geometry.overflow).toBe(false); expect(geometry.hit).toBe(true);
  expect(geometry.reopen.height).toBeGreaterThanOrEqual(44);
  return geometry;
}

export async function expectVisibleKeyboardFocus(control) {
  await expect(control).toBeFocused();
  expect(await control.evaluate(element => {
    const style = window.getComputedStyle(element);
    const color = style.outlineColor;
    const transparent = color === 'transparent' || /rgba\([^)]*,\s*0\)$/.test(color);
    return !['none', 'hidden'].includes(style.outlineStyle) && parseFloat(style.outlineWidth) > 0 && !transparent;
  }), 'keyboard focus must have a visible indicator').toBe(true);
}

// The credit may wrap or change typography, but its text and actual action must remain bounded.
export async function expectUsableCredit(dock) {
  await expect(dock).toBeVisible();
  const geometry = await dock.evaluate(element => {
    const bounds = element.getBoundingClientRect();
    const rect = e => { const r = e.getBoundingClientRect(); return { left:r.left,right:r.right,width:r.width,height:r.height }; };
    const name = element.querySelector('.book-info-name'), feedback = element.querySelector('a');
    const range = document.createRange(); range.selectNodeContents(name);
    return { dock:rect(element), feedback:rect(feedback), name:rect(name),
      text:[...range.getClientRects()].map(r => ({left:r.left,right:r.right})),
      clipped:element.scrollWidth > element.clientWidth,
      overflow:document.documentElement.scrollWidth > document.documentElement.clientWidth,
      left:bounds.left,right:bounds.right };
  });
  expect(geometry.clipped).toBe(false); expect(geometry.overflow).toBe(false);
  expect(geometry.feedback.height).toBeGreaterThanOrEqual(44);
  for (const box of [geometry.feedback,geometry.name]) {
    expect(box.width).toBeGreaterThan(0);
    expect(box.left).toBeGreaterThanOrEqual(geometry.left);
    expect(box.right).toBeLessThanOrEqual(geometry.right);
  }
  expect(geometry.text.length).toBeGreaterThan(0);
  for (const line of geometry.text) {
    expect(line.left).toBeGreaterThanOrEqual(geometry.left);
    expect(line.right).toBeLessThanOrEqual(geometry.right);
  }
  return geometry;
}
