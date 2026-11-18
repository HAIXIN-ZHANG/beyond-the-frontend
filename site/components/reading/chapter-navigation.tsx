import Link from 'next/link';
import { readingNavigation } from '../../styled-system/recipes/reading-navigation.js';

type AvailableChapter = { id: string; title: string; availability: string; status: 'available'; href: string; current?: boolean };
type PlannedChapter = { id: string; title: string; availability: string; status: 'planned'; href?: never; current?: never };
export type ChapterNavigationGroup = { id: string; title: string; chapters: readonly (AvailableChapter | PlannedChapter)[] };

export function ChapterNavigation({ label, groups, showAvailability = true }: { label: string; groups: readonly ChapterNavigationGroup[]; showAvailability?: boolean }) {
  const c = readingNavigation();
  return <nav className={c.root} aria-label={label}>
    {groups.map(group => <section className={c.group} key={group.id} aria-label={group.title}>
      <p className={c.heading}>{group.title}</p>
      <ul className={c.list}>{group.chapters.map(chapter => <li className={c.item} key={chapter.id}>
        {chapter.status === 'available'
          ? <Link className={c.link} href={chapter.href} aria-current={chapter.current ? 'page' : undefined}>{chapter.title}{showAvailability ? <span className={c.availability}>{chapter.availability}</span> : null}</Link>
          : <span className={c.link} aria-disabled="true">{chapter.title}{showAvailability ? <span className={c.availability}>{chapter.availability}</span> : null}</span>}
      </li>)}</ul>
    </section>)}
  </nav>;
}
