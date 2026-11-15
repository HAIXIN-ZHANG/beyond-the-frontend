# Chapter Workflow: Analysis Review Before Manuscript

Original process: 2026-11-14. English editorial/status update: 2026-11-15. Owner: Writer.

**Confirmed user requirement:** research and analyze each chapter carefully, specify detailed sections, submit an analysis document to the existing project reviewer, handle feedback, then write the manuscript. The manuscript still needs its own review. This process does not authorize an unscoped chapter, the complete outline, installation or publication.

## Roles

Writer owns research, analysis, outline, prose, necessary verification and revisions. Coordinator reviews actual evidence, accuracy, continuity and reader fit, then returns actionable feedback. The user sets goals/scope and is the final authority. Developer coordinates presentation needs when necessary rather than replacing content review.

“Analyzer” means the **chapter-analysis deliverable**, not another standing agent. Do not create a new analyzer agent or restore the removed Fact checker role.

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

## Current checkpoint

Opening and Common Foundations (W02) passed re-review and merged through PR #1; see [integration](../../docs/reviews/INT01.md). Do not pretend it had the later analysis-first gate retroactively.

Chapter Analysis and Manuscript Review Workflow (WF01) accepted this process/template. Browser Fundamentals — Research and Outline (F01A) subsequently passed its own review and merged through PR #6; its original Chinese r1 is the reviewed historical revision. This English editorial translation has different bytes and requires documentation review, not inherited byte-level approval. Browser Fundamentals — Manuscript (F01M) has not started and is paused for the documentation priority.

Direct owner→Coordinator handoff→feedback→revision is authorized within an assigned task; no user relay or background monitoring is required. Preserve reviewed prose and file ownership; Coordinator manages Git and integration.
