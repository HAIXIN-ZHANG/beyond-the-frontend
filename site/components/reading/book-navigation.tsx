import type { ChapterEntry } from '../../content/manifest.ts';
import { chapterPath } from '../../content/manifest.ts';
import { ChapterNavigation } from './chapter-navigation.tsx';

const plannedParts = [
  '产品目标与全栈架构全景', '前端 Design System 与产品交互', 'API、后端与外部集成',
  '数据库、搜索与数据流', '异步、流量与可靠性', '云、测试与交付',
  '可观测性、排错与恢复', 'AI 产品架构与协作开发',
];

export function BookNavigation({ chapters, currentId }: { chapters: readonly ChapterEntry[]; currentId: string }) {
  return <>
    <ChapterNavigation label="全书导航" groups={[{ id: 'available', title: '可阅读 · 中文', chapters: chapters.map(chapter => ({
      id: chapter.id, title: chapter.title, status: 'available', href: chapterPath(chapter),
      current: chapter.id === currentId, availability: '已审阅草稿',
    })) }]} />
    <section className="planned-map" aria-label="计划中的八篇">
      <p>全书方向 · 计划中的八篇</p>
      <ol>{plannedParts.map(part => <li key={part}>{part}</li>)}</ol>
      <p>全书仍在写作中。以上是内容方向，可阅读章节见上方。</p>
    </section>
    <p className="reading-attribution">Jason Zhang · AI 辅助创作</p>
  </>;
}
