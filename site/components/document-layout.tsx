import type { ReactNode } from 'react';
import type { Locale } from '../config/i18n.ts';
import { SiteHeader } from './site-header.tsx';
import { site } from '../config/site.ts';
import { getMessages } from '../config/i18n.ts';
import { ThemeHead } from '../app/theme-head.tsx';
import { ThemePreferenceSelect } from './theme-preference-select.tsx';
import '../styles/global.css';

type DocumentLayoutProps = {
  children: ReactNode;
  locale: Locale;
  languageHome?: boolean;
};

export function DocumentLayout({ children, locale, languageHome = false }: DocumentLayoutProps) {
  const messages = getMessages(locale);
  return (
    <html lang={messages.lang} suppressHydrationWarning>
      <ThemeHead />
      <body>
        <a className="skip-link" href="#main">{messages.skip}</a>
        <SiteHeader locale={locale} languageHome={languageHome} />
        <main className="shell main" id="main" tabIndex={-1}>{children}</main>
        <footer className="site-footer shell">
          <p>{messages.title}</p>
          <ThemePreferenceSelect locale={locale} />
          <a href={site.issues}>{messages.feedback} <span aria-hidden="true">↗</span></a>
        </footer>
      </body>
    </html>
  );
}
