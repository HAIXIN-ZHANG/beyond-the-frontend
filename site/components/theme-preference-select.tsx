'use client';

import type { Locale } from '../config/i18n.ts';
import { getMessages } from '../config/i18n.ts';
import { useTheme } from '../theme/use-theme.ts';

// Native foundation control; CMP01 owns the final ThemeControl recipe.
export function ThemePreferenceSelect({ locale }: { locale: Locale }) {
  const { preference, setPreference } = useTheme();
  const messages = getMessages(locale);
  return (
    <label className="theme-preference">
      {messages.appearance}
      <select value={preference} onChange={event => {
        const value = event.currentTarget.value;
        if (value === 'system' || value === 'light' || value === 'dark') setPreference(value);
      }}>
        <option value="system">{messages.systemTheme}</option>
        <option value="light">{messages.dayTheme}</option>
        <option value="dark">{messages.nightTheme}</option>
      </select>
    </label>
  );
}
