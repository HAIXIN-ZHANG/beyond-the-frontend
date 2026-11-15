export type ThemePreference = 'system' | 'light' | 'dark';

export type ThemeSnapshot = Readonly<{
  preference: ThemePreference;
  resolvedTheme: 'light' | 'dark';
}>;

export type ThemeController = {
  getSnapshot: () => ThemeSnapshot;
  setPreference: (preference: ThemePreference) => void;
  subscribe: (listener: () => void) => () => void;
};

declare global {
  interface Window {
    __btfTheme?: ThemeController;
  }
}

export const themeStorageKey = 'btf.theme';

// Serialized into the document head: keep this function self-contained.
export function installTheme(storageKey: string): void {
  if (window.__btfTheme) return;

  const listeners = new Set<() => void>();
  const media = typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null;
  const parse = (value: unknown): ThemePreference => (
    value === 'light' || value === 'dark' ? value : 'system'
  );
  let preference: ThemePreference = 'system';
  try {
    preference = parse(window.localStorage.getItem(storageKey));
  } catch {
    // Storage may be disabled; system mode still works.
  }

  let snapshot: ThemeSnapshot = {
    preference,
    resolvedTheme: preference === 'system' ? (media?.matches ? 'dark' : 'light') : preference,
  };

  function apply(): void {
    const resolvedTheme = preference === 'system'
      ? (media?.matches ? 'dark' : 'light')
      : preference;
    document.documentElement.dataset.theme = resolvedTheme;
    document.documentElement.dataset.themePreference = preference;
    if (snapshot.preference !== preference || snapshot.resolvedTheme !== resolvedTheme) {
      snapshot = { preference, resolvedTheme };
      listeners.forEach(listener => listener());
    }
  }

  window.__btfTheme = {
    getSnapshot: () => snapshot,
    subscribe(listener) {
      listeners.add(listener);
      return () => { listeners.delete(listener); };
    },
    setPreference(value) {
      if (value !== 'system' && value !== 'light' && value !== 'dark') return;
      preference = value;
      try {
        if (value === 'system') window.localStorage.removeItem(storageKey);
        else window.localStorage.setItem(storageKey, value);
      } catch {
        // Apply this session's choice even when it cannot be persisted.
      }
      apply();
    },
  };

  media?.addEventListener('change', () => {
    if (preference === 'system') apply();
  });
  window.addEventListener('storage', event => {
    if (event.key !== storageKey && event.key !== null) return;
    preference = parse(event.newValue);
    apply();
  });
  apply();
}

export function getThemeBootstrap(): string {
  return `(${installTheme.toString()})(${JSON.stringify(themeStorageKey)});`;
}
