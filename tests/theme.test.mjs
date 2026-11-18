import assert from 'node:assert/strict';
import test from 'node:test';
import vm from 'node:vm';
import { getThemeBootstrap, themeStorageKey, accentStorageKey, accentOptions } from '../site/theme/runtime.ts';

function browser({ stored = null, storedAccent = null, readKeyThrows = null, dark = false, getThrows = false, writeThrows = false, mediaAvailable = true } = {}) {
  const dataset = {};
  const events = new Map();
  const media = { matches: dark, addEventListener: (_name, callback) => { media.change = callback; } };
  const writes = [];
  const storage = {
    getItem: key => { if (key === readKeyThrows) throw Error('Read denied'); return key === accentStorageKey ? storedAccent : stored; },
    setItem(key, value) { if (writeThrows) throw Error('blocked'); writes.push([key, value]); if (key === accentStorageKey) storedAccent = value; else stored = value; },
    removeItem(key) { if (writeThrows) throw Error('blocked'); writes.push([key, null]); stored = null; },
  };
  const sessionStorage = { getItem: () => null, setItem() {}, removeItem() {}, clear() {} };
  const window = {
    addEventListener: (name, callback) => { events.set(name, callback); },
    get localStorage() { if (getThrows) throw Error('blocked'); return storage; },
    sessionStorage,
    ...(mediaAvailable ? { matchMedia: () => media } : {}),
  };
  const context = vm.createContext({ window, document: { documentElement: { dataset } } });
  const run = () => vm.runInContext(getThemeBootstrap(), context);
  run();
  return {
    window, dataset, writes, run,
    changeSystem(value) { media.matches = value; media.change?.(); },
    storageEvent(key, newValue, area = 'local') {
      events.get('storage')({ key, newValue, storageArea: area === 'local' ? storage : sessionStorage });
    },
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

test('unrelated storage areas cannot override local preferences, even for a matching key or clear event', () => {
  const b = browser({ stored: 'light', dark: true });
  b.storageEvent(themeStorageKey, 'dark', 'session');
  b.storageEvent(null, null, 'session');
  assert.equal(b.dataset.theme, 'light');
  assert.equal(b.dataset.themePreference, 'light');
  b.storageEvent(themeStorageKey, 'dark', 'local');
  assert.equal(b.dataset.theme, 'dark');

  const denied = browser({ getThrows: true, dark: true });
  assert.doesNotThrow(() => denied.storageEvent(themeStorageKey, 'light', 'session'));
  assert.doesNotThrow(() => denied.storageEvent(null, null, 'local'));
  assert.equal(denied.dataset.theme, 'dark');
  assert.equal(denied.dataset.themePreference, 'system');
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


test('all saved accents bootstrap before React and stay independent of appearance and system changes', () => {
  for (const accent of accentOptions) for (const stored of [null, 'light', 'dark']) {
    const b = browser({ stored, storedAccent: accent, dark: true });
    assert.equal(b.dataset.accent, accent);
    b.changeSystem(false); b.changeSystem(true);
    assert.equal(b.dataset.accent, accent);
    b.window.__btfTheme.setPreference('light');
    assert.equal(b.dataset.accent, accent);
    b.window.__btfTheme.setAccent('graphite');
    assert.equal(b.dataset.themePreference, 'light');
    assert.equal(b.dataset.theme, 'light');
    assert.equal(b.dataset.accent, 'graphite');
  }
});

test('invalid and per-key failed reads default independently; blocked writes retain session accents', () => {
  for (const value of [null, '', 'invalid', 'Blue', '{"color":"rose"}']) {
    assert.equal(browser({ stored: 'dark', storedAccent: value }).dataset.accent, 'blue');
  }
  const themeReadDenied = browser({ stored: 'dark', storedAccent: 'purple', readKeyThrows: themeStorageKey });
  assert.equal(themeReadDenied.dataset.themePreference, 'system');
  assert.equal(themeReadDenied.dataset.accent, 'purple');
  const accentReadDenied = browser({ stored: 'dark', storedAccent: 'rose', readKeyThrows: accentStorageKey });
  assert.equal(accentReadDenied.dataset.theme, 'dark');
  assert.equal(accentReadDenied.dataset.accent, 'blue');
  for (const options of [{ getThrows: true }, { writeThrows: true }]) {
    const b = browser(options), controller = b.window.__btfTheme;
    assert.doesNotThrow(() => controller.setAccent('orange'));
    assert.equal(b.dataset.accent, 'orange');
    controller.setAccent('invalid');
    assert.equal(b.dataset.accent, 'orange');
  }
});

test('accent storage events, clearing and irrelevant areas preserve independent state without writes', () => {
  const b = browser({ stored: 'dark', storedAccent: 'green' });
  b.storageEvent(accentStorageKey, 'purple', 'session');
  assert.equal(b.dataset.accent, 'green');
  b.storageEvent(accentStorageKey, 'purple');
  assert.equal(b.dataset.accent, 'purple'); assert.equal(b.dataset.theme, 'dark');
  b.storageEvent(themeStorageKey, 'light');
  assert.equal(b.dataset.accent, 'purple'); assert.equal(b.dataset.theme, 'light');
  b.storageEvent(accentStorageKey, 'bad'); assert.equal(b.dataset.accent, 'blue');
  b.storageEvent(null, null); assert.equal(b.dataset.themePreference, 'system');
  assert.equal(b.dataset.accent, 'blue'); assert.deepEqual(b.writes, []);
});

test('accent changes notify once and keep snapshots stable until a real preference changes', () => {
  const b = browser(), controller = b.window.__btfTheme, initial = controller.getSnapshot();
  let calls = 0; const unsubscribe = controller.subscribe(() => { calls++; });
  controller.setAccent('blue'); assert.equal(controller.getSnapshot(), initial); assert.equal(calls, 0);
  controller.setAccent('rose'); const changed = controller.getSnapshot();
  assert.notEqual(changed, initial); assert.equal(changed.accent, 'rose'); assert.equal(calls, 1);
  controller.setAccent('rose'); assert.equal(controller.getSnapshot(), changed); assert.equal(calls, 1);
  b.run(); assert.equal(b.window.__btfTheme, controller); unsubscribe();
});
