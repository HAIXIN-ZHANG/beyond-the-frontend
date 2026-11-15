# Jiangren Academy: Public Technical Topics and Book-Coverage Proposals

Research date: 2026-11-14 (Australia/Perth). English editorial translation: 2026-11-15; **no new website research or technical revalidation** was performed for the translation.

Historical naming: the working name during this inventory was Engineer Better, now **Beyond the Frontend / `beyond-the-frontend`**. The earlier naming-only update did not refresh the evidence. Status: reference inventory and editorial proposals for the author and Coordinator, not an accepted chapter list, technology selection or release decision.

## Original task and scope

The user authorized inspecting Jiangren's public learning material to record industry topics and suggest book coverage. The original task added only this note, without changing shared decisions, writing chapters or implementing the website.

Use the discussed three parts: frontend; backend/data; connected cases. Aim for coherent drafts before imposing page limits, then adjust after a complete reading. Reference technical directions and knowledge scope, not site prose, course structure, branding or teaching projects. Develop original questions, explanations, code and diagrams. Employment, interviews, résumés, exam preparation, training schedules and placement marketing are outside this book.

## Evidence boundary

This was a horizontal inventory of major public entry points and topic lists, not an exhaustive page-by-page review. It did not watch all videos, read all tutorials, run examples or establish teaching outcomes. Listing a topic shows advertised coverage, not depth, correctness or industry adoption.

Some pages were unavailable through the web-reading tool; their public lists were then inspected in a browser. This note stores learning topics, not account state or personal information.

| Source | Public page | Actually inspected in the original research |
| --- | --- | --- |
| JR-01 | [Home](https://jracademy.ai/) | Navigation to learning material, courses, Wiki, roadmaps and Lab |
| JR-02 | [Full-stack course](https://jracademy.ai/program-course/web-code-bootcamp-or-learn-to-code-1) | Technical-scope description and full-curriculum entry |
| JR-03 | [Public full-stack curriculum](https://jracademy.ai/curriculum/web-code-bootcamp-or-learn-to-code-1/curriculum.html) | HTML/CSS/JS, Git, React, Node.js, data/authentication, AI integration and deployment entries |
| JR-04 | [DevOps course](https://jracademy.ai/program-course/devops) | Public technical groups and initially expanded items; remaining groups not individually expanded |
| JR-05 | [Data-engineering course](https://jracademy.ai/program-course/data-engineer-data-analyst) | Public items and technical-scope description |
| JR-06 | [AI Engineer learning direction](https://jracademy.ai/learn/ai-engineer) | Application integration, retrieval, tools, evaluation and deployment direction |
| JR-07 | [AI Engineer Bootcamp](https://jracademy.ai/program-course/ai-engineer-bootcamp) | Current technical levels and groups explicitly labelled as past-course reviews; cohorts kept separate |
| JR-08 | [Roadmaps](https://jracademy.ai/roadmaps) | Directory and item summaries, not every diagram node or external reference |
| JR-09 | [Wiki](https://jracademy.ai/wiki) | Recommended content, learning paths and titles/summaries on the first list page; no pagination or tutorial-body survey |
| JR-10 | [Cheat Sheets](https://jracademy.ai/cheat-sheets) | Categories and entry names; no code/command audit |

The blog entry was found, but page reading failed and article bodies were not reviewed. Dedicated Context Engineering/frontend learning pages were not reviewed in detail either; record their topics only when explicitly present in other inspected sources.

## Topics explicitly listed

Product names identify topics, not a selected book stack.

| Direction | Observed coverage | Sources |
| --- | --- | --- |
| Web/frontend | HTML/CSS/responsive/JS/DOM/async requests; React components/state/routing/forms | JR-03 |
| Backend/business data | Node.js/Express/REST/MongoDB/authentication/permissions/CRUD/integration | JR-03 |
| Collaboration/tools | Git branches/merge/PR/conflicts; package managers/editors/debugging paths or references | JR-03/JR-10 |
| DevOps/operations | Containers/CI/CD/system fundamentals/IaC/monitoring/logging/orchestration/availability/incidents; DNS/CDN/cloud identity | JR-04 |
| Data engineering | File/API extraction, SQL, cloud storage, warehouses/lakes, Kafka/Kinesis, Spark, Airflow/dbt and security | JR-05 |
| Analytics/ML | Analysis, visualization, ML foundations, evaluation/deployment, Pandas/BI entry points | JR-05/JR-09 |
| AI-assisted development | Decomposition/context/review/debugging/testing/revision; editor/terminal tool guides | JR-03/JR-09 |
| LLM applications | APIs/streaming/structured output/embeddings/RAG/hybrid retrieval/reranking/tools/MCP | JR-06/JR-07 |
| Agents/operational quality | Execution loops/orchestration/memory/control/tracing/budgets/fallback/human intervention/security/evaluation | JR-07 |
| Architecture/other tracks | System design/software architecture/AWS/QA and mobile/blockchain/WordPress roadmaps | JR-08 |

JR-09/JR-10 list additional frameworks, languages and tools. Lists can reveal gaps, but item counts and marketing are not evidence of required skills, mainstream adoption or expertise.

## Proposed coverage: keep three parts and strengthen connections

Everything below is an editorial recommendation. It either makes existing scope concrete, names previously implicit knowledge or offers optional depth/reference material.

### Frontend

| Topic | Relationship to earlier outline | Proposed treatment | Connected case |
| --- | --- | --- | --- |
| HTML/CSS/browser | Existing; clarify mechanisms | Semantics/layout/DOM/events/rendering through broken layout, focus and updates, not a complete syntax course | Components/themes/forms |
| JS async/runtime | Existing; make concrete | Essential Promise/async/await/event-loop/error/cancellation ideas through out-of-order responses | Search/permissions |
| TypeScript/runtime validation | Make explicit | Component/API contracts; separate static and external-input checks; avoid type puzzles | Search API/forms |
| Dependencies/build | Make explicit | Packages/versions/lockfiles/artifacts/environment; development versus deployment; basic supply-chain judgment | First deployment/debugging |
| Components/state/routing/forms | Existing | Ownership/data flow/composition/contracts before a representative framework; compare meaningful differences | Theme/search/enrollment |
| Data fetching/async UI | Existing; clarify failures | Loading/empty/error/stale/cancel/retry/disconnect; partial/interrupted AI streams | Search/upload/AI Q&A |
| Performance/accessibility | Retain emphasis | Observable behavior and evidence, not lists of tricks or compliance terms | Slow search/forms/dialogs |
| Design System | Retain book emphasis | Tokens/semantic roles/themes/boundaries/Figma/code/docs/evolution; do not shrink it to match course priorities | Multi-theme case |

### Backend, data and operations

| Topic | Relationship | Proposed treatment | Case |
| --- | --- | --- | --- |
| API/authentication/authorization/tenants | Existing | Requests/responses/decisions; UI hiding versus server access control | Search/permissions |
| Modules/business rules | Existing | Modular monolith responsibilities/dependencies/transactions before service-split triggers | Enrollment/upload |
| Reading real SQL | Make database scope explicit | JOIN/aggregation/NULL/constraints/indexes/plans; CTE/windows as needed; duplicates and grain | Search/analytics |
| Transactions/concurrency/cache/messages | Existing | Preserve depth; use timelines for duplication, failure windows and stale data rather than returning to CRUD | Enrollment/notifications |
| Processes/ports/Linux | Make explicit | Run/exit/permissions/environment/logs/limits with a few explained diagnostics | Local works, deployment fails |
| Cloud networking/identity | Clarify structure | Entry/proxy/DNS/TLS/CDN; public/private/subnet/egress/workload identity | Upload/public access |
| Containers/orchestration | Clarify mechanisms | Images/containers/network/volumes/config/health; one service before orchestration/Kubernetes | API/worker deployment |
| CI/CD/IaC | IaC made explicit | Code→checks→artifacts→environment; configuration/infrastructure review, drift/permissions/state/recovery | Controlled release |
| Monitoring/availability/incidents | Existing | User impact connects logs/metrics/traces/alerts/degradation/recovery; verify restoration alongside backups | Upload backlog/enrollment peak |
| Ingestion/pipelines | Clarify failures | Pagination/limits/checkpoints/incremental watermarks/duplicates/schema; preserve provenance, reruns/backfills | Learning analytics |
| Processing/orchestration tools | Concrete windows | Candidate SQL/Python/DataFrame/dbt/Airflow/Spark; separate transformation/scheduling/execution/distributed compute | Report generation/refresh |
| Warehouses/lakes/metrics | Existing | Connect OLTP/CDC/ETL/ELT/models/definitions/late data/quality/permissions into a flow | Conflicting reports |
| AI application foundations | Separate responsibilities | Model API/output validation/token/context/streaming; retrieval versus tools versus model | AI feature |
| AI retrieval/execution quality | Explicit levels | Chunking/embeddings/keyword/vector/hybrid/reranking/citations; tool arguments/permissions/timeout/stopping/budget/fallback/evaluation | Authorized document Q&A |

### Connected cases

| Original case | Connections | Changed conditions and judgment |
| --- | --- | --- |
| Multi-theme components | Principles/tokens/contracts/types/accessibility/design/code/migration | For a new brand, change values, mappings, components or business UI? |
| Authorized search | URL/UI state/async/API/SQL/permissions/pagination/cache/logging | Which layer changes for slow queries, permission updates or request races? |
| Upload, processing and notification | Storage/access/tasks/queue/worker/events/retry/UI/deployment/monitoring | Recover after departure, duplicate tasks, worker exit or failed notification |
| Popular enrollment | Feedback/idempotency/transactions/constraints/limits/queue/capacity/alerts | Separate correctness from capacity |
| Trustworthy learning reports | Source records/events/CDC/incremental ingestion/transformation/orchestration/models/definitions/quality | Backfills/reruns/late events/user deletion |
| AI in an existing product | Authorized documents/retrieval/output/citations/tools/evaluation/cost/UI/deployment | Missing/conflicting data, unauthorized access, timeout/model change |

Release/failure/recovery segments in these cases can carry Git/CI/CD/IaC and debugging without adding a mandatory capstone.

## AI coding, skills and AI applications

### AI-assisted development across relevant chapters

Show reading code, clarifying requirements, splitting tasks, preparing context, implementing a small change, reviewing its diff, verifying and correcting. Keep key inputs, necessary diffs and evidence, not full transcripts or invented execution/productivity results.

Give Git/review a concrete role: identify changed files, expanded scope, checks actually run and safe recovery from an unsuitable edit.

### Skills as reusable methods

Use original cases such as adding a form component or reviewing an API contract. Identify repetition, then specify applicability, input, steps, references, scripts and acceptance. Test different requirements for omissions and false triggers.

Explain why the method is divided this way, when no skill is needed, and maintenance/validation; a bare `SKILL.md` template is insufficient. Separate project conventions, task instructions, skills, tools and permissions. This inventory did not establish full coverage of those topics in Jiangren skill articles; they are this book's recommendations based on the user's request.

### AI as a product capability

Connect model requests, retrieval, tool execution and UI feedback. Evaluate normal and failure paths using deterministic checks and necessary human judgment alongside model-assisted scoring. Verify concrete models, SDKs, frameworks and services against official sources when writing the chapter.

Introduce sessions, business state and persistent memory when needed. Discuss multi-agent systems when dependencies, shared state and coordination costs warrant it. Offer deeper routes for fine-tuning/training without making the book an algorithms textbook.

## Depth and framework choices

| Layer | Inclusion test | Examples |
| --- | --- | --- |
| Main prose | Necessary to understand the case or make basic judgments | State/boundaries/API/permissions/data/concurrency/messages/deployment/verification/AI reliability |
| Optional depth | Explains special conditions or further trade-offs | Database internals/complex orchestration/Kubernetes/distributed compute/fine-tuning |
| Appendix/reference | Reminds readers of syntax, commands or locations | Git/curl/SQL/environment/logs/terminology |
| Outside scope | Does not support the main questions or becomes a separate specialist track | Employment/certification/mobile/blockchain/WordPress/full ML algorithms/general office or media tools |

Introduce frameworks through problem → principle → implementation → trade-off. Choose one principal implementation per topic; compare ecosystems when differences matter. Choices remain open. A course product list does not fix the book stack. Any quick reference must be original with official links; public availability is not permission to copy expression or code.

## Priority outline improvements proposed at the time

1. Explicit frontend TypeScript/runtime boundaries and dependencies/builds; make async problems concrete.
2. Connect runtime fundamentals, cloud networking/identity, containers, CI/CD and IaC into an understandable deployment chain.
3. Add practical SQL, ingestion failures, incremental/rerun behavior and transformation-versus-scheduling responsibilities.
4. Keep the development/product AI threads separate; clarify retrieval/evaluation/execution control/failure experience.
5. Carry additions through existing cases while retaining Design Systems, architecture trade-offs, reliability and original explanations.

These fill scope gaps; they do not demand one chapter per product or remove editorial selection because page count is open.

## Historical checks and next dependency

- **Original change:** only `docs/research/jr-academy-topic-map.md` was added.
- **Performed:** horizontal public-list inspection, source registration, topic synthesis, comparison with the discussed outline, observation/proposal separation.
- **Not performed:** full-site crawl, course-quality review, running examples, official verification of every technology, chapter writing or stack selection.
- **Chapter evidence:** verify product behavior/version/limits in official documentation; attach environment conditions to experiments; check license/attribution for actual reuse.
- **Next dependency at the time:** author/Coordinator review of coverage, chapter splits and assignment. This note neither changes the board nor authorizes another role.
- **Translation boundary:** the 2026-11-15 English revision preserves the inventory's source identifiers, URLs, date and limitations; it does not turn the original observations into current verification.
