# Milestone 1 Pages release — review

- **Reviewer/date:** Coordinator/Reviewer; 2026-11-17 (Australia/Perth).
- **Gate:** [Developer handoff](../handoffs/developer/pages-release-pipeline.md), manual publication tooling and actual release/recovery.
- **Baseline:** clean main/origin-main `d390f53420f88deda0627328d140be058a91feac`, from reviewed PR20; branch `codex/pages-release-pipeline`.
- **Status:** r1 tooling accepted/merged and first deployment observed; PAGES-02 r2 correction accepted after affected source/browser review. Matching-head integration, public combined-flow recheck and recovery remain open.

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
| PAGES-02 | Public Chromium at1440×900: English entry/index → Chinese → opening → G01 → search 状态 → first result Enter focuses the native heading; clicking Header Appearance then selecting Night finds the actual radio hidden and times out. | Local event trace established stale-scroll dismissal. r2 minimal fix/regression accepted after actual affected review and independent combined-flow test. Exact-head CI/republication/public recheck still required. |

## Frozen r1 accepted

Inspected all eight implementation/guide/runbook files, both meaningful new test modules and the complete handoff at SHA-256 `6662d9fd7df7f25a87ffad24fd37ac30b2f8d7aa8d3ff674d5f40e99f4777d1f`. All eight file hashes in the report independently match. Source gates, separate permissions/needs/environment, artifact boundary, attempt names, exclusive metadata creation and exact public-target/identity checks are consistent with the assignment. No production component/content/route/token, required CI, lockfile or accepted browser-suite change occurred.

Coordinator independently ran all six new unit/real-HTTP regressions; all passed without skips. Independently served the actual55-file Pages export through the existing preview on an ephemeral loopback port and ran the actual frozen smoke helper: six reading routes,11assets and21HTTP requests passed; server closed afterward. The local baseline/test SHA is explicitly distinguished from a future dispatch SHA. Owner's full38-test/strict/lint pass, fresh Pages build/verifier and9E2E logs are local owner evidence, not a cloud workflow result. No unnecessary root rebuild was requested.

Independently matched178 unaffected tracked files and31 recovery hashes against the current baseline. Five changed/new Markdown files have64 resolving local links and no whitespace/newline errors. Official Pages requirements and rerun semantics were checked against linked primary documentation; the runbook accurately distinguishes a rebuilt known-good source from byte-identical artifact recovery, and first-release rerun from restoration of a different version. No hosted workflow/online/recovery outcome is prefilled. The source submission is accepted, PAGES-01 source correction closed, and Developer task/files frozen; Coordinator owns the next exact-head integration and authorized release operations.

## Actual first deployment and affected browser finding

PR21 reviewed head `ff2fb09b03f4187d3839e2999832b7bda1cb4228` passed all three PR jobs/steps in44009718337; actual squash `9d43198684ff276c7992732246661c90dc0fcbaa` passed all three main jobs/steps in44010177077. Local main/origin-main matched and trees compared cleanly. Coordinator then used the existing logged-in browser to deliberately dispatch Pages frommain. Run44010600116 is actual workflow_dispatch attempt1 at that exact SHA; build133796435386 and deploy133797210326 succeeded, with each required step inspected. No bypass or direct-main update occurred.

The public URL is reachable at <https://haixin-zhang.github.io/vibe-coding-then-what/>. Coordinator's actual public smoke passed exact revision/source identity,6routes/11assets/21requests and actual404. Separate Chromium QA passed default entry, language/index availability, both approved source identities, opening→G01 and public Chinese search/native result-heading focus before failing PAGES-02. The radio visibility timeout is retained as a failing interaction; subsequent theme/mobile checks were not completed and no whole browser matrix/recovery success is claimed. Original owner receives the exact flow and source/review boundary. The temporary browser script/screenshots are supplemental under `/tmp/vctw-public-review/`, not published product content.

Follow-up independent direct-route QA at the same public SHA passed Day/Night/System and refresh,768/320px layout and visible keyboard skip focus, actual local code scrolling, bounded table containers, previous/English absence and unknown/English-chapter404. No console/page errors or failed requests occurred. An immediate keyboard-scroll assertion in the temporary harness was corrected to await the actual browser state; that initial harness timing result is not an application defect. A separate combined-flow rerun failed earlier at Search opening, retained as an observation rather than a second proven defect. Developer reports local event evidence for PAGES-02: pending document-scroll notification arrives after the Appearance opens even though the trigger has stopped moving. Its actual fix and red/green regression remain subject to affected review.

## PAGES-02 r2 affected acceptance

Inspected the minimal component diff, full revised nine-case suite, bounded guide paragraph and full appended handoff. Matched submitted component SHA-256 `2f9bbaa702caa36ba0770646591efada9ad3d0d2dd0b1c695cfce1e54f8e49ff`, spec `feb578a02a9a07280d2572bc53893b06ed7c6fb228bdd19088aaa80a0c9f82fd`, guide `901aa00c2f82c4b0f08bccbe1938647b107e6548bcf1e8a2fe50743efee0accb` and handoff `fb14dae891ac925d1394f2c8e519111215485c53d9ea0d66f3db882739c7ddd6`. Actual source ignores only scroll notifications where the opening anchor position is unchanged; real movement/resize still dismisses and focus uses preventScroll. No timer, retry, force-click, dependency or design change.

Coordinator independently ran the changed appearance case against fresh root output: passed search-result heading focus, offscreen Header activation, theme/refresh, actual wheel-scroll dismissal without focus-induced jumping, resize dismissal and320px selection. Inspected the actual narrow screenshot and1440/320 geometry JSON, with no clipping or reported browser errors. Owner evidence separately retains old-component failure, observed event order, full38-test/strict checks and fresh root/Pages9E2E passes. The initial temporary visual-script assertion and unrelated unresolved readiness observation are accurately bounded, not erased or claimed fixed.

Independently compared183 unaffected tracked files and31 recovery hashes; four changed Markdown files have64 valid local destinations. r2 is accepted in source and the owner task is closed/files frozen. Coordinator now handles exact reviewed-head PR/main checks and deliberate corrected release. Full public combined flow and actual recovery remain unclosed; any reproducible further defect returns to Developer rather than being hidden by a forced action.
