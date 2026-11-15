import assert from 'node:assert/strict';
import test from 'node:test';
import vm from 'node:vm';
import { getThemeBootstrap, themeStorageKey } from '../site/theme/runtime.ts';

function browser({ stored = null, dark = false, getThrows = false, writeThrows = false, mediaAvailable = true } = {}) {
  const dataset = {};
  const events = new Map();
  const media = { matches: dark, addEventListener: (_name, callback) => { media.change = callback; } };
  const writes = [];
  const storage = {
    getItem: () => stored,
    setItem(key, value) { if (writeThrows) throw Error('blocked'); writes.push([key, value]); stored = value; },
    removeItem(key) { if (writeThrows) throw Error('blocked'); writes.push([key, null]); stored = null; },
  };
  const window = {
    addEventListener: (name, callback) => { events.set(name, callback); },
    get localStorage() { if (getThrows) throw Error('blocked'); return storage; },
    ...(mediaAvailable ? { matchMedia: () => media } : {}),
  };
  const context = vm.createContext({ window, document: { documentElement: { dataset } } });
  const run = () => vm.runInContext(getThemeBootstrap(), context);
  run();
  return {
    window, dataset, writes, run,
    changeSystem(value) { media.matches = value; media.change?.(); },
    storageEvent(key, newValue) { events.get('storage')({ key, newValue }); },
  };
}

test('head bootstrap resolves valid saved choices before any React execution; invalid values use the system', () => {
  for (const [stored, dark, expected, preference] of [
    [null, false, 'light', 'system'], [null, true, 'dark', 'system'],
    ['garbage', true, 'dark', 'system'], ['system', true, 'dark', 'system'],
    ['light', true, 'light', 'light'], ['dark', false, 'dark', 'dark'],
  ]) {
    const b = browser({ stored, dark });
    assert.equal(b.dataset.theme, expected);
    assert.equal(b.dataset.themePreference, preference);
    assert.equal(b.window.__btfTheme.getSnapshot().preference, preference);
    assert.deepEqual(b.writes, [], 'initial read must not overwrite the preference');
  }
});

test('system changes follow only system mode; explicit choices persist and reset restores following', () => {
  const b = browser();
  b.changeSystem(true);
  assert.equal(b.dataset.theme, 'dark');
  b.window.__btfTheme.setPreference('light');
  b.changeSystem(false);
  b.changeSystem(true);
  assert.equal(b.dataset.theme, 'light');
  b.window.__btfTheme.setPreference('system');
  assert.equal(b.dataset.theme, 'dark');
  assert.deepEqual(b.writes, [[themeStorageKey, 'light'], [themeStorageKey, null]]);
});

test('inaccessible storage falls back to system; failed writes still apply the in-memory choice', () => {
  for (const options of [{ getThrows: true }, { writeThrows: true }]) {
    const b = browser({ ...options, dark: true });
    assert.equal(b.dataset.theme, 'dark');
    assert.doesNotThrow(() => b.window.__btfTheme.setPreference('light'));
    assert.equal(b.dataset.theme, 'light');
    assert.doesNotThrow(() => b.window.__btfTheme.setPreference('system'));
    assert.equal(b.dataset.theme, 'dark');
  }
});

test('cross-tab changes and clearing storage update the mode without creating write loops', () => {
  const b = browser({ stored: 'light', dark: true });
  b.storageEvent('other-key', 'dark');
  assert.equal(b.dataset.theme, 'light');
  b.storageEvent(themeStorageKey, 'dark');
  assert.equal(b.window.__btfTheme.getSnapshot().preference, 'dark');
  b.storageEvent(themeStorageKey, 'invalid');
  assert.equal(b.dataset.themePreference, 'system');
  b.storageEvent(themeStorageKey, 'light');
  b.storageEvent(null, null);
  assert.equal(b.dataset.theme, 'dark');
  assert.equal(b.dataset.themePreference, 'system');
  assert.deepEqual(b.writes, []);
});

test('controller subscriptions clean up, duplicate installation is safe and missing matchMedia falls back to Day', () => {
  const b = browser({ mediaAvailable: false });
  const original = b.window.__btfTheme;
  let calls = 0;
  const unsubscribe = original.subscribe(() => { calls += 1; });
  original.setPreference('dark');
  assert.equal(calls, 1);
  unsubscribe();
  original.setPreference('system');
  assert.equal(calls, 1);
  assert.equal(b.dataset.theme, 'light');
  b.run();
  assert.equal(b.window.__btfTheme, original);
  original.setPreference('invalid');
  assert.equal(original.getSnapshot().preference, 'system');
});

test('external-store snapshots stay stable until preference or resolved mode changes', () => {
  const b = browser();
  const controller = b.window.__btfTheme;
  const initial = controller.getSnapshot();
  assert.equal(controller.getSnapshot(), initial);
  b.changeSystem(false);
  assert.equal(controller.getSnapshot(), initial);
  b.changeSystem(true);
  assert.notEqual(controller.getSnapshot(), initial);
  assert.equal(controller.getSnapshot().preference, 'system');
  assert.equal(controller.getSnapshot().resolvedTheme, 'dark');
});
