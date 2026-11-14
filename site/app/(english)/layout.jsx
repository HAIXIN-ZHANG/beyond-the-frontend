import { DocumentLayout } from '../../components/document-layout.jsx';
import { getMessages } from '../../config/i18n.mjs';
import { site } from '../../config/site.mjs';

const messages = getMessages('en');
export const metadata = {
  title: { default: messages.title, template: `%s | ${site.name}` },
  description: messages.description,
};

export default function EnglishLayout({ children }) {
  return <DocumentLayout locale="en">{children}</DocumentLayout>;
}
