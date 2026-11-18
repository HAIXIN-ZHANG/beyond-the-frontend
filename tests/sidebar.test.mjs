import assert from 'node:assert/strict';
import test from 'node:test';
import { readSidebarPreference, effectiveSidebarWidth, sidebarWidthLimit, sidebarDefault } from '../site/components/reading/sidebar-preference.ts';

test('desktop sidebar preferences accept only known modes and bounded integer widths', () => {
  for (const mode of ['expanded', 'collapsed', 'hidden']) {
    for (const width of [224, 248, 360]) assert.deepEqual(readSidebarPreference(JSON.stringify({ mode, width })), { mode, width });
  }
  for (const value of [null, 'broken', 'null', '[]', '"hidden"', '{}', '{"mode":"other","width":248}',
    '{"mode":"hidden","width":223}', '{"mode":"expanded","width":361}',
    '{"mode":"expanded","width":248.5}', '{"mode":"expanded","width":"248"}',
    '{"mode":"expanded","width":null}', '{"mode":"expanded","width":"100vw"}']) {
    assert.deepEqual(readSidebarPreference(value), sidebarDefault);
  }
});

test('effective viewport constraints preserve the saved width for restoration', () => {
  const saved = { mode: 'expanded', width: 360 };
  assert.equal(sidebarWidthLimit(900), 300);
  assert.equal(effectiveSidebarWidth(saved.width, 900), 300);
  assert.equal(effectiveSidebarWidth(saved.width, 1440), 360);
  assert.equal(saved.width, 360);
  assert.equal(effectiveSidebarWidth(248, 900), 248);
  assert.equal(effectiveSidebarWidth(224, 900), 224);
});
