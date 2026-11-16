# Beta 1 theme foundation — Developer handoff

Owner: Developer. Revision: r1. Date: 2026-11-16 (Australia/Perth). Status: frozen for Coordinator review. This report owns scoped task/evidence; Coordinator owns the [actual review](../../reviews/beta1-theme-foundation.md), integration and all Git writes. No acceptance, PR/check/merge or release result is self-declared.

## Task brief

- **Authority/objective:** the author approved the staged Beta 1 execution plan; Coordinator assigned stage 1 only: PandaCSS/UI04 token and theme foundation, System default plus explicit Day/Night with reliable initialization, persistence and recovery. Later components/reading/search/copy/prose/deployment remain gated.
- **Workspace/base:** `/Users/haixin/Desktop/code/vibe-coding-then-what`, `codex/beta1-theme-foundation`, starting HEAD/local `origin/main` `eb822357b6bf1cafe090508254b1aa6c3e71ce8f`, verified clean. Explicit command workdir and absolute edit paths. No Developer Git writes.
- **Allowed files:** `.gitignore`, `eslint.config.mjs`, `package.json`, `package-lock.json`, `panda.config.ts`, `panda/**`, `site/postcss.config.mjs`, `site/styles/global.css`, `site/app/theme-head.tsx`, `site/components/document-layout.tsx`, `site/components/theme-preference-select.tsx`, `site/config/i18n.ts`, `site/theme/**`, `tests/theme.test.mjs`, `tsconfig.panda.json`, `scripts/verify-export.mjs`, `site/DEVELOPMENT.md`, this report. A proposed `site/app/layout.tsx` does not exist in this multi-root app; use the already authorized DocumentLayout integration rather than invent a new root layout. Any other necessary path requires assignment before editing.
- **Inputs:** current AGENTS/Developer guide/board, UI04 handoff/review and prior source audit; read-only selected implementation at DS01 `4da2578048f8df113fed92d99e084f644a9a788e`. Preserve 111 tokens/58 aliased variables/14 styles and recorded IDs/namespaces. Current main is the source for branding, routes, Pages prefix and formal documents; no whole-tree checkpoint restore.
- **Acceptance:** one reused theme controller and native System/Day/Night select, effective appearance distinct from preference, explicit return to System, robust missing/invalid/blocked storage, media/cross-tab/refresh/first-render/hydration/keyboard behavior. Keep application strict declaration checking; disclose any necessary isolated Panda build-tool exception. Check actual token mappings/CSS, maintainable theme tests, project check, root build+verify and current Pages build+verify, and fresh browser evidence against both exact exported artifacts.
- **Dependencies/exclusions:** necessary compatible npm dependencies and existing browser tools are authorized. No CI workflow, AGENTS/board/historical review/handoff, Writer/source contract/prose changes; no full component set, appearance popover, new feature/backend, Figma change, DS01 whole merge or deployment.
- **Next boundary:** freeze actual manifest/evidence/open issues and submit for Coordinator review; revise scoped findings only. Do not self-approve, switch/stage/commit/push/merge or advance to reading components.

## Execution evidence

### Exact implementation manifest

| File | Implemented result |
| --- | --- |
| `.gitignore` | Ignore reproducible `site/styled-system/` output |
| `eslint.config.mjs` | Lint handwritten Panda/theme files; ignore only generated output; browser globals declared |
| `package.json`, `package-lock.json` | Fixed necessary Panda/PostCSS/pkg-types dev tooling; prepare/codegen and explicit dev/build/typecheck generation; preserve current brand/Pages script and all prior direct versions |
| `panda.config.ts` | Root content paths, semantic foundation, system/explicit dark conditions and current generated-output location |
| `panda/tokens.ts` | Saved 111 primitive/semantic mappings and 14 text styles, with Day/Night/system roles |
| `panda/figma-reference.json` | Original UI03 source IDs/aliases/provenance, compatible with unchanged UI04 foundation IDs; not Code Connect |
| `panda/global-styles.ts` | Existing shell selectors expressed with semantic color/geometry/type roles, responsive gutters/focus and native preference styling |
| `site/postcss.config.mjs` | Explicit root Panda config even inside Next's PostCSS worker |
| `site/styles/global.css` | Authored layer entry; shell declarations moved into the typed Panda foundation |
| `site/app/theme-head.tsx` | Self-contained pre-body theme bootstrap |
| `site/components/document-layout.tsx` | Shared bootstrap/native footer preference integration for existing language roots; targeted html-attribute hydration suppression |
| `site/components/theme-preference-select.tsx` | Labelled native System/Day/Night preference; complex header picker remains later scope |
| `site/config/i18n.ts` | English/Chinese Appearance labels only; approved branding and routing unchanged |
| `site/theme/runtime.ts`, `site/theme/use-theme.ts` | One controller/external-store hook, explicit-over-system resolution, persistence/reset, guarded storage and media/cross-tab updates |
| `tests/theme.test.mjs` | Seven meaningful runtime cases including storage-area isolation, snapshots, subscriptions and blocked storage; eleven total project tests |
| `tsconfig.panda.json` | Isolated strict handwritten build-tool checking with documented vendor-declaration exception |
| `scripts/verify-export.mjs` | Retains all current title/brand/language/404/link/asset assertions; additionally executes each real emitted head script against initial saved/system/invalid states |
| `site/DEVELOPMENT.md` | Actual commands, native foundation/target boundary, compiler exception, dependency/audit evidence and current-stage pointers |
| `docs/handoffs/developer/beta1-theme-foundation.md` | This brief, actual manifest/evidence/limits and recovery |

The implementation/report above is 21 paths. The separately authorized content-contract metadata path below makes the full Developer delivery **22 paths**. Existing board, Writer sources and Coordinator reviews are separate owned changes, not part of Developer's implementation.

### Dependencies, compiler boundaries and source reuse

- Official npm metadata confirmed `@pandacss/dev` 2.5.0 (Node >=22), PostCSS 8.5.33 (Panda peer >=8) and pkg-types 2.3.0. Existing Node `v24.14.1` / npm `11.11.0` were used. All original direct Next/React/ESLint/TypeScript versions remain pinned; all pre-existing lockfile versions are unchanged except PostCSS 8.5.23 → 8.5.33. No override, added runtime runner or unrelated UI package was introduced.
- Reused only the inspected token/theme/config/test foundation files from `4da2578`, never its package/lock/branding/Pages/docs tree. New-file creation checked absence and former-brand strings before exclusive writes; an earlier broad-copy request was rejected by automatic review, then safely narrowed to verified absent files. Current shell CSS received an explicit reviewed-source migration to typed global styles. No checkpoint cherry-pick/reset or user/Writer overwrite occurred.
- Application tsconfig is unchanged: strict/noEmit/**skipLibCheck:false**, covering all **22 handwritten application modules** plus generated declarations. The three handwritten Panda definitions run in a separate strict compiler. A real full-declaration probe fails with **four TS2308 internal re-export ambiguities in `@pandacss/types`**; only that build-tool project skips upstream declaration checking. No vendor patch/global relaxation was made. An in-memory invalid-config/implicit-any probe produced TS2322 and TS7006, proving the public handwritten boundary still rejects errors.
- The saved 111 mappings/58 aliased variables/14 styles were retained. Actual compressed root and Pages CSS each matched **111 variables, 80 alias edges, 22 explicit Night roles and 22 no-JS/System Night roles**, with no missing aliases or unexpanded token/style macros. CSS color comparisons normalize equivalent compressed three/four-digit hex values. This verifies actual generated styles against the saved reference, not fresh Code Connect or all UI04 component implementation.

### Actual install/check/build evidence

- `npm ci --no-fund` succeeded from the current lock and ran prepare/codegen; 31 generated files were recreated in the ignored output. `npm run check` then passed ESLint, Next type generation, both compilers and **11 tests**. No CI workflow or required-check name was changed; its existing check command picks up this stage's verification.
- Final storage-area-fix source passed `NEXT_PUBLIC_BASE_PATH='' npm run build` + matching `verify:export`, then `npm run build:pages` + `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run verify:export`. Each actual export contains **five checked HTML documents and 73 checked local references**. The production-serialized bootstrap ran in verification, not just the unbundled source. Root and Pages outputs were saved separately before the next build; no mixed-prefix verification is claimed.
- Full npm audit reports **7 moderate** entries from the same unresolved development-chain minimatch advisory; production-only audit reports **0**. No high/critical/new advisory was observed. No audit fix/forced major override was performed. Historical risk acceptance is not automatically this stage's new approval; Coordinator must review the retained limitation. The current ESLint configuration still does not enable projectService/allowDefaultProject. See the current developer guide and actual audit JSON for evidence.

### Fresh real-browser evidence

No Browser-control plugin was exposed. Used the available Playwright skill, preinstalled CLI 0.1.24/Playwright and an isolated headless installed Chrome channel, without a personal profile or permanent E2E dependency. Current temporary tools reference the renamed root; GET and HEAD share the correct Pages prefix handling. Both served outputs are copies of the final fixed implementation, not prior DS01/rebrand results.

- **26 primary cases passed**, covering root and current Pages prefix: six framework-blocked bootstrap states each (System Day/Night, explicit Day/Night against the opposite OS, invalid storage and denied storage), desktop selection/refresh/media changes/bilingual home+index routes, blocked-storage interaction, 320px layout/focus, actual cross-tab updates/clear/invalid value, real same-origin iframe sessionStorage matching-key and clear events, and no-JS Day/Night CSS fallback. Native select choices, correct computed canvas/text colors, stable controller state and no unexpected application console/page/request failures passed.
- The initial bootstrap cases deliberately block external Next framework scripts while the actual head bootstrap runs. Attribute mutation, body presence, observed paints and resolved colors were recorded. FCP timing was available in eight cases; a **four-case supplement** observed the remaining same scenarios with a forced visible frame/screenshot and actual FCP entry. All observed bootstrap mutations preceded FCP and no observed painted sample had the wrong theme. This is first-render evidence, **not a numeric FCP benchmark or proof of every transient pixel/browser/device**; initial DOM/color resolution is recorded separately from Paint Timing.
- **Two final native keyboard cases passed** (one per prefix): typeahead Night → Day → System, Night selection surviving refresh, System remaining selected while effective appearance is Night, and Tab leaving the select. The native typeahead buffer needs a pause between separate character choices. Earlier Home/arrow/menu automation did not change the value in this platform and is not counted as a pass; final character-selection evidence and visible focus/Tab behavior are explicit. The original full-matrix `getByLabel` locator did not match the implicit select label in the tool; real accessibility snapshots showed the combobox name, and the final audit uses that exact role/name without changing product semantics.
- Saved/inspected screenshots include root Day and Night at 1440px and Pages Night at 320px, with the long new brand, wrapping footer, native selector and visible focus. Twelve blocked-bootstrap scenarios plus supplemental Paint Timing results show initial system/saved colors without waiting for React; normal hydrated cases report no hydration errors. Native select interaction needs JavaScript; no-JS cases verify CSS System fallback, not an inert control's interactivity.

Fresh detailed artifacts: `/tmp/vctw-theme-foundation/browser/report.json` (26/0), `paint-report.json` (4/0), `keyboard-final.log` (both prefixes), actual scripts/logs and PNGs. `token-css-result.json`, compiler configs/probes and audit files are under the same temporary root. These support the recorded local results; they are supplementary and not substitutes for the exact source manifest, actual Coordinator review, Linux/cloud checks or deployment.

### Review feedback applied before freeze

Coordinator identified that a matching-key/null-key sessionStorage event from a same-origin iframe could incorrectly alter the localStorage-backed preference. The runtime now captures the local storage reference inside a guard and ignores every unrelated storage area; the event callback never reads a potentially throwing getter. The focused fixture supplies distinct actual local/session storage objects, with matching-key/clear/blocked-getter regression. Fresh real iframe and cross-tab browser cases passed. This closes the implementation response, not Coordinator's review judgment.

Coordinator separately reported its independent 24-case browser run, current check/export results, screenshots and token/recovery verification. Those are **Coordinator evidence**, not additional Developer runs or a substitute for the fresh first-render/final checks above. Its actual record determines acceptance; Developer freezes rather than self-approves.

## Separate metadata gate — accepted opening r2 reference

After the foundation checks, Coordinator explicitly added **only `docs/content-contract.md`** to this assignment: correct its obsolete global pause statement, preserve W02/branding history and point the current opening row to the actually accepted Writer r2. Read [the opening review](../../reviews/beta1-opening-alignment.md) and verified current source SHA-256 **`244c4f7a9ddeb781d8530691d07ba17b9daccf611b9631ea60faa412b87a6d90`**.

The contract changes only three lines: current-stage/renderer-unimplemented paragraph, historical/current review paragraph and opening hash cell. The original W02 `726963…` and branding `805d2e…` hashes remain historical evidence; G01's hash, IDs/slugs/order, routes, parsing/allowlist/navigation/search boundaries are unchanged. Developer did not edit the manuscript or Writer's two-line outline alignment. This metadata gate neither implements a renderer nor assigns the next feature. Source/hash, exact-diff and local-link checks are recorded at freeze; no code rebuild was needed after this document-only update.

## Known limits and next gate

Native footer preference is the chosen foundation control, not UI04's final header Appearance popover or eight new component families. No font package, Code Connect, reader, search/copy, publication, telemetry/backend, later E2E suite or deployment was added. The isolated vendor declaration limitation and unresolved moderate development advisory remain visible for Coordinator's decision. One headless Chrome channel and these viewport/state cases do not establish every platform, screen-reader/zoom/forced-colors state or complete WCAG conformance.

This is a reviewable stage, not completion of all seven planned stages. No new PR, exact-head cloud check/merge or deployment result is predicted. Coordinator owns those later facts and the next authorized stage assignment.

### Final freeze checks

Exact scope inventory passed: **22 Developer paths** plus six separate Writer/Coordinator paths in the shared tree. Existing required CI workflow, app strict tsconfig, brand/deployment configuration, baseline language/deployment tests, historical design/review/DS01 reports, G01 and F01 analysis are unchanged. Every original export-verifier line remains; additions only strengthen theme assertions. Contract diff is exactly the three assigned lines and current opening bytes match the accepted r2 hash.

Both DS01 refs still name `4da2578`; all 31 ignored recovery files match their original manifest. Project Markdown checks passed **74 files, 385 local links and five heading anchors**, with no link/structure/sensitive-pattern error; `git diff --check` passed. These are point-in-time shared-tree checks, not acceptance of another owner's work. Fixed-file SHA-256 manifest: `/tmp/vctw-theme-foundation/developer-r1-fixed.json` covers **21 files**, excluding this evolving handoff to avoid a self-hash loop. Coordinator can compare that exact snapshot before integration; the full durable path manifest and evidence above remain useful if temporary hashes/logs disappear.

## Recovery

**Done:** 21-path foundation/report plus the separately authorized contract-metadata path, final clean-install/check/root+Pages export verification, 26 primary browser cases, four paint supplements, two native keyboard cases, token/CSS/compiler/audit/scope evidence. **Not done:** Coordinator's final actual review/finding closure, any requested revision, new PR/Linux cloud checks/merge, reading-component stage or deployment. Submitted revision is frozen r1.

The 22 Developer paths are uncommitted on `codex/beta1-theme-foundation` from `eb822357b6bf1cafe090508254b1aa6c3e71ce8f`. Preserve the separate Writer opening/outline/report and Coordinator board/review edits; they are not part of this implementation to stage or reset. DS01 refs and the 31 ignored backup files remain untouched recovery inputs. No Developer Git write occurred.

Next action: Coordinator reads the shared frozen sources/evidence directly and returns concrete findings if needed. Do not repeatedly attempt thread sends after the earlier automatic rejection; direct shared-file review is already in use. Resume only assigned feedback after AGENTS → role guide → current board → this report/review and actual directory/branch/HEAD/status verification. Keep checks/results here sufficient to recover without temporary tools or private chat. No chapter/UI/theme expansion or deployment follows automatically from submission/acceptance.
