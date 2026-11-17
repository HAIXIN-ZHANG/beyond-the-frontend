# Reviewed reading baseline — PR integration record

Date/reviewer: 2026-11-17, Australia/Perth; Coordinator. **Outcome: isolated package accepted for authorized commit/push/PR; all local integration checks passed. Cloud CI, PR review, merge and deployment are separate outcomes.** This record integrates existing accepted work; it does not independently replace the original quality review or accept a new visual design.

## Authority, revision and scope

The author authorized packaging the reviewed current changes, appropriate checks, commit, push and creation of a PR for review. Merge, deployment, Figma changes, access changes, dependency installation and unconfirmed V2 code are outside this assignment. The [board](../coordination.md) owns live task state; the [closeout review](uncommitted-closeout-2026-11-17.md) preserves the preceding no-Git review and safe integration proposal as dated evidence.

- Shared checkout: `/Users/haixin/Desktop/code/vibe-coding-then-what`, dirty `main@95a6bec69e26cbe13fe9f5d9433ee91e07632091`; preserve its38 source/document changes and ignored recovery archives.
- Isolated worktree: `/private/tmp/vctw-reviewed-reading-baseline`; branch `codex/reviewed-reading-baseline`.
- Live GitHub main, independent Git remote read and fetched main all matched `95a6bec69e26cbe13fe9f5d9433ee91e07632091` before worktree creation. No upstream delta needed reconciliation; the branch did not previously exist remotely.
- Verified all38 files in the final closeout recovery manifest, and their shared-working-tree counterparts, byte-for-byte. Copied only those frozen source/document files into the isolated checkout. The board update and this integration record are the only subsequent Coordinator-owned source changes.
- Existing package and lockfile bytes match the shared checkout. Reuse a filesystem-cloned copy of its installed dependencies; no dependency or browser installation is assigned. Builds and generated output belong solely to the isolated worktree.

### Prior acceptance retained

1. [Original independent quality reinspection](quality-findings-2026-11-17.md): complete search results/counts, Unicode-safe excerpts/highlights, compact mobile results, nearby chapter outline, honest home entries and bounded search/catalog Figma clarification. The original independent reviewer accepted the named revision; this packaging record does not self-certify independent quality acceptance.
2. [F01M manuscript review](F01M.md): Chinese Browser Fundamentals r3, SHA256 `54b983945710303a7e790706d86b9acc3884f50f6ae82f06dbde71711967ca24`. Opening/G01 source identities remain unchanged. No English manuscript, live HTML example or measured browser experiment is introduced.
3. [Third-chapter intake review](milestone-2-chapter-intake.md): final r4 handoff and its11 payload hashes match. The explicit manifest admits three reviewed Chinese drafts; F01 route is `/zh/read/browser-foundations/`. English navigation labels do not imply English bodies. Existing renderer/parser/routes are reused.
4. [Closeout review](uncommitted-closeout-2026-11-17.md): necessary planning/status updates preserve original decisions while marking the historical three-background study superseded by the separate V2 design-first direction.

Excluded: `.local` recovery copies, dependencies, build artifacts, local screenshots/logs, private conversations/credentials and concurrent V2 changes. The already accepted historical Figma records remain evidence; no Figma modification is performed here.

## Access and integration checks

Live GitHub repository metadata confirms public visibility, default main, auto-merge disabled and squash as the only enabled merge method. The branch response confirms main is protected and requires **Quality**, **Static export (root)** and **Static export (pages)** for everyone. The full branch-protection read returned403 (integration lacks that endpoint's administrative access); current enforce-admin/force-push flags were not freshly verified. Existing access policy remains dated evidence. Ruleset list returned empty; this does not negate classic branch protection. No setting was changed or weakened.

## Actual verification

These checks were actually rerun by Coordinator in the isolated worktree, using Node24.14.1/npm11.11.0 and the unchanged installed dependency versions. No dependency/browser install was performed.

| Command / check | Result |
| --- | --- |
| `npm run check` | Passed: lint, strict type checks,44/44 Node tests |
| `NEXT_PUBLIC_BASE_PATH='' npm run build` | Passed: fresh root production/static build |
| `NEXT_PUBLIC_BASE_PATH='' npm run verify:export` | Passed:8 pages,165 local references; zh29/en0 search entries; all heading targets valid |
| `NEXT_PUBLIC_BASE_PATH='' npm run test:e2e -- --output=/private/tmp/vctw-baseline-pr-root-e2e` |16/16 passed,12.3s |
| `npm run build:pages` | Passed: fresh Pages-subpath build |
| `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run verify:export` | Passed:8 pages,165 local references; zh29/en0; all heading targets valid |
| `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run test:e2e -- --output=/private/tmp/vctw-baseline-pr-pages-e2e` |16/16 passed,11.9s |
| Frozen38 candidate/source digests | Exact match except the intentional current Coordinator board update; this integration record is the sole additional file |
| Opening/G01/F01 manuscript SHA256 | All three exactly match their accepted identities |
| Package/lockfile, CI/deployment configuration, parser, loader and theme | Unchanged from main |
| Client JavaScript boundary scan | No `book/drafts/`, `docs/reviews/` or `.local/` path in exported client JS |
| `git diff --check` | Passed |

The maintained Chromium suite exercises the real14-result search count and final-result keyboard activation, normalized excerpts/highlights, sticky outline with enlarged control text and target placement, both locale homes, navigation, Day/Night refresh and storage fallbacks, copy-denial fallback, bounded code/table scrolling and English absence/404. Its F01 case visits1440/390/320px, checks all9 indexed heading targets at each width and captures both themes. This is a source-preserving integration check, not new V2 behavior.

Logs: `/private/tmp/vctw-baseline-pr-check.log`, `/private/tmp/vctw-baseline-pr-{root,pages}-{build,export,e2e}.log`. Fresh screenshots are under `/private/tmp/vctw-baseline-pr-{root,pages}-e2e/reader-approved-browser-ch-b2cae-d-heading-remains-reachable/`, filenames `browser-chapter-{1440,390,320}-{light,dark}.png`. Coordinator actually opened the root390px light and Pages320px dark captures; the other generated captures are not claimed as individually visually inspected in this packaging pass. Original independent visual/source conclusions retain their own explicit limits.

No code or manuscript correction was needed during isolated packaging. Rechecked the final diff and excluded dependencies, outputs, recovery copies, private metadata and future V2 code. Commit identity and matching cloud results cannot be prefilled in their own candidate source: the actual associated PR and its execution summary must record the proposed head, run/job URLs and results after creation. Do not infer cloud success from these local passes.

The latest verified public edition still has two Chinese chapters; local admission of F01 is not public release. No public smoke, release metadata generation or deployment is assigned. Safari/WebKit, Firefox, physical devices, native browser text zoom and assistive-technology testing are not claimed.

## Recovery and next boundary

Keep both worktrees and recovery snapshots. If interrupted, inspect this record, the board, actual branch/status and the PR head/checks before resuming. Any substantive code/manuscript delta returns to its original owner and affected review. Changed source cannot inherit earlier acceptance silently. Stop after a reviewable PR and actual CI evidence; merge and publication require a separate applicable authorization.
