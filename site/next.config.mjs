import { fileURLToPath } from 'node:url';
import { parseBasePath } from './config/deployment.ts';

const root = fileURLToPath(new URL('../', import.meta.url));

export default {
  output: 'export',
  trailingSlash: true,
  basePath: parseBasePath(process.env.NEXT_PUBLIC_BASE_PATH),
  poweredByHeader: false,
  agentRules: false,
  // Multiple language root layouts need an explicit global 404 document.
  experimental: { globalNotFound: true },
  images: { unoptimized: true },
  outputFileTracingRoot: root,
  turbopack: { root },
};
