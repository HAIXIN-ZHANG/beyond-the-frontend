'use client';

import { useRef, useState } from 'react';
import type { SharingContext } from './sharing.ts';
import { sectionUrl, correctionUrl } from './sharing.ts';
import { Button } from '../ui/button.tsx';

export function SectionActions({ context, headingId, headingTitle }: { context: SharingContext; headingId: string; headingTitle: string }) {
  const details = useRef<HTMLDetailsElement>(null), summary = useRef<HTMLElement>(null);
  const [copy, setCopy] = useState<{ url: string; result: 'copied' | 'manual' } | null>(null);
  const [preview, setPreview] = useState<{ url: string; issue: string } | null>(null);
  return <details ref={details} className="section-actions" data-heading-id={headingId}
    onKeyDown={event => {
      if (event.key === 'Escape') { event.stopPropagation(); if (details.current) details.current.open = false; summary.current?.focus({ preventScroll: true }); }
    }}>
    <summary ref={summary}>链接与纠错<span className="visually-hidden">：{headingTitle}</span></summary>
    <div className="section-actions-body">
      <div className="section-action-controls">
        <Button visual="quiet" onClick={async () => {
          const url = sectionUrl(window.location.href, headingId);
          try {
            if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
            await navigator.clipboard.writeText(url); setCopy({ url, result: 'copied' });
          } catch { setCopy({ url, result: 'manual' }); }
        }}>复制本节链接</Button>
        <Button visual="quiet" onClick={() => {
          const url = sectionUrl(window.location.href, headingId);
          setPreview({ url, issue: correctionUrl(context, headingTitle, url) });
        }}>查看纠错信息</Button>
      </div>
      <p className="section-copy-status" role="status">{copy?.result === 'copied' ? '本节链接已复制' : copy?.result === 'manual' ? '无法自动复制，请选择下方链接并手动复制。' : ''}</p>
      {copy?.result === 'manual' ? <label className="manual-section-link">本节链接<textarea readOnly value={copy.url} onFocus={event => event.currentTarget.select()} /></label> : null}
      {preview ? <div className="correction-preview">
        <p>将在 GitHub 打开可编辑的问题草稿，请检查后自行提交。</p>
        <dl><dt>章节</dt><dd>{context.chapterTitle} ({context.chapterId})</dd><dt>小节</dt><dd>{headingTitle}</dd>
          <dt>原稿版本 SHA-256</dt><dd><code>{context.sourceHash}</code></dd><dt>本节链接</dt><dd>{preview.url}</dd></dl>
        <a href={preview.issue} target="_blank" rel="noopener noreferrer">在 GitHub 查看并编辑草稿 ↗</a>
      </div> : null}
    </div>
  </details>;
}
