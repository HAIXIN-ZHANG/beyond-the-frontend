export type ThemePreference = 'system' | 'light' | 'dark';
export const accentOptions = ['blue', 'green', 'purple', 'orange', 'rose', 'graphite'] as const;
export type AccentPreference = typeof accentOptions[number];

export type ThemeSnapshot = Readonly<{
  preference: ThemePreference;
  resolvedTheme: 'light' | 'dark';
  accent: AccentPreference;
}>;

export type ThemeController = {
  getSnapshot: () => ThemeSnapshot;
  setPreference: (preference: ThemePreference) => void;
  setAccent: (accent: AccentPreference) => void;
  subscribe: (listener: () => void) => () => void;
};

declare global {
  interface Window {
    __btfTheme?: ThemeController;
  }
}

export const themeStorageKey = 'btf.theme';
export const accentStorageKey = 'btf.accent';

// Serialized into the document head: keep this function self-contained.
export function installTheme(storageKey: string, accentKey: string = 'btf.accent'): void {
  if (window.__btfTheme) return;

  const listeners = new Set<() => void>();
  const media = typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null;
  const parse = (value: unknown): ThemePreference => (
    value === 'light' || value === 'dark' ? value : 'system'
  );
  // Keep enum validation inside the serialized installer, without outside closures.
  const accents: readonly string[] = ['blue', 'green', 'purple', 'orange', 'rose', 'graphite'];
  const parseAccent = (value: unknown): AccentPreference => (
    typeof value === 'string' && accents.includes(value) ? value as AccentPreference : 'blue'
  );
  let preference: ThemePreference = 'system';
  let accent: AccentPreference = 'blue';
  let localStorageArea: Storage | null = null;
  try {
    localStorageArea = window.localStorage;
  } catch {
    // Storage may be disabled; system mode still works.
  }
  try { preference = parse(localStorageArea?.getItem(storageKey)); } catch { /* Keep the safe theme default. */ }
  try { accent = parseAccent(localStorageArea?.getItem(accentKey)); } catch { /* Keep the safe accent default. */ }

  let snapshot: ThemeSnapshot = {
    preference,
    accent,
    resolvedTheme: preference === 'system' ? (media?.matches ? 'dark' : 'light') : preference,
  };

  function apply(): void {
    const resolvedTheme = preference === 'system'
      ? (media?.matches ? 'dark' : 'light')
      : preference;
    document.documentElement.dataset.theme = resolvedTheme;
    document.documentElement.dataset.themePreference = preference;
    document.documentElement.dataset.accent = accent;
    if (snapshot.preference !== preference || snapshot.resolvedTheme !== resolvedTheme || snapshot.accent !== accent) {
      snapshot = { preference, resolvedTheme, accent };
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
        if (value === 'system') localStorageArea?.removeItem(storageKey);
        else localStorageArea?.setItem(storageKey, value);
      } catch {
        // Apply this session's choice even when it cannot be persisted.
      }
      apply();
    },
    setAccent(value) {
      if (!accents.includes(value)) return;
      accent = value;
      try { localStorageArea?.setItem(accentKey, value); } catch { /* Session choice still applies. */ }
      apply();
    },
  };

  media?.addEventListener('change', () => {
    if (preference === 'system') apply();
  });
  window.addEventListener('storage', event => {
    // Same-origin iframe sessionStorage events must not change this local preference.
    // Use the guarded initial reference; reading the getter here can throw when storage is blocked.
    if (!localStorageArea || event.storageArea !== localStorageArea) return;
    if (event.key === storageKey || event.key === null) preference = parse(event.newValue);
    else if (event.key !== accentKey) return;
    if (event.key === accentKey || event.key === null) accent = parseAccent(event.newValue);
    apply();
  });
  apply();
}

export function getThemeBootstrap(): string {
  return `(${installTheme.toString()})(${JSON.stringify(themeStorageKey)},${JSON.stringify(accentStorageKey)});`;
}
