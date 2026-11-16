# Beta 1 tokens and theme foundation — review

- **Date/reviewer:** 2026-11-16, Australia/Perth; Coordinator/Reviewer.
- **Gate:** [Developer handoff](../handoffs/developer/beta1-theme-foundation.md), selected DS01 source reuse on main `eb822357b6bf1cafe090508254b1aa6c3e71ce8f`; no whole-checkpoint merge.
- **Reviewed scope:** Panda config/token/reference/global styles, dependency and compiler boundaries, production head/bootstrap/controller/hook/native select, layout/messages, export assertions, theme tests and developer guide. Separately inspected the minimal content-contract status/provenance/current-hash update. Opening prose/outline have their [own actual review](beta1-opening-alignment.md).
- **Outcome:** Accepted after frozen r1 source/handoff and separate metadata review. No required revision remains. This is not cloud CI or merge acceptance.
- **Next boundary:** Verify the frozen deliverable, then create the authorized scoped PR and check its exact head before squash merge. Header picker and reading components require the next assignment. No deployment.

## Actual inspection and independent evidence

Read the actual implementation/configuration/tests and complete relevant diffs. One self-contained production-head bootstrap owns preference/effective appearance, one external-store hook subscribes to that controller, and a native footer select exposes System/Day/Night. The footer select is an explicitly scoped foundation control, not the final UI04 header picker. Storage failure preserves in-memory choices; System removes the saved override. Expected document attribute differences are isolated at the root hydration boundary.

- Independently ran `npm run check`: lint, generated route declarations, strict application compiler, isolated strict tooling compiler and **11 tests passed**. Application `skipLibCheck:false` remains unchanged; no application `any`/ignore escape was introduced.
- Independently resolved **111 unique mapped variables, 58 aliases and 80 mode/geometry edges**, with no missing/mismatched values against the saved Figma reference; 14 styles remain. Legacy BTF identifiers preserve compatibility. Read the generated-CSS evidence separately; a mapping file is not Code Connect publication.
- Executed the actual export verifier against each fresh copied production export: **five HTML pages and 73 local links/assets each**, empty prefix and `/vibe-coding-then-what`. It executes the emitted pre-body bootstrap as well as checking actual routes/assets/languages/metadata/current links.
- Independently ran **24 Playwright cases** against both served exports: preference versus effective mode, saved Day/Night after refresh, real cross-tab change/reset, same-origin iframe sessionStorage isolation, both appearances at **1440/1024/768/390/320**, visible select focus, existing bilingual routes and no application console/page errors. Read snapshots, verified meaningful page identity and inspected 1440px Day and 320px Night screenshots. No blank page, error overlay or horizontal page overflow was observed.
- Browser plugin/skill was unavailable; used the already installed Playwright CLI in a separate local session, without a personal browser profile or deployment. Temporary evidence is under `/tmp/vctw-coordinator-qa/`; key outcomes and limits are recorded here for recovery.
- Independently verified the ignored recovery manifest: all **31 preserved generated files** remain byte-identical. Original DS01 branch/checkpoint remains unaccepted as a whole.

Developer additionally ran the full two-build workflow, **26 browser matrix cases**, isolated pre-framework first-render/paint observation and native keyboard-choice checks. Inspected those reports and production-head evidence; their intentionally aborted framework requests are test instrumentation, not ordinary-route console health. These executor results are distinct from the 24 independent Coordinator cases. Local Paint Timing is evidence of observed theme state, not a performance benchmark or guarantee on all devices.

## Findings and limits

| ID | Severity | Actual issue | Owner/criterion | Closure |
| --- | --- | --- | --- | --- |
| THEME-01 | Required correctness revision | Matching sessionStorage/clear events could override the localStorage-backed preference | Developer: guard storage area without throwing on unavailable storage; preserve real localStorage synchronization | Closed: inspected guarded initial reference and new regression; all 11 tests pass; real iframe and cross-tab checks pass independently |

Panda's installed type package has four ambiguous internal re-export diagnostics when full third-party declaration checking is enabled at the tooling boundary. The separate strict Panda program documents its `skipLibCheck:true` exception; the application/generated declarations retain full checks. Inspected the diagnostics and reported negative probes. This is an upstream limitation, not a repaired dependency or permission to weaken future application checks. System font fallbacks are intentional; this stage adds no external font requests.

Checks cover local Chromium and these shell routes; this is not Safari/Firefox, physical-device, full accessibility certification or a chapter-reader acceptance. Search, reader rendering, final component recipes, audio and AI features are absent. Existing development-only dependency advisory remains disclosed in the guide; no unrelated forced dependency override was added.

## Integration safeguards

Live reads confirmed public repository/default `main`, squash merging and auto-merge disabled. The app connector could not read administration settings (403); a read-only request using the existing Git login confirmed admin-enforced PR protection, strict required Quality/root/Pages checks from GitHub Actions app 15368, linear history/conversation resolution, and force-push/deletion disabled. No settings were changed.

## Final frozen recheck

Read the complete frozen r1 handoff, including 26-case report, four actual paint supplements and two final keyboard checks; earlier unsuccessful locator/menu attempts are explicitly excluded from passes. Compared all 21 implementation/guide/contract files against the independent-QA digest snapshot: unchanged. Snapshot JSON SHA-256 is `e8504ebcca0991b292e2d9ba3badd1272bdbf9a1594ea640c74b3848b09be7bb`; the handoff is the separate 22nd Developer path, with its exact committed revision established by the forthcoming PR. All changed formal Markdown local links resolve and whitespace checks pass.

Inspected the content-contract three-line diff: current opening hash matches the independently accepted r2, both historical hashes are preserved, G01 and every rendering/route/allowlist requirement remain unchanged. The opening/outline have separate acceptance. The retained moderate development-only advisory is non-blocking for this inspected configuration; it remains unresolved and is not a claim of general safety.

PR/head/checks/merge are not yet available at this review checkpoint. Do not infer them from local acceptance. Coordinator must recheck the frozen files, exact PR head and all required cloud jobs/steps; final actual results belong to the PR execution record. No deployment was performed.
