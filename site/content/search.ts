import type { Locale } from '../config/i18n.ts';

export type SearchEntry = {
  chapterId: string; chapterTitle: string; headingId: string; headingTitle: string;
  locale: Locale; sourceHash: string; href: string; text: string;
};
export type SearchIndex = { version: 1; locale: Locale; entries: SearchEntry[] };
export type SearchResult = { entry: SearchEntry; excerpt: string; score: number };

export function normalizeSearch(value: string): string {
  return value.normalize('NFKC').toLowerCase().replace(/\s+/gu, ' ').trim();
}

export function searchEntries(index: SearchIndex, query: string, locale: Locale): SearchResult[] {
  const phrase = normalizeSearch(query);
  if (!phrase || index.locale !== locale) return [];
  const terms = [...new Set(phrase.split(' '))];
  return index.entries.filter(entry => entry.locale === locale).flatMap(entry => {
    const heading = normalizeSearch(entry.headingTitle), chapter = normalizeSearch(entry.chapterTitle), text = normalizeSearch(entry.text);
    if (!terms.every(term => `${heading} ${chapter} ${text}`.includes(term))) return [];
    const score = (heading === phrase ? 100 : 0) + (heading.includes(phrase) ? 20 : 0) +
      terms.reduce((total, term) => total + (heading.includes(term) ? 8 : 0) + (chapter.includes(term) ? 3 : 0) + (text.includes(term) ? 1 : 0), 0);
    const firstMatch = Math.max(0, text.indexOf(terms[0]) - 36);
    const excerpt = `${firstMatch ? '…' : ''}${Array.from(entry.text.slice(firstMatch)).slice(0, 140).join('')}${entry.text.length > firstMatch + 140 ? '…' : ''}`;
    return [{ entry, excerpt, score }];
  }).sort((a, b) => b.score - a.score).slice(0, 12);
}

export function readSearchIndex(value: unknown, locale: Locale): SearchIndex {
  if (!value || typeof value !== 'object' || !('version' in value) || value.version !== 1 ||
    !('locale' in value) || value.locale !== locale || !('entries' in value) || !Array.isArray(value.entries)) throw new Error('Invalid search index');
  if (locale === 'en' && value.entries.length) throw new Error('No reviewed English corpus');
  for (const entry of value.entries) {
    if (!entry || typeof entry !== 'object' || ['chapterId', 'chapterTitle', 'headingId', 'headingTitle', 'sourceHash', 'href', 'text'].some(key => typeof entry[key] !== 'string') ||
      entry.locale !== locale || !/^[a-f0-9]{64}$/.test(entry.sourceHash) ||
      !/^\/zh\/read\/[a-z0-9-]+\/#/.test(entry.href) || entry.href.split('#').length !== 2 ||
      entry.href.split('#')[1] !== encodeURIComponent(entry.headingId)) throw new Error('Invalid search entry');
  }
  return value as SearchIndex;
}
