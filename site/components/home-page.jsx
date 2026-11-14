import Link from 'next/link';
import { site } from '../config/site.mjs';
import { getMessages, localePath } from '../config/i18n.mjs';

export function HomePage({ locale }) {
  const messages = getMessages(locale);
  return (
    <section className="book-intro" aria-labelledby="book-title">
      <p className="eyebrow" lang="en">{site.name}</p>
      <h1 id="book-title">{messages.titleLines[0]}<span>{messages.titleLines[1]}</span></h1>
      <p className="intro">{messages.description}</p>
      <div className="actions">
        <Link className="button" href={localePath(locale, 'read/')}>
          {messages.browse} <span aria-hidden="true">→</span>
        </Link>
        <a className="text-link" href={site.repository}>{messages.repository}</a>
      </div>
    </section>
  );
}
