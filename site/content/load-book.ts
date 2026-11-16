import { createHash } from 'node:crypto';
import { readFile, realpath } from 'node:fs/promises';
import path from 'node:path';
import type { ChapterEntry } from './manifest.ts';
import type { ParsedMarkdown } from './markdown.ts';
import { chapterManifest, validateManifest } from './manifest.ts';
import { parseMarkdown, walkMarkdown } from './markdown.ts';
import { resolveChapterLink } from './links.ts';

export type LoadedChapter = ParsedMarkdown & { entry: ChapterEntry };

export async function loadBook(root: string = process.cwd(), entries: readonly ChapterEntry[] = chapterManifest): Promise<LoadedChapter[]> {
  validateManifest(entries);
  const bookRoot = await realpath(path.join(root, 'book'));
  const chapters = await Promise.all(entries.map(async entry => {
    const source = await realpath(path.join(root, entry.source));
    if (!source.startsWith(`${bookRoot}${path.sep}`)) throw new Error(`Source escapes book/: ${entry.id}`);
    const bytes = await readFile(source);
    if (createHash('sha256').update(bytes).digest('hex') !== entry.sha256) throw new Error(`Reviewed source hash mismatch: ${entry.id}`);
    const parsed = parseMarkdown(bytes.toString('utf8'));
    if (parsed.title !== entry.title) throw new Error(`Source H1 differs from reviewed title: ${entry.id}`);
    return { entry, ...parsed };
  }));
  for (const chapter of chapters) walkMarkdown(chapter.tree, node => {
    if (node.type === 'link') node.url = resolveChapterLink(node.url, chapter.entry, chapters);
  });
  return chapters;
}
