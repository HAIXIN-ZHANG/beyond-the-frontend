# Project Vision: Vibe Coding, Then What?

Updated: 2026-11-16 (Australia/Perth). Status: author-confirmed v1 positioning and eight-part direction; individual reading-page names/splits remain editable. `TBU` means information or a decision is still needed, not that a feature exists.

[Project entry](../README.md) · [Roadmap](roadmap.md) · [Development history](development-history.md) · [Chinese stage summary](stage-summary.zh-CN.md)

This document owns the audience, content scope and product direction. The roadmap owns future dependencies and acceptance checkpoints; Development History records what happened and the evidence behind it. The old `project-brief.md` remains a compatibility entry. Writer's detailed outline and Developer's implementation records have separate responsibilities. Accepted changes should reach the appropriate shared document rather than create competing project descriptions.

## 1. What we want to make

**Vibe Coding, Then What?**

**Understand the Systems Behind Your AI-Built Products**

**《Vibe Coding 之后：能跑，然后呢？》**

Chinese supporting description: **系统理解 AI 帮你构建的产品：从界面、API 和数据，到交付、恢复与 AI 能力。**

Create an engineering guide that readers can follow from beginning to end or consult when a particular problem arises, maintained through a static reading website. The project and book use **Vibe Coding, Then What?**; the repository slug is **`vibe-coding-then-what`**. Beyond the Frontend and Engineer Better are historical working names.

The first edition is a connected guide for **Full-stack + AI Product Engineers, from Junior through Senior**. Start from engineers who have built with AI and want to understand gaps in how their product works. Connect user tasks and success criteria with interfaces, Design Systems, APIs, business/data rules, asynchronous work, cloud delivery, observability, recovery and AI product architecture. Help readers judge how the parts cooperate and verify changes under real constraints. A working AI-assisted product is the entry point; the goal is informed product and engineering judgment, not a claim that AI-written code is inherently wrong.

The author is **Jason Zhang**, with AI assistance throughout creation. The website is the book's reading product, not simply a list of Markdown files. Both the explanations and the reading experience need validation through actual sample chapters and feedback.

## 2. Readers

The author has confirmed **Junior–Senior Full-stack + AI Product Engineer** as the v1 audience and positioning; this is no longer a public-positioning TBU. Readers may be strongest in frontend, backend or end-to-end delivery and want to connect the parts into products that can be built, evaluated, operated and recovered.

Use one common text with three layers:

| Reading need | How the shared text helps |
| --- | --- |
| Junior: build reliable mental models | Explain essential mechanisms, terms and a small normal/failure example without assuming prior distributed-systems or AI knowledge |
| Mid: connect implementation and product behavior | Trace one engineering example across UI/API/data/runtime, including failures, tests and evidence |
| Senior: inspect conditions and trade-offs | Offer skippable comparisons, boundary changes and operational/economic consequences without making every specialist mechanism required |

These are reading needs, not a validated market segmentation or a promise of promotion. Readers should have some practical development exposure; the book does not restart from every language's syntax. More experienced readers can fill gaps or follow deeper trade-offs, while new-to-topic readers can follow the essential argument.

**AI product architecture is required v1 content**, not an optional final demo. It includes deciding whether AI is appropriate, model integration/validation, user control, context/state, authorized RAG, workflow/tool execution, security, evals and operating trade-offs. **Coding AI is a distinct development/delivery thread:** requirements, context/contracts, skills, diff review, tests and release verification. Neither replaces the other or turns the book into a tool manual.

Do not promise employment, income, productivity or a job level, or present teaching cases as the author's production experience.

## 3. Editorial choices

| Choice | Practice | Evidence of success |
| --- | --- | --- |
| Begin with familiar problems | Sharing a component, placing search state, recovering from a timeout | The opening makes the reason to keep reading clear |
| Be approachable and accurate | Build intuition, then explain mechanisms and limits | Analogies support rather than distort the explanation |
| Connect the layers | Revisit one feature through UI, APIs, data and operations | Readers can trace how a decision affects other parts |
| Make choices conditional | Explain the need before comparing a few representative implementations | Benefits, costs and unsuitable conditions are explicit |
| Teach AI product engineering and AI-assisted delivery separately | Required AI architecture plus contextual coding-AI examples, not generic prompts in every chapter | Readers can distinguish product capability from development assistance and verify both |
| Respect attention | Short connected sections, explained terms, useful diagrams and optional depth | Readers can follow the argument and recover context after a break |

These are editorial choices, not claims that nobody has used them before. Their value must be demonstrated through completed content.

## 4. Content map

The author-confirmed v1 framework has **eight parts**. The [detailed content framework](../book/planning/outline.md) owns independent reading-page questions, necessary knowledge, original examples, depth boundaries and the complete old-to-new mapping. Page labels are planning aids, not routes, schema or a count of finished chapters. The old three-part/45-chapter proposal is historical; its useful scope is redistributed rather than silently discarded.

| Part | Reader outcome |
| --- | --- |
| 1. Product Goals and the Full-stack Architecture Map | Define user success and boundaries, locate browser execution and static/runtime contracts, distinguish combinable architecture dimensions |
| 2. Frontend Design Systems and Product Interaction | Make layout, tokens, component contracts, state, accessibility, async/AI controls and rendering serve the product task |
| 3. APIs, Backend Boundaries and External Integration | Define HTTP/API/permission agreements, business modules, error/cleanup responsibilities and file/external/webhook boundaries |
| 4. Databases, Search and Product Data Flow | Reason about models/ORM/SQL/constraints/transactions/cache/search and trustworthy product metrics/data lifecycle |
| 5. Asynchronous Work, Traffic and Reliability | Separate capacity from correctness; design quotas/backpressure, timeout/retry safety, tasks, queues/events and consistency windows |
| 6. Cloud Runtime, Testing and Delivery | Choose runtime/hosting/network identity and produce evidence through tests, controlled builds/releases/migrations and rollback/roll-forward |
| 7. Observability, Debugging and Recovery | Follow frontend-to-data evidence, define useful operational signals/alerts and verify incident/data recovery |
| 8. AI Product Architecture and AI-assisted Delivery | Build controlled, evaluated AI capabilities and separately collaborate with coding AI; ten working reading units, not ten completed chapters |

Connected original examples recur across the parts: themes, authorized search, upload/processing, last-place enrollment, learning reports, AI course assistance and coding-AI delivery. They are explanatory cases, not compulsory capstones or a separate duplicate definitions section. Case size/code volume follows the question, not a page quota.

Architecture choices occupy different axes: CSR/SSR/static/BFF; layers/modular monolith/Ports and Adapters/services; HTTP/webhooks/poll/SSE/WebSocket; web–queue–worker/events; database/cache/object/search/vector; managed runtime/container/functions; structured generation/RAG/workflow/agent; tenant/entitlement/quota/audit controls. They can be combined. High concurrency, async and serverless are not a maturity ladder.

Essential algorithmic, SQL/isolation, limits/retries, security, accessibility, testing, observability and performance reasoning belongs in core explanations. CQRS/Event Sourcing/Saga/consensus/sharding, Kubernetes/Service Mesh and multi-region designs are optional comparisons or later extensions. DevOps and data cover what delivering and maintaining a product requires; specialist volumes may be considered later. Model training/fine-tuning/GPU/inference-engine operation and large data-platform administration are outside the v1 main line. This does not introduce an extension/plugin architecture or new website features.

**Accepted material stays scoped:** opening/G01 manuscripts and F01A browser analysis retain their reviewed boundaries and source paths. After the historical branding-only replacement, the opening's AI-assisted-product entry, reader guidance and eight-part orientation passed a separate [r2 editorial review](reviews/beta1-opening-alignment.md), integrated through PR #12. The [content contract](content-contract.md) identifies approved source hashes and rendering requirements; G01 and F01 analysis are unchanged. Placement in this map does not approve expanded text, all 48 working pages or publication. Each future page still needs an assigned analysis gate and separate manuscript review.

## 5. Languages and content forms

- **Book:** Simplified Chinese and English. Review Chinese drafts first, then adapt the English in stages. Preserve technical meaning rather than matching every sentence literally.
- **Website:** English by default with Chinese access. Existing bilingual routes do not mean the complete book has two finished editions.
- **Project documentation:** English for project, engineering, collaboration, planning, analysis, handoff, review and template documents, including historical records. The single exception is the concise [Chinese stage summary](stage-summary.zh-CN.md). This documentation policy does not translate the Chinese manuscript or change Chinese UI resources.
- **Initial content contract:** [opening/G01](content-contract.md) defines the two Chinese sources now rendered by the reviewed reader, including IDs, slugs/order, reviewed hashes and missing-English navigation rules. English chapter bodies do not exist; the English UI identifies Chinese availability without fabricated English chapter routes. Broader full-book schema, later language-version notices and future counterparts remain **TBU**. This two-source implementation is not complete bilingual-book coverage.
- **Primary forms:** Markdown prose, original diagrams, necessary code, comparisons and reflection questions with analysis.
- **Optional forms:** Curated AI question cards, chapter audio and EPUB/PDF; their conditions remain in the roadmap.

## 6. Reading product

The visual direction is restrained and macOS-inspired: clear hierarchy, light navigation chrome, quiet borders and generous space for prose, without simulating operating-system windows. Desktop layouts expose chapter groups and an in-page outline; mobile prioritizes the text and reveals navigation as needed. Styling must preserve legibility, keyboard access, focus feedback and narrow-screen usability.

The [UI04 design review](reviews/beta1-design-alignment.md) follows the historical [UI03 review](reviews/UI03.md) and retained [design handoff](design/reading-experience-v1.md). Figma retains three pages—Tokens, Components and Page Designs—four collections and 14 text styles. Its original 111 variables remain; 22 later Beta 2 palette design variables bring the live file to 133, while production mapping remains 111. The reviewed [Beta 1 target](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=129-388) separates available Chinese reviewed drafts from the eight-part planned map; English interface labels and English layout specimens do not imply English manuscripts. The design specifies System/Day/Night, current-reading-language search with an honest empty English corpus and deliberate Chinese-index recovery, plus real section links and copy/correction recovery. Optional question cards retain a card-free baseline and visible/editable context for copying, then manual pasting/review in the reader's own tool. Shared links and source versions must be real, not invented specimen metadata.

The professional language/layout re-review accepted the design for technical handoff: a 704px available-reading column, separate planned-map panel, auto-layout wrapping and narrow search/copy references. Mobile search uses an input rather than the desktop shortcut trigger. Design evidence and production behavior remain distinct: PRs #12–14 merged the theme foundation, reusable components and two-source Chinese reader, including responsive navigation, source-derived anchors and honest English availability. The [runtime guide](../site/DEVELOPMENT.md) owns implemented behavior and the [reader review](reviews/beta1-chapter-reader.md) records checks and limits. At this document's 2026-11-16 PR #14 baseline, static search and section-link copy were absent; subsequent assignments belong in the [board](coordination.md), implemented behavior in the runtime guide, and acceptance/integration evidence in the linked stage reviews and PR records. No deployment or optional AI cards are established.

PandaCSS is user-selected. The original DS01 checkpoint remains frozen and unaccepted; the separately reviewed [new foundation](reviews/beta1-theme-foundation.md) merged selected reuse rather than accepting that entire tree. Park UI / Ark UI were optional recommendations, not evidence that a component suite was installed. Author visual judgment, runtime accessibility, integration and deployment remain separate evidence boundaries.

The isolated [Beta 2 concepts](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=129-475) and later [palette design/spec](design/reading-palettes-spec.md) remain design-only. Original / Mist Blue / Soft Grey are three directly clickable swatches, with appearance controlled independently through System/Day/Night. The [palette review](reviews/reading-palettes-design.md) accepts technical handoff, not production implementation. Beta 2/3 implementation, new manuscripts/translations and deployment remain held; use the board for narrowly released assignments. Optional AI cards are deferred and do not block basic reading.

Readers should be able to follow the book or enter through a specific engineering question or case. Term explanations, paragraph links, reading recovery and correction reporting remain product directions. A few difficult diagrams may benefit from progressive disclosure, but always retain a useful static/text explanation.

Website capability releases are separate from book editions and chapter publication. The [roadmap](roadmap.md#3-reading-product-releases-and-product-rationale) defines Beta 1 basic reading with a conditional question-card trial, Beta 2 practical reading improvements and bounded export/audio pilots, and Beta 3 selective extensions requiring evidence. First release need not wait for the entire manuscript or optional pilots. Other career guides are later editorial extensions, not a requirement to build a platform. Feature priorities are product hypotheses until tested with readers; navigation clarity and explanations take priority over novelty.

## 7. Low-cost AI extensions and audio

Explore a small number of curated question cards with copyable context: a question, necessary assumptions, a short relevant passage, source links and content version. Placement and quantity should follow the chapter's needs, not a fixed quota.

Cards may ask for another example, a counterexample or a check of understanding. Show the exact content before copying; readers can edit it and paste it into their own tools. Do not send book text automatically or require third-party account authorization. Maintain and review cards with their chapters so old assumptions do not silently survive revisions.

The initial site does not host AI chat, store model keys, perform live inference or run autonomous agents. Readers' own tools may consume their own quotas; the project does not guarantee model output quality. Downloadable context Markdown and fillable design handoffs are later candidates. Model-based recommendations and personalized Q&A are outside the initial scope.

Audio is a separate exploration using pre-generated publication assets, not inference on every visit. It should help understanding and review: narrate explanations, normally skip raw code, give short descriptions of diagrams/tables, and omit Markdown punctuation and URLs. Generate and check audio before publishing; play existing assets on the website.

A Beta 2 listening pilot may use manually reviewed asset updates; automatic incremental regeneration is a Beta 3 candidate, not a prerequisite. After material changes, update only the affected narration. Label older audio or withhold it until a matching version is available. Model, execution location, storage and automation choices follow a single-chapter listening trial; they remain undecided.

## 8. References and disclosures

The earlier positioning discussion used [The Engineering Handbook](https://github.com/handbook-academy/engineering-handbook) as a reference for organizing engineering knowledge, and [HowToLiveBetter](https://github.com/eternity4719/HowToLiveBetter) for accessible browsing, ongoing updates and public feedback. These are references, not claims of originality, partnership or endorsement. This editorial translation does not constitute a new audit of those projects.

Jason Zhang is the author. AI assists with structure, research organization, prose, examples, diagrams and editing. Distinguish documented behavior, experiments, experience, teaching assumptions and unverified ideas. Drafted, reviewed, merged and published are different states.

Explain principles independently. Actual reuse of third-party text, diagrams or code requires the applicable license and attribution. The content/code license remains **TBU**, for the author to decide before release; reference projects' licenses do not automatically apply here.

Do not invent users, traffic, company cases, productivity improvements or income. Professional visibility may follow from the work but is not a promised outcome. Recheck technology choices against the environment in which they will be used.

## 9. Responsibilities

| Area | Supplies or authors detail | Decision / acceptance |
| --- | --- | --- |
| Positioning, shared requirements, priorities and disclosures | Writer drafts assigned product documents; owners propose scoped changes | Author decides; Coordinator assigns and reviews |
| Detailed outline, manuscript, examples and question-card text | Writer | Coordinator reviews the actual deliverable; author is final authority |
| Website implementation, content loading, validation and operational instructions | Developer | Coordinator reviews evidence and limitations |
| Chapter status, cross-role consistency and integration | Owners report evidence; Coordinator maintains accepted status | Coordinator verifies; author is final authority |

Writer authors assigned revisions of this document and the roadmap; Coordinator reviews and integrates rather than ghostwriting the formal explanation. Current assignments/holds are recorded only in the [board](coordination.md); this content framework does not lift manuscript, translation or engineering holds. Later ownership changes must be explicit. `TBU` does not authorize unlimited research, installation, paid services or publication.
