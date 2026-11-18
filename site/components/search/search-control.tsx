'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import type { Locale } from '../../config/i18n.ts';
import type { SearchIndex } from '../../content/search.ts';
import { localePath } from '../../config/i18n.ts';
import { withBasePath } from '../../config/deployment.ts';
import { readSearchIndex, searchEntries, normalizeSearch, highlightSearch } from '../../content/search.ts';
import { Button } from '../ui/button.tsx';
import { searchMessages } from './messages.ts';

export function SearchControl({ locale }: { locale: Locale }) {
  const m = searchMessages(locale), id = useId();
  const dialog = useRef<HTMLDialogElement>(null), input = useRef<HTMLInputElement>(null), results = useRef<HTMLOListElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const [query, setQuery] = useState(''), [composing, setComposing] = useState(false);
  const [index, setIndex] = useState<SearchIndex | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');
  const loadIndex = useCallback(async () => {
    if (locale === 'en') return;
    setStatus('loading');
    try {
      const response = await fetch(withBasePath(`/search-index/${locale}.json`, process.env.NEXT_PUBLIC_BASE_PATH), { cache: 'no-store' });
      if (!response.ok) throw new Error('Search index unavailable');
      setIndex(readSearchIndex(await response.json(), locale)); setStatus('ready');
    } catch { setStatus('error'); }
  }, [locale]);
  const open = useCallback(() => {
    if (!dialog.current || dialog.current.open) return;
    returnFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    dialog.current.showModal(); input.current?.focus({ preventScroll: true });
    if (status === 'idle') void loadIndex();
  }, [loadIndex, status]);
  useEffect(() => {
    const shortcut = (event: KeyboardEvent) => {
      if (event.isComposing || event.altKey || !(event.metaKey || event.ctrlKey) || event.key.toLowerCase() !== 'k') return;
      if (event.target instanceof HTMLElement && (event.target.isContentEditable || event.target.closest('input, textarea, select'))) return;
      event.preventDefault(); open();
    };
    document.addEventListener('keydown', shortcut);
    return () => document.removeEventListener('keydown', shortcut);
  }, [open]);
  const matches = index && !composing ? searchEntries(index, query, locale) : [];
  const highlight = (value: string) => highlightSearch(value, query).map((part, index) => part.matched
    ? <mark key={index}>{part.text}</mark> : part.text);
  function closeForNavigation() {
    // Native result anchors assign destination focus after the dialog's immediate restoration.
    returnFocus.current = null;
    dialog.current?.close();
  }
  const hasQuery = !!normalizeSearch(query);
  const headline = locale === 'en' ? m.unavailable : status === 'loading' ? m.loading : status === 'error' ? m.failed
    : !hasQuery || composing ? m.ready : matches.length ? `${matches.length} ${m.results}` : m.empty;
  return <>
    <Button visual="quiet" className="search-trigger" aria-label={m.title} aria-haspopup="dialog" aria-controls={id} onClick={open}>
      <span className="search-trigger-icon" aria-hidden="true">⌕</span><span className="search-trigger-label">{m.title}</span><kbd aria-hidden="true">⌘ / Ctrl K</kbd>
    </Button>
    <dialog ref={dialog} id={id} className="search-dialog" aria-labelledby={`${id}-title`} aria-describedby={`${id}-scope`}
      onCancel={event => { if (composing) event.preventDefault(); }}
      onClose={() => { if (returnFocus.current?.isConnected && returnFocus.current.getClientRects().length) returnFocus.current.focus({ preventScroll: true }); }}
      onClick={event => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.current?.close();
      }}
      onKeyDown={event => {
        if (composing || event.nativeEvent.isComposing || event.keyCode === 229) {
          if (event.key === 'Escape') event.preventDefault();
          return;
        }
        // Search inputs may consume Escape to clear text before the dialog sees a cancel event.
        if (event.key === 'Escape') { event.preventDefault(); dialog.current?.close(); return; }
        const links = [...(results.current?.querySelectorAll<HTMLAnchorElement>('a') || [])];
        const active = links.indexOf(document.activeElement as HTMLAnchorElement);
        if (event.key === 'ArrowDown' && links.length && (event.target === input.current || active >= 0)) {
          event.preventDefault(); links[Math.min(active + 1, links.length - 1)].focus();
        } else if (event.key === 'ArrowUp' && active >= 0) {
          event.preventDefault(); if (active === 0) input.current?.focus(); else links[active - 1].focus();
        } else if (event.key === 'Enter' && event.target === input.current && links.length) {
          event.preventDefault(); links[0].click();
        }
      }}>
      <div className="search-dialog-heading"><h2 id={`${id}-title`}>{m.title}</h2><Button visual="quiet" onClick={() => dialog.current?.close()}>{m.close}</Button></div>
      <label className="search-label" htmlFor={`${id}-input`}>{m.title}</label>
      <div className="search-field">
        <input ref={input} id={`${id}-input`} type="search" value={query} maxLength={160} autoComplete="off" placeholder={m.placeholder}
          onChange={event => setQuery(event.target.value)} onCompositionStart={() => setComposing(true)} onCompositionEnd={() => setComposing(false)} />
        {query ? <Button visual="quiet" onClick={() => { setQuery(''); input.current?.focus(); }}>{m.clear}</Button> : null}
      </div>
      <p className="search-scope" id={`${id}-scope`}>{m.scope}</p>
      <section className="search-feedback" aria-busy={status === 'loading'}>
        <p className="search-status" role="status">{headline}</p>
        {locale === 'en' ? <Link href="/zh/read/" onClick={closeForNavigation}>{m.chinese} →</Link>
          : status === 'error' ? <><p>{m.retryHint}</p><Button visual="quiet" onClick={() => void loadIndex()}>{m.retry}</Button></>
            : status !== 'loading' && (!hasQuery || composing || !matches.length) ? <p>{hasQuery && !composing ? m.fewer : m.hint}</p> : null}
        {locale === 'zh' && status === 'ready' && !!matches.length ? <ol ref={results} className="search-results">{matches.map(({ entry, excerpt }) => <li key={entry.href}>
          <a href={withBasePath(entry.href, process.env.NEXT_PUBLIC_BASE_PATH)} onClick={closeForNavigation}><span>{highlight(entry.chapterTitle)}</span><strong>{highlight(entry.headingTitle)}</strong></a>
          <p>{highlight(excerpt)}</p>
        </li>)}</ol> : null}
      </section>
      {locale === 'zh' ? <Link className="search-browse" href={localePath(locale, 'read/')} onClick={closeForNavigation}>{m.browse} →</Link> : null}
    </dialog>
  </>;
}
