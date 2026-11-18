import type { Locale } from '../config/i18n.ts';

// Supplemental homepage UI only; the approved identity and chapter copy stay in i18n.ts.
export const homeContent = {
  en: {
    book: 'The book', navigation: 'Book navigation', overview: 'Overview', read: 'Read in Chinese',
    explore: 'Explore the systems',
    planNotice: 'Planned topics · the book is still being written',
    example: 'One enrolment example', exampleTitle: 'What happens after you click Enrol?',
    exampleCaption: 'Example shown: a successful enrolment',
    illustrationAlt: 'Four connected stages in a successful enrolment: submit, check, save and confirm.',
    stages: ['Submit', 'Check', 'Save', 'Confirm'],
    topics: ['Product & architecture', 'Frontend & design', 'APIs & integration', 'Data & search',
      'Async & reliability', 'Cloud & delivery', 'Observability', 'AI & engineering'],
  },
  zh: {
    book: '本书', navigation: '全书导航', overview: '首页', read: '阅读中文原稿',
    explore: '探索系统',
    planNotice: '计划中的主题 · 全书仍在写作中',
    example: '一个报名示例', exampleTitle: '点击报名之后，会发生什么？',
    exampleCaption: '图示：一次成功的报名',
    illustrationAlt: '一次成功报名中的四个相连阶段：提交、检查、保存和确认。',
    stages: ['提交', '检查', '保存', '确认'],
    topics: ['产品与架构', '前端与设计', 'API 与集成', '数据与搜索',
      '异步与可靠性', '云与交付', '可观测性', 'AI 与工程'],
  },
} satisfies Record<Locale, {
  book: string; navigation: string; overview: string; read: string; explore: string;
  planNotice: string; example: string; exampleTitle: string; exampleCaption: string; illustrationAlt: string;
  stages: readonly string[]; topics: readonly string[];
}>;
