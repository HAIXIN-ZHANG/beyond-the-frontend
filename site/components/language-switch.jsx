'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { alternateLocalePath, getMessages } from '../config/i18n.mjs';

export function LanguageSwitch({ locale }) {
  const pathname = usePathname();
  const messages = getMessages(locale);
  const targetLocale = locale === 'en' ? 'zh' : 'en';
  const href = alternateLocalePath(pathname, locale, process.env.NEXT_PUBLIC_BASE_PATH || '');

  return (
    <Link href={href} hrefLang={targetLocale} lang={getMessages(targetLocale).lang} aria-label={messages.switchLabel}>
      {messages.switchText}
    </Link>
  );
}
