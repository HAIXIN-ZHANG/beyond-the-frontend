import { readingNavigation } from '../../styled-system/recipes/reading-navigation.js';

export type OutlineItem = { id: string; title: string; level: 2 | 3 | 4 };

export function OnThisPage({ label, headings, currentId }: { label: string; headings: readonly OutlineItem[]; currentId?: string }) {
  const c = readingNavigation();
  return <nav aria-label={label} className={c.root}>
    <p className={c.heading}>{label}</p>
    <ol className={c.list}>{headings.map(heading => <li key={heading.id} data-level={heading.level} className={c.item}>
      <a className={c.link} href={`#${encodeURIComponent(heading.id)}`} aria-current={currentId === heading.id ? 'location' : undefined}>{heading.title}</a>
    </li>)}</ol>
  </nav>;
}
