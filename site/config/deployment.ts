// A build-time prefix: Next.js adds it to internal Link URLs and framework assets.
export function parseBasePath(value: string = ''): string {
  if (value === '' || value === '/') return '';

  if (!/^\/[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)*$/.test(value)) {
    throw new Error('NEXT_PUBLIC_BASE_PATH must be empty or a path such as /vibe-coding-then-what, without a trailing slash.');
  }

  return value;
}

// Literal links/fetch URLs need the same normalized prefix as Next.js configuration.
export function withBasePath(pathname: string, basePath: string = ''): string {
  return `${parseBasePath(basePath)}${pathname}`;
}
