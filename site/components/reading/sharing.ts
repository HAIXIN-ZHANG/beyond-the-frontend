export type SharingContext = { chapterId: string; chapterTitle: string; sourceHash: string };

export function sectionUrl(currentUrl: string, headingId: string): string {
  const url = new URL(currentUrl);
  if (!['http:', 'https:'].includes(url.protocol)) throw new Error('Sharing requires an actual web location');
  url.search = ''; url.hash = encodeURIComponent(headingId);
  return url.href;
}

export function correctionUrl(context: SharingContext, heading: string, url: string): string {
  const issue = new URL('https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/issues/new');
  issue.searchParams.set('title', `Correction: ${context.chapterTitle} · ${heading}`);
  issue.searchParams.set('body', [
    `Chapter: ${context.chapterTitle} (${context.chapterId})`, `Heading: ${heading}`, `URL: ${url}`,
    `Source SHA-256: ${context.sourceHash}`, '', 'Suggested correction / 建议修改：', '',
  ].join('\n'));
  return issue.href;
}
