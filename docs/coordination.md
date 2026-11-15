# Beyond the Frontend — coordination board

Updated: 2026-11-15 (Australia/Perth). This is the sole live record of assignments, holds and workspaces. Start from [AGENTS](../AGENTS.md) → explicitly assigned role guide → this board → linked task brief and necessary inputs. [Collaboration](collaboration.md) owns the detailed workflow; [history](development-history.md) and the [archived previous board](archive/coordination-before-onboarding.md) are optional evidence.

## Current scope and independent holds

**Planning accepted; executor drafting closed:** First-edition Full-stack + AI Product Engineer scope for Junior–Senior readers. Coordinator accepted Writer r2, Developer r1 content and its r2 closure after actual affected review; **no open executor tasks** remain. Coordinator integration is separate. [Vision](project-vision.md) and [detailed outline](../book/planning/outline.md) own the accepted planning direction, not approval of new chapter research or manuscripts.

**Implementation and manuscript work remain Paused.** This assignment does not resume new prose/translation, chapter schema/rendering, website/UI, theme/browser acceptance, E2E or deployment. Coordinator owns resolution with the user; resumption requires an explicit scoped assignment lifting the applicable hold. Earlier necessary-tool/release authorization does not override it. Do not select new providers, frameworks or paid services through this planning task.

## Last scoped workspace and baseline

- The accepted planning stage used `/Users/haixin/Desktop/code/beyond-the-frontend` on `codex/full-stack-ai-book-scope`. This is a completed drafting workspace record, not a permanent checkout assignment; verify actual checkout after integration.
- Verified starting HEAD and local `origin/main`: `f10d6a193c37a731688aca41f5f10a44a2e8fe94`, initially clean. Coordinator created this branch from fetched remote main; Developer verified actual local revision/status.
- The usual project directory has already returned to that main baseline before this branch was created. Restoring it is not a pending action from onboarding. Verify actual branch/HEAD/status before each new assignment rather than infer them from this historical transition.
- This checkout holds the frozen Writer and Developer deliveries with disjoint ownership. Any specifically requested revision uses explicit workdirs and absolute edit paths. Coordinator manages all Git writes and branch/worktree changes. The workspace record is not an instruction to continue drafting; the old temporary documentation worktree is not this task's workspace.

## Closed executor tasks

**No open executor tasks.** Preserve accepted files; any correction needs specific review feedback, and further work needs a new scoped assignment.

| Owner | Task and brief | Lifecycle status | Next action |
| --- | --- | --- | --- |
| Writer | Seven files: vision, roadmap, editorial brief, detailed outline, writing-task alignment, single Chinese overview and [own task brief/handoff](handoffs/writer/full-stack-ai-book-scope.md) | Accepted r2; closed | Preserve frozen planning delivery; no chapter prose or other continuation |
| Developer | Five files: README, compatibility brief, this board, one History direction entry and [own task brief/handoff](handoffs/developer/full-stack-ai-book-scope.md) | Content r1 / closure r2 Accepted; closed | Preserve delivery; no dependent implementation |

## Integration — Coordinator only

**Execution record: [PR #9](https://github.com/HAIXIN-ZHANG/beyond-the-frontend/pull/9).** The [actual review](reviews/full-stack-ai-book-scope.md) accepts the combined content and two-file closure, including Writer's corrected SQL-parameterization finding and source-inspection limits. The reviewed content snapshot is `717782d5b95c74b1e4a778a5c7bf3a33e2fa0ac4`; only Coordinator review/board integration pointers are added afterward. At this record's commit, the final-head checks and merge remain pending. The linked PR records the actual final head/run/merge as integration proceeds; no executor task remains. Prior PR #8 checks do not satisfy this gate. Integration does not lift any product/prose hold or authorize deployment.

## Last completed integration

Agent Workflow and Cold-start Onboarding is **completed and merged**, not an open executor task: [review](reviews/agent-workflow-onboarding.md), [PR #8](https://github.com/HAIXIN-ZHANG/beyond-the-frontend/pull/8). Verified merged head: `12718e7e8689e8ab2e0d66cf2cfc464b2ac7f87a`; [run 43675030008](https://github.com/HAIXIN-ZHANG/beyond-the-frontend/actions/runs/43675030008) passed Quality, Static export (root) and Static export (pages); squash result `f10d6a193c37a731688aca41f5f10a44a2e8fe94` is this iteration's base. These are prior-task facts, not this planning task's review/check/merge evidence. No deployment is claimed.

The earlier AI Development Workflow and Delivery History integration remains recorded in [its review](reviews/ai-development-documentation.md), [PR #7](https://github.com/HAIXIN-ZHANG/beyond-the-frontend/pull/7) and History; it is not the active task.

## Preserved recovery points

Design Tokens and Day/Night Themes remains **unaccepted**. Durable references: branch `codex/ds01-panda-theme` and checkpoint `4da2578048f8df113fed92d99e084f644a9a788e`, verified in both local and remote-tracking refs. Locate workspaces with `git worktree list` and verify actual branch/HEAD/status; the usual project directory does not permanently belong to the theme branch. [Theme handoff](handoffs/developer/DS01.md) and [review](reviews/DS01.md) retain local evidence and missing independent browser/integration acceptance. Do not edit or run its temporary browser harness for this planning assignment.

Theme-generated files preserved during the earlier return to main remain in ignored `.local/recovery/theme-generated-after-onboarding-2026-11-15/styled-system/`, with a sibling `manifest.json`. They are local recovery material, not main's build input, accepted theme implementation or a new deliverable. This task preserves that backup and the theme branch/checkpoint; no product state is inferred from it.
