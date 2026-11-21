export type ChapterEntry = {
  id: string;
  locale: 'zh';
  slug: string;
  title: string;
  order: number;
  part: number;
  source: string;
  sha256: string;
  status: 'reviewed-draft';
  review: string;
};

const volumeReview = 'book/revisions/zh/volume-one-r2/README.md';

export const chapterManifest: readonly ChapterEntry[] = [
  {
    id: 'opening', locale: 'zh', slug: 'before-we-start', title: '写在前面：能跑，然后呢？', order: 1, part: 0,
    source: 'book/revisions/zh/volume-one-r2/00-before-we-start.md',
    sha256: '35e5a4715f4bddc53ea7c9af99038b4497f375d1dd7266412f81575e8933e956', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: 'G01', locale: 'zh', slug: 'a-page-and-a-system', title: '一个页面，究竟连着什么？', order: 2, part: 1,
    source: 'book/revisions/zh/volume-one-r2/01-a-page-and-a-system.md',
    sha256: '75d3bcd669f246d16b85644c1c1ff9d7bf15315554af9f4c82ad8c9e6f19a7c7', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: 'F01', locale: 'zh', slug: 'browser-foundations', title: '页面出现之前，浏览器在忙什么？', order: 3, part: 1,
    source: 'book/revisions/zh/volume-one-r2/02-browser-foundations.md',
    sha256: '7d14124963eedef19c1bd56c56951e1f2001bea97b468cf2eeb566c977fb3065', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: 'p1-course-boundaries', locale: 'zh', slug: 'p1-course-boundaries', title: '多了一份讲义，得多开几台机器？', order: 4, part: 1,
    source: 'book/revisions/zh/volume-one-r2/p1-course-boundaries.md',
    sha256: '394a6f050fb3f05af549d334c80d763fb120a3b42f033c41159f00cd61fd234c', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: 'p2-course-card', locale: 'zh', slug: 'p2-course-card', title: '标题长了半行，按钮去哪儿了？', order: 5, part: 2,
    source: 'book/revisions/zh/volume-one-r2/p2-course-card.md',
    sha256: 'abbd840e04dcaa475fc1852cb4ab68c994db90129da0f8a2542725c3d5b4c431', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: '05-enrolment-controls', locale: 'zh', slug: '05-enrolment-controls', title: '点了“报名”，我还有机会看一眼上课时间吗？', order: 6, part: 2,
    source: 'book/revisions/zh/volume-one-r2/05-enrolment-controls.md',
    sha256: '683a40824234391e41efe3d8e2c0f6d188b90f55f35817efb55cf3b95179d04e', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: '06-colour-token-intent', locale: 'zh', slug: '06-colour-token-intent', title: '“确认报名”要换颜色，为什么课程链接也跟着变了？', order: 7, part: 2,
    source: 'book/revisions/zh/volume-one-r2/06-colour-token-intent.md',
    sha256: 'a2e3642090da6394f820cdb649a5eb172c0104b24e20270cc9d85a6f7e7d1d26', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: 'p2-component-state', locale: 'zh', slug: 'p2-component-state', title: '两个开关都开了，按钮该听谁的？', order: 8, part: 2,
    source: 'book/revisions/zh/volume-one-r2/p2-component-state.md',
    sha256: 'ecdc8685f9e6c0ddc1496c1b9ede40175e06af722d6018bde2346ab1327de52a', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: 'p2-form-wait', locale: 'zh', slug: 'p2-form-wait', title: '邮箱改好了，刚才那一下还算数吗？', order: 9, part: 2,
    source: 'book/revisions/zh/volume-one-r2/p2-form-wait.md',
    sha256: '566e5b49b4aa7cf1425ad44be5a141a929e1ad430b7b8382b5227eccb0f88a8c', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: 'p2-first-screen', locale: 'zh', slug: 'p2-first-screen', title: '课程介绍已经出来了，“我的报名”还在等谁？', order: 10, part: 2,
    source: 'book/revisions/zh/volume-one-r2/p2-first-screen.md',
    sha256: '7f8d878c7bc287fb4f052e8e80e5e71d32bf9938aac5bfd33bcfbddda97e1f79', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: 'p3-request', locale: 'zh', slug: 'p3-request', title: '请求出门以后，谁签收了它？', order: 11, part: 3,
    source: 'book/revisions/zh/volume-one-r2/p3-request.md',
    sha256: 'cad8301b7e346675d0eea83306d254d12dae422f4dbcf380f17346fe7f864853', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: '04-api-contract', locale: 'zh', slug: '04-api-contract', title: '没有找到课程，还是没有查到结果？', order: 12, part: 3,
    source: 'book/revisions/zh/volume-one-r2/04-api-contract.md',
    sha256: '81a124106e215cf303d2dd3d01c51719c58ef62eb1771916064fadaef7c9bd19', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: 'p3-private-handout', locale: 'zh', slug: 'p3-private-handout', title: '两个学校都有一本《第一讲》', order: 13, part: 3,
    source: 'book/revisions/zh/volume-one-r2/p3-private-handout.md',
    sha256: 'b2a8d357c2d7b1effc8a52c0a418dc2561da98842e8d2f45795ca0f91e38a06a', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: 'p4-last-seat', locale: 'zh', slug: 'p4-last-seat', title: '两个人、三份讲义，怎么数出了六个报名？', order: 14, part: 4,
    source: 'book/revisions/zh/volume-one-r2/p4-last-seat.md',
    sha256: '9e4a41100dae58608c2a50b3e788191641f6a156e86c26e71f91315bca7ab5ba', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: 'p4-derived', locale: 'zh', slug: 'p4-derived', title: '昨天搜得到的讲义，今天还该在吗？', order: 15, part: 4,
    source: 'book/revisions/zh/volume-one-r2/p4-derived.md',
    sha256: 'b118ce32cc6971774f83050dce2f263f60081ef4c624bd9d6651a81f1d2fb7d5', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: 'p5-opening-time', locale: 'zh', slug: 'p5-opening-time', title: '九点整，大家一起按下去', order: 16, part: 5,
    source: 'book/revisions/zh/volume-one-r2/p5-opening-time.md',
    sha256: '63497877f9135cbb3c0155015bfa716e9c0f033400a5bd3fa61c6ad1bf7451fa', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: 'p5-handout-job', locale: 'zh', slug: 'p5-handout-job', title: '笔记本合上了，谁还在转那份讲义？', order: 17, part: 5,
    source: 'book/revisions/zh/volume-one-r2/p5-handout-job.md',
    sha256: 'adaed28ac0212ada0f9d73dd03d524e0d351f68be497c3a57ecda009e56291b3', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: 'p6-room', locale: 'zh', slug: 'p6-room', title: '同一份程序，搬家以后少了什么？', order: 18, part: 6,
    source: 'book/revisions/zh/volume-one-r2/p6-room.md',
    sha256: '126055e32e1e23069e261f01321728e55e4a89759c0125a946dc3e56edb6bd2d', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: 'p6-compatible-change', locale: 'zh', slug: 'p6-compatible-change', title: '新按钮上线那晚，旧页面还开着', order: 19, part: 6,
    source: 'book/revisions/zh/volume-one-r2/p6-compatible-change.md',
    sha256: '86dd41b2544171966fc1aa471a6895509c4891d372f41d267e2997e4bc849615', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: 'p7-slow-search', locale: 'zh', slug: 'p7-slow-search', title: '大家都说搜索慢，先看谁的钟？', order: 20, part: 7,
    source: 'book/revisions/zh/volume-one-r2/p7-slow-search.md',
    sha256: '57d2117e06e3ba6c372a17558975d5417568af089507bae8d7a095013343e408', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: 'p7-restore', locale: 'zh', slug: 'p7-restore', title: '备份是绿色的，名单能拿回来吗？', order: 21, part: 7,
    source: 'book/revisions/zh/volume-one-r2/p7-restore.md',
    sha256: '3b55005b69a453b6a87ac88766898adb95635b45f5ca89128b5c07face12b56f', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: 'p8-ask', locale: 'zh', slug: 'p8-ask', title: '“我能报这门课吗？”要请模型来答吗？', order: 22, part: 8,
    source: 'book/revisions/zh/volume-one-r2/p8-ask.md',
    sha256: 'f88808970d77c553ae5258461ac6e4fb02e8a6211a2bab4708a89b210780f35e', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: 'p8-handout-answer', locale: 'zh', slug: 'p8-handout-answer', title: '助手翻到的是谁的第十二页？', order: 23, part: 8,
    source: 'book/revisions/zh/volume-one-r2/p8-handout-answer.md',
    sha256: '84fbd195a930a7bc7bb2efa8b70deecf4f81a376675eb964465a795e1f3ec3ab', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: 'p8-good-answer', locale: 'zh', slug: 'p8-good-answer', title: '两版各答对三题，哪一版还能给学员用？', order: 24, part: 8,
    source: 'book/revisions/zh/volume-one-r2/p8-good-answer.md',
    sha256: '256d6dead68b46643c2fbadb45eb59dabe66ddb7577d221cfb5619210539d558', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: 'P810', locale: 'zh', slug: 'after-ai-finishes', title: 'AI 写完以后，我们还需要做什么？', order: 25, part: 8,
    source: 'book/revisions/zh/volume-one-r2/03-after-ai-finishes.md',
    sha256: '434d3018e2f8a6bea05f1db5ee1e171025a0c16e8eccf71a0ae9f6285c0ddde5', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: 'p8-return-to-reader', locale: 'zh', slug: 'p8-return-to-reader', title: '按钮很守信用，我却想回去改需求', order: 26, part: 8,
    source: 'book/revisions/zh/volume-one-r2/p8-return-to-reader.md',
    sha256: 'f47a201be471e0b87311210190d813b6baf25c339ce95ca6920faddc2495f8c0', status: 'reviewed-draft', review: volumeReview,
  },
  {
    id: 'closing', locale: 'zh', slug: 'closing', title: '程序员下班指南：今天就到这儿吧', order: 27, part: 9,
    source: 'book/revisions/zh/volume-one-r2/closing.md',
    sha256: 'ba1b057cff4815bca2fb1b5c6d4542796e5068aab0c9ed98001acaddce4b089a', status: 'reviewed-draft', review: volumeReview,
  },
];

// Historical public and preview fragments resolve to current sections.
export const legacyHeadingAliases: readonly { chapterId: string; legacyId: string; headingId: string }[] = [
  { chapterId: 'opening', legacyId: '关于本书的-ai-协作', headingId: '我为什么想写这本书' },
  { chapterId: 'opening', legacyId: 'ai-也在这张图里', headingId: '我为什么想写这本书' },
  { chapterId: 'opening', legacyId: '例子会重复问题会变深', headingId: '往后看也往旁边看' },
  { chapterId: 'opening', legacyId: '原理要讲清楚选择要有条件', headingId: '从你已经做过的事情开始' },
  { chapterId: 'P810', legacyId: '三个人说的好了', headingId: '回到那句确认' },
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
    if (!Number.isInteger(chapter.part) || chapter.part < 0 || chapter.part > 9) throw new Error(`Invalid reading part: ${chapter.id}`);
    if (!Number.isSafeInteger(chapter.order) || chapter.order <= previousOrder) {
      throw new Error(`Chapter order must be unique and increasing: ${chapter.id}`);
    }
    identities.add(identity); routes.add(route); sources.add(chapter.source); previousOrder = chapter.order;
  }
}

validateManifest(chapterManifest);
