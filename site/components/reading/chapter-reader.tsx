import Link from 'next/link';
import type { LoadedChapter } from '../../content/load-book.ts';
import type { ChapterEntry } from '../../content/manifest.ts';
import { chapterPath } from '../../content/manifest.ts';
import { BookNavigation } from './book-navigation.tsx';
import { OnThisPage } from './on-this-page.tsx';
import { MarkdownContent } from './markdown-content.tsx';
import { ReadingDisclosure } from './reading-disclosure.tsx';

export function ChapterReader({ chapter, chapters }: { chapter: LoadedChapter; chapters: readonly ChapterEntry[] }) {
  const index = chapters.findIndex(entry => entry.id === chapter.entry.id);
  const previous = chapters[index - 1];
  const next = chapters[index + 1];
  const bookNavigation = <BookNavigation chapters={chapters} currentId={chapter.entry.id} />;
  const outline = <OnThisPage label="本章目录" headings={chapter.headings} />;
  return <div className="chapter-layout">
    <aside className="book-rail">{bookNavigation}</aside>
    <div className="chapter-column">
      <div className="reading-tools">
        <div className="mobile-book-navigation"><ReadingDisclosure label="章节导航">{bookNavigation}</ReadingDisclosure></div>
        <div className="mobile-outline"><ReadingDisclosure label="本章目录">{outline}</ReadingDisclosure></div>
      </div>
      <p className="chapter-context">中文 · 已审阅草稿 <span>全书仍在写作中</span></p>
      <article className="chapter-prose" data-chapter-id={chapter.entry.id} data-source-sha256={chapter.entry.sha256}>
        <MarkdownContent node={chapter.tree} sharing={{ chapterId: chapter.entry.id, chapterTitle: chapter.title, sourceHash: chapter.entry.sha256 }} />
      </article>
      <nav className="chapter-pagination" aria-label="前后章节">
        {previous ? <Link href={chapterPath(previous)} rel="prev"><span>上一章</span>{previous.title}</Link> : null}
        {next ? <Link href={chapterPath(next)} rel="next"><span>下一章</span>{next.title}</Link>
          : <Link href="/zh/read/"><span>已到当前最后一章</span>返回可阅读章节</Link>}
      </nav>
    </div>
    <aside className="outline-rail">{outline}</aside>
  </div>;
}
