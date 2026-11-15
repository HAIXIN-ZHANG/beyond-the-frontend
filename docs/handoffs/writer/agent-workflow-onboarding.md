# Agent Workflow and Cold-start Onboarding — Writer Handoff

Revision: r1. Date: 2026-11-15 (Australia/Perth). Owner: Writer. Submitted revision: frozen for review. The [board](../../coordination.md) is the sole current-state record; this handoff owns this assignment and its execution/recovery evidence.

## Task brief

- **Authority/objective:** the user approved the agent-workflow/onboarding documentation change; Coordinator assigned Writer's four-file portion. A replacement Writer should recover without private chat history while preserving the two chapter gates.
- **Inputs:** AGENTS, the Writer guide, current board, collaboration rules, handoff template, existing chapter workflow and Chinese summary; the previous documentation review establishes PR #7's completed state. Coordinator confirmed AGENTS as startup entry, collaboration as the detailed shared workflow, board as current state and existing handoff template as task brief; no new generic startup document.
- **Allowed files:** `docs/writer-sync-prompt.md`, `book/planning/chapter-workflow.md`, `docs/stage-summary.zh-CN.md`, this `docs/handoffs/writer/agent-workflow-onboarding.md`. Developer owns disjoint shared/other-role files.
- **Workspace/baseline:** `/tmp/btf-project-docs`, branch `codex/agent-workflow-onboarding`, initial HEAD `aafc467860a80a4ad0918d08055336079ebf0e98`, clean at Writer startup. Explicit workdir and absolute edit paths used. Coordinator manages all Git writes.
- **Acceptance:** stable English Writer guide without current-task/worktree/branch/SHA chronology; explicit caller role/context, startup/assignment/hold behavior, separate analysis/manuscript gates, owner revision, evidence/language and direct frozen handoff. Minimal chapter-workflow integration. Chinese summary distinguishes completed PR #7 from the new process task and links current status to the board. Validate local links, language, deduplication, scope and unchanged Chinese manuscripts.
- **Exclusions/next boundary:** no chapter prose/translation, website/schema/code/dependencies/E2E/browser/deployment or changes to the original theme checkpoint. Submit and handle only this task's review; then retain the user's product-development pause and overall-design discussion.

## Delivery

| File | Change |
| --- | --- |
| `docs/writer-sync-prompt.md` | Stable Writer role guide, concise copyable bootstrap, caller-provided role/repo/chat context, assigned ownership, two chapter gates and task/evidence/review/recovery links; removes task snapshots and chronology |
| `book/planning/chapter-workflow.md` | Startup/task-brief integration and recovery section; historical W02/WF01/F01A results labelled historical, PR #7 translation acceptance recorded without new writing permission; current state links the board |
| `docs/stage-summary.zh-CN.md` | Single concise Chinese explanation of onboarding, previous documentation acceptance/PR/CI/merge and preserved product holds; workspace/current status delegated to the board |
| `docs/handoffs/writer/agent-workflow-onboarding.md` | This task brief, manifest, actual checks and recoverable checkpoint |

## Verification and limits

Checks actually performed on the four-file Writer revision:

- Verified checkout, branch, starting HEAD and clean status before editing. No Git write, original-theme-tree change or cross-owner edit by Writer.
- Python source checks passed: one H1, paired fences, no conflict markers, consistent table columns and all 27 relative link destinations. This revision contains no relative heading-anchor links; no anchor test beyond that inventory is claimed.
- The three formal Writer files are English; the single process summary is Chinese. Stable Writer guide contains no temporary-directory path, working branch, commit SHA or historical chronology. Startup role/context, one-report/no-extra-approval, missing assignment/hold, separate chapter gates and recovery conditions were manually checked against the assignment.
- `git diff --check` passed. The chapter-workflow diff is limited to startup/task-brief/recovery integration and explicitly historical evidence wording, preserving the two-gate table and analysis requirements.
- Chinese opening/G01 are byte-identical to HEAD. Opening SHA-256: `726963e8c759d832b6821bede35c07780c24ca166f8b67ce86dac82e19ec21c5`; G01: `b928e5df21876c0ca49a3c227eb6c7e20723b3f22bb9c7cb2d560cc198db62d2`.
- Current-task/worktree details are confined to this assigned task's evidence, not the stable role guide or chapter workflow. Summary explicitly delegates current state to the board and separates completed PR #7 from this new task's unfilled acceptance/CI/integration outcome.

This is a source-level documentation change, not a new source audit, live GitHub verification, browser experiment, E2E result or product implementation. The independent cold-start exercise remains Coordinator's acceptance check and is not claimed as performed/passed by Writer. Developer's shared workflow/board/template edits are separate deliverables; final cross-file reinspection belongs to Coordinator after both are frozen.

## Review and recovery

Review pending; do not self-approve or infer acceptance from delivery. After checks, freeze and directly send this path/revision/manifest/evidence/open items to Coordinator. Findings return to Writer for scoped revision in the same handoff, preserving earlier evidence.

Recovery baseline is the task brief above. The four Writer files are uncommitted deliverables in a tree shared with Developer's disjoint documentation work. Do not stage/reset/switch or assume another owner's changes belong to this handoff. Re-read AGENTS → Writer guide → board → this task and relevant review; verify actual branch/status/revision and findings before resuming. If a hold applies or scope differs, ask Coordinator rather than choose a roadmap item. Only review feedback on this task is an authorized continuation; product work stays paused.
