# Website Foundation and Strict TypeScript — developer guide

This guide describes **main at `4ff4a1ffd32209e80f64a60bd12766f3864ea489`**, the base of this documentation task. It provides a bilingual static website skeleton, strict TypeScript and CI. It does not yet render manuscripts, provide themes/search/audio, or expose an application backend. There is no verified deployed reading URL.

Design Tokens and Day/Night Themes is preserved in a separate [unaccepted checkpoint](https://github.com/HAIXIN-ZHANG/beyond-the-frontend/commit/4da2578048f8df113fed92d99e084f644a9a788e). Its Panda/codegen commands are **not available on main**. See the [checkpoint handoff](../docs/handoffs/developer/DS01.md), [incomplete review](../docs/reviews/DS01.md) and [Development History](../docs/development-history.md) before resuming it. The current task changes documentation only.

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

`check` runs ESLint, `typecheck` and four Node behavior tests. `typecheck` runs `next typegen site` followed by `tsc --project site/tsconfig.json --noEmit`, so a clean checkout does not need an earlier build to generate route declarations. Static output goes to ignored `site/out/`.

Project links are configured in `site/config/site.ts`; book titles and interface messages are in `site/config/i18n.ts`. No chapter prose is copied into React components. Future content rendering follows the [initial content contract](../docs/content-contract.md) and a separate implementation assignment; that contract is not an implemented renderer.

## Bilingual routes and 404

- English is the default: `/` and `/read/`. Chinese uses `/zh/` and `/zh/read/`.
- Separate root layouts supply each document's `lang`, title and messages. Language switching preserves home/index location; crossing root layouts loads a new document.
- There is no automatic browser-language redirect or persistent language preference.
- Static hosting has one global `404.html`: English with a Chinese explanation and home link. Chinese segment not-found components are available for later use; hosting does not dynamically infer an invalid URL's language.
- The pinned Next.js 16.4.6 implementation uses `experimental.globalNotFound` for multiple root layouts. Root and subpath exports validate it; recheck on framework upgrades. See the [foundation review](../docs/reviews/D02.md).

## GitHub Pages subpath

```sh
npm run build:pages
NEXT_PUBLIC_BASE_PATH=/beyond-the-frontend npm run verify:export
```

`NEXT_PUBLIC_BASE_PATH` is validated at build time. Next applies it to internal links and assets; do not add it manually twice. Build and verification must receive the same value. Explicitly clear it when restoring a root export.

The Pages output has prefixed URLs but no extra `beyond-the-frontend/` directory within `site/out/`. A static preview must mount the directory at `/beyond-the-frontend/` and serve its actual `404.html` with HTTP 404 for unknown paths. `next start` does not run an exported site; `next dev` does not prove production hosting behavior. A production Pages release is separately authorized after accepted code/content/QA, and currently paused.

## Strict TypeScript

The migration covers all 18 handwritten application modules: 15 TSX pages/layouts/components and three configuration TS files. `site/tsconfig.json` uses strict/noEmit, isolated modules, explicit type imports and `skipLibCheck:false`; generated declarations are checked as well. Locale values are `en | zh`, translation structure is checked with `satisfies`, and component props, `ReactNode` and metadata use concrete types. No `any`, suppression or ignored build errors was added.

Pinned development packages include TypeScript 6.0.3, typescript-eslint 8.72.2, React/ReactDOM types 19.3.0 and Node types 24.19.2. Compatibility was checked on 2026-11-15 against official npm metadata and [typescript-eslint's support range](https://typescript-eslint.io/users/dependency-versions/): ESLint 10, Node 24 and TypeScript `>=4.8.4 <6.1.0`. Existing Next.js/React/ESLint versions were retained.

Next/ESLint configuration, export verification and two Node test files intentionally retain `.mjs`. They receive lint/runtime validation, not a claim of static TypeScript checking. Node 24 [native type stripping](https://nodejs.org/docs/latest-v24.x/api/typescript.html) runs their relative `.ts` imports; it does not check types. `erasableSyntaxOnly` avoids an extra transformer/runner. The compiler uses bundler resolution and explicit extensions.

Next regenerates `site/next-env.d.ts`; it is ignored under the [official guidance](https://nextjs.org/docs/app/api-reference/config/typescript#next-envdts), along with `.next/`, `out/` and `*.tsbuildinfo`. Ignoring generated files is not excluding application source from checks.

The Panda checkpoint has an additional strict build-tool compiler and a documented third-party declaration exception. That exception is not part of main's configuration. Its source and evidence remain linked separately rather than copied into this runnable baseline.

## Continuous Integration and Merge Protection

[CI](../.github/workflows/ci.yml) runs on `pull_request` and pushes to `main`, independently of Coordinator's actual local review. It does not deploy or invoke an AI reviewer.

| Required check name | Commands |
| --- | --- |
| `Quality` | `npm ci --no-fund`, then `npm run check` |
| `Static export (root)` | Empty prefix, `npm run build`, `npm run verify:export` |
| `Static export (pages)` | `/beyond-the-frontend`, `npm run build:pages`, `npm run verify:export` |

The export jobs wait for Quality, then run independently with fail-fast disabled. Each build/verify pair shares its environment, with root explicitly clearing inherited prefixes. New PR commits cancel older runs for the same PR. Reproduce all checks with:

```sh
NEXT_PUBLIC_BASE_PATH='' npm run check
NEXT_PUBLIC_BASE_PATH='' npm run build
NEXT_PUBLIC_BASE_PATH='' npm run verify:export
NEXT_PUBLIC_BASE_PATH=/beyond-the-frontend npm run build:pages
NEXT_PUBLIC_BASE_PATH=/beyond-the-frontend npm run verify:export
```

The hosted runner is `ubuntu-24.04`, with actual Node/npm versions printed. Node 24 patches and runner images are not immutable. Official Actions are pinned to full commits verified on 2026-11-15:

- [checkout v7.0.1](https://github.com/actions/checkout/releases/tag/v7.0.1): `3d3c42e5aac5ba805825da76410c181273ba90b1`.
- [setup-node v7.1.0](https://github.com/actions/setup-node/releases/tag/v7.1.0): `949feb2413d6458794dcd2491c4babbbce0c15c1`.

Their tagged runtime/docs specified Node 24 and Actions Runner ≥2.327.1. No local/self-hosted runner was configured for this. Permissions stay `contents:read`; checkout does not persist credentials. There are no private secrets, registry credentials, automatic package caches, artifact uploads or release permissions. The workflow does not use `pull_request_target` or interpolate PR/issue prose into shell commands.

Required checks were enabled only after successful cloud execution, with up-to-date branches required. Each revision still needs its own checks. See the [CI review](../docs/reviews/CI01.md) and [dated access baseline](../docs/security/access-policy.md); a local pass alone does not establish Linux/cloud success or saved server settings.

## Evidence and limits

Historical foundation and TypeScript runs passed clean installation, lint, four behavior tests, strict coverage and both static exports: five HTML pages and 73 local references each. Export checks include languages, titles, correct switch destinations, bilingual 404/noindex and actual local asset paths. Coordinator independently checked the actual files and compared all 18 migrated runtime/JSX modules after extension normalization. The [TypeScript review](../docs/reviews/TS01.md) records its PR/cloud acceptance; the [foundation review](../docs/reviews/D02.md) retains incomplete browser checks.

Full dependency audit recorded seven moderate dependency entries from one [minimatch advisory](https://github.com/advisories/GHSA-g3hv-75wg-m249) in the typescript-eslint development chain. Patched 11.0.1 is outside upstream `^10.2.2`. The inspected configuration did not enable projectService/allowDefaultProject or the advisory's high-optimization trigger. Coordinator judged current usage non-blocking; it is neither repaired nor guaranteed safe. Production-only audit was zero. Reassess on upstream/configuration changes; no forced override or incompatible downgrade was used.

Project commands disable Next telemetry without changing machine settings, and automatic agent-rule generation is disabled. No API, server writes, credentials, external fonts or analytics were added. The simple SVG icon is original. Internal directories (`book/`, `docs/`, `.local/`, `.git/`, dependencies) are not a public content source; generated output/caches/env files stay out of Git.

Necessary npm/browser tools and a small future E2E suite are authorized. The temporary browser harness has only passed syntax checking; no accepted screenshot set or completed first-paint/hydration/keyboard gate is claimed. Further implementation/testing/deployment is paused during this documentation priority. Review, cloud checks, merge and deployment remain separate facts.
