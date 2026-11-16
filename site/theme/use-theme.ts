'use client';

import { useSyncExternalStore } from 'react';
import { installTheme, themeStorageKey } from './runtime.ts';
import type { ThemePreference, ThemeSnapshot } from './runtime.ts';

function subscribe(listener: () => void): () => void {
  installTheme(themeStorageKey);
  return window.__btfTheme?.subscribe(listener) ?? (() => {});
}

const serverSnapshot: ThemeSnapshot = { preference: 'system', resolvedTheme: 'light' };
const getSnapshot = (): ThemeSnapshot => window.__btfTheme?.getSnapshot() ?? serverSnapshot;
const getServerSnapshot = (): ThemeSnapshot => serverSnapshot;

export function useTheme() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return {
    ...snapshot,
    setPreference(value: ThemePreference) {
      installTheme(themeStorageKey);
      window.__btfTheme?.setPreference(value);
    },
  };
}
