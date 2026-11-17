# Static reading, search and sharing — developer guide

This guide describes Delivery Milestone 1's accepted, merged reading foundation: bilingual static website, strict TypeScript, PandaCSS, System/Day/Night, reviewed Chinese reader, static search/sharing and CI. Its active brand is **Vibe Coding, Then What?** / **《Vibe Coding 之后：能跑，然后呢？》**, with subtitle **Understand the Systems Behind Your AI-Built Products** and repository slug `vibe-coding-then-what`. The two-source reader merged in PR14; [PR15](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/15) integrated the accepted search/sharing and reading closeout, and [PR16](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/16) integrated public-document/license alignment. The [search/sharing handoff](../docs/handoffs/developer/beta1-search-sharing.md) and [independent review](../docs/reviews/beta1-search-sharing.md) retain actual implementation/check/finding evidence. Audio, AI and an application backend remain absent. No public reading deployment is established by these merges.

The original DS01 work remains a separate [unaccepted checkpoint](https://github.com/HAIXIN-ZHANG/beyond-the-frontend/commit/4da2578048f8df113fed92d99e084f644a9a788e). The independently accepted [theme delivery](../docs/handoffs/developer/beta1-theme-foundation.md), merged through PR12, reused selected token/controller sources with current branding and its own verification; it did not merge that old tree or grant its historical work blanket acceptance. Historical [DS01 handoff](../docs/handoffs/developer/DS01.md), [review](../docs/reviews/DS01.md) and [Development History](../docs/development-history.md) retain their original evidence.

The [UI04 / Delivery Milestone 1 design handoff](../docs/design/reading-experience-v1.md) is the technical design target, with [reviewed scope and limits](../docs/reviews/beta1-design-alignment.md). The accepted [reading component delivery](../docs/handoffs/developer/beta1-reading-components.md), merged in PR13, supplies Header Appearance and reusable primitives; the reader composes them with real manuscripts. Search/sharing uses the named UI04 sources. Delivery Milestone 2 palette designs remain outside production. The [prior alignment audit](../docs/handoffs/developer/beta1-design-alignment.md) describes its historical shell baseline. The [canonical first-delivery ledger](../docs/delivery/milestone-1.md) compares original plans, actual outcomes and remaining Release Readiness; the [board](../docs/coordination.md) owns assignments. Product Goals describe reader outcomes, while Delivery Milestones describe concrete delivery scope; historical Beta filenames/IDs retain their evidence context.

## Environment and commands

Use Node.js 24 LTS and npm 11; `.nvmrc` selects the Node major. Dependencies are pinned in `package.json` and `package-lock.json`. Run from the repository root:

```sh
npm ci
npm run dev
```

Next normally reports `http://localhost:3000/`; follow the actual reported port if occupied. There is no database or background application service.

```sh
npm run check
NEXT_PUBLIC_BASE_PATH='' npm run build
NEXT_PUBLIC_BASE_PATH='' npm run verify:export
```

`prepare` runs Panda codegen after installation. `dev`, `build` and `typecheck` also run codegen explicitly, so ignored `site/styled-system/` output is reproducible. `check` runs ESLint, typecheck and the Node regression suite covering routing/deployment, theme, reviewed content and search/sharing. `typecheck` generates Next route declarations, then runs the application and isolated Panda build-tool compilers. A clean checkout needs no earlier build. Static output goes to ignored `site/out/`.

Project links are configured in `site/config/site.ts`; book titles and interface messages are in `site/config/i18n.ts`. No chapter prose is copied into React components. The renderer implements the narrow [initial content contract](../docs/content-contract.md); adding further manuscripts requires their own review and allowlist authorization.

## Bilingual routes and 404

- English is the default: `/` and `/read/`. Chinese uses `/zh/` and `/zh/read/`.
- The Chinese reader statically generates `/zh/read/before-we-start/` and `/zh/read/a-page-and-a-system/` only. English has no chapter bodies: its index explains availability and deliberately links the Chinese drafts. A chapter language switch returns to `/read/`, preserving that explanation rather than inventing a translated article.
- Separate root layouts supply each document's `lang`, title and messages. Language switching preserves home/index location; crossing root layouts loads a new document.
- There is no automatic browser-language redirect or persistent language preference.
- Static hosting has one global `404.html`: English with a Chinese explanation and home link. Chinese segment not-found components are available for later use; hosting does not dynamically infer an invalid URL's language.
- The pinned Next.js 16.4.6 implementation uses `experimental.globalNotFound` for multiple root layouts. Root and subpath exports validate it; recheck on framework upgrades. See the [foundation review](../docs/reviews/D02.md).

## Token and theme foundation

`panda/figma-reference.json` preserves the reviewed source IDs, 111 variable values/alias targets and 14 text styles. `panda/tokens.ts` defines primitive/semantic tokens; `panda/global-styles.ts` applies them to the existing shell. `site/styles/global.css` is the Panda cascade-layer entry, processed by the explicit root-config PostCSS plugin. Generated variables normalize camelCase paths to kebab-case. Local font stacks are preferences, not bundled/downloaded fonts or proof of exact Figma glyphs. No Code Connect integration is claimed.

The Header **Appearance** IconButton opens a native auto popover containing a labeled radio group: System (default), Day or Night. The former footer select is removed. Its icon reflects the effective appearance; its accessible label distinguishes the selected preference from the effective mode. System may therefore show the Night icon while System remains checked. Native popover behavior handles Escape and outside dismissal; choice, viewport resize and scrolling dismiss the panel, returning focus when it was inside. Resize/scroll listeners check the actual open DOM state and are installed for the mounted control, avoiding an initial-open effect race. The panel is clamped within both horizontal viewport edges. Header Search is described under Static search and section actions below.

The unchanged single controller in `site/theme/runtime.ts` resolves `data-theme` (`light`/`dark`) and `data-theme-preference`; it stores explicit choices at the compatibility key `btf.theme`, and removes that override when System is selected. Missing/invalid/blocked storage falls back to the system; blocked writes still allow an in-memory choice. A guarded localStorage reference keeps same-origin iframe sessionStorage events from changing the preference.

`ThemeHead` embeds a self-contained bootstrap before the body, so appearance does not wait for React hydration. The client hook uses the same controller through `useSyncExternalStore`; only the known document theme-attribute hydration difference is suppressed. Without website JavaScript, semantic CSS follows the system; the interactive preference control requires JavaScript. First-paint, media, refresh, actual cross-tab/storage, keyboard and browser results must be read from the current stage's actual evidence, not inferred from this mechanism.

## GitHub Pages subpath

```sh
npm run build:pages
NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run verify:export
```

`NEXT_PUBLIC_BASE_PATH` is validated at build time; both an empty value and `/` normalize to the root deployment. Next applies it to Next Link destinations and framework assets. Literal search-result anchors and index fetch URLs use `withBasePath` from `site/config/deployment.ts` to apply the same normalized prefix once. Concatenating the raw `/` alias would produce protocol-relative URLs such as `//search-index/zh.json`. Build and verification must receive the same value. Explicitly clear it when restoring a root export.

The Pages output has prefixed URLs but no extra `vibe-coding-then-what/` directory within `site/out/`. A static preview must mount the directory at `/vibe-coding-then-what/` and serve its actual `404.html` with HTTP 404 for unknown paths. `next start` does not run an exported site; `next dev` does not prove production hosting behavior. Production release authorization and status belong to the [board](../docs/coordination.md) and [access policy](../docs/security/access-policy.md); local export success does not establish deployment.

## Strict TypeScript

The application compiler covers the handwritten application modules, including theme and reading components, plus generated declarations. `site/tsconfig.json` remains unchanged with strict/noEmit, explicit type imports and `skipLibCheck:false`. Locale values are `en | zh`, messages use `satisfies`, and props/metadata use concrete types. No application `any`, ts-ignore or ignored build error was introduced.

Pinned development packages include TypeScript 6.0.3, typescript-eslint 8.72.2, React/ReactDOM types 19.3.0 and Node types 24.19.2. Compatibility was checked on 2026-11-15 against official npm metadata and [typescript-eslint's support range](https://typescript-eslint.io/users/dependency-versions/): ESLint 10, Node 24 and TypeScript `>=4.8.4 <6.1.0`. Existing Next.js/React/ESLint versions were retained.

Next/ESLint configuration, export verification and Node test files intentionally retain `.mjs`. They receive lint/runtime validation, not a claim of static TypeScript checking. Node 24 [native type stripping](https://nodejs.org/docs/latest-v24.x/api/typescript.html) runs their relative `.ts` imports; it does not check types. `erasableSyntaxOnly` avoids an extra transformer/runner. The compiler uses bundler resolution and explicit extensions.

Next regenerates `site/next-env.d.ts`; it is ignored under the [official guidance](https://nextjs.org/docs/app/api-reference/config/typescript#next-envdts), along with `.next/`, `out/` and `*.tsbuildinfo`. Ignoring generated files is not excluding application source from checks.

`tsconfig.panda.json` separately checks `panda.config.ts` and all `panda/**/*.ts` definitions, including tokens, global styles and recipes, with strict/noEmit. It uses `skipLibCheck:true` solely at that build-tool boundary: full library declaration checking reproduces four TS2308 ambiguous internal re-export errors in installed `@pandacss/types`. Application/generated declarations still receive full checks. No vendor patch or global compiler relaxation was used. The theme stage's in-memory negative probes confirmed invalid public Panda configuration and implicit any still fail (TS2322/TS7006). This documents an upstream limitation, not a repaired type package.

## Reading primitives

Import components directly from `site/components/ui/` or `site/components/reading/`; generated recipes are imported from their individual `.js` modules. These are explicit-prop building blocks, not a content schema or manuscript parser.

| Component | Contract and behavior |
| --- | --- |
| `Button` / `IconButton` | Native button props, default `type="button"`, primary/quiet variants; IconButton requires an accessible `label`. Both use minimum 44px targets, focus and disabled semantic states. |
| `AppearanceControl` | Receives `locale`, uses the accepted theme hook/controller, and supplies localized System/Day/Night choices. Requires browser native Popover API support. |
| `ChapterNavigation` | Receives a `label` and grouped chapters. `status: 'available'` requires `href`; planned items cannot carry `href` or `current` and render as nonlinks. Callers supply truthful language/availability text; current available chapters use `aria-current="page"`. |
| `OnThisPage` | Receives `label`, heading IDs/titles/levels 2–4 and optional `currentId`; renders anchor links and level indentation. Caller owns matching section IDs and current-section calculation. |
| `Callout` | Receives `title`, children and optional information/caution tone; renders an aside without inventing an alert. |
| `CodeBlock` | Receives plain `code`, `language` and copy/copied/manualCopy labels. Uses local pre overflow, clipboard success status and a selectable read-only textarea on failure. A changed code value clears the previous value's status. No syntax-highlighting dependency. |
| `ComparisonTable` | Receives caption, column IDs/titles and row IDs/cells. Caller supplies one cell per column. Native table/caption/column-header semantics sit inside a focusable local scroll region; columns preserve readable minimum widths. |

`panda/recipes.ts` registers action and slot recipes through `panda.config.ts`. Dotted semantic roles use explicit `token(...)` expressions so generated CSS contains resolved variables, rather than invalid role-name literals. Disabled colors live in each visual variant's layer so variant colors cannot override them. The presentational reading primitives stay server-renderable; CodeBlock, ReadingDisclosure and SectionActions use client components for clipboard, disclosure and sharing interactions. Header Appearance reuses the existing theme store; SearchControl owns its dialog and search state. The component stage added no dependencies, public fixture route or Storybook.

The component stage's eleven Node tests cover routing and theme-controller behavior; its handoff records isolated-fixture browser checks. The reader stage adds nine content tests and checks actual chapter routes. These results remain separate from full cross-browser or assistive-technology acceptance.

## Source-to-page reader

`site/content/manifest.ts` contains the two explicit reviewed entries: ID, locale, slug, source title, order, source path, SHA-256, reviewed-draft status and review reference. The manifest requires unique identity/route/source and increasing order. `load-book.ts` reads only those files at build time, resolves filesystem paths inside `book/`, verifies source bytes before parsing, and verifies the first H1 against the reviewed title. Hash mismatch, absent file, escaping symlink, unsupported Markdown or invalid link fails the build. It never crawls the book/planning tree. Run commands from the repository root, as above.

The pinned parser is `mdast-util-from-markdown` 2.1.0 with `micromark-extension-gfm-table` 2.1.2 and `mdast-util-gfm-table` 2.0.1; `@types/mdast` 4.0.4 is a direct development type dependency. Only table extensions are enabled. Usage follows the maintainers' [CommonMark AST parser](https://github.com/syntax-tree/mdast-util-from-markdown) and [table extension](https://github.com/syntax-tree/mdast-util-gfm-table) documentation, checked 2026-11-16. There is no MDX, raw-HTML pass-through, HTML-string injection or runtime Markdown fetch. Typed AST nodes render as React text/semantic elements; raw HTML and unsupported nodes fail explicitly. Reference-style links/images/other extensions are not currently supported by this two-source renderer and require a separate reviewed addition.

Parsing preserves headings, paragraphs, inline emphasis/code, lists, citations, tables and exact fenced-text values. The source H1 renders once. Only the exact `> 中文初稿 · 待 review` preamble immediately after that H1 is omitted; substantive or later blockquotes survive. Deterministic NFC/Unicode heading IDs use collision-safe suffixes; the outline derives from actual H2–H4 nodes. Relative links resolve only to allowlisted sources and real target heading IDs, then become canonical chapter routes. Native heading links expose stable anchors. Unsafe schemes, control characters, protocol-relative links and unapproved relative destinations are rejected.

`book.ts` deduplicates validation/parsing within a React server-rendering pass. Server-only composition receives the AST. Client interaction boundaries receive composed navigation, individual code strings, locale or public chapter/heading/source-hash metadata as needed; the canonical AST is not passed to client components. Search fetches its public static index on demand. The two route parameters come from the same loaded allowlist, with dynamic parameters disabled. Previous/next and available/current navigation use that same order; the final G01 entry offers the available index, never an unwritten next chapter. Planned eight-part orientation is text without links. Author/AI attribution and manuscript caveats remain source content.

The reader uses card-free prose up to 704px. At 1440px it shows a 248px book rail plus outline; 1024px keeps a 224px book rail and on-demand outline; 768px hides fixed rails with 32px gutters; 390/320px uses 20/16px gutters and native details navigation. Disclosures support keyboard activation, Escape/focus return and closing after link selection. A breakpoint hiding an open disclosure closes it and restores focus to the visible main region if focus was inside or the browser already cleared it to body; another explicitly focused control retains focus. The mounted listener also reconciles details opened before hydration if their breakpoint already changed. Original text diagrams/examples use the accepted CodeBlock with context labels and local scrolling; tables use ComparisonTable, extended only to allow semantic inline header content. No replacement teaching diagram is invented.

`verify-export.mjs` preserves all foundation/theme assertions and extends them to seven documents, the reviewed body hashes, one H1, actual DOM IDs/anchors, attribution, exact preformatted values, tables/citations, truthful English availability and previous/next. ID/event checks inspect actual opening-tag attributes, so `data-chapter-id` and harmless escaped code such as `onClick=` are not misclassified. Both export configurations must be built and verified separately. Actual browser evidence and limits belong to the reader handoff; no public deployment or performance benchmark is implied.

Theme tooling is pinned to `@pandacss/dev` 2.5.0 (Node >=22), PostCSS 8.5.33 (compatible with Panda's >=8 peer) and pkg-types 2.3.0. All existing direct application/lint/type versions are retained; the only pre-existing resolved lockfile version change is PostCSS 8.5.23 → 8.5.33. The explicit pkg-types dependency supplies the build declarations' public import. Setup and conditional semantic-token behavior follow [Panda's Next.js guide](https://panda-css.com/docs/installation/nextjs) and [token documentation](https://panda-css.com/docs/theming/tokens), checked alongside official npm metadata for this stage.

## Static search and section actions

`site/content/build-search-index.ts` extracts plain text only from the already validated canonical chapter trees. Each real heading starts an entry with chapter/heading IDs and titles, locale, reviewed source SHA-256, canonical unprefixed heading URL and its following text. The generated resources are `/search-index/zh.json` (20 entries) and `/search-index/en.json` (empty). They are force-static GET outputs, not request-time APIs or extra manuscripts. Source paths, review files and internal directory scans never enter the index. The export verifier compares both JSON files with fresh canonical extraction and verifies every target against actual HTML IDs.

`site/content/search.ts` performs literal NFKC/case/whitespace-normalized substring matching. Whitespace-separated terms all need to occur in heading/chapter/body text; Chinese does not require word segmentation. Heading matches rank above incidental body mentions; exact heading matches rank first, ties retain manifest order and at most twelve excerpts are returned. There is no regex query execution, fuzzy/stemming/semantic search, backend or added dependency. Excerpts contain up to 140 Unicode code points of source text plus optional leading/trailing ellipses near a first match; normalization can affect display offsets for unusual compatibility characters, so this is a small-corpus matcher rather than a general search engine.

Header Search opens a native modal dialog with a real labeled input and close control. It fetches the current-language resource only on Chinese search opening, keeps the fetched index in the mounted control, and retains query through close/reopen or failure/retry. English deliberately presents absent-corpus guidance and a Chinese-index link without fetching Chinese results. Loading lasts for the actual request; HTTP/JSON/schema errors expose retry while retaining the query. Native modal background inertness, arrows between input/results, Enter activation, Escape/outside close and prior-focus restoration are implemented; shortcut hints disappear below 900px. Cmd/Ctrl+K ignores editable fields/composition. Chromium may report BODY when Tab moves to browser controls; that is distinct from background page controls receiving focus. The implementation retains native behavior without a custom JavaScript trap; checks verify background controls cannot receive focus and keyboard navigation resumes inside the dialog. Simulated IME checks are separate from physical keyboard/input-method verification.

Escape is handled explicitly after the composition guard because populated native search inputs may otherwise consume it to clear text. Cancellation restores the opener/shortcut's previous focus. Result activation clears that restoration callback and uses a native anchor, so default fragment navigation assigns focus to the actual destination heading after immediate dialog close; the next Tab stays in the article. These literal result anchors and JSON fetch URLs prepend the build prefix once; ordinary Next Link paths remain unprefixed. Cross-chapter result navigation deliberately uses the static document rather than a router transition with delayed modal focus restoration.

`SectionActions` is a small details disclosure after each source heading. The original native heading anchor remains available; no repeated default card is added. Copy builds the actual origin/path/encoded-heading URL on interaction, preserving any Pages prefix once and removing unrelated query data. Clipboard failure/absence reveals a selectable read-only URL; success uses a live announcement without requesting focus or scrolling. Correction first previews chapter/heading/source revision/actual URL locally, then offers an editable GitHub issue-draft link. Nothing is submitted automatically; no private logs, manuscript file paths or model request is attached. Runtime origin-dependent values are produced only in event handlers, avoiding hydration-time URL guesses.

Search/action styles use existing semantic roles, shared Button states and explicit Panda token expressions. UI04 feedback/input/card geometry is reused; mobile layouts adapt to the actual content and real buttons rather than copying Figma's spaced header text or simultaneously showing specimen states. Root/Pages export verification preserves all earlier assertions and adds JSON/heading-action checks; the search/sharing handoff retains its original state/focus/clipboard/screenshot evidence. Maintained E2E now checks representative reading/recovery flows as described below; it does not replace every earlier browser or design review.

## Maintained browser verification

`@playwright/test` is an exact development dependency. `playwright.config.mjs` runs the Chromium suite under `tests/e2e/` against fresh static output, using one worker, bounded test/global timeouts, zero retries and `forbidOnly`. Browser setup follows [Playwright's official CI guidance](https://playwright.dev/docs/ci):

```sh
npm ci
npm run test:e2e:install
NEXT_PUBLIC_BASE_PATH='' npm run build
NEXT_PUBLIC_BASE_PATH='' npm run verify:export
NEXT_PUBLIC_BASE_PATH='' npm run test:e2e
NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run build:pages
NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run verify:export
NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run test:e2e
```

On a Linux runner, install Chromium's OS dependencies with `npx --no-install playwright install --with-deps chromium` after `npm ci`. Local browser installation uses the project dependency, not a global or temporary CLI. `test:e2e` never builds automatically: keep its prefix identical to the export just built/verified. `npm run check` runs lint, strict application/tooling types and Node regression tests; the separate browser command covers rendered behavior.

The Playwright-managed server is `scripts/static-preview.mjs`, bound only to `127.0.0.1:4179`. It serves `site/out/`, maps the exact build prefix, sends the built bilingual404 with actual404 status, handles GET/HEAD and rejects traversal/escaping symlinks. It refuses an incomplete export or an already occupied port; it never reuses another server or serves the repository. Node tests exercise its actual HTTP behavior. This is local verification tooling, not production hosting or Pages CD.

The suite uses approved chapter identities/source hashes and covers entry/navigation, real Chinese search/heading focus, retained-query fetch retry, honest English absence, appearance/refresh/denied storage, manual-copy/correction preview and narrow keyboard/local overflow. Unexpected page errors and console errors fail; only the deliberately injected503 from the exact index URL is expected in its recovery test. No external issue is opened/submitted. Failure traces/screenshots and local screenshots are under ignored `.artifacts/playwright/`; inspect traces with `npx --no-install playwright show-trace <trace.zip>`. Do not commit generated artifacts. Current local/cloud outcomes and limitations belong to the [release-verification handoff](../docs/handoffs/developer/release-verification.md) and [actual review](../docs/reviews/release-verification.md); this Chromium sample is not full cross-browser/accessibility acceptance or deployment proof.

## Continuous Integration and Merge Protection

[CI](../.github/workflows/ci.yml) runs on `pull_request` and pushes to `main`, independently of Coordinator's actual local review. It does not deploy or invoke an AI reviewer.

| Required check name | Commands |
| --- | --- |
| `Quality` | `npm ci --no-fund`, then `npm run check` |
| `Static export (root)` | Empty prefix, build, export verifier, matching Chromium install and `npm run test:e2e` |
| `Static export (pages)` | `/vibe-coding-then-what`, Pages build, export verifier, matching Chromium install and `npm run test:e2e` |

The export jobs wait for Quality, then run independently with fail-fast disabled. Each build/verify pair shares its environment, with root explicitly clearing inherited prefixes. New PR commits cancel older runs for the same PR. Reproduce all checks with:

```sh
NEXT_PUBLIC_BASE_PATH='' npm run check
NEXT_PUBLIC_BASE_PATH='' npm run build
NEXT_PUBLIC_BASE_PATH='' npm run verify:export
NEXT_PUBLIC_BASE_PATH='' npm run test:e2e
NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run build:pages
NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run verify:export
NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run test:e2e
```

The hosted runner is `ubuntu-24.04`, with actual Node/npm versions printed. Node 24 patches and runner images are not immutable. Official Actions are pinned to full commits; checkout/setup-node were verified on 2026-11-15, and the failure-artifact action on 2026-11-17:

- [checkout v7.0.1](https://github.com/actions/checkout/releases/tag/v7.0.1): `3d3c42e5aac5ba805825da76410c181273ba90b1`.
- [setup-node v7.1.0](https://github.com/actions/setup-node/releases/tag/v7.1.0): `949feb2413d6458794dcd2491c4babbbce0c15c1`.
- [upload-artifact v7.0.2](https://github.com/actions/upload-artifact/releases/tag/v7.0.2): `cf430e030ddbb5b0abf93d22962f4752f3646cd9`.

The inspected Actions use Node24; checkout/setup-node's tagged runtime/docs specified Actions Runner ≥2.327.1. No local/self-hosted runner was configured for this. Permissions stay `contents:read`; checkout does not persist credentials. There are no private secrets, registry credentials, automatic package caches or release permissions. After a failure, each export job uploads only `.artifacts/playwright/` with a deployment/attempt-specific name and seven-day retention, ignoring absent files. Hidden files are included only within that explicit public-test-output folder, so its hidden parent does not prevent diagnostics from being retained; no source/env/cache directory is selected. Actual uploaded artifacts require cloud execution and are not inferred from local passes. The workflow does not use `pull_request_target` or interpolate PR/issue prose into shell commands.

Required checks were enabled only after successful cloud execution, with up-to-date branches required. Each revision still needs its own checks. See the [CI review](../docs/reviews/CI01.md) and [dated access baseline](../docs/security/access-policy.md); a local pass alone does not establish Linux/cloud success or saved server settings.

## Manual Pages release

The separate [Pages workflow](../.github/workflows/pages.yml) is manual-only from this repository's `main`, checks out the immutable dispatch SHA, validates the Pages export and maintained browser suite, stamps public identity and uploads only `site/out`. Build permissions remain read-only; the environment-gated deploy job alone receives Pages/OIDC write permissions and runs no checkout/npm. Existing required CI is unchanged.

The [release and recovery runbook](../docs/release.md) is the canonical operator guide for matching-head checks, deliberate dispatch, public HTTP/browser acceptance and all-job known-good recovery. `npm run release:metadata` requires `RELEASE_SHA` plus the Pages prefix and a fresh output; `npm run release:smoke -- URL SHA` checks exact public identity/routes/assets/search/404 with a loopback default. Neither command proves a successful cloud deployment or observed recovery. Coordinator owns those operations and evidence.

## Evidence and limits

**Delivery Milestone 1 Release Readiness remains open.** `.github/workflows/ci.yml` retains Quality and the two static-export jobs with read-only permissions and maintained browser verification. The [release-verification review](../docs/reviews/release-verification.md) owns that accepted implementation's evidence. The new manual Pages workflow requires its own [pipeline review](../docs/reviews/pages-release-pipeline.md), matching-head cloud checks, actual public URL/assets/subpath/404/theme/navigation smoke and observed recovery; none is established by adding the workflow. Dependency maintenance/disposition remains separate. The [canonical ledger](../docs/delivery/milestone-1.md) retains first-delivery release scope. The author's 2026-11-17 bounded initial-publication authorization supersedes the earlier hold; the [board](../docs/coordination.md) owns current assignments and actual state. This tooling change mutates no Pages settings and does not itself publish the site.

The narrow branding migration's actual check/build/export/browser evidence is recorded in its [Developer handoff](../docs/handoffs/developer/vibe-coding-rebrand.md), with acceptance recorded separately by Coordinator. That evidence checks the existing reading shell and new prefix; it does not accept the separate theme checkpoint or establish a public deployment.

Historical foundation and TypeScript runs passed clean installation, lint, four behavior tests, strict coverage and both static exports: five HTML pages and 73 local references each. Export checks include languages, titles, correct switch destinations, bilingual 404/noindex and actual local asset paths. Coordinator independently checked the actual files and compared all 18 migrated runtime/JSX modules after extension normalization. The [TypeScript review](../docs/reviews/TS01.md) records its PR/cloud acceptance; the [foundation review](../docs/reviews/D02.md) retains incomplete browser checks.

The [theme-stage handoff](../docs/handoffs/developer/beta1-theme-foundation.md) records a full dependency audit with seven moderate entries from one [minimatch advisory](https://github.com/advisories/GHSA-g3hv-75wg-m249) in the typescript-eslint development chain, and zero production-only findings. That dated audit identified patched 11.0.1 outside upstream `^10.2.2`; it is not a fresh vulnerability assessment. The configuration does not enable projectService/allowDefaultProject or the advisory's high-optimization trigger. The historical TypeScript review judged that usage non-blocking. No dependency repair, forced override or incompatible downgrade is claimed; reassess on upstream/configuration changes.

The [project consistency audit](../docs/handoffs/developer/project-consistency-audit.md) reassessed dependencies during 2026-11-16–17: full npm audit again reports seven moderate development-chain records from that one advisory, with zero production-only findings and no high/critical entries. The installed affected minimatch is 10.2.6 under typescript-estree. Actual effective ESLint parser options do not enable projectService/allowDefaultProject; the inspected call uses `dot:true` with the default optimization level 1, while the [maintainer advisory](https://github.com/isaacs/minimatch/security/advisories/GHSA-g3hv-75wg-m249) describes amplification at level ≥2. This supports a bounded lower-exposure inference for the inspected configuration, not a fix or general safety guarantee. Official npm latest metadata still identifies typescript-eslint/typescript-estree 8.72.2 with minimatch `^10.2.2`, which excludes patched 11.0.1. Dependencies remain unchanged; review a compatible upstream repair separately, and reassess if the lint/project-service configuration changes. Overall Release Readiness and reviewer risk acceptance remain separate.

The [release-verification handoff](../docs/handoffs/developer/release-verification.md) records the subsequent fresh npm/advisory/allowed-major reassessment after adding the fixed Playwright development package: the same unresolved chain and seven moderate records remain, production-only findings remain zero, and no compatible repaired upstream version was identified. Only the necessary test packages were added; no existing resolved dependency was upgraded, overridden or downgraded. This is a current disposition for review, not a claim that the advisory was repaired or that public release is fully verified.

Project commands disable Next telemetry without changing machine settings, and automatic agent-rule generation is disabled. Search index GET routes generate static files at build time; no request-time backend, server writes, credentials, external fonts or analytics were added. The simple SVG icon is original. Only the two reviewed `book/` entries feed rendered chapters; internal directories (`book/` as a whole, `docs/`, `.local/`, `.git/`, dependencies) are not copied into the public export. Generated output/caches/env files stay out of Git.

The older DS01 harness only passed syntax checking at its historical checkpoint; its record is not new browser evidence. Theme, components, reader and search/sharing retain their own handoffs and separate Coordinator acceptance. The [search/sharing handoff](../docs/handoffs/developer/beta1-search-sharing.md) records implementation checks and limits; its [independent review](../docs/reviews/beta1-search-sharing.md) records r4 acceptance and finding closure. [PR15](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/15) and [PR16](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/16) retain actual code/document integration records. New manuscripts, first-delivery Release Readiness and future reader milestones each need their own assignments under the [board](../docs/coordination.md). Review, cloud checks, merge and deployment remain separate facts.
