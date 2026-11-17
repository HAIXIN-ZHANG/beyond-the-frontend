import type { Locale } from '../config/i18n.ts';
import Link from 'next/link';
import { site } from '../config/site.ts';
import { getMessages, localePath } from '../config/i18n.ts';
import { chapterManifest, chapterPath } from '../content/manifest.ts';

export function HomePage({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  return (
    <section className="book-intro" aria-labelledby="book-title">
      <p className="eyebrow" lang={messages.lang}>{messages.title}</p>
      <h1 id="book-title">{messages.titleLines[0]}<span>{messages.titleLines[1]}</span></h1>
      <p className="intro">{messages.description}</p>
      <p className="availability-note">{messages.availableNotice(chapterManifest.length)}</p>
      <div className="actions">
        <Link className="button" href={localePath(locale, 'read/')}>
          {messages.browse} <span aria-hidden="true">→</span>
        </Link>
        <a className="text-link" href={site.repository}>{messages.repository}</a>
      </div>
      <section className="home-chapters" aria-labelledby="start-reading">
        <h2 id="start-reading">{messages.startReading}</h2>
        {locale === 'en' ? <p className="availability-note">{messages.englishUnavailable}</p> : null}
        <ol>{chapterManifest.map(chapter => <li key={chapter.id}>
          <Link href={chapterPath(chapter)} hrefLang="zh" lang={messages.lang}>
            {messages.chapterLabels[chapter.id] ?? chapter.title}
          </Link>
          <p>{messages.chapterBenefits[chapter.id]}</p>
          <span>{messages.chineseDraft}</span>
        </li>)}</ol>
      </section>
    </section>
  );
}
