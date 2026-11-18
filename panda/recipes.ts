import { defineRecipe, defineSlotRecipe } from '@pandacss/dev';

export const action = defineRecipe({
  className: 'action',
  description: 'Shared native button and icon-button states.',
  base: {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 'token(spacing.control.gap)',
    minHeight: 'token(sizes.size.actionMin)', paddingInline: 'token(spacing.control.paddingInline)', paddingBlock: 'token(spacing.control.gap)',
    borderRadius: 'token(radii.shape.control)', borderWidth: 'token(borderWidths.stroke.subtle)', borderStyle: 'solid',
    font: 'inherit', textStyle: 'ui', textDecoration: 'none', cursor: 'pointer',
    '&:focus-visible': { outline: 'token(borderWidths.stroke.focus) solid token(colors.focus.ring)', outlineOffset: 'token(spacing.focus.inset)' },
  },
  variants: {
    visual: {
      primary: {
        backgroundColor: 'token(colors.accent.surface)', color: 'token(colors.fg.onAccent)', borderColor: 'token(colors.border.control)',
        '&:hover:not(:disabled)': { backgroundColor: 'token(colors.accent.surfaceHover)' },
        '&:disabled': { color: 'token(colors.fg.disabled)', backgroundColor: 'token(colors.bg.disabled)', borderColor: 'token(colors.border.default)', cursor: 'not-allowed' },
      },
      quiet: {
        backgroundColor: 'transparent', color: 'token(colors.fg.default)', borderColor: 'token(colors.border.control)',
        '&:hover:not(:disabled)': { backgroundColor: 'token(colors.bg.hover)' },
        '&:disabled': { color: 'token(colors.fg.disabled)', backgroundColor: 'token(colors.bg.disabled)', borderColor: 'token(colors.border.default)', cursor: 'not-allowed' },
      },
    },
    icon: { true: { width: 'token(sizes.size.actionMin)', padding: '0', flexShrink: 0 } },
  },
  defaultVariants: { visual: 'primary' },
  staticCss: ['*'],
});

export const readingNavigation = defineSlotRecipe({
  className: 'reading-nav', slots: ['root', 'group', 'heading', 'list', 'item', 'link', 'availability'],
  base: {
    root: { minWidth: 0, textStyle: 'ui' },
    group: { marginBlock: 'token(spacing.prose.blockGap)' },
    heading: { color: 'token(colors.fg.muted)', textStyle: 'small', marginBlock: 'token(spacing.control.gap)' },
    list: { listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 'token(spacing.control.gap)' },
    item: { minWidth: 0, '&[data-level="3"]': { marginInlineStart: 'token(spacing.control.paddingInline)' }, '&[data-level="4"]': { marginInlineStart: 'token(spacing.card.padding)' } },
    link: {
      display: 'block', minHeight: 'token(sizes.size.actionMin)', padding: 'token(spacing.control.gap)', borderRadius: 'token(radii.shape.control)',
      color: 'token(colors.fg.default)', textDecoration: 'none', overflowWrap: 'anywhere',
      '&:hover': { backgroundColor: 'token(colors.bg.hover)' },
      '&[aria-current]': { backgroundColor: 'token(colors.bg.selected)', color: 'token(colors.fg.link)', fontWeight: 600 },
      '&[aria-disabled="true"]': { color: 'token(colors.fg.disabled)', cursor: 'default', '&:hover': { backgroundColor: 'transparent' } },
    },
    availability: { display: 'block', color: 'token(colors.fg.muted)', textStyle: 'small' },
  },
});

export const callout = defineSlotRecipe({
  className: 'reading-callout', slots: ['root', 'title', 'body'],
  base: {
    root: { marginBlock: 'token(spacing.prose.blockGap)', padding: 'token(spacing.card.padding)', borderRadius: 'token(radii.shape.card)', borderWidth: 'token(borderWidths.stroke.subtle)', borderStyle: 'solid', borderColor: 'token(colors.border.default)' },
    title: { margin: 0, marginBottom: 'token(spacing.control.gap)', textStyle: 'ui', fontWeight: 600 },
    body: { '& > :first-child': { marginTop: 0 }, '& > :last-child': { marginBottom: 0 } },
  },
  variants: { tone: {
    information: { root: { backgroundColor: 'token(colors.bg.selected)', color: 'token(colors.fg.default)' } },
    caution: { root: { backgroundColor: 'token(colors.notice.bg)', color: 'token(colors.notice.fg)', borderColor: 'token(colors.border.default)' } },
  } },
  defaultVariants: { tone: 'information' },
  staticCss: ['*'],
});

export const codeBlock = defineSlotRecipe({
  className: 'reading-code', slots: ['root', 'header', 'language', 'pre', 'status', 'fallback'],
  base: {
    root: { minWidth: 0, marginInline: 0, marginBlock: 'token(spacing.prose.blockGap)', borderRadius: 'token(radii.shape.card)', borderWidth: 'token(borderWidths.stroke.subtle)', borderStyle: 'solid', borderColor: 'token(colors.border.default)', backgroundColor: 'token(colors.bg.subtle)', overflow: 'hidden' },
    header: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'token(spacing.control.gap)', padding: 'token(spacing.control.paddingInline)', borderBottomWidth: 'token(borderWidths.stroke.subtle)', borderBottomStyle: 'solid', borderColor: 'token(colors.border.default)' },
    language: { textStyle: 'small', color: 'token(colors.fg.muted)' },
    pre: { margin: 0, padding: 'token(spacing.card.padding)', maxWidth: '100%', overflowX: 'auto', textStyle: 'mono', whiteSpace: 'pre', overflowWrap: 'normal', '& code': { font: 'inherit' } },
    status: { margin: 0, paddingInline: 'token(spacing.control.paddingInline)', textStyle: 'small', color: 'token(colors.fg.muted)' },
    fallback: { display: 'block', margin: 'token(spacing.control.paddingInline)', '& textarea': { display: 'block', width: '100%', minHeight: '6rem', marginTop: 'token(spacing.control.gap)', padding: 'token(spacing.control.gap)', color: 'token(colors.fg.default)', backgroundColor: 'token(colors.bg.surface)', borderColor: 'token(colors.border.control)', textStyle: 'mono' } },
  },
});

export const comparison = defineSlotRecipe({
  className: 'reading-comparison', slots: ['region', 'table', 'caption', 'header', 'cell'],
  base: {
    region: { minWidth: 0, maxWidth: '100%', overflowX: 'auto', marginBlock: 'token(spacing.prose.blockGap)' },
    table: { borderCollapse: 'collapse', width: '100%', textStyle: 'ui', color: 'token(colors.fg.default)', '& th, & td': { minWidth: '12ch', overflowWrap: 'normal', wordBreak: 'normal' } },
    caption: { textAlign: 'start', color: 'token(colors.fg.muted)', textStyle: 'small', marginBottom: 'token(spacing.control.gap)' },
    header: { paddingInline: 'token(spacing.table.cellInline)', paddingBlock: 'token(spacing.table.cellBlock)', textAlign: 'start', backgroundColor: 'token(colors.bg.selected)', borderBottomWidth: 'token(borderWidths.stroke.subtle)', borderBottomStyle: 'solid', borderColor: 'token(colors.border.default)', verticalAlign: 'top' },
    cell: { paddingInline: 'token(spacing.table.cellInline)', paddingBlock: 'token(spacing.table.cellBlock)', textAlign: 'start', borderBottomWidth: 'token(borderWidths.stroke.subtle)', borderBottomStyle: 'solid', borderColor: 'token(colors.border.default)', verticalAlign: 'top', '& code': { whiteSpace: 'nowrap' } },
  },
});
