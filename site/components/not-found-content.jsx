import Link from 'next/link';
import { getMessages, localePath } from '../config/i18n.mjs';

export function NotFoundContent({ locale }) {
  const messages = getMessages(locale);
  return (
    <section className="reading-index" aria-labelledby="missing-title">
      <p className="eyebrow">404</p>
      <h1 id="missing-title">{messages.missing}</h1>
      <p className="intro">{messages.missingDescription}</p>
      <Link className="button" href={localePath(locale)}>{messages.back} <span aria-hidden="true">→</span></Link>
    </section>
  );
}
