import { test as base, expect } from '@playwright/test';
import { withBasePath } from '../../site/config/deployment.ts';
import { chapterManifest } from '../../site/content/manifest.ts';

const at=path=>withBasePath(path,process.env.NEXT_PUBLIC_BASE_PATH);
const route='/zh/read/browser-foundations/';
const test=base.extend({health:[async({page},use)=>{
  const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  await use();expect(errors).toEqual([]);
},{auto:true}]});
const bodyLinks=['DOM，Document Object Model','web.dev 的关键路径说明'];

async function reader(page,width=1188,theme='light'){
  await page.setViewportSize({width,height:900});await page.emulateMedia({colorScheme:theme});await page.goto(at(route));
  await expect(page.locator('.chapter-layout')).toHaveAttribute('data-enhanced','true');
}
async function clearance(page,target,panel){
  await expect.poll(()=>target.evaluate((e,panelSelector)=>{
    const tools=document.querySelector('.reading-tools'),header=document.querySelector('.site-header');
    const sticky=window.getComputedStyle(header).position==='sticky'?header.getBoundingClientRect().bottom:0;
    const panel=panelSelector?document.querySelector(panelSelector):null;
    return e.getBoundingClientRect().top>=Math.max(tools.getBoundingClientRect().bottom,sticky,panel?.getBoundingClientRect().bottom??0)-1;
  },panel)).toBe(true);
}

test('nearby tools separate scrolling status, retain native disclosure focus and disappear when no action is visible',async({page},testInfo)=>{
  for(const width of [1188,390,320])for(const theme of ['light','dark']){
    await reader(page,width,theme);const status=page.locator('.chapter-context'),tools=page.locator('.reading-tools'),summary=page.locator('.mobile-outline summary');
    await expect(status).toHaveText('中文 · 已审阅草稿');expect(await status.evaluate(e=>e.closest('.reading-tools'))).toBeNull();
    await expect(summary).toHaveText('本章目录');expect((await summary.boundingBox()).height).toBeGreaterThanOrEqual(44);
    const icon=summary.locator('.reading-disclosure-icon');expect(await icon.evaluate(e=>[e.clientWidth,e.clientHeight])).toEqual([18,18]);
    expect(await icon.evaluate(e=>window.getComputedStyle(e).maskImage)).toContain(at('/icons/reader/section-list.svg'));
    expect((await page.request.get(at('/icons/reader/section-list.svg'))).status()).toBe(200);
    const position=await page.evaluate(()=>window.scrollY),top=await page.locator('article').evaluate(e=>e.getBoundingClientRect().top);
    const normal=await summary.evaluate(e=>window.getComputedStyle(e).backgroundColor);
    await summary.focus();await summary.press('Enter');await expect(page.locator('.mobile-outline details')).toHaveAttribute('open','');
    expect(await summary.evaluate(e=>window.getComputedStyle(e).backgroundColor)).not.toBe(normal);
    expect(await page.locator('article').evaluate(e=>e.getBoundingClientRect().top)).toBe(top);
    expect(await page.evaluate(()=>window.scrollY)).toBe(position);
    await page.screenshot({path:testInfo.outputPath(`toolbar-${width}-${theme}-open.png`)});
    await summary.press('Escape');await expect(summary).toBeFocused();
    await page.evaluate(()=>window.scrollTo(0,600));
    expect(await status.evaluate(e=>e.getBoundingClientRect().bottom)).toBeLessThan(0);
    await expect(tools).toBeInViewport();
    await page.screenshot({path:testInfo.outputPath(`toolbar-${width}-${theme}-scrolled.png`)});
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
  }
  await reader(page,1261);await expect(page.locator('.reading-tools')).toBeHidden();
  expect(await page.locator('.reading-tools').boundingBox()).toBeNull();
  await page.getByRole('button',{name:'隐藏章节栏',exact:true}).filter({visible:true}).click();
  await expect(page.locator('.reading-tools')).toBeVisible();const reopen=page.getByRole('button',{name:'显示章节栏',exact:true});
  await expect(reopen).toBeFocused();await reopen.press('Enter');await expect(page.locator('.reading-tools')).toBeHidden();
  await expect(page.getByRole('button',{name:'收起章节栏',exact:true})).toBeFocused();
});

test('real prose links retain source text, inline typography and theme-specific states across all six accents',async({page},testInfo)=>{
  const accents=['蓝色','绿色','紫色','橙色','玫红','石墨'];
  for(const theme of ['light','dark']){
    await reader(page,1188,theme);
    for(const accent of accents){
      await page.locator('.appearance-trigger').click();
      const radio=page.getByRole('radio',{name:accent,exact:true});
      await page.locator('.accent-option').filter({has:radio}).click();await expect(radio).toBeChecked();
      await page.keyboard.press('Escape');
      for(const name of bodyLinks){
        const link=page.getByRole('link',{name,exact:true});await link.scrollIntoViewIfNeeded();await page.mouse.move(1,1);
        const s=await link.evaluate(e=>{const s=window.getComputedStyle(e),p=window.getComputedStyle(e.parentElement);return {color:s.color,font:s.fontSize,line:s.lineHeight,weight:s.fontWeight,parentWeight:p.fontWeight,display:s.display,whiteSpace:s.whiteSpace,margin:s.marginRight,underline:s.textDecorationLine,thickness:s.textDecorationThickness,offset:s.textUnderlineOffset,spacing:s.letterSpacing,text:e.textContent,next:e.nextSibling?.textContent};});
        expect(s.color).toBe(theme==='light'?'rgb(69, 93, 128)':'rgb(176, 199, 227)');
        expect([s.font,s.line,s.display]).toEqual(['16px','28px','inline']);expect(s.weight).toBe(s.parentWeight);
        expect(s.whiteSpace).not.toBe('nowrap');expect(parseFloat(s.margin)).toBeCloseTo(1.2);expect(['normal','0px']).toContain(s.spacing);
        expect([s.underline,s.thickness,s.offset]).toEqual(['underline','1px','3px']);expect(s.text).toBe(name);
        if(name===bodyLinks[1])expect(s.next.startsWith('区分了这两类依赖。')).toBe(true);
        await link.hover();expect(await link.evaluate(e=>window.getComputedStyle(e).textDecorationThickness)).toBe('2px');
        expect(await link.evaluate(e=>window.getComputedStyle(e).color===window.getComputedStyle(e.parentElement).color)).toBe(true);
        await page.mouse.move(1,1);await link.focus();
        expect(await link.evaluate(e=>window.getComputedStyle(e).outlineWidth)).toBe('2px');
      }
    }
    const web=page.getByRole('link',{name:bodyLinks[1],exact:true});await web.focus();
    await page.screenshot({path:testInfo.outputPath(`prose-link-${theme}-focus.png`)});
    await expect(page.locator('article')).toHaveAttribute('data-source-sha256',chapterManifest[2].sha256);
    expect(await page.locator('.heading-link').first().evaluate(e=>window.getComputedStyle(e).marginRight)).toBe('0px');
    const actions=page.locator('.section-actions').first();await actions.locator('summary').click();
    await actions.getByRole('button',{name:'查看纠错信息',exact:true}).click();
    expect(await actions.locator('.correction-preview a').evaluate(e=>window.getComputedStyle(e).marginRight)).toBe('0px');
    await actions.getByRole('button',{name:'查看纠错信息',exact:true}).press('Escape');
  }
});

test('enlarged inline English and Chinese links wrap without chips, clipping or page overflow and remain visible in forced colors',async({page},testInfo)=>{
  await reader(page,320,'dark');await page.evaluate(()=>{document.documentElement.style.fontSize='200%';});
  for(const name of bodyLinks){
    const link=page.getByRole('link',{name,exact:true});await link.scrollIntoViewIfNeeded();
    const g=await link.evaluate(e=>({font:window.getComputedStyle(e).fontSize,bg:window.getComputedStyle(e).backgroundColor,rects:[...e.getClientRects()].map(r=>({left:r.left,right:r.right})),width:window.innerWidth}));
    expect(g.font).toBe('32px');expect(g.bg).toBe('rgba(0, 0, 0, 0)');expect(g.rects.length).toBeGreaterThan(1);
    for(const r of g.rects){expect(r.left).toBeGreaterThanOrEqual(0);expect(r.right).toBeLessThanOrEqual(g.width);}
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
    await page.screenshot({path:testInfo.outputPath(`link-320-amplified-${bodyLinks.indexOf(name)}.png`)});
  }
  await page.emulateMedia({forcedColors:'active'});const link=page.getByRole('link',{name:bodyLinks[1],exact:true});await link.focus();
  expect(await link.evaluate(e=>window.getComputedStyle(e).textDecorationLine)).toBe('underline');
  expect(await link.evaluate(e=>window.getComputedStyle(e).outlineStyle)).toBe('solid');
  await page.screenshot({path:testInfo.outputPath('prose-link-forced-colors.png')});
});

for(const javaScriptEnabled of [true,false])test(`direct fragments and open native outline clear the real enlarged toolbar with JavaScript ${javaScriptEnabled?'on':'off'}`,async({browser,baseURL},testInfo)=>{
  const context=await browser.newContext({baseURL,javaScriptEnabled}),page=await context.newPage(),errors=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  try{
    for(const width of [1188,390,320]){
      await page.setViewportSize({width,height:900});await page.goto(at(route));
      const href=await page.locator('.outline-rail a').nth(1).getAttribute('href'),id=decodeURIComponent(href.slice(1));
      await page.goto(`${at(route)}${href}`);const target=page.locator(`[id="${id}"]`);await expect(target).toBeFocused();await clearance(page,target);
      await page.evaluate(()=>{document.documentElement.style.fontSize='200%';});
      const summary=page.locator('.mobile-outline summary');await summary.focus();await summary.press('Enter');
      const panel=page.locator('.mobile-outline .reading-disclosure-body');await expect(panel).toBeVisible();
      const next=page.locator('.mobile-outline a').nth(2),nextId=decodeURIComponent((await next.getAttribute('href')).slice(1));
      await next.click();const destination=page.locator(`[id="${nextId}"]`);await expect(destination).toBeFocused();
      if(javaScriptEnabled)await expect(panel).toBeHidden();else await expect(panel).toBeVisible();
      await clearance(page,destination,javaScriptEnabled?null:'.mobile-outline .reading-disclosure-body');
      expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
      await page.screenshot({path:testInfo.outputPath(`toolbar-fragment-${width}-js-${javaScriptEnabled}.png`)});
    }
    expect(errors).toEqual([]);
  }finally{await context.close();}
});
