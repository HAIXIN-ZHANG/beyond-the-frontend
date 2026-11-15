# Beyond the Frontend: agent coordination

## Current gate

**Task-scoped execution.** The user has cleared Writer and Developer to begin the work agreed in their respective conversations. Those instructions define the authorized scope; this file does not invent or expand it. If no concrete task has been assigned in a conversation, ask for its scope before implementation. Installation, external calls, commits and publication require applicable user authorization. After each reviewable stage, create a handoff and await review before advancing to a dependent stage.

## Roles

- Coordinator (main conversation): owns product and architecture design, shared contracts, assignment, final review and integration. The user is the final authority.
- Writer: owns chapter prose, teaching examples and original chapter diagrams under `book/` once assigned.
- Developer: owns website implementation under `site/` and explicitly assigned root configuration, tests and automation files once assigned. D02 uses Next.js static export, React and JavaScript/JSX; content schema and subsequent features still need agreement.
- Coordinator also performs technical/source review. The user removed the standing Fact checker role; do not launch or resume it.

Future scope is not authorization to begin. Do not edit another owner's files without coordination. Do not undo user or other agent changes. No external publication without the coordinator confirming user authorization.

## Shared context

Read [project brief](docs/project-brief.md) and [coordination board](docs/coordination.md). These files contain decisions and status, not a transcript of every conversation.

Primary project documents are [README](README.md), [project vision](docs/project-vision.md) and [roadmap](docs/roadmap.md). They describe purpose, scope and planned features; a roadmap item is not an execution authorization. `project-brief.md` is a compatibility entry pointing to these sources. Formal book title: **Beyond the Frontend: It Works. Now What?** / **《前端往后看：能跑，然后呢？》**. Current repository is `HAIXIN-ZHANG/beyond-the-frontend`.

Current UI design: [design handoff](docs/design/reading-experience-v1.md), latest review [UI03](docs/reviews/UI03.md), following historical [UI02](docs/reviews/UI02.md). Figma has exactly three pages: Tokens, Components and Page Designs; the last groups reading, responsive and Day/Night views vertically. UI and design annotations are English-first; Chinese is supplemental only when needed. Semantic layout/color roles and component recipe contracts are documented and bound in Figma. PandaCSS is user-selected; this does not claim that its website migration or Code Connect is implemented, change the bilingual book plan, or authorize work beyond the user's assigned stage.

The user has subsequently raised TypeScript migration in the Developer conversation. JavaScript/JSX describes the implemented D02 baseline, not a permanent language restriction. Developer must address that request under its actual task scope; this synchronization is not itself a blanket migration or dependency-installation authorization.

Read [file ownership and handoff](docs/collaboration.md) for the Writer/Developer boundary. The original conversations shared one checkout; concurrent stages may use Coordinator-assigned Git worktrees recorded in the board. Use the assigned checkout rather than assuming the conversation's default cwd is current. Ownership remains an agreement, and neither conversation automatically reads the other's messages or watches document updates.

- User instructions override documents. If they conflict, flag the conflict to the coordinator.
- Coordinator owns shared requirements, content contracts and the board. Proposals are not accepted decisions until recorded as such.
- Direct agent messages carry urgent updates, questions and handoffs. Important accepted decisions must also be recorded in the shared files by the coordinator.
- Report completed work with changed file paths, verification, unresolved issues and dependencies. A report is not final approval.
- Share paths and short summaries rather than copying entire drafts into messages. Do not dump private conversations or personal information into this public-project repository.
- Agents share the repository; work in the assigned checkout/worktree. Parallel work must have disjoint file ownership. Git operations remain coordinator-managed.

## Required delivery and review loop

The user authorizes direct handoff, review feedback and revision messages between the existing Writer, Developer and Coordinator conversations. The user does not need to relay routine messages within an authorized task.

1. **Scope:** Coordinator identifies the task, inputs, allowed files, acceptance criteria and next authorized step. A roadmap or outline is not a task assignment.
2. **Execute and verify:** The owner completes the scoped work and appropriate checks. Report unperformed checks and unresolved limitations explicitly.
3. **Handoff:** The owner writes or updates one stage report using the [handoff template](docs/handoffs/TEMPLATE.md): Writer in `docs/handoffs/writer/`, Developer in `docs/handoffs/developer/`. Include the revision, exact files, actual evidence and open questions. Freeze the reviewed deliverable and send its path and a short summary directly to Coordinator.
4. **Review:** Coordinator reads actual files and relevant evidence, verifies as needed and records the reviewed revision, findings and an explicit outcome in `docs/reviews/<task-id>.md`, using the [review template](docs/reviews/TEMPLATE.md). A handoff or summary does not replace review. Coordinator sends actionable feedback to the original owner.
5. **Revise and re-review:** The owner addresses each finding, records its location and verification in the same handoff, and submits the new revision. Coordinator rechecks affected work and records which issues are closed or remain open. Preserve earlier review history; do not silently apply an old approval to changed work.
6. **Continue:** After explicit review acceptance, continue only into the next step already authorized by the task. If scope is not determined, Coordinator resolves it with the user. Installation, ownership changes, expanded scope and publication follow applicable authorization. Record Git push, merge and deployment separately from review acceptance.

Coordinator maintains shared status in `docs/coordination.md`. Message delivery, acknowledgment, silence and elapsed time are not approval. Do not create repeated acknowledgment loops. This workflow uses explicit messages, not continuous background file monitoring; if delivery fails, report that it was not delivered.

## Mainline and pull requests

`main` is the stable integration branch. Writer and Developer deliver on scoped working branches; Coordinator manages Git operations, opens the PR and reviews the exact proposed revision. The user selected Coordinator-led local review with Markdown records, not a GitHub AI review action. Do not add a paid review service or a standing Reviewer agent. Ordinary CI checks remain separate from this review choice.

Within a user-authorized iteration, after local review and required verification pass, Coordinator may create and merge its scoped PR without another routine confirmation. Use the repository's permitted squash merge, require the reviewed head SHA to match, and respect any server-side required checks or rules. New commits invalidate acceptance of the old revision until the affected changes are rechecked. The implementer does not self-approve or merge its own deliverable.

Record the PR, reviewed SHA, actual checks and merge result in the stage review; merge acceptance does not authorize deployment. A branch already identical to or included in `main` needs no artificial PR: verify and record that fact without rewriting history. New iterations start from current remote `main`; coordinate branch changes because the existing conversations share one checkout. The GitHub default-branch setting and branch-protection status must be verified separately rather than inferred from the existence of `main`.

Verified access baseline (2026-11-14): GitHub default is `main`; its server-side protection requires PRs, prohibits force push/deletion and applies to administrators. Only the owner is a collaborator; no deploy keys or pending invitations were found. Required GitHub approval count is 0 for the single-account local-review workflow; required CI checks were not yet configured at that checkpoint. CI01 subsequently verified its cloud run on 2026-11-15 and enabled required Quality, Static export (root) and Static export (pages) checks from GitHub Actions, with up-to-date branches required. Read the current coordination board for the authorized six-stage foundation iteration. Do not weaken these settings to merge. See the committed [access policy](docs/security/access-policy.md), [SECURITY.md](SECURITY.md) and [SEC01](docs/reviews/SEC01.md). Figma's public link permits view/comment, not edit; the inspected inherited editor list contains only the owner. Recheck live settings after access changes; do not promise absolute account security.

**Writer has two review gates per future chapter:** research, detailed outline, examples, evidence boundaries and validation plans first; draft prose only after the analysis and writing scope are accepted; then submit the manuscript for a separate review. See [chapter workflow](book/planning/chapter-workflow.md), [analysis template](book/planning/templates/chapter-analysis.md) and [WF01](docs/reviews/WF01.md). Analyzer is a document, not a new standing agent. Use distinct analysis/manuscript review identifiers agreed for the task; do not overwrite one gate's record with the other. Ordinary wording edits do not require a new analysis gate; substantive mechanism, evidence or scope changes return to the relevant review.

## Writing and accuracy

Use natural Simplified Chinese for the guide and user-facing discussion, keeping appropriate English technical terms. Explain with a familiar situation, plain language, precise principles, concrete examples, technology choices and trade-offs. No required capstone or implementation exercises. Original diagrams should explain structure, sequence, state or data flow; label relationships and assumptions.

Distinguish documented behavior, experiments, experience, assumptions and recommendations. Verify volatile technology details against primary sources when execution is authorized. Do not invent sources, benchmarks, adoption or personal work experience. Learning from a source is not permission to paraphrase its protected expression or reuse diagrams/code; check applicable licenses and attribution.
