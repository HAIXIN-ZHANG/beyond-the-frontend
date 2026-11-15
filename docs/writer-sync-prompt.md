# Writer Coordination and Stage Handoff Instructions

English editorial/current-status update: 2026-11-15. Read the current section before historical snapshots. Readable deliverable names are primary; legacy IDs and paths remain for tracing.

## Current priority: AI Development Workflow and Delivery History

Complete the assigned documentation upgrade, submit actual files/evidence to Coordinator, handle review revisions, then **pause for the author's overall-project-design discussion**. Do not automatically resume Browser Fundamentals — Manuscript (F01M), English book adaptation, site code or deployment. Earlier post-QA GitHub Pages authorization remains recorded; execution is paused rather than pre-approved by documentation acceptance.

Current documentation worktree: `/tmp/btf-project-docs`, branch `codex/ai-development-history`, based on main `4ff4a1ffd32209e80f64a60bd12766f3864ea489`. Always supply explicit workdir/absolute edit paths. Writer and Developer have disjoint ownership in this documentation tree; do not switch branches, stage, commit, push or edit their other worktrees. Coordinator manages Git.

Writer's assignment includes vision/roadmap/positioning, the Jiangren topic inventory, this prompt, all `book/planning/`, Writer handoffs and the single `docs/stage-summary.zh-CN.md`. Developer owns the separately assigned engineering/collaboration/design/history/review/template files and README. Coordinator assigns/reviews/feeds back/integrates, not authors the owners' formal explanations.

All project/process/planning/analysis/handoff/review/template documents, including historical records, use natural professional English. The single Chinese process document is the short stage summary. Retain technical identifiers, formal Chinese book title and necessary original references. This policy does not translate Chinese manuscript or Chinese UI resources. Preserve facts, dates, proposal/acceptance distinctions and revision history; historical hashes belong to their original revisions, not the current translations.

Current accepted facts: opening/G01 merged through PR #1; CI/strict TypeScript integrated; Browser Fundamentals research/outline accepted and PR #6 merged after three successful checks. F01M is unwritten. The separate Panda theme checkpoint is unaccepted and outside main; no live site or complete browser acceptance. The [initial content contract](content-contract.md) accepts only opening/G01 IDs, slugs, reviewed sources and missing-English navigation for a later assigned implementation. Broader book schema/translation remains open; don't label the accepted minimum as entirely TBU or implemented.

## Historical foundation authorization, 2026-11-15

The user authorized, in order: Continuous Integration and Merge Protection (CI01) → Strict TypeScript Migration (TS01) → Design Tokens and Day/Night Themes (DS01) → Reusable Reading Components (CMP01) → Responsive Chapter Reading (PAGE01) → Browser Validation and E2E Tests (QA01). Necessary compatible npm/development/browser tools were authorized; this did not authorize unrelated suites or paid services. Temporary tools are not permanent E2E coverage.

Each stage required handoff, actual review/revision and exact-head PR/checks/merge. The initial iteration excluded deployment; the user later authorized a separate post-QA GitHub Pages Release (DEP01). These changes did not assign Writer every proposed chapter. Current pause supersedes immediate continuation of this sequence.

## Historical Project Documentation Integration (DOC01), 2026-11-15

The 27 remaining local Markdown files received an ownership inventory and limited status fixes, then Coordinator integrated them through an independent documentation PR; see [review](reviews/DOC01.md). Old branch/commit/untracked statements below are dated checkpoints, not current checkout instructions. Read live repository status when needed; do not restore old SHA baselines. Document storage did not approve the outline or independently authorize new implementation.

## Historical Access and Main Protection (SEC01), 2026-11-14

GitHub default became main, with required PRs, no force push/deletion and administrator enforcement. Main at that checkpoint was security PR #2 merge `c8993ce`. See [policy](security/access-policy.md) and [review](reviews/SEC01.md). Public visitors could read/comment/propose PRs, not push. Figma public View and owner editing were inspected. These are dated evidence, not absolute security promises. Later CI required checks are separately documented.

## Historical Mainline Integration and Local Review (INT01), 2026-11-14

W02 merged through PR #1 as `71b29c7`; D02 already matched main's starting baseline. The shared checkout then tracked origin/main, with planning/shared files still untracked. The user chose Coordinator-led local review with Markdown decisions rather than a GitHub AI review action. Findings return to the original owner; Coordinator handles scoped PRs/merges after acceptance. Do not self-merge or inherit approval across changed revisions.

## Chapter Analysis and Manuscript Review Workflow (WF01), 2026-11-14

Coordinator read the actual user requirement and reviewed `chapter-workflow.md`, the analysis template and task entry point. [Review](reviews/WF01.md) accepted the process/template without blockers, not W01's full outline or another chapter.

Scope → research/detailed outline → analysis review/revision → confirmed writing scope → manuscript → manuscript review/revision. Send the handoff/revision/files/evidence directly; receive actionable feedback and resubmit within the same authorized task. No user relay is needed. No continuous watcher or repeated acknowledgment requests. UI03 was already read; don't re-send its summary without a reason.

## Historical Reading Experience Design update (UI03), 2026-11-14

Figma was reorganized into Tokens, Components and Page Designs, the latter grouping reading/responsive/Day/Night sections. English-first UI/annotations superseded UI02's Chinese-annotation convention; the current project-document English policy is broader still. These design changes did not change Chinese-first manuscript review, convert specimens into chapters or authorize new stages. See [review](reviews/UI03.md) and [handoff](design/reading-experience-v1.md).

## Historical Opening and Common Foundations re-review (W02), 2026-11-14

Re-review closed R1–R3. Writer then used the user's scoped post-review push authorization for four files on `codex/w02-opening-foundations`, commit `13513c9`, with remote verification. That stage was frozen. W01/shared files were then untracked and integrated later; the full outline, next chapter, English manuscript and site integration were not automatically released. See [W02](reviews/W02.md) and [integration](reviews/INT01.md).

## Historical UI02 synchronization, 2026-11-14

The user asked Coordinator to synchronize existing decisions. At the time, the working directory was `/Users/haixin/Desktop/code/beyond-the-frontend`. Inputs were README, vision, roadmap, design handoff then v2 under the retained v1 path, UI02 review, AGENTS and collaboration rules.

The message confirmed the formal titles, Jason Zhang/AI attribution, practical-engineer audience, connected frontend/backend/data/essential-operations/AI scope and no compulsory capstone. English UI with Day/Night/tokens/responsive specimens and Chinese implementation notes was the then-current design convention; it did not authorize English book rewriting. Figma article/search/code specimens were layout material, not official prose or approved chapter names.

Reading components anticipated prose, figures, callouts, code, tables and optional cards. Keep technical meaning and text alternatives rather than distort chapters to fit a board or duplicate UI under `book/`. Metadata/slugs/language/publication rules were still undecided then; the later initial content contract now resolves a deliberately small subset.

AI direction was curated questions/context/copying, no hosted chat; audio was a later one-chapter trial, not a second full manuscript. The active writing task then was R1–R3: repeated action versus current enrollment, empty lookup versus confirmed failure, and minimal W01 status correction. No new chapter/site/Git scope followed from the sync alone.

The historical message requested a local acknowledgment and no onward forwarding. The later direct handoff/feedback authorization supersedes its transport instruction. [Figma entry](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=4-115) was view-only with team view/comment defaults; do not change design/access settings without applicable authorization.

## Ongoing delivery rules

Reread AGENTS, vision, roadmap, collaboration and the handoff template when receiving work. More recent/specific user instructions take precedence; surface conflicts without dropping confirmed details. Project/repository: Beyond the Frontend / `beyond-the-frontend`; historical names are not current identity.

Within assigned scope, Writer owns prose/examples/diagrams under `book/` and its handoffs plus explicitly assigned documents. Do not edit Developer files, site or shared contracts without coordination. No standing Checker; Coordinator reviews technical/content sources. Independently express principles; handle license/attribution when actually reusing material.

For each analysis/manuscript stage maintain one concise handoff with scope, revision, exact files, actual results/sources/checks, open issues and presentation needs. Freeze and send it directly to Coordinator. Read actual feedback/review files, revise within scope and resubmit. Unperformed checks must remain explicit. If frozen files must change, update the handoff and notify the reviewer before they rely on the old revision. New dependencies/formats/site capabilities are coordination questions, not permission to edit another owner's work.

No concrete task means no implementation. This prompt does not authorize expanded scope, installation or publication. When the current documentation task passes review, stop for overall-design discussion.
