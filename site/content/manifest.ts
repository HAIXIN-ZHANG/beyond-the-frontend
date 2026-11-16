export type ChapterEntry = {
  id: string;
  locale: 'zh';
  slug: string;
  title: string;
  order: number;
  source: string;
  sha256: string;
  status: 'reviewed-draft';
  review: string;
};

export const chapterManifest: readonly ChapterEntry[] = [
  {
    id: 'opening', locale: 'zh', slug: 'before-we-start', title: '写在前面：能跑，然后呢？', order: 1,
    source: 'book/drafts/zh/00-before-we-start.md',
    sha256: '244c4f7a9ddeb781d8530691d07ba17b9daccf611b9631ea60faa412b87a6d90',
    status: 'reviewed-draft', review: 'docs/reviews/beta1-opening-alignment.md',
  },
  {
    id: 'G01', locale: 'zh', slug: 'a-page-and-a-system', title: '一个页面，究竟连着什么？', order: 2,
    source: 'book/drafts/zh/01-a-page-and-a-system.md',
    sha256: 'b928e5df21876c0ca49a3c227eb6c7e20723b3f22bb9c7cb2d560cc198db62d2',
    status: 'reviewed-draft', review: 'docs/reviews/W02.md',
  },
];

export function chapterPath(chapter: Pick<ChapterEntry, 'slug'>): string {
  return `/zh/read/${chapter.slug}/`;
}

export function validateManifest(entries: readonly ChapterEntry[]): void {
  const identities = new Set<string>();
  const routes = new Set<string>();
  const sources = new Set<string>();
  let previousOrder = 0;
  if (!entries.length) throw new Error('The reviewed manifest must not be empty');
  for (const chapter of entries) {
    const identity = `${chapter.locale}/${chapter.id}`;
    const route = chapterPath(chapter);
    if (identities.has(identity) || routes.has(route) || sources.has(chapter.source)) {
      throw new Error(`Duplicate chapter identity, route or source: ${chapter.id}`);
    }
    if (chapter.locale !== 'zh' || chapter.status !== 'reviewed-draft' || !chapter.id || !chapter.title || !chapter.review) {
      throw new Error(`Incomplete reviewed chapter: ${chapter.id}`);
    }
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(chapter.slug) || !/^[a-f0-9]{64}$/.test(chapter.sha256)) {
      throw new Error(`Invalid slug or source hash: ${chapter.id}`);
    }
    if (!/^book\/(?:[\w-]+\/)*[\w-]+\.md$/.test(chapter.source)) {
      throw new Error(`Source must be a Markdown path inside book/: ${chapter.id}`);
    }
    if (!Number.isSafeInteger(chapter.order) || chapter.order <= previousOrder) {
      throw new Error(`Chapter order must be unique and increasing: ${chapter.id}`);
    }
    identities.add(identity); routes.add(route); sources.add(chapter.source); previousOrder = chapter.order;
  }
}

validateManifest(chapterManifest);
