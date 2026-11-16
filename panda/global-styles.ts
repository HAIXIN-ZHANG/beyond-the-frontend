import { defineGlobalStyles } from '@pandacss/dev';

// Foundation for the existing skeleton. Component recipes follow in CMP01.
export const globalCss = defineGlobalStyles({
  '*': { boxSizing: 'border-box' },
  html: {
    backgroundColor: 'token(colors.bg.canvas)', colorScheme: 'light',
    '&[data-theme="dark"]': { colorScheme: 'dark' },
    '@media (prefers-color-scheme: dark)': {
      '&:not([data-theme])': { colorScheme: 'dark' },
    },
  },
  body: {
    minHeight: '100svh', margin: 0, display: 'flex', flexDirection: 'column',
    color: 'token(colors.fg.default)', textStyle: 'body', overflowWrap: 'anywhere',
    '@media (max-width: 767px)': { textStyle: 'mobile-body' },
  },
  'html[lang="zh-CN"] body': { textStyle: 'zh-body' },
  a: { color: 'token(colors.fg.link)', textUnderlineOffset: '0.25em' },
  'a:hover': { color: 'token(colors.accent.hover)' },
  ':where(a, button, select, main):focus-visible': {
    outlineColor: 'token(colors.focus.ring)', outlineStyle: 'solid', outlineWidth: 'token(borderWidths.stroke.focus)',
    outlineOffset: 'token(spacing.focus.inset)',
  },
  '.shell': {
    width: 'calc(100% - token(spacing.layout.gutterMobile) * 2)',
    maxWidth: '68rem', marginInline: 'auto',
    '@media (min-width: 768px)': { width: 'calc(100% - token(spacing.layout.gutterTablet) * 2)' },
    '@media (max-width: 360px)': { width: 'calc(100% - token(spacing.layout.gutterNarrow) * 2)' },
  },
  '.site-header': {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap',
    gap: 'token(spacing.header.gap)', minHeight: 'token(sizes.size.headerWide)', paddingBlock: 'token(spacing.header.paddingBlockWide)',
    borderBottomWidth: 'token(borderWidths.stroke.subtle)', borderBottomStyle: 'solid', borderColor: 'token(colors.border.default)',
  },
  '.wordmark': { color: 'token(colors.fg.default)', fontWeight: 700, letterSpacing: '-0.03em', textDecoration: 'none' },
  nav: { display: 'flex', flexWrap: 'wrap', gap: 'token(spacing.header.utilityGap)' },
  'nav a': { textStyle: 'ui', textDecoration: 'none' },
  '.main': { flex: 1, paddingBlock: 'token(spacing.layout.sectionGap)' },
  '.book-intro, .reading-index': { maxWidth: 'token(sizes.size.proseMax)' },
  '.eyebrow': { margin: 0, marginBottom: 'token(spacing.prose.blockGap)', color: 'token(colors.fg.muted)', textStyle: 'small' },
  h1: { margin: 0, textStyle: 'h1', textWrap: 'balance' },
  h2: { textStyle: 'h2' },
  h3: { textStyle: 'h3' },
  '.book-intro h1 span': { display: 'block' },
  '.intro': { marginBlock: 'token(spacing.prose.blockGap)', color: 'token(colors.fg.muted)' },
  '.actions': { display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'token(spacing.layout.columnGap)', marginTop: 'token(spacing.prose.sectionGap)' },
  '.button': {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between',
    gap: 'token(spacing.control.gap)', minHeight: 'token(sizes.size.actionMin)', paddingInline: 'token(spacing.control.paddingInline)',
    paddingBlock: 'token(spacing.control.paddingBlock)', borderRadius: 'token(radii.shape.control)',
    backgroundColor: 'token(colors.accent.default)', color: 'token(colors.fg.onAccent)', textDecoration: 'none', textStyle: 'ui',
  },
  '.button:hover': { backgroundColor: 'token(colors.accent.hover)', color: 'token(colors.fg.onAccent)' },
  '.text-link': { textStyle: 'ui' },
  '.empty-state': {
    marginTop: 'token(spacing.prose.sectionGap)', padding: 'token(spacing.card.padding)', backgroundColor: 'token(colors.bg.subtle)',
    borderWidth: 'token(borderWidths.stroke.subtle)', borderStyle: 'solid', borderColor: 'token(colors.border.default)', borderRadius: 'token(radii.shape.card)',
  },
  '.empty-state h2': { margin: 0, textStyle: 'h3' },
  '.empty-state p': { marginBlock: 'token(spacing.card.gap)', color: 'token(colors.fg.muted)' },
  '.error-translation': {
    marginTop: 'token(spacing.prose.sectionGap)', paddingTop: 'token(spacing.prose.blockGap)',
    borderTopWidth: 'token(borderWidths.stroke.subtle)', borderTopStyle: 'solid', borderColor: 'token(colors.border.default)', color: 'token(colors.fg.muted)',
  },
  '.error-translation h2': { textStyle: 'h3' },
  '.site-footer': {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap',
    gap: 'token(spacing.layout.columnGap)', paddingBlock: 'token(spacing.prose.blockGap)',
    borderTopWidth: 'token(borderWidths.stroke.subtle)', borderTopStyle: 'solid', borderColor: 'token(colors.border.default)',
    color: 'token(colors.fg.muted)', textStyle: 'small',
  },
  '.site-footer p': { margin: 0 },
  '.theme-preference': { display: 'flex', alignItems: 'center', gap: 'token(spacing.control.gap)', textStyle: 'ui' },
  '.theme-preference select': {
    minHeight: 'token(sizes.size.actionMin)', paddingInline: 'token(spacing.control.paddingInline)',
    backgroundColor: 'token(colors.bg.surface)', color: 'token(colors.fg.default)', font: 'inherit',
    borderWidth: 'token(borderWidths.stroke.subtle)', borderStyle: 'solid', borderColor: 'token(colors.border.control)', borderRadius: 'token(radii.shape.control)',
  },
  '.skip-link': {
    position: 'fixed', top: 'token(spacing.control.paddingBlock)', left: 'token(spacing.control.paddingInline)',
    paddingBlock: 'token(spacing.control.gap)', paddingInline: 'token(spacing.control.paddingInline)',
    backgroundColor: 'token(colors.accent.default)', color: 'token(colors.fg.onAccent)', transform: 'translateY(-200%)', zIndex: 10,
  },
  '.skip-link:focus': { transform: 'translateY(0)', color: 'token(colors.fg.onAccent)' },
  '@media (max-width: 767px)': {
    '.site-header': { minHeight: 'token(sizes.size.headerCompact)', paddingBlock: 'token(spacing.header.paddingBlockCompact)' },
    '.main': { paddingBlock: 'token(spacing.prose.sectionGap)' },
    '.actions': { alignItems: 'flex-start', flexDirection: 'column' },
  },
});
