import type { Locale } from '../config/i18n.ts';
import Link from 'next/link';
import { site } from '../config/site.ts';
import { getMessages } from '../config/i18n.ts';
import { getBook } from '../content/book.ts';
import { chapterPath } from '../content/manifest.ts';

export async function ReadingIndex({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const chapters = await getBook();
  return (
    <section className="reading-index" aria-labelledby="contents-title">
      <p className="eyebrow">{messages.reading}</p>
      <h1 id="contents-title">{messages.contents}</h1>
      <p className="availability-note">{messages.availableNotice}</p>
      {locale === 'en' ? <p>{messages.englishUnavailable}</p> : null}
      <ol className="available-chapters">{chapters.map(chapter => <li key={chapter.entry.id}>
        <Link href={chapterPath(chapter.entry)} hrefLang="zh" lang={messages.lang}>{messages.chapterLabels[chapter.entry.id] ?? chapter.title}</Link>
        <p>{messages.chineseDraft}</p>
      </li>)}</ol>
      <a className="text-link" href={site.issues}>{messages.suggest} <span aria-hidden="true">↗</span></a>
    </section>
  );
}
