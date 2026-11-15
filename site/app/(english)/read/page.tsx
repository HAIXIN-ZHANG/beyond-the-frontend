import type { Metadata } from 'next';
import { ReadingIndex } from '../../../components/reading-index.tsx';

export const metadata: Metadata = { title: 'Chapters' };

export default function Chapters() {
  return <ReadingIndex locale="en" />;
}
