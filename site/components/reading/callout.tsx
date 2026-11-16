import type { ReactNode } from 'react';
import { callout } from '../../styled-system/recipes/callout.js';

export function Callout({ title, children, tone = 'information' }: { title: string; children: ReactNode; tone?: 'information' | 'caution' }) {
  const c = callout({ tone });
  return <aside className={c.root} aria-label={title}>
    <p className={c.title}>{title}</p><div className={c.body}>{children}</div>
  </aside>;
}
