import { cache } from 'react';
import { loadBook } from './load-book.ts';

// Deduplicate source validation/parsing within a server-rendering pass; no browser fetch.
export const getBook = cache(() => loadBook());
