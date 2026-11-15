# Writing Stages and Review Checklist

Updated: 2026-11-15. Owner: Writer. Prefer readable delivery names; legacy IDs and existing paths remain for traceability.

Opening and Common Foundations (W02) passed re-review and merged through PR #1. Chapter Analysis and Manuscript Review Workflow (WF01) accepted the analysis-first process. Browser Fundamentals — Research and Outline (F01A) passed review and merged through PR #6. The full Editorial Baseline and Content Map (W01) is still a proposal. **No new manuscript is authorized to start now.**

Current priority is AI Development Workflow and Delivery History: assigned English process documents and one Chinese stage summary. Finish its review/revisions, then pause for the user's overall-design discussion; documentation acceptance does not automatically resume F01M, English manuscript adaptation, code or deployment.

## Browser Fundamentals — Research and Outline (F01A)

- **Original scope:** Coordinator assigned analysis on 2026-11-15 in `/tmp/btf-writer-f01a`; Writer maintained analysis/handoff/task status only, without Git writes.
- **Delivery:** [analysis](analyses/F01.md), [handoff](../../docs/handoffs/writer/F01A.md): source conditions, seven sections, original cases/diagrams and specific validation plans. No prose chapter was written.
- **Checks:** specified source sections and document checks performed; browser experiments were not run. No trace, measurement or performance result was invented.
- **Actual gate:** [review](../../docs/reviews/F01A.md) accepted original Chinese r1. PR #6 passed three cloud checks and merged as `4ff4a1f`. The English process translation is an editorial revision for separate documentation review; the historical reviewed hash is not its current hash.
- **Next:** Browser Fundamentals — Manuscript (F01M) needs its separate confirmed files/acceptance and a resumption instruction after the design discussion. Analysis acceptance is not manuscript acceptance/publication.

## Process and roles

Scope → research/detailed outline → analysis review/revision → confirmed writing scope → manuscript/self-check → manuscript review/revision → recorded acceptance → authorized integration or separately scoped next work. See [workflow](chapter-workflow.md) and [analysis template](templates/chapter-analysis.md).

Drafted, reviewed, merged and published are distinct. Writer does not self-approve, alter a frozen submission silently or launch a dependent stage on its own.

| Role | Responsibility |
| --- | --- |
| User | Goals, preferences, final choices and scope authorization |
| Coordinator / reviewer | Assignment, content/source review, shared decisions/contracts, feedback, verification and integration; does not ghostwrite the owner's formal deliverables |
| Writer | Scoped planning/prose/diagrams/sources/handoffs and their revisions; assigned product explanations |
| Developer | Shared-source presentation and reading validation under accepted contracts; engineering documentation |

No standing Fact checker. Independent chats do not watch messages/files automatically; a submitted handoff does not mean review has occurred.

## Editorial Baseline and Content Map (W01): historical delivery, full outline pending

**Inputs:** confirmed discussion, then-current AGENTS/shared context/board/collaboration, Writer synchronization, handoff template and the topic inventory.

**Files:** `editorial-brief.md` separates confirmed direction/persona assumptions/proposals; `outline.md` gives chapter questions/scope/cases/prerequisites; this file defines stages/acceptance; `docs/handoffs/writer/W01.md` records evidence and dependencies.

**Historical completion:**

- [x] Record accurate book/project names.
- [x] Record audience, voice, cases, sources and bilingual principles with evidence boundaries.
- [x] Propose detailed three-part coverage without a page cap.
- [x] Explain AI coding, skills and AI product capability placement.
- [x] Establish staged handoff/review/revision.
- [x] Check structure, local links and chapter/task mapping; report actual results.
- [x] Submit the planning handoff and stop.
- [ ] Complete full-outline review and record the decision. Only the reviewer can establish that acceptance.

**Original boundary:** planning only; no prose, English sample, teaching code/diagrams, website/schema/synchronization tools, installation, commits, pushes or release. W02's later authorization does not rewrite those facts.

## Opening and Common Foundations (W02): accepted and merged

**Basis/result:** the user asked for opening/basic material, then Jason Zhang attribution, disclosure of AI assistance throughout and a first-person motivation. [Review](../../docs/reviews/W02.md) requested R1–R3 and later closed all findings; the four-file stage merged through PR #1. See [scope](W02-scope.md) and [integration](../../docs/reviews/INT01.md).

**Files:** `book/drafts/zh/00-before-we-start.md`, `book/drafts/zh/01-a-page-and-a-system.md`, `book/planning/W02-scope.md`, `docs/handoffs/writer/W02.md`. R3's W01 status edits were reported separately. Temporary manuscript paths did not themselves define routing/metadata/publication; the later [minimal content contract](../../docs/content-contract.md) accepts these two reviewed drafts for a future assigned reading implementation without changing their bytes.

- [x] Deliver opening/foundations and text diagrams with sources and assumptions.
- [x] R1: distinguish a refused duplicate action from an existing enrollment.
- [x] R2: distinguish a temporarily empty query from confirmed failure.
- [x] R3: correct names/stage mapping without approving the full outline.
- [x] Update handoff, check structure/links and submit re-review.
- [x] Reviewer closed R1–R3; commit `13513c9` on `codex/w02-opening-foundations`, then PR #1 squash merge `71b29c7`. W01/shared dependencies were excluded from that PR. This status comes from actual review/integration records, not Writer self-approval.

**Boundary:** no automatic next chapter, English prose or site integration. Git file scope/timing belongs to Coordinator; do not include another owner's unreviewed work.

## English Sample and Bilingual Alignment (W03): candidate, not started

**Prerequisite:** accepted Chinese sample plus coordinated language/path/status/asset rules. **Scope:** adapt the stable sample naturally, record humor/analogy/terminology difficulties, retain technical scope.

- [ ] Preserve facts, conditions, reasoning, limits and code behavior.
- [ ] English reads independently, permits paragraph reorganization and retains uncertainty.
- [ ] Reuse appropriate code/diagram structure with clear language labels.
- [ ] Coordinate corresponding files, update-review needs and switching; do not claim unimplemented software.
- [ ] Submit a scoped handoff, freeze and await review. Do not create its file before assignment.

English process-document translation in the current iteration is not W03 or an English book sample.

## Suggested later Chinese batches

These are coverage groups, not an execution queue. Coordinator may select, reduce, reorder or split a coherent group after review. Each batch needs an outcome name, legacy ID when assigned, exact files, acceptance and review.

| Candidate group | Proposed coverage | Connection |
| --- | --- | --- |
| Browser/layout/design foundations | F01–F04, building on G01 | Browser, real content, design rules and tokens |
| Components and state | F05–F08 | Contracts, ownership, forms and async data |
| Frontend quality/evolution | F09–F12 | Accessibility, rendering, types/builds and governance |
| Requests/business/data | B01–B04 then B05–B08 | Contracts/permissions/modules and correctness |
| Async/capacity/reliability | B09–B13 | Performance/tasks/messages/retry/execution |
| Continued operation | B14–B18 | Runtime/network/containers/delivery/incidents |
| Data/analytics | B19–B22 | Sources to trusted metrics |
| AI product foundations | B23–B25 | Output/retrieval/controlled execution/evaluation |
| Connected cases, first group | C01–C03 | Themes/search/uploads |
| Connected cases, second group | C04–C07 | Enrollment/analytics/AI capability/AI collaboration |

No fixed number of chapters per batch. F04 is unstarted. G01 exists; revise its single source with recorded review impact rather than write duplicates. F01A does not authorize the whole first batch. English batches need separate authorization after corresponding Chinese stabilizes; use a sample to calibrate style rather than waiting for a finished book or translating every unstable draft automatically.

## Common acceptance for a manuscript batch

- [ ] Formal analysis, checked sources and detailed sections accepted, feedback handled, writing scope explicit.
- [ ] Reread current inputs/reviews and verify dependencies/revisions rather than trust an old summary.
- [ ] Modify only assigned Writer files; report site/shared requirements through handoff.
- [ ] Connect principles, examples and choices rather than list terms.
- [ ] Avoid cross-chapter contradiction; give repeated concepts a main explanation and useful links.
- [ ] Official sources/dates support necessary product/framework details; no invented citations, experiments or benefits.
- [ ] Address normal/failure/unknown outcomes to the depth needed.
- [ ] Check diagrams/code/tables; give environment evidence for actual execution/rendering and mark omissions.
- [ ] Separate experiments from teaching assumptions and real employer experience.
- [ ] Freeze and submit; acceptance belongs to the reviewer.

## Independent whole-book and release stages

1. **Chinese manuscript editing:** after author reading, adjust order/depth/repetition/transitions/terminology/case continuity, then revise the opening/public summary.
2. **English editing and semantic alignment:** check tone/meaning/technical correspondence and Chinese-driven updates.
3. **Real reading acceptance:** Developer checks directory/languages/links/code/diagrams/desktop/mobile; Writer handles prose issues.
4. **Final content review:** facts/versions/citations/reuse/TODOs/content status/known limits.

Each requires its own scope/handoff. Finished drafts do not imply publication. Licenses, contribution, installation and release follow author decisions and applicable authorization. Earlier post-QA Pages authorization remains recorded, but new execution is paused pending overall-design discussion.

## Applying feedback

Owners maintain one stage handoff under `docs/handoffs/writer/` using the [template](../../docs/handoffs/TEMPLATE.md). Coordinator records accepted/needs changes/insufficient evidence with revision, location, owner and acceptance criteria under `docs/reviews/`.

Send the handoff path/revision/files/evidence directly, then handle actual feedback in the same handoff and resubmit. The user need not relay routine messages. Analysis acceptance precedes prose, and prose receives separate review. If frozen files must change, report the change before a reviewer relies on the old revision. Cross-role accepted decisions go into shared documents through assigned ownership; this plan does not override contracts, the board or Developer assignments.

All current documentation work stops after review/revisions for the next overall-design discussion. Project/repository identity remains Beyond the Frontend / `beyond-the-frontend`.
