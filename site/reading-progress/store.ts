import { parseReadingPosition, readingStorageKey } from './model.ts';
import type { ReadingPosition } from './model.ts';

type StorageAccess = Pick<Storage, 'getItem' | 'setItem'>;

export function createReadingStore(access: () => StorageAccess | null) {
  const listeners = new Set<() => void>();
  const notify = () => listeners.forEach(listener => listener());
  const getSnapshot = (): string | null => {
    try {
      const raw = access()?.getItem(readingStorageKey) ?? null;
      return parseReadingPosition(raw) ? raw : null;
    } catch { return null; }
  };
  return {
    getSnapshot, notify,
    subscribe(listener: () => void) { listeners.add(listener); return () => { listeners.delete(listener); }; },
    write(position: ReadingPosition) {
      const raw = JSON.stringify(position);
      if (!parseReadingPosition(raw)) return false;
      try {
        const storage = access();
        if (!storage) return false;
        if (storage.getItem(readingStorageKey) !== raw) storage.setItem(readingStorageKey, raw);
        if (storage.getItem(readingStorageKey) !== raw) return false;
        notify(); return true;
      } catch { return false; }
    },
  };
}

function browserStorage(): Storage | null {
  try { return typeof window === 'undefined' ? null : window.localStorage; } catch { return null; }
}
const store = createReadingStore(browserStorage);
export const getReadingSnapshot = store.getSnapshot;
export const writeReadingPosition = store.write;
export const getServerReadingSnapshot = () => null;

export function subscribeExternalReadingChange(listener: () => void) {
  const change = (event: StorageEvent) => {
    const area = browserStorage();
    if (area && event.storageArea === area && (event.key === readingStorageKey || event.key === null)) listener();
  };
  window.addEventListener('storage', change);
  return () => window.removeEventListener('storage', change);
}

export function subscribeReadingPosition(listener: () => void) {
  const unsubscribe = store.subscribe(listener);
  const external = subscribeExternalReadingChange(listener);
  return () => { unsubscribe(); external(); };
}
