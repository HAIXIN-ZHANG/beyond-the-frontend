# Milestone 1 whole-product polish — Developer handoff

Owner: Developer. Date: 2026-11-17 (Australia/Perth). Revision: r1, frozen for actual Coordinator review.

## Task and verified baseline

Author requested a high-standard audit and correction of the existing reading product before publication, without new features. Verified branch `codex/milestone-1-product-polish`, HEAD `cc59fd42f74bb5ed856881443a8bb2fd528b0817`; initial changes were Coordinator's board and new review only. Follow [board](../../coordination.md) and [review](../../reviews/milestone-1-product-polish.md). Earlier tasks are closed; source acceptance is not public deployment of this revision.

Inspect actual rendered English/Chinese homes/indexes, both approved Chinese chapters and existing search/appearance/navigation/copy/404 states. Compare320/375/768/1440px and reflow, Day/Night/first paint, local platform fonts, typography/spacing/width, contrast/targets and keyboard/focus. Capture before evidence before minimal evidence-justified fixes. Retain existing macOS-style language and semantic tokens; preserve original manuscript hashes, absent English corpus and31recovery files. No features, translation/manuscript/schema, palette redesign, dependency/workflow/access/Figma-reference/Git change. Writer recommendations return through Coordinator; Developer owns aligned runtime copy only.

Allowed implementation: `site/`, named Panda tokens/styles/recipes, affected verifier/tests, necessary factual developer-guide/runbook changes and this handoff. Preserve other owners' files and historical reports. Coordinate build/codegen/export use with Coordinator first because `site/out` is shared; read-only static inspection can proceed while Coordinator captures the baseline. No new dependencies or approval bypass. Final submission must identify actual changes, exact hashes, observed checks/captures and limitations, then freeze for actual review. Coordinator owns Git/integration/publication.

## Confirmed findings and bounded corrections

| Finding | Evidence / impact | Implemented correction |
| --- | --- | --- |
| MODAL-01 | Actual backdrop wheel moved the reader while Search stayed modal. New regression against unchanged output failed: expected scrollY0, received500. | `html:has(.search-dialog[open])` locks document overflow; stable gutters avoid scrollbar-induced width changes. Native closing removes the lock. Real result scrolling, Escape/Close/result navigation and subsequent document scrolling pass; shortcut opening preserves an actual heading's reading position/focus. No custom focus trap or event engine |
| Enlarged-header collision | At375px, both English and Chinese title phrases overlapped Search under measured200% text enlargement; separately reproduced with CSSzoom2. | Compact header uses intrinsic flex wrapping/min-content so Search moves to another row when required. Normal320/375/768/1440 route geometry and fonts remain unchanged. Full titles, intact phrases and44px targets retained |
| Narrow chapter-title splits | Both320/375px samples split 能跑 and 究竟 across lines. Actual Range experiment improved punctuation-boundary lines without affecting768/1440px. | Chapter H1 only: `word-break:keep-all`, preserving existing `overflow-wrap:anywhere` fallback. Final real output shows opening `写在前面：` / `能跑，然后呢？`, G01 `一个页面，` / `究竟连着什么？`. No text edits or chapter-specific layout map |
| Accepted W-COPY-01–03 | Writer's reviewed runtime recommendations, aligned by Coordinator. | Chinese correction-draft title/field scaffolding and 问题草稿 intro; 八个部分 navigation terminology; EN/ZH hints explicitly describe site-only appearance. URL/hash/identity/editable deliberate submission unchanged |
| Current technical wrapper drift | `docs/design/reading-experience-v1.md` still treated historical28tests and superseded deployment hold as current. | Only current wrapper/status/pointers updated. Historical body from `## Current design sources and retained identity` onward byte-identical. No live Figma claim; current release identity links to public metadata |

Eleven owned files: ten listed in the hash manifest plus this handoff. Guide/runbook changes describe actual behavior and current twelve-case count; earlier dated evidence is preserved. No palette, font primitive, token inventory, manuscript, route/schema, dependency, workflow/access or feature change.

## Actual inspection and verification

Coordinator released shared build/source use after copying its immutable baseline. Developer then owned sequential codegen/build/export work; no concurrent mutation of shared output was used as evidence. Browser plugin unavailable; installed Chromium159.0.8154.6/Playwright1.65.1 on this Mac, Node24.14.1/npm11.11.0.

| Coverage | Actual result / evidence |
| --- | --- |
| All six normal routes, Day/Night,320/375/768/1440×900 |48before and48candidate-after captures, computed geometry/typography/local fonts; no document overflow or console/page errors. Normal header/brand/body/content/title metrics match before/after exactly. Same-role EN/ZH home/index alignment and intended reading rails/prose roles retained |
| Existing states | Search ready/results/no-results/English absence, Appearance, correction preview, mobile reading disclosure and actual bilingual HTTP404 observed. Eleven candidate state samples have no unexpected browser errors. Existing suite also checks fetch failure/retry, storage/clipboard denial, manual copy, current-source navigation, theme persistence, skip focus/local code/table scrolling |
| Real keyboard / modal behavior | New real-wheel regression passes background lock, long-result internal scroll, close/focus/position restoration and unlock on all three exit paths. Additional native Tab/Shift+Tab observation retains document focus inside dialog while document has focus; browser-chrome traversal is allowed. Escape returns correctly; no JavaScript focus trap added |
| Enlargement/reflow | Computed text/line-height doubled from baseline at375px for both locales; before overlap, after intact phrases/nonoverlapping Search and no document overflow. CSSzoom2 is a separately labelled stress.640×450 and320×225 are equivalent CSS-viewport reflow samples, **not native browser zoom certification** |
| Contrast / preferences | Nine computed text/background samples per theme under emulated reduced-motion/transparency preferences: minimum Day5.353:1, Night9.102:1; sampled animation/transition durations0s, opaque dialog remains usable. Uses computed sRGB colors/ancestor backgrounds; not full pixel/assistive certification. [W3C contrast explanation](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) and [text resize explanation](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html) informed these bounded checks |
| Fresh pre-hydration paint | Two new contexts with saved light/dark opposite the OS preference, seven framework scripts held before execution. At first-contentful-paint20ms in each local sample, inline head bootstrap already applied the saved theme and correct canvas. Saved screenshots inspected. This is a cold local pre-hydration observation, not production timing or a warm theme screenshot |
| Final changed source | `npm run check` passed lint/strict app+Panda compilers/all39Node tests. Fresh root and Pages builds/verifiers each passed7documents/128local references, zh20/en0; **all12E2E passed on each final export in6.4seconds**. Original10cases/health assertions retained, with two real regressions and existing locale case extended for widths/title phrases |
| Final H1 refinement | After the last H1-only change, actual final Pages output captured both approved titles at all four widths: original full title/hash/anchors retained, eight samples have no overflow; four final narrow screenshots inspected. Other candidate states were not needlessly recaptured for this isolated heading property |
| Preservation / documentation |179unaffected tracked files identical, excluding ten modified owned files and Coordinator's board;31recovery hashes match. Both manuscript SHA-256 values, manifest, Figma reference, tokens/recipes, lockfile and workflows unchanged. Historical design body preserved; local Markdown targets and `git diff --check` pass |

Current-run evidence outside Git:

- `/tmp/vctw-product-before/` and `/tmp/vctw-product-after/`: route screenshots, six contact sheets per set (viewed), `routes.json`. The after set precedes only the last H1 refinement; final affected heading captures supersede it for those headings.
- `/tmp/vctw-product-before-resize/` / `after-resize/`: actual text-enlargement and CSS-zoom screenshots/geometry for both locales. `/tmp/vctw-product-modal-before/` preserves the failing regression trace/screenshot.
- `/tmp/vctw-product-after-states/`, `/tmp/vctw-product-after-quality/`: states, contrast/preference and cold pre-hydration screenshots/JSON. `/tmp/vctw-product-final-headings/`: final source's four narrow captures/eight measured samples. Temporary runnable scripts are `/tmp/vctw-product-{audit,states,resize,quality}.mjs`.

Harness limits retained: an initial temporary404 `setContent` replay disturbed Next's stream and emitted an enqueue warning; authentic404 navigation replaced that invalid capture method and passed, without changing product code. Another probe initially required Tab never to leave the document, incorrectly treating native browser-chrome traversal as a defect; actual `document.hasFocus`/active-element logs distinguished chrome from background-page focus. No product assertion was weakened and no retry/force/sleep fabricated acceptance.

## Frozen file SHA-256

| File | SHA-256 |
| --- | --- |
| `docs/design/reading-experience-v1.md` | `7a639f4f8d2ff1bc5b1798c5118ef25cdc17707e11578c0c9f7cdacf937982a3` |
| `docs/release.md` | `04dde5c248ab76508af93ecdcb132d03fa144fc3b295f39a326d0c1d84312f2e` |
| `panda/global-styles.ts` | `fde89045d6b0ec0ad353f2d6874149b6e4b9ffe48c953d174b400dc14a75b114` |
| `site/DEVELOPMENT.md` | `c8f49c6f4a1deefedb42923e3015b02d2dd1a65bc1252cf87022412651aaa363` |
| `site/components/reading/book-navigation.tsx` | `005a8ae745dede2266a28e7a68316d46b20bc17a5ddeb7a629c1743a18c7db36` |
| `site/components/reading/section-actions.tsx` | `ebae33fa122dd38a6b0e3656b9ffd931e0b25e2bbaa2f19a27bddca79068b830` |
| `site/components/reading/sharing.ts` | `b2348363ab8e21396aed8a0f74afb59d97ed1bc9ed8efb2d9080b9f10bbb6d5d` |
| `site/config/i18n.ts` | `b951ca3b1ccd4919b11471786cb7d2b97abdcb27ab991ed82f78fdb32ecbf584` |
| `tests/e2e/reader.spec.mjs` | `c1234a28336e3821ea580a0d51c7b4bc7b078ac8fd20990c31d26fe75e103885` |
| `tests/search-sharing.test.mjs` | `8de590fb29cbbe4bd708a6d6c8c4377b8c429bce9d1f0c128e154bb5aa78e60d` |

The handoff's own full hash is supplied on delivery. Please inspect exact code, before/after evidence, actual test semantics and copy/wrapper accuracy, and return concrete findings to Developer. Same local SF/PingFang fonts were observed; native zoom, Safari/Firefox/Windows, assistive technologies and full WCAG conformance are not certified. Classic-scrollbar behavior is addressed with the stable gutter but has not been independently certified on Windows. Existing dependency maintenance and prior-version recovery limits remain unchanged.

No Git/settings/publication change or new runtime service/dependency was introduced. Public runtime is not inferred from these local passes; Coordinator owns actual review, matching-head integration/CI and authorized publication/public recheck. Shared build/output use is released after this freeze: current `site/out` is the final uncommitted Pages export, without `release.json`; all local browser/preview/build processes have closed. No further polish remains in progress. Resume only on concrete affected findings and preserve all other-owner files.
