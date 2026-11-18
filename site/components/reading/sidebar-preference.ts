export type SidebarMode = 'expanded' | 'collapsed' | 'hidden';
export type SidebarPreference = { mode: SidebarMode; width: number };
export const sidebarStorageKey = 'btf.readerNavigation';
export const sidebarDefault: SidebarPreference = { mode: 'expanded', width: 248 };
export const sidebarMin = 224;
export const sidebarMax = 360;
export const sidebarBreakpoint = 900;

export function readSidebarPreference(raw: string | null): SidebarPreference {
  try {
    const value: unknown = JSON.parse(raw ?? 'null');
    if (typeof value !== 'object' || value === null) return sidebarDefault;
    const { mode, width } = value as Record<string, unknown>;
    if ((mode === 'expanded' || mode === 'collapsed' || mode === 'hidden') &&
      typeof width === 'number' && Number.isInteger(width) && width >= sidebarMin && width <= sidebarMax) {
      return { mode, width };
    }
  } catch { /* Unavailable or malformed preferences use the static reading layout. */ }
  return sidebarDefault;
}

export function sidebarWidthLimit(viewport: number): number {
  return Math.max(sidebarMin, Math.min(sidebarMax, Math.floor(viewport - 600)));
}

export function effectiveSidebarWidth(width: number, viewport: number): number {
  return Math.max(sidebarMin, Math.min(width, sidebarWidthLimit(viewport)));
}
