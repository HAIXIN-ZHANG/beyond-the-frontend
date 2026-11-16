export const defaultLocale = 'en';

export type Locale = 'en' | 'zh';

type Messages = {
  lang: string;
  title: string;
  titleLines: readonly [string, string];
  description: string;
  home: string;
  contents: string;
  navigation: string;
  skip: string;
  feedback: string;
  browse: string;
  repository: string;
  reading: string;
  emptyTitle: string;
  emptyDescription: string;
  suggest: string;
  missing: string;
  missingDescription: string;
  back: string;
  switchLabel: string;
  switchText: string;
  appearance: string;
  systemTheme: string;
  dayTheme: string;
  nightTheme: string;
};

const messages = {
  en: {
    lang: 'en',
    title: 'Vibe Coding, Then What?',
    titleLines: ['Vibe Coding,', 'Then What?'],
    description: 'Understand the Systems Behind Your AI-Built Products',
    home: 'Home',
    contents: 'Chapters',
    navigation: 'Main navigation',
    skip: 'Skip to content',
    feedback: 'Questions & corrections',
    browse: 'Browse chapters',
    repository: 'View on GitHub',
    reading: 'READ',
    emptyTitle: 'Chapters are on their way',
    emptyDescription: 'No chapters are available to read yet. They will appear here when ready.',
    suggest: 'Ask a question or suggest a topic',
    missing: 'Page not found',
    missingDescription: 'The link may be incorrect, or the page may have moved.',
    back: 'Back to home',
    switchLabel: 'Switch to Chinese',
    switchText: '中文',
    appearance: 'Appearance',
    systemTheme: 'System',
    dayTheme: 'Day',
    nightTheme: 'Night',
  },
  zh: {
    lang: 'zh-CN',
    title: 'Vibe Coding 之后：能跑，然后呢？',
    titleLines: ['Vibe Coding 之后：', '能跑，然后呢？'],
    description: '理解 AI 帮你构建的产品背后的系统。',
    home: '首页',
    contents: '章节目录',
    navigation: '主导航',
    skip: '跳到正文',
    feedback: '提问与纠错',
    browse: '查看章节目录',
    repository: '在 GitHub 查看项目',
    reading: '阅读',
    emptyTitle: '章节准备中',
    emptyDescription: '目前还没有可阅读的章节。内容整理完成后，将在这里列出。',
    suggest: '向我们提问或提出建议',
    missing: '这一页还没找到',
    missingDescription: '链接可能有误，或者页面已移动。',
    back: '返回首页',
    switchLabel: 'Switch to English',
    switchText: 'English',
    appearance: '外观',
    systemTheme: '跟随系统',
    dayTheme: '日间',
    nightTheme: '夜间',
  },
} satisfies Record<Locale, Messages>;

export function getMessages(locale: Locale = defaultLocale): Messages {
  if (!Object.hasOwn(messages, locale)) throw new Error(`Unsupported locale: ${locale}`);
  return messages[locale];
}

export function localePath(locale: Locale, suffix: string = ''): string {
  getMessages(locale);
  return `${locale === 'zh' ? '/zh' : ''}/${suffix}`;
}

export function alternateLocalePath(pathname: string, locale: Locale, basePath: string = ''): string {
  getMessages(locale);
  const path = basePath && (pathname === basePath || pathname.startsWith(`${basePath}/`))
    ? pathname.slice(basePath.length) || '/'
    : pathname;
  if (locale === 'zh') return path.replace(/^\/zh(?=\/|$)/, '') || '/';
  return `/zh${path === '/' ? '/' : path}`;
}
