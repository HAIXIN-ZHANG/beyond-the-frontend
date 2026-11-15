import type { Metadata } from 'next';
import { ReadingIndex } from '../../../../components/reading-index.tsx';

export const metadata: Metadata = { title: '章节目录' };

export default function Chapters() {
  return <ReadingIndex locale="zh" />;
}
