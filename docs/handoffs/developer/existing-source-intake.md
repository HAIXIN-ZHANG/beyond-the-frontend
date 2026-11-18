# Reviewed source revision and reader identity intake

Owner: Developer. Date: 2026-11-18 (Australia/Perth). Revision: r2, documentation correction complete and frozen for Coordinator recheck. Local intake/review only; no Git operation or publication.

## Brief and design before implementation

Authority: [current board](../../coordination.md), [accepted Writer refresh](../../reviews/existing-manuscripts-refresh.md) and Coordinator's bounded source-intake release after appearance-foundation closure. Workspace: `/private/tmp/vctw-m2-v2-reader`, `codex/m2-v2-reader@5141823f9c4a0b5403cf7a24d4269b0d09e2e92d`. Coordinator already copied accepted first-three bodies/README/editorial into this worktree. Preserve them; the old manifest hashes intentionally reject those bodies until this intake updates the exact accepted revisions. Do not bypass source validation.

Sole new report: this handoff. Allowed existing areas: three manifest hashes/review pointers; minimal typed legacy-anchor metadata/validation and controlled renderer; BookNavigation byline and approved i18n descriptions; necessary alias focus/scroll CSS; affected existing content/search/i18n/E2E/export checks; content-contract revision addendum and factual developer guide. No prose,03/04 admission, new language/body/order/route, general heading migration, package/CI/Figma/other product document, structural reader/sidebar/home, AI/Continue/Git/release change. Preserve the accepted appearance/runtime behavior and all prior actual checks.

Approved hashes: opening `b4d0dd040e183cebc0400526ca5b317d23db1dc406e0bd5b00e3af74a940f521`; G01 `e0fca6dd95b87e93107c4279fb4bad120e80a068c8fc91a58689154293b25a05`; F01 `3688b7967433b7a97304438100908d37883d5de9740aaa5c08820b37aa9bf624`. Keep IDs/slugs/H1/order/status. Set these review pointers to the accepted refresh review. Reader Chinese byline becomes `缸子太子与世界` without repeating a creation-method label. Exact descriptions: EN `Understanding the Systems We Build, and Learning to Live with What We Can’t Fully Control`; ZH `看懂我们构建的系统，也学着与无法完全掌控的事相处。` Central acknowledgment and AI teaching/provenance in approved prose remain untouched.

**Proposed minimal compatibility:** one explicit typed alias for opening only: `关于本书的-ai-协作` → `我为什么想写这本书`. Validate its target is a real canonical heading and its ID does not collide with canonical/reserved/other alias IDs before rendering. Attach trusted alias metadata to that heading, not raw manuscript HTML. Render a named, focusable static group with the old ID around the retained heading/actions; keep the actual H2's canonical ID/section links. Native old-fragment navigation focuses that group at the retained section without JavaScript; Tab reaches its real heading link, and Enter moves URL/focus to the canonical H2. Canonical search/outline/sharing stay canonical with no fake alias entry. Add only alias-specific scroll clearance with a closed-toolbar CSS fallback before measurement/no JS; the existing observer can still supply actual toolbar height. No generalized promise of stable IDs after arbitrary renames. This is the chosen approach for implementation and actual root/Pages/no-JS/focus QA, subject to Coordinator review.

Acceptance: source checks and true corpus28 canonical sections/en0, actual14 signup results; new identity/metadata, alias direct/keyboard/canonical focus and offset at desktop/390/320; appearance palette/refresh regression; lint/strict/Node then fresh sequential root build/verifier/E2E and matching Pages run. Preserve all five manuscript bytes and previous foundation files except explicitly affected intake areas. Record actual observations/hash payload and limits before freeze.

## Recovery

Brief preceded implementation. Implementation and local QA are complete below; the exact payload is frozen pending Coordinator review. No next task, Git operation or release starts automatically. Coordinator owns affected review and any later layout assignment.


## Delivered behavior and implementation

The manifest now pins the three approved source hashes and their accepted review pointer, preserving all existing identities/routes/H1s/order/status and hash/containment/link validation. `legacyHeadingAliases` contains only the approved opening exception. Typed heading metadata is attached after real Markdown heading extraction. Missing targets, invalid IDs, reserved `main`, canonical collisions, reused aliases and a second alias on an already mapped target fail. Markdown remains controlled; no raw HTML or client redirect was introduced.

Direct old-fragment navigation focuses the named static wrapper at the retained section. The URL keeps the old fragment until the user activates the canonical heading link. Actual Tab→Enter focuses the real H2 and changes the URL to its canonical fragment, with JavaScript enabled and disabled. Outline, heading sharing and extracted search entries continue to use only canonical IDs. Alias-only CSS reuses the existing tokens; the closed-toolbar fallback is61px plus24px clearance at narrow widths, with the existing measured variable available after hydration.

BookNavigation now displays only the confirmed pen name. Both descriptions exactly match the approved English/Chinese copy; titles, Chinese locale header, availability and appearance controller behavior remain intact. The introduction's acknowledgment, responsibility statement, technical teaching and provenance remain in the source/rendered body. The content contract adds a dated revision/compatibility addendum while retaining historical identities; the developer guide describes this local revision and the already accepted appearance foundation accurately.

## Actual verification

Environment: Node24.14.1/npm11.11.0, existing Playwright1.65.1/Chromium159.0.8154.6. Browser plugin not available; used the previously authorized installed Playwright workflow. No dependency installation. Flow under test: root/Pages chapter URL with old or canonical fragment→native focus/scroll→Tab/Enter canonical heading; both locale homes→approved identity; real search and existing appearance flows→unchanged behavior.

| Check | Actual result |
| --- | --- |
| Final `npm run check` | PASS: zero-warning ESLint, both strict TypeScript compilers and50 Node tests |
| Fresh root build→matching export verification | PASS:8 pages/165 local link-asset references, zh28/en0, all canonical targets real |
| Matching root full E2E | PASS:21 cases,18.6s |
| Fresh `build:pages`→matching prefixed verification | PASS:8 pages/165 references, `/vibe-coding-then-what`, zh28/en0 |
| Matching Pages full E2E | PASS:21 cases,18.7s |
| Legacy/canonical focus, native keyboard, no-JS fallback | PASS on both builds at1440/390/320px; unique real IDs; alias excluded from corpus |
| Actual scroll/overflow | Both JS modes/builds: desktop heading top32px, toolbar hidden;390/320 heading top85px versus toolbar bottom61px. No document overflow |
| Identity and source provenance | Exact locale descriptions/visible title lines; pen-only reader byline and intact central acknowledgment; actual current source hash per index entry and article |
| Search and appearance regression | Actual14 `报名` matches at1440/390/320, including keyboard access to last result; all prior19 E2E cases retained:12 mode/accent pairs, refresh, pre-body bootstrap, OS/cross-tab/blocked-storage/quota, responsive controls and source/table/code safety |
| Page identity / meaningful render / overlays / console / screenshots | Correct paths/titles, real article and home content; no framework error overlay or unexpected browser errors; saved actual screenshots and focus/offset JSON |
| Final `git diff --check` and preservation comparison | PASS; only the14 authorized existing payloads below and this report differ from the intake snapshot |

An initial sandbox-only check could not bind loopback; the already authorized escalated local test run passed. The first added E2E revision incorrectly compared the two-line home title with a string containing a space between text nodes. Only the assertion was corrected to the existing `titleLines` composition; both final build sequences above ran afterward. These are resolved verification issues, not outstanding product failures.

## Evidence and preservation

Logs outside the repository: `/tmp/vctw-source-intake-{check,build-root,verify-root,e2e-root,build-pages,verify-pages,e2e-pages}.log`. Root browser artifacts are saved in `/tmp/vctw-source-intake/root/playwright/`; matching Pages artifacts in `/tmp/vctw-source-intake/pages/playwright/` and the current ignored `.artifacts/playwright/`. Each build has50 screenshots, including18 new intake captures (legacy direct, canonical-after-keyboard and canonical direct for3 widths ×2 JS modes). Each `reader-reviewed-source-ide-*` directory contains `source-intake-fragments.json` plus captures. Example Pages no-JS320 evidence: `reader-reviewed-source-ide-de0e0-ks-work-with-JavaScript-off/intake-320-legacy-direct.png`. Screenshots were inspected for visible target, toolbar clearance, focus boundary and clipping; geometry assertions provide measured evidence.

The actual original5 manuscripts, README/editorial, accepted foundation/gap reports, Writer refresh handoff/review, package files, theme runtime/store, unaffected palette/token/recipe/config/controller files and all other snapshot files remain byte-identical. Snapshot: `/tmp/vctw-source-intake-baseline.json`. Current `site/out/` is the freshly verified Pages artifact, not a deployed revision.

| Preserved source | SHA-256 |
| --- | --- |
| `book/drafts/zh/00-before-we-start.md` | `b4d0dd040e183cebc0400526ca5b317d23db1dc406e0bd5b00e3af74a940f521` |
| `book/drafts/zh/01-a-page-and-a-system.md` | `e0fca6dd95b87e93107c4279fb4bad120e80a068c8fc91a58689154293b25a05` |
| `book/drafts/zh/02-browser-foundations.md` | `3688b7967433b7a97304438100908d37883d5de9740aaa5c08820b37aa9bf624` |
| `book/drafts/zh/03-after-ai-finishes.md` | `c5d066524720e82e63453823dc654878a83e581d88e7370207fac533df48cca3` |
| `book/drafts/zh/04-api-contract.md` | `7bdfb4eac5aa8203a0502a1f8f2c95091878100eda0d9ecd6b7578eb6f0c16fc` |

## Frozen Developer payload

Hashes describe this local intake revision on top of the separately accepted foundation. Review the intake delta against the snapshot/foundation, not as a substitute review of Writer prose or another accepted slice.

| Existing file | SHA-256 |
| --- | --- |
| `docs/content-contract.md` | `1449d09b93843bf30776a34836717ade07e8350af85cc3d5a32c3b1a39a008a5` |
| `panda/global-styles.ts` | `a98a06811d820f8094e983e046b92e6f66acd84719fb86c8029cb3bed3f236e1` |
| `scripts/verify-export.mjs` | `7acfe31ac9bbc47ea8f773b82fd0ff848c87e8a816bc02855b2d43207e924f54` |
| `site/DEVELOPMENT.md` | `4456c17e3ae79511c9ef7b12439d205cfe9c8686debd866e0b71a9e537c48327` |
| `site/components/reading/book-navigation.tsx` | `fa0342ea3fd0b4392203205b3e30e38f8abb05bcafc09086588093d88758a4a7` |
| `site/components/reading/markdown-content.tsx` | `45009badc8b0e7c2429a6ed511c2335e2d3c4f448b2deddf2b9b3dd3d4802940` |
| `site/config/i18n.ts` | `07e9d6c810418c9be165f4b495cffbc4b9deb0276cd4d2e770b316b92b9659dc` |
| `site/content/load-book.ts` | `a9a3c134bbed0d74ec319f8030a69e6eff64e6e03616a547a37a8d54b533ca90` |
| `site/content/manifest.ts` | `4a6526e3d806ec9bbb9d713ba798991ef93aa10a30af1dfcca5c41563520af77` |
| `site/content/markdown.ts` | `edbede804e7f5a3c49df9a7c052d12ddd847d40e7546e4dac6d6b91933f9aa78` |
| `tests/content.test.mjs` | `4950167bd8626c1ca83c4956060a1121d58c53cddc2f22f5ce3842ea82d81389` |
| `tests/e2e/reader.spec.mjs` | `50b9c848a41b87e43322855e86bfe7a1b1f2cc6d0ecc2516c294f11accf2eeee` |
| `tests/i18n.test.mjs` | `1da2ce6879f6d044932b24c0547dcfc9bf5314f82e7a2ef3efdc1b1d91a06c43` |
| `tests/search-sharing.test.mjs` | `f2e6ba365dc592865ded3f7364593c38a63b54bad5df1aa6fd0838cfda0495fd` |

The fifteenth payload is this single handoff; its final hash is supplied directly to Coordinator to avoid self-reference. No Writer prose, Coordinator review/board, package/CI/access setting, layout or Git state was edited for this intake.

## Limits and next gate

No Safari/Firefox, physical device, actual screen reader/native browser zoom, cloud CI, Git integration or deployment was performed for this revision. The named static group is verified in Chromium, including JavaScript disabled; behavior in other engines/AT remains unverified. The single known legacy fragment is supported; arbitrary future heading renames are not. The already accepted appearance foundation retains its separately documented limits. No known unresolved local QA finding remains.

Coordinator should inspect the14 existing-file delta, exact approved hash intake, static alias semantics/collisions, real28/14 corpus, identity/metadata and actual root/Pages evidence, then return findings here for original-owner correction. Writer sources are frozen accepted inputs and outside this code review. Stop at this gate; reader/sidebar/home layout,03/04 admission, Git and publication require their next bounded assignment.


## r2 — suite-count documentation finding

Coordinator independently accepted the r1 runtime after checking the14-file delta and235 preserved snapshot files, loading the real28 Chinese/en0 corpus with14 actual `报名` matches, and exercising Pages legacy-anchor→Tab/Enter canonical focus with JavaScript on/off at1440/390/320 plus approved descriptions/no overflow/errors. One current developer-guide count still said nineteen cases.

Only the existing maintained-suite paragraph now says twenty-one and briefly identifies the two source-intake regressions for JavaScript enabled/disabled. This report updates its guide digest and revision evidence. All other13 r1 existing-file payload hashes, all5 manuscript byte identities and original build/test/browser evidence remain unchanged. Digest comparisons and `git diff --check` pass. No build/test rerun was needed or claimed for this prose-only correction; no code, layout, Git or deployment change. Frozen for Coordinator's affected documentation recheck before any next bounded assignment.
