# Milestone 1 manual Pages release/recovery — Developer handoff

Owner: Developer. Revision: r1. Date: 2026-11-17 (Australia/Perth). Status: Implementation frozen for actual Coordinator review; no cloud/publication/recovery outcome claimed.

## Task brief

- **Authority:** human-authorized initial Pages publication after review/QA, scoped by [board](../../coordination.md) and [Coordinator review](../../reviews/pages-release-pipeline.md). Implement tooling/runbook only; Coordinator owns Git, settings, dispatch and public/recovery observations.
- **Verified baseline:** `/Users/haixin/Desktop/code/vibe-coding-then-what`, branch `codex/pages-release-pipeline`, HEAD/local main `d390f53420f88deda0627328d140be058a91feac`. PR20's matching-head Linux Quality/root/Pages success and merge are Coordinator evidence. Only board/new review were dirty before this brief.
- **Allowed:** new manual `.github/workflows/pages.yml`, minimal public release metadata/smoke helpers and meaningful tests, useful package script entries without dependency/lock churn, bounded developer-guide updates, one canonical `docs/release.md`, this handoff. Preserve existing required CI and accepted verification suite/config/error handling.
- **Contract:** workflow_dispatch only, main/repository guard, immutable dispatch SHA, no arbitrary revision input. Read-only build/credential-free checkout; check + Pages export/verifier +9 E2E, public reviewed-source metadata and upload only built output through verified official action pins. Deploy depends on validated build, github-pages environment, pages/id-token writes only in deploy and no privileged npm/checkout. Bounded concurrency/timeouts/diagnostics; no setting mutation.
- **Public checks/recovery:** exact public SHA/base path/source hashes, routes/assets/actual404/language availability; existing browser suite remains loopback-only unless a separately safe remote mode is genuinely required. Runbook uses reviewed main after three matching checks and reruns all jobs of a known-good prior reviewed Pages run. Rebuild is not byte-identical artifact restore; observed public/recovery evidence belongs to Coordinator.
- **Preserve:** app/manuscripts/schema/tokens/Figma, Writer public/product documents, security/access/license settings, existing handoffs/reviews and31 recovery files. No self-deploy, Git write, paid/model service, dependency migration or duplicate release/backlog documentation.
- **Checks/freeze:** affected tooling tests/lint/check, one fresh Pages build/verifier+9 E2E, metadata/output inventory and bounded smoke checks. Root build only if changed behavior warrants. Record actual files/results/limits/hashes, request actual review and stop; no receipt loop. Maintain recoverable evidence here on interruption.

## Implementation

Nine owned files form this submission:

- `.github/workflows/pages.yml`: manual-only, exact repository/main/event guards, immutable dispatch checkout with identity assertion, no persisted credentials, existing runtime/lockfile/checks/Pages verifier/nine Chromium cases, metadata/output check and official static artifact upload. Separate dependent environment-gated deploy has only Pages/OIDC writes and no source/npm step. Fixed production concurrency does not cancel active runs; build/deploy timeouts are20/12minutes. Failure-only public browser evidence retains the existing narrow directory/seven-day policy. Existing required CI is unchanged.
- `scripts/release-metadata.mjs` and its test: strict40-character lowercase commit and exact project prefix; canonical reviewed identity/route/hash projection; actual `loadBook()` manuscript validation before stamping; complete ordinary-file output checks, no symlink/hardlink/hidden-content dereference, exclusive creation of `release.json`. Internal source/review/machine paths are not projected.
- `scripts/public-smoke.mjs` and its test: loopback default or exact approved HTTPS origin/prefix, no credentials/alternate origin/redirect, at most80GETs, ten-second per-request/90-second overall deadline. Exact metadata, six reading routes and rendered hashes/languages, prefixed real assets, real Chinese/empty English JSON and actual bilingual/noindex404 are checked. No issue submission or browser configuration change.
- `package.json`: only `release:metadata`/`release:smoke` entries; no dependency or lock changes.
- `docs/release.md`: sole operational runbook for reviewed matching-head main, deliberate dispatch, matching-source public smoke/browser acceptance, actual all-job known-good recovery and return to intended release. Rebuild versus byte-identical restore and first-release same-source recovery versus prior-version restore are distinguished.
- `site/DEVELOPMENT.md`: bounded commands/runbook pointer and current evidence boundary.
- This brief/handoff: scope, evidence, review corrections, frozen hashes and recovery state.

## Preliminary feedback addressed

- Fully English runbook wording now explicitly says English chapter bodies are unavailable. No Writer document changed.
- **PAGES-01:** upload `name` and deploy `artifact_name` now both use `github-pages-${{ github.run_attempt }}`. An all-job rerun therefore targets its own rebuilt artifact, avoiding collision/stale-selection ambiguity without deletion APIs or extra permissions. This is preventative reasoning from the official action inputs; no hosted collision or successful hosted recovery is claimed. Coordinator closure remains pending actual review. YAML structure/name/permission checks were rerun after this workflow-only correction; app builds/E2E were not unnecessarily repeated.

## Actual local evidence

Runtime: Node24.14.1/npm11.11.0; installed Chromium159.0.8154.6 (Playwright1.65.1). No dependency installation or upgrade in this stage.

| Check | Observed result |
| --- | --- |
| `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run check` | Passed lint, strict application/Panda compilers and all38Node tests, including six new tool tests |
| Fresh `npm run build:pages` | Passed; only the two canonical Chinese chapters generated |
| Matching-prefix `npm run verify:export` | Passed7documents/128local references; zh20reviewed sections/en0, actual targets present |
| Matching-prefix `npm run test:e2e` | All9maintained Chromium cases passed in3.3s; suite/config unchanged |
| `RELEASE_SHA=d390f53420f88deda0627328d140be058a91feac NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run release:metadata` | Fresh local export stamped;55ordinary static files, two approved Chinese chapters |
| Actual export served on ephemeral IPv4 loopback through existing preview; actual `public-smoke.mjs` CLI in child process | Passed6reading routes/11real assets/21HTTP requests; second CLI invocation with wrong fullSHA exited1 and reported identity mismatch; preview closed in finally |
| Final six tool tests and targeted ESLint after adding90s overall smoke deadline | All6passed, zero lint warnings; prior full-check evidence plus affected final recheck |
| Ruby standard YAML parser and explicit workflow structure assertions | Syntax passed; manual-only trigger, matching attempt names, `site/out`, build/deploy permissions and source-free single-step deploy asserted. Ruby YAML1.1 maps `on` to boolean true; accounted for in parser check. `actionlint` is unavailable; this is not hosted workflow execution |
| `git diff --check` | Passed |
| Protected-source comparison and ignored recovery manifest | CI/config/permanent E2E/lockfile/manifest byte-identical to baseline; all31recovery source hashes match |

The local metadata SHA above is deliberately the **baseline/test identity** of an uncommitted implementation check. It does not claim these new files were committed at that SHA or published. Production will use the integrated immutable dispatch SHA. No root build was repeated because no runtime/layout/content/export behavior changed; the added release tools are Pages-specific and both the new unit/HTTP tests and actual Pages output were exercised.

Official release/tag/API metadata and commit-specific `action.yml` were freshly inspected on2026-11-17: upload-pages-artifactv5.0.0=`fc324d3547104276b827a68afc52ff2a11cc49c9`, deploy-pagesv5.0.1=`368f82528645a54fb793d4d04e342629a3f51346`. Composite uploader's pinned nested upload-artifact and deploy's Node24 runtime were inspected; details and primary sources are in the runbook. Coordinator independently confirmed both new tag refs. Existing action pins remain unchanged.

## Frozen file SHA-256

| File | SHA-256 |
| --- | --- |
| `.github/workflows/pages.yml` | `1acde150615dcba8a20a5c311b5fe96f62277b0ea655d74cf477076285b8b046` |
| `scripts/release-metadata.mjs` | `a3100567c473d25cfe064f90b6d62ab4f569cafc715b04596e7035db7a8803af` |
| `scripts/public-smoke.mjs` | `6db150e839bb3c3726ae41d75d1dfcb2f9f87bcf266adadc9867afb89bb416d5` |
| `tests/release-metadata.test.mjs` | `b7f4b5b4c51bf08daed40599f87924fa6ebd265d017256458b6eb74cc89a62fd` |
| `tests/public-smoke.test.mjs` | `421881d6a4299d8648a8bec30868c22691e3e19ee15e0dd5c7cc6ee7ab3196da` |
| `package.json` | `b28ff5817f2ba8e272d3786142db36f88df3df7b841223c9575b97afebc4b699` |
| `site/DEVELOPMENT.md` | `d89b4286bfdb94185d61787e25799a1aaaa06f137ed93e29dcb9b33212436be4` |
| `docs/release.md` | `694b2b971aaf7a7711bb683761787fac7bebe1ea1a7b52fce2ae804c64f3e2f5` |

This handoff's own hash is supplied with delivery rather than self-embedded. Board/review changes belong to Coordinator and are excluded from this owned freeze.

## Review request / remaining limits

Please inspect these exact files, least-privilege/main/immutable-source gates, attempt-specific artifact selection, public metadata boundaries, actual test semantics and recovery instructions; return concrete findings to Developer in the existing review. No self-acceptance is implied. Coordinator owns Git, matching-head Linux PR/main checks, environment/settings confirmation, deliberate workflow dispatch, public/browser verification and observed recovery/return. None has been executed by Developer in this stage. Existing unresolved dependency maintenance disposition is unchanged and no broader release-risk acceptance is inferred.

If interrupted, resume from this r1 freeze and actual review findings on the verified branch/baseline, preserving root's board/review and all other owners' sources. The ignored local Pages output has the baseline/test `release.json`; a new build is required before stamping again. Do not dispatch or change Git as Developer. No unfinished local build/test process remains; review is the next gate.

## PAGES-02 — search-to-appearance correction

**r2 submission, 2026-11-17: frozen for affected Coordinator review.** The accepted r1 above remains historical evidence; this correction adds only the four files identified below and claims no new public acceptance.

### Assignment / baseline

Coordinator reopened this report after observed public QA: Chinese search heading navigation succeeded, then Appearance opened but its Night radio became invisible. Assigned branch verified `codex/pages-appearance-recovery`, HEAD/main baseline `9d43198684ff276c7992732246661c90dc0fcbaa` (PR21); initial worktree clean. Scope: reproduce without sleeps/force-click/retry or weakened checks, distinguish harness failure from user defect, make only an evidence-justified component correction and meaningful regression. Preserve manuscript/design/schema/Writer sources, existing pipeline and prior accepted r1 evidence. Coordinator owns board/review/Git/deployment. Browser plugin not available; installed project Playwright used under frontend-testing-debugging and React best-practice guidance.

### Finding and minimal correction

The queued-scroll cause is now observed locally, rather than inferred solely from the public timeout. A captured event trace of the real original combined flow showed:

1. Search Enter focused the actual G01 heading and moved the document to y2506/2923.
2. Clicking the offscreen header Appearance trigger revealed/focused it at y0; its popover received `beforetoggle(open)` at291.5ms.
3. A queued document `scroll` arrived at305.1ms while y remained0 and the newly opened trigger had not moved. The original capture handler immediately invoked `hidePopover`; `beforetoggle(closed)` followed at the same timestamp. Night was no longer visible.

The existing ignored Pages output was a local baseline/test export stamped `d390f...`; the appearance/search component and Panda global-style source bytes are unchanged between that commit and the new PR21 baseline (actual Git comparison). It was used only to reproduce the old behavior, never claimed as the new source or public revision. The corrected regression was run against this old output **before** modifying the component: it reached radio `check` and failed after30seconds. Trace/screenshot/error-context were preserved outside the repository in `/tmp/vctw-public-review/PAGES-02-before/`. This reproduces the real browser operation, without synthetic scroll events or implementation-mirroring assertions.

`site/components/ui/appearance-control.tsx` now records the opening trigger rectangle and ignores a captured scroll when that anchor is still at its opening position. An actual changed anchor still dismisses; resize still unconditionally dismisses. Panel focus, choice focus-return and dismissal focus-return use `preventScroll`, preserving reading position. There is no timer, arbitrary threshold, new state/render loop, dependency or visual redesign. Existing listener setup/cleanup remains balanced; scroll listener stays passive.

The existing appearance test in `tests/e2e/reader.spec.mjs` now starts at real G01, searches 状态, follows the actual first result with Enter, verifies heading focus and an offscreen header, then immediately selects appearance through normal locator actions. It retains System/Day/Night and refresh assertions. The same case verifies a real mouse-wheel window scroll dismisses the open panel, returns focus **without jumping back** (scrollY remains positive), resize dismisses it, and a subsequent320px Night choice works. The suite still has nine cases; no retry/force-click/sleep or weakened error handling was added. `site/DEVELOPMENT.md` adds one bounded behavior/evidence paragraph.

### Actual checks / visual QA

Runtime unchanged: Node24.14.1/npm11.11.0, installed Chromium159.0.8154.6/Playwright1.65.1.

| Check | Observed result |
| --- | --- |
| Pre-fix affected appearance case against old real Pages output | Failed after30seconds at the actual radio check; preserved trace identifies click→check sequence, diagnostic DOM/events identify stale-scroll dismissal |
| `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run check` after component/test correction | Passed lint/strict compilers/all38Node tests |
| Fresh Pages build + matching verifier | Passed7documents/128local references, zh20/en0 and existing heading targets |
| Full matching-prefix Pages E2E | All9passed in3.8seconds, including the previously failing combined flow and real scroll/resize/320px assertions |
| Separate visual check of actual Pages output at1440×900 and320×900 | Correct title/reviewed G01 source, meaningful content/no framework overlay, actual search result/native heading focus, offscreen header activation, visible menu, changed theme/closed menu/returned focus; no page or console errors |
| Visual bounds | Desktop panel left1056/right1408 in1440px; narrow left16/right304 in320px; no document horizontal overflow. Both screenshots were rendered and inspected |
| Fresh root build + empty-prefix verifier | Passed7documents/128references, zh20/en0 |
| Full empty-prefix root E2E | All9passed in3.7seconds, with the same affected combined-flow assertions |
| Preservation / diff | All183other tracked files match HEAD, excluding these four owned files and two Coordinator-owned files; all31ignored recovery source hashes match; `git diff --check` passed |

Visual evidence outside Git: `/tmp/vctw-public-review/PAGES-02-after-1440.png`, `PAGES-02-after-320.png`, `PAGES-02-after.json`; runnable temporary script `PAGES-02-visual.mjs` in the same directory. The initial temporary visual check incorrectly expected a second check on an already-selected Night radio to trigger a state change/focus return. That assertion failed; the diagnostic was corrected to change Night on desktop and Day on narrow, then passed. No product code or maintained assertion was changed to accommodate that harness assumption. The maintained regression had already passed independently.

### Scope limits and remaining public observation

A separate first read-only public diagnostic failed earlier: after entry→opening→G01, Search click did not yield a visible dialog. Coordinator independently saw the same earlier failure on another run, while its original run successfully searched before hitting PAGES-02. This investigation does **not** establish that a second product defect exists or that it is repaired; readiness/navigation timing remains unproven. No Search component, hydration logic or navigation behavior was modified. The confirmed lifecycle bug above was reproduced and corrected separately with a real combined flow. Coordinator's direct-route public checks are separate evidence, not the Developer's acceptance claim. Recheck the full public combined flow after the reviewed correction is integrated/deployed; return any reproducible readiness defect as concrete scope.

No Git write, dependency install, setting change, new metadata stamp, publication or recovery was performed in this correction. Current ignored `site/out` is the **fresh root-prefix export of uncommitted corrected code**, without `release.json`, from the final root run; it is not a live artifact. Rebuild Pages before any new release stamping/public smoke. Existing hosted workflow/recovery semantics and protected sources are unchanged.

### Frozen correction files / review request

| File | SHA-256 |
| --- | --- |
| `site/components/ui/appearance-control.tsx` | `2f9bbaa702caa36ba0770646591efada9ad3d0d2dd0b1c695cfce1e54f8e49ff` |
| `tests/e2e/reader.spec.mjs` | `feb578a02a9a07280d2572bc53893b06ed7c6fb228bdd19088aaa80a0c9f82fd` |
| `site/DEVELOPMENT.md` | `901aa00c2f82c4b0f08bccbe1938647b107e6548bcf1e8a2fe50743efee0accb` |

This report is the fourth owned file; its complete hash is supplied on delivery. Please review the exact component lifecycle, genuine regression and preservation of real-scroll/resize/focus behavior; return concrete findings here through the existing Coordinator review. Coordinator owns acceptance, required exact-head Linux checks, integration, public combined-flow recheck and actual all-job recovery/return. Local green tests do not close public release/recovery. No further implementation or background process remains; wait at this affected review gate without a receipt loop.

## Technical-document closeout — frozen for review

2026-11-17: Coordinator assigned only the initial `Evidence and limits` paragraph in `site/DEVELOPMENT.md` and this appended subsection, on verified branch `codex/pages-public-closeout`, baseline `8c29f4dfbab684eb7623600f304cdce197951bcc`. Writer public documents and Coordinator board/review were already dirty and remain outside this scope. The accepted r1/r2 text and evidence above are preserved verbatim.

The guide now reflects verified initial publication, maintained CI/manual CD, public Chromium acceptance and same-source recovery. Actual cloud/public observations are **Coordinator evidence**, read in the [existing release review](../../reviews/pages-release-pipeline.md): run44013205918 attempt1 accepted; all-job attempt2 at the same immutable source passed build133806466180/deploy133807171113 with `github-pages-2` artifact14297937503, followed by repeated public HTTP6routes/11assets/21requests and full combined Chromium acceptance. Recorded navigation cancellations remain distinguished from errors. Developer did not repeat those external operations.

The paragraph retains unresolved moderate development-advisory maintenance, unexercised distinct prior-version rollback/byte-identical restoration and cross-browser/accessibility/security limits; only the two approved Chinese chapters are described as published. No suitable older healthy public release exists for the distinct-version exercise yet. The canonical ledger and actual release review remain the status/evidence authorities; no runtime feature, historical report body or Writer copy was rewritten.

Documentation-only verification: exact diff inspection, resolving local Markdown file targets, whitespace/newline checks, unchanged guide prefix/suffix outside the assigned paragraph and byte-identical prior handoff prefix. No code/tests/build, dependency installation, Git write or publication performed. Changed guide SHA-256: `fadbe7c0178e7242f3eeddf94fce117d53824ffaa88752bf3d1fb7387f08eba7`; this appended report's full hash is supplied on delivery, separate from the frozen r2 hash above. Please review these two exact documentation changes and return any factual correction; Coordinator owns integration and Writer owns concurrent public-document closeout.

## Locale and typography feedback — r3 frozen for review

2026-11-17: the author identified an English-only header title in Chinese UI and inconsistent typography/content width between locales. This concrete feedback supersedes the preceding read-only final audit. Verified workspace branch `codex/milestone-1-final-audit`, HEAD `9729a614d5dd59abcc4f4cbd814657ed1e82d4f6`, initially clean. Developer scope is existing i18n/shared UI and evidence-justified Panda typography/layout corrections, minimal affected regression, bounded developer-guide update and this same handoff. Coordinator owns board/review/Git/deployment; preserve all Writer sources, approved manuscript hashes, workflows/security/dependencies/Figma and31recovery files. No English manuscript or book/repository rename is authorized.

Compared English/Chinese homes and indexes plus Chinese reading at matched 1440×900 and320×900 viewports before implementation. The initial source inspection identified English-only header/eyebrow and Chinese metadata suffix; actual platform-font measurements confirmed the typography mismatch. Browser plugin is unavailable, so installed project Chromium/Playwright and its existing loopback preview were used. No dependency installation or remote font service.

### Observed differences and correction

| Role / evidence | Before | Final |
| --- | --- | --- |
| Chinese brand / metadata | English `site.name` with `lang=en` in header, English eyebrow and Chinese page-title suffix | Existing localized canonical title in visible brand, accessible home label, eyebrow and Chinese metadata template. Proper names and language-switch target labels retain their appropriate language |
| Desktop brand | English18px versus Chinese17px, both weight700; Chinese-page Latin wordmark actually rendered in PingFang | Shared explicit16px/600/24px `brand`; Latin uses native SF, Chinese uses PingFang under one system-first stack |
| Shared home/index body | English18px/30px versus Chinese17px/30px; mobile29px versus30px line height | Shared18px/400/30px desktop and17px/400/29px mobile, with the same font stack; actual glyph fallback remains script-aware |
| Home/index main title | Both already40px/600/48px desktop; mobile also40px and caused excessive wrapping | Same desktop role retained; shared `h1-compact`32px/600/40px on mobile |
| Containers | Same-locale-role home/index were already704px at1440; reading header expanded to1376px while home/index header was1088px | No invented locale width bug: preserve704px content cap. All headers/footers use68rem `pageMax`; only reading main retains88rem `readingLayoutMax` for its rails |
| Long-form Chinese reading | Separate prose typography and rails, intentionally distinct from landing pages | Explicit `zh-body`17px/30px and `zh-title`30px/700/43px remain independent reading roles. Same-role home/index align across locales; no nonexistent English reading body was created |
| English catalog | Raw Chinese link labels despite English surrounding UI | Two English navigation labels in the existing i18n contract; unchanged Chinese destinations and `hrefLang=zh`, displayed-label `lang=en`, and explicit unavailable-English-body notice. Manuscript titles/hashes and empty English corpus unchanged |

`fonts.body` is now a shared local system-first Latin/CJK stack; `fonts.chinese` aliases it. This is an **author-requested production override** of the historical Figma font primitives, not a claim that all111historically mapped values are unchanged. Frozen `panda/figma-reference.json` is byte-identical; color/recipe system, content schema and manuscripts are unchanged. Added shared roles are `brand`, `h1-compact`, `pageMax` and `readingLayoutMax`; no per-node token proliferation or locale-specific tiny font.

**WRAP-01:** preliminary after-root screenshots exposed an awkward320px break inside 然后. Final header renders two intact existing `titleLines` phrases, retains exact canonical text/spacing/aria/language, uses shared flex wrapping and keeps the44px minimum target. Both languages retain the same header height. A rendered Range geometry check verifies phrases do not split internally. The global static404 remains the existing English document with a marked Chinese recovery section; no route-specific404 translation or new route was introduced. Search, Appearance and status copy were inspected and existing localized interaction/error tests retained.

### Actual verification and evidence

- Before capture: `/tmp/vctw-locale-before/` contains10screenshots and `metrics.json` with computed family/size/weight/line-height/container positions and actual CDP platform fonts. `/tmp/vctw-locale-after-root/` is the preliminary pre-WRAP set, not the frozen final state.
- Final capture: `/tmp/vctw-locale-final-root/` and `/tmp/vctw-locale-final-pages/` each contain10matched screenshots plus `metrics.json`; all ten corresponding root/Pages title and header/brand/main/content/title/body metrics match. No document overflow or console/page errors. Actual SF/PingFang fallback was measured on this Mac; platform font appearance on Windows/Linux/Safari is not independently certified.
- Final1440px geometry across all five pages: header x176/width1088/height73; home/index/reading prose width704. At320px: header x16/width288/height117, content width288. Brand16px/600/24px desktop and14px/600/20px mobile. Final Chinese narrow header wraps at the two meaningful phrases. Rendered desktop/narrow home, index and reading screenshots were inspected, with no clipping or overlay observed.
- First check stopped at lint because a new browser-evaluate callback used bare `getComputedStyle`; corrected to `window.getComputedStyle` without weakening lint. An earlier status message incorrectly anticipated a pass and was promptly corrected. Full check then passed strict app/Panda compilation, lint and all39Node tests (one added locale/catalog-boundary test).
- Before WRAP: fresh root build/verifier and all10E2E passed in4.3seconds. Original nine meaningful cases and all health/error assertions remain, plus one cross-locale role/geometry/title/catalog case.
- After WRAP: fresh root build/verifier passed7documents/128local references, zh20/en0; the affected localized chrome test passed in1.3seconds, including actual phrase layout and shared44px target. Unchanged full root matrix was not redundantly repeated.
- Final Pages source: full check passed lint/strict compilation/all39Node tests; fresh Pages build/verifier passed7documents/128references, zh20/en0; **all10E2E passed in4.4seconds**, including PAGES-02 combined search→Appearance, real scroll/resize, storage/copy failure, search retry and320px overflow checks. No sleeps/retries/forced actions.
- The earlier quota interruption rejected the combined WRAP edit/verification call before execution because automatic approval review could not complete. After explicit resumption, actual unchanged source was checked, the correction applied and fresh affected/final Pages evidence obtained; no unavailable check is represented as passing.
- Preserved171other tracked files (excluding13owned files and six known Coordinator/Writer files), all31recovery hashes, both original manuscript hashes and the entire previously accepted handoff prefix. Local Markdown file targets and `git diff --check` pass. No workflow/lock/dependency/Figma/security/Git/publication change. Current `site/out` is the fresh Pages export of uncommitted corrected UI, without `release.json`.

### Frozen submission and next gate

Thirteen owned files: the twelve below and this appended handoff (full report hash supplied on delivery). `docs/release.md` changes only the current maintained-suite count nine→ten; dated historical nine-case evidence remains intact. Developer guide adds bounded locale/role/provenance/regression explanations. Export verifier changes only expected localized Chinese document titles, preserving its existing strong contracts.

| File | SHA-256 |
| --- | --- |
| `docs/release.md` | `8708ec2ceab395aae37866fe085a6596ea9ab70d05f7a94d6e0a40bb58271353` |
| `panda/global-styles.ts` | `08250fbebbfa235b3984b8eb40285a50394cba2ace2f0cb40a29953199ea9711` |
| `panda/tokens.ts` | `bac74f94edfdfbbcfedff22a4c9501fb1d5e5a548831e506d11391f24d468b89` |
| `scripts/verify-export.mjs` | `9d246bcae398bcc0297e2196a67bf5f592ec257a291d9a9041eb5ab2a1bc1d69` |
| `site/DEVELOPMENT.md` | `fdf053df53fb059543f2dbe90032672fbac37600fd77f4c24f9edb4314319925` |
| `site/app/(chinese)/zh/layout.tsx` | `62d9d1e5696ccd8242a7ee6d78ef9595e366b4ac167bc26ed48c8811266f45bc` |
| `site/components/home-page.tsx` | `5a556293aa6cd864e99debdd3de448d012dbd2be7fcda5cd2cb6e3651a3cb653` |
| `site/components/reading-index.tsx` | `a9f274cadf7c90fd6795b9f8f5aa3d0314ef3c3d25da2a3a150b9eaa6f881a31` |
| `site/components/site-header.tsx` | `efae23807e089f37ec74e9870cab42b45836bc8ff12659188ac00d90f98713ef` |
| `site/config/i18n.ts` | `38b152d3634d1c5493fbf823ef4409bf92a9c17e9f8f11c5ca57c1589a16eb8a` |
| `tests/e2e/reader.spec.mjs` | `510d1c8472ecc389062ad861ffea08a7e68767b4c26310113ec2653b9afffa96` |
| `tests/i18n.test.mjs` | `f3294983ec768fc0f549294a9c6e30474e97889045c6af5c31a2f0abed924066` |

Please review the exact localized identity, navigation-only labels, shared role metrics and final phrase wrapping against actual captures; return concrete findings to Developer. Coordinator owns acceptance, matching-head CI/Git integration and deliberate publication/public recheck. Local rendering does not update the verified public revision or close independent hosting/browser limits. No further implementation or background process remains; wait at this review gate.
