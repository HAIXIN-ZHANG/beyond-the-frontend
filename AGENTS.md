# Beyond the Frontend: agent coordination

## Current task and authority

**Task-scoped execution.** The current priority is **AI Development Workflow and Delivery History** (legacy DOC02), a documentation-only task. After this task and necessary review/revisions/integration, stop for an overall project-design discussion. Further components, chapter UI, browser/E2E implementation, manuscript drafting and GitHub Pages release are paused; documentation acceptance does not automatically resume them. Existing authorization for necessary npm/browser tools, a small E2E suite and release after code/content/QA acceptance remains conditional; it is not an instruction to resume those stages now.

The human author is the final authority. Coordinator assigns a concrete scope, inputs, allowed files and acceptance criteria. Roadmap entries, outlines, old prompts and message delivery do not release implementation. Finish each reviewable stage, submit a handoff and await actual review before dependent work. No deployment, paid service, access change or unrelated expansion follows from a document or review alone.

## Roles and current workspaces

- **Coordinator:** decides architecture/contracts and assignments, inspects actual deliverables, returns findings, records acceptance and manages Git integration. It does not write product code, manuscripts or formal implementation explanations on an executor's behalf.
- **Developer:** implements assigned website/tooling and formal technical/process explanations, verifies work and reports evidence/limits. In the current task, Developer owns README, Development History, shared technical/coordination documents, main's engineering guides and explicitly assigned historical review translations.
- **Writer:** owns research/outline, manuscripts, examples and teaching diagrams. In the current documentation tree, Writer owns vision/roadmap, book planning/analysis explanations and the single Chinese stage-summary draft under its actual assignment. Developer must not edit these files.
- **Fact checker:** removed as a standing role; do not create or resume it. Coordinator handles technical/source review. No standing Reviewer or GitHub AI review service is introduced.

Current documentation checkout: `/tmp/btf-project-docs`, branch `codex/ai-development-history`, based on main `4ff4a1ffd32209e80f64a60bd12766f3864ea489`. Writer and Developer share this tree with disjoint ownership. Every command must use the assigned workdir explicitly. Neither executor changes branches, stages files, commits, pushes or merges.

The original checkout preserves the unaccepted Design Tokens and Day/Night Themes checkpoint `4da2578048f8df113fed92d99e084f644a9a788e` on `codex/ds01-panda-theme`. Do not edit or copy its product tree into the documentation branch. Earlier Writer research used `/tmp/btf-writer-f01a`; that is historical context, not the current documentation assignment. Worktrees are not confidentiality or account-permission boundaries.

## Shared sources and current baseline

Start with [README](README.md), [project vision](docs/project-vision.md), [Roadmap](docs/roadmap.md) and [Development History](docs/development-history.md). [Project brief](docs/project-brief.md) is a compatibility entry, not a second vision. [Coordination](docs/coordination.md) owns current status and dated execution records; [collaboration](docs/collaboration.md) defines file ownership and handoff behavior.

Project/repository: `HAIXIN-ZHANG/beyond-the-frontend`. Book: **Beyond the Frontend: It Works. Now What?** / **《前端往后看：能跑，然后呢？》**. The original JavaScript/JSX foundation is historical; main has strict TypeScript, React/Next.js static export and cloud-verified CI. English is the default website language, with Chinese routes. Reviewed Chinese opening/foundations and Browser Fundamentals analysis are in main; chapter rendering is not implemented.

The accepted [initial content contract](docs/content-contract.md) permits a small hash-checked source allowlist for a later reading stage, not recursive publication, automatic translation or a backend. [Design handoff](docs/design/reading-experience-v1.md), [UI03](docs/reviews/UI03.md) and historical [UI02](docs/reviews/UI02.md) distinguish design from implementation. Figma has Tokens, Components and Page Designs; the latter groups responsive/Day/Night views. PandaCSS was selected and locally implemented in the separate checkpoint; browser/integration acceptance and Code Connect are not established.

Use human-readable outcome names first and legacy IDs second, as mapped in Development History. Preserve referenced paths, original finding IDs, hashes and existing links. Do not rename required CI jobs or invent new stages to improve labels.

## Required delivery and review loop

The user authorizes direct handoff, feedback and revision messages among the existing Writer, Developer and Coordinator chats. Do not make the user relay routine messages. Chats do not share histories automatically, continuously watch files or run an unattended orchestration engine. Failed delivery must be reported; silence, acknowledgment and elapsed time are not approval.

1. **Scope:** Coordinator identifies the task, inputs, ownership, criteria and next authorized step. User instructions override documents; flag conflicts rather than discarding accepted details.
2. **Execute and verify:** The owner completes only the assigned work, preserving user/other-agent changes. Report actual checks, missing evidence and limitations.
3. **Handoff:** Maintain one stage report using [the template](docs/handoffs/TEMPLATE.md), under the owner's handoff directory. Include readable outcome, legacy reference, revision, exact files, evidence and open questions. Freeze the deliverable and send its path directly to Coordinator.
4. **Review:** Coordinator reads actual files/evidence and records the reviewed revision, findings and explicit outcome using [the review template](docs/reviews/TEMPLATE.md). A summary is not review. Findings return to the original owner.
5. **Revise and re-review:** The owner addresses findings in the same handoff with locations/checks. Coordinator rechecks affected work and records closure, retaining history. New changes do not inherit acceptance of an old revision.
6. **Continue:** Proceed only after explicit acceptance and only into an already authorized next step. Current documentation priority still pauses later implementation/release.

Coordinator owns decisions and review conclusions. Assigned executors write formal explanations and record accepted status; writing a shared document does not grant decision authority. Historical review translations in this task preserve outcomes, dates, revisions and findings and cannot approve new code. Important decisions belong in shared sources, not raw private chat transcripts. Do not publish conversation IDs, credentials, unnecessary personal details or private quota information.

Writer's research/outline and manuscript remain separate gates. Use the [chapter workflow](book/planning/chapter-workflow.md), [analysis template](book/planning/templates/chapter-analysis.md) and [workflow review](docs/reviews/WF01.md). An analyzer is a document, not a standing role. Distinct agreed analysis/manuscript references prevent one review replacing another. Ordinary wording edits do not require new analysis; substantive scope/mechanism/evidence changes return to the relevant gate. Accepted Browser Fundamentals analysis does not authorize its currently paused manuscript.

## Git, checks and release

`main` is stable integration. Coordinator creates scoped PRs, reviews the exact head, waits for required checks and uses permitted squash merge. The implementer does not self-approve/merge. In an authorized iteration, no repeated routine confirmation is needed after review/checks pass, but a changed commit requires rechecking. If a branch is already identical to/included in main, record that rather than manufacture a PR or rewrite history. Coordinate checkout/worktree changes.

The dated access baseline verified public/default `main`, PRs required even for administrators, no force push/deletion, only the owner as collaborator and no deploy keys/pending invitations. Required GitHub approval count is zero for the single-account local-review workflow. On 2026-11-15, actual CI success preceded enabling `Quality`, `Static export (root)` and `Static export (pages)`, bound to GitHub Actions with up-to-date branches required. Never weaken these controls to merge. Read [SECURITY.md](SECURITY.md), [access policy](docs/security/access-policy.md) and [access review](docs/reviews/SEC01.md); recheck live settings after relevant changes rather than assuming a historical snapshot is current.

Figma's inspected public link permits view/comment, not editing; inherited editing showed only the owner. Same-account agents/integrations are not separate security principals. Do not promise absolute account security. Review acceptance, PR checks, merge, publication authorization and deployment evidence are separate records.

## Language, evidence and storage

Answer the user in the language of their question. Formal technical/product/process documentation and active code/design comments are English-first; the book remains bilingual, with Chinese manuscript work reviewed before English adaptation. Temporary/secondary handoffs may use Chinese, but this documentation upgrade translates the assigned historical process records into English. Historical hashes identify their named source revisions, not the new translation's bytes.

Explain mechanisms through familiar situations, precise principles and concrete trade-offs. Distinguish documented behavior, experiments, experience, assumptions and recommendations. Verify changing technical claims against primary sources when execution is authorized; do not invent sources, measurements, production scale, work experience or benefits. Respect licenses/attribution when actually reusing protected material. Use diagrams to explain relationships, state, sequence or flow, without requiring a capstone exercise.

Follow the [formal document/local note policy](docs/agent-notes-policy.md). Keep scratch notes optional and ignored; they are neither secret storage nor hidden prerequisites for another owner. Preserve existing files and do not reset, overwrite or publish another owner's changes.
