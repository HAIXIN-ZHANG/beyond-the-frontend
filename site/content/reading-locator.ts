import type { LoadedChapter } from './load-book.ts';
import type { ReadingLocator } from '../reading-progress/model.ts';
import { chapterPath } from './manifest.ts';
import { nodeText, walkMarkdown } from './markdown.ts';

// Public identity/heading projection only; manuscript text and internal paths remain server-side.
export function readingLocator(chapter: LoadedChapter): ReadingLocator {
  const headings: { id: string; title: string }[] = [];
  walkMarkdown(chapter.tree, node => {
    if (node.type === 'heading' && node.data?.id) headings.push({ id: node.data.id, title: nodeText(node) });
  });
  return { chapterId: chapter.entry.id, title: chapter.title, href: chapterPath(chapter.entry), sourceHash: chapter.entry.sha256, headings };
}
