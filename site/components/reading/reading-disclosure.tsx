'use client';

import type { ReactNode } from 'react';
import { useLayoutEffect, useRef } from 'react';

export function ReadingDisclosure({ label, compactLabel, children }: { label: string; compactLabel?: string; children: ReactNode }) {
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
    function outside(event: PointerEvent) {
      const element = details.current;
      if (!element?.open || !(event.target instanceof Element) || element.contains(event.target)) return;
      const needsReturn = element.contains(document.activeElement) && !event.target.closest('a, button, input, select, textarea, summary, [tabindex]');
      element.open = false;
      if (needsReturn) summary.current?.focus({ preventScroll: true });
    }
    function overlay(event: Event) {
      const element = details.current;
      if ((event as ToggleEvent).newState === 'open' && event.target instanceof Element &&
        element?.open && !element.contains(event.target)) element.open = false;
    }
    document.addEventListener('pointerdown', outside, true);
    document.addEventListener('beforetoggle', overlay, true);
    window.addEventListener('resize', dismissWhenHidden);
    // Native details can open before hydration; reconcile a breakpoint crossed before mounting.
    dismissWhenHidden();
    return () => {
      window.removeEventListener('resize', dismissWhenHidden);
      document.removeEventListener('pointerdown', outside, true);
      document.removeEventListener('beforetoggle', overlay, true);
    };
  }, []);
  function close() {
    if (details.current) details.current.open = false;
    summary.current?.focus({ preventScroll: true });
  }
  return <details ref={details} className="reading-disclosure" name="reader-tools"
    onKeyDown={event => {
      if (event.key === 'Escape' && details.current?.open) { event.preventDefault(); event.stopPropagation(); close(); }
    }}
    onClick={event => {
      if (event.target instanceof Element && event.target.closest('a')) close();
    }} onToggle={event => {
      if (!event.currentTarget.open) return;
      for (const popover of document.querySelectorAll<HTMLElement>('.appearance-panel:popover-open')) popover.hidePopover();
      // Keep one nearby navigation panel open without changing the reading position.
      for (const sibling of event.currentTarget.closest('.reading-tools')?.querySelectorAll<HTMLDetailsElement>('details[open]') ?? []) {
        if (sibling !== event.currentTarget) sibling.open = false;
      }
    }}>
    <summary ref={summary} aria-label={label}>{compactLabel ?? label}</summary>
    <div className="reading-disclosure-body">{children}</div>
  </details>;
}
