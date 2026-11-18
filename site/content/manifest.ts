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
    sha256: 'b4d0dd040e183cebc0400526ca5b317d23db1dc406e0bd5b00e3af74a940f521',
    status: 'reviewed-draft', review: 'docs/reviews/existing-manuscripts-refresh.md',
  },
  {
    id: 'G01', locale: 'zh', slug: 'a-page-and-a-system', title: '一个页面，究竟连着什么？', order: 2,
    source: 'book/drafts/zh/01-a-page-and-a-system.md',
    sha256: 'e0fca6dd95b87e93107c4279fb4bad120e80a068c8fc91a58689154293b25a05',
    status: 'reviewed-draft', review: 'docs/reviews/existing-manuscripts-refresh.md',
  },
  {
    id: 'F01', locale: 'zh', slug: 'browser-foundations', title: '页面出现之前，浏览器在忙什么？', order: 3,
    source: 'book/drafts/zh/02-browser-foundations.md',
    sha256: '3688b7967433b7a97304438100908d37883d5de9740aaa5c08820b37aa9bf624',
    status: 'reviewed-draft', review: 'docs/reviews/existing-manuscripts-refresh.md',
  },
];

// Explicit compatibility for the single removed introduction heading; never a search entry.
export const legacyHeadingAliases: readonly { chapterId: string; legacyId: string; headingId: string }[] = [
  { chapterId: 'opening', legacyId: '关于本书的-ai-协作', headingId: '我为什么想写这本书' },
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
