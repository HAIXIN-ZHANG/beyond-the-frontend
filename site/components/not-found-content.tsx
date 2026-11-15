import type { Locale } from '../config/i18n.ts';
import Link from 'next/link';
import { getMessages, localePath } from '../config/i18n.ts';

export function NotFoundContent({ locale }: { locale: Locale }) {
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
