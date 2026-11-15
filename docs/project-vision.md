# Project Vision: Beyond the Frontend

Updated: 2026-11-15. Status: shared direction and working framework; details remain open. `TBU` means information or a decision is still needed, not that a feature exists.

[Project entry](../README.md) · [Roadmap](roadmap.md) · [Development history](development-history.md) · [Chinese stage summary](stage-summary.zh-CN.md)

This document owns the audience, content scope and product direction. The roadmap owns future dependencies and acceptance checkpoints; Development History records what happened and the evidence behind it. The old `project-brief.md` remains a compatibility entry. Writer's detailed outline and Developer's implementation records have separate responsibilities. Accepted changes should reach the appropriate shared document rather than create competing project descriptions.

## 1. What we want to make

**Beyond the Frontend: It Works. Now What?**

**《前端往后看：能跑，然后呢？》**

Create an engineering guide that readers can follow from beginning to end or consult when a particular problem arises, maintained through a static reading website. The project and repository use **Beyond the Frontend / `beyond-the-frontend`**, replacing the earlier working name Engineer Better.

Start from a visible interface and connect it to services, databases, asynchronous work, data analysis and essential operations. Help readers explain why a feature is designed this way, how its parts cooperate, what should change when conditions change, and how to implement and verify those decisions with AI.

The author is **Jason Zhang**, with AI assistance throughout creation. The website is the book's reading product, not simply a list of Markdown files. Both the explanations and the reading experience need validation through actual sample chapters and feedback.

## 2. Readers

The primary audience is **engineers who want to move from implementing individual parts toward delivering complete products with AI assistance, while strengthening their design foundations**.

- Engineers with practical frontend experience who want to understand the rest of product delivery.
- Engineers who have worked across frontend and backend and want to connect scattered experience with underlying principles.
- Engineers using GPT, Codex, Claude or similar tools who want to describe requirements, judge designs and check results more effectively.

Readers should have some experience building pages, APIs or data processing. They need not know every stack. Explain necessary concepts where they arise without restarting from basic syntax for every language or requiring a capstone project.

“AI-assisted full-stack engineering” describes a possible direction. “AI Full-stack Engineer” and “Full-stack AI Engineer” are not the sole audience labels: using AI to write code and delivering an AI product involve different responsibilities. Whether to use those terms in public positioning remains **TBU**, informed by the content and reader feedback.

The intended value is understanding design relationships and their conditions. Do not promise employment, income, productivity or career outcomes, or present teaching examples as the author's production experience.

## 3. Editorial choices

| Choice | Practice | Evidence of success |
| --- | --- | --- |
| Begin with familiar problems | Sharing a component, placing search state, recovering from a timeout | The opening makes the reason to keep reading clear |
| Be approachable and accurate | Build intuition, then explain mechanisms and limits | Analogies support rather than distort the explanation |
| Connect the layers | Revisit one feature through UI, APIs, data and operations | Readers can trace how a decision affects other parts |
| Make choices conditional | Explain the need before comparing a few representative implementations | Benefits, costs and unsuitable conditions are explicit |
| Use AI where it helps | Show scope, relevant context, contracts and verification | AI serves the current question rather than adding a generic prompt to every chapter |
| Respect attention | Short connected sections, explained terms, useful diagrams and optional depth | Readers can follow the argument and recover context after a break |

These are editorial choices, not claims that nobody has used them before. Their value must be demonstrated through completed content.

## 4. Content map

Use a common-foundations introduction followed by three parts. This map is not a completed or fully approved table of contents. Writer's [detailed outline proposal](../book/planning/outline.md) is the single detailed input for chapter names, identifiers and splits; those decisions are accepted stage by stage.

### Common foundations: what is a page connected to?

Use search, enrollment or upload to explain user goals, responsibility boundaries, state, time, dependencies and constraints. Distinguish UI feedback, request results and persistent business records. Introduce structural, sequence and state diagrams by the questions each answers.

### Part I: frontend, from interfaces to product behavior

| Topic group | Planned questions |
| --- | --- |
| Browsers and real content | What happens before a page appears? What changes when real text or different screens meet a design? |
| Design Systems | Why does a component library still need a design system? How do primitive tokens, semantic tokens, themes and components fit together? |
| Components and state | What does a component promise its caller? Who owns input, URL, shared and server state? |
| Interaction and quality | How do forms, request races, accessibility, rendering and performance shape the complete experience? |
| Engineering and evolution | How do types and runtime validation cooperate? How do Figma, code, documentation, versions and migrations stay aligned? |

### Part II: backend and data, how the system gets work done

| Topic group | Planned questions |
| --- | --- |
| Business applications | How should APIs, authentication, authorization and module boundaries work? When should a system remain a monolith or split services? |
| Data correctness | How do modeling, indexes, concurrency and transactions work? What can queries and caches guarantee? |
| Concurrency and capacity | Where is the delay? How do latency, throughput, hot spots, connections, scaling and rate limits interact? |
| Asynchronous work and events | When should work happen later? How do queues, pub/sub, event streams and subscriptions differ? How do duplicates, backlogs, failures and consistency affect the design? |
| Cloud and essential DevOps | When are functions, containers or persistent services appropriate? How do deployment, observation, rollback, backup and recovery fit together? |
| Data analysis | How do OLTP and analytical workloads connect through batch/stream processing, CDC, ETL/ELT, warehouses/lakes/lakehouses, metrics and quality? |
| AI product capabilities | How should model output, structured validation, retrieval permissions, tool execution, evaluation, costs and fallbacks work? |

High concurrency, asynchronous work and serverless are dimensions that can be combined, not a required upgrade path. Operations coverage supports a product's continued operation rather than becoming a full platform-engineering course.

### Part III: connected cases, putting decisions back into a product

- Multi-brand themes: design rules, tokens, component contracts and migration.
- Search and permissions: filters, APIs, queries, pagination and caching.
- Upload and processing: progress, storage, tasks, notifications and recovery.
- Popular enrollment: user promises, concurrency, constraints, idempotency and capacity.
- Learning analytics: business events and trustworthy metrics.
- Adding AI to an existing product: user needs, controlled capabilities, evaluation and fallbacks.
- Delivering with AI: requirements, context, tools, code review and verification.

Cases support explanation and reflection; readers do not have to submit assignments. Case size, code volume and cross-chapter reuse remain **TBU**.

## 5. Languages and content forms

- **Book:** Simplified Chinese and English. Review Chinese drafts first, then adapt the English in stages. Preserve technical meaning rather than matching every sentence literally.
- **Website:** English by default with Chinese access. Existing bilingual routes do not mean the complete book has two finished editions.
- **Project documentation:** English for project, engineering, collaboration, planning, analysis, handoff, review and template documents, including historical records. The single exception is the concise [Chinese stage summary](stage-summary.zh-CN.md). This documentation policy does not translate the Chinese manuscript or change Chinese UI resources.
- **Initial content contract:** [opening/G01](content-contract.md) has accepted IDs, slugs/order, reviewed source hashes and missing-English navigation rules for later implementation. English chapter bodies do not exist; the English UI must identify Chinese availability and avoid fabricated English routes. Broader full-book schema, later language-version notices and future counterparts remain **TBU**. Accepted rules are not implemented reading pages.
- **Primary forms:** Markdown prose, original diagrams, necessary code, comparisons and reflection questions with analysis.
- **Optional forms:** Curated AI question cards, chapter audio and EPUB/PDF; their conditions remain in the roadmap.

## 6. Reading product

The visual direction borrows the clarity of OS documentation and sidebars: clear hierarchy, restrained color, light borders and a quiet text area. Desktop layouts expose chapter groups and an in-page outline; mobile prioritizes the text and reveals navigation as needed. OS styling must preserve legibility, keyboard access, focus feedback and narrow-screen usability.

The [design handoff](design/reading-experience-v1.md) and [Reading Experience Design review (UI03)](reviews/UI03.md) describe three Figma pages: Tokens, Components and Page Designs. The last groups reading, responsive and Day/Night views vertically. The design retains iOS-like navigation materials and 1440/1024/768/390/320px specimens. Semantic roles describe layout and color; recipes describe component properties, slots and states. Design annotations are English. Visual acceptance by the author and code-level acceptance are separate gates.

PandaCSS is user-selected. The **Design Tokens and Day/Night Themes** implementation has a frozen, unaccepted checkpoint; it is not an accepted or merged reading experience. Park UI / Ark UI were optional recommendations, not evidence that a component suite was installed. Current implementation and validation status belong in the roadmap and history.

Readers should be able to follow the book or enter through a specific engineering question or case. Term explanations, paragraph links, reading recovery and correction reporting remain product directions. A few difficult diagrams may benefit from progressive disclosure, but always retain a useful static/text explanation.

## 7. Low-cost AI extensions and audio

Explore a small number of curated question cards with copyable context: a question, necessary assumptions, a short relevant passage, source links and content version. Placement and quantity should follow the chapter's needs, not a fixed quota.

Cards may ask for another example, a counterexample or a check of understanding. Show the exact content before copying; readers can edit it and paste it into their own tools. Do not send book text automatically or require third-party account authorization. Maintain and review cards with their chapters so old assumptions do not silently survive revisions.

The initial site does not host AI chat, store model keys, perform live inference or run autonomous agents. Readers' own tools may consume their own quotas; the project does not guarantee model output quality. Downloadable context Markdown and fillable design handoffs are later candidates. Model-based recommendations and personalized Q&A are outside the initial scope.

Audio is a separate exploration using pre-generated publication assets, not inference on every visit. It should help understanding and review: narrate explanations, normally skip raw code, give short descriptions of diagrams/tables, and omit Markdown punctuation and URLs. Generate and check audio before publishing; play existing assets on the website.

After material changes, update only the affected narration. Label older audio or withhold it until a matching version is available. Model, execution location, storage and automation choices follow a single-chapter listening trial; they remain undecided.

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

For this documentation iteration, Writer owns this document and the roadmap; Coordinator reviews and integrates rather than ghostwriting the formal explanation. Later ownership changes must be explicit. `TBU` does not authorize unlimited research, installation, paid services or publication.
