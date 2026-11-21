import { defineConfig } from '@playwright/test';
import { parseBasePath } from './site/config/deployment.ts';

const prefix = parseBasePath(process.env.NEXT_PUBLIC_BASE_PATH);

export default defineConfig({
  testDir: './tests/e2e',
  testMatch: '**/*.spec.mjs',
  fullyParallel: false,
  forbidOnly: true,
  workers: 1,
  retries: 0,
  timeout: 30_000,
  globalTimeout: process.env.CI === 'true' ? 300_000 : 180_000,
  expect: { timeout: 5_000 },
  reporter: 'list',
  outputDir: '.artifacts/playwright',
  use: {
    browserName: 'chromium',
    baseURL: 'http://127.0.0.1:4179',
    viewport: { width: 1440, height: 900 },
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'node scripts/static-preview.mjs',
    url: `http://127.0.0.1:4179${prefix}/`,
    reuseExistingServer: false,
    timeout: 10_000,
  },
});
