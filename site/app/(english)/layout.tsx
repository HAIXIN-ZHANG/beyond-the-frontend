import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { DocumentLayout } from '../../components/document-layout.tsx';
import { getMessages } from '../../config/i18n.ts';
import { site } from '../../config/site.ts';

const messages = getMessages('en');
export const metadata: Metadata = {
  title: { default: messages.title, template: `%s | ${site.name}` },
  description: messages.description,
};

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <DocumentLayout locale="en">{children}</DocumentLayout>;
}
