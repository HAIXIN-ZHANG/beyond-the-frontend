export type SharingContext = { chapterId: string; chapterTitle: string; sourceHash: string };

export function sectionUrl(currentUrl: string, headingId: string): string {
  const url = new URL(currentUrl);
  if (!['http:', 'https:'].includes(url.protocol)) throw new Error('Sharing requires an actual web location');
  url.search = ''; url.hash = encodeURIComponent(headingId);
  return url.href;
}

export function correctionUrl(context: SharingContext, heading: string, url: string): string {
  const issue = new URL('https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/issues/new');
  issue.searchParams.set('title', `纠错：${context.chapterTitle} · ${heading}`);
  issue.searchParams.set('body', [
    `章节：${context.chapterTitle} (${context.chapterId})`, `小节：${heading}`, `链接：${url}`,
    `原稿版本 SHA-256：${context.sourceHash}`, '', '建议修改：', '',
  ].join('\n'));
  return issue.href;
}
