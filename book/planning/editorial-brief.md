# Editorial Baseline: Beyond the Frontend

Original planning date: 2026-11-14 (Australia/Perth). English editorial update: 2026-11-15. Owner: Writer.

This is the **Editorial Baseline and Content Map** planning package (legacy W01), not manuscript prose or a replacement for the [vision](../../docs/project-vision.md) and [roadmap](../../docs/roadmap.md). Separate confirmed direction from Writer's proposals. The full outline has not been approved.

## Current status and historical scope

- W01 delivered planning only; its exact chapter splits, identifiers and batches remain proposals.
- The separately authorized **Opening and Common Foundations** (W02) passed re-review, with R1–R3 closed. Its two Chinese drafts, scope and handoff merged through PR #1; see [W02](../../docs/reviews/W02.md) and [integration](../../docs/reviews/INT01.md). This did not approve the full outline or integrate prose into the website.
- The token sample F04 was an earlier candidate, not the actual W02. English manuscript adaptation has not begun.
- **Chapter Analysis and Manuscript Review Workflow** (WF01) accepted the two-gate process. **Browser Fundamentals — Research and Outline** (F01A) later passed review and merged through PR #6; its manuscript remains unwritten.
- The earlier DOC01 pass only aligned then-untracked planning, handoff and research status. It did not edit accepted prose or authorize the next chapter.
- Current priority: **AI Development Workflow and Delivery History** documentation. Translate assigned process documents into English and prepare the single Chinese stage summary. New prose and code stages are paused. See [roadmap](../../docs/roadmap.md) and [history](../../docs/development-history.md).

## Confirmed identity

| Item | Name |
| --- | --- |
| Chinese book title | 《前端往后看：能跑，然后呢？》 |
| English book title | Beyond the Frontend: It Works. Now What? |
| Project / repository | Beyond the Frontend / `beyond-the-frontend` |

Engineer Better / `engineer-better` is historical. The author is **Jason Zhang**, with AI assistance throughout creation. Existing drafts do not mean the complete book is written or reviewed. The promotional copy below remains a discussion draft.

## Why this book

Frontend Design Systems, backend System Design, data, operations and AI collaboration are often learned separately. Help readers with practical experience see how they jointly support a product.

The goal is to explain the problem, responsibility and state boundaries, cooperation between parts, costs, evidence of correctness and changes required under new conditions. Product thinking means identifying who has a problem, whether the feature solves it, how waiting/failure affects people and which requirements are worth pursuing. Architectural judgment concerns responsibilities, data, time, dependencies, quality constraints and evolution. Explain both through decisions rather than slogans.

Distinguish using AI to develop software from adding AI capabilities to a product. Neither an AI-tool manual nor progressively more elaborate agent configuration is the goal.

## Readers and working personas

Primary readers have built real features and want to connect fragmented knowledge and improve judgment across domains. Do not use years, title or geography as a gate. These personas are **editorial hypotheses, not validated interview or market-research findings**.

| Persona | Familiar ground | Main question | Needed support |
| --- | --- | --- | --- |
| Frontend engineer looking beyond the UI | Pages, components, forms, API calls | How do permissions, caching and background tasks affect UI state? | Connect interface behavior to APIs, data, services and operations |
| Backend engineer looking at the whole product | APIs, SQL, business logic | Is a queue or service split needed? How should system state reach the UI? | Explain technical costs and their user consequences |
| End-to-end builder strengthening judgment | Full-stack features, personal projects, internal tools; possibly frequent AI use | What is missing after it runs locally? How should AI output be checked? | Connected cases, failure paths, evolution and verification |

Assume exposure to components, APIs, databases and Git, but not transaction isolation, message delivery, semantic tokens or agents. Supply brief syntax support and deeper links without turning the main argument into a beginner language course. Experienced readers may fill gaps in another domain; do not promise specialist depth everywhere or organize the book around interviews, certification or promotion.

## Confirmed content direction

1. Three parts: frontend; backend and data; connected cases across layers. Keep common foundations in a short introduction rather than a large abstract theory part.
2. Explain through examples throughout the first two parts. The last part emphasizes cross-layer decisions instead of repeating definitions.
3. Set no page/word cap now. Produce coherent drafts and adjust depth after the author reads them. Completeness does not require every framework API.
4. Markdown is the content source for sequential reading and problem-based lookup. Shared schema, site contracts and diagram formats require coordination rather than independent decisions in this plan.
5. No compulsory capstone or exercises. Reflection questions include analysis, conditions and possible judgments. Use code/experiments when needed to explain.
6. Check scope against books, blogs and courses, but independently organize prose and examples. Jiangren's employment, interview, certification and training arrangements are outside scope.

## Proposed voice, to test in chapters

Write like a patient colleague who wants to explain clearly: relaxed, direct and concrete. Begin with an observable problem, then introduce terms and mechanisms. Avoid dismissive language such as “obviously” or “easy,” elaborate fictional characters, dramatic incidents and constant jokes.

A useful relationship, not a mandatory section template:

> Familiar situation → why the problem appears → intuition and accurate mechanism → original example or diagram → choices and trade-offs → reflection after a condition changes.

- **Main prose:** necessary for understanding the case and making basic judgments.
- **Optional depth:** special mechanisms and conditions that can be skipped without breaking the argument.
- **Diagrams:** structure, sequence, state or data flow, with arrow meanings, assumptions and text explanations.
- **Code:** the parts that affect understanding; label simplifications and limits. Add complete runnable material only when useful.
- **Tables:** genuinely comparable choices without unconditional product rankings.
- **Analogies:** intuition followed by their limits.

## Recurring original teaching scenarios

| Scenario | Connections |
| --- | --- |
| Components and themes | Design Systems, tokens, component contracts, accessibility, design/code and migration |
| Search and permissions | URL/UI state, request races, APIs, SQL, authorization, pagination and caching |
| Upload, processing and notification | Object storage, task state, workers, messages, subscriptions, retry, UI feedback and operations |
| Popular enrollment | Transactions, constraints, idempotency, rate limits, capacity, waiting and unknown outcomes |
| Learning analytics | Records, events/CDC, ingestion, transformation, scheduling, metrics and quality |

An additional AI-product case reuses document and permission context. These are fictional teaching designs, not the author's/employer's production systems. Separate experiments from narrative assumptions.

## Principles and frameworks

Explain the problem and principle before the pattern and implementation. Use concrete decisions to teach separation of concerns, information hiding, cohesion/coupling, composition, dependency direction, business boundaries and incremental evolution. Explain what SOLID, DRY, KISS and YAGNI protect and how they can be overused rather than merely listing acronyms.

Choose a few representative frontend, backend, messaging, cloud or data implementations per topic. Compare ecosystems only when the difference changes a decision. A framework is not the principle; course frequency is not adoption evidence.

React/Vue/Angular, Next.js/Nuxt, Node.js/NestJS, FastAPI, ASP.NET Core, Spring Boot and database/message/cloud products remain candidate teaching references, not a settled book-wide stack. Verify versions and behavior when the relevant chapter is authorized. This distinction does not unset the website's separately accepted stack.

## Two AI threads

| Thread | Coverage | Placement |
| --- | --- | --- |
| AI-assisted development | Reading code, requirements/acceptance, task boundaries, context, contracts, tools, skills, diff review, debugging and verification | Relevant local examples plus a connected delivery case |
| AI product capabilities | Model output, structured validation, streaming, retrieval/permissions, tools, state/memory, evaluation, cost and fallback | Backend principles followed by a connected case |

Explain a reusable skill through its applicability, input, steps, references, necessary scripts and acceptance, including when no skill is needed. Distinguish project conventions, current instructions, skills, tools and authorization. MCP, workflow, agents and multi-agent coordination have different roles and costs; they are not a mandatory maturity ladder.

Keep key inputs, necessary diffs, actual observations and human judgment. Do not dump entire chats, mark unrun checks as passed or claim efficiency/reliability improvements from impressions.

## Bilingual manuscript: align meaning, write each edition naturally

Maintain two authored versions. Establish meaning in Chinese, then adapt and review English. Software handles language switching, chapter mapping and update notices, not on-demand translation of official prose when a reader opens a page.

Preserve technical facts, premises, reasoning, limits and code behavior. English may reorganize sentences, paragraphs and transitions; retain the purpose of humor and analogies rather than literal wording. Do not add conclusions or drop uncertainty. Flag expressions that need editorial judgment. Reuse code and diagram structure where possible with corresponding labels; asset rules await the content contract.

Calibrate English through a sample after the Chinese sample is accepted; later adaptation follows stable Chinese batches rather than waiting for the entire book or automatically translating unstable drafts. Reminders when Chinese changes require English review are a proposed tool/site need, not implemented behavior.

**Documentation language is separate:** this process document is English under the 2026-11-15 policy; Chinese manuscript files remain unchanged. The sole Chinese process summary is `docs/stage-summary.zh-CN.md`.

## Sources and verification

Separate documented behavior, experiments, experience, assumptions and recommendations. Check changing product details against official sources and verify code/numeric claims proportionately. Actual third-party reuse needs license and attribution handling.

The [Jiangren topic inventory](../../docs/research/jr-academy-topic-map.md) checks coverage, not technical truth. Earlier discussion referenced Design Systems, Atomic Design, web.dev, DDIA, data-engineering books, SRE and public AI-engineering material. Do not claim complete reading of material not read in full.

## Promotional copy under discussion

This is an English documentation adaptation of the earlier copy discussion, not publication approval or an English manuscript sample.

**Opening line:** The code works. What should we look at next?

**Short description:** Look beyond the interface to connect frontend, backend, data and AI collaboration, and understand the design decisions behind a working feature.

**Repository description:** A practical guide connecting frontend, backend, data, and AI collaboration—one working feature at a time.

**Summary:** The page is built and the API responds. But how do component boundaries, data ownership and background tasks fit together? For developers who want to connect what they already know, this book starts with familiar features and explores frontend, backend, data and working with AI to design, implement and verify software. Understand the parts and how they form a product.

These are original copy proposals, not third-party quotations. Coordinator reviews and coordinates any use in README/site with the author and relevant file owner; Writer does not change those files here. Original Chinese discussion wording remains recoverable in Git.

## Planning entry points

- [Detailed content map](outline.md): proposed chapter questions, scope, cases and prerequisites.
- [Writing stages](tasks.md): scope, acceptance and review rules.
- [Editorial planning handoff (W01)](../../docs/handoffs/writer/W01.md): historical delivery and checks.
