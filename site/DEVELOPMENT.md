# Website foundation, tokens and themes — developer guide

This guide describes the bilingual static website foundation, strict TypeScript, PandaCSS tokens, System/Day/Night theme foundation and CI. Its active brand is **Vibe Coding, Then What?** / **《Vibe Coding 之后：能跑，然后呢？》**, with subtitle **Understand the Systems Behind Your AI-Built Products** and repository slug `vibe-coding-then-what`. It does not yet render manuscripts, provide search/audio or expose an application backend. There is no verified deployed reading URL.

The original DS01 work remains a separate [unaccepted checkpoint](https://github.com/HAIXIN-ZHANG/beyond-the-frontend/commit/4da2578048f8df113fed92d99e084f644a9a788e). The separately assigned [Beta 1 theme stage](../docs/handoffs/developer/beta1-theme-foundation.md) reuses selected token/controller sources with current branding and its own verification; it does not merge that old tree or grant its historical work blanket acceptance. Historical [DS01 handoff](../docs/handoffs/developer/DS01.md), [review](../docs/reviews/DS01.md) and [Development History](../docs/development-history.md) retain their original evidence.

The [UI04 / Beta 1 design handoff](../docs/design/reading-experience-v1.md) is the technical design target, with [reviewed scope and limits](../docs/reviews/beta1-design-alignment.md). This theme stage adds only the foundation and a native footer preference select. Header Appearance popover, full reading components, reader/search/copy and Beta 2 concepts are not delivered. The [prior alignment audit](../docs/handoffs/developer/beta1-design-alignment.md) describes its historical shell baseline; current execution/review state belongs to the board and stage handoff.

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

`prepare` runs Panda codegen after installation. `dev`, `build` and `typecheck` also run codegen explicitly, so ignored `site/styled-system/` output is reproducible. `check` runs ESLint, typecheck and eleven Node tests (four routing/deployment tests and seven theme tests). `typecheck` generates Next route declarations, then runs the application and isolated Panda build-tool compilers. A clean checkout needs no earlier build. Static output goes to ignored `site/out/`.

Project links are configured in `site/config/site.ts`; book titles and interface messages are in `site/config/i18n.ts`. No chapter prose is copied into React components. Future content rendering follows the [initial content contract](../docs/content-contract.md) and a separate implementation assignment; that contract is not an implemented renderer.

## Bilingual routes and 404

- English is the default: `/` and `/read/`. Chinese uses `/zh/` and `/zh/read/`.
- Separate root layouts supply each document's `lang`, title and messages. Language switching preserves home/index location; crossing root layouts loads a new document.
- There is no automatic browser-language redirect or persistent language preference.
- Static hosting has one global `404.html`: English with a Chinese explanation and home link. Chinese segment not-found components are available for later use; hosting does not dynamically infer an invalid URL's language.
- The pinned Next.js 16.4.6 implementation uses `experimental.globalNotFound` for multiple root layouts. Root and subpath exports validate it; recheck on framework upgrades. See the [foundation review](../docs/reviews/D02.md).

## Token and theme foundation

`panda/figma-reference.json` preserves the reviewed source IDs, 111 variable values/alias targets and 14 text styles. `panda/tokens.ts` defines primitive/semantic tokens; `panda/global-styles.ts` applies them to the existing shell. `site/styles/global.css` is the Panda cascade-layer entry, processed by the explicit root-config PostCSS plugin. Generated variables normalize camelCase paths to kebab-case. Local font stacks are preferences, not bundled/downloaded fonts or proof of exact Figma glyphs. No Code Connect integration is claimed.

The native footer **Appearance** select controls a preference: System (default), Day or Night. The actual appearance can be Night while the select remains System. The single controller in `site/theme/runtime.ts` resolves `data-theme` (`light`/`dark`) and `data-theme-preference`; it stores explicit choices at the compatibility key `btf.theme`, and removes that override when System is selected. Missing/invalid/blocked storage falls back to the system; blocked writes still allow an in-memory choice. A guarded localStorage reference keeps same-origin iframe sessionStorage events from changing the preference.

`ThemeHead` embeds a self-contained bootstrap before the body, so appearance does not wait for React hydration. The client hook uses the same controller through `useSyncExternalStore`; only the known document theme-attribute hydration difference is suppressed. Without website JavaScript, semantic CSS follows the system; the interactive preference control requires JavaScript. First-paint, media, refresh, actual cross-tab/storage, keyboard and browser results must be read from the current stage's actual evidence, not inferred from this mechanism.

## GitHub Pages subpath

```sh
npm run build:pages
NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run verify:export
```

`NEXT_PUBLIC_BASE_PATH` is validated at build time. Next applies it to internal links and assets; do not add it manually twice. Build and verification must receive the same value. Explicitly clear it when restoring a root export.

The Pages output has prefixed URLs but no extra `vibe-coding-then-what/` directory within `site/out/`. A static preview must mount the directory at `/vibe-coding-then-what/` and serve its actual `404.html` with HTTP 404 for unknown paths. `next start` does not run an exported site; `next dev` does not prove production hosting behavior. A production Pages release is separately authorized after accepted code/content/QA, and currently paused.

## Strict TypeScript

The application compiler covers all 22 handwritten modules, including the new theme head/control/runtime/hook, plus generated declarations. `site/tsconfig.json` remains unchanged with strict/noEmit, explicit type imports and `skipLibCheck:false`. Locale values are `en | zh`, messages use `satisfies`, and props/metadata use concrete types. No application `any`, ts-ignore or ignored build error was introduced.

Pinned development packages include TypeScript 6.0.3, typescript-eslint 8.72.2, React/ReactDOM types 19.3.0 and Node types 24.19.2. Compatibility was checked on 2026-11-15 against official npm metadata and [typescript-eslint's support range](https://typescript-eslint.io/users/dependency-versions/): ESLint 10, Node 24 and TypeScript `>=4.8.4 <6.1.0`. Existing Next.js/React/ESLint versions were retained.

Next/ESLint configuration, export verification and two Node test files intentionally retain `.mjs`. They receive lint/runtime validation, not a claim of static TypeScript checking. Node 24 [native type stripping](https://nodejs.org/docs/latest-v24.x/api/typescript.html) runs their relative `.ts` imports; it does not check types. `erasableSyntaxOnly` avoids an extra transformer/runner. The compiler uses bundler resolution and explicit extensions.

Next regenerates `site/next-env.d.ts`; it is ignored under the [official guidance](https://nextjs.org/docs/app/api-reference/config/typescript#next-envdts), along with `.next/`, `out/` and `*.tsbuildinfo`. Ignoring generated files is not excluding application source from checks.

`tsconfig.panda.json` separately checks the three handwritten build definitions (`panda.config.ts`, tokens and global styles) with strict/noEmit. It uses `skipLibCheck:true` solely at that build-tool boundary: full library declaration checking reproduces four TS2308 ambiguous internal re-export errors in installed `@pandacss/types`. Application/generated declarations still receive full checks. No vendor patch or global compiler relaxation was used. In-memory negative probes confirm invalid public Panda configuration and implicit any still fail (TS2322/TS7006). This documents an upstream limitation, not a repaired type package.

Theme tooling is pinned to `@pandacss/dev` 2.5.0 (Node >=22), PostCSS 8.5.33 (compatible with Panda's >=8 peer) and pkg-types 2.3.0. All existing direct application/lint/type versions are retained; the only pre-existing resolved lockfile version change is PostCSS 8.5.23 → 8.5.33. The explicit pkg-types dependency supplies the build declarations' public import. Setup and conditional semantic-token behavior follow [Panda's Next.js guide](https://panda-css.com/docs/installation/nextjs) and [token documentation](https://panda-css.com/docs/theming/tokens), checked alongside official npm metadata for this stage.

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

Project commands disable Next telemetry without changing machine settings, and automatic agent-rule generation is disabled. No API, server writes, credentials, external fonts or analytics were added. The simple SVG icon is original. Internal directories (`book/`, `docs/`, `.local/`, `.git/`, dependencies) are not a public content source; generated output/caches/env files stay out of Git.

The older DS01 harness only passed syntax checking at its historical checkpoint; its record is not new browser evidence. Fresh checks for the explicitly assigned theme foundation belong in the [current stage handoff](../docs/handoffs/developer/beta1-theme-foundation.md), with actual acceptance recorded by Coordinator. Other reading/component/search/copy, manuscript, E2E and deployment stages still require their own assignments and gates. Review, cloud checks, merge and deployment remain separate facts.
