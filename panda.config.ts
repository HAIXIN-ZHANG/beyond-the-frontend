import { defineConfig } from '@pandacss/dev';
import { tokens, semanticTokens, textStyles } from './panda/tokens.ts';
import { globalCss } from './panda/global-styles.ts';
import { action, readingNavigation, callout, codeBlock, comparison } from './panda/recipes.ts';

export default defineConfig({
  preflight: false,
  include: ['./site/**/*.{ts,tsx}'],
  exclude: ['./site/.next/**', './site/out/**', './site/styled-system/**'],
  outdir: 'site/styled-system',
  conditions: {
    dark: '[data-theme="dark"] &',
    system: 'html:not([data-theme]) &',
    osDark: '@media (prefers-color-scheme: dark)',
  },
  theme: {
    extend: {
      tokens,
      semanticTokens,
      textStyles,
      recipes: { action },
      slotRecipes: { readingNavigation, callout, codeBlock, comparison },
      breakpoints: { tablet: '768px', compact: '900px', wide: '1200px' },
    },
  },
  globalCss,
});
