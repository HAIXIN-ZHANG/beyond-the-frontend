'use client';

import { useSyncExternalStore } from 'react';
import type { Locale } from '../../config/i18n.ts';
import { getMessages } from '../../config/i18n.ts';
import { withBasePath } from '../../config/deployment.ts';
import type { ReadingLocator } from '../../reading-progress/model.ts';
import { resolveReadingPosition } from '../../reading-progress/model.ts';
import { getReadingSnapshot, getServerReadingSnapshot, subscribeReadingPosition } from '../../reading-progress/store.ts';
import { action } from '../../styled-system/recipes/action.js';

function useReadingPosition(chapters: readonly ReadingLocator[]) {
  const raw = useSyncExternalStore(subscribeReadingPosition, getReadingSnapshot, getServerReadingSnapshot);
  return resolveReadingPosition(raw, chapters);
}

export function HomeReadingAction({ chapters, firstLabel }: { chapters: readonly ReadingLocator[]; firstLabel: string }) {
  const position = useReadingPosition(chapters);
  const copy = getMessages('zh').continueReading;
  const label = position?.stale ? '从本章开头读起' : position ? copy.title : firstLabel;
  return <div className="home-reading-action">
    <a className={action({ visual: 'primary' })} hrefLang="zh"
      href={withBasePath(position?.href ?? chapters[0].href, process.env.NEXT_PUBLIC_BASE_PATH)}
      aria-describedby={position?.stale ? 'home-last-section home-changed-section' : position ? 'home-last-section' : undefined}>
      {label} <span aria-hidden="true">→</span>
    </a>
    {position ? <small id="home-last-section">{position.heading?.title ?? position.chapter.title}</small> : null}
    {position?.stale ? <small id="home-changed-section">{copy.fallback}</small> : null}
  </div>;
}

export function ContinueReading({ locale, chapters }: { locale: Locale; chapters: readonly ReadingLocator[] }) {
  const result = useReadingPosition(chapters), m = getMessages(locale).continueReading;
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
