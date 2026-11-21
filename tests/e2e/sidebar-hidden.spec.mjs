import { test as base, expect } from '@playwright/test';
import { withBasePath } from '../../site/config/deployment.ts';
import { chapterManifest, chapterPath } from '../../site/content/manifest.ts';
import { writeFile } from 'node:fs/promises';

const at=path=>withBasePath(path,process.env.NEXT_PUBLIC_BASE_PATH);
const test=base.extend({health:[async({page},use)=>{
  const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  await use();expect(errors).toEqual([]);
},{auto:true}]});

test('hidden sidebar keeps readable geometry through persistence, real chapter links and responsive recovery',async({page},testInfo)=>{
  test.setTimeout(60_000);const records=[];
  async function ready(){await expect(page.locator('.chapter-layout')).toHaveAttribute('data-enhanced','true');}
  async function hidden(width,theme,phase){
    await ready();await expect(page.locator('.chapter-layout')).toHaveAttribute('data-sidebar','hidden');
    const reopen=page.getByRole('button',{name:'显示章节栏',exact:true});await expect(reopen).toBeVisible();
    const g=await page.evaluate(()=>{
      const body=document.querySelector('.reader-body'),article=document.querySelector('article'),button=document.querySelector('[data-reopen-sidebar]'),h1=article.querySelector('h1');
      const rect=e=>{const r=e.getBoundingClientRect();return{left:r.left,right:r.right,top:r.top,bottom:r.bottom,width:r.width,height:r.height};};
      const b=button.getBoundingClientRect(),hit=document.elementFromPoint(b.x+b.width/2,b.y+b.height/2);
      return{columns:window.getComputedStyle(document.querySelector('.chapter-layout')).gridTemplateColumns,bodyColumn:window.getComputedStyle(body).gridColumn,body:rect(body),article:rect(article),h1:rect(h1),reopen:rect(button),hit:button.contains(hit),overflow:document.documentElement.scrollWidth>window.innerWidth};
    });
    expect(g.body.width).toBeGreaterThanOrEqual(width-1);expect(g.body.left).toBe(0);
    expect(g.article.width).toBeGreaterThanOrEqual(600);expect(g.article.width).toBeLessThanOrEqual(704);
    expect(g.h1.height).toBeLessThan(150);expect(g.overflow).toBe(false);expect(g.hit).toBe(true);
    expect(g.reopen.left).toBeGreaterThanOrEqual(0);expect(g.reopen.right).toBeLessThanOrEqual(width);expect(g.reopen.height).toBeGreaterThanOrEqual(44);
    records.push({width,theme,phase,...g});
  }
  for(const width of [900,1006,1161,1261,1440])for(const theme of ['light','dark']){
    await page.setViewportSize({width,height:900});await page.emulateMedia({colorScheme:theme});
    await page.goto(at(chapterPath(chapterManifest[0])));await ready();
    if(await page.locator('.chapter-layout').getAttribute('data-sidebar')!=='expanded')await page.getByRole('button',{name:'显示章节栏',exact:true}).click();
    await page.getByRole('button',{name:'隐藏章节栏',exact:true}).filter({visible:true}).click();
    await expect(page.getByRole('button',{name:'显示章节栏',exact:true})).toBeFocused();await hidden(width,theme,'hide');
    if(width===1161)await page.screenshot({path:testInfo.outputPath(`hidden-${width}-${theme}-opening.png`)});
    await page.reload();await hidden(width,theme,'reload saved hidden');
    for(const entry of chapterManifest.slice(1)){
      await page.locator('.chapter-pagination a[rel="next"]').click();
      await expect.poll(()=>new URL(page.url()).pathname).toBe(at(chapterPath(entry)));await hidden(width,theme,`native next ${entry.id}`);
      await expect(page.locator('article')).toHaveAttribute('data-source-sha256',entry.sha256);
    }
    if(width===1161)await page.screenshot({path:testInfo.outputPath(`hidden-${width}-${theme}-f01.png`)});
    await page.getByRole('button',{name:'显示章节栏',exact:true}).press('Enter');
    await expect(page.getByRole('button',{name:'收起章节栏',exact:true})).toBeFocused();
    expect((await page.locator('article').boundingBox()).width).toBeGreaterThanOrEqual(550);
    await page.getByRole('button',{name:'收起章节栏',exact:true}).press('Enter');
    await expect(page.getByRole('button',{name:'展开章节栏',exact:true})).toBeFocused();
    expect((await page.locator('article').boundingBox()).width).toBeGreaterThanOrEqual(600);
    await page.getByRole('button',{name:'隐藏章节栏',exact:true}).filter({visible:true}).press('Enter');await hidden(width,theme,'collapsed then hidden');
    await page.setViewportSize({width:390,height:844});
    expect((await page.locator('article').boundingBox()).width).toBeGreaterThanOrEqual(300);
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
    const menu=page.locator('.mobile-book-navigation summary');await menu.focus();await menu.press('Enter');
    await expect(page.getByRole('region',{name:'本书信息',exact:true})).toBeVisible();await menu.press('Escape');await expect(menu).toBeFocused();
    await page.setViewportSize({width,height:900});await hidden(width,theme,'mobile then desktop');
    await page.getByRole('button',{name:'显示章节栏',exact:true}).focus();await page.keyboard.press('Enter');
    await expect(page.getByRole('button',{name:'收起章节栏',exact:true})).toBeFocused();
  }
  const geometryPath=testInfo.outputPath('hidden-sidebar-geometry.json');await writeFile(geometryPath,JSON.stringify(records,null,2));
  await testInfo.attach('hidden-sidebar-geometry',{path:geometryPath,contentType:'application/json'});
});
