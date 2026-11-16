# Reading palettes — design review

- **Date/reviewer:** 2026-11-16, Australia/Perth; Coordinator/Reviewer.
- **Assignment/gate:** Author-approved Figma and document update for three directly clickable palette blocks. [Spec and handoff](../design/reading-palettes-spec.md); implementation hold remains on the [board](../coordination.md).
- **Reviewed revision:** Figma file `3GYIfJz8xSPGx3AE3RRkKi`, palette additions and affected corrections observed on this date. Stable reviewed roots: Tokens `216:24`, Components `217:468`, Page Designs `220:354`; source sets `217:418` / `217:467`, close icon `222:400`. No immutable Figma version identifier was exposed; these IDs identify inspected nodes, not an immutable future state.
- **Workspace baseline:** `/Users/haixin/Desktop/code/vibe-coding-then-what`, `codex/beta1-chapter-reader`; HEAD/local main/local origin-main all `a96fd2134c09989667a16d728a9f1b00f21c6580`. Existing uncommitted reader work preserved. This task did not fetch/reverify remote settings or perform Git writes.
- **Outcome:** **Accepted for design/technical handoff after affected re-review.** Author visual preference and all production behavior remain separate acceptance items.
- **Next boundary:** Preserve this design and the paused reader work. No Developer/Writer restart, implementation, PR/merge or deployment is released by this review.

## Actual inspection and evidence

Used the Figma use/library/design workflows: inspected existing collections, components, fonts and UI04 reading anatomy; reused local sources and added only the scoped palette assets. No applicable swatch/close icon was found in the selected Simple Design System search results. A local editable close icon reuses the existing IconButton slot. No Apple kit import, external font, dependency, paid service or flattened UI was added.

### Structure and component contract

- The same three pages remain: Tokens `0:1`, Components `22:135`, Page Designs `2:2`. Existing 111 variables were retained; creation-only additions total 22 (12 primitive colors, eight semantic colors, two semantic layout aliases). Final inventory: **133 variables / four collections / 14 text styles**.
- Semantic additions alias primitives in the existing Light/Dark collection; `palette/target` aliases 48px and `palette/gap` aliases 16px. Existing UI04 and the production 111-variable mapping remain separate from these design-only additions.
- PaletteSwatch has **24 variants**: three palettes × selected/unselected × Default/Hover/Focus/Disabled. PalettePicker has **three variants**, each containing exactly three swatch instances. Selection and focus are represented independently. Six cross-selection click reactions were registered after their destination variants existed; complete presentation-mode click behavior was not exercised.
- Eight preference panels each contain **three distinct actual appearance samples**, 48×48px choice targets around 44×44px samples, and a 44×44px Close action. The two narrow panels are 288px wide, positioned at x=16 on 320px frames; all eight panels fit their frame widths.
- Reused AppearancePicker, Header/theme controls, IconButton, CodeBlock, ComparisonTable and the UI04 English layout specimens. Those English specimens are not published manuscript or translation. Original surfaces/text retain established roles; alternate palettes change surface roles and necessary secondary text while links/actions/notices retain their meanings.
- Final page-study subtree: **1,250 editable descendants** (643 Text, 425 Frame, 148 Instance, 26 Vector, eight Rectangle), **zero image-filled nodes**. Inspected text families are Inter and JetBrains Mono; the retained Chinese styles were not replaced.
- Four narrow code/table viewports are 288px with 704px content, clipping enabled and horizontal overflow configured. This is a Figma scroll-region contract, not a browser scroll test.

### Visual and color review

Inspected screenshots of the token reference and Day/Night component-state matrix, desktop Mist Blue/Day and Soft Grey/Night, direct Original/Day preferences and narrow Soft Grey/Night. After revisions, inspected the updated Mist Blue/Day panel, narrow Night view and full desktop Night view. Final affected screenshots passed this design review; no unchanged screenshot was treated as evidence for a later correction.

Resolved actual Figma variables in all six desktop studies and independently calculated **96 opaque color pairs** with unrounded threshold assertions: **zero failures**, minimum checked text/action contrast **5.03:1**, minimum checked focus/control cue **4.05:1**. The spec retains the per-palette minima. These calculations cover body/secondary/link text, action text and selected focus/control cues; they do not certify transparent chrome, every disabled/notice state or complete accessibility conformance.

All eight panels were checked after the sample-binding correction: Original/Mist Blue/Soft Grey resolve respectively to `#f8faf9` / `#f0f5fa` / `#f1f2f4` in Day, and `#111617` / `#121b27` / `#191b20` in Night, independently of which palette is selected.

## Findings and verified closure

| ID | Issue and impact | Correction and affected recheck | Status |
| --- | --- | --- | --- |
| PAL01 | The broad preview recoloring also changed the Original swatch in alternate-palette panels, making two choices appear identical. | Restored each nested swatch's own canvas role. All eight panels now resolve three distinct expected colors; final Day/Night screenshots inspected. | Closed |
| PAL02 | The open preference panel lacked an explicit dismissal action; reused appearance headings/alignment competed with the panel title. | Added the existing 44px IconButton with a close-icon swap, reduced the appearance group label to the UI style, centered the options and documented nonmodal dismissal/focus rules. Final 400px/288px panels inspected. Runtime dismissal remains unimplemented. | Closed for design |
| PAL03 | The 320px Night study reused a Day source and retained its sun glyph. | Swapped the cloned theme control to the existing Dark main component `20:108`; final narrow Night screenshot shows the moon. | Closed |
| PAL04 | Adding code/table specimens extended the article below the fixed-height navigation background. | Set the six cloned book-navigation columns to fill their expanded reading shells. Final full desktop Night screenshot shows the rail continuing to the footer. | Closed |

No outstanding required design correction was found in the inspected scope. The initial prototype-link write was rejected because its destinations had not yet persisted; that failed call left no palette components. The corrected asset creation and later six-link write succeeded, with no duplicate component sets observed. This is tooling recovery, not application runtime evidence.

## Remaining implementation gates

Developer must receive a later explicit assignment. Verify actual chapter content, responsive intermediate widths and limited-height/landscape panels, native radios and accessible names, keyboard/focus/dismissal, assistive technology, forced colors/increased contrast, first paint, storage failure/cross-tab behavior and actual palette application without layout/reading-position changes. Check physical displays before making comfort claims. The Figma click model illustrates selection only; page backgrounds are fixed review compositions.

## Git and publication evidence

Documentation changes were checked locally for whitespace and relative-link validity. No application files were edited by this design task; app tests/builds were not rerun for these design/document-only changes. No dependency install, permission change, commit, push, PR, merge or deployment occurred. No new implementation task was sent to the paused owners.
