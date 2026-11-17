# Roadmap: Vibe Coding, Then What?

Updated: 2026-11-17 (Australia/Perth). This is a planning framework, not a delivery-date commitment or a replacement for a scoped assignment. [Read the available book online](https://haixin-zhang.github.io/vibe-coding-then-what/): two reviewed Chinese drafts, zero English manuscript bodies. The [canonical release ledger](delivery/milestone-1.md#6-release-readiness-remains-in-delivery-milestone-1) owns current operational outcomes and limits.

Project/book: **Vibe Coding, Then What?** Repository slug: `vibe-coding-then-what`. Subtitle: **Understand the Systems Behind Your AI-Built Products**. The AI-assisted-product entry positioning does not change the content framework or Delivery Milestone scopes; current execution permissions belong in the board.

[Project entry](../README.md) · [Vision and audience](project-vision.md) · [Development history](development-history.md) · [Chinese stage summary](stage-summary.zh-CN.md)

The vision owns positioning; Writer's outline owns proposed chapter-level detail. This document owns future dependencies and acceptance. Development History owns the sequence of actual work and decisions. Resolve conflicting instructions through Coordinator rather than choosing whichever file has the newest timestamp.

## Reading the status

- **Implemented:** files or behavior exist; acceptance limitations must be stated separately.
- **Verified:** the named checks actually ran; this does not imply every browser or deployment passed.
- **Awaiting review:** a deliverable exists but has not been accepted.
- **Planned direction:** a useful next area requiring a concrete assignment.
- **Candidate experiment:** test value on a small sample before committing to wider delivery.
- **TBU:** detail or a decision remains open; identify the owner and prerequisite.

Review, CI, merge and deployment are separate states. Prefer readable outcome names; legacy identifiers remain for traceability and existing paths.

## Product Goals: user needs and direction

**Naming and relationship, agreed 2026-11-16:** **Product Goals** describe the reader problem, product intent and desired outcome; **Delivery Milestones** define concrete design, code, content and verification slices that support them. Goal 1–4 are the former product Stage 1–4. Delivery Milestones 1–3 retain the existing Beta 1–3 aliases; proposed Delivery Milestone 4 uses the planning alias Beta 4. These numbers are independent of Product Goal numbering. Historical Beta names, headings, links, handoffs and acceptance records remain unchanged for traceability. A goal can need multiple milestones, and a milestone can support multiple goals; the mapping below is not a one-to-one completion rule. Milestone 4 / Beta 4 is a future proposal. The eight-part first-edition framework remains in the outline. The plan sets direction and priorities, not a release date, implementation assignment or evidence of demand. The [board](coordination.md) owns live assignments and holds.

**Focus for Goals 1–3:** improve this one book and its reading experience under the current title. Evaluate a new umbrella brand or project name, logo design and broader commercial expansion only within Goal 4 (formerly Stage 4), using evidence from the earlier goals. This scope preserves the factual author profile and incidental individual career or collaboration opportunities.

### Product proposition and readers

Start with one freely readable engineering guide for people with some development experience who want to understand the systems behind AI-assisted products. Explain familiar problems in approachable language, connect frontend, backend, data and operation, and distinguish building AI into a product from using AI to build software. The first focus is engineers extending beyond their strongest layer and full-stack or independent developers judging a working AI-assisted product. These are focus hypotheses within the confirmed Junior–Senior audience, not validated segments. The long-term possibility is a maintained collection of guides; do not require a platform or a second book before the first is useful.

### Goal 1 — Establish a usable, trustworthy foundation

**User problem:** a reader needs a real, accessible way to encounter the first reviewed explanations; the author needs a maintainable way to prepare and review them.

**Product requirements:** one content source and a readable website; clear identity and language availability; dependable navigation, visual foundations and publication boundaries. Initial content must be identifiable and reviewable, rather than implying the full book is already available.

**Delivered foundation:** Delivery Milestone 1 supports Goal 1 and part of Goal 2's find/read/share journey. Its theme, components, two-source reader, search/sharing and public-document closeouts were accepted/merged through PR #16; the [canonical record](delivery/milestone-1.md) preserves initial expectations, rework and integration evidence. The bounded initial public release is now verified through PRs #20–22, including permanent E2E/CI, manual Pages CD, public acceptance and same-source rebuild/redeploy. The ledger retains unresolved dependency maintenance and the unexercised distinct-version rollback limit. Goal 1's foundation is complete; the book remains in progress.

### Goal 2 — Complete the essential reading product

**Reader outcome:** a first-time reader can find a suitable starting point, read, return, share a location and report an issue.

**Writing goal:** prepare the first edition's eight-part Chinese core draft. The existing 48 working units and their splits remain adjustable, not 48 mandatory files; only opening/G01 are approved Chinese manuscripts now. This is a content objective, not blanket execution or publication. Each assigned chapter follows the [chapter workflow](../book/planning/chapter-workflow.md): analysis/concept review first, then confirmed prose scope and independent manuscript review, with revisions until accepted.

1. Preserve the accepted reader, current-language search, section sharing and correction flow; identify any remaining book/index/chapter entry gaps against real approved content. Subsequent changes retain narrow/wide keyboard/focus, language availability and source/table/code/diagram checks. Milestone 1's operational outcomes and maintenance limits stay in its release ledger, separate from future features or the complete book.
2. Offer clear sequential and question-led entry points using real approved content. Improve discovery with accurate page titles, descriptions, stable shareable URLs, search-engine discoverability and social preview metadata; these are prerequisites for discovery, not a traffic promise.
3. Prioritize local resume and bookmarks: restore the chapter and, where reliable, a section or paragraph; recover to an available chapter/section when content changes or storage is unavailable. Disclose device-only storage and possible loss after data clearing. Evaluate the already-designed palettes and modest reading preferences without making settings necessary for readability.
4. Prepare a small representative set of reviewed chapters from the existing framework alongside the reader; planned outline entries are not completed manuscripts. Make related links and simple feedback available as relevant content exists. Start with an optional reviewed Markdown question and a visible explanation using the supported content format. Collapsible presentation requires a separately reviewed parser/render/search contract; do not enable arbitrary HTML or MDX to obtain it. The static explanation remains complete without answering; no quiz engine or capstone is required.
5. Check provenance, applicable license notices, contribution boundaries and the separately authorized publication and deployment path before a public release. The owner selected [MIT for project code/original programming samples](../LICENSE) and [CC BY-SA 4.0 for original book prose/teaching diagrams](../LICENSE-CONTENT.md); this selection does not clear third-party rights or release deployment.

**Check:** exercise entry → real chapter → search or related material → return → share/correction on representative devices and languages. Invite a small number of suitable readers only when separately authorized; 3–5 is a proposed formative sample, not statistical validation. Audio, EPUB/PDF, account sync and AI cards do not block core reading.

### Goal 3 — Connect knowledge and make it reusable

**Reader outcome:** a reader can follow a real engineering question across relevant concepts and return to the guide at work.

**Writing goal:** revise the whole-book structure, language, facts and examples as the core draft develops, then adapt English in separately assigned/reviewed batches. Source-review readiness determines each batch; an English interface or this goal does not create an English manuscript. The same chapter workflow governs affected concept/manuscript revisions until accepted. Goals 2 and 3 may overlap where prerequisites permit; neither approves all planned prose or publication.

1. Add editorially selected related reading, a modest glossary and topic/case indexes as sufficient reviewed chapters exist. Prefer ordinary links over premature taxonomy or recommendations.
2. Curate a few optional paths, such as frontend to backend, an AI-built feature from interface through operation, or Design System foundations. Paths reuse actual chapters and do not promise a qualification or require a capstone.
3. Trial a small number of reviewed, editable AI question cards at real points of difficulty. Readers inspect, copy and paste into their own tool; do not transmit prompts automatically or require a hosted model. Compare with an ordinary explanation and defer if not useful.
4. Offer optional, low-cost learning interactions where they clarify a real concept: a reflection question and explanation, a small controlled simulation, and later a browser-editable frontend example or external sandbox. Pilot a frontend/API request with simulated responses using representative approved content; label the simulation and preserve the complete static explanation. Do not require a capstone or mandatory exercise.
5. Independently test a bounded sample of audio, one offline export format or an interactive diagram where reader evidence justifies it. Keep an accessible text/static explanation; account for versioning and ongoing maintenance. None is an automatic release requirement.
6. Explore sharing or giving feedback on a selected passage after chapter/section links work. Start with a stable paragraph target and contextual feedback; precise selection highlighting is an enhancement subject to browser/device checks. When wording or targets change, fall back clearly to the section/chapter and say the original may have changed; do not silently jump to unrelated text.

**Check:** ask whether readers can locate, explain and connect a mechanism, where they become confused, and whether a card or other pilot improves on the text. Use observations to revise content or scope; no claim of retention or validated demand without evidence.

### Goal 4 — Explore additional guides and audiences

**Direction, not a commitment:** after the first guide is useful, test a second real topic or audience as a small editorial collection before treating it as a separate guide. Candidates include frontend/design systems, backend/reliability, AI product engineering, and engineering with coding AI; these overlap the first edition and need not become separate books.

Only when a second collection requires it, assess guide-level entry and navigation, in-guide and cross-guide search, shared articles and reading paths, translation status, stable legacy URLs and contributor review. Design content identity and links with that possibility in mind without building a speculative platform, accounts or a CMS now. Evaluate a new audience with actual readers before claiming a new market.

### Product requirements → Delivery Milestones

This planning map connects desired reader outcomes to feature responses, not a claim of delivery. Milestone 1 = existing Beta 1; Milestone 2 = Beta 2; Milestone 3 = Beta 3; Milestone 4 = proposed Beta 4. Earlier capability and acceptance records keep their original labels and scope. Later work can deepen them without changing history.

| Product goal and user problem | Requirement / reader outcome | Delivery Milestone feature response | Evidence and boundary |
| --- | --- | --- | --- |
| Goal 1: establish a foundation | Readers can access real reviewed content and understand what is available | **Milestone 1:** bilingual entry, responsive Markdown reader, chapter navigation, reviewed reading components and appearance | Foundation and bounded initial public release verified; operational outcomes and retained limits belong in the canonical ledger |
| Goal 2: discover and read | Readers find a real starting point, search and share or correct a precise section | **Milestone 1:** index, current-language search, section link/copy and correction; **Milestone 2:** clearer sequential/question-led entry, accurate metadata and discoverability where gaps remain | Merged PR #15 supplies search/heading navigation; new discovery metadata needs its own scoped review. Resume/bookmarks remain planned |
| Goal 2: resume and return | A reader can come back after a break or save a useful place | **Milestone 2:** local chapter/section resume, bookmarks, invalid/missing state recovery and device-only disclosure | Planned; no account or cross-device synchronization required |
| Goal 2: comfortable reading | Defaults and preferences work across devices without obscuring content | **Milestone 1:** System/Day/Night and responsive defaults; **Milestone 2:** designed palettes and limited reading preferences | Later palettes are design-only; preserve keyboard access and independent appearance control |
| Goal 2–3: connect related questions | Readers can move from a concept to useful context without searching the whole book | **Milestone 2:** initial editorial links and modest glossary/topic/case index as content permits; **Milestone 3:** curated cross-chapter paths and richer case connections | Ordinary pages/links first; usefulness depends on available reviewed chapters |
| Goal 3: deepen understanding | Readers can examine a mechanism or ask a more useful follow-up question | **Milestone 2:** optional question-card and audio/export pilots; **Milestone 3:** selected diagrams, context bundles, offline or versioned listening when a smaller trial justifies them | No automatic model calls; keep static/text alternative; no pilot is a core-reading prerequisite |
| Goal 2–3: share and respond | Share the book, a chapter or a section; eventually identify a passage for sharing or feedback | **Milestone 1:** section links and editable issue draft; **Milestone 2:** fill remaining book/chapter entry gaps if needed; **Milestone 3:** stable passage links and feedback pilot, with optional selection/highlight | Merged PR #15 supplies heading copy/recovery and correction drafts. Passage targeting remains planned; preserve changed-content fallback, accessibility and selected-text disclosure |
| Goal 2–3: learn by exploring | Readers can test understanding or observe an example without mandatory exercises | **Milestone 2:** optional reflection and separately reviewed collapsible presentation; **Milestone 3:** bounded simulation, optional editable frontend or external sandbox sample | No required account, paid runtime, mandatory practice or capstone. Static explanations remain complete |
| Goal 4: expand to other topics/audiences | Readers can navigate another real guide without losing existing links | **Proposed Milestone 4:** multi-guide entry/navigation, shared paths and cross-guide search/language links, only where a real second collection requires them | Requires reader evidence and reviewed content/URL contract; no speculative CMS or account platform |
| Goal 2–4: discoverability and sustainable work | Readers/collaborators can find reliable work; commercial choices retain trust | **Milestone 2:** correct metadata/share previews and factual author entry; **proposed Milestone 4:** collaboration/sponsorship/product offerings after a scoped decision | Distribution, pricing, ads, tracking, outreach and billing remain hypotheses, not deployed features or verified income |

**Reading example:** Goal 2 says “help me return to what I was reading”; Beta 2 proposes local resume/bookmarks, missing-position recovery and a visible device-only boundary. Goal 3 says “help me connect related concepts”; Beta 2 can start with editorial links and Beta 3 can add a curated cross-chapter path when real content warrants it.

### Distribution and commercial hypotheses

- Use the website for full explanations, GitHub for public source and correction, and LinkedIn for human-reviewed posts derived from completed articles. A one- or two-week posting rhythm is an optional experiment, not a publication commitment. Other channels can be considered when maintenance capacity and reader evidence support them.
- Near-term professional value is a truthful portfolio of the author's work and judgment. Possible later revenue includes relevant contracting or consulting, workshops, curated materials or voluntary support; a prospect expressing interest is not proof of paid demand. Do not present examples as actual clients or outcomes.
- Advertising and sponsorship are future options, not a current feature: compare relevance, transparent labeling, reader trust, maintenance and privacy before any proposal. No current traffic, conversion, ad income or provider is assumed. Any paid content must state its relationship to the free-reading commitment and chosen licenses.
- Validate three assumptions separately: that target readers want connected explanations; that our approachable presentation helps them; and that an actual buyer values a proposed service or product. Capture observed behavior and uncertainty; a small usability trial, stars or likes do not establish willingness to pay. Any outreach, tracking, paid experiment, sponsorship, advertising, billing or deployment requires its applicable authorization.

### Sequence and evidence

1. Preserve the verified public foundation and check the actual revision/deployment evidence for later releases; the board controls active work. Use the canonical ledger for current release status rather than inferring deployment from a merge.
2. Define bounded near-term Goal 2 and Goal 3 slices against implemented capabilities and current holds; select representative chapters from the existing outline and coordinate dependent content and reader work.
3. Review a complete find → read → return → share/feedback journey; resolve publication, license and deployment scope separately.
4. Advance practical Goal 3 connections alongside independent Goal 2 slices when prerequisites are ready; test higher-cost or uncertain pilots with reader feedback and revise or stop ideas that do not help.
5. Only after a concrete need, evaluate one Goal 4 collection and a separately scoped commercial experiment. Goals may overlap when independent; a roadmap entry does not itself assign an owner or authorize execution.

**Reference observations (checked 2026-11-16):** [Engineering Handbook](https://github.com/handbook-academy/engineering-handbook) offers multiple handbooks and goal-based entry; [roadmap.sh](https://roadmap.sh/) organizes role- and skill-based paths and offers a separate [team product](https://roadmap.sh/teams); [Refactoring.Guru](https://refactoring.guru/design-patterns) presents a pattern catalog and a separate ebook; [HowToLiveBetter](https://github.com/eternity4719/HowToLiveBetter) offers online reading, ebook formats and an AI-assisted lookup skill. These are provider descriptions and inspiration, not evidence of our readers' needs, usage, prices or commercial performance. Ideas and original expression remain distinct; evaluate licenses before reuse.

### Ongoing content and low-cost delivery dependencies

- **Publishing workflow:** keep the reviewed Markdown as source of truth; define who reviews title, stable chapter identity/path, locale, status and ordering, and how manifest, reader, navigation and search update together. Never publish drafts or private planning material merely because they exist in the repository. The existing manifest/allowlist and source-hash checks remain the current contract until a scoped change is reviewed.
- **Link and location stability:** decide how chapter, heading and later paragraph identities survive edits and provide explicit fallback when a target disappears. Support the same reliable locations for resume, bookmarks, links and feedback; do not assume generated heading text or paragraph ordinal alone remains stable.
- **Language experience:** English interface currently has no English manuscript corpus. Explain actual availability and offer the Chinese reading path; link counterparts only when they exist. Verify share destinations and search behavior in both languages.
- **Low-cost interaction:** favor reviewed Markdown reflection and one controlled simulated-API example first. Interactive examples are optional, with equivalent static/text content. For a sandbox, assess actual browser/mobile behavior, third-party terms and privacy, available free usage, dependencies, maintenance and total cost before choosing it. No live AI calls, account or paid server is a prerequisite. See [Sandpack](https://sandpack.codesandbox.io/docs) and [StackBlitz embedding](https://developer.stackblitz.com/guides/integration/embedding); WebContainers embeds have [documented browser restrictions](https://developer.stackblitz.com/platform/webcontainers/browser-support).
- **Reader evidence:** a 3–5 person formative trial is a proposed usability check, not market or willingness-to-pay validation. Prioritize reader comprehension, finding/returning/sharing and feedback quality; review possible analytics separately and do not assume traffic, costs or revenue.

## 1. Current baseline and immediate priority

The [board](coordination.md) alone owns current assignments and holds. **Full-stack and AI Product Engineering — v1 Content Framework** is a completed historical planning stage, accepted and integrated through [PR #9](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/9). Its Junior–Senior audience, required AI product architecture, separate coding-AI delivery thread and [eight-part framework](../book/planning/outline.md) remain the content direction; page names/splits can evolve and listing does not accept their research/manuscripts.

The foundation/public-document baseline was main `9684c3c1e56323f879500c0f462ef44505b47cd7`. Initial publication was verified at `8c29f4dfbab684eb7623600f304cdce197951bcc`, following PRs #20–22 and actual same-source recovery. The current deployed identity is available in the public [release metadata](https://haixin-zhang.github.io/vibe-coding-then-what/release.json); subsequent UI-release evidence belongs in the existing [Pages review](reviews/pages-release-pipeline.md). The [canonical Milestone 1 ledger](delivery/milestone-1.md) preserves the dated foundation record and owns current operational outcomes/limits. The [runtime guide](../site/DEVELOPMENT.md) owns implemented behavior; exact-revision reviews/PR execution records own acceptance, CI, merge and observed deployment. Historical absence states remain historical. The board alone owns assignments/holds; this roadmap releases no code, new manuscript/translation or deployment.

| Deliverable | Current evidence | Remaining boundary |
| --- | --- | --- |
| Website Foundation and Bilingual Routing (D02) | Historical home/empty-index/404 foundation accepted in the [D02 review](reviews/D02.md); later reader stages extend that shell. | D02's original browser limitations remain historical; later stage evidence does not retroactively change that review. |
| Opening and Common Foundations (W02) | Two Chinese drafts passed re-review and merged through PR #1; the opening's later r2 orientation passed its [own review](reviews/beta1-opening-alignment.md) and merged through PR #12. | Only these two reviewed sources are publicly rendered under the [content contract](content-contract.md). English adaptation and later manuscripts require their own scope/gates. |
| Repository Access and Main Protection (SEC01) | Default main and required-PR protections were independently checked. [Review](reviews/SEC01.md). | Access observations have dates and must be rechecked after changes; they are not an absolute security guarantee. |
| Project Documentation Integration (DOC01) | The original 27 documentation files plus the review record were integrated through PR #3. [Review](reviews/DOC01.md). | The historical 45-chapter proposal was not approved by storage. The author has now confirmed the eight-part v1 direction; individual page analysis/manuscript gates remain. |
| Continuous Integration and Merge Protection (CI01) | PR #4 passed Quality, Static export (root) and Static export (pages); matching required checks and up-to-date branches were verified. [Review](reviews/CI01.md). | Each new proposed head needs its actual required checks. CI does not deploy. |
| Strict TypeScript Migration (TS01) | Reviewed strict migration merged through PR #5 as `92a0edf`; three required checks passed. [Review](reviews/TS01.md). | This does not accept the subsequent UI or Panda configuration. |
| Browser Fundamentals — Research and Outline (F01A) | Analysis r1 accepted; PR #6 passed all three checks and merged as `4ff4a1f`. [Review](reviews/F01A.md). | Analysis only: no manuscript, browser experiment or publication acceptance. |
| Legacy Design Tokens and Day/Night Themes (DS01) | Frozen unaccepted checkpoint `4da2578048f8df113fed92d99e084f644a9a788e` remains outside the accepted mainline; its local build/10 tests/111-token report are historical evidence. | No wholesale acceptance of that checkpoint. Temporary historical browser tooling is not permanent E2E coverage. |
| New theme foundation and reading components | Separately accepted and merged through PRs #12/#13; System/Day/Night and shared reading primitives. [Foundation review](reviews/beta1-theme-foundation.md), [component review](reviews/beta1-reading-components.md). | Selected DS01 reuse does not accept its whole tree; runtime guide and stage reviews retain actual checks/limits. |
| Initial Chinese chapter reader and search/sharing | PR #14 reader and PR #15 search/sharing/overall closeout are merged; two Chinese sources, truthful absent English corpus, real heading/copy/correction flow. The corrected public release is verified. [Milestone 1 inventory and evidence](delivery/milestone-1.md). | Zero English manuscript bodies; later reader/content features retain their own gates. |
| Reading experience design | Historical [UI03](reviews/UI03.md), accepted [UI04](reviews/beta1-design-alignment.md) and separate [Beta 2 palette design](reviews/reading-palettes-design.md). | Design acceptance, author visual judgment and implementation acceptance remain distinct. Production maps 111 variables; live Figma has 133 after design-only palette additions. |
| Public-project terms and Release Readiness | PR #16 merged selected code/content notices; PRs #20–22 and actual public/recovery observation establish the bounded initial release. [Canonical readiness outcomes and limits](delivery/milestone-1.md#6-release-readiness-remains-in-delivery-milestone-1). | One moderate tooling advisory remains unresolved; distinct-version rollback is unexercised. Same-source rebuild/redeploy is verified. Selected notices do not clear every material's rights. |

### Implementation dependencies and remaining gates

| Deliverable | Expected result and gate |
| --- | --- |
| Continuous Integration and Merge Protection (CI01) | Completed foundation; require successful checks for subsequent heads without weakening protection. |
| Strict TypeScript Migration (TS01) | Completed foundation; retain strict application checking as later tooling changes are reviewed. |
| Theme foundation | Completed separately through PR #12. Preserve the original unaccepted DS01 checkpoint and accepted strict compiler boundaries; neither is permission for new theme scope. |
| Reusable Reading Components (CMP01) | Completed through PR #13; compose accepted primitives without assuming a new component-suite assignment. |
| Responsive Chapter Reading (PAGE01) | Initial two-source reader completed through PR #14 under the [content contract](content-contract.md); Figma specimen prose is not manuscript content. |
| Static search and section sharing | Accepted/merged through PR #15; preserve actual behavior and stage limits. Later passage identity or recovery work is not part of that merge. |
| Release Readiness — dependency reassessment and permanent E2E/CI (legacy QA01) | Accepted/integrated through PR #20 with actual required CI; retained dependency maintenance is recorded only in the canonical release ledger. Preserve maintained tests for later changes. |
| Release Readiness — gated Pages CD and online/recovery verification (legacy DEP01) | Reviewed manual Pages pipeline and corrected public release verified through PRs #21–22 and actual post-recovery checks. The author lifted the earlier deployment hold for this bounded release; later publication still needs applicable authority. See the ledger for recovery limits. |

The legacy Panda checkpoint exposed upstream declaration errors and introduced separate application/build-tool compiler boundaries. The later accepted foundation retains the reviewed strict separation; it does not repair upstream declarations or retroactively accept the old checkpoint. See Development History and the foundation review for the distinct evidence and decision sequence.

## 2. Content direction and prerequisites

| Content outcome | Prerequisite and acceptance boundary |
| --- | --- |
| Junior–Senior Full-stack + AI Product Engineer framework | Confirmed audience/eight-part direction; refine independent page names/merges through planning review without claiming a job-level outcome |
| Eight connected parts | Product/architecture; frontend/Design Systems; API/integration; data/search; async/traffic/reliability; cloud/testing/delivery; observability/recovery; required AI product architecture plus coding-AI delivery. Detailed scope/examples/optional depth and all 45 legacy mappings live only in the outline. |
| Existing accepted material | Opening r2 orientation is separately reviewed and integrated, with its approved hash in the content contract; G01 and F01A analysis stay unchanged. Placement does not expand their acceptance or authorize the unstarted F01 manuscript. |
| Future page writing | Concrete assignment → sources/detailed analysis and review → confirmed writing scope → manuscript and separate review. Do not list all working pages as Assigned. |
| Connected cases and depth | Shared mechanism/example/optional-trade-off layers; cases explain decisions, not compulsory projects. DevOps/data support product delivery/maintenance; specialist platforms and model training are outside the main line. |
| Frameworks, observability and AI providers | Examples chosen for explanatory value and checked when writing. Datadog is one proposed original correlation example; no provider/service/library adoption, installation or new paid account. |

The book's required AI product coverage is distinct from the reading website's optional AI question-card experiment. Required book coverage does not authorize live model calls, a chat product or an SDK integration on this site.

## 3. Reading-product releases and product rationale

**Delivery Milestones** describe deliverable slices; legacy Beta heading anchors below remain available for existing references. The [first-delivery ledger](delivery/milestone-1.md) is the outcome record, not another future plan.

**The book is the product; the website supports reading it.** Delivery Milestones 1–3 retain Beta 1–3 as historical aliases; proposed Milestone 4 uses Beta 4 as a planning alias. These slices map many-to-many to Product Goals and are independent of book editions. New reviewed chapters do not require a new delivery milestone. Later guides are editorial extensions, not a current requirement for a platform.

These are capability priorities, not a promise that every row is implemented or an execution assignment. Section 1 and the ledger distinguish verified delivery from future work and retained limits; the board owns current holds/exceptions. Milestone 1's public reader uses two approved Chinese sources, without waiting for all planned units, English editions or optional cards. The opening's orientation is separately accepted; later prose and subsequent releases retain separate gates.

The [UI04 design and professional re-review](reviews/beta1-design-alignment.md) accepted the [first-delivery target (legacy Beta 1)](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=129-388) for technical handoff. Theme/components/reader/search/sharing then passed their actual code/artifact/browser reviews; those limits are in the ledger, not inferred from Figma alone. Planned content and English specimens remain distinct from real Chinese reading. Future design work is asset discovery only and preserves the first-delivery assets. Optional AI cards remain deferred without blocking basic reading.

### Product evidence and selection rules

The desk review consulted [mdBook's reader guide](https://rust-lang.github.io/mdBook/guide/reading.html), [Material for MkDocs search](https://squidfunk.github.io/mkdocs-material/plugins/search/) and [Diátaxis](https://diataxis.fr/). These illustrate established reading/navigation/search patterns and distinct explanation/reference/tutorial/how-to needs. They are design references, not proof that our readers want every feature or a decision to adopt those tools.

**Not yet validated:** demand for audio, offline reading, exports, interactive diagrams or downloadable AI context. Junior–Senior is the confirmed audience range, not a validated market segmentation. Prefer chapter prerequisites, suggested routes and optional deeper discussion over separate skill-level products.

For each proposed feature, record the reader and situation, concrete problem, simplest content/link alternative, observable success and ongoing maintenance cost. Reject additions whose main justification is technical novelty. Distinguish a product hypothesis from an observed reader outcome; do not invent demand, engagement or analytics.

<a id="beta-1--reliable-basic-reading"></a>
### Delivery Milestone 1 — Reliable basic reading

**Delivery Milestone 1** (historical label: Beta 1).

Foundation and initial public-release outcomes are verified; the capability table also retains optional directions, including deferred cards. [Operational outcomes and limits remain in this milestone's canonical ledger](delivery/milestone-1.md#6-release-readiness-remains-in-delivery-milestone-1).

| Capability | Reader value and minimum boundary |
| --- | --- |
| Entry and published chapters | Explain the book, prerequisites and where to start; render only explicitly approved chapter/resource inputs. Retain the accepted initial contract and review broader expansion separately. |
| Navigation and orientation | Chapter groups, previous/next, in-page outline and stable heading links. Chapter introductions and related-reading links help connect ideas without a recommendation system. |
| Comfortable reading | Responsive desktop/tablet/mobile, Day/Night with system default and persistent explicit choice, readable prose/figures/callouts/code/tables, local overflow, keyboard access and visible focus. Defaults must work without settings. |
| Basic static search | Merged literal search uses only approved source content in the current reading language, with real chapter/heading destinations and empty/failure recovery. English absence has a deliberate Chinese-index route; no fictional English results, silent cross-language expansion, semantic search or backend. Actual stage checks/limits remain in the ledger. |
| Languages and sharing | Clear language entry, honest missing-translation behavior, shareable chapter/heading URLs and a simple GitHub correction entry. A complete bilingual corpus is not a release prerequisite. |
| Small AI question-card trial | Conditional: a few reviewed questions at genuine difficulties, visible/editable necessary context, real source/version and accessible copy/manual-copy feedback. Readers explicitly copy, then paste/review/send in their own tools; no automatic transmission, hidden chat context, keys or hosted inference. No quota per chapter or mandatory card in the baseline. |
| Release quality | Preserve maintained E2E/CI, reviewed manual Pages CD and actual public HTTP/browser acceptance. Same-source rebuild/redeploy is verified; dependency maintenance and the unexercised distinct-version rollback remain bounded limits in the canonical ledger. Recheck actual release inputs rather than treating initial acceptance as perpetual clearance. |

Core reading must not wait for audio, exports or a general AI feature framework. If question cards have not demonstrated value or passed review, record them as deferred rather than block a basic-reading release.

<a id="beta-2--practical-improvements-with-bounded-experiments"></a>
### Delivery Milestone 2 — Practical improvements, with bounded experiments

**Delivery Milestone 2** (historical label: Beta 2).

| Priority | Capability | Scope and rationale |
| --- | --- | --- |
| First | Resume and local bookmarks | Help readers return after a break; current device only. Handle missing/invalid stored state and changed chapters. No accounts or cloud sync. |
| First | Glossary, case/topic index and related chapters | Support revisiting an engineering question as the corpus grows. Use ordinary pages/links; avoid a complete encyclopedia or complex taxonomy. |
| Next | Better search and correction context | Useful excerpts, limited filters when content warrants them, and feedback including chapter/location/version. Avoid maintaining filters before useful content exists. |
| Next | Small reading preferences and print styles | Assess font size/reading width and browser printing after default typography is sound. Do not build an elaborate settings panel. |
| Next | More useful question cards | Trial another example, counterexample or understanding check; a few editable assumptions if needed. Copy only, without a hosted model service. |
| Next | Content and language updates | Simple material-change notes and links to available counterparts. Career-oriented reading routes remain ordinary editorial pages, not personalized recommendations. |
| Next | Book/chapter/section sharing and feedback | Confirm real stable destinations and copy/manual fallback; retain the existing editable GitHub issue preview. Do not submit on the reader's behalf. |
| Low-cost content | Optional reflection questions | Start with an optional reviewed Markdown question and a visible explanation using the supported content format. Collapsible presentation requires a separately reviewed parser/render/search contract; do not enable arbitrary HTML or MDX to obtain it. The static explanation remains complete without answering. No mandatory quiz, grading or capstone. |
| Independent pilot | One offline export format | Try PDF **or** EPUB on reviewed chapters; inspect figures, links, code and version information before expansion. Browser print styles do not imply a validated export pipeline. |
| Independent pilot | One listening chapter | Pre-generate and manually review a suitable chapter, with basic playback controls. Manual asset updates are acceptable. No full-book coverage or automatic regeneration requirement. |

Milestone 2 is not a commitment to ship every row together. Prioritize observed reading problems; export/audio pilots can be deferred without blocking the useful reading improvements. Image zoom is an optional small remedy for an observed figure-legibility problem, not a diagram platform.

The isolated [UI04 later-delivery section (legacy Beta 2)](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=129-475) previews local resume/bookmark recovery, terminology placement and optional preferences only. These are labelled concepts, not live controls or approved glossary content. Printing, one-format export and one-chapter listening remain distinct pilots; no Milestone 3 implementation is inferred from the preview.

The later [palette spec](design/reading-palettes-spec.md) and [design review](reviews/reading-palettes-design.md) add three direct swatches—Original / Mist Blue / Soft Grey—with independent System/Day/Night. Their 22 design-only variables bring live Figma to 133; the 111-variable production mapping is unchanged. This accepted technical handoff does not release Milestone 2 implementation or change the first-delivery scope. Current Milestone 2/3 work is asset discovery only, without changing first-delivery assets or delivering new future scenes/components/tokens/styles.

<a id="beta-3--selective-evidence-led-extensions"></a>
### Delivery Milestone 3 — Selective, evidence-led extensions

**Delivery Milestone 3** (historical label: Beta 3).

Product Goals 2 and 3 are both near-term directions. Deliver practical, low-cost features in reviewed slices rather than restricting the whole milestone to one or two features; higher-cost pilots still need small trials and evidence before expansion. Milestone 4 remains a future direction informed by actual reader feedback.

| Candidate | Value hypothesis | Complexity that must be justified |
| --- | --- | --- |
| Versioned chapter listening | Review suitable explanations away from the screen | Narration adaptation, technical pronunciation, matching text/audio versions, chapter/section navigation, incremental regeneration, storage and failure recovery. Text/listening position linking is optional. |
| Offline website reading | Continue approved chapters with unreliable connectivity | Asset coverage, storage limits, cache/update behavior, unavailable content and recovery. PWA is an implementation option, not a mandated dependency. |
| Selected progressive/interactive diagrams | Inspect difficult flows and changed conditions, such as retries, queues or RAG | Accessible controls and an equivalent useful static/text explanation; no animation throughout the book. |
| Downloadable AI context bundles | Carry selected explanations and questions into readers' own tools | Bounded editable context, source/version attribution and Markdown export. No live chat or model-key custody. |
| Passage sharing and contextual feedback | Share or comment on an identifiable paragraph within an approved chapter | Stable paragraph IDs, explicit user action, section/chapter fallback if content changes, accessible selection and manual-copy path; highlight is optional and browser-dependent. Explain if selected text appears in the URL; preview feedback before the reader submits. |
| Optional interactive examples | Explore one mechanism through a small controlled simulation or editable frontend sample | Begin with a request/response sample using mocked API states, clearly labeled; static prose remains complete. Pilot an external sandbox link or embed only after browser/mobile, service terms, privacy, availability, dependency and cost checks; provide a non-embed fallback. |

Other candidates require a concrete need: local reading-record import/export, a cross-chapter concept map, bilingual side-by-side comparison, material translation-drift notices or additional export formats. Keep stable links during ordinary updates from the start; sophisticated revision navigation is a separate later candidate. Do not add cross-device accounts to make these features possible.

<a id="beta-4--proposed-multi-guide-experience"></a>
### Delivery Milestone 4 — Proposed multi-guide experience

**Delivery Milestone 4** (planning alias: Beta 4; proposed).

**Product objective:** support the Goal 4 expansion (formerly Stage 4) when a second real collection serves a validated reader need. This is a proposed future scope, not an assignment, implementation or promise to launch every item.

| Feature candidate | Reader value and condition |
| --- | --- |
| Guide directory and guide-scoped navigation | Find a specific guide and understand its scope; only when there are at least two real collections |
| In-guide and cross-guide search | Find reviewed content with a clear source guide and language; preserve current-language availability |
| Shared content and editorial reading paths | Reference one approved article from multiple paths without duplicating its source; preserve stable existing URLs |
| Language/status and contribution information | Show actual translation and publication status; clarify how readers suggest corrections and who reviews them |
| Author/collaboration information | Present actual work and an appropriate contact route; any sponsorship or paid offering needs a separate, transparent proposal |

**Acceptance direction:** prove both guides can be discovered, navigated and searched with real approved content, stable old links and honest language status; check accessibility, public content boundaries and maintenance effort. No account, payment system, ads, CMS or personalized recommendation engine is implied.

<a id="outside-the-planned-betas"></a>
### Outside the planned delivery milestones

Hosted AI chat/personalized Q&A, accounts/cloud synchronization, community/live comments/rankings, billing/advertising/lead generation, automatic unreviewed translation/publication and full desktop-OS simulation are not planned. AI product engineering remains required **book content** without requiring the website to become an AI application.

## 4. Product validation and acceptance checkpoints

### Validate the reading proposition

Use a small formative trial, for example 3–5 willing target readers with different experience levels; this is a proposed usability exercise, not completed research or statistically representative market validation. Let them find a topic from an engineering question, read/explain one mechanism, return later and try a question card. Observe confusion, navigation failure, misunderstood assumptions and whether the card adds anything beyond the prose. Do not collect private prompts or introduce tracking by default.

Record actual observations, limitations and resulting scope decisions. An unsuccessful task should first trigger examination of the text, labels and structure; it does not automatically justify another feature. User recruitment, external messages and telemetry need applicable authorization.

<a id="beta-1-gate-find-read-continue-and-share"></a>
### Milestone 1 gate: foundation and Release Readiness

- Preserve the merged reader and [accepted initial-chapter contract](content-contract.md): opening/G01 IDs, order, reviewed source hashes, allowlist and missing-English navigation. This plan does not approve broader schema or new inputs; changes need review.
- Build/search only approved public prose/resources. Planning, drafts without publication approval, handoffs, reviews, sync prompts and `.local/` must not leak into artifacts or indexes.
- Demonstrate the reading journey with actual reviewed content: entry → chapter → relevant heading → next chapter → share/report. Test basic search/no-results and both language entry paths honestly.
- Verify desktop/tablet/narrow screens, Day/Night/system/refresh, keyboard/focus, diagrams, long code/tables, broken links and runtime errors. Show root and Pages-subpath build/artifact checks and required CI on the proposed revision.
- For any released cards, review assumptions with the prose, preview exact text/context and provide keyboard-accessible copy success/failure feedback. A copied prompt is not a GPT/Codex/Claude integration or a guarantee of output quality.
- Confirm content/code licenses, contribution boundaries and public chapter scope before release; separately verify deployed URL, assets, subpaths and 404. Reviewed, merged and deployed remain separate facts.

The foundation checks above have stage-specific acceptance. [Milestone 1's canonical Release Readiness record](delivery/milestone-1.md#6-release-readiness-remains-in-delivery-milestone-1) now records actual permanent E2E/CI, manual Pages publication, public acceptance and same-source recovery, with their retained limits. Its dated initial checklist is historical. These operational outcomes belong to Milestone 1; this roadmap neither creates another release backlog nor authorizes implementation or a later deployment.

<a id="beta-2-gate-improve-a-demonstrated-reading-need"></a>
### Milestone 2 gate: improve a demonstrated reading need

Check local chapter/section resume and bookmark recovery against changed or deleted content, blocked/invalid storage and device-only disclosure; check book/chapter/section links and user-reviewed feedback; test glossary/index/search with real content and Chinese/English availability. Validate preferences without reducing accessibility or breaking layout. Review contextual feedback and question-card changes without adding a backend by default.

Accept pilots separately. For export, inspect one output format on representative chapters. For audio, compare intelligibility, technical pronunciation, omissions/repetition and whether tables/diagrams can be understood or require the page. Adapt from the same approved Markdown rather than maintaining an independent full-book script; skip raw code/URLs/formatting and retain necessary spoken explanation. Record resources, time and limitations; model, voice, execution location and cost remain TBU. A basic single-chapter trial does not require a production regeneration pipeline.

<a id="beta-3-gate-prove-value-and-maintenance-feasibility"></a>
### Milestone 3 gate: prove value and maintenance feasibility

Each selected candidate needs a bounded assignment, a smaller accepted trial, concrete reader evidence and operational acceptance. For automated audio, narration and model/voice configuration identify a version; regenerate only affected reviewed material, publish assets before switching the index, preserve the working version on failure and prevent older jobs overwriting newer versions. Label or hide stale audio after material prose changes; formatting-only edits need not regenerate it. Specify retry/recovery and storage/cost boundaries. Playback uses prepared assets, not inference per visit; no arbitrary voice cloning.

Offline/interactive/context-bundle candidates each need their own accessibility, content-version and failure checks. For passage sharing, validate actual chapter/paragraph targeting and changed-text fallback, keyboard/mobile access, copy failure and selected-text disclosure; precise highlight is optional. For interactive examples, check mocked-versus-real boundaries, static alternatives, third-party costs/terms and ongoing maintenance. Do not infer approval for a provider, library, paid service or implementation from this roadmap. Feedback informs reviewed revisions; it never automatically publishes generated prose.

<a id="beta-4-gate-prove-multi-guide-value"></a>
### Milestone 4 gate: prove multi-guide value

A real second collection and reviewed mapping for its intended reader must exist before selecting implementation scope. Validate guide entry, cross-guide links and search, language availability, stable existing URLs and accessible navigation with approved content. Evaluate maintenance effort and reader feedback. Commercial or advertising experiments, if proposed, have separate scope and authorization; reader interest or site traffic is not proof of payment.

## 5. Ownership and handoff

Writer and Developer can advance independent assigned work, with disjoint files. Resolve content schema, language mapping and status rules before integrating them in parallel. Use each task brief and the board to verify workspace and ownership rather than assume an old worktree. The preserved unaccepted theme checkpoint is not an input to content-framework implementation.

Owners submit stage records under their respective `docs/handoffs/` directories. Coordinator reads actual deliverables and evidence, records review decisions under `docs/reviews/`, returns revisions and manages Git integration. A dependent stage waits for its prerequisite review. The roadmap is not blanket authorization; local notes are not hidden dependencies for another role.

Writer authors assigned vision/roadmap and planning explanations; Developer authors assigned engineering/history records. Coordinator assigns, reviews, feeds back and integrates rather than writing the owners' formal deliverables. The author remains the final authority.

## 6. Open decisions

| Detail needed | Supplies detail | Accepts / coordinates | Prerequisite |
| --- | --- | --- | --- |
| Detailed reading-page names/splits and next assigned page | Writer | Author / Coordinator | Confirmed eight-part direction; planning review, then an explicit page assignment |
| Future language/status/path contract extensions | Writer + Developer | Coordinator | Preserve the accepted initial opening/G01 contract; review expansion before new prose integration |
| Home/chapter/mobile design refinements | Accepted UI04 design; Developer supplies implementation feedback | Author / Coordinator | Preserve reviewed reader behavior; separate later concepts and author visual judgment |
| Later reading recovery/contextual correction beyond merged Milestone 1 search/sharing | Developer | Coordinator | Content contract, observed reader needs and separately assigned Milestone 2/3 scope |
| Card and copy-context format | Writer + Developer | Coordinator | Stable chapters allowed for publication |
| Passage ID, selection and feedback contract | Writer + Developer | Coordinator | Stable links, content-edit fallback, accessible device/browser behavior and explicit text-in-URL disclosure |
| Low-cost optional learning sample and sandbox | Writer + Developer | Coordinator | Representative approved content; simulated vs actual behavior, accessible fallback and provider/cost/license/privacy review |
| Milestone 2 export/audio pilots; Milestone 3 automation | Developer proposes; Writer supplies samples | Author / Coordinator | Separate bounded trial, reader value and resource authorization |
| License scope, provenance and contributions | Assigned document owner reviews actual materials and notices | Author decides unresolved scope; Coordinator reviews | Preserve selected MIT/CC BY-SA 4.0 notices; verify applicable rights, attribution and contribution terms before reuse/integration |
| Reader trial, release scope and deployment evidence | Owners propose; Developer supplies runtime evidence | Author / Coordinator | Bounded validation authorization; relevant reading, content and QA gates accepted |

Close TBU items with evidence, remove obsolete placeholders and synchronize status. Do not insert guessed measurements, unapproved dates or cost commitments.
