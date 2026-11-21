import type { Locale } from '../../config/i18n.ts';
import { getMessages } from '../../config/i18n.ts';
import { site } from '../../config/site.ts';
import { withBasePath } from '../../config/deployment.ts';

// Server-rendered secondary information, independent of chapter navigation and its scroller.
export function BookInfo({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  return <section className="book-info" aria-label={messages.bookInformation}>
    <p className="book-info-author"><span className="book-info-label">{messages.authorCaption}</span><span className="book-info-name">{messages.authorName}</span></p>
    <a href={site.issues}><span className="book-info-icon" aria-hidden="true" style={{ maskImage: `url("${withBasePath('/icons/reader/message.svg', process.env.NEXT_PUBLIC_BASE_PATH)}")` }} /><span>{messages.feedback}</span></a>
  </section>;
}
