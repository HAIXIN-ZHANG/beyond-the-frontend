'use client';

import { useId, useState } from 'react';
import { codeBlock } from '../../styled-system/recipes/code-block.js';
import { Button } from '../ui/button.tsx';

type CodeBlockProps = {
  code: string; language: string;
  labels: { copy: string; copied: string; manualCopy: string };
};

export function CodeBlock({ code, language, labels }: CodeBlockProps) {
  const [copy, setCopy] = useState<{ code: string; result: 'copied' | 'manual' } | null>(null);
  const result = copy?.code === code ? copy.result : 'idle';
  const labelId = useId();
  const c = codeBlock();
  return <figure className={c.root}>
    <figcaption className={c.header}>
      <span className={c.language} id={labelId}>{language}</span>
      <Button visual="quiet" onClick={async () => {
        try {
          if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
          await navigator.clipboard.writeText(code); setCopy({ code, result: 'copied' });
        } catch { setCopy({ code, result: 'manual' }); }
      }}>{labels.copy}</Button>
    </figcaption>
    <pre className={c.pre} tabIndex={0} aria-labelledby={labelId}><code>{code}</code></pre>
    <p className={c.status} role="status">{result === 'copied' ? labels.copied : result === 'manual' ? labels.manualCopy : ''}</p>
    {result === 'manual' ? <label className={c.fallback}>{labels.manualCopy}<textarea readOnly value={code} onFocus={event => event.currentTarget.select()} /></label> : null}
  </figure>;
}
