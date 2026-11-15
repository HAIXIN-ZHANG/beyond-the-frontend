# Detailed Content Map: Editorial Proposal (W01)

Original proposal: 2026-11-14. English editorial/status update: 2026-11-15. Owner: Writer. **The full 45-chapter outline remains a proposal, not an approved table of contents.** Opening/Common Foundations (W02) was separately reviewed and merged through PR #1; Browser Fundamentals research (F01A) was separately accepted and merged through PR #6. Neither approves the remaining list. See [writing stages](tasks.md).

The three-part direction is confirmed. Names, splits, ordering and identifiers below are Writer's proposals, not routes, paths, frontmatter or a content contract. English working labels translate the planning map; they do not constitute an English manuscript or final published chapter titles.

Do not impose a total page cap now. Explain a specific question per chapter and adjust splits after actual drafts. Use local examples throughout Parts I/II; Part III emphasizes cross-layer choices rather than repeating definitions.

## Common Foundations: What Is a Page Connected To? (G01)

- **Question:** Why can every local part work while the feature still fails its purpose?
- **Coverage:** user tasks, frontend/backend/data relationships; boundaries, state, time and dependencies; requirements, latency, reliability, costs and maintenance; structural, sequence and state diagrams.
- **Case:** search for a course, enroll and find the learning record again. Start with minimal relationships, not a complete cloud diagram.
- **Judgment:** identify responsibilities and distinguish facts, assumptions and decisions needing validation.

## Part I: Frontend, from Interfaces to Product Behavior

### Browser Fundamentals: Before the Page Appears (F01)

- **Question:** Why is content sometimes absent, and sometimes visible but not ready to respond?
- **Coverage:** HTML/CSS/JS roles; DOM, style, layout and paint; events/main thread; network, resource and rendering waits.
- **Case and outcome:** course-search loading and interaction; locate the kind of wait before choosing a fix. Protocol details belong in B01; rendering strategies in F10. The accepted F01A analysis narrows this chapter's actual writing scope; manuscript work is paused.

### When Real Content Meets a Design (F02)

- **Question:** Why does a card break with a different title or screen?
- **Coverage:** hierarchy, type, spacing, box model, Flex/Grid, content-driven and responsive layout; long text, empty data, languages and necessary motion.
- **Case and outcome:** course cards, search results and forms; visual rules must hold with real content and sizes.

### Why a Component Library Still Needs a Design System (F03)

- **Question:** Why do pages remain inconsistent as the library grows?
- **Coverage:** principles, shared language, foundations, patterns, components, documentation and governance; library versus system; team size and maintenance costs.
- **Case and outcome:** similar buttons diverging; decide whether to unify appearance, behavior or usage conventions. Explain Atomic Design and its limits without imposing a unique naming hierarchy.

### One Blue, Several Names (F04)

- **Question:** Does the same color value mean two uses should always change together?
- **Coverage:** design decisions, primitive/semantic/optional component tokens, references, purpose, theme mapping, state/color combinations and CSS variables.
- **Case and outcome:** button/link/selection theme changes; select tokens by purpose and recognize when another layer is unnecessary.
- **Historical candidate:** originally suggested as the first sample, superseded by W02 opening/G01. Not started. If separately assigned, include the necessary brief F03 context.

### What Should a Component Promise Its Caller? (F05)

- **Question:** How does a Button accumulate conflicting switches?
- **Coverage:** props, events, state/behavior contracts, composition, variants, controlled/uncontrolled behavior, primitive/business components, information hiding, cohesion/coupling, reuse and premature abstraction.
- **Case and outcome:** buttons, inputs and filters; allocate component versus business decisions.

### Who Owns This State? (F06)

- **Question:** Why does one filter change require several synchronized copies?
- **Coverage:** local/shared/URL/server state, derived values, a single source of truth, data flow, caching and synchronization; Hooks/Context or reactive implementations as needed.
- **Case and outcome:** search filters, lists and details; decide what to store, derive or leave to the server.

### A Form Has More Than a Success State (F07)

- **Question:** What can users do after failure, waiting or repeated clicks?
- **Coverage:** input, validation, submission, feedback/recovery, client/server checks, disabling, focus/error association and prerequisites for optimistic updates.
- **Case and outcome:** enrollment; separate clear failure from an unknown result, and a recovery control from business safety. Backend mechanisms follow in B03/B07/B12.

### The Response Arrived. Why Is the Result Wrong? (F08)

- **Question:** Why can an earlier search overwrite a later one?
- **Coverage:** necessary Promise/async/await concepts, ordering, errors, cancellation and stale results; pagination/loading/empty/error/retry; UI duties for polling/push.
- **Case and outcome:** search/upload progress; separate request order from completion order and specify UI/API contracts.

### Clickable Is Not Enough (F09)

- **Question:** Does the feature work with a keyboard, limited color perception or assistive technology?
- **Coverage:** semantics, accessible names, keyboard/focus, contrast, errors/dynamic feedback, native capabilities, ARIA and automated-check limits.
- **Case and outcome:** forms, dialogs and background-task notices; tie accessibility to observable behavior rather than rule identifiers alone.

### Where Should the Page Be Generated? (F10)

- **Question:** Which work belongs on the client, server or build step?
- **Coverage:** CSR, SSR, static generation, hydration and server/client boundaries; resources, lists, images, execution costs, caching, discovery and interaction.
- **Case and outcome:** public course and authenticated administration pages; choose from update, interaction and deployment constraints rather than framework defaults.

### Types Passed. Why Did Runtime Fail? (F11)

- **Question:** What do types, external validation, dependencies and builds each protect?
- **Coverage:** TypeScript component/API contracts, runtime validation, packages/versions/lockfiles/artifacts/environment variables and essential build/supply-chain concepts.
- **Case and outcome:** changed API fields or local success followed by deployment failure; trace static assumptions and real inputs. Put syntax lookup elsewhere.

### Keeping Design, Code and Documentation in Step (F12)

- **Question:** How do callers learn about a component change and migrate safely?
- **Coverage:** Figma/code mapping, handoffs, documentation/component display, versions/deprecation, unit/component/interaction/visual checks, governance and review.
- **Case and outcome:** token/contract evolution; shared names do not imply automatic synchronization or matching behavior.

## Part II: Backend and Data, How the System Gets Work Done

### Requests, business rules and data

| Chapter question | Coverage | Case and judgment |
| --- | --- | --- |
| What does a request pass through? (B01) | Essential DNS/TLS/HTTP; entry, proxy, routing, application/database; status, timeout and failure location | Trace search and separate network, application and data problems |
| How does an API make the agreement clear? (B02) | Input/output, validation, errors, pagination, compatibility, REST/RPC/GraphQL trade-offs, descriptions and contract checks | Define business success rather than fields alone |
| Logged in, but not allowed? (B03) | Authentication/authorization, sessions/tokens, roles, ownership, tenant isolation and relevant CSRF/XSS relationships | Course access/search; identify the trusted decision boundary for each access |
| How should business code be divided? (B04) | Responsibility, dependencies, modular monolith/services, layers, Ports and Adapters, dependency inversion, DDD boundaries and organizational/transaction costs | Enrollment/notifications; separate module boundaries from independent deployment |
| What shape should the data take? (B05) | Entities, relationships, constraints, relational/document models, normalization/redundancy, object storage, search indexes and derived data | Users/courses/enrollments/files; derive a model from reads/writes before choosing a product |
| SQL returns rows. Are they right and affordable? (B06) | JOIN, NULL, aggregation, grain/duplicates, indexes/plans, pagination, N+1, necessary CTE/window functions | Search/analytics; check both correctness and cost |
| What happens when two people act together? (B07) | ACID, constraints, transaction boundaries/isolation, locks, optimistic concurrency, lost updates and anomalies | Last enrollment place; explain interleaving and the protection offered |
| What does a cache save, and what does it owe? (B08) | Browser/CDN/application caches, derived values, TTL/invalidation, hot spots/staleness, consistency and resources | Course renaming/permission changes; acceptable staleness and failure behavior |

### Asynchronous work, reliability and capacity

| Chapter question | Coverage | Case and judgment |
| --- | --- | --- |
| Where is it slow, and what can it handle? (B09) | Latency/throughput/concurrency/percentiles/load, resources/pools/bottlenecks, balancing/scaling, rate limits/backpressure, estimates and measurements | Enrollment peak; distinguish correctness, capacity and performance without inferring microservices from user count |
| Who works after the request ends? (B10) | Request-bound work, workers, task records/lifecycle, accepted versus complete, queries/polling/push | Upload processing after page close; understand continuation and result lookup |
| Are queues, subscriptions and events the same? (B11) | Commands/events, competing consumers, pub/sub/routing, acknowledgments/order/retention/replay, broker versus event log | Processing and notifications after upload; compare consumption relationships and delivery needs |
| Can we try again after a timeout? (B12) | Unknown outcomes, backoff/retry, idempotency/deduplication/dead letters, dual-write windows, Outbox, compensation/Saga, local/cross-system consistency | Processing/enrollment; distinguish execution from safe re-execution and avoid casual end-to-end exactly-once claims |
| What does serverless manage for us? (B13) | Persistent services/containers/functions, triggers/lifecycle/state/concurrency/limits, operations and cost | Compare execution for one background task; assess async, concurrency and serverless separately |

Explain replication, sharding, consistency and consensus when needed for a guarantee, with optional depth. Event Sourcing/CQRS enter only when history or read/write models justify them, not as a required progression.

### From running locally to staying operational

| Chapter question | Coverage | Case and judgment |
| --- | --- | --- |
| Where does the running program live? (B14) | Processes/ports/files/permissions/environment/exit/resources, essential Linux/shell/logs/curl/debugging | Local success/environment failure; follow evidence rather than only pasting an error into AI |
| Running, but unreachable? (B15) | Reverse proxies, DNS/TLS/CDN, public/private networks/subnets/ingress/egress, cloud access/workload identity | API/object storage; understand network and permission boundaries |
| Does a container make the problems disappear? (B16) | Images/containers, network/volumes/configuration/health, orchestration responsibilities, Kubernetes as needed | API/worker deployment; identify conditions beyond a runnable image |
| How does a change reach production? (B17) | Git/commits/branches/PRs/conflicts/review, CI/CD/checks/artifacts, environments/secrets, database migration, gradual release/rollback, IaC/drift | Token/API change; coordinate code, data and infrastructure changes |
| A user says it broke. Where do we look? (B18) | Logs/metrics/traces, SLI/SLO/alerts, dependency failure/degradation/availability, backup/recovery verification and incident review | Upload backlog/request failure; distinguish detection, diagnosis and recovery through user impact |

### From business records to trustworthy analysis

| Chapter question | Coverage | Case and judgment |
| --- | --- | --- |
| Why not run every report on the business database? (B19) | OLTP/analytics, structured/unstructured and source/derived data, events/CDC, batch/stream, ETL/ELT | Learning events to reports; explain flow and separation costs |
| The data moved. Why rerun it? (B20) | File/API/database ingestion, pagination/rate limits/checkpoints/incremental watermarks/duplicates/schema change, reruns/backfills/late data | Daily records; recovery start points and avoiding omissions/duplication |
| Warehouse, lake or lakehouse? (B21) | Storage/tables/compute, facts/dimensions/partitions, SQL/DataFrame, transformation/scheduling/distributed compute; candidate dbt/Airflow/Spark windows | One pipeline; separate logic, engine, workflow and storage |
| Why do both reports claim to be correct? (B22) | Grain/metric definitions/quality/freshness/lineage/permissions/privacy/retention/deletion and visualization context | Course completers; check definitions, sources and time rather than charts alone |

### After a model joins the system

| Chapter question | Coverage | Case and judgment |
| --- | --- | --- |
| The model returned text. Can users rely on it? (B23) | Token/context intuition, requests/streaming/structured output, uncertainty/validation/failure/latency/cost/model change, training versus application | Document Q&A/classification; distinguish parseable format, factual support and business usefulness |
| Why can it answer wrongly with the documents provided? (B24) | Preparation/chunking/embedding, keyword/vector/hybrid retrieval, reranking/citations/versions/permissions, separate retrieval/generation evaluation | Authorized course material; locate the error and avoid treating RAG as a correctness guarantee |
| The AI wants a tool. Who executes it? (B25) | Arguments/permissions/tools/MCP, workflow/agent/loop, session/business state/memory, budgets/stopping/fallback/human review/multi-agent costs, evaluation/tracing/regression/injection/data protection | Read-only to controlled writes; justify complexity and constrain/observe execution |

Training, fine-tuning, complex memory and specialist inference infrastructure receive deeper references as needed, not a full algorithms course. AI-assisted development appears in relevant chapters and C07; it is separate from model integration.

## Part III: Connected Cases, Decisions Back in One Product

| Case | Cross-layer scope | Main judgment and prerequisites |
| --- | --- | --- |
| How many themes does one product need? (C01) | Principles/tokens/contracts/accessibility/design/code/docs/migration | Which layer changes for a new brand or local business customization? F03–F05/F09/F12 |
| Searchable does not mean accessible (C02) | URL/state/async/API/SQL/permission filters/pagination/cache | Boundaries affected by slow queries, disorder or permission changes; F06/F08 and B02/B03/B06/B08 |
| Upload finished. Is the work done? (C03) | Storage/tasks/queue/worker/subscription/idempotency/UI/deployment/monitoring | Recovery after page close, duplicate execution, interruption or notification failure; F07/F08 and relevant B10–B18 |
| Who gets the last place? (C04) | Product feedback/transactions/constraints/idempotency/limits/queue/capacity/alerts | Correctness versus capacity; B07/B09/B12/B18 |
| Where did this learning report come from? (C05) | Sources/events/CDC/ingestion/transformation/scheduling/models/metrics/permissions | Backfills/late data/duplicates/deletion; B19–B22 |
| Adding AI to an existing product (C06) | UI/services/documents/permissions/retrieval/model/necessary tools/evaluation/cost/operations | Missing/conflicting material, unauthorized access, timeouts and model change; B23–B25 plus foundations |
| Delivering the same requirement with AI (C07) | Requirements/acceptance/product decomposition/context/Markdown/scope/contracts/tools/skills/Git/review/verification/handoff | Key task snippets and actual evidence; extract a reusable skill and test its boundaries, not a chat dump or compulsory project |

Start each case with a simple design under explicit assumptions, then change one condition. Do not pack every advanced mechanism into a final architecture diagram. Keep a useful simple design and explain each increase in complexity.

## Coverage and prerequisites

- Proposed identifiers are for discussion. Coordinator confirms stable identity, paths, language mapping and navigation.
- Explain a concept fully in one main location; reuse reminders/links elsewhere. Connected cases spend their space on cross-layer choices.
- Give enough permission/idempotency context for frontend decisions without requiring half the backend part first.
- Security, accessibility, testing and observability need both focused explanation and application in cases, not only closing checklists.
- Compare frameworks/databases/messages/cloud/AI SDKs under the relevant problem rather than adding brand chapters.
- Add diagrams, glossary and syntax/command references from actual chapter needs rather than pre-generating every appendix.

## Candidate appendices and exclusions

Candidates: bilingual terminology, reading architecture diagrams, essential Git/curl/SQL, environment/debugging, comparison entry points and source index. Decide after the chapters that need them.

Excluded standalone tracks: employment/interviews/certification, mobile development, blockchain, WordPress, general office/media tools and full machine-learning training.

## Questions originally raised for full-outline review

1. Do the parts still build whole-system understanding, or has added coverage become an encyclopedia?
2. Are F11/B17 overloaded, and are the five backend units balanced and ordered well?
3. Could F04 serve as a self-contained style sample? This historical candidate was superseded by W02's actual scope; F04 remains unstarted.
4. Does AI collaboration support relevant chapters and C07 without repetition or taking over the main argument?
5. What should merge, split or move to deeper reading? Page count is not the selection criterion here.
