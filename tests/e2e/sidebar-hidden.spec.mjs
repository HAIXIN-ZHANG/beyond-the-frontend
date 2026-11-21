import { test as base, expect } from '@playwright/test';
import { withBasePath } from '../../site/config/deployment.ts';
import { chapterManifest, chapterPath } from '../../site/content/manifest.ts';
import { writeFile } from 'node:fs/promises';
import { expectReadableHiddenReader } from './support/reading-assertions.mjs';

const at=path=>withBasePath(path,process.env.NEXT_PUBLIC_BASE_PATH);
const test=base.extend({health:[async({page},use)=>{
  const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  await use();expect(errors).toEqual([]);
},{auto:true}]});

test('hidden sidebar keeps readable geometry through persistence, real chapter links and responsive recovery',async({page},testInfo)=>{
  test.setTimeout(60_000);const records=[];
  async function ready(){await expect(page.locator('.chapter-layout')).toHaveAttribute('data-enhanced','true');}
  let expandedArticleWidth;
  async function hidden(width,theme,phase){
    await ready();
    const g=await expectReadableHiddenReader(page,expandedArticleWidth);
    records.push({width,theme,phase,...g});
  }
  // Complementary profiles cover the breakpoint, original failure width, wide desktop and both themes.
  for(const {width,theme,mobileWidth} of [{width:900,theme:'light',mobileWidth:320},{width:1161,theme:'dark',mobileWidth:390},{width:1440,theme:'light',mobileWidth:320}]){
    await page.setViewportSize({width,height:900});await page.emulateMedia({colorScheme:theme});
    await page.goto(at(chapterPath(chapterManifest[0])));await ready();
    if(await page.locator('.chapter-layout').getAttribute('data-sidebar')!=='expanded')await page.getByRole('button',{name:'显示章节栏',exact:true}).click();
    expandedArticleWidth=(await page.locator('article').boundingBox()).width;
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
    expect((await page.locator('article').boundingBox()).width).toBeGreaterThanOrEqual(expandedArticleWidth);
    await page.getByRole('button',{name:'收起章节栏',exact:true}).press('Enter');
    await expect(page.getByRole('button',{name:'展开章节栏',exact:true})).toBeFocused();
    expect((await page.locator('article').boundingBox()).width).toBeGreaterThanOrEqual(expandedArticleWidth);
    await page.getByRole('button',{name:'隐藏章节栏',exact:true}).filter({visible:true}).press('Enter');await hidden(width,theme,'collapsed then hidden');
    await page.setViewportSize({width:mobileWidth,height:844});
    await expect(page.locator('article h1')).toBeVisible();
    expect((await page.locator('article').boundingBox()).width).toBeGreaterThan(0);
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
