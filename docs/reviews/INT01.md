# Initial Mainline and Reviewed Writing Integration — review

Legacy reference: INT01. Date: 2026-11-14 (Australia/Perth). Reviewer/integrator: Coordinator. **Outcome: accepted for the four-file W02 integration; D02 was already main's identical baseline.** The author expressly authorized PR/merge of existing work; website deployment was outside scope. This translation preserves the historical outcome.

## Revision and exact scope

- Initial main: `d0965a172196091c9781f4ffea6b8dc9941ae6c5`, identical to remote `codex/d02-engineering-skeleton`: ahead 0 / behind 0 / changed files 0. No artificial D02 PR or history rewrite was needed.
- W02 head: `13513c91edf6b8a201222ab11b90cafee07c9d36`, one additional commit. Only `book/drafts/zh/00-before-we-start.md`, `book/drafts/zh/01-a-page-and-a-system.md`, `book/planning/W02-scope.md`, `docs/handoffs/writer/W02.md`; 407 added lines.
- [PR #1](https://github.com/HAIXIN-ZHANG/beyond-the-frontend/pull/1): `codex/w02-opening-foundations` to main. Returned base/head, file list and counts matched local inspection.

## Actual recheck

Relied on accepted [foundation code/static-build review](D02.md) and closed R1–R3 in [writing review](W02.md). The four W02 files matched the proposed commit byte-for-byte; manuscript SHA-256 values matched accepted originals. Single H1, fences and relative links passed, resolving against the actual proposed commit tree rather than untracked working files.

Coordinator reran `npm run check`: zero lint warnings/four tests. Markdown-only integration did not reinstall dependencies or repeat unaffected builds. No browser, screen-reader or deployment acceptance occurred. Foundation browser limits remained; merging prose did not make the website render/publish it.

There were no blocking revisions. Before merge, Coordinator matched current PR head and used `expected_head_sha=13513c91edf6b8a201222ab11b90cafee07c9d36`; a changed head or unsatisfied server rule required recheck, not bypass.

## Execution and subsequent state

PR #1 squash-merged as `71b29c7885812e19936de5c1c0cbb73dd6347271`. A fresh GitHub read showed closed/merged with the same result. Coordinator fetched remote main, matched that SHA and verified full-tree equality against the reviewed W02 branch. Tracked/index changes were empty.

Local main began tracking origin/main; the shared checkout moved to main. Untracked documents stayed untouched/outside the PR. Both executors had received the Git-write pause; the D02 branch/history remained. README/shared design/reviews, W01 planning and process documents still needed separate precise documentation integration. No cloud AI reviewer, paid inference, unattended merge or deployment was installed.

At this historical checkpoint, GitHub's default was still `codex/d02-engineering-skeleton`: main existing did not prove the default had changed. In-app browser control remained unavailable and Safari was not substituted. This did not prevent explicitly targeting main in the PR.

**Later closure:** [SEC01](SEC01.md) subsequently changed the actual default to main and verified administrator-enforced protection. The historical setting above is no longer an open task. Original manuscript hashes refer to their reviewed source revisions, not translated process-document bytes.
