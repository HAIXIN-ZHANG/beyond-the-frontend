import type { Locale } from '../config/i18n.ts';
import type { ChapterEntry } from './manifest.ts';

const labels = {
  en: [
    'Preface',
    'Part I · What a page connects to',
    'Part II · What the learner sees and does',
    'Part III · An interface and the people on both sides',
    'Part IV · Records, queries and copies',
    'Part V · Waiting work and reliable systems',
    'Part VI · Getting software to the learner',
    'Part VII · Finding evidence when things go wrong',
    'Part VIII · AI in the product and at the workbench',
    'Closing',
  ],
  zh: [
    '序言',
    '第一部分 · 一个页面连着什么',
    '第二部分 · 学员眼前的那一下',
    '第三部分 · 接口和它两边的人',
    '第四部分 · 记录、查询和副本',
    '第五部分 · 工作怎样等，系统怎样接',
    '第六部分 · 程序怎样到达学员手里',
    '第七部分 · 出了事，怎样找回依据',
    '第八部分 · AI 在产品里，也在工作台旁边',
    '尾声',
  ],
} satisfies Record<Locale, string[]>;

export function readingParts(entries: readonly ChapterEntry[], locale: Locale) {
  return labels[locale].map((title, part) => ({
    id: `part-${part}`, title, entries: entries.filter(chapter => chapter.part === part),
  })).filter(part => part.entries.length > 0);
}
