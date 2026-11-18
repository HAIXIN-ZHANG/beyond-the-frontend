# Reviewed book and planning batch — integration review

Date/reviewer: 2026-11-18 Australia/Perth; Coordinator. **Accepted for authorized PR and matching-head CI; merge remains conditional on those checks.** The author explicitly authorized closing and merging the current reviewed batch before existing-manuscript corrections and the V2 reader upgrade. No deployment or new content intake is included.

## Scope and revision

Shared source checkout remains dirty `main@95a6bec69e26cbe13fe9f5d9433ee91e07632091`; all existing changes are preserved. Actual remote main refreshed to PR26 squash `5a0c2d8930962a4e80b9973669fee6d4df56aaad`. The isolated integration workspace is `/private/tmp/vctw-book-planning-closeout`, branch `codex/reviewed-book-planning-closeout`, based on that revision. The runtime quality/F01 changes already merged in PR26 are byte-identical and excluded from this PR's delta.

The package retains accepted P8.10/P3.2 Chinese originals, separate voice/introduction revisions, editorial/outline and Milestones 2–4 planning, both retained cover colourways and their actual handoff/review evidence. Canonical earlier manuscripts, runtime manifest, packages/lockfile, runtime code, CI/deployment and access configuration remain unchanged. Candidate covers are versioned raster references only, not editable print masters or reader integration. Pending Figma cover synchronization remains pending.

[Positioning review](positioning-uncertainty.md), [voice review](existing-sources-voice-manuscripts.md), [introduction review](INTROM.md), [P8.10 review](P810M.md), [P3.2 review](P32M.md) and [Milestones alignment review](milestones-2-4-alignment.md) preserve actual inspections and original-owner feedback. This packaging pass verifies continuity with those reviewed bytes, not a new claim of independent reader research or a fresh review of every technical source.

The Writer's narrowly assigned current-count update is in [its handoff](../handoffs/writer/reviewed-source-count.md). Five reviewed Chinese originals, three manifest entries, last-verified two public entries and zero English manuscript bodies are distinct counts. Separate revisions do not replace canonical sources or add originals. The next byline/AI-disclosure and V2 tasks are deliberately outside this integration delta.

## Inspection and findings

Coordinator compared source/document paths against actual remote main, matched the current book/assets/technical-guide payload hashes to their recorded accepted identities and checked the selected package boundaries. Initial link inspection found the old introduction assignment anchor was lost when the board section was renamed completed; restore that compatibility anchor in the Coordinator-owned board. Preserve original historical bodies rather than rewriting their dated acceptance.

Required local checks, final payload identities, affected Writer review and actual cloud/merge evidence will be recorded only after completion. Ignored local recovery snapshots, dependency copies, build output, screenshots/logs and private chat identifiers are excluded.

## Access and execution limits

Live repository metadata confirms public visibility, default main and squash as the sole merge method. Live branch read confirms protected main with Quality, Static export (root) and Static export (pages) required for everyone. The administration-only full branch-protection read returned403 (Resource not accessible by integration); force-push/deletion/admin flags were not freshly verified through that endpoint. No control was changed or weakened. The dated [access policy](../security/access-policy.md) remains evidence, not a claim of fresh full verification.

An initial sandboxed npm check failed only in existing tests that bind localhost (EPERM); repeat under the authorized local execution environment. Initial sandboxed Next.js production build also failed under environment restrictions; preserve logs and report the actual successful rerun separately. No dependency installation is needed; installed dependencies were filesystem-cloned from the shared checkout.

## Recovery and next boundary

Keep both workspaces and the shared ignored recovery snapshot under `.local/recovery/reviewed-book-planning-closeout-2026-11-18/`. Coordinator completes affected review, local checks, scoped PR and matching-head cloud CI, then permitted squash merge under the author's current authorization. Exact proposed head and actual merge SHA belong in the associated PR execution record; neither can be predicted within its own commit. Deployment is not assigned. Existing-manuscript corrections and V2 style/layout follow in separate bounded assignments after merge.

## Final affected review and local package acceptance

Read the actual six-document incremental Writer delta against the frozen pre-edit copies, not the entire accumulated main diff. Matched all six submitted hashes from the handoff; only current original counts, P3.2 source/review links and two inventory rows changed. The dated P8.10 fourth-source ordinal stays intact. Independently checked every previously snapshotted shared path outside those six documents and the Coordinator-owned board: no unexpected change. Historical M2 and Chinese checkpoint bodies remain intact. **Factual closeout accepted; Writer assignment closed.**

The initial package contains48 source/document/asset paths differing from remote main; all current book/asset/technical-guide hashes appear in the corresponding prior accepted review records. New handoff and this Coordinator review are the only additional paths. The restored introduction compatibility anchor closes the discovered broken links. Full local-link/anchor and final source-boundary results are appended below after the final synchronization.

| Actual local check in isolated workspace | Result |
| --- | --- |
| `npm run check` | lint, strict types and44/44 Node tests passed after allowed loopback execution |
| `NEXT_PUBLIC_BASE_PATH='' npm run build` | fresh root static build passed after clearing only the isolated failed `.next` cache and rerunning with local execution permission |
| `NEXT_PUBLIC_BASE_PATH='' npm run verify:export` |8 pages,165 local links/assets, zh29/en0; indexed targets valid |
| `NEXT_PUBLIC_BASE_PATH='' npm run test:e2e -- --output=/private/tmp/vctw-book-closeout-root-e2e` |16/16 maintained Chromium cases passed |
| `npm run build:pages` | fresh Pages-subpath static build passed |
| `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run verify:export` |8 pages,165 local links/assets, zh29/en0; indexed targets valid |
| `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run test:e2e -- --output=/private/tmp/vctw-book-closeout-pages-e2e` |16/16 maintained Chromium cases passed |

These are integration regression checks of unchanged runtime/source intake, not V2 visual acceptance. The maintained suite exercises search/count/Unicode, narrow outline/focus, both locales, appearance/persistence and actual chapter layouts at1440/390/320px. Screenshots produced by that suite are retained under the two named output directories; no fresh individual visual inspection, Safari/WebKit, Firefox, physical-device, native zoom or screen-reader result is claimed in this documentation-only packaging pass. Logs are `/private/tmp/vctw-book-closeout-{check,root-build,root-export,root-e2e,pages-build,pages-export,pages-e2e}.log`. Original independent quality acceptance remains separate in its original record and PR26; this is not self-certification of a new independent audit.

No package, CI/deployment, access setting, runtime renderer, translation, canonical promotion or public release changed. The PR execution record will identify the actual head, all three matching cloud jobs and permitted merge separately. Preserve the dirty shared checkout even after merge; uncommitted status there is not evidence the package failed to reach main.

### Final frozen package check

The final package is50 selected source/document/asset paths. Installed Markdown parsing independently resolved483 relative links/anchors across the initial48 paths with zero failures after restoring the compatibility anchor and adding the promised handoff/review. All50 bytes match the frozen handoff package;79 baseline runtime/tooling/CI/dependency/earlier-canonical files are byte-identical to remote main. A scoped credential/private-chat-identifier pattern scan found no hits in the candidate Markdown; it is a bounded check, not an exhaustive secret/security audit. The unstaged `git diff --check` passed; staging newly added Markdown exposed three existing intentional two-space Markdown line breaks after the author credit in accepted introduction variants. Their bytes remain frozen. Full staged whitespace inspection found only those three exact lines; no arbitrary trailing whitespace is accepted. No tracked file deletion is part of this package. The additional Writer handoff's destinations were separately checked during its affected review, and this review links existing sources.

A message returning Writer acceptance initially failed because automatic approval review had exhausted its usage allowance; it was not executed and was not treated as receipt. After the author's continuation, the same scoped acceptance was successfully delivered. This did not change source bytes or authorize a bypass.

Staging initially stopped before commit because default `git diff --cached --check` reports the three deliberate Markdown hard-break lines as trailing whitespace. No source was silently changed to satisfy it. Coordinator verified these are precisely the accepted `**作者：Jason Zhang**  ` lines in the three introduction variants, checked every other staged line, and uses an invocation-local whitespace setting only to separate that recognized Markdown syntax from other whitespace errors; repository/global Git configuration is unchanged.

## Verified cloud CI and merge — subsequent execution record

PR [27](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/27) proposed `c7454b6859ddf26ee90e5da27293e1a276900009` against `5a0c2d8930962a4e80b9973669fee6d4df56aaad`. All three required jobs succeeded in [run44254832068](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/actions/runs/44254832068): Quality/job134633896123, root/job134634429961, pages/job134634429993. Both static jobs completed their builds, verification and Chromium tests. Before merge, Coordinator re-read the unchanged head/base, mergeability and main's required checks. The author-authorized expected-head squash merge returned `5141823f9c4a0b5403cf7a24d4269b0d09e2e92d`; PR readback and fetched remote main confirm it. The PR's execution comment retains these immutable identities independently of this subsequent local record.

This batch is merged and closed. Shared dirty main95a6bec remains intentionally preserved. No force push, protection change or deployment occurred. New work begins from remote main5141823 in separately assigned workspaces; manuscript/runtime intake and V2 acceptance remain separate.
