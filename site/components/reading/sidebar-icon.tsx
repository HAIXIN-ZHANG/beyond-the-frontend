import type { CSSProperties } from 'react';
import { withBasePath } from '../../config/deployment.ts';

const assets = {
  collapse: '/icons/reader/collapse.svg', expand: '/icons/reader/expand.svg',
  hide: '/icons/reader/hide.svg', reopen: '/icons/reader/reopen.svg',
} as const;

// Exact approved Figma exports; masking preserves their geometry while inheriting semantic color.
export function SidebarIcon({ kind }: { kind: keyof typeof assets }) {
  const style = { '--sidebar-icon-url': `url("${withBasePath(assets[kind], process.env.NEXT_PUBLIC_BASE_PATH)}")` } as CSSProperties;
  return <span className="sidebar-icon" data-sidebar-icon={kind} aria-hidden="true" style={style} />;
}
