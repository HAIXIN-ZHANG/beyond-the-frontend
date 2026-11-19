'use client';

import { useSyncExternalStore } from 'react';
import type { Locale } from '../../config/i18n.ts';
import { getMessages } from '../../config/i18n.ts';
import { withBasePath } from '../../config/deployment.ts';
import type { ReadingLocator } from '../../reading-progress/model.ts';
import { resolveReadingPosition } from '../../reading-progress/model.ts';
import { getReadingSnapshot, getServerReadingSnapshot, subscribeReadingPosition } from '../../reading-progress/store.ts';
import { action } from '../../styled-system/recipes/action.js';

export function ContinueReading({ locale, chapters }: { locale: Locale; chapters: readonly ReadingLocator[] }) {
  const raw = useSyncExternalStore(subscribeReadingPosition, getReadingSnapshot, getServerReadingSnapshot);
  const result = resolveReadingPosition(raw, chapters), m = getMessages(locale).continueReading;
  if (!result) return null;
  return <section className="continue-reading" aria-labelledby="continue-reading-title">
    <h2 id="continue-reading-title">{m.title}</h2>
    {locale === 'en' ? <p className="continue-language">{m.destination}</p> : null}
    <strong className="continue-chapter" lang="zh-CN">{result.chapter.title}</strong>
    {result.heading ? <p>{m.lastRead} <span lang="zh-CN">{result.heading.title}</span></p> : null}
    {result.stale ? <p className="continue-fallback">{m.fallback}</p> : null}
    <a className={action({ visual: 'primary' })} href={withBasePath(result.href, process.env.NEXT_PUBLIC_BASE_PATH)} hrefLang="zh">{m.return} →</a>
    <p className="continue-local">{m.local}</p>
    <p>{m.shared}</p>
  </section>;
}
