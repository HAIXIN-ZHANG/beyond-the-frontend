import Link from 'next/link';
import { site } from '../config/site.mjs';
import { getMessages, localePath } from '../config/i18n.mjs';
import { LanguageSwitch } from './language-switch.jsx';

export function SiteHeader({ locale, languageHome = false }) {
  const messages = getMessages(locale);
  const otherLocale = locale === 'en' ? 'zh' : 'en';
  return (
    <header className="site-header shell">
      <Link className="wordmark" href={localePath(locale)} aria-label={`${site.name} · ${messages.home}`} lang="en">
        {site.name}
      </Link>
      <nav aria-label={messages.navigation}>
        <Link href={localePath(locale, 'read/')}>{messages.contents}</Link>
        {languageHome ? (
          <Link href={localePath(otherLocale)} hrefLang={otherLocale} lang={getMessages(otherLocale).lang}>
            {messages.switchText}
          </Link>
        ) : <LanguageSwitch locale={locale} />}
        <a href={site.repository} lang="en">GitHub <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}
