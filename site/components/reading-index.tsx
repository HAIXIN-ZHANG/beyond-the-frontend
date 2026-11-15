import type { Locale } from '../config/i18n.ts';
import { site } from '../config/site.ts';
import { getMessages } from '../config/i18n.ts';

export function ReadingIndex({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  return (
    <section className="reading-index" aria-labelledby="contents-title">
      <p className="eyebrow">{messages.reading}</p>
      <h1 id="contents-title">{messages.contents}</h1>
      <div className="empty-state">
        <h2>{messages.emptyTitle}</h2>
        <p>{messages.emptyDescription}</p>
        <a className="text-link" href={site.issues}>{messages.suggest} <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
