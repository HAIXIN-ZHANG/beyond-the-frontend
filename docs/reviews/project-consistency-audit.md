# Project consistency audit — Coordinator review

Started: 2026-11-16; final review: 2026-11-17 (Australia/Perth). Owner: Coordinator/Reviewer. Status: Accepted final bounded audit/correction bundle; owner tasks closed. Exact-head CI/integration are separate subsequent facts.

## Scope and baseline

The author requested a whole-project inspection of current documents, project structure, code/framework, Markdown and README. Correct evidenced bounded defects; retain material future work in its existing owning plan. Do not expand into new features, chapter prose, framework replacement or deployment. Writer and Developer own their respective [editorial](../handoffs/writer/project-consistency-audit.md) and [technical](../handoffs/developer/project-consistency-audit.md) submissions; Coordinator owns actual findings, cross-source review and Git integration.

Actual checkout: `/Users/haixin/Desktop/code/vibe-coding-then-what`; branch `codex/project-consistency-audit`, based on main/origin-main `78488012044e0a8fd8e4946f1abc72e1e2b084c9`. PR18's reviewed head `4b6a2e11b9278c500dccb66b068296e919745999` passed all three jobs and steps in run43899041187 before the authorized squash. Accepted PR tree matched fetched main; this audit's initial handoffs were preserved when switching branches. Later integration and main CI remain separately evidenced.

## Review requirements

Independently inspect owner diffs and evidence, current versus dated status, real command/config/route/content behavior, Markdown links/anchors, minimal source fixes, preserved history/manuscript hashes and current authority. Use React/Next.js review guidance where applicable without speculative refactoring. Check actual tests/build/artifacts for affected code; documentation-only checks are not browser or release acceptance. Return findings to original owners and re-review changed submissions.

No public release, Figma mutation, access-setting change or automatic manuscript intake follows from this assignment. Existing no-deployment hold and first-delivery Release Readiness remain in force. Review outcome, exact-head CI, merge and deployment are separate facts.

## Writer r1 — accepted

Inspected the complete actual tasks/editorial-brief diff, the frozen handoff and the specific opening/content-framework acceptance references. W-PC-01–03 are verified: completed framework planning was presented as pending, the integrated source contract was described as future implementation, and the opening's accepted r2 orientation was omitted from active provenance. The bounded paragraph corrections now point to actual review/contract/integration evidence without altering a manuscript, inventing completed English text, ticking historical criteria or authorizing new writing.

Independent byte comparison confirms unchanged task gate/adaptation/recovery suffix and heading sequence, and unchanged opening/G01, outline, F01 analysis, chapter workflow/template, README and selected license bytes. Submitted hashes matched: tasks `6de20bdb52ebe07efdbd03d8908e6a0a0180b03688f4a29bbf4330d7345e4774`; editorial brief `0c14a2c1598b17b44291c56905cde9a2d182f73a441662fcfbfb40e6c10e6d7b`. Writer's final structural scan reports101 Markdown files/650 relative destinations/11 anchors; this is owner evidence, distinct from Coordinator's earlier100-file/635-destination scan and the final combined check to follow.

No required Writer revision remains. Writer task accepted/closed, files frozen; technical review and scoped integration remain pending. The accurate reader-facing README, existing roadmap and authority links need no cosmetic rewrite or second backlog.

## Technical findings and independent checks

| Finding | Actual issue and impact | Original owner / correction criterion | State |
| --- | --- | --- | --- |
| AUD-01 | Next configuration accepts `/` as root, but SearchControl concatenated the raw prefix into index/result URLs. Independently reproduced `//search-index/zh.json` and `//zh/read/...` resolving to foreign origins. | Developer: reuse normalized deployment-prefix logic at both literal URL sites; verify default/empty/root alias/repository/nested prefixes and unchanged heading hashes. | Closed: actual correction and frozen hashes inspected; all29 tests independently passed; three-variant build/browser evidence rechecked |
| DOC-AUD-01 | The maintained command guide hardcoded a total and category test counts, requiring unrelated manual edits on each added regression. | Developer: describe stable coverage areas in the current guide; retain actual test counts in dated handoff/CI evidence. Guide-only revision needs no runtime rerun. | Closed: original owner changed the guide to stable coverage areas; final wording/hash rechecked |

Coordinator inspected the current client/server composition, allowlist/parser/link/search/share path, deployment/i18n configuration, theme lifecycle and recipes/configuration. No speculative framework replacement, generalized schema or component rewrite is justified by this inspection. Old reviews/handoffs, content input/diagram mappings and the two approved manuscripts remain preserved. All78 previously tracked files under reviewed-source/evidence/content/Panda/license groups independently match the audit baseline; all31 ignored recovery hashes match their original manifest.

The current dependency observation remains bounded: Coordinator read the [maintainer advisory](https://github.com/isaacs/minimatch/security/advisories/GHSA-g3hv-75wg-m249) and actual installed typescript-estree/minimatch call sites. The advisory describes attacker-controlled patterns at optimization level >=2; the inspected call passes only `dot:true`, the installed default is1, and this project's ESLint configuration does not enable projectService/allowDefaultProject. This supports a lower-exposure inference for the inspected lint configuration; it is not a patch, exploitation test or universal clearance.

## Developer r1 — accepted after affected guide revision

Inspected the complete four-file source/test/guide diff and final handoff. The browser-safe helper reuses existing validation at both literal URL consumers without changing Next Link handling, routes, heading identities or content schema. Independent old/new URL probes and all29 Node tests passed. Coordinator also ran the final root-alias artifact verifier: seven named page targets,128 local references, zh20/en0 and all real search targets passed. Read owner lint/typecheck and three build/verifier logs; original EPERM/DNS failures remain distinct from successful authorized retries.

Inspected the actual browser harness and all12 results: nine UI cases and three HTTP404 checks across root, Pages and root alias. Assertions cover actual same-origin index/result paths, encoded heading/destination focus, cancellation focus, absent-English/no-index requests and console health. These are owner-executed local headless Chrome checks inspected by Coordinator, not an independently repeated browser run, permanent E2E or public hosting acceptance. All54 hashes in each of three export snapshots independently match. Physical mobile/IME, other engines, full accessibility/performance and unchanged clipboard/correction browser flows were not rerun.

Final SHA-256 manifest: deployment helper `99a8e2a00fa0ed2ca9564213ab552a712904dfe573d13b9e0538fa2954eb7b8b`; SearchControl `63aa812ccee0695950a0402fb875f289863954e83c9d56307795cfab6dc7337a`; deployment tests `e6a0ef1fb6c41cbe22343b4d02c898c1b589b020903d770288d001563f35f7e8`; operating guide `ba15432782c7ff94197613834489394fa61120d6c21491192066e7633204a309`; Developer handoff `265736de006ac8d622ed4d6201032cedaa3aeb996ab1f8848a47fc15f34b6dad`; Writer handoff `8f6fe4e68d78b8b95eb5ee5ded876fa3e528336910dcb5d2fce72719b5cd69d5`. DOC-AUD-01 returned to the original owner, was corrected and re-reviewed; unchanged runtime checks were not rerun. No required correction remains. Developer task closed and files frozen.

## Dependency disposition and remaining scope

Coordinator inspected actual full/production-only audit JSON, effective parser options and official npm latest metadata. Full audit has seven moderate package records from one advisory, zero high/critical; production-only has zero findings. Installed/latest inspected typescript-estree8.72.2 still requires minimatch `^10.2.2`, outside patched11.0.1's major version. The suggested downgrade is not a validated compatible repair. No override, downgrade, install or dependency change is accepted here.

The unchanged advisory is non-blocking for this bounded corrective PR under the inspected configuration and existing lower-exposure rationale. It remains unresolved maintenance, not a blanket safety or release decision. Reassess on upstream/project-service/glob changes and validate a compatible repair within existing first-delivery Release Readiness. Permanent E2E/CI, gated Pages CD, real online smoke/rollback and release holds remain. Later prose, palettes and reading features stay in the existing roadmap; no duplicate backlog, speculative framework migration or broader design work is introduced.

All164 unaffected tracked files and31 recovery hashes independently match their original evidence. Current board corrections distinguish completed integrations from present work, preserving frozen historical judgments. Final combined Markdown/whitespace checks and cloud integration evidence remain separate from source acceptance.

Final combined document scan:103 Markdown files,657 local destinations and11 heading anchors; no missing targets/anchors. `git diff --check` passed. A read-only AGENTS → role → board → scoped review/handoff walkthrough identifies the current accepted bundle, closed owner tasks and pending CI/integration without private-chat history; stale older baseline/integration descriptions are now labelled historical or closed. These checks do not claim reader research, online deployment or untested runtime behavior. Coordinator may integrate only the accepted bounded bundle through matching reviewed-head Quality/root/Pages checks under the existing authorization.

Accepted payload `78b44a58af2ba232af9673e3d665aa23de26e7a4` is actually tracked in [PR19](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/19), based on main `78488012044e0a8fd8e4946f1abc72e1e2b084c9`. Only Coordinator review/board pointers follow; executor payloads stay frozen. The PR execution record owns actual final-head checks, squash and main reconciliation rather than prefilled future results.
