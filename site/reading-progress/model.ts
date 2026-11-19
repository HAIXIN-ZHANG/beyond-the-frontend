export type ReadingLocator = {
  chapterId: string; title: string; href: string; sourceHash: string;
  headings: readonly { id: string; title: string }[];
};
export type ReadingPosition = { version: 1; chapterId: string; headingId: string | null; sourceHash: string };
export const readingStorageKey = 'vctw.reading.v1.last';

export function parseReadingPosition(raw: string | null): ReadingPosition | null {
  if (!raw || raw.length > 2048) return null;
  try {
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== 'object' || Object.keys(value).sort().join(',') !== 'chapterId,headingId,sourceHash,version' ||
      !('version' in value) || value.version !== 1 || !('chapterId' in value) || typeof value.chapterId !== 'string' ||
      !/^[a-zA-Z0-9-]{1,80}$/.test(value.chapterId) || !('sourceHash' in value) || typeof value.sourceHash !== 'string' ||
      !/^[a-f0-9]{64}$/.test(value.sourceHash) || !('headingId' in value) ||
      value.headingId !== null && (typeof value.headingId !== 'string' || !value.headingId.length || value.headingId.length > 512)) return null;
    return value as ReadingPosition;
  } catch { return null; }
}

export function resolveReadingPosition(raw: string | null, chapters: readonly ReadingLocator[]) {
  const position = parseReadingPosition(raw);
  const chapter = position && chapters.find(item => item.chapterId === position.chapterId);
  if (!position || !chapter) return null;
  const heading = chapter.sourceHash === position.sourceHash
    ? chapter.headings.find(item => item.id === position.headingId) : undefined;
  const stale = chapter.sourceHash !== position.sourceHash || position.headingId !== null && !heading;
  return { chapter, heading, stale, href: `${chapter.href}${heading ? `#${encodeURIComponent(heading.id)}` : ''}` };
}
