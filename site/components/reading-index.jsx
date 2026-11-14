import { site } from '../config/site.mjs';
import { getMessages } from '../config/i18n.mjs';

export function ReadingIndex({ locale }) {
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
