import Link from 'next/link';
import type { ChapterEntry } from '../../content/manifest.ts';
import { chapterPath } from '../../content/manifest.ts';
import { readingParts } from '../../content/reading-parts.ts';
import { ChapterNavigation } from './chapter-navigation.tsx';

export function BookNavigation({ chapters, currentId }: { chapters: readonly ChapterEntry[]; currentId: string }) {
  const groups = readingParts(chapters, 'zh').map(part => ({
    id: part.id,
    title: part.title,
    chapters: part.entries.map(chapter => ({
      id: chapter.id, title: chapter.title, status: 'available' as const, href: chapterPath(chapter),
      current: chapter.id === currentId, availability: '',
    })),
  }));
  return <>
    <Link className="book-overview" href="/zh/">本书首页</Link>
    <ChapterNavigation label="全书导航" groups={groups} showAvailability={false} />
  </>;
}
