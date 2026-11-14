export const defaultLocale = 'en';

const messages = {
  en: {
    lang: 'en',
    title: 'Beyond the Frontend: It Works. Now What?',
    titleLines: ['Beyond the Frontend', 'It Works. Now What?'],
    description: 'An evolving guide to software engineering.',
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
  },
  zh: {
    lang: 'zh-CN',
    title: '前端往后看：能跑，然后呢？',
    titleLines: ['前端往后看', '能跑，然后呢？'],
    description: '一本持续更新的中文工程指南。',
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
  },
};

export function getMessages(locale = defaultLocale) {
  if (!Object.hasOwn(messages, locale)) throw new Error(`Unsupported locale: ${locale}`);
  return messages[locale];
}

export function localePath(locale, suffix = '') {
  getMessages(locale);
  return `${locale === 'zh' ? '/zh' : ''}/${suffix}`;
}

export function alternateLocalePath(pathname, locale, basePath = '') {
  getMessages(locale);
  const path = basePath && (pathname === basePath || pathname.startsWith(`${basePath}/`))
    ? pathname.slice(basePath.length) || '/'
    : pathname;
  if (locale === 'zh') return path.replace(/^\/zh(?=\/|$)/, '') || '/';
  return `/zh${path === '/' ? '/' : path}`;
}
