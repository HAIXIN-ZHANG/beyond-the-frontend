# Public release closeout — recovery and affected verification

Owner: Developer. Revision: r1. Date: 2026-11-20. Status: complete and frozen for affected Coordinator review; Git integration and exact-head cloud checks remain pending.

## Assignment and baseline

Coordinator assigned recovery of the reviewed seven-line palette fixture test correction and the narrowly verified desktop Safari status sentence. Allowed files are this handoff, `tests/e2e/reader.spec.mjs` and `site/DEVELOPMENT.md`. No product runtime, dependency, workflow, manuscript, shared checkout or Git mutation is assigned. The [board](../../coordination.md) and [Developer role](../../developer-sync-prompt.md) were read; this explicit recovery assignment supersedes the baseline board's older execution checkpoint.

Actual workspace is the persistent project-local `.local/worktrees/release-closeout-20261120`, branch `codex/m2-release-closeout-20261120`, HEAD `75beda63ea3064257b41ce0a8a71c57e32f517ac` (existing PR36 head). Initial working status contained only a Coordinator-provided untracked `node_modules` symlink to the existing matching installation; preserve it and exclude it from integration. Lockfile SHA-256 is `7d02a83aa8f685cca8b806e297428961f33f5efc3438ebc7ec66ba655c81b53b`. Node24.14.1/npm11.11.0; no installation is needed.

## Recovery facts and evidence boundary

The old temporary execution worktrees, palette trace/experiment files, final root/Pages logs and updated external handoff are no longer present. Stale Git worktree metadata is not a checkout or test result. Project-local recovery records preserve the public release outcome and PR36 blocker, but not the later palette experiment or final repeat logs. Therefore this report does not claim those missing local files were re-read or that any historical ten-repeat result establishes current completion.

Historical diagnosis identified PR36 run44498084409/job135470895309, artifact14516606501 (recorded ZIP digest `ad0d7d25cdc04cc082564b9cb791403a956c4b1d328b2e5b8bba88f7e1c3d597`): React418 followed insertion of a QA fixture into React-managed `main`, after which the fixture disappeared. The previously observed controlled comparison distinguished pre-hydration insertion from a real Appearance handler confirmed before insertion. The original artifact/controlled results are not locally available in this recovered workspace; their earlier observations are history, not a new experiment. No runtime failure is being silently waived.

The exact final files can be reconstructed from retained Git source plus the previously reviewed changes and checked against the recorded SHA-256 values. The test correction first performs actual Appearance→Dark interaction and requires both explicit `data-theme-preference=dark` and effective `data-theme=dark`, then closes the panel before injecting the original fixture. The explicit preference cannot be satisfied merely by an OS-dark bootstrap. No private React marker, sleep, ignored hydration error, weaker contrast threshold or retry is introduced. All original twelve combination/hover/disabled/focus/neutral-warning/error assertions remain intact.

The DEV correction only records Coordinator's targeted **desktop** Safari directory/search/Continue/appearance checks; physical devices, mobile Safari and assistive technology remain unrun. No broad Safari certification is implied. The published source remains `3b359160d9dcd3911b7d9315c95e865fcabdec94`; these doc/test changes do not dispatch another release.

## Acceptance and next boundary

Restore the exact reviewed file identities; run fresh lint/type/Node checks and root/Pages palette repeats (five per path), preserving actual results and missing historical evidence. Keep runtime/manuscript/toolchain bytes unchanged. Durable generated evidence belongs under ignored `.artifacts/public-release-closeout/` in this workspace. Freeze the three assigned deliverables and send exact hashes/checks to Coordinator; review, new-head cloud CI and PR integration remain Coordinator-owned.

## Restored revision and actual checks

Both restored files match their exact previously reviewed byte identities:

| Deliverable | Final SHA-256 |
| --- | --- |
| `tests/e2e/reader.spec.mjs` | `09c774b8d3c5001e9ae13f2daab4d5466dce21372cd6665517712f0cf78362a4` |
| `site/DEVELOPMENT.md` | `5a0d4a15443827a982455f9da2e6267a48d71c69dd703b36a7f8268b278df683` |

The test delta is exactly seven added lines at the palette case; the only DEV delta from this PR36 baseline is the top Safari status sentence. No runtime or configuration change was necessary. This evolving handoff is the third assigned deliverable; its final digest is sent separately to avoid a self-referential hash.

All results below were actually produced on 2026-11-20 against this restored final revision. They do not reuse the unavailable temporary-directory repeat evidence.

| Command/check | Actual result | Durable evidence relative to workspace |
| --- | --- | --- |
| `npm run check` | First sandbox attempt passed lint/types but four existing local HTTP tests failed with `listen EPERM 127.0.0.1`; no test assertion was relaxed. | `.artifacts/public-release-closeout/check.log` |
| `npm run check` with authorized local execution permissions | Passed ESLint, application/Panda strict type checks and all60 Node tests. | `.artifacts/public-release-closeout/check-final.log` |
| `NEXT_PUBLIC_BASE_PATH='' npm run build` | Normal Turbopack could not resolve the existing `node_modules` symlink outside its workspace root. This is a local hermetic-root restriction, not a passing standard build. | `.artifacts/public-release-closeout/root-build.log` |
| `NEXT_PUBLIC_BASE_PATH='' npm run build -- --webpack` | Passed using Next's existing local CLI option; no config/dependency/source alteration. | `.artifacts/public-release-closeout/root-webpack-build.log` |
| `NEXT_PUBLIC_BASE_PATH='' npm run verify:export` | Passed8 documents/201 local links-assets,28 Chinese search sections and0 English. | `.artifacts/public-release-closeout/root-verify.log` |
| `NEXT_PUBLIC_BASE_PATH='' npm run test:e2e -- --grep 'V2 twelve appearance' --repeat-each=5 --output=.artifacts/public-release-closeout/root-repeat` |5/5 passed in13.4s, each covering all12 appearance/accent combinations and the unchanged error/contrast/state assertions. | `.artifacts/public-release-closeout/root-repeat.log` and `root-repeat/` |
| `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run build -- --webpack` | Passed on the same unchanged runtime/toolchain with the project prefix. | `.artifacts/public-release-closeout/pages-webpack-build.log` |
| `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run verify:export` | Passed8 documents/201 local links-assets,28 Chinese/0 English sections and actual prefixed targets. | `.artifacts/public-release-closeout/pages-verify.log` |
| `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run test:e2e -- --grep 'V2 twelve appearance' --repeat-each=5 --output=.artifacts/public-release-closeout/pages-repeat` |5/5 passed in13.4s with the same full palette assertions. | `.artifacts/public-release-closeout/pages-repeat.log` and `pages-repeat/` |
| `git diff --check` and frozen identity check | Passed. Restored test/DEV hashes above remained unchanged throughout both repeat runs. | Recorded in this handoff; Coordinator also independently reported55 relative links/21 retained anchors checked. |

The201-reference local Webpack export differs from the old Turbopack artifact layout; the actual verifier passed it rather than assuming an old reference count. Normal cloud CI continues to use the unmodified standard build commands and remains the final build/merge gate. Local Webpack success does not establish new-head Linux/cloud success. No new full44-case browser run is claimed in this bounded recovery: only the freshly executed affected five repetitions on each deployment path, plus the full lint/type/Node checks, are recorded.

## Ownership, limitations and recovery checkpoint

Coordinator concurrently restored three historical review appendices (`m2-exact-title-search.md`, `v2-home.md`, `v2-reader-layout.md`) and created `docs/reviews/public-release-closeout.md`. They were preserved and excluded from Developer's delivery hashes; their presence in working status does not expand Developer ownership. The pre-existing untracked dependency symlink also remains untouched and must not be staged as product code.

The exact released runtime remains unchanged. No dependency install, Git write, external data transmission, website mutation, UI-polish implementation or deployment occurred. Source-level measurement design remains accepted only as design; no provider or collection activation is authorized by this repair.

**Done:** exact test/doc restoration, durable handoff, fresh60-test check and affected root/Pages5/5 with logs and case screenshots. **Not recovered:** old temporary raw cloud trace, controlled-experiment files or old repeat logs; the historical diagnosis is explicitly labelled above. Current affected runs do not certify every browser, mobile hardware or assistive technology.

`site/out` currently contains the verified Pages-prefix export. Both Developer Playwright invocations completed and their managed preview processes exited; Coordinator was notified before its independent loopback checks so there is no intentional concurrent use of port4179. Rebuild before changing export prefixes. The candidate stays on `codex/m2-release-closeout-20261120@75beda63ea3064257b41ce0a8a71c57e32f517ac` with only the assigned Developer files uncommitted in its ownership scope.

Next boundary: Coordinator reads this final revision, verifies affected behavior and manages the existing PR's update/required exact-head cloud checks. No executor self-approval or new runtime task follows from this delivery.
