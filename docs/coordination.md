# Beyond the Frontend — coordination board

Updated: 2026-11-15 (Australia/Perth). This is the sole live record of assignments, holds and workspaces. Read your explicitly assigned role guide from [AGENTS](../AGENTS.md), then the linked task brief. [Collaboration](collaboration.md) owns detailed workflow; [history](development-history.md) and the [archived previous board](archive/coordination-before-onboarding.md) are optional historical evidence.

## Global scope and holds

**Product work is Paused.** Reason: the user requested an overall project-design discussion after the documentation work, then explicitly assigned the bounded onboarding/process-document task below. This task does not resume components, chapter UI, theme/browser acceptance, manuscripts/translation, E2E or GitHub Pages release. Coordinator is responsible for resolving the hold with the user; resume only after an explicit scoped assignment lifting the applicable hold. Earlier tool/release authorization does not override it.

**Process-document execution has ended:** Agent Workflow and Cold-start Onboarding passed Coordinator's actual review and independent read-only cold-start exercise. Writer r1 and Developer r3, including the closure recheck, are Accepted; **no open executor tasks** remain. Actual integration evidence is linked below; it does not resume product work.

## Closed task's workspace and baseline

- Documentation checkout: `/tmp/btf-project-docs`; branch `codex/agent-workflow-onboarding`.
- Starting main/base, verified at assignment: `aafc467860a80a4ad0918d08055336079ebf0e98`. This is historical task evidence, not a claim about the latest HEAD or remote main. Verify actual revisions for any new assignment.
- This checkout contains the frozen Writer and Developer deliveries with disjoint ownership. Any specifically requested closure revision uses the assigned explicit workdir and absolute edit paths. Coordinator manages all Git writes and checkout/worktree changes; the workspace record is not an execution assignment.
- Do not use the conversation's default cwd or copy the preserved theme tree into this branch. Verify actual directory/branch/HEAD/status against your brief before editing.

## Executor closure

**No open executor tasks.** Accepted deliverables remain frozen; further executor work requires specific review feedback or a new scoped assignment.

| Owner | Concrete task and brief/input | Lifecycle status | Workspace/branch | Next action |
| --- | --- | --- | --- | --- |
| Developer | Shared entry/workflow/guides/templates and entry/history/storage alignment; [task brief/handoff](handoffs/developer/agent-workflow-onboarding.md) | Accepted r3, including closure | Closed task's checkout/branch above | Preserve frozen deliverable; no dependent implementation |
| Writer | Writer guide, chapter workflow, Chinese overview and handoff; [frozen r1 brief/handoff](handoffs/writer/agent-workflow-onboarding.md) | Accepted r1 | Same documentation checkout/branch | Preserve frozen deliverable; no manuscript or new writing task |

## Integration — Coordinator only

The closure recheck is accepted in the [review record](reviews/agent-workflow-onboarding.md). [PR #8](https://github.com/HAIXIN-ZHANG/beyond-the-frontend/pull/8) carries this iteration's actual reviewed head, required-check results and squash outcome; its live execution record determines integration completion. A merged PR closes this integration, without assigning work or lifting the product hold. Prior PR #7 results below do not satisfy this iteration's checks. No deployment is part of this task.

After integration, Coordinator plans to restore the usual project directory to latest main while preserving the theme branch/checkpoint and all existing changes. That checkout change has not been performed or verified by Developer; do not infer it from this plan. Verify actual worktree locations before acting. Integration does not authorize executor work, deployment or lifting the product hold.

## Preserved recovery point

Design Tokens and Day/Night Themes remains **unaccepted**, with product work Paused. Its durable recovery references are branch `codex/ds01-panda-theme` and checkpoint `4da2578048f8df113fed92d99e084f644a9a788e`, not a permanently assigned directory. Use `git worktree list` and actual branch/HEAD/status checks to locate and verify the preserved work; do not assume the usual project directory still has that branch checked out. [Handoff](handoffs/developer/DS01.md) and [review](reviews/DS01.md) preserve implementation/local-check evidence and missing independent browser/integration acceptance. Do not edit it or run its temporary browser harness under this closed documentation assignment. It is not part of documentation main and is not a deployed theme.

## Verified starting integration — historical baseline

AI Development Workflow and Delivery History (legacy DOC02) is **completed and merged**, not the current task: [review](reviews/ai-development-documentation.md), [PR #7](https://github.com/HAIXIN-ZHANG/beyond-the-frontend/pull/7). Final reviewed head: `dd08e7aa4a6e13f949bd389d8919e23a96f07a1d`. [Run 43672904569](https://github.com/HAIXIN-ZHANG/beyond-the-frontend/actions/runs/43672904569) passed Quality, Static export (root) and Static export (pages); squash result: `aafc467860a80a4ad0918d08055336079ebf0e98`, this iteration's base. These are prior integration facts, not results for the new onboarding task. No deployment is claimed.

Older execution chronology is retained in the archived board rather than repeated here. Role responsibility does not itself assign the next chapter or engineering stage.
