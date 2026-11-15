# Reading experience design

Design date: 2026-11-14. Revision: v3 / UI03. Decision/review owner: Coordinator; this English technical handoff is maintained by Developer under the delegated documentation task. The three-page organization, English annotations, semantic layout and design re-review are complete; author visual acceptance remains pending. The original file and this path are retained. See [UI03](../reviews/UI03.md) and historical [UI02](../reviews/UI02.md).

Figma UI, page titles, component notes and native annotations are English-first, with Chinese only where necessary. Day/Night and the bilingual book plan remain unchanged. UI03 itself did not implement the website. Since then, TS01 merged and DS01 implemented the token/theme foundation pending review; full component/page/browser acceptance remains separate. See the [runtime guide](../../site/DEVELOPMENT.md) and stage handoffs for current code status.

## Design sources

- Team: HAIXIN's Starter team.
- Project: [Beyond the Frontend Folder](https://www.figma.com/files/team/1563112246153281261/folder/690927640). The user authorized its creation and moving this design into it; its location was verified in desktop Figma.
- File: [Beyond the Frontend · Reading Experience v1](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=4-11).
- Exactly three pages: `01 · Tokens` (0:1), `02 · Components` (22:135), `03 · Page Designs` (2:2). Page designs group Day, Responsive, Interactions, Night and Night interactions vertically. Responsive layouts and modes are no longer separate pages. The design uses native text, Auto Layout, component instances and vectors.

| Reference | Figma node | Purpose |
| --- | --- | --- |
| Token reference | [40:12](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=40-12) | Day/Night roles, semantic space/size/radius, typography and recipe examples; replaces 2:65 |
| Component library | [22:135](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=22-135) | 13 expanded families, separated variants, English slots/recipe/behavior notes |
| Page overview | [2:2](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=2-2) | Reading, responsive, interaction and Day/Night references together |
| Desktop home | [4:11](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=4-11) | Brand, reading entry, three learning paths and examples |
| Desktop chapter | [4:115](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=4-115) | Book navigation, prose, on-page outline, diagrams and question card |
| Mobile home | [4:220](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=4-220) | Single-column reading paths and clear entry |
| Mobile English chapter | [4:256](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=4-256) | 17px prose, chapter entry, stacked diagrams and theme choice |
| Desktop search | [7:53](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=7-53) | Query, categories, excerpts and closing |
| Mobile chapter navigation | [7:87](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=7-87) | English grouped navigation and current chapter |
| AI question preview | [7:125](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=7-125) | Inspect question, assumptions and provenance before copying |
| Required states | [7:142](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=7-142) | Empty search, missing translation and copy feedback |
| Night home | [24:71](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=24-71) | Same structure and semantic roles as Day |
| Night desktop chapter | [24:177](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=24-177) | Dark reading, diagrams, question card and selected theme |
| Night mobile chapter | [24:330](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=24-330) | Mobile Night reference |
| 1024px compact | [25:71](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=25-71) | Narrower book navigation; hide the right outline |
| 768px tablet | [25:183](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=25-183) | On-demand navigation and centered prose |
| 320px narrow | [25:311](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=25-311) | Narrow Header retaining action targets |
| Code and comparison table | [22:80](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=22-80) | Technical-reading specimens |
| Responsive/theme notes | [22:119](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=22-119) | Notes moved to Page Designs, plus component annotations |

Chapter names, search results, English prose and code in Figma are layout specimens, not an accepted public table of contents or English manuscript. Mobile specimens changed from Chinese to English design copy without editing `book/`. The accepted [content contract](../content-contract.md) governs actual reading inputs and publication state.

## Visual and responsive rules

Use a lightly translucent navigation layer, pill theme selection, restrained radii and generous reading space. Day uses a pale canvas with deep green accents; Night uses charcoal with soft green accents. Prose surfaces remain solid; materials are concentrated in navigation. This is a web reading design, not a claim to implement UIKit or full Liquid Glass.

- The desktop specimen is 1440px wide, with a 248px book sidebar, prose maximum 704px and an on-page outline on the right.
- The mobile specimen is 390px, with 20px prose gutters, on-demand navigation, vertically stacked diagrams and chapter tools at the top.
- At ≥1200px show both navigation rails; 900–1199px retains a 224px book rail and hides the right outline; 768–899px hides fixed rails and uses 32px gutters; below 768px use single-column prose and on-demand navigation. At ≤360px use Narrow Header and 16px gutters. Specimens cover 1440/1024/768/390/320px; intermediate widths and text enlargement still need implementation checks.
- English UI/prose uses Inter, Chinese long-form styles use Noto Sans SC, and code uses JetBrains Mono. Although SF Pro was listed as available, actual nodes reported it missing, so the initial design used renderable alternatives. Confirm delivered fonts and system fallbacks; do not distribute SF Pro. DS01 currently declares local preference stacks only, without font downloads or a claim that those fonts are installed.
- Desktop prose is 18/30px, mobile English 17/29px; mobile primary headings 32/40px and section headings 24/32px. UI and prose have distinct text styles; preserve Chinese styles for later manuscripts.
- Use a 4px spacing rhythm and 6/12/20px radii. Each theme option has a 44×44px action target; Button, IconButton and navigation controls have explicit targets.
- Inline links are underlined. Navigation communicates selection through position, text and surface treatment. Focus has a visible ring; motion respects reduced-motion preference.

## Tokens and component layers

The user selected PandaCSS. At the UI03 design checkpoint, code still used legacy CSS and no style migration was performed. DS01 subsequently mapped the foundation; that does not imply that all Figma components, Code Connect or later features are implemented.

Figma has 111 variables: 24 primitive colors, 22 semantic colors, 29 raw space/radius/size/stroke values and 36 semantic layout aliases, plus 14 text styles and two effect styles. Semantic colors have Light/Dark modes; semantic geometry aliases raw values. Roles include `fg.link`, `focus.ring`, `bg.selected`, `bg.hover`, `bg.disabled`, `fg.disabled` and `border.focus`, alongside material/shadow roles.

Name geometry by purpose: `control.paddingInline`, `card.padding`, `prose.blockGap`, `layout.gutterMobile`, `table.cellBlock`, `shape.control`, `shape.card`, `size.actionMin` and `size.proseMax`. These are bound to actual properties, not merely described. Recipe/slot-recipe notes identify properties, slots and states. Pixels in Tokens show resolved values; fixed zero spacing, icon geometry and a few structural sizes do not need unique aliases.

| Layer | Project responsibility | PandaCSS/Figma contract |
| --- | --- | --- |
| Primitives and semantics | Color roles, spacing, type scale, radius | `tokens`, `semanticTokens`, text styles; e.g. `bg.canvas`, `fg.muted`, `accent.default` |
| Basic components | Buttons, links, search entry, badges | Recipes; button Default/Hover/Focus/Disabled and navigation Default/Selected |
| Reading patterns | Navigation items, reading cards, question cards, search results | Slot recipes where needed; shared APIs for repeated structure |
| Page composition | Home, chapters, mobile navigation and search views | Compose existing foundations rather than duplicate them |

These layers are the project's organization, not a universal design-system standard. The design's minimal source set is Button, IconButton, ThemeControl, SiteHeader, ChapterToolbar, Chapter navigation item, Badge, Search trigger, Reading path card, Callout, AIQuestionCard, CodeBlock and ComparisonTable. Button/IconButton have Default/Hover/Focus/Disabled; navigation has Default/Selected/Hover/Focus; Header has Desktop/Compact/Narrow; ThemeControl has Light/Dark. Actual execution remains limited to each assigned stage.

Teaching diagrams preserve editable layers and explanations. Use semantic HTML for prose. Consolidate TOC, search and feedback structures when actual reuse supports it; do not create a component for every frame. Code/table sources are specimens, not connected chapter content at UI03.

All variables have explicit scopes and WEB syntax. The original CSS names were implementation targets, not generated code. DS01's `panda/figma-reference.json` records source IDs, actual alias targets, original WEB syntax and Panda paths; generated variables normalize camelCase to kebab-case. This mapping does not edit Figma or establish Code Connect.

## Historical library options

These UI03 options do not add dependencies to the current foundation task. DS01 uses only its necessary Panda/PostCSS/type tooling; future libraries require their own compatible use case and assignment.

| Tool | Proposed use | Boundary |
| --- | --- | --- |
| [PandaCSS](https://panda-css.com/docs) | Tokens, semantic roles, recipes and responsive conditions | Build-time generation; statically extractable styles and explicit variants |
| [Park UI](https://park-ui.com/docs/introduction) | Selected editable component/recipe sources | Based on PandaCSS and Ark UI; maintain imported source locally, without importing an entire suite |
| [Ark UI](https://ark-ui.com/docs/overview/about) | Headless Dialog/Drawer/Tooltip behavior where needed | Visuals remain project-owned; actual focus, keyboard and screen-reader behavior still needs testing |
| [Lucide React](https://lucide.dev/guide/react) | A few named search/close/menu/copy icons | Import only needed icons; icon-only buttons still require accessible names |
| [Pagefind](https://pagefind.app/docs/) | Candidate for later static search | Validate real Chinese/English retrieval, language isolation and subpaths before selection |

The historical proposal was PandaCSS with a small Park UI subset and Ark UI for complex behavior. Native links, buttons and static prose do not need an interaction runtime solely for consistent appearance. Static export remains the website model; client code is limited to features that actually require it. UI03's recommendations were based on official documentation, not package installation or compatibility tests. TS01 has since completed the actual TypeScript migration; its earlier pending note is historical.

## Interaction requirements

- Search: a visible trigger or shortcut outside text input opens it; Escape/close returns focus. Distinguish loading, results, empty and failure. Preserve the query and offer retry or chapter browsing after failure. Search covers only current-language approved public content; Figma results are specimens.
- Mobile chapter navigation: locate the current chapter; closing returns focus without losing reading position. A modal drawer manages focus and background scrolling; chapter destinations remain native links.
- On-page outline: derive stable anchors from actual headings and expose current position with `aria-current`. Diagrams need text explanations. Wide code/tables scroll locally, not across the entire page.
- AI question card: display the complete copyable content and permit edits first. Include actual confirmed chapter URL, anchor and revision in copied text. Replace specimen metadata with real values. Expose success/failure to screen readers and preserve manual selection after clipboard failure. No model request is implied.
- Missing translation: explain availability and provide an explicit choice instead of silently changing language. The accepted content contract now defines the initial untranslated-chapter behavior; implementation still belongs to PAGE01.
- Theme: follow the system by default; persist an explicit Day/Night choice with priority over system changes. Determine the initial mode before paint; switch text, icons, borders, notices and shadows together. Use opaque fallbacks when reduced transparency or missing blur support requires them.
- Audio remains a later single-chapter experiment; do not present a working player in this iteration. Reading recovery, glossary popovers and paragraph sharing require separate assignments.

Figma contains theme mode/variant actions and retained or reconnected reading/search/question previews. Those connections are not website functionality or complete prototype click acceptance. Actual search, clipboard, focus trapping, shortcuts, scroll behavior, system following and persistence require code/browser evidence.

## Access evidence

SEC01 recheck on 2026-11-14 opened Share and Share settings in desktop Figma: Anyone / View was selected, Edit was not, and view/comment access was explicit. The file list showed Owner and project inheritance; only HAIXIN ZHANG appeared as an inherited editor. No further change was needed. Viewer copy/save/export was allowed; copying does not grant editing of the original. This was not an exhaustive team-membership or account-integration audit. See [SEC01](../reviews/SEC01.md) and the [access baseline](../security/access-policy.md).

Earlier UI02 work tightened the Folder team default from editing/inviting/changing access to viewing/commenting, with the user's explicit confirmation. The file link was **Anyone can view**; inherited editing showed the current Owner, with no additional direct editors found. Owner access remained; unrelated team/project settings were not changed.

These are file/account controls. An agent authorized through the same Owner account may still edit; Figma does not provide Writer/Developer account isolation here. Assigned scope still constrains each role.

## UI03 checks and remaining acceptance

The review covered three pages and 13 component families; all 17 original screen/state frame IDs remain. Screenshots covered Tokens, component overview, Day composition, mobile Day/Night, 320px and feedback states. Fixes addressed Header height/insets, overly wide documentation, black theme-source fallback fills, a filled disabled icon, short swatch rows, and recipe/binding inconsistencies. Search gained loading/failure recovery guidance.

All 111 variable alias targets existed; all 36 semantic layout variables were aliases. No variable used `ALL_SCOPES`, and each had WEB syntax. Inspected page/component Auto Layout children had no structural overflow; repaired token swatch rows passed recheck. Page Designs contained 154 instances and no full-page bitmap. Text and annotations were English. Twenty Day/Night foreground/background pairs met the selected thresholds: normal text 4.5:1 and focus 3:1. This does not certify every state, alpha composition or DOM accessibility behavior.

Mobile Search/Prompt still has behavior guidance without complete separate narrow layouts. Implementation must verify 200% text zoom, keyboard/screen readers, theme initialization and clipboard results. UI03 did not change/re-audit permissions; its access context comes from UI02/SEC01. The design stage itself did not install dependencies, change website code, commit, push or deploy.

Author visual direction, reading comfort and feature density remain acceptance items. Coordinator then assigns implementation, mapping and content scope; the design artifact alone never releases a full rewrite, fonts or publishing. Subsequent authorized DS01/CMP01/PAGE01/QA01/DEP01 gates are recorded separately.

## UI02 historical checks

UI02 inspected 17 screen/state frames, with screenshots of home, Day/Night desktop/mobile chapters, compact/tablet/narrow layouts, dark search/question previews and code/table specimens. Fixes addressed 320px Header overflow, tablet footer width and Night theme selection. No missing fonts remained in inspected pages; final responsive specimens had no horizontal overflow. At that checkpoint, 55 variables had explicit scopes and WEB syntax.

Eighteen resolved semantic foreground/background pairs met the selected targets: text 4.5:1 and control boundaries 3:1. Body/canvas contrast was approximately 13.79:1 Day and 16.26:1 Night; secondary text/canvas 5.35:1 and 9.10:1; button text 6.86:1 and 12.04:1. These checks do not cover every alpha layer/state or establish full accessibility conformance. References: [WCAG contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) and [Apple Materials](https://developer.apple.com/design/human-interface-guidelines/materials), used sparingly for sustained reading.
