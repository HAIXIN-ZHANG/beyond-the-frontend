import type { Locale } from '../config/i18n.ts';
import Link from 'next/link';
import { site } from '../config/site.ts';
import { getMessages, localePath } from '../config/i18n.ts';
import { LanguageSwitch } from './language-switch.tsx';
import { AppearanceControl } from './ui/appearance-control.tsx';
import { SearchControl } from './search/search-control.tsx';

export function SiteHeader({ locale, languageHome = false }: { locale: Locale; languageHome?: boolean }) {
  const messages = getMessages(locale);
  const otherLocale = locale === 'en' ? 'zh' : 'en';
  return (
    <header className="site-header shell">
      <Link className="wordmark" href={localePath(locale)} aria-label={`${site.name} · ${messages.home}`} lang="en">
        {site.name}
      </Link>
      <SearchControl locale={locale} />
      <nav aria-label={messages.navigation}>
        <Link href={localePath(locale, 'read/')}>{messages.contents}</Link>
        {languageHome ? (
          <Link href={localePath(otherLocale)} hrefLang={otherLocale} lang={getMessages(otherLocale).lang}>
            {messages.switchText}
          </Link>
        ) : <LanguageSwitch locale={locale} />}
        <a href={site.repository} lang="en">GitHub <span aria-hidden="true">↗</span></a>
        <AppearanceControl locale={locale} />
      </nav>
    </header>
  );
}
