import { SiteHeader } from './site-header.jsx';
import { site } from '../config/site.mjs';
import { getMessages } from '../config/i18n.mjs';
import '../styles/global.css';

export function DocumentLayout({ children, locale, languageHome = false }) {
  const messages = getMessages(locale);
  return (
    <html lang={messages.lang}>
      <body>
        <a className="skip-link" href="#main">{messages.skip}</a>
        <SiteHeader locale={locale} languageHome={languageHome} />
        <main className="shell main" id="main" tabIndex={-1}>{children}</main>
        <footer className="site-footer shell">
          <p>{messages.title}</p>
          <a href={site.issues}>{messages.feedback} <span aria-hidden="true">↗</span></a>
        </footer>
      </body>
    </html>
  );
}
