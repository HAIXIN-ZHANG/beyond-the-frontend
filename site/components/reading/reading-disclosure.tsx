'use client';

import type { ReactNode } from 'react';
import { useLayoutEffect, useRef } from 'react';

export function ReadingDisclosure({ label, children }: { label: string; children: ReactNode }) {
  const details = useRef<HTMLDetailsElement>(null);
  const summary = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const dismissWhenHidden = () => {
      const element = details.current;
      if (!element?.open || element.getClientRects().length) return;
      // A browser may already blur a newly hidden descendant to body before resize fires.
      const returnFocus = element.contains(document.activeElement) || document.activeElement === document.body;
      element.open = false;
      if (returnFocus) document.getElementById('main')?.focus({ preventScroll: true });
    };
    window.addEventListener('resize', dismissWhenHidden);
    // Native details can open before hydration; reconcile a breakpoint crossed before mounting.
    dismissWhenHidden();
    return () => window.removeEventListener('resize', dismissWhenHidden);
  }, []);
  function close() {
    if (details.current) details.current.open = false;
    summary.current?.focus();
  }
  return <details ref={details} className="reading-disclosure"
    onKeyDown={event => {
      if (event.key === 'Escape' && details.current?.open) { event.preventDefault(); event.stopPropagation(); close(); }
    }}
    onClick={event => {
      if (event.target instanceof Element && event.target.closest('a')) close();
    }}>
    <summary ref={summary}>{label}</summary>
    <div className="reading-disclosure-body">{children}</div>
  </details>;
}
