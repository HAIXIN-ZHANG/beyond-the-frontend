# Risk-based E2E maintenance — Developer handoff

Owner: Developer. Revision: r2. Date: 2026-11-21. Status: frozen r2 candidate; local checks complete; Coordinator review pending.

## Assignment and verified baseline

The author authorized maintaining the existing browser suite while design evolves. Read AGENTS, Developer role, current board, all six existing E2E files and the affected Developer guide. Verified persistent workspace `.local/worktrees/e2e-risk-alignment-20261121`, branch `codex/e2e-risk-alignment-20261121`, HEAD/main baseline `27335fc90d903b42da6be3ed060efd9e251e3dea`. Initial changes are Coordinator's board and the existing identical-toolchain dependency symlink; preserve/exclude both. No product/design/dependency/manuscript/workflow/Git/deployment change is assigned.

Allowed outputs: `tests/e2e/**`, narrowly affected `site/DEVELOPMENT.md` and this single handoff. Keep reading/navigation/search/sharing/appearance/Continue/storage/no-JS/keyboard contracts, 320/390 usability, near-breakpoint and historical 1161px hidden-reader recovery, actual 44px targets and visible focus. Replace unnecessary exact visual values and redundant products with observable outcomes and explicit complementary samples. Do not add retries/skips, arbitrary tolerance increases or mock away actual behavior. Preserve prior Linux/classic stable-gutter and localization failure history.

Prove the remaining hidden-reader regression rejects the real historical zero-column bug by applying isolated page-only CSS to the actual built chapter, using the same maintained assertion and removing it afterward. Also prove a benign isolated visual adjustment remains readable/operable and passes the revised check. No permanent product fixture or mutation framework. Run appropriate check plus serial root/Pages builds, verifier and complete browser suites with existing local Webpack option. Deliver exact paths/digests/results/limits for Coordinator review; Coordinator owns integration.

## Whole-suite audit and risk decisions

Baseline: 61 browser cases in six files. A case is retained unless an explicitly identified exact-visual or redundant dimension below changes; case count is not a quality target.

| File / baseline purpose | Retain | Simplify / defer and rationale |
| --- | --- | --- |
| `continue.spec.mjs` (8): deliberate save/return, stale/corrupt destinations, passive/shared intent, write-denial latch, pending cancellation/cross-tab, localization/narrow focus and no-JS | All state, URL/heading/source, cancellation/denial and recovery contracts; timing probes observe the actual 750ms persistence interval, not incidental animation | Reduce only redundant theme×locale×viewport display products using complementary samples; retain 320+390, both locales, Light/Dark and desktop. Visual design fidelity remains a separate gate. |
| `reader.spec.mjs` (36): real corpus/navigation/locales, search counts/ranking/retry/modal locking, appearance/store recovery, sharing, content overflow, fragments/legacy/user takeover, sidebar interactions, homes/directories/no-JS | Every journey and error/recovery branch, all actual destinations/source identity, operational scroll/focus/overflow and target checks. Shared-role locale typography remains relational because an actual inconsistency occurred. Representative computed accessibility contrast stays a threshold, not an exact palette lock | Remove cross-locale exact box equality/spacing/rail widths and exact illustration filenames/dimensions where loading/aspect/bounds suffice; replace one-line-only labels with unclipped readable labels. Reduce duplicate content/locale/theme matrices only where other cases retain the dimension. Preserve controlled resize and repeated-fragment regressions. |
| `reading-polish.spec.mjs` (5): conditional reset, sidebar icons/recovery, exact typography, toolbar forced-colors and localized footer matrix | Reset saved-vs-effective width, no focus/scroll loss, 44px actions/visible local icons, actual text enlargement/no overflow, forced-color discoverability and localized identity/feedback | Replace exact icon 20px, font 16/28, H1/home pixels/recipe classes/transparent paints and footer 13px with visible bounded content, relative enlargement and basic focus. Reduce footer matrix, keeping locales/routes 320/390/desktop and Dark samples. |
| `reading-toolbar-links.spec.mjs` (5): sticky tools, exact prose-link palette across 12 combinations, inline wrapping and JS/no-JS clearance | Real inline source text/href, recognizable link affordance/focus, natural wrapping/no page overflow, real disclosure/open/Escape/scroll and heading clearance | Remove RGB, 1.2px margin, underline 1/3px, hover 2px, icon 18px locks and repeated six-accent prose styling (accent selection/contrast already covered in `reader.spec`). Keep Light/Dark and forced colors, direct fragments/no-JS. |
| `reader-info.spec.mjs` (6): separate dock/nav scroll, short-height wheel/Tab, mobile/no-JS, EN → ZH and exact credit design | Footer hidden from accessibility/Tab; truthful author/real feedback, dock reachability, 44px target, collapsed/hidden recovery, real short-height wheel/Tab and mobile/no-JS | Replace fixed caption/divider 16px, gap 10px, radius 8px, icon 18px/colors with readable credit, bounded/no-overlap/focus and amplified-text access; reduce duplicate desktop themes/widths. Faithful A-reference comparison is design-gated, not removed from responsibility. |
| `sidebar-hidden.spec.mjs` (1): real zero-column bug and persisted/native-route/responsive recovery | Actual parent main content box → layout → body, readable width relative to expanded reading, native next chapters/source identity, reopen hit/focus, reload and mobile recovery | Replace 600/704/H1-150/absolute coordinate locks with containing relationships and expanded reading-width baseline; sample 900 Light, 1161 Dark and wide desktop rather than five widths×two themes. Add no arbitrary viewport percentage. Reuse maintained assertion in controlled negative/benign diagnostics. |

All 61 case identities/behavior branches remain represented; only display-case titles are clarified. The generated `case-inventory.log` lists every test/title, including parameterized JavaScript on/off cases. The baseline file counts above remain unchanged: 8 + 36 + 5 + 5 + 6 + 1 = 61. No case was skipped or retried. Table entries describe the final implementation, not an expansion request.

### Complementary sampling and deferred responsibility

| Display dimension | Before → current | Coverage retained elsewhere / reason |
| --- | --- | --- |
| Continue display | 12 → 6 locale/theme/width profiles | Both locales, 1440/390/320px and Light/Dark; every persistence, explicit native return, stale/denied/shared/cross-tab/passive/no-JS branch remains. |
| Appearance names | 10 → 4 locale/width profiles | EN 1440, ZH 390, EN/ZH 320; all six options retain keyboard selection, 44px targets, unclipped wrapping, enlarged text and forced-color probes. The 12 contrast combinations remain unchanged in breadth. |
| Real reading content | 10 → 5 width/theme profiles | 1440 Light, 900 Dark, 768 Light, 390 Dark, 320 Light plus existing text amplification, source hashes, fragment clearance and local code/table overflow. |
| Home / directory display | 16 → 6 home; 12 → 6 directory | Both locales × 1440 Light/390 Dark/320 Light. Separate keyboard/search/language/no-JS cases remain. Loaded local artwork, aspect ratio and bounds replace exact file/dimensions. |
| Localized non-reader footer | 32 → 12 normal profiles | Four real routes × 320 Light/390 Dark/1261 Light, plus 320 text amplification. Author identity, feedback URL, content order and wrapping remain. |
| Reader dock display | 6 → 2 desktop; 4 → 2 profiles per mobile JS mode | 1325 Light/1006 Dark and 320 Dark/390 Light. Independent short 360px-height wheel/Tab case, actual source identity, responsive information and hidden global footer stay. Narrow credit 224/248 checks use bounded text/action/focus rather than exact inset/font/icon/paint. |
| Nearby tools / inline links | 6 → 3 tools; 12 → 2 prose-link profiles | 1188 Light/390 Dark/320 Light; links in both themes plus forced colors/amplification. Both JS modes still test direct fragments at 1188/390/320. All 12 accent accessibility contrasts remain in `reader.spec`. |
| Hidden desktop recovery | 10 → 3 profiles; 60 → 18 hidden-state observations | 900 Light, 1161 Dark, 1440 Light, with 320/390 mobile round trips. Each retains initial hide, reload, both real next chapters, collapsed → hidden and desktop return. Independent resize/storage/no-JS cases remain. |

The guide's design-stability/release table assigns Developer capture/verification and Coordinator evidence review, with explicit triggers for faithful Figma comparison, native Safari/Firefox/zoom, physical iOS/Android and assistive technology. These gates retain responsibility for the visual/platform coverage removed from brittle exact-value routine assertions; none is claimed complete by this Chromium task.

## Controlled actual-page diagnostics

Ignored evidence directory: `.artifacts/e2e-risk-alignment/`. `controlled-diagnostics.mjs` starts the existing static preview at an ephemeral loopback port and uses installed Chromium with an actual unchanged root export at 1161px. It imports the same `expectReadableHiddenReader`, `expectUsableCredit` and outline helper used by maintained cases. There is no mocked geometry, changed manuscript or permanent runtime fixture.

1. Baseline real hide passes. Page-only `.reader-body { grid-column:auto !important; }` recreates the historical auto-placement into the 0px grid track. Computed columns are `0px 1161px`; body 64px and prose 0px. The maintained containing-column assertion rejects it (`expected 1161, received 64`). Screenshot and actual error are retained. This expected diagnostic failure is not counted as a failed product test.
2. Removing the style immediately restores the same hidden-reader assertion. The record captures actual parent content/layout/body boxes before, broken and after restoration.
3. Reopen via the real button, then apply page-only name 14 → 15px and icon 18 → 22px. The shared credit assertion accepts visible uncut text, bounded 44px feedback and no overflow; actual separator Shift+Tab reaches feedback with a nontransparent/nonzero outline. Removing that style restores the original font and passes again. No arbitrary visual difference tolerance is introduced.

`controlled-diagnostics.json` reports `passed:true`, negative `rejected:true`, benign `accepted:true`, zero browser errors. Captures: `diagnostic-baseline.png`, `diagnostic-zero-column.png`, `diagnostic-benign-visual.png`. Temporary styles are removed in `finally`; browser/context/server close. The script and generated evidence are ignored local artifacts, not a public test framework or product modification.

## Validation and limits

- Initial sandboxed `npm run check`: lint/type generation succeeded, but two static-preview Node tests could not bind loopback (`EPERM`). Preserve `check-initial.log`; this is an environment restriction, not a product failure. Authorized loopback-capable `npm run check` then passed lint, strict types and 60/60 Node tests (`check-final.log`).
- Root local `NEXT_PUBLIC_BASE_PATH='' npm run build -- --webpack` passed. `verify:export` passed 8 pages / 201 local links/assets, zh 28/en 0 section targets. No build config or normal cloud command changed.
- First complete root Chromium run passed 61/61, zero retries (`root-e2e.log`, `root-results/`). A final test-only refinement adds real Shift+Tab/Tab before outline checks and removes a redundant minimum header-height lock; `root-final-e2e.log` records the resulting full revision separately.
- The old PR38 Linux failure histories remain in the previous handoff/review. This task does not reproduce Linux/classic scrollbars locally or claim new Linux/cloud evidence. The containing-box model uses real main padding/border/layout, preserving the accepted fix rather than adding a 15px tolerance.
- No new Safari/Firefox, native browser zoom, physical device or AT run is claimed. Actual CSS text enlargement and Chromium forced-color emulation are separately named. No network publication, external form submission, dependency installation, runtime/schema/manuscript/workflow edit or Git write was performed.


## Final revision and delivery freeze

Final source is based on unchanged HEAD `27335fc90d903b42da6be3ed060efd9e251e3dea`. All six spec files, one support helper, this handoff and the narrowly updated guide are frozen for affected Coordinator review. Coordinator's board/review and the existing dependency symlink are preserved and excluded. No runtime, content source/hash, route/locale contract, dependency, export verifier or workflow changed.

| Full-suite r1 command / evidence | Result |
| --- | --- |
| `npm run check` → `check-frozen.log` | Passed lint, both strict type projects and 60/60 Node tests. |
| Root `NEXT_PUBLIC_BASE_PATH='' npm run build -- --webpack` → `root-build.log` | Passed static build. |
| Root `NEXT_PUBLIC_BASE_PATH='' npm run verify:export` → `root-verify.log` | Passed 8 pages, 201 local links/assets, zh 28 / en 0 indexed sections and actual targets. |
| Root `NEXT_PUBLIC_BASE_PATH='' npm run test:e2e -- --output=.artifacts/e2e-risk-alignment/root-final-results` → `root-final-e2e.log` | 61/61 passed, one worker, zero retries, 1.2m. This is the final Tab/Shift+Tab revision; the first passing root run remains separately retained. |
| Pages `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run build -- --webpack` → `pages-build.log` | Passed static build. |
| Pages matching-prefix `npm run verify:export` → `pages-verify.log` | Passed the same 8 pages, 201 references and reviewed section targets under the Pages prefix. |
| Pages matching-prefix `npm run test:e2e -- --output=.artifacts/e2e-risk-alignment/pages-results` → `pages-e2e.log` | 61/61 passed, one worker, zero retries, 1.2m. |
| `node .artifacts/e2e-risk-alignment/controlled-diagnostics.mjs` | Negative rejected actual prose 0px; restored baseline and benign visual change accepted; zero errors. |
| `npm run test:e2e -- --list` → `case-inventory.log` | 61 cases in all 6 files; no removed/skipped cases. |
| Guide static check → `docs-static.json` | 57 relative file links resolve; all 20 previous headings remain verbatim. |

`site/out` contained the Pages export after the full-suite run (r2 root recheck below replaces it); both Playwright runs ended and their managed previews closed. Local artifacts include exact logs, screenshots and the diagnostic script/results, `review.diff`, `final-digests.json` and `frozen-files.tar.gz`. Do not commit generated evidence. The archive contains only the nine allowed deliverables; its hash is recorded beside it for local recovery.

No open implementation question is known from these checks after the r2 correction below. This is a request for Coordinator review, not self-acceptance, cloud CI, merge or deployment. Linux/classic-scrollbar behavior needs the exact-head cloud gate; Safari/Firefox, native zoom, physical devices and AT remain unrun in this task and assigned to the guide's explicit release triggers.

### Affected review corrections and exact final revision

E2E-R1: the common focus helper now requires a nonzero, nontransparent outline in the current outline-based implementation. An ordinary box shadow cannot satisfy it. Credit uses actual separator Shift+Tab, and prose links/forced-color actions now use Shift+Tab/Tab before the assertion. The complete r1 root/Pages runs above include this correction.

E2E-R2: removing the old global 12-RGB uniqueness lock left a real gap: all six named choices could render the same accent while their `data-accent` values differed. The final test keeps a separate set of actual visible accent-role values per theme and requires each set to contain six values. It compares relative effects, not expected RGB or cross-theme uniqueness. All 12 contrast, canvas neutrality, warning semantics, real visible swatch selection and disabled-state assertions remain. The guide records this retained contract.

- Preserve completed root 61/61 and Pages 61/61 results as **pre-E2E-R2 full-suite evidence**. `pre-r2-digests.json` and `pre-r2-frozen-files.tar.gz` retain that exact source. The final revision adds only the per-theme effect assertion and related handoff/guide wording; it does not claim another final full-suite run.
- Existing matching Pages output: `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run test:e2e -- --grep 'twelve appearance/accent combinations' --output=.artifacts/e2e-risk-alignment/r2-pages-results` passed 1/1 in 2.9s (`r2-pages-appearance.log`).
- Since root output had been replaced by Pages, rebuild unchanged runtime for the root prefix using the same local Webpack command (`r2-root-build.log`); matching verifier again passed 8 pages / 201 references / zh 28, en 0 targets (`r2-root-verify.log`).
- Root matching-prefix affected case passed 1/1 in 3.2s (`r2-root-appearance.log`, `r2-root-results/`). Each affected case exercises both themes and all six actual accent choices. Zero retries; no tolerance/timeout/config change. Final `npm run lint` passed (`r2-lint.log`).
- Shared helpers are unchanged from the full suites and controlled diagnostics; zero-column rejection, restored baseline and benign design tolerance evidence remains applicable. The new assertion only adds protection.

Final `site/out` is the root export; both focused Playwright-managed previews closed. No additional implementation or design scope is open. Freeze the nine allowed files at r2 and return for affected Coordinator review. Exact-head cloud checks and integration remain Coordinator-owned.

### Frozen source hashes

SHA-256 values below cover the eight non-handoff deliverables. The handoff's own final digest is in `final-digests.json`, avoiding a self-referential hash.

| File | SHA-256 |
| --- | --- |
| `site/DEVELOPMENT.md` | `d0ac2301f786ba7a536235fe15a9f75de77853d9c24a8c87dde5b60dfebdd1e6` |
| `tests/e2e/continue.spec.mjs` | `59ab7b2b4aafc0f4eabcbd3e3de4e29f36a5437f2c1194e92a936c63170bbdbd` |
| `tests/e2e/reader-info.spec.mjs` | `d79b3bbb82b1ecb8bfd60866c86b6146c565b55d6ac42873a8b9a0c28de83f32` |
| `tests/e2e/reader.spec.mjs` | `cbf5cbf0fb234e79494f72514d58a5fd286879e75ff72e5e135dede645db9840` |
| `tests/e2e/reading-polish.spec.mjs` | `8af670fa87bee3e2f90de46429f9b620475b6db33de04225fed45b3ec6d716f8` |
| `tests/e2e/reading-toolbar-links.spec.mjs` | `a879051d728057d49f56d798eabdd735db39481cba541ffdffba865f462cfbeb` |
| `tests/e2e/sidebar-hidden.spec.mjs` | `b9ebb8b36890332327c2d36211919e5e23bab13d7f8beed531b4874f24933406` |
| `tests/e2e/support/reading-assertions.mjs` | `32298f880b49a30f9283aa68c133e0d29448ac44940d34aba6b42c1c6dbbf0d1` |
