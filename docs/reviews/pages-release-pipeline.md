# Milestone 1 Pages release — review

- **Reviewer/date:** Coordinator/Reviewer; 2026-11-17 (Australia/Perth).
- **Gate:** [Developer handoff](../handoffs/developer/pages-release-pipeline.md), manual publication tooling and actual release/recovery.
- **Baseline:** clean main/origin-main `d390f53420f88deda0627328d140be058a91feac`, from reviewed PR20; branch `codex/pages-release-pipeline`.
- **Status:** r1 source accepted after actual review; exact-head CI/integration, actual public release and recovery remain outstanding.

## Scope and acceptance

Inspect a lean manual-only main release, least-privilege build/deploy separation, exact source identity, static export boundaries, verified official action pins, existing checks and meaningful metadata/smoke tests. Deployment follows matching-head PR/main CI and deliberate Coordinator dispatch, never an unreviewed merge event. No arbitrary revision input, privileged untrusted checkout, secrets in artifacts or protection weakening.

Verify the actual online URL, source identity, approved chapter hashes, assets/subpath/404, reading/search/theme behavior and bounded responsive layout. Exercise a real known-good restore and return to the intended final release; a runbook alone does not prove rollback. Separate source review, cloud checks, merge, deployment and observed recovery. Return concrete findings to Developer; assign factual public-copy changes to Writer after successful observation.

## Findings and execution

Pending actual submission. The [board](../coordination.md) owns current assignments; owner handoff owns implementation evidence. PR20's verification acceptance does not accept this new pipeline.

Prerequisite integration independently verified: PR20 reviewed head `3546952ab8b6e889d08fb808c0d9de1e16ce0613`, successful PR run44004294695, squash `d390f53420f88deda0627328d140be058a91feac`, successful main run44004768738. All three jobs and actual build/verifier/Chromium/E2E steps passed on each run; failure-only uploads skipped normally. Local main/origin-main were fetched, tree-compared with reviewed head and verified equal/clean before creating the new branch. No protection bypass or deployment occurred.

Preliminary source inspection finds manual/main/repository guards, immutable checkout identity and separated read-only build versus Pages/OIDC deploy permissions. Coordinator independently queried official tag refs: upload-pages-artifact v5.0.0 resolves to `fc324d3547104276b827a68afc52ff2a11cc49c9`; deploy-pages v5.0.1 resolves to `368f82528645a54fb793d4d04e342629a3f51346`. These match the current source pins. Final frozen-file review and actual cloud/public behavior remain unaccepted.

| Finding | Original-owner correction | Status |
| --- | --- | --- |
| PAGES-01 | All-job recovery must upload/deploy the current attempt's artifact unambiguously. Both actions originally used the constant default name; the pinned uploader has no overwrite input. Set matching trusted attempt-specific upload `name` and deploy `artifact_name`, preserving least privilege. This is a source ambiguity, not an observed hosted collision. | Closed in source: both inputs are `github-pages-${{ github.run_attempt }}` and runbook matches. Actual rerun/public recovery remains a separate execution gate. |

## Frozen r1 accepted

Inspected all eight implementation/guide/runbook files, both meaningful new test modules and the complete handoff at SHA-256 `6662d9fd7df7f25a87ffad24fd37ac30b2f8d7aa8d3ff674d5f40e99f4777d1f`. All eight file hashes in the report independently match. Source gates, separate permissions/needs/environment, artifact boundary, attempt names, exclusive metadata creation and exact public-target/identity checks are consistent with the assignment. No production component/content/route/token, required CI, lockfile or accepted browser-suite change occurred.

Coordinator independently ran all six new unit/real-HTTP regressions; all passed without skips. Independently served the actual55-file Pages export through the existing preview on an ephemeral loopback port and ran the actual frozen smoke helper: six reading routes,11assets and21HTTP requests passed; server closed afterward. The local baseline/test SHA is explicitly distinguished from a future dispatch SHA. Owner's full38-test/strict/lint pass, fresh Pages build/verifier and9E2E logs are local owner evidence, not a cloud workflow result. No unnecessary root rebuild was requested.

Independently matched178 unaffected tracked files and31 recovery hashes against the current baseline. Five changed/new Markdown files have64 resolving local links and no whitespace/newline errors. Official Pages requirements and rerun semantics were checked against linked primary documentation; the runbook accurately distinguishes a rebuilt known-good source from byte-identical artifact recovery, and first-release rerun from restoration of a different version. No hosted workflow/online/recovery outcome is prefilled. The source submission is accepted, PAGES-01 source correction closed, and Developer task/files frozen; Coordinator owns the next exact-head integration and authorized release operations.
