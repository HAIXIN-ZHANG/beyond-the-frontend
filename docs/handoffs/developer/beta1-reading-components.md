# Beta 1 reading components — Developer handoff

Owner: Developer. Revision: r4. Date: 2026-11-16 (Australia/Perth). Status: Frozen for final Coordinator comparison/review. Coordinator owns review and Git integration; this report owns scoped execution evidence. See the [board](../../coordination.md) and [actual review](../../reviews/beta1-reading-components.md).

## Task brief

- **Authority/objective:** the author-approved staged plan now assigns reusable UI04 reading components and actual Header/Appearance integration, after accepted theme foundation. Implement Header, Button, IconButton, Appearance, ChapterNavigation, OnThisPage, Callout, CodeBlock and ComparisonTable; no chapter renderer or public component gallery.
- **Workspace/base:** `/Users/haixin/Desktop/code/vibe-coding-then-what`, `codex/beta1-reading-components`, verified HEAD/local `origin/main` `2534b90d23c3624e4ce393aa02f52df4dea75e06`. Coordinator's board edits existed at startup and are preserved. No Developer Git writes.
- **Allowed files:** `panda.config.ts`, `panda/global-styles.ts`, new `panda/recipes.ts` or `panda/recipes/**`; `panda/tokens.ts` only justified shared application roles; existing Header/DocumentLayout/theme-preference-select; new `site/components/ui/**`, `site/components/reading/**`; necessary labels in `site/config/i18n.ts`; `site/styles/global.css` if needed; `site/DEVELOPMENT.md`; this handoff. Package/lock changes require actual dependency/command need; tests only meaningful component/interaction checks. Coordinator subsequently added only the opening Target versus implementation paragraph in `docs/design/reading-experience-v1.md`. No other files, app routes, controller replacement, CI, board, Writer/contract/other handoff/review edits.
- **Inputs/acceptance:** current AGENTS/role/board, UI04 handoff/review, accepted theme and source contract. Preserve 111 mappings/four collections/14 style provenance, strict type boundaries, current brand and Pages prefix. Use small explicit-prop APIs/native semantics, semantic recipes/slots where useful; existing one-controller System/Day/Night behavior. Header trigger reflects effective appearance with preference/effective accessible context, minimum 44px, keyboard open/choice/Escape/focus return and outside dismissal. No fake Search trigger.
- **Reading boundary:** available versus planned items, current chapter, language availability, heading link levels, code language/copy feedback/manual fallback, semantic caption/column headings and local overflow. No new book schema, manuscript copy, translation or implied published route.
- **Verification:** check, root/Pages build+export gates; fresh Header/Appearance browser checks at 1440/1024/768/390/320, Day/Night, refresh/System, focus/keyboard/dismissal, bilingual routes/404 and errors. Exercise reading primitives in an isolated temporary fixture if practical; explicitly limit claims until real chapter integration. No new permanent test framework/Storybook by default.
- **Next boundary:** freeze actual source/hash manifest, evidence and gaps, then Coordinator review and scoped revisions only. Do not self-approve, commit/push/merge, deploy, or start renderer/search/audio/AI/Beta 2/prose work.

## Delivery and implementation boundaries

The fixed r4 submission is **16 live files plus one deletion**, listed with hashes below, and this evolving handoff (18 owner paths total). It adds Header Appearance and eight UI/reading component modules. Header reuses the accepted controller/hook; DocumentLayout removes the former footer select. The eight modules are AppearanceControl, Button, IconButton, ChapterNavigation, OnThisPage, Callout, CodeBlock and ComparisonTable. Header itself remains the existing integrated component.

Small explicit props cover available/planned chapter items, truthful caller-supplied language availability, current chapter/heading, outline levels, callout tone, code/copy labels and table columns/cells. Planned chapters cannot carry actionable href/current props. No publication schema, parser, manuscript, recursive scan or new route was introduced. Presentational reading components stay server-renderable; Appearance and CodeBlock own the necessary client interactions. Code copying reports actual success, or offers selectable manual text on failure; changed source values invalidate the old source's feedback.

Panda action/slot recipes share existing semantic roles. Dotted roles use explicit `token(...)` expressions. Focus/hover/disabled selectors are explicit: the accepted config defines custom conditions and does not provide the shorthand conditions initially assumed here. Disabled declarations are inline in each visual variant so Panda extracts them and variant layers cannot overwrite the disabled palette. No token, mapping, text-style or controller changes were needed. Table cells preserve at least12ch and normal word wrapping while long code scrolls locally; CodeBlock resets browser figure inline margins.

Appearance uses a native auto popover and radio group, with a44px trigger reflecting effective Day/Night and accessible preference/effective labels. Opening focuses the checked choice; selection closes and returns focus. Mounted layout-effect listeners inspect actual `:popover-open` state on resize/scroll, avoiding the asynchronous open-state listener race. Toggle focus handling also confirms the panel remains open. Placement measures actual CSS panel width and clamps both horizontal edges. Native Escape/outside dismissal remains intact. No fake Search control was added.

Read-only Figma inspection used UI04 Appearance node127:69 from the existing design file. No Figma write, asset download, added font, new mapping or Code Connect integration occurred. Existing111 variable mappings/four collections/14 text styles are unchanged.

The [developer guide](../../../site/DEVELOPMENT.md) now describes actual component APIs, native-popover requirement, recipe/strict-compiler boundaries and temporary-fixture limits. The only [design handoff](../../design/reading-experience-v1.md) change is its opening Target versus implementation paragraph: it points to [merged PR12](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/12) and the [theme review](../../reviews/beta1-theme-foundation.md), identifies the accepted Panda/System-Day-Night foundation and eleven tests, links the separate in-review component stage, and retains absent reader/search/section-copy/AI features plus the unaccepted whole DS01 checkpoint. Every design decision, token ID/count, behavior contract and historical section below that paragraph is unchanged. Local relative links were checked.

## Actual verification

All results below are local, on2026-11-16. There was no dependency installation, Git write, CI run, merge or deployment by Developer.

| Check | Actual result |
| --- | --- |
| `npm run check` | Passed ESLint, codegen, Next route declarations, strict application/build-tool compilers and all11 existing Node tests. Those tests cover routing/theme, not component browser behavior. |
| `NEXT_PUBLIC_BASE_PATH='' npm run build` and matching `npm run verify:export` | Passed;5 HTML pages/73 local links and assets. |
| `npm run build:pages` and `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run verify:export` | Passed;5 HTML pages/73 local links and assets. |
| Generated production CSS | Parsed each clean export with existing PostCSS. Each contains201 declarations in action/reading recipe rules, zero unresolved dotted-role literals or token macros; actual disabled, hover, focus and planned-item selectors are present. |
| Production browser matrix |30/30 cases passed:20 Header cases (root+Pages ×1440/1024/768/390/320 ×Day/Night),2 immediate-open/resize/scroll/focus cases,2 bilingual/404 cases,4 fixture geometry/semantics/overflow/disabled-color cases and2 clipboard success/denied cases. |
| Additional affected fixture checks |6/6 passed at1024/768/390 ×Day/Night; actual selected-navigation, code, notice and table palette/spacing matched expected roles. Combined fixture checks cover all five widths. |
| Source boundaries and whitespace | `git diff --check` passed. Tokens/reference, theme runtime/hook, application/build-tool tsconfigs, dependencies/lock, global.css, content contract, CI and tracked book/scripts/tests are byte-unchanged against the assigned base. Opening/G01 retain the accepted hashes below. |

Browser environment: existing Playwright CLI and installed headless Chrome; Browser plugin/skill was unavailable. No browser framework was installed. Both clean static exports were recreated by removing only their named temporary copies before copying current output, preventing stale chunks. Root preview: `http://127.0.0.1:44751/`; Pages preview: `http://127.0.0.1:44752/vibe-coding-then-what/`; fixture: `http://127.0.0.1:44753/`.

Production checks exercised checked/focused System choice, effective icon/accessibility labels, visible focus styling, Escape/Enter/selection return, Night refresh, reset-to-System/media following, real outside-point dismissal, horizontal bounds, Chinese/English navigation and actual bilingual404 response. Immediate resize used trigger click → panel visible → viewport320, with no arbitrary test delay. The fixture imported actual source components and fresh exported CSS, bundled with already-installed Rolldown. A fixture-only process.env shim supports standalone NextLink; it is not an app change. Tests cover native-disabled primary/quiet/icon background/foreground/border versus actual semantic values and hover invariance, current/planned navigation, heading links, callout geometry, table semantics/readable first-column width, zero figure inline margins and local code/table overflow. Clipboard was stubbed to verify success bytes and forced failure/manual selection without system clipboard permissions.

Screenshots inspected:1440px Day Header,320px Night Header and320px Night fixture. The corrected first table column wraps ordinary words instead of single glyphs; disabled controls use muted semantic roles; code uses the available narrow width. Temporary supplemental evidence lives under `/tmp/vctw-reading-components/browser/`: `result-r4.json` (30/30), `result-extra-r4.json` (6/6), `css-audit-r4.json`, `root-1440-light-open.png`, `root-320-dark-open.png`, `fixture-320-dark.png`, plus the executable temporary audit scripts. Preview startup is `/tmp/vctw-reading-components/serve.py`; temporary files are supplementary, not durable prerequisites or committed product routes.

Earlier failures are retained as history: the first matrix had11 passes/19 failures, including the real resize issue and harness assertions reading focus before the native toggle event or clicking an h1 covered by the open panel. The harness now waits for the observable checked-choice focus and clicks a genuinely outside point. An intermediate revised matrix passed26/30 and correctly caught missing disabled semantic rules. Final30/30 and supplemental6/6 above refer to the fixed r4 sources only; no partial earlier run is represented as acceptance.

Limits: one browser engine; no Safari/Firefox or manual assistive-technology result. Native Popover API support is required; no unsupported-browser fallback was claimed. Fixture behavior is not real chapter integration, syntax highlighting, scrollspy, search or section actions. No cross-tab/storage foundation rerun is claimed for unchanged controller code. No new permanent component test suite was added; the later separately assigned QA stage retains that responsibility.

## Revision responses

| Finding | Owner correction | Actual affected evidence | Coordinator closure |
| --- | --- | --- | --- |
| CMP-01 | Explicit token expressions throughout recipes; explicit supported selectors; clean rebuilt exports. |201 declarations per export without unresolved roles;44px controls,12px control radius,24px callout padding/20px radius, semantic colors/spacing and actual state selectors verified. | Coordinator independently reported affected checks passed; final frozen-source comparison belongs to the review. |
| CMP-02 | Actual-width horizontal clamping; stable mounted layout-effect resize/scroll listeners inspect DOM open state rather than asynchronously installing after opening. | Root+Pages five-width matrix and immediate open→resize320 without delay passed; scroll dismisses with focus returned, reopened narrow panel stays within viewport. | Same independent affected-pass report; no owner self-closure. |
| CMP-03 | Disabled colors inline per visual variant, with hover limited to enabled controls. | Actual bg/fg/border match disabled roles for primary/quiet/icon in Day/Night; invariant on forced hover. Screenshot inspected. | Same independent affected-pass report. |
| CMP-04 | Figure inline margins zero; table cell minimum widths and normal word wrapping. |320px screenshot readable first-column words; local pre/table scrolling, figure margins and no page overflow verified. | Same independent affected-pass report. |

Coordinator separately reported32 Header cases and8 extended fixture cases passed, including affected screenshot inspection; these are its independent observations, not Developer's36-case count. Its [review](../../reviews/beta1-reading-components.md) owns final acceptance. Direct outbound cross-chat delivery had previously been rejected by automatic approval review for insufficient messaging authorization; Coordinator instructed shared-file review and no repeated sends. This handoff is the reviewable delivery, without claiming a new message was sent.

## Frozen fixed-file manifest

SHA-256 below identifies the exact submitted files, excluding this evolving handoff to avoid a self-hash loop. A machine-readable copy is `/tmp/vctw-reading-components/developer-r4-fixed.json`. The deletion is `site/components/theme-preference-select.tsx`; generated styled-system/build/export files stay ignored.

| Path | SHA-256 |
| --- | --- |
| `docs/design/reading-experience-v1.md` | `b986a1a3d96f764d1a4972c9135cabf2fe364ffe3d0e93d36a32686b08831aa5` |
| `panda.config.ts` | `dc025ebd128919c9727feedc81ef61777ae0f467c53d3b594eb36e3b984734eb` |
| `panda/global-styles.ts` | `fde7ebf96ba916cec998ff3f7c695d06aa58933e0c83eade4c3b2fbdb59661f7` |
| `panda/recipes.ts` | `d9b2e876714670d87eb63d53ad2f037968dc7db6ef1cddf5b1f49c4dee417112` |
| `site/DEVELOPMENT.md` | `ad944174ec8e38a2ca1b71d6e30db67949dcaf878bf88f6ef3316ae9f09edd59` |
| `site/components/document-layout.tsx` | `5f1254f7a19cb6a1dd4749dcfceb6545e38e73b54b6098c27c460106e9395eec` |
| `site/components/site-header.tsx` | `8d35b3516033bb0a3ea0b95d963cd52b66c6175cf8f2b3c60dd4593eac5bd9e2` |
| `site/config/i18n.ts` | `ad662b456650478738b24c1ab9d17720cd7d155c4da1bf7d26a75c6eb5aed9d4` |
| `site/components/ui/appearance-control.tsx` | `48887724e12c8805c77e6e00999881e9d9352f900d75e70293797299fee7d70c` |
| `site/components/ui/button.tsx` | `61ff31143872705a16b297010eaa9af8a96a4467bbbc2cc468241daedae6d28f` |
| `site/components/ui/icon-button.tsx` | `16c2447928a0ec54ade2bccd2321a187abfce81b03d4f554995ea032bca5746e` |
| `site/components/reading/callout.tsx` | `031457fe3500b873f72db6db0072c5d8fc9cd4850d07e975b9d33e649c9a68ed` |
| `site/components/reading/chapter-navigation.tsx` | `a932b4585e3518a56391a852501bfb8beaec209b28bc3b21a0fc12ef03ecb2e7` |
| `site/components/reading/code-block.tsx` | `56f2d2099020d2b55db902c61640656d6b719e42df3574e23d5840551ba88b4e` |
| `site/components/reading/comparison-table.tsx` | `75c28ce01b7953785c4cf1f2c7a899fdc7ccf0b8274908a71f0e557918d03441` |
| `site/components/reading/on-this-page.tsx` | `f37d11c7e982afeb92bbde420ab6cfe2757810ecb98e15e0b13a61309dc5ceb2` |

## Recovery checkpoint

- **Done:** scoped components/Header integration, required review corrections, actual checks/screenshots, current developer guide and the single authorized design paragraph. Source is frozen r4 on `codex/beta1-reading-components`, HEAD/base `2534b90d23c3624e4ce393aa02f52df4dea75e06`; no Developer Git write.
- **Preserve:** separate Coordinator board/review edits, all Writer/book files, accepted theme inputs and prior handoffs. Opening SHA-256 remains `244c4f7a9ddeb781d8530691d07ba17b9daccf611b9631ea60faa412b87a6d90`; G01 remains `b928e5df21876c0ca49a3c227eb6c7e20723b3f22bb9c7cb2d560cc198db62d2`. Both preserved DS01 refs still identify `4da2578048f8df113fed92d99e084f644a9a788e`; the ignored recovery backup was not edited.
- **Last verification:** strict check/11 tests, root+Pages build/export5 pages/73 references each, production browser30/30 and supplemental fixture6/6, emitted-state/CSS audit, source boundaries/local links/whitespace. No cloud run or deployment claimed.
- **Next:** Coordinator compares the final manifest/actual files and records acceptance or returns scoped findings. Preserve temporary clean previews for that recheck; restart the local-only preview script if needed. Developer resumes only returned corrections or a new explicit assignment. No renderer/search/AI/audio/Beta2/prose continuation, commit/push/merge or deployment.
