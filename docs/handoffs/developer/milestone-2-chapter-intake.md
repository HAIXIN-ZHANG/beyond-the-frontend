# Milestone 2 — third-chapter local intake

Owner: Developer. Date: 2026-11-17 (Australia/Perth). Revision: r4, submitted for affected documentation review after M2-INTAKE-DOC-02. Scope: local implementation and review only; no Git integration or publication. The payload below is frozen pending findings; delivery does not establish acceptance.

## Brief and verified baseline

The author explicitly resumed the next main-work slice. This assignment releases the earlier preparation-only hold solely for the approved F01 local intake. Read [board](../../coordination.md), [accepted preparation r2](milestone-2-preparation.md) and [approved contract extension](../../content-contract.md#delivery-milestone-2--approved-local-intake-extension). Verified checkout `main@95a6bec69e26cbe13fe9f5d9433ee91e07632091` in the current repository; preserve all existing accepted uncommitted quality/content/document changes and other owners' files. Developer owns sequential build/codegen/browser outputs until handoff; Coordinator will not mutate shared outputs during this slice.

Approved entry: ID `F01`, locale `zh`, slug `browser-foundations`, order3, H1 `页面出现之前，浏览器在忙什么？`, source `book/drafts/zh/02-browser-foundations.md`, SHA-256 `54b983945710303a7e790706d86b9acc3884f50f6ae82f06dbde71711967ca24`, status `reviewed-draft`, review `docs/reviews/F01M.md`. The actual source hash matches before implementation. English navigation label: `How the Browser Builds a Page`; Chinese home benefit: `分清资源等待、代码执行和画面更新，理解页面为什么看得见却还不一定能及时响应。`; English benefit: `Separate resource waits, code execution and visual updates to understand why a visible page can still respond late.` These are UI summaries of the Chinese original, not an English manuscript.

Allowed files only: manifest/i18n/home-page/reading-index as needed for public counts, export verifier, existing content/search-sharing/i18n/public-smoke/E2E tests, factual developer guide and this handoff. No body/parser/schema/dependency/Figma/theme/palette/reading-state/CI change. Do not edit shared contract/board/planning/vision/old reviews, or any manuscript. Preserve opening/G01 bytes/identities/URLs, all accepted search/Unicode/highlight/sticky-outline fixes and31recovery files.

Implement one explicit manifest entry and approved localized metadata, derive current counts without importing manuscript/review paths into shared client i18n, and separate G01 source-shape/citation guarantees from ordered navigation for every chapter. Preserve the greater-than12-results regression and verify actual new corpus/ranking, not guessed counts. Run strict/lint/Node checks, then root build→verifier→E2E, then fresh Pages build→matching verifier/E2E sequentially. Inspect desktop/320/390px new chapter in Day/Night, theme refresh, all entries/ordered navigation, native search heading focus, original routes/citations, source blocks/local overflow, console and absent English bodies. This is reading-page QA, not execution of the manuscript's illustrative experiments. No install, Git write, external issue submission or publication.

## Execution and submitted revision

Added exactly the approved F01 manifest entry and public UI label/benefits. Home and index supply their actual approved count to `availableNotice(count)`, keeping source/review metadata out of shared client i18n. The existing renderer and chapter navigation consume the expanded allowlist without modification. Ordered navigation is opening → G01 → F01; F01 has previous=G01 and no next. English home/index continue to identify the linked bodies as Chinese originals, and chapter language switching returns to the English index.

The export verifier now separates G01's specific two-table/four-code/RFC citation guarantees from previous/next/last expectations derived for every chapter. It also compares each rendered chapter's table/code totals with its actual parsed tree and reports actual search-section totals. Tests retain the prior quality cases and add F01 source/link/block safety, bilingual metadata/counts, and one end-to-end intake case. Public-smoke fixture route totals derive from release metadata; identity and failure assertions remain in place. The guide reflects local three-source behavior and the prior quality correction's actual independent acceptance, without treating that acceptance as approval of this intake.

### Actual verification

Installed environment: Node `24.14.1`, npm `11.11.0`, existing Playwright `1.65.1`, Chromium `159.0.8154.6`. No dependency/configuration change or installation.

| Sequential check | Observed result |
| --- | --- |
| `npm run check` | Passed ESLint, strict application/Panda compilers and all44 Node tests; no failures/skips |
| `NEXT_PUBLIC_BASE_PATH='' npm run build` then matching `verify:export` | Passed; 8 pages,165 local references, zh29 reviewed sections/en0; all indexed targets exist |
| `NEXT_PUBLIC_BASE_PATH='' npm run test:e2e` | All16 passed in12.2s, including all15 prior cases and the added intake case |
| `npm run build:pages` then `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run verify:export` | Passed; 8 pages,165 local references, zh29/en0; exact prefixed destinations and local assets verified |
| `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run test:e2e` | All16 passed in12.1s; no failures/retries/skips |
| Additional local Pages Chromium capture pass |24 screenshots; home/index in both locales, source code/table, actual F01 search and heading focus at1440/390/320 ×900 CSS px; no page/console errors |
| Preservation and export inspection | All3 manuscript hashes match approved sources; all31 recovery hashes match their manifest; no manuscript/review path match in exported client JS; `git diff --check` passed |

Root and Pages build/verifier/browser steps ran sequentially with matching prefixes and exclusive shared-output ownership. Root browser artifacts were copied before the Pages run overwrote the test output. Current `site/out/` is the verified Pages export; no release metadata stamp or public smoke command was run against uncommitted code.

The parsed corpus is opening8/G01 12/F01 9 indexed sections. F01 retains4 fenced blocks (first language `html`) and2 tables. Its illustrative HTML appears as preformatted source, with no live `#query`, `#search` or `.course-card` inside the article. The original relative backlink resolves to G01 and the WHATWG/RFC citation checks pass. Existing `报名` regression still yields14 distinct destinations and activates the last result by keyboard; `状态` still has14 matches with the original G01 section first. Unicode/excerpt/highlight, nearby outline, denied storage and sharing/correction-preview cases remain passing.

The F01 browser case exercises every one of its9 actual indexed headings at all3 widths under both exports (27 heading activations per prefix), verifies exact URLs and native heading focus, and checks theme persistence after Day/Night reload. On both narrow widths the first code block scrolls locally with ArrowRight; all6 code/table regions have positive width, remain within the viewport and use local horizontal overflow. English chapter URL `/read/browser-foundations/` returns actual404; no English body is generated.

### Captures and observed geometry

Ignored evidence locations on the review machine:

- Root: `/tmp/vctw-m2-intake/root/playwright/reader-approved-browser-ch-b2cae-d-heading-remains-reachable/` contains6 `browser-chapter-{1440|390|320}-{light|dark}.png` captures and3 source-region geometry JSON files. Root `.last-run.json` records passed/no failed tests.
- Pages: `.artifacts/playwright/reader-approved-browser-ch-b2cae-d-heading-remains-reachable/` contains the same6 theme/width captures and3 geometry JSON files from the fresh Pages run. `.artifacts/playwright/.last-run.json` records passed/no failed tests.
- Additional Pages: `/tmp/vctw-m2-intake/pages-captures/` contains `{en|zh}-{home|index}-{1440|390|320}.png`, `source-{code|table}-{width}.png`, `heading-{search|focus}-{width}.png` and `observations.json` (24 images). The source script is `/tmp/vctw-m2-intake/capture-pages.mjs`; it uses only the existing local browser/package and loopback export.
- Persistent-for-this-session Pages command logs: `/tmp/vctw-m2-intake/build-pages.log`, `verify-pages.log`, `e2e-pages.log`. Root command outcomes above were observed before interruption; its browser artifacts are retained, not a separately preserved root command log/export directory.

All six root theme captures and representative Pages desktop/narrow/theme, English home, search, focused heading and source-block/table captures were visually inspected. The new title fits the desktop article column and wraps legibly on narrow layouts; original chapter destinations appear beside it. At390/320px the initial H1 starts at y298 below the closed tools bottom y210. After actual heading-search activation, tools bottom is y61 and the focused heading starts at y85, leaving24px clear. Document widths equal their1440/390/320px viewports. At320px all6 source regions stay between x16 and x304 (code inner bounds x17–303); they do not widen the document. These are CSS viewport measurements at900px height, not physical-device or native-zoom results.

### Frozen payload SHA-256

These eleven file digests identify the complete submitted file bytes, including any accepted predecessor edits already present at assignment. The twelfth owner file is this evolving report; its final digest is sent directly with delivery to avoid self-reference. Other owners' documents and manuscripts are excluded from this payload.

| File | SHA-256 |
| --- | --- |
| `site/content/manifest.ts` | `c1c79d4fc604c158a015bd2d536365815427da9937783cb976f66e25fc64beb8` |
| `site/config/i18n.ts` | `b69f0ea0499139f753e1fed11d6e3e0e4bcb5fe25603b262f8a3e609cb82fb3b` |
| `site/components/home-page.tsx` | `f362c1260c6f706e8b0c9d60cb56ed52b19957d3ed0120815edad5ceb4a3183f` |
| `site/components/reading-index.tsx` | `5d1339528bd55de2ef9d497d0d45ba209bad6834caf6ae0448954eac971b3584` |
| `scripts/verify-export.mjs` | `ac6418cfda044528c77ad1ca4269d62432490abbe16631dafa19a4a39efcd265` |
| `tests/content.test.mjs` | `d4b0ff455f0af6121c2cc40590a854a650d7dbe6153e666adc41afbe237a0fcb` |
| `tests/search-sharing.test.mjs` | `5a6ed989c7fb9e747ba9c672b382b13081478e5fdedb513ce62f1936559b64a6` |
| `tests/i18n.test.mjs` | `1765f8b768fab304e0e4691bc539ce281db1076b3144546537889f1a284acc96` |
| `tests/public-smoke.test.mjs` | `5d57f5e4ebee0c6daf3cb1f73789a27352128406c3449ad3c40d23072451fd57` |
| `tests/e2e/reader.spec.mjs` | `d5af37351766a1b39e584aef14f6a0af01f8645dc8c76c6306d8728af91bb52d` |
| `site/DEVELOPMENT.md` | `ec65c4d595dce0022b82a707fdc7aff6d6b3a13d4687cb34ddeed9fd0b441d18` |

The204-file assignment snapshot `/tmp/vctw-m2-intake-baseline.json` was checked before final report completion: only the eleven scoped payload files had changed at that point. All existing out-of-scope files retained their assignment bytes, including the accepted search/sticky/theme implementation, parser/schema, package/lockfile/workflows, other handoffs/reviews and approved manuscripts. This report is the only additional final owner change. Three source hashes:

- opening: `244c4f7a9ddeb781d8530691d07ba17b9daccf611b9631ea60faa412b87a6d90`.
- G01: `b928e5df21876c0ca49a3c227eb6c7e20723b3f22bb9c7cb2d560cc198db62d2`.
- F01: `54b983945710303a7e790706d86b9acc3884f50f6ae82f06dbde71711967ca24`.

### Limits and next gate

No blocking implementation finding remains in these executor checks. Coordinator code/artifact review is pending and owns acceptance. Safari/WebKit, Firefox, physical mobile hardware, real assistive technology and native browser zoom were not exercised in this slice. The earlier accepted bounded navigation overlay tradeoff remains; this is not a claim that an open disclosure never covers prose. No manuscript performance experiment or measurement of its illustrative scenarios was executed. No dependency audit refresh, Linux/cloud CI, public deployment/access-setting audit, external issue action, Git write, integration or publication occurred. Existing dependency disposition and release gates remain separate.

Coordinator owns any `docs/release.md` suite-count synchronization (fifteen→sixteen) after the actual16-case evidence/review. Do not modify old handoffs/reviews or infer their counts should be rewritten. Current local output has three Chinese drafts; the last verified public two-source edition is not changed by this work.

## Revision responses

| Finding | Revision and changed location | Actual verification/limits | Coordinator closure evidence |
| --- | --- | --- | --- |
| M2-INTAKE-DOC-01 | r2 changes only the two assigned current-mechanism paragraphs in the guide's Source-to-page reader section: three approved local sources, manifest-derived chapter parameters and F01 as the actual final local entry. Historical PR14/two-source public facts remain intact. Same report/hash manifest updated. | All ten runtime/test payload digests remain identical to r1; guide hash and report links rechecked, `git diff --check` passes. No build/browser/test rerun or shared-output write; Coordinator owns those outputs during independent checks. | [Actual intake review](../../reviews/milestone-2-chapter-intake.md); affected documentation re-review pending. |
| M2-INTAKE-DOC-01 | r3 completes the same finding with Coordinator's explicit authorization: remove the adjacent current renderer's stale two-source qualifier and describe export verification as fixed shell plus manifest-derived chapters, currently eight local documents. Link current browser evidence to this handoff. Named historical phase/PR counts remain unchanged. | All eleven payload hashes and relative report links verified; the ten runtime/test hashes remain exactly r1. A focused guide search leaves only the explicitly historical PR14 and last-public two-source references. `git diff --check` passes; no build/browser/test run or shared-output write. | Affected documentation re-review requested; no closure inferred. |
| M2-INTAKE-DOC-02 | r4 changes only the current Static search paragraph: Chinese index entries derive from approved headings, currently 29 in this local intake, instead of the stale 20. Same report/hash table updated; historical counts untouched. | All eleven payload hashes, relative links and `git diff --check` rechecked; the ten runtime/test file hashes remain r1. No build/browser/test run or shared-output write. | Affected documentation re-review requested. Coordinator reported DOC-01's r3 paragraphs conform; full acceptance remains the reviewer's judgment. |

The reviewer independently reran the Pages verifier (8 pages,165 references, zh29/en0) and16 Pages E2E (11.8s). By the r4 correction request, Coordinator also reported an independent root build/verifier/16 E2E pass (12.0s) and actual visual checks under both prefixes at844px viewport height, with no blocking code finding. These are the reviewer's reported independent results; r1's checks above remain executor evidence. The separate [review](../../reviews/milestone-2-chapter-intake.md) owns final judgment and closure. This documentation revision makes no acceptance or release claim.

## Recovery checkpoint

Implementation, strict/lint/44-node checks, fresh root and Pages exports/verifiers, both16-case Chromium suites, screenshot inspection and preservation checks are complete. All changes are uncommitted over `main@95a6bec69e26cbe13fe9f5d9433ee91e07632091`; preserve every pre-existing owner change. r2–r4 change only guide/report for the returned documentation findings, with runtime/test files frozen at r1. Coordinator has exclusive shared-output ownership; Developer has not rebuilt or replaced its output. Coordinator's concurrent shared content-contract/roadmap factual updates are outside this payload and remain its ownership. The next action is affected r4 documentation re-review and Coordinator's final judgment. Any further revision must stay within the assignment and be rechecked as affected; no new feature or release is authorized by this handoff.
