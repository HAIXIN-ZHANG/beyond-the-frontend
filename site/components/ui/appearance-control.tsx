'use client';

import { useId, useLayoutEffect, useRef } from 'react';
import type { Locale } from '../../config/i18n.ts';
import type { ThemePreference } from '../../theme/runtime.ts';
import { getMessages } from '../../config/i18n.ts';
import { useTheme } from '../../theme/use-theme.ts';
import { IconButton } from './icon-button.tsx';

export function AppearanceControl({ locale }: { locale: Locale }) {
  const id = useId();
  const panel = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const openingRect = useRef<DOMRect | null>(null);
  const { preference, resolvedTheme, setPreference } = useTheme();
  const m = getMessages(locale);
  const options: readonly [ThemePreference, string][] = [['system', m.systemTheme], ['light', m.dayTheme], ['dark', m.nightTheme]];
  const preferenceLabel = options.find(([value]) => value === preference)?.[1] ?? m.systemTheme;
  const effectiveLabel = resolvedTheme === 'dark' ? m.nightTheme : m.dayTheme;

  useLayoutEffect(() => {
    const dismiss = () => {
      if (!panel.current?.matches(':popover-open')) return;
      const returnFocus = panel.current?.contains(document.activeElement);
      panel.current?.hidePopover();
      if (returnFocus) trigger.current?.focus({ preventScroll: true });
    };
    const dismissOnScroll = () => {
      if (!panel.current?.matches(':popover-open')) return;
      const rect = trigger.current?.getBoundingClientRect();
      // A queued scroll from revealing the trigger can arrive after the popover opens.
      // Dismiss only when its anchor actually moved; panel-internal scrolling is safe too.
      if (rect && openingRect.current && rect.top === openingRect.current.top && rect.left === openingRect.current.left) return;
      dismiss();
    };
    window.addEventListener('resize', dismiss);
    window.addEventListener('scroll', dismissOnScroll, { capture: true, passive: true });
    return () => {
      window.removeEventListener('resize', dismiss);
      window.removeEventListener('scroll', dismissOnScroll, true);
    };
  }, []);

  return (
    <div className="appearance-control">
      <IconButton ref={trigger} label={`${m.appearance}: ${preferenceLabel}; ${m.currentAppearance}: ${effectiveLabel}`}
        title={m.appearance} popoverTarget={id} className="appearance-trigger"
        onClick={() => {
          const rect = trigger.current?.getBoundingClientRect();
          openingRect.current = rect ?? null;
          if (rect && panel.current) {
            const gutter = Number.parseFloat(getComputedStyle(panel.current).getPropertyValue('--spacing-layout-gutter-narrow')) || 16;
            const panelWidth = Number.parseFloat(getComputedStyle(panel.current).width);
            const left = Math.max(gutter, Math.min(rect.right - panelWidth, window.innerWidth - gutter - panelWidth));
            panel.current.style.top = `${rect.bottom + 8}px`;
            panel.current.style.left = `${left}px`;
            panel.current.style.right = 'auto';
          }
        }}>
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <g data-appearance-icon="dark"><path d="M20.5 14.5A9 9 0 0 1 9.5 3.5a9 9 0 1 0 11 11Z" /></g>
          <g data-appearance-icon="light"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></g>
        </svg>
      </IconButton>
      <div id={id} ref={panel} popover="auto" className="appearance-panel"
        onToggle={event => {
          if (event.newState === 'open' && panel.current?.matches(':popover-open')) {
            panel.current.querySelector<HTMLInputElement>('input:checked')?.focus({ preventScroll: true });
          }
        }}>
        <fieldset>
          <legend>{m.appearance}</legend>
          <div className="appearance-options">{options.map(([value, label]) => <label key={value} className="appearance-option">
            <input type="radio" name={id} value={value} checked={preference === value}
              onChange={() => { setPreference(value); panel.current?.hidePopover(); trigger.current?.focus({ preventScroll: true }); }} />
            <span>{label}</span>
          </label>)}</div>
        </fieldset>
        <p className="appearance-hint">{preference === 'system' ? m.systemAppearanceHint : m.explicitAppearanceHint}</p>
      </div>
    </div>
  );
}
