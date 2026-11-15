# Website development

The D02 skeleton provides home pages, empty chapter indexes, a bilingual 404 and static export. CI01 and TS01 have passed review and merged. DS01 adds PandaCSS and theme foundations; its code and local build evidence are submitted for review, while actual browser acceptance remains with Coordinator. Manuscripts and search are not connected yet, and the site is not deployed.

Project links live in `site/config/site.ts`; interface messages and book titles live in `site/config/i18n.ts`. This iteration does not edit Writer's manuscripts. Future content integration follows Coordinator's accepted initial content contract and its separate stage assignment.

## Run locally

Run commands from the repository root with Node.js 24 LTS and npm 11. Direct dependency versions and the resolved tree are pinned in `package.json` and `package-lock.json`.

```sh
npm ci
npm run dev
```

The development server normally uses `http://localhost:3000/`; use the port reported by Next.js if it is occupied. There is no application backend or database. Installation runs `prepare` to generate Panda helpers; dev, build and typecheck also generate what they need explicitly.

```sh
npm run check
NEXT_PUBLIC_BASE_PATH='' npm run build
NEXT_PUBLIC_BASE_PATH='' npm run verify:export
```

`check` runs ESLint, application and Panda TypeScript checks, then the Node behavior tests. `verify:export` inspects actual HTML, local links/assets, metadata and the emitted theme bootstrap. Output is generated in `site/out/`; a working development server is not evidence that the static export works.

## Routes and languages

- English is the default: `/` and `/read/`. Chinese uses `/zh/` and `/zh/read/`.
- Each language has its own root layout, HTML `lang`, titles and messages. Language switching preserves the current home/index location. Crossing root layouts loads a new document.
- There is no browser-language redirect or stored language preference; the root entry remains English.
- Writer's prose is neither copied into components nor automatically translated. Later chapter counterparts and missing-translation behavior follow the content contract.
- Static hosting has one site-level `404.html`: English with a Chinese explanation and Chinese-home link. A Chinese segment `not-found` is available for later chapter use; static hosting does not dynamically select the 404 language from an invalid URL.
- This Next.js 16.4.6 multiple-root-layout implementation uses `experimental.globalNotFound` for its custom global 404. Both export paths verify it; recheck this experimental behavior when upgrading Next.js.

## GitHub Pages path

```sh
npm run build:pages
NEXT_PUBLIC_BASE_PATH=/beyond-the-frontend npm run verify:export
```

`NEXT_PUBLIC_BASE_PATH` is validated at build time. Next.js applies it to internal links and framework assets; do not manually add it a second time. Build and verification must receive the same value. Set it explicitly to an empty string to restore a root-path export.

The Pages output includes the URL prefix but does not contain an extra `beyond-the-frontend/` directory inside `site/out/`. A local static preview must mount that directory at `/beyond-the-frontend/` and serve its actual `404.html` with HTTP 404 for unknown paths. Do not use `next start` for static export or treat `next dev` as a GitHub Pages acceptance test. Production hosting is checked in the separately authorized DEP01 stage after content/code/QA acceptance.

## CI

[The CI workflow](../.github/workflows/ci.yml) runs on PRs and pushes to `main`. It performs mechanical checks; Coordinator reviews the actual deliverable locally. There is no GitHub AI review action or deployment in this workflow.

| Stable check name | Work |
| --- | --- |
| `Quality` | Locked installation, then `npm run check`: lint, both strict compiler projects and currently 10 tests |
| `Static export (root)` | Explicit empty base path; build and verify the root export |
| `Static export (pages)` | `/beyond-the-frontend`; build and verify the Pages export |

After Quality succeeds, the exports run on independent runners with fail-fast disabled. Each job shares its environment between build and verification. The explicit empty root value overrides inherited prefixes. To reproduce the full local sequence:

```sh
NEXT_PUBLIC_BASE_PATH='' npm run check
NEXT_PUBLIC_BASE_PATH='' npm run build
NEXT_PUBLIC_BASE_PATH='' npm run verify:export
NEXT_PUBLIC_BASE_PATH=/beyond-the-frontend npm run build:pages
NEXT_PUBLIC_BASE_PATH=/beyond-the-frontend npm run verify:export
```

The workflow uses GitHub-hosted `ubuntu-24.04` and the Node major from `.nvmrc`, reporting actual Node/npm versions. Node 24 patch versions and the runner image are not frozen. `npm ci` uses the lockfile without upgrading dependencies.

Actions are pinned to verified full commits:

- [actions/checkout v7.0.1](https://github.com/actions/checkout/releases/tag/v7.0.1): `3d3c42e5aac5ba805825da76410c181273ba90b1`.
- [actions/setup-node v7.1.0](https://github.com/actions/setup-node/releases/tag/v7.1.0): `949feb2413d6458794dcd2491c4babbbce0c15c1`.

On 2026-11-15, official GitHub release/tag API results and tagged README/action.yml files were checked: both Actions use Node 24 and require Actions Runner 2.327.1 or newer. This does not require changes to the user's local or a self-hosted runner.

Permissions are `contents: read`; checkout does not persist credentials. Automatic package caching is disabled. The workflow has no registry credentials, private secrets, publishing permissions or artifact upload. It uses `pull_request`, not `pull_request_target`, and does not interpolate PR/issue text into shell commands. New PR revisions cancel older runs for that PR.

CI01's cloud runs established the three required checks, with up-to-date branches required. A local pass does not establish that a later revision passed GitHub/Linux. Coordinator manages exact PR revisions, cloud checks, protection verification and merges; Developer does not change repository protection here. See the [CI01 review](../docs/reviews/CI01.md).

## TypeScript boundaries

The TS01 baseline migrated 15 JSX pages/layouts/components and three application configuration modules without changing emitted runtime/JSX after import-extension normalization. Its 18 modules, strict failure probes, four tests and both 5-page/73-reference exports passed; CSS was unchanged in that stage. See the [TS01 handoff](../docs/handoffs/developer/TS01.md) and [review](../docs/reviews/TS01.md) for historical evidence.

The DS01 application has 22 handwritten `.ts/.tsx` modules. `site/tsconfig.json` retains `strict`, `noEmit`, `isolatedModules`, `verbatimModuleSyntax` and `skipLibCheck: false`. All application sources and generated declarations remain checked. `Locale` is `en | zh`; `satisfies Record<Locale, Messages>` checks translation structure. Props, `ReactNode` and `Metadata` use concrete types.

```sh
npm run typecheck
```

This generates Panda helpers and Next route types, then actually runs both `tsc --project site/tsconfig.json --noEmit` and `tsc --project tsconfig.panda.json --noEmit`. A fresh checkout does not need a prior build. Both checks also run through `check`/CI Quality.

TypeScript 6.0.3, typescript-eslint 8.72.2, React/ReactDOM types 19.3.0 and Node types 24.19.2 are pinned. Official npm metadata and the [typescript-eslint support range](https://typescript-eslint.io/users/dependency-versions/) were checked on 2026-11-15: ESLint 10, Node 24 and TypeScript `>=4.8.4 <6.1.0` are supported. TS01 retained existing Next.js/React/ESLint versions rather than installing an incompatible TypeScript latest major.

Next/PostCSS/ESLint configuration, export verification and Node tests retain `.mjs` where appropriate. They receive lint and runtime checks; they are not claimed to be statically typechecked. Node 24 [native type stripping](https://nodejs.org/docs/latest-v24.x/api/typescript.html) permits their relative `.ts` imports. `erasableSyntaxOnly` avoids syntax needing a separate transformer. Node does not check types; the independent compilers do. No extra TypeScript runner or path-alias resolver is installed.

`site/next-env.d.ts` is generated and ignored according to the [Next.js TypeScript documentation](https://nextjs.org/docs/app/api-reference/config/typescript#next-envdts). `.next/`, `out/`, Panda output and `*.tsbuildinfo` are also ignored. No application `any`, TypeScript suppression or `ignoreBuildErrors` was added.

### Build-tool declaration exception

Panda 2.5.0 exposed a missing public `pkg-types` dependency and four ambiguous internal declaration exports. Inspected official 2.4.0/1.12.2 declarations had the same structure; no blind downgrade, vendor patch or override was applied.

Coordinator approved moving build-only definitions to root `panda/` and adding official `pkg-types` 2.3.0. `tsconfig.panda.json` checks `panda.config.ts` and both handwritten definitions with strict/noEmit, while skipping third-party build-tool declaration internals only. The application compiler remains byte-for-byte unchanged from TS01, with declaration checking enabled. Generated application declarations do not import the Panda build package. This is an explicit unresolved upstream limitation; reassess the exception when upstream fixes it.

Both compiler programs were inspected to confirm coverage of all 22 application and three build-definition files. Temporary negative probes still produced TS2322 for invalid public Panda configuration and TS7006 for handwritten implicit any. Probes were removed; the separate configuration is actually executed, not merely stored.

## PandaCSS foundation

Pinned development dependencies are `@pandacss/dev` 2.5.0, PostCSS 8.5.33 and the declaration dependency above. Official npm metadata checked on 2026-11-15 requires Node 22 or newer and PostCSS 8 or newer. Actual installation/build checks supplement these ranges. The PostCSS plugin comes from `@pandacss/dev/postcss`; there is no redundant direct plugin package, component framework or theme library.

Root `panda.config.ts` and `site/postcss.config.mjs` explicitly align the project root, source scan and `site/styled-system/` output. PostCSS uses npm's root package path so a worker cwd or Turbopack asset interpretation of a directory URL cannot change that root. `npm run codegen`, `prepare`, dev, build and typecheck ensure generated helpers exist. Generated files are ignored by Git/lint; handwritten configuration is linted and checked separately.

`panda/tokens.ts` defines primitives, semantic aliases and 14 text styles. `panda/global-styles.ts` supplies the existing skeleton's foundation; full component recipes belong to CMP01. `site/styles/global.css` declares layer order only. There is no second palette in legacy CSS or additional preflight/reset. Panda v2 global declarations use native properties and explicit `token(...)` references.

The source is [UI03](../docs/reviews/UI03.md), read directly from [Tokens 40:12](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=40-12), Components, ThemeControl 39:94, Day 4:115 and Night 24:177. `panda/figma-reference.json` records 111 variables, 58 actual alias targets, resolved Day/Night values and 14 text styles, with source IDs, Panda paths and original WEB syntax. It is a dated evidence snapshot, not automatic Code Connect; recheck it after design changes.

Generated names use kebab-case: `control.paddingInline` becomes `--spacing-control-padding-inline`, unlike the Figma camelCase WEB proposal. The 24 color primitives use `colors.palette.*`; metrics, sizes and borders use their Panda categories. The snapshot preserves old WEB targets and actual paths without editing Figma. Both actual compressed export stylesheets were checked against all 111 values/aliases and 22 Night/no-JavaScript system roles, with no unresolved role names or token macros.

Fonts are local preference stacks only: Inter, Noto Sans SC and JetBrains Mono fall back to system fonts if unavailable. No font files were downloaded/distributed, no external font requests were added, and exact Figma glyph/layout matching is not claimed. SF Pro is not distributed.

## Theme behavior

`site/theme/runtime.ts` owns the controller; `site/theme/use-theme.ts` exposes `{ preference, resolvedTheme, setPreference }`.

- Preference: `system | light | dark`; resolved mode: `light | dark`.
- Storage key: `btf.theme`, containing only an explicit valid choice. Restoring System removes it.
- Unreadable storage falls back to the system. Failed writes retain an in-memory choice for this document; persistence across reloads is not promised in that case.
- System changes affect System mode only. Storage events synchronize other tabs.
- HTML attributes: `data-theme` and `data-theme-preference`.

`site/app/theme-head.tsx` emits a synchronous self-contained head script that resolves the preference before body parsing. CSS follows system dark mode when JavaScript is unavailable and no theme attribute exists. React reads a stable external-store snapshot with a fixed server snapshot. Only the HTML root uses `suppressHydrationWarning` for this intentional pre-paint attribute change; descendants are not suppressed. The footer's native Appearance select is a foundation validation control, including System reset, not the completed Figma pill component.

Six new Node tests execute the actual bootstrap string in a VM: initial preferences, inaccessible storage, failed writes, system changes/reset, cross-tab changes and stable subscriptions. Export verification additionally executes the script extracted from every actual production HTML head. These checks are not browser paint/hydration acceptance.

The clean installation, both compilers, lint/10 tests, root/Pages build/verify and snapshot evidence are in the [DS01 handoff](../docs/handoffs/developer/DS01.md). Coordinator independently verifies first paint, hydration, refresh, navigation and keyboard behavior in a real browser. Cloud checks remain revision-specific.

A first sandbox-restricted PostCSS worker attempt cached an IPC port error. Local binding was verified; clearing that failed `.next` cache and rebuilding in the authorized environment succeeded with the original Turbopack build. The normal scripts neither switch to webpack nor delete caches on every run.

## Security and delivery boundaries

Next telemetry is disabled in project commands without changing machine settings. Automatic Next agent-rule generation is disabled to preserve project instructions. No API, server-side writes, credentials or analytics were added. The simple SVG icon is original; no reference site's code/assets/brand were reused. Generated output, caches, environment files and `node_modules/` stay out of Git.

Full audit reports seven moderate dependency records from one [minimatch advisory, GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249), through typescript-eslint's development chain. Minimatch 11.0.1 is patched but outside upstream `^10.2.2`. The current configuration does not enable projectService/allowDefaultProject or the advisory's `optimizationLevel >= 2` condition. Coordinator assessed the current usage as non-blocking in TS01; this is not a repair or security guarantee. No forced override or incompatible downgrade was used. Production-only audit returned zero; reassess when usage or upstream versions change.

Each reviewable stage has a separate handoff and Coordinator review. Local success, review acceptance, cloud checks, merge and deployment are separate facts. Necessary npm/browser tools and a small QA01 E2E suite are authorized; GitHub Pages deployment is separately authorized after code/content/QA acceptance. That authorization does not deploy anything during DS01.
