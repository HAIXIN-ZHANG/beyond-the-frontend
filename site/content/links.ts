import path from 'node:path';
import type { ChapterEntry } from './manifest.ts';
import { chapterPath } from './manifest.ts';

export type ChapterLinkTarget = { entry: ChapterEntry; headingIds: readonly string[] };

export function resolveChapterLink(url: string, current: ChapterEntry, targets: readonly ChapterLinkTarget[]): string {
  if (!url || [...url].some(character => character.charCodeAt(0) <= 32 || character.charCodeAt(0) === 127 || character === '\\') || url.startsWith('//')) {
    throw new Error(`Unsafe chapter link: ${url}`);
  }
  if (/^[a-z][a-z0-9+.-]*:/i.test(url)) {
    const parsed = new URL(url);
    if (!['https:', 'http:', 'mailto:'].includes(parsed.protocol)) throw new Error(`Unsafe chapter link scheme: ${url}`);
    return url;
  }
  const [file, fragment, ...extra] = url.split('#');
  if (extra.length || file.includes('?') || file.startsWith('/')) throw new Error(`Unapproved chapter link: ${url}`);
  const source = file ? path.posix.normalize(path.posix.join(path.posix.dirname(current.source), decodeURIComponent(file))) : current.source;
  const target = targets.find(chapter => chapter.entry.source === source);
  if (!target) throw new Error(`Chapter link is outside the reviewed allowlist: ${url}`);
  let anchor = '';
  if (fragment !== undefined) {
    const id = decodeURIComponent(fragment);
    if (!target.headingIds.includes(id)) throw new Error(`Unknown chapter heading: ${url}`);
    anchor = `#${encodeURIComponent(id)}`;
  }
  return file ? `${chapterPath(target.entry)}${anchor}` : anchor;
}
