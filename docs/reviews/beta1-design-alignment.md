# Beta 1 reading design and roadmap alignment — review

Date: 2026-11-15 (Australia/Perth). Owner: Coordinator/Reviewer. Original assignment: recheck Beta 1/2/3 scope, update the existing Figma design for Beta 1, retain the restrained macOS-like reading direction and show limited, labelled Beta 2 concepts. The author specifically required design review before implementation alignment.

Workspace: `/Users/haixin/Desktop/code/vibe-coding-then-what`, branch `codex/beta1-design-alignment`, base `630ab7e57dd2139c87e2bdd3e90cd981c008a6fd`. Initial main was clean. Writer and Developer first produced separate one-file audits; no product implementation was assigned. This review owns design judgment and later affected document review, not executor authorship.

## Initial findings and actual changes

Inspected the existing Figma file `3GYIfJz8xSPGx3AE3RRkKi` programmatically and visually. The original desktop home/chapter and ThemeControl screenshots confirmed old branding, three-group navigation and two-mode preference presentation. Saved UI03 documentation is historical evidence, not a current-file audit.

- Updated public branding, home headline and eight-part planned map while retaining the valid layouts and stable source IDs. Planned topics are not published reading destinations.
- Separated actual Chinese reviewed-draft availability from English interface labels and English layout specimens. New availability specimens retain real Chinese chapter titles; no English manuscript, publication date or count is invented. The last available chapter returns to available reading rather than an unwritten next chapter.
- Preserved a card-free chapter baseline. Optional AI question preview/copy is explicitly a conditional trial, with visible/editable context and manual clipboard recovery, no hosted chat or automatic transmission.
- Made the compact Appearance icon a picker trigger showing effective Day/Night; added explicit System/Day/Night preference variants. System-following and saved explicit preference are separate concepts.
- Added semantic-token-bound search states, chapter availability, section-link/correction and copy-preview families, with isolated resume/bookmark/preferences concepts for Beta 2.
- Added 390px and 320px search/copy references; fixed actual text clipping by making component text fill its auto-layout content width. Corrected inconsistent variant text properties and Day/Night action parity during review.

## Design sources and scope

The file retains exactly three pages: Tokens (`0:1`), Components (`22:135`) and Page Designs (`2:2`). New content stays within those pages; no paid assets, new font package, image-generation service or access-setting change was used.

| Figma target | ID / direct link | Scope |
| --- | --- | --- |
| Foundations | [40:12](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=40-12) | Existing 111 variables/four collections and 14 text styles retained; compatibility namespaces unchanged |
| Appearance family | [127:69](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=127-69) | System/Day/Night preference and 44px options |
| Search states | [127:95](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=127-95) | Ready/loading/results/no-match/unavailable |
| Chapter availability | [127:134](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=127-134) | Chinese draft/missing English/planned |
| Section actions | [127:160](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=127-160) | Native heading link, copy feedback/manual recovery, deliberate GitHub correction |
| Optional question trial | [127:186](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=127-186) | Preview/copied/manual-copy states, not a shipped card |
| Beta 1 updated states | [129:388](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=129-388) | Day/Night availability, mobile entry, appearance/language recovery, search/copy/share |
| Narrow search/copy | [134:458](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=134-458), [134:473](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=134-473) | 320px state compositions |
| Beta 2 concepts | [129:475](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=129-475) | Local resume/bookmark, changed-position recovery, terminology placement and optional preferences |

Beta 3 stays in the roadmap. No audio player, offline engine, account, live chat, full-book export or speculative controls were added to the principal Beta 1 interface. Beta 2 glossary placement is a concept, not an approved glossary definition. Code Connect publication is not established by variable bindings.

Design decision: retain UI03's current-reading-language search boundary for Beta 1. With no English chapter corpus, show an honest English-search availability explanation and a deliberate route to Chinese chapters; never present fictional English results as live. Old richer English search results remain explicitly labelled future-corpus layout specimens. Published inputs still follow the accepted content contract; design labels do not expand it.

## Actual visual and structural review

Used the Figma use, generate-library and generate-design skills. Reviewed saved screenshots of home/chapter, Day/Night, mobile header, Appearance options, availability, search/manual copy and Beta 2 concepts. Main compositions retain restrained color, light navigation chrome, quiet borders, generous text space and clear hierarchy; they do not simulate operating-system windows or add decorative controls. The primary chapter has a card-free path and keeps prose central.

The changed views consist of editable text/frames/vectors and linked instances; the inspected Beta 1 section contains no image-filled nodes or flattened whole-page screenshot. New families reuse existing semantic color/layout bindings and text styles; no new token was needed. English uses Inter, code JetBrains Mono, and actual Chinese labels use the existing Noto Sans SC styles. Existing legacy namespaces remain stable for the saved ID-based DS01 mapping.

After narrow-width fixes, the Beta 1 section's text-containment check reports no horizontal parent overflow. For semantic text on canvas, measured source-color ratios are Day default 13.79, muted 5.35 and accent 6.54; Night default 16.26, muted 9.10 and accent 12.04. These are specific static color-pair checks, not a complete accessibility certification. Runtime focus management, keyboard semantics, theme first paint/persistence, real search, clipboard, actual chapter rendering and mobile browser behavior remain implementation acceptance requirements. Figma annotations and controls do not prove those behaviors run.

Screenshots and intermediate diagnostic output are supplementary under `/tmp/beta1-design-review/`; the stable IDs, decisions and inspected limits above are the durable evidence. An internal nested-instance lookup failed and rolled back; a source-aware retry used stable instances. No duplicate abandoned output was accepted.

## Code and editorial audit

Read both actual audit handoffs: [Developer](../handoffs/developer/beta1-design-alignment.md) and [Writer](../handoffs/writer/beta1-design-alignment.md). They correctly distinguish source/document inspection from Coordinator's live Figma review. Main remains a bilingual shell with no reader/search/theme/copy implementation. DS01 is preserved separately with old branding and is not a wholesale merge input; its source intentions and saved token mapping are not fresh browser acceptance. No immediate source-only patch is justified by the audit.

Coordinator independently ran `npm run check`: ESLint, Next route type generation, strict TypeScript and four Node tests passed. No application source/dependency or content-contract change was made by this design task. This verifies the existing shell, not conformance to the new Beta 1 reading target. The opening's old organizational orientation remains a separate editorial release dependency; chapter prose/hashes are unchanged here.

**Design review accepted for technical handoff, with author visual judgment retained.** Writer/Developer audit r1 accepted. The next bounded step is owner-authored alignment of necessary design/status documents after this design/code review, not wholesale implementation or a new manuscript. Final document review, PR, exact-head CI and merge remain pending and separate. Deployment and other product/prose work remain held.

## Professional language, typography and composition re-review

The author's follow-up requested another professional wording/design/layout review before owner alignment. Normalized action labels and terminology (Search chapters, Copy section link, Report a correction, Observability & recovery), removed redundant copy headings and replaced developer-facing source/runtime explanations inside reader previews with concise source context. Detailed implementation boundaries remain in component descriptions and design notes. Optional-copy alternate feedback is explicitly labelled; no source URL or revision is invented.

Recomposed desktop availability in two auto-layout columns: a 704px available-reading column and a separately styled planned-map panel. Removed manual spacing used as column alignment inside a single text node; the eight entries are readable ordered lines. Day/Night controls and actions remain parallel. At 320px, header, search, failure recovery, source notes and copy action remain legible without horizontal parent overflow. Personally inspected the new Day/Night availability and 320px copy screenshots plus the complete search-state family after these fixes.

The final structural check covers existing desktop/mobile home and chapter, Night chapter, 1024/768/320px chapter, and both new Beta sections: no text exceeds its immediate parent horizontally; no inspected wrapper contains raster image fills. The seven added families have 21 variants (3/5/3/3/3/2/2); component descriptions, styles, semantic fills/padding and auto layout are present, and the new family overview frames do not overlap. A radius diagnostic initially checked the aggregate `cornerRadius` key; actual bindings correctly use the four individual radius keys, all aliasing `shape/card`. No missing radius token or replacement token is required. Existing 111 variables, four collections and 14 styles remain.

**Professional re-review accepted for handoff.** This checks visible composition and specific design-system structure, not an absolute quality guarantee or runtime accessibility acceptance. The macOS-inspired direction remains quiet and content-led; the author's visual approval is still distinct. Developer/Writer may now author the narrowly assigned alignment documents based on these final sources. Do not interpret this as permission to implement every Beta 1 feature or unpause chapter prose.

A final semantic-control distinction added [SearchField (139:124)](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=139-124): Default/Focus/Disabled native-input specimens. The mobile search compositions now use this field, not the desktop shortcut trigger; the keyboard-shortcut hint is absent on mobile. This closes a professional UI inconsistency without new tokens. Final added inventory is **eight families / 24 variants** (six Beta 1 families including the conditional copy trial, two Beta 2 previews); the earlier seven/21 inspection is the prior checkpoint. Existing shared button/icon/navigation states remain. SearchField uses the existing control/focus/disabled semantic roles and 44px action height.

## Owner alignment document review

### Writer r2

Read the actual vision/roadmap/Chinese-summary diffs and the updated same handoff. These preserve the eight-part plan, Beta release boundaries and chapter identities, while recording UI04, current-reading-language search, truthful Chinese availability, a card-free baseline and isolated later concepts. Detailed component inventory is linked rather than duplicated across product documents. The final SearchField addendum is acknowledged without claiming Writer performed a Figma/browser audit. **Accepted; Writer task closed.** No manuscript, content-contract, runtime, license or release change is included. Developer's technical/status document delivery remains to be inspected independently before integration.

### Developer r2 — affected inspection

Read the four actual files, including the current UI04 handoff, preserved historical UI03 section, current board and runtime-guide pointer. The current design targets, implementation limits and final SearchField identifiers are correctly distinguished. Main implementation and chapter sources remain unchanged. One small correction is required before acceptance: **D1**, the current component-page table still says “seven additional families” while the final inventory correctly says eight/24 above. Original owner Developer should correct that single current-table entry (not the historical UI03 count), rerun affected whitespace/link checks and freeze the same handoff for re-review. No new design or runtime change is required.

### Developer r3 — D1 closure and combined acceptance

Actually re-read the corrected current-table entry and same handoff's r3 response. It now says eight; historical UI03 wording/counts remain intact. **D1 closed; Developer r3 accepted and task closed.** Both owner alignments match the final design and preserve the separate implementation/release gates.

Independent combined checks pass: exact nine-file documentation scope; 70 Markdown files and 368 relative destinations/anchors with no destination, anchor, heading/fence or sensitive-pattern errors; clean whitespace. Reverse-normalizing only the historical section's heading level reproduces the original UI03 body exactly. README, eight-part outline, accepted opening/G01/F01 sources and content contract are unchanged. No application source, tests, dependency or workflow was modified; the site developer guide is the only changed path under `site/`. Coordinator's board closure is status maintenance after actual review. Final Git/head/cloud/merge evidence will be recorded through the real scoped PR; no deployment or wider implementation is inferred.
