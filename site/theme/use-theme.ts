'use client';

import { useSyncExternalStore } from 'react';
import { installTheme, themeStorageKey, accentStorageKey } from './runtime.ts';
import type { AccentPreference, ThemePreference, ThemeSnapshot } from './runtime.ts';

function subscribe(listener: () => void): () => void {
  installTheme(themeStorageKey, accentStorageKey);
  return window.__btfTheme?.subscribe(listener) ?? (() => {});
}

const serverSnapshot: ThemeSnapshot = { preference: 'system', resolvedTheme: 'light', accent: 'blue' };
const getSnapshot = (): ThemeSnapshot => window.__btfTheme?.getSnapshot() ?? serverSnapshot;
const getServerSnapshot = (): ThemeSnapshot => serverSnapshot;

export function useTheme() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return {
    ...snapshot,
    setPreference(value: ThemePreference) {
      installTheme(themeStorageKey, accentStorageKey);
      window.__btfTheme?.setPreference(value);
    },
    setAccent(value: AccentPreference) {
      installTheme(themeStorageKey, accentStorageKey);
      window.__btfTheme?.setAccent(value);
    },
  };
}
