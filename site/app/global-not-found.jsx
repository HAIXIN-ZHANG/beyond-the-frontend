import Link from 'next/link';
import { DocumentLayout } from '../components/document-layout.jsx';
import { NotFoundContent } from '../components/not-found-content.jsx';
import { getMessages } from '../config/i18n.mjs';

export const metadata = { title: 'Page not found | Beyond the Frontend' };

export default function GlobalNotFound() {
  const chinese = getMessages('zh');
  return (
    <DocumentLayout locale="en" languageHome>
      <NotFoundContent locale="en" />
      <aside className="error-translation" lang="zh-CN" aria-label="中文说明">
        <h2>{chinese.missing}</h2>
        <p>{chinese.missingDescription}</p>
        <Link href="/zh/">返回中文首页 <span aria-hidden="true">→</span></Link>
      </aside>
    </DocumentLayout>
  );
}
