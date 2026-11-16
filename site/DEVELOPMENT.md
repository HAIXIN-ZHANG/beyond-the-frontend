# Static reading, search and sharing — developer guide

This guide describes the bilingual static website, strict TypeScript, PandaCSS, System/Day/Night, reviewed Chinese reader, static search/sharing and CI. Its active brand is **Vibe Coding, Then What?** / **《Vibe Coding 之后：能跑，然后呢？》**, with subtitle **Understand the Systems Behind Your AI-Built Products** and repository slug `vibe-coding-then-what`. The two-source reader merged in PR14. The separate [search/sharing stage](../docs/handoffs/developer/beta1-search-sharing.md) adds current-language static search and deliberate link/correction actions in the working tree, pending its own review. Audio, AI and an application backend remain absent. There is no verified deployed reading URL.

The original DS01 work remains a separate [unaccepted checkpoint](https://github.com/HAIXIN-ZHANG/beyond-the-frontend/commit/4da2578048f8df113fed92d99e084f644a9a788e). The separately assigned [Beta 1 theme stage](../docs/handoffs/developer/beta1-theme-foundation.md) reuses selected token/controller sources with current branding and its own verification; it does not merge that old tree or grant its historical work blanket acceptance. Historical [DS01 handoff](../docs/handoffs/developer/DS01.md), [review](../docs/reviews/DS01.md) and [Development History](../docs/development-history.md) retain their original evidence.

The [UI04 / Beta 1 design handoff](../docs/design/reading-experience-v1.md) is the technical design target, with [reviewed scope and limits](../docs/reviews/beta1-design-alignment.md). The accepted [reading component stage](../docs/handoffs/developer/beta1-reading-components.md), merged in PR13, supplies Header Appearance and reusable primitives; the reader composes them with real manuscripts. Search/sharing uses the latest named UI04 sources. Beta 2 palette designs remain outside production. The [prior alignment audit](../docs/handoffs/developer/beta1-design-alignment.md) describes its historical shell baseline; current execution/review state belongs to the board, stage handoff and independent review.

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

`prepare` runs Panda codegen after installation. `dev`, `build` and `typecheck` also run codegen explicitly, so ignored `site/styled-system/` output is reproducible. `check` runs ESLint, typecheck and twenty-eight Node tests (four routing/deployment, seven theme, nine content and eight search/sharing). `typecheck` generates Next route declarations, then runs the application and isolated Panda build-tool compilers. A clean checkout needs no earlier build. Static output goes to ignored `site/out/`.

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

The Header **Appearance** IconButton opens a native auto popover containing a labeled radio group: System (default), Day or Night. The former footer select is removed. Its icon reflects the effective appearance; its accessible label distinguishes the selected preference from the effective mode. System may therefore show the Night icon while System remains checked. Native popover behavior handles Escape and outside dismissal; choice, viewport resize and scrolling dismiss the panel, returning focus when it was inside. Resize/scroll listeners check the actual open DOM state and are installed for the mounted control, avoiding an initial-open effect race. The panel is clamped within both horizontal viewport edges. No Search placeholder is rendered.

The unchanged single controller in `site/theme/runtime.ts` resolves `data-theme` (`light`/`dark`) and `data-theme-preference`; it stores explicit choices at the compatibility key `btf.theme`, and removes that override when System is selected. Missing/invalid/blocked storage falls back to the system; blocked writes still allow an in-memory choice. A guarded localStorage reference keeps same-origin iframe sessionStorage events from changing the preference.

`ThemeHead` embeds a self-contained bootstrap before the body, so appearance does not wait for React hydration. The client hook uses the same controller through `useSyncExternalStore`; only the known document theme-attribute hydration difference is suppressed. Without website JavaScript, semantic CSS follows the system; the interactive preference control requires JavaScript. First-paint, media, refresh, actual cross-tab/storage, keyboard and browser results must be read from the current stage's actual evidence, not inferred from this mechanism.

## GitHub Pages subpath

```sh
npm run build:pages
NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run verify:export
```

`NEXT_PUBLIC_BASE_PATH` is validated at build time. Next applies it to internal links and assets; do not add it manually twice. Build and verification must receive the same value. Explicitly clear it when restoring a root export.

The Pages output has prefixed URLs but no extra `vibe-coding-then-what/` directory within `site/out/`. A static preview must mount the directory at `/vibe-coding-then-what/` and serve its actual `404.html` with HTTP 404 for unknown paths. `next start` does not run an exported site; `next dev` does not prove production hosting behavior. A production Pages release is separately authorized after accepted code/content/QA, and currently paused.

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

`panda/recipes.ts` registers action and slot recipes through `panda.config.ts`. Dotted semantic roles use explicit `token(...)` expressions so generated CSS contains resolved variables, rather than invalid role-name literals. Disabled colors live in each visual variant's layer so variant colors cannot override them. The reading primitives stay server-renderable except CodeBlock's clipboard state; Header Appearance owns only its interaction and reuses the existing theme store. No dependencies, public fixture route or Storybook were added.

The component stage's eleven Node tests cover routing and theme-controller behavior; its handoff records isolated-fixture browser checks. The reader stage adds nine content tests and checks actual chapter routes. These results remain separate from full cross-browser or assistive-technology acceptance.

## Source-to-page reader

`site/content/manifest.ts` contains the two explicit reviewed entries: ID, locale, slug, source title, order, source path, SHA-256, reviewed-draft status and review reference. The manifest requires unique identity/route/source and increasing order. `load-book.ts` reads only those files at build time, resolves filesystem paths inside `book/`, verifies source bytes before parsing, and verifies the first H1 against the reviewed title. Hash mismatch, absent file, escaping symlink, unsupported Markdown or invalid link fails the build. It never crawls the book/planning tree. Run commands from the repository root, as above.

The pinned parser is `mdast-util-from-markdown` 2.1.0 with `micromark-extension-gfm-table` 2.1.2 and `mdast-util-gfm-table` 2.0.1; `@types/mdast` 4.0.4 is a direct development type dependency. Only table extensions are enabled. Usage follows the maintainers' [CommonMark AST parser](https://github.com/syntax-tree/mdast-util-from-markdown) and [table extension](https://github.com/syntax-tree/mdast-util-gfm-table) documentation, checked 2026-11-16. There is no MDX, raw-HTML pass-through, HTML-string injection or runtime Markdown fetch. Typed AST nodes render as React text/semantic elements; raw HTML and unsupported nodes fail explicitly. Reference-style links/images/other extensions are not currently supported by this two-source renderer and require a separate reviewed addition.

Parsing preserves headings, paragraphs, inline emphasis/code, lists, citations, tables and exact fenced-text values. The source H1 renders once. Only the exact `> 中文初稿 · 待 review` preamble immediately after that H1 is omitted; substantive or later blockquotes survive. Deterministic NFC/Unicode heading IDs use collision-safe suffixes; the outline derives from actual H2–H4 nodes. Relative links resolve only to allowlisted sources and real target heading IDs, then become canonical chapter routes. Native heading links expose stable anchors. Unsafe schemes, control characters, protocol-relative links and unapproved relative destinations are rejected.

`book.ts` deduplicates validation/parsing within a React server-rendering pass. Server-only composition receives the AST; client components receive only the navigation content or individual code strings required for interactions. The two route parameters come from the same loaded allowlist, with dynamic parameters disabled. Previous/next and available/current navigation use that same order; the final G01 entry offers the available index, never an unwritten next chapter. Planned eight-part orientation is text without links. Author/AI attribution and manuscript caveats remain source content.

The reader uses card-free prose up to 704px. At 1440px it shows a 248px book rail plus outline; 1024px keeps a 224px book rail and on-demand outline; 768px hides fixed rails with 32px gutters; 390/320px uses 20/16px gutters and native details navigation. Disclosures support keyboard activation, Escape/focus return and closing after link selection. A breakpoint hiding an open disclosure closes it and restores focus to the visible main region if focus was inside or the browser already cleared it to body; another explicitly focused control retains focus. The mounted listener also reconciles details opened before hydration if their breakpoint already changed. Original text diagrams/examples use the accepted CodeBlock with context labels and local scrolling; tables use ComparisonTable, extended only to allow semantic inline header content. No replacement teaching diagram is invented.

`verify-export.mjs` preserves all foundation/theme assertions and extends them to seven documents, the reviewed body hashes, one H1, actual DOM IDs/anchors, attribution, exact preformatted values, tables/citations, truthful English availability and previous/next. ID/event checks inspect actual opening-tag attributes, so `data-chapter-id` and harmless escaped code such as `onClick=` are not misclassified. Both export configurations must be built and verified separately. Actual browser evidence and limits belong to the reader handoff; no public deployment or performance benchmark is implied.

Theme tooling is pinned to `@pandacss/dev` 2.5.0 (Node >=22), PostCSS 8.5.33 (compatible with Panda's >=8 peer) and pkg-types 2.3.0. All existing direct application/lint/type versions are retained; the only pre-existing resolved lockfile version change is PostCSS 8.5.23 → 8.5.33. The explicit pkg-types dependency supplies the build declarations' public import. Setup and conditional semantic-token behavior follow [Panda's Next.js guide](https://panda-css.com/docs/installation/nextjs) and [token documentation](https://panda-css.com/docs/theming/tokens), checked alongside official npm metadata for this stage.

## Static search and section actions

`site/content/build-search-index.ts` extracts plain text only from the already validated canonical chapter trees. Each real heading starts an entry with chapter/heading IDs and titles, locale, reviewed source SHA-256, canonical unprefixed heading URL and its following text. The generated resources are `/search-index/zh.json` (20 entries) and `/search-index/en.json` (empty). They are force-static GET outputs, not request-time APIs or extra manuscripts. Source paths, review files and internal directory scans never enter the index. The export verifier compares both JSON files with fresh canonical extraction and verifies every target against actual HTML IDs.

`site/content/search.ts` performs literal NFKC/case/whitespace-normalized substring matching. Whitespace-separated terms all need to occur in heading/chapter/body text; Chinese does not require word segmentation. Heading matches rank above incidental body mentions; exact heading matches rank first, ties retain manifest order and at most twelve excerpts are returned. There is no regex query execution, fuzzy/stemming/semantic search, backend or added dependency. Excerpts are bounded to 140 Unicode code points near a first match; normalization can affect display offsets for unusual compatibility characters, so this is a small-corpus matcher rather than a general search engine.

Header Search opens a native modal dialog with a real labeled input and close control. It fetches the current-language resource only on Chinese search opening, keeps the fetched index in the mounted control, and retains query through close/reopen or failure/retry. English deliberately presents absent-corpus guidance and a Chinese-index link without fetching Chinese results. Loading lasts for the actual request; HTTP/JSON/schema errors expose retry while retaining the query. Native modal background inertness, arrows between input/results, Enter activation, Escape/outside close and prior-focus restoration are implemented; shortcut hints disappear below 900px. Cmd/Ctrl+K ignores editable fields/composition. Chromium may report BODY when Tab moves to browser controls; that is distinct from background page controls receiving focus. The implementation retains native behavior without a custom JavaScript trap; checks verify background controls cannot receive focus and keyboard navigation resumes inside the dialog. Simulated IME checks are separate from physical keyboard/input-method verification.

Escape is handled explicitly after the composition guard because populated native search inputs may otherwise consume it to clear text. Cancellation restores the opener/shortcut's previous focus. Result activation clears that restoration callback and uses a native anchor, so default fragment navigation assigns focus to the actual destination heading after immediate dialog close; the next Tab stays in the article. These literal result anchors and JSON fetch URLs prepend the build prefix once; ordinary Next Link paths remain unprefixed. Cross-chapter result navigation deliberately uses the static document rather than a router transition with delayed modal focus restoration.

`SectionActions` is a small details disclosure after each source heading. The original native heading anchor remains available; no repeated default card is added. Copy builds the actual origin/path/encoded-heading URL on interaction, preserving any Pages prefix once and removing unrelated query data. Clipboard failure/absence reveals a selectable read-only URL; success uses a live announcement without requesting focus or scrolling. Correction first previews chapter/heading/source revision/actual URL locally, then offers an editable GitHub issue-draft link. Nothing is submitted automatically; no private logs, manuscript file paths or model request is attached. Runtime origin-dependent values are produced only in event handlers, avoiding hydration-time URL guesses.

Search/action styles use existing semantic roles, shared Button states and explicit Panda token expressions. UI04 feedback/input/card geometry is reused; mobile layouts adapt to the actual content and real buttons rather than copying Figma's spaced header text or simultaneously showing specimen states. Root/Pages export verification preserves all earlier assertions and adds JSON/heading-action checks; actual state/focus/clipboard/screenshot evidence belongs to the search/sharing handoff. Full E2E/CI integration remains a separate QA assignment.

## Continuous Integration and Merge Protection

[CI](../.github/workflows/ci.yml) runs on `pull_request` and pushes to `main`, independently of Coordinator's actual local review. It does not deploy or invoke an AI reviewer.

| Required check name | Commands |
| --- | --- |
| `Quality` | `npm ci --no-fund`, then `npm run check` |
| `Static export (root)` | Empty prefix, `npm run build`, `npm run verify:export` |
| `Static export (pages)` | `/vibe-coding-then-what`, `npm run build:pages`, `npm run verify:export` |

The export jobs wait for Quality, then run independently with fail-fast disabled. Each build/verify pair shares its environment, with root explicitly clearing inherited prefixes. New PR commits cancel older runs for the same PR. Reproduce all checks with:

```sh
NEXT_PUBLIC_BASE_PATH='' npm run check
NEXT_PUBLIC_BASE_PATH='' npm run build
NEXT_PUBLIC_BASE_PATH='' npm run verify:export
NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run build:pages
NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run verify:export
```

The hosted runner is `ubuntu-24.04`, with actual Node/npm versions printed. Node 24 patches and runner images are not immutable. Official Actions are pinned to full commits verified on 2026-11-15:

- [checkout v7.0.1](https://github.com/actions/checkout/releases/tag/v7.0.1): `3d3c42e5aac5ba805825da76410c181273ba90b1`.
- [setup-node v7.1.0](https://github.com/actions/setup-node/releases/tag/v7.1.0): `949feb2413d6458794dcd2491c4babbbce0c15c1`.

Their tagged runtime/docs specified Node 24 and Actions Runner ≥2.327.1. No local/self-hosted runner was configured for this. Permissions stay `contents:read`; checkout does not persist credentials. There are no private secrets, registry credentials, automatic package caches, artifact uploads or release permissions. The workflow does not use `pull_request_target` or interpolate PR/issue prose into shell commands.

Required checks were enabled only after successful cloud execution, with up-to-date branches required. Each revision still needs its own checks. See the [CI review](../docs/reviews/CI01.md) and [dated access baseline](../docs/security/access-policy.md); a local pass alone does not establish Linux/cloud success or saved server settings.

## Evidence and limits

The narrow branding migration's actual check/build/export/browser evidence is recorded in its [Developer handoff](../docs/handoffs/developer/vibe-coding-rebrand.md), with acceptance recorded separately by Coordinator. That evidence checks the existing reading shell and new prefix; it does not accept the separate theme checkpoint or establish a public deployment.

Historical foundation and TypeScript runs passed clean installation, lint, four behavior tests, strict coverage and both static exports: five HTML pages and 73 local references each. Export checks include languages, titles, correct switch destinations, bilingual 404/noindex and actual local asset paths. Coordinator independently checked the actual files and compared all 18 migrated runtime/JSX modules after extension normalization. The [TypeScript review](../docs/reviews/TS01.md) records its PR/cloud acceptance; the [foundation review](../docs/reviews/D02.md) retains incomplete browser checks.

Full dependency audit again records seven moderate entries from one [minimatch advisory](https://github.com/advisories/GHSA-g3hv-75wg-m249) in the typescript-eslint development chain; this stage's production-only audit is zero. Patched 11.0.1 is outside upstream `^10.2.2`. The configuration does not enable projectService/allowDefaultProject or the advisory's high-optimization trigger. The historical TypeScript review judged that usage non-blocking; the new stage still reports the unresolved advisory for review, rather than claim it is repaired or silently inherit a new acceptance. Reassess on upstream/configuration changes; no forced override or incompatible downgrade was used.

Project commands disable Next telemetry without changing machine settings, and automatic agent-rule generation is disabled. No API, server writes, credentials, external fonts or analytics were added. The simple SVG icon is original. Only the two reviewed `book/` entries feed rendered chapters; internal directories (`book/` as a whole, `docs/`, `.local/`, `.git/`, dependencies) are not copied into the public export. Generated output/caches/env files stay out of Git.

The older DS01 harness only passed syntax checking at its historical checkpoint; its record is not new browser evidence. Theme, components, reader and search/sharing have their own stage handoffs and separate Coordinator acceptance. The [search/sharing handoff](../docs/handoffs/developer/beta1-search-sharing.md) records the current working-tree stage. New manuscripts, permanent E2E and deployment retain their own assignments and gates. Review, cloud checks, merge and deployment remain separate facts.
