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
