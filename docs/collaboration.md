# Writer and Developer collaboration

The user has released Writer and Developer to execute the tasks agreed in their respective conversations. This document defines coordination; it does not expand implementation, installation or publication scope. Coordinator assigns work, decides shared contracts, reviews actual deliverables, returns feedback and manages Git integration. Coordinator does not write product code, manuscripts or formal implementation documentation on an executor's behalf.

## Workspaces and ownership

The original checkout is `/Users/haixin/Desktop/code/beyond-the-frontend`. Coordinator may allocate independent Git worktrees for concurrent stages. Writer's current F01A worktree is `/tmp/btf-writer-f01a`; Developer remains in the original checkout. The [board](coordination.md) records actual branches and stage gates. A conversation's default cwd does not follow assignments automatically: verify the assigned directory before executing. Worktrees are branch working areas in one repository, not a second canonical manuscript or a confidentiality boundary.

Follow the [document storage policy](agent-notes-policy.md): formal sources stay in repository directories; optional scratch notes belong under ignored `.local/notes/<role>/`. Do not maintain a second formal body.

| Area | Writing/implementation owner | Responsibility |
| --- | --- | --- |
| `book/`, including `book/assets/` | Writer | Manuscripts, original examples, sources and chapter diagrams/assets |
| `site/` | Developer | Website, layouts, navigation, content rendering and styles within the assigned stage |
| Root build configuration, dependency files, `panda/`, `scripts/`, `tests/`, `.github/` | Developer, assigned files only | Build tooling, strict checks, design definitions and automation |
| `AGENTS.md`, shared technical/design/coordination documents and content contracts | Developer when explicitly assigned | Record Coordinator's accepted decisions and actual evidence; do not independently expand scope |
| `README.md`, `docs/project-vision.md`, `docs/roadmap.md` | Writer when assigned | Formal product/reader explanations following Coordinator's accepted decisions |
| `docs/reviews/` | Coordinator | Actual review findings, decisions, revision acceptance and integration evidence |
| Existing `docs/research/` and other owned material | Existing owner | Preserve user/other-agent changes; coordinate before editing |
| `docs/handoffs/writer/`, `docs/handoffs/developer/` | Respective executor | Stage evidence, open questions and revision responses |

Coordinator remains the decision owner for requirements, contracts, scope and status; delegating their documentation does not delegate approval. Git operations remain Coordinator-managed. Read other owners' work as input, but request a scoped assignment before editing it. Never stage another owner's unfinished work.

Formal technical/coordination/design explanations and active code comments are English-first. Chinese is appropriate for user discussion in Chinese and temporary or secondary handoffs. The bilingual book and its Chinese-first manuscript review sequence remain unchanged; language cleanup does not authorize translation or publication of prose.

## Content interface

Writer owns the single manuscript source. Developer renders it without copying chapter bodies into JSX or another website-specific document. The accepted [initial content contract](content-contract.md) defines the reviewed opening/G01 allowlist, hashes, language routes, missing-English behavior and build-time rendering. It is not permission to crawl all drafts or publish proposed chapters. Future inputs require an accepted source/revision and stage assignment.

Writer determines diagram meaning, relationships and labels. Developer handles readable rendering, responsive behavior and text alternatives; Coordinator reviews technical meaning. Changes to prose or diagram meaning return to Writer.

## Delivery and review loop

1. Coordinator assigns a task ID, inputs, allowed files, acceptance criteria and next authorized step. Executors reread relevant shared decisions.
2. Writer submits research, detailed outline, examples, evidence boundaries and validation plans before prose. Analysis acceptance and writing scope must precede a separate manuscript review. See the [chapter workflow](../book/planning/chapter-workflow.md), [analysis template](../book/planning/templates/chapter-analysis.md) and [WF01](reviews/WF01.md). No standing Analyzer role is created.
3. Developer implements and verifies only the assigned stage. Use agreed content inputs when integration is authorized; return required manuscript corrections to Writer.
4. The executor writes one stage report using the [handoff template](handoffs/TEMPLATE.md), freezes its reviewable files and sends the path directly to Coordinator. Report changed paths, actual checks, missing evidence, unresolved issues and dependencies.
5. Coordinator reads actual files, verifies as needed and records **accepted**, **changes required** or **insufficient evidence**, with actionable findings. A summary, delivery receipt, silence or elapsed time is not acceptance.
6. The original executor revises the same handoff with locations and verification, then submits the new revision. Coordinator rechecks and closes findings without silently reusing an older acceptance.
7. After acceptance, advance only into an already authorized dependent step. New scope still needs assignment. Push, merge and deployment have separate evidence and applicable authorization.

Manuscript completion, review acceptance and public availability are separate states. The content contract controls which reviewed materials may enter an authorized site release. Deployment after code/content/QA acceptance is authorized as a separate DEP01 stage; a stage review does not itself publish the site.

## Messages and records

The user authorizes direct handoff, feedback and revision messages among the existing Writer, Developer and Coordinator conversations. Executors send paths and short useful summaries; the user need not relay routine messages. Chats do not share histories automatically or continuously monitor files. If delivery fails, explicitly record that it was not delivered. Avoid repeated acknowledgment loops.

Coordinator decides shared status and accepted contracts; the assigned Developer records those facts in the board and formal technical documents. Keep raw chat transcripts, private conversation identifiers and unrelated personal details out of this public repository.

Use one handoff per meaningful stage, normally a concise 10–20-line report with evidence linked separately. Revise the same report rather than creating a new file for every paragraph or feedback round. Freeze the reviewed deliverable; if an urgent correction changes it, update the report and notify the reviewer. Without a different task instruction, wait for review before dependent implementation.

Coordinator owns the [review template](reviews/TEMPLATE.md) records under `docs/reviews/<task-id>.md`, including reviewed revision, findings, outcome and closure. Analysis and manuscript gates use distinct agreed IDs. Shared format/interface/ownership changes require Coordinator's decision; user instructions take precedence. The standing Checker is removed: Coordinator handles technical/source review, with license/attribution checks when actual reuse requires them.

## Pull requests and mainline

`main` is stable integration. Executors deliver on assigned branches/worktrees; Coordinator reviews the exact revision, returns fixes to its owner, then creates the scoped PR and uses the permitted squash merge after required checks pass. The implementer does not self-approve or merge. No paid AI reviewer or GitHub AI review action is part of this workflow; ordinary CI remains required.

New commits require affected changes to be rechecked. Respect server-side checks/protection and the reviewed head SHA; never weaken rules to merge. Record PR, local review, cloud results, merge and deployment separately. Start each new iteration from current remote `main`; Coordinator coordinates branch/worktree changes. If a branch is already identical to or included in `main`, verify and record that rather than manufacturing a PR or rewriting history.
