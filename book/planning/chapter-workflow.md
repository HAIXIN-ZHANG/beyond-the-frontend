# Chapter Workflow: Analysis Review Before Manuscript

Original process: 2026-11-14. English editorial update: 2026-11-15. Owner: Writer.

**Confirmed user requirement:** research and analyze each chapter carefully, specify detailed sections, submit an analysis document to the existing project reviewer, handle feedback, then write the manuscript. The manuscript still needs its own review. This process does not authorize an unscoped chapter, the complete outline, installation or publication.

## Roles

Writer owns research, analysis, outline, prose, necessary verification and revisions. Coordinator reviews actual evidence, accuracy, continuity and reader fit, then returns actionable feedback. The user sets goals/scope and is the final authority. Developer coordinates presentation needs when necessary rather than replacing content review.

“Analyzer” means the **chapter-analysis deliverable**, not another standing agent. Do not create a new analyzer agent or restore the removed Fact checker role.

## Startup and task brief

Follow the stable [Writer role guide](../../docs/writer-sync-prompt.md): AGENTS → role guide → [current board](../../docs/coordination.md) → assigned task brief and necessary inputs → verify actual checkout/branch/status/revision → one short startup report. With clear scope, execute without waiting for another receipt. The caller assigns the role and supplies the repository/conversation context; Markdown does not locate or control chats. No assignment or an applicable hold means ask Coordinator or wait, not select a chapter from the outline.

Use the opening of the existing stage [handoff](../../docs/handoffs/TEMPLATE.md) for objective, authorization, inputs, exact file ownership, acceptance criteria and next-step boundary. Do not create a separate parallel task register. The board owns current state and holds; the handoff owns execution/recovery evidence; the review owns the exact-revision decision. Shared state and recovery mechanics follow [collaboration](../../docs/collaboration.md).

## Book delivery objectives

The [eight-part outline](outline.md) remains the authoritative detailed content map: product/architecture; frontend and Design Systems; APIs/backend/integration; data/search; async/traffic/reliability; cloud/testing/delivery; observability/recovery; and AI product architecture plus coding-AI delivery. Its 48 working reading units may be split, merged or reordered; they are not a target number of files or finished chapters. Write in an approachable Chinese-first voice with accurate mechanisms, original examples, useful diagrams and conditional technology trade-offs; no mandatory capstone.

- **Product Goal 1:** establish the content direction, outline, writing/review approach and initial reviewed sources. The opening and G01 are reviewed Chinese sources; F01 has accepted analysis, not a completed manuscript. Preserve actual revision and release evidence.
- **Product Goal 2:** work toward Chinese core-draft coverage of all eight parts, with chapter-level research, analysis review and separate manuscript review as defined below. Select and sequence actual assignments with Coordinator; a representative set can be reviewed and, when separately approved, progressively integrated before the whole draft is finished. A complete core draft is not a claim that every advanced topic or language version is final.
- **Product Goal 3:** edit across the whole book for structure, continuity, missing or repeated ideas, accuracy and sources, natural tone, pacing, examples and diagrams; incorporate reader feedback and prepare English adaptation in separately reviewed batches from sufficiently stable Chinese text. Continue filling material gaps as needed. Goal 3 refinement complements chapter-level reviews rather than postponing basic correctness until the end.
- **Product Goal 4:** consider new books or audiences only in light of outcomes from this book. No content framework or delivery objective automatically assigns a chapter, changes an approved source or authorizes deployment.

Content and website work can proceed in independent, coordinated slices; a reading path or interactive example requires actual reviewed material. Preserve the distinction among outline, analysis, draft, reviewed manuscript, integration and public availability. Consult the [roadmap](../../docs/roadmap.md) for the broader product plan and the [board](../../docs/coordination.md) for live scope.

## Two distinct gates per chapter

| Step | Writer delivery | Condition to continue |
| --- | --- | --- |
| Scope | Question, reader prerequisites, assignment, allowed files | User/Coordinator has explicitly scoped the chapter; an outline is not blanket permission |
| Research and analysis | Primary/official sources, claims, limits, dependencies, candidate examples and verification plans | Enough evidence and an explanatory path to assess, not just search results |
| Analysis handoff | Completed analyzer and detailed sections/choices | Submit to the existing reviewer and await actual feedback; no complete prose yet |
| Analysis revisions | Findings addressed and scope/evidence narrowed or supplemented | Explicit acceptance of analysis and writing scope; resolve blockers first |
| Manuscript and self-check | Full chapter within the accepted analysis, necessary diagrams/code/evidence | New substantive issues return to the relevant analysis gate |
| Manuscript review and revisions | Actual prose, stage handoff, differences and real checks | Explicit manuscript acceptance; analysis approval is insufficient |
| Integration or next chapter | Exact files/Git coordination and separately scoped next work | Applicable authorization; no automatic deployment or full-book generation |

Delivery, acknowledgment, silence and elapsed time are not approval. Writer does not self-approve.

## Editorial collaboration: two reviews, distinct questions

The Coordinator may assign an overarching chapter question; Writer proposes a sensible split into reading units where useful. The eight-part outline and its working units guide coverage, not a fixed chapter or file count. Keep an approachable, accurate voice: a familiar reader problem, intuition plus precise explanation, original examples or diagrams, and conditional technology choices. This is a flexible teaching approach, not a compulsory heading template, quiz or integrated project.

1. **Review the concept and outline.** Before full prose, Writer investigates the reader's question, anticipated difficulties and attention, logical sequence, candidate examples/diagrams, relevant choices and trade-offs, source evidence, and links or boundaries with other chapters. Coordinator reads the actual analysis and gives actionable feedback on correctness, reader motivation and readability, example clarity, scope and fit with the book. Writer revises and resubmits; Coordinator accepts the analysis and writing scope before the manuscript starts.
2. **Review the actual manuscript.** After Writer drafts and self-checks, Coordinator independently checks factual accuracy and current primary evidence where needed, assumptions and failure paths, the validity of analogies/diagrams/code, language and natural reading rhythm, unwanted repetition or jargon, and alignment with the accepted concept and the book's original purpose. Coordinator gives specific locations and corrective guidance; Writer revises and Coordinator rechecks affected changes. Material changes to the concept or evidence return to the relevant first gate.

Two reviews mean two different decision points, not a limit of two feedback messages or revisions. Keep the essential explanation complete for readers who skip optional depth and exercises; do not invent work experience or test results. With accepted content and an explicitly scoped publication path, chapters can be integrated progressively rather than waiting for the complete book; integration, review and release remain separate outcomes.

## What an analysis must establish

1. **Purpose:** a concrete reader difficulty and what the reader can explain or judge afterward, not just a topic name.
2. **Boundary:** prior knowledge, concepts explained here, links to earlier chapters, later topics and optional depth. Avoid repetition and unexplained jumps.
3. **Research:** original sources, access date, supported claims and conditions/version. Separate facts, recommendations, assumptions and unverified items. Say when only an abstract/directory was inspected.
4. **Detailed sections:** working headings, questions, order, precise mechanisms, examples/diagrams, choices and transitions; explain why this sequence works.
5. **Teaching design:** familiar situation, accurate explanation and analogy limits. Include normal/failure/unknown/race paths as appropriate.
6. **Implementation and validation:** what a code/diagram/technology window should prove and how to check it. Unrun checks remain unrun; do not install tools or use paid services to fill a table.
7. **AI and languages:** add AI only where it helps. Cards are optional. State English-adaptation authorization and expressions needing adaptation; do not automatically translate the manuscript.
8. **Reviewer decisions:** concrete uncertainties and cross-role/site dependencies with their writing impact, not transfer of all editorial responsibility.

Match analysis depth to the question. Do not require a fixed source/framework/section count or repeat mature concepts to make the document longer.

## Files, language and revisions

Keep one formal analysis per assigned chapter under `book/planning/analyses/`, using the [analysis template](templates/chapter-analysis.md). Assignment confirms its working identifier and path; template placeholders are not evidence. An identifier does not define a website slug or metadata schema.

Use readable outcome titles with legacy IDs for tracing. Record distinct analysis/manuscript review identifiers and the applicable revision in the handoff. Review files remain Coordinator-owned under `docs/reviews/`; do not overwrite one gate or reuse a closed stage's approval. Material revisions need renewed review of affected content.

Project/process documents, including analyses and handoffs, are English under the 2026-11-15 policy. This does not change the Chinese-first bilingual manuscript workflow. The single Chinese process overview is `docs/stage-summary.zh-CN.md`.

Temporary leads may live in `.local/notes/writer/`; evidence needed by the reviewer belongs in formal files. Technical claims used in prose also need appropriate manuscript citations, not only internal analysis references.

## Feedback and revision

An analysis handoff names authorization, actual path/revision, detailed-section location, evidence, open decisions and **manuscript not started**. Send it directly to Coordinator and request an actual review record plus an actionable revision prompt.

Read the full returned review. For each finding, record the change location and actual checks in the same handoff, then resubmit. Acceptance must be explicit; a suggestion without a gate decision does not permit prose.

New mechanisms, source conflicts, business semantics or expanded technical/file scope return to the relevant analysis review. Ordinary wording, transitions and punctuation can be edited without reopening the research gate. Manuscript handoff explains adherence to the accepted outline, deviations and checks performed or omitted.

## Historical process evidence

Opening and Common Foundations (W02) passed re-review and merged through PR #1; see [integration](../../docs/reviews/INT01.md). Do not pretend it had the later analysis-first gate retroactively.

Chapter Analysis and Manuscript Review Workflow (WF01) accepted this process/template. Browser Fundamentals — Research and Outline (F01A) subsequently passed its own review and merged through PR #6; its original Chinese r1 is the reviewed historical revision. The English process translation has different bytes from that original r1; the later documentation revision was accepted through [AI Development Workflow and Delivery History](../../docs/reviews/ai-development-documentation.md), integrated through PR #7. Neither acceptance authorizes a new manuscript. These are historical outcomes; read the board for the current assignment/hold rather than use this section as a live chapter queue.

Direct owner→Coordinator handoff→feedback→revision is authorized within an assigned task; no user relay or background monitoring is required. Preserve reviewed prose and file ownership; Coordinator manages Git and integration.

## Interruption or replacement

Keep a readable checkpoint in the same stage handoff: actual checkout/branch/base, changed/uncommitted files and ownership, last checks/limitations, submitted and reviewed revision, open findings, next action and resumption prerequisites. A replacement follows the startup sequence, verifies the checkpoint against the checkout and reads the relevant review before editing. Ask Coordinator about unresolved scope/ownership or a hold; do not reset work or automatically resume from a historical next-step suggestion. Preserve earlier evidence and report which checks were not rerun.

A clear startup report is not another approval gate. Acceptance still requires actual review of the appropriate analysis/manuscript revision; Git merge and deployment remain separately evidenced states. Current task status belongs only in the board.
