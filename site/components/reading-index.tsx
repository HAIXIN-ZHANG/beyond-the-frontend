import type { Locale } from '../config/i18n.ts';
import Link from 'next/link';
import { site } from '../config/site.ts';
import { getMessages, localePath } from '../config/i18n.ts';
import { getBook } from '../content/book.ts';
import { chapterPath } from '../content/manifest.ts';
import { ChapterNavigation } from './reading/chapter-navigation.tsx';
import { homeContent } from './home-content.ts';

export async function ReadingIndex({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const copy = homeContent[locale];
  const chapters = await getBook();
  return (
    <div className="directory-layout">
      <aside className="directory-sidebar home-sidebar">
        <ChapterNavigation label={copy.navigation} showAvailability={false} groups={[{
          id: 'book', title: copy.book, chapters: [
            { id: 'overview', title: copy.overview, availability: '', status: 'available', href: localePath(locale) },
            { id: 'directory', title: messages.contents, availability: '', status: 'available', href: localePath(locale, 'read/'), current: true },
          ],
        }]} />
      </aside>
      <section className="reading-index" aria-labelledby="contents-title">
        <p className="eyebrow">{copy.book}</p>
        <h1 id="contents-title">{messages.directory.title}</h1>
        <p className="availability-note">{messages.availableNotice(chapters.length)}</p>
        {locale === 'en' ? <p>{messages.englishUnavailable}</p> : null}
        <section className="directory-chapters home-chapters" aria-labelledby="directory-available">
          <h2 id="directory-available">{messages.directory.available}</h2>
          <p id="directory-availability" className="visually-hidden">{messages.chineseDraft}</p>
          <ol className="available-chapters">{chapters.map((chapter, index) => <li key={chapter.entry.id}>
            <span className="directory-chapter-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <Link href={chapterPath(chapter.entry)} hrefLang="zh" lang={messages.lang} aria-describedby="directory-availability">
                <span className="directory-chapter-title">{messages.chapterLabels[chapter.entry.id] ?? chapter.title}</span>
                <span className="directory-chapter-language" aria-hidden="true">{messages.directory.openChinese} →</span>
              </Link>
              <p>{messages.chapterBenefits[chapter.entry.id]}</p>
            </div>
          </li>)}</ol>
        </section>
        <section className="directory-planned" aria-labelledby="directory-planned-title">
          <h2 id="directory-planned-title">{messages.directory.planned}</h2>
          <ul>{copy.topics.map(topic => <li key={topic}>{topic}</li>)}</ul>
          <p>{copy.planNotice}</p>
        </section>
        <a className="text-link" href={site.issues}>{messages.suggest} <span aria-hidden="true">↗</span></a>
      </section>
    </div>
  );
}
