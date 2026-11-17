import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import next from '@next/eslint-plugin-next';
import hooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['site/.next/**', 'site/out/**', 'site/styled-system/**', 'site/next-env.d.ts', '.artifacts/**']),
  {
    files: ['**/*.{js,mjs,jsx}'],
    extends: [js.configs.recommended],
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { process: 'readonly', console: 'readonly', URL: 'readonly' },
    },
  },
  {
    files: ['site/**/*.{ts,tsx}', 'panda.config.ts', 'panda/**/*.ts'],
    extends: [js.configs.recommended, tseslint.configs.recommended],
    languageOptions: {
      globals: { process: 'readonly', console: 'readonly', URL: 'readonly', window: 'readonly', document: 'readonly' },
    },
  },
  {
    files: ['tests/e2e/**/*.mjs'],
    languageOptions: { globals: { window: 'readonly', document: 'readonly' } },
  },
  {
    files: ['site/**/*.{js,jsx,ts,tsx}'],
    extends: [next.configs['core-web-vitals'], hooks.configs.flat.recommended],
    settings: { next: { rootDir: 'site/' } },
  },
]);
