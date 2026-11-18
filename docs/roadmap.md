# Roadmap: Vibe Coding, Then What?

Updated: 2026-11-18 (Australia/Perth). This is a planning framework, not a delivery-date commitment or a replacement for a scoped assignment. [Read the available book online](https://haixin-zhang.github.io/vibe-coding-then-what/): three reviewed Chinese drafts, zero English manuscript bodies. The [Milestone 1 ledger](delivery/milestone-1.md#6-release-readiness-remains-in-delivery-milestone-1) records the initial release evidence and limits. The [verified V2 reader release](reviews/v2-fragment-release-fix.md#verified-public-release) documents the current public edition.

Project/book: **Vibe Coding, Then What?** Repository slug: `vibe-coding-then-what`. Subtitle: **Understanding the Systems We Build, and Learning to Live with What We Can’t Fully Control**. The AI-assisted-product entry positioning does not change the content framework or Delivery Milestone scopes; current execution permissions belong in the board.

[Project entry](../README.md) · [Vision and audience](project-vision.md) · [Development history](development-history.md) · [Chinese stage summary](stage-summary.zh-CN.md)

The vision owns positioning; Writer's outline owns proposed chapter-level detail. This document owns future dependencies and acceptance. Development History owns the sequence of actual work and decisions. Resolve conflicting instructions through Coordinator rather than choosing whichever file has the newest timestamp.

## Approved Milestones 2–4 direction — 2026-11-18

The author approved the complete sequence below. **M2: Chinese core draft plus essential reading/basic measurement. M3: whole-book first-edition refinement, reviewed English batches and selected useful extensions. M4: lightweight author/works portal with conditional richer multi-guide support.** The existing eight-part outline remains the content map; its 48 working units are flexible, not a mandatory file count. Optional pilots do not hold up core writing, and writing does not wait for V2 visual approval.

Detailed routes and acceptance live in the [Milestone 2](#beta-2--practical-improvements-with-bounded-experiments), [Milestone 3](#beta-3--selective-evidence-led-extensions) and [Milestone 4](#beta-4--proposed-multi-guide-experience) sections. The [M2 delivery record](delivery/milestone-2.md#current-approved-plan--2026-11-18) summarizes current work direction above dated outcomes; [writing stages](../book/planning/tasks.md#approved-delivery-direction--2026-11-18) link the same plan rather than assign another queue. Product Goals and Delivery Milestones remain distinct. Approval of this plan does not assign all chapters, analytics, a portal, Git integration or deployment; the board owns each bounded release.

**Current evidence:** five reviewed Chinese originals (opening/G01/F01/P8.10/P3.2); three local manifest entries (opening/G01/F01); three verified public entries (opening/G01/F01); zero English manuscript bodies. P8.10 and P3.2 are complete reviewed articles without intake/publication. The [verified public V2 reader](reviews/v2-fragment-release-fix.md#verified-public-release) uses the canonical refresh of those three works: the opening from accepted r3 and G01/F01 from their accepted voice copies. The V2 homepage is a separate follow-up.

## Current design direction — Milestone 2 refresh (2026-11-17)

The author approved a design exploration grounded in the existing Milestone 1 reading product: a calm macOS-inspired interface with a more expressive engineering/AI identity. The old Figma designs and production baseline remain historical reference. The new direction is **neutral Light/Dark/System surfaces plus six independently selected accent colors**, replacing the earlier three-background-palette proposal as the future direction; the historical palette handoff and its review remain intact. Blue is the proposed default; exact shades and all accessibility checks remain design decisions. Design is not implementation, acceptance or deployment.

**Earlier prospective UI priority (2026-11-17; superseded as the milestone's main completion criterion by the approved writing-first direction above):** Milestone 2 prioritizes an independently reviewed V2 design and then a scoped code upgrade of semantic themes, shared controls and core reading surfaces. Homepage discovery, actual chapter links, curated recommendations, an honest planned book map and accurate share previews are later Milestone 2 candidates as content permits. The reading design should cover responsive/collapsible/resizable navigation, readable prose, notes and sources, code and figures, language availability, keyboard/focus, reduced motion and recovery. Local reading position remains device-only; an explicit shared URL wins over saved position. Preserve existing routes, reading/search and source/publication boundaries.

Section sharing and editable feedback are existing capabilities to preserve and improve where needed. Selection-based feedback and editable copy-only AI prompts are small experiments subject to design and implementation review; precise passage links/highlighting, richer recommendations and other extensions remain later candidates, with changed-content/browser fallback to chapter or section. Do not label recommendations popular without evidence or send selected text to a service without an explicit reader action. Accounts, hosted AI, public comments and cross-device sync are not prerequisites. The [dated Milestone 2 record](delivery/milestone-2.md#design-direction-and-next-delivery-priority--2026-11-17) preserves that UI transition. The new approved plan owns current stage direction; a V2 implementation still needs its actual design/author/technical gates and the board's scoped assignment.

## Reading the status

- **Implemented:** files or behavior exist; acceptance limitations must be stated separately.
- **Verified:** the named checks actually ran; this does not imply every browser or deployment passed.
- **Awaiting review:** a deliverable exists but has not been accepted.
- **Planned direction:** a useful next area requiring a concrete assignment.
- **Candidate experiment:** test value on a small sample before committing to wider delivery.
- **TBU:** detail or a decision remains open; identify the owner and prerequisite.

Review, CI, merge and deployment are separate states. Prefer readable outcome names; legacy identifiers remain for traceability and existing paths.

## Product Goals: user needs and direction

**Naming and relationship, agreed 2026-11-16:** **Product Goals** describe the reader problem, product intent and desired outcome; **Delivery Milestones** define concrete design, code, content and verification slices that support them. Goal 1–4 are the former product Stage 1–4. Delivery Milestones 1–3 retain the existing Beta 1–3 aliases; proposed Delivery Milestone 4 uses the planning alias Beta 4. These numbers are independent of Product Goal numbering. Historical Beta names, headings, links, handoffs and acceptance records remain unchanged for traceability. A goal can need multiple milestones, and a milestone can support multiple goals; the mapping below is not a one-to-one completion rule. Milestone 4 / Beta 4 is now part of the approved future direction (2026-11-18); actual feature slices still need assignment. The eight-part first-edition framework remains in the outline. The plan sets direction and priorities, not a release date, implementation assignment or evidence of demand. The [board](coordination.md) owns live assignments and holds.

**Focus for Goals 1–3:** improve this book and its reading experience under the current title. The author/bookshelf entry is planned for Delivery Milestone 4, not Milestone 3. A simple entry can link this book and actual later works without requiring a second completed guide or a new platform; richer multi-guide features depend on real content and reader need. This is a future direction, not an assigned build. An umbrella brand or logo remains a later decision. Amazon publishing and broader commercialization are deferred until after Delivery Milestone 4; factual author information and incidental career or collaboration opportunities remain within the current scope.

### Product proposition and readers

Start with one freely readable engineering guide for people with some development experience who want to understand the systems behind AI-assisted products. Explain familiar problems in approachable language, connect frontend, backend, data and operation, and distinguish building AI into a product from using AI to build software. The first focus is engineers extending beyond their strongest layer and full-stack or independent developers judging a working AI-assisted product. These are focus hypotheses within the confirmed Junior–Senior audience, not validated segments. The long-term possibility is a maintained collection of guides; do not require a platform or a second book before the first is useful.

### Goal 1 — Establish a usable, trustworthy foundation

**User problem:** a reader needs a real, accessible way to encounter the first reviewed explanations; the author needs a maintainable way to prepare and review them.

**Product requirements:** one content source and a readable website; clear identity and language availability; dependable navigation, visual foundations and publication boundaries. Initial content must be identifiable and reviewable, rather than implying the full book is already available.

**Delivered foundation:** Delivery Milestone 1 supports Goal 1 and part of Goal 2's find/read/share journey. Its theme, components, two-source reader, search/sharing and public-document closeouts were accepted/merged through PR #16; the [canonical record](delivery/milestone-1.md) preserves initial expectations, rework and integration evidence. The bounded initial public release is now verified through PRs #20–22, including permanent E2E/CI, manual Pages CD, public acceptance and same-source rebuild/redeploy. The ledger retains unresolved dependency maintenance and the unexercised distinct-version rollback limit. Goal 1's foundation is complete; the book remains in progress.

### Goal 2 — Complete the essential reading product

**Reader outcome:** a first-time reader can find a suitable starting point, read, return, share a location and report an issue.

**Writing goal:** Milestone 2 completes coherent reviewed Chinese core-draft coverage across the eight parts. Its 48 working units/splits are adjustable, not 48 mandatory files. Five reviewed originals exist, while only opening/G01/F01 are admitted locally and those same three are in the verified public edition. P8.10 and P3.2 have completed their separate manuscript gates without intake; three separate voice revisions are not new originals. The detailed M2 routes below organize manageable groups rather than release every page at once. Every assigned chapter keeps distinct analysis/concept and manuscript gates, with original-owner corrections until accepted; no blanket execution or publication follows.

1. Preserve the accepted reader, current-language search, section sharing and correction flow; identify any remaining book/index/chapter entry gaps against real approved content. Subsequent changes retain narrow/wide keyboard/focus, language availability and source/table/code/diagram checks. Milestone 1's operational outcomes and maintenance limits stay in its release ledger, separate from future features or the complete book.
2. Offer clear sequential and question-led entry points using real approved content. Improve discovery with accurate page titles, descriptions, stable shareable URLs, search-engine discoverability and social preview metadata; these are prerequisites for discovery, not a traffic promise.
3. Writing progresses with the accepted reader independently of V2 visual approval. M2's essential reader delivery still includes the actually reviewed/author-confirmed V2 core surfaces and minimum device-only Continue behavior, preserving keyboard/mobile access, explicit URL precedence and invalid/missing/denied-storage recovery. V2 implementation needs its own design/author/technical gates; no fresh design acceptance is claimed. M3 adds feedback-driven bookmarks/preferences/print rather than postponing the minimum return path.
4. Advance Chinese core coverage in four manageable writing groups, with explicit remaining gaps and cross-part continuity review; a small representative sample alone does not complete M2. Maintain essential chapter links and simple feedback as real content becomes available. Milestone 3 can add limited glossary/case paths and optional reflection/cards where useful. Collapsible presentation needs a separately reviewed parser/render/search contract; static explanations remain complete without answers, a quiz engine or a capstone.
5. Check provenance, applicable license notices, contribution boundaries and the separately authorized publication and deployment path before a public release. The owner selected [MIT for project code/original programming samples](../LICENSE) and [CC BY-SA 4.0 for original book prose/teaching diagrams](../LICENSE-CONTENT.md); this selection does not clear third-party rights or release deployment.

**Check:** assess coherent reviewed coverage as well as entry → real chapter → search/related material → return → share/correction. Plan desktop/narrow-screen, Safari and real-phone checks and record what actually ran; unperformed checks are not passed by planning. Basic measurement needs its own privacy, event/session and implementation validation. Invite suitable readers only when separately authorized; 3–5 remains a proposed formative sample, not statistical validation. Audio, export pilots, account sync and AI cards do not block core writing.

### Goal 3 — Connect knowledge and make it reusable

**Reader outcome:** a reader can follow a real engineering question across relevant concepts and return to the guide at work.

**Writing goal:** Milestone 3 refines the complete Chinese core into a coherent first edition: structure, omissions/repetition, transitions, language, facts, examples, sources and version-sensitive limits. Adapt stable Chinese sources into separately scoped/reviewed English batches, preserving semantic meaning and uncertainty while allowing natural prose/humor. Whole-book refinement can begin where prerequisites permit; English UI or a few translated chapters never establishes complete bilingual coverage. Each changed batch retains its actual review and original-owner correction path.

1. Add editorially selected related reading, a modest glossary and topic/case indexes as sufficient reviewed chapters exist. Prefer ordinary links over premature taxonomy or recommendations.
2. Curate a few optional paths, such as frontend to backend, an AI-built feature from interface through operation, or Design System foundations. Paths reuse actual chapters and do not promise a qualification or require a capstone.
3. Trial a small number of reviewed, editable AI question cards at real points of difficulty. Readers inspect, copy and paste into their own tool; do not transmit prompts automatically or require a hosted model. Compare with an ordinary explanation and defer if not useful.
4. Offer optional, low-cost learning interactions where they clarify a real concept: a reflection question and explanation, a small controlled simulation, and later a browser-editable frontend example or external sandbox. Pilot a frontend/API request with simulated responses using representative approved content; label the simulation and preserve the complete static explanation. Do not require a capstone or mandatory exercise.
5. Deliver one actual, versioned PDF **or** EPUB export of the reviewed edition, validating rendering, figures/code, links, source revision/date and available download-link click reporting. Separately consider bounded audio, mocked interactive/diagram and offline-reading pilots only where evidence justifies their maintenance. Optional pilots retain complete accessible text/static alternatives and do not all become release requirements.
6. Explore sharing or giving feedback on a selected passage after chapter/section links work. Start with a stable paragraph target and contextual feedback; precise selection highlighting is an enhancement subject to browser/device checks. When wording or targets change, fall back clearly to the section/chapter and say the original may have changed; do not silently jump to unrelated text.

**Check:** ask whether readers can locate, explain and connect a mechanism, where they become confused, and whether a card or other pilot improves on the text. Use observations to revise content or scope; no claim of retention or validated demand without evidence.

### Goal 4 — Explore additional guides and audiences

**Direction, not a commitment:** after the first guide is useful, test a second real topic or audience as a small editorial collection before treating it as a separate guide. Candidates include frontend/design systems, backend/reliability, AI product engineering, and engineering with coding AI; these overlap the first edition and need not become separate books.

Only when a second collection requires it, assess guide-level entry and navigation, in-guide and cross-guide search, shared articles and reading paths, translation status, stable legacy URLs and contributor review. Design content identity and links with that possibility in mind without building a speculative platform, accounts or a CMS now. Evaluate a new audience with actual readers before claiming a new market.

### Product requirements → Delivery Milestones

This planning map connects desired reader outcomes to feature responses, not a claim of delivery. Milestone 1 = existing Beta 1; Milestone 2 = Beta 2; Milestone 3 = Beta 3; Milestone 4 = proposed Beta 4. Earlier capability and acceptance records keep their original labels and scope. Later work can deepen them without changing history.

| Product goal and user problem | Requirement / reader outcome | Delivery Milestone feature response | Evidence and boundary |
| --- | --- | --- | --- |
| Goal 1: foundation | Find real reviewed content and honest availability | **Milestone 1:** existing basic reader, index/search, heading sharing and correction | Preserve its actual accepted/public evidence and limits |
| Goal 2: Chinese core coverage | Follow a coherent explanation across all eight parts | **Milestone 2:** four manageable writing groups, original examples, conditions and cross-part continuity | Not 48 mandatory files; distinct analysis/manuscript gates; no blanket prose release |
| Goal 2: essential reading | Find a starting point, read/search, continue locally and report an issue | **Milestone 2:** reviewed/confirmed V2 core reading, honest entry/navigation/search, stable identities and minimum device-only Continue | V2 code needs actual design/author/technical acceptance; explicit URL wins over saved position and storage/changed-target recovery is tested. Writing proceeds meanwhile |
| Goal 2–3: reader evidence | Observe defined usage signals and prioritize corrections | **Milestone 2:** basic privacy-conscious measurement; **Milestone 3:** feedback/data-informed maintenance and actual export-link clicks | Deduplicate defined start signals; no comprehension, retention or productivity proof |
| Goal 3: Chinese first edition and English adaptation | Read a refined edition and truthful language coverage | **Milestone 3:** whole-book Chinese editing, separately reviewed English batches from stable sources | Do not claim complete bilingual coverage before it exists |
| Goal 3: connected knowledge | Move from a question to useful context | **Milestone 3:** limited related reading/glossary/case index and curated routes | Reuse real approved chapters; ordinary links before complex taxonomy |
| Goal 2–3: reading improvements and feedback | Save a useful place, adjust reading or identify a passage | **Milestone 3:** feedback-driven bookmarks, limited preferences/print and contextual passage feedback, building on M2's minimum Continue | Reuse accepted preparation; device-only storage/changed-content recovery, accessible fallback and explicit disclosure remain necessary |
| Goal 3: export and small AI aids | Obtain a verified format or carry selected context into one's own tool | **Milestone 3:** one actual versioned PDF or EPUB, small editable copy-only cards/context bundles | Validate sources/output/click reports; no live model calls or key custody |
| Goal 3: optional exploration | Use an extra mode when it helps a real difficulty | **Milestone 3 optional:** bounded audio, mocked interactive/diagram or offline pilots | Evidence/cost/maintenance gates; complete static explanation; not every pilot required |
| Goals 2–4: author and actual works | Discover truthful author information and this book or later work | **Milestone 2:** accurate metadata/factual author entry; **Milestone 4:** portal design and static build, reusing editorial/measurement practices | Simple portal needs no second guide; no account/payment/community requirement |
| Goal 4: multi-guide expansion | Navigate/search another real collection when needed | **Milestone 4 conditional:** richer cross-guide navigation/search/shared paths | Actual second collection and reader need first; commercial publishing remains after M4 |

**Reading example:** Goal 2 says “help me return to what I was reading”; M2 plans minimum local Continue with missing-position/storage recovery and a visible device-only boundary. M3 can add reader-created bookmarks after feedback. Goal 3's related-reading/glossary/case routes use real reviewed chapters rather than a new recommendation platform.

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
5. Only after a concrete need, evaluate one Goal 4 collection. Consider formal publishing and broader commercial experiments after Delivery Milestone 4 under a separate scope. Goals may overlap when independent; a roadmap entry does not itself assign an owner or authorize execution.

**Reference observations (checked 2026-11-16):** [Engineering Handbook](https://github.com/handbook-academy/engineering-handbook) offers multiple handbooks and goal-based entry; [roadmap.sh](https://roadmap.sh/) organizes role- and skill-based paths and offers a separate [team product](https://roadmap.sh/teams); [HowToLiveBetter](https://github.com/eternity4719/HowToLiveBetter) offers online reading, ebook formats and an AI-assisted lookup skill. These are provider descriptions and inspiration, not evidence of our readers' needs, usage, prices or commercial performance. Ideas and original expression remain distinct; evaluate licenses before reuse.

### Ongoing content and low-cost delivery dependencies

- **Publishing workflow:** keep the reviewed Markdown as source of truth; define who reviews title, stable chapter identity/path, locale, status and ordering, and how manifest, reader, navigation and search update together. Never publish drafts or private planning material merely because they exist in the repository. The existing manifest/allowlist and source-hash checks remain the current contract until a scoped change is reviewed.
- **Link and location stability:** decide how chapter, heading and later paragraph identities survive edits and provide explicit fallback when a target disappears. Support the same reliable locations for resume, bookmarks, links and feedback; do not assume generated heading text or paragraph ordinal alone remains stable.
- **Language experience:** English interface currently has no English manuscript corpus. Explain actual availability and offer the Chinese reading path; link counterparts only when they exist. Verify share destinations and search behavior in both languages.
- **Low-cost interaction:** favor reviewed Markdown reflection and one controlled simulated-API example first. Interactive examples are optional, with equivalent static/text content. For a sandbox, assess actual browser/mobile behavior, third-party terms and privacy, available free usage, dependencies, maintenance and total cost before choosing it. No live AI calls, account or paid server is a prerequisite. See [Sandpack](https://sandpack.codesandbox.io/docs) and [StackBlitz embedding](https://developer.stackblitz.com/guides/integration/embedding); WebContainers embeds have [documented browser restrictions](https://developer.stackblitz.com/platform/webcontainers/browser-support).
- **Reader evidence:** combine a proposed 3–5 person formative reading trial with the approved basic aggregate measurement direction below. Observation helps explain where people are confused; traffic and actions show usage signals, not comprehension, market validation or willingness to pay. No traffic, costs or revenue are assumed.

### Candidate: lightweight readership measurement

**Approved staging update — 2026-11-18:** basic aggregate measurement is part of the M2 plan, after essential reading priorities and a bounded implementation/privacy review; M3 uses feedback/aggregate signals and adds download clicks when a real export link exists. This supersedes the earlier late-M2-or-M3 timing suggestion. The current static reader has no analytics service; this note does not deploy scripts, create accounts, select a provider or authorize paid usage.

- **Site visitors:** estimated distinct visitors during the chosen reporting period, with the provider's actual counting window and exclusions documented.
- **Body-open sessions:** count each measurable session once if it opens any available book body, including the opening, a direct chapter link or a section deep link. Exclude placeholders and missing translations. Reloading or opening another chapter does not add another session to this total.
- **Entry-to-body rate:** among measurable sessions that land on the homepage or contents, divide the number that subsequently open an available body in the same session by the total number of sessions entering on those surfaces. Count each session once. A direct body landing belongs in body-open sessions and is outside this cohort. Show an unavailable rate when there are no eligible entry sessions.
- **Contents end reached:** count eligible contents sessions that scroll to the end, once per session. Report index visits where the end is already visible without scrolling separately if needed. These signals describe navigation and access, not reading completion or comprehension.
- **Chapter interest:** page views and, if supported, estimated visitors per real chapter and language. Label page views, sessions and estimated visitors distinctly. Do not call this a book-completion or comprehension measure.
- **Downloads:** count a reader-initiated click per available format as a download attempt, not proof of a completed transfer. Add this only when actual downloads exist. Keep third-party platform reports separate; direct URLs, copies, offline transfers, GitHub access and blocked scripts cannot all be observed.
- **Discovery:** report broad referrer/source categories when actually available; do not infer individual identities, precise campaign attribution or sales from views.

Prefer a low-cost, privacy-conscious hosted analytics tool with real custom events over building a backend. [Umami plans](https://umami.is/pricing) and [Plausible custom events](https://plausible.io/docs/custom-event-goals) are evaluation candidates, not selected providers; verify the current free tier, retention/export, event/session deduplication, route handling, data region, limits and total cost before a decision. Report a metric as unavailable if the provider cannot reproduce its session deduplication or denominator. Define the session window and filters before implementation. Verify home → contents → body, contents-only, direct chapter/section entry, repeated opens and reloads, short index, missing translations, blockers and failed requests against the reported counts.

Collect the minimum needed. Do not send selected passages, search terms, AI prompts, personal identifiers or sensitive query-string content. Provide an accurate reader-facing notice and assess applicable privacy/consent requirements for the chosen implementation and jurisdictions before enabling it; a vendor's cookie-free claim is not a blanket compliance conclusion. Static hosting requires an external collection service for cross-visitor totals; repository traffic is not site readership. A future implementation requires its own scoped assignment, validation and deployment authority.

### Tentative maintenance and distribution model

The book's website is the durable reading and discovery hub. Reviewed Markdown remains the content source of truth; maintain corrections and original citations there, with an issue/feedback route and an honest public status. Correct typos and broken links as needed; re-check time-sensitive framework and AI claims against dated primary sources, state versions/assumptions and review substantive changes. Maintain concise change notes and stable links; do not imply all chapters are continuously verified.

When a reviewed download is actually scoped, derive each PDF/EPUB release from the appropriate approved source, test rendering/links/diagrams/code and record its version/date, corresponding source revision, update policy and access support. Do not imply export or download already exists. Website reading remains the primary experience. When the author considers paid distribution after Delivery Milestone 4, a mature third-party storefront may handle checkout and file delivery while the site links to it; compare platform costs, privacy, taxes, refunds and ongoing support before selecting one. It is an option, not a requirement for a custom payment backend or a provider commitment. Reader-facing descriptions must be original and factual.

Commercial presentation must respect the existing [content license](../LICENSE-CONTENT.md), contributor permissions and actual third-party terms. Free website access, optional paid convenience formats, and rights under the existing CC BY-SA terms are distinct. The license permits commercial sharing and adaptation subject to its conditions; recipients' existing rights cannot simply be withdrawn by switching a later version's license. Review any separately owned assets and contributions individually before offering different terms; do not promise exclusivity, DRM restrictions on licensed material, revenue, or blanket rights clearance.


## 1. Current baseline and immediate priority

The [board](coordination.md) alone owns current assignments and holds. **Full-stack and AI Product Engineering — v1 Content Framework** is a completed historical planning stage, accepted and integrated through [PR #9](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/9). Its Junior–Senior audience, required AI product architecture, separate coding-AI delivery thread and [eight-part framework](../book/planning/outline.md) remain the content direction; page names/splits can evolve and listing does not accept their research/manuscripts.

The foundation/public-document baseline was main `9684c3c1e56323f879500c0f462ef44505b47cd7`. Initial publication was verified at `8c29f4dfbab684eb7623600f304cdce197951bcc`, following PRs #20–22 and actual same-source recovery. The current deployed identity is available in the public [release metadata](https://haixin-zhang.github.io/vibe-coding-then-what/release.json); subsequent UI-release evidence belongs in the existing [Pages review](reviews/pages-release-pipeline.md). The [canonical Milestone 1 ledger](delivery/milestone-1.md) preserves the dated foundation record and owns current operational outcomes/limits. The [runtime guide](../site/DEVELOPMENT.md) owns implemented behavior; exact-revision reviews/PR execution records own acceptance, CI, merge and observed deployment. Historical absence states remain historical. The board alone owns assignments/holds; this roadmap releases no code, new manuscript/translation or deployment.

| Deliverable | Current evidence | Remaining boundary |
| --- | --- | --- |
| Website Foundation and Bilingual Routing (D02) | Historical home/empty-index/404 foundation accepted in the [D02 review](reviews/D02.md); later reader stages extend that shell. | D02's original browser limitations remain historical; later stage evidence does not retroactively change that review. |
| Opening and Common Foundations (W02) | Two Chinese drafts passed re-review and merged through PR #1; the opening's later r2 orientation passed its [own review](reviews/beta1-opening-alignment.md) and merged through PR #12. | The initial public edition rendered these two reviewed sources under the [content contract](content-contract.md). English adaptation and later manuscripts require their own scope/gates. |
| Repository Access and Main Protection (SEC01) | Default main and required-PR protections were independently checked. [Review](reviews/SEC01.md). | Access observations have dates and must be rechecked after changes; they are not an absolute security guarantee. |
| Project Documentation Integration (DOC01) | The original 27 documentation files plus the review record were integrated through PR #3. [Review](reviews/DOC01.md). | The historical 45-chapter proposal was not approved by storage. The author has now confirmed the eight-part v1 direction; individual page analysis/manuscript gates remain. |
| Continuous Integration and Merge Protection (CI01) | PR #4 passed Quality, Static export (root) and Static export (pages); matching required checks and up-to-date branches were verified. [Review](reviews/CI01.md). | Each new proposed head needs its actual required checks. CI does not deploy. |
| Strict TypeScript Migration (TS01) | Reviewed strict migration merged through PR #5 as `92a0edf`; three required checks passed. [Review](reviews/TS01.md). | This does not accept the subsequent UI or Panda configuration. |
| Browser Fundamentals — Research and Outline (F01A) | Analysis r1 accepted; PR #6 passed all three checks and merged as `4ff4a1f`. [Review](reviews/F01A.md). | Analysis only: no manuscript, browser experiment or publication acceptance. |
| Browser Fundamentals — Chinese Manuscript (F01M) | [Scope reuse](reviews/F01M-scope.md), [manuscript r3](reviews/F01M.md) and [local manifest/route/search intake](reviews/milestone-2-chapter-intake.md) accepted; integrated into remote main through PR #26. | F01 was subsequently verified in the [public V2 reader release](reviews/v2-fragment-release-fix.md#verified-public-release). No English body or new browser experiment is implied. |
| P8.10 — After AI finishes | Complete Chinese article accepted after [concept P810A](reviews/P810A.md) and [manuscript P810M](reviews/P810M.md). | Fourth reviewed original source, with no manifest intake/publication; not complete coverage of the entire P8.10 unit. |
| P3.2 — Page/API agreement | Complete Chinese [API-contract article](../book/drafts/zh/04-api-contract.md) accepted after [concept P32A](reviews/P32A.md) and [manuscript P32M](reviews/P32M.md). | Fifth reviewed original source, with no manifest intake/publication; not complete coverage of the entire P3.2 unit. |
| Existing-source voice revisions | Three opening/G01/F01 copies passed [scope](reviews/existing-sources-voice-scope.md) and [actual manuscript review](reviews/existing-sources-voice-manuscripts.md). | That review accepted separate copies only. The later [local intake review](reviews/existing-source-intake.md) verified the canonical refresh of those three works. |
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
| Existing accepted material | Five reviewed Chinese originals: opening/G01/F01/P8.10/P3.2; only the first three are in the local allowlist and the verified public edition includes those same three. The [verified local reader](reviews/existing-source-intake.md) uses the revised canonical versions of the first three works. Exact reviews/source contracts retain each scope; new placements do not authorize expansion or intake. |
| Future page writing | Concrete assignment → sources/detailed analysis and review → confirmed writing scope → manuscript and separate review. Do not list all working pages as Assigned. |
| Connected cases and depth | Shared mechanism/example/optional-trade-off layers; cases explain decisions, not compulsory projects. DevOps/data support product delivery/maintenance; specialist platforms and model training are outside the main line. |
| Frameworks, observability and AI providers | Examples chosen for explanatory value and checked when writing. Datadog is one proposed original correlation example; no provider/service/library adoption, installation or new paid account. |

The book's required AI product coverage is distinct from the reading website's optional AI question-card experiment. Required book coverage does not authorize live model calls, a chat product or an SDK integration on this site.

## 3. Reading-product releases and product rationale

**Delivery Milestones** describe deliverable slices; legacy Beta heading anchors below remain available for existing references. The [first-delivery ledger](delivery/milestone-1.md) is the outcome record, not another future plan.

**The book is the product; the website supports reading it.** Delivery Milestones 1–3 retain Beta 1–3 as historical aliases; proposed Milestone 4 uses Beta 4 as a planning alias. These slices map many-to-many to Product Goals and are independent of book editions. New reviewed chapters do not require a new delivery milestone. Later guides are editorial extensions, not a current requirement for a platform.

These are capability priorities, not a promise that every row is implemented or an execution assignment. Section 1 and the ledger distinguish verified delivery from future work and retained limits; the board owns current holds/exceptions. Milestone 1's initial public release used two approved Chinese sources, without waiting for all planned units, English editions or optional cards. The opening's orientation is separately accepted; later prose and subsequent releases retain separate gates.

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

**Approved main completion — 2026-11-18:** a coherent, reviewed Chinese core draft spanning all eight parts, with original examples/conditions and essential reader support/basic measurement. This supersedes the former V2-first/feature-pilot milestone priority. Forty-eight working units are not 48 mandatory files. Writing proceeds in manageable assignments independently of V2 visual approval; implementation, source intake and publication keep separate gates.

| Route | Planned output and acceptance boundary |
| --- | --- |
| **2.1 Identity and truthful status** | Keep the confirmed book/subtitle and five-reviewed-original / three-local / three-verified-public / zero-English distinction; separate voice revisions from originals/canonical intake. Align current entries without rewriting dated evidence. |
| **2.2 Four writing groups** | (a) Opening, system map, browser and product questions; (b) frontend Design Systems, API/backend and data; (c) async work, cloud, tests/delivery, observability and recovery; (d) AI product architecture, coding AI and human judgment, with a small closing section. Reuse reviewed sources, identify real gaps and connect recurring cases; these groups do not assign every chapter or change the outline. |
| **2.3 Two reviews and original-owner correction** | Research/source conditions and a concrete concept first; actual concept acceptance plus writing scope before prose; separate full-manuscript review, returned findings, revisions and affected re-review. No model or source-summary completion substitutes for review. |
| **2.4 Original static figures and stable content contracts** | Use original images only where they explain a mechanism. State meaningful alt text, caption/source/provenance and a prose equivalent; agree responsive sizing/aspect/legibility with Developer. Preserve chapter/heading identity, language/status/order and source/manifest contracts, with changed/missing-target fallback. No diagram platform or schema implementation is assigned here. |
| **2.5 Essential reader and V2 core** | Honest homepage/index/chapter entry, previous/next/outline, current-language search, readable code/tables/figures/sources, keyboard/focus/narrow-screen behavior and real sharing/correction destinations. Design and implement minimum V2 core surfaces only after actual independent design/technical review and author confirmation; writing does not wait for that gate. |
| **2.6 Minimum local Continue** | Reuse accepted preparation for a small device/browser-only return path with chapter/heading fallback. An explicit shared URL wins over stored position. Handle changed/deleted targets, malformed/denied/quota storage and accessible recovery; no account or cross-device synchronization. Bookmarks and extra preferences remain M3 feedback-driven extensions. |
| **2.7 Basic measurement** | Validate minimal aggregate visitors, body-open sessions, entry-to-body rate, separate contents-end reach, chapter interest and broad sources under the retained privacy/event/session/cost rules. Download clicks apply only to actual available links. Define/review events and implementation before selecting/enabling a service; no account/script is authorized by this plan. |
| **2.8 Controlled intake, delivery and acceptance** | Admit exact reviewed sources under the allowlist/metadata/parser/search/render contracts; preserve old links, missing-English honesty and canonical/revision distinctions. Review eight-part coverage and exercise actual entry → chapter → search/Continue/share/correction, including content/figures and measurement. Plan desktop/narrow-screen, Safari and real-phone checks; record what ran, unverified limits and separate integration/publication evidence. |

**Completion boundary:** chapter gates and a coherent cross-part review establish core-draft readiness; essential reader/content contracts and scoped measurement need actual acceptance, with required missing checks left open. This is not a complete bilingual edition, guaranteed comprehension or a claim that a new public release has occurred. Source readiness, local intake, Git/CI and observed publication remain separate. Use [the M2 delivery record](delivery/milestone-2.md#current-approved-plan--2026-11-18) for the concise current plan and dated earlier outcomes.

Basic writing does not wait for audio, interactive/offline pilots, export formats, AI cards, a new portal or elaborate preferences. M2 includes the minimum Continue path and reviewed/confirmed V2 core; M3 adds feedback-driven bookmarks/preferences/print and related-reading aids. Accepted preparation remains reusable. An optional question or static explanation is sufficient without arbitrary HTML/MDX, a quiz engine or a capstone. Image zoom may address an observed legibility problem, not require a new diagram platform.

The isolated [UI04 later-delivery section (legacy Beta 2)](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=129-475) previews local resume/bookmark recovery, terminology placement and optional preferences only. These are labelled concepts, not live controls or approved glossary content. Printing, a validated export and optional listening now follow the approved Milestone 3 direction; the historical preview assigns none of that implementation.

The historical [palette spec](design/reading-palettes-spec.md) and [design review](reviews/reading-palettes-design.md) recorded three background swatches—Original / Mist Blue / Soft Grey—and22 design-only variables. Their133-variable/111-production-mapping inventory describes that dated study, not a fresh V2 inspection. That study was not implemented and is superseded as the future target by the neutral appearance/six-accent direction above. Preserve its evidence and Milestone 1 assets; it releases no old-palette or V2 code. The accepted F01 local intake is separate completed work, so “asset discovery only” is not a description of all current Milestone 2 outcomes.

<a id="beta-3--selective-evidence-led-extensions"></a>
### Delivery Milestone 3 — Selective, evidence-led extensions

**Delivery Milestone 3** (historical label: Beta 3).

**Approved main completion — 2026-11-18:** refine the whole-book Chinese first edition, adapt stable Chinese material into separately reviewed English batches, and deliver selected useful reading/export/AI-context improvements. This replaces the earlier extension-only framing; the historical heading/aliases remain for existing links. Use feedback and aggregate signals for maintenance. Optional pilots are selected by evidence and need not all ship.

| Route / selected extension | Reader value | Scope and evidence |
| --- | --- | --- |
| Chinese first-edition refinement | Read a coherent whole book | Review structure, gaps/repetition, transitions, terminology, facts/sources, original cases/figures and conditional limits; fix through the original owner and affected gates. |
| Separately reviewed English batches | Read a natural equivalent from stable Chinese sources | Preserve meaning, uncertainty, code and evidence while adapting expression/humor. Review each batch and its source version; partial coverage is labeled, never a complete bilingual claim. |
| Related reading and limited reference aids | Return to a connected question | Curate ordinary related links, a modest glossary/case index and a few routes using actual reviewed chapters. No elaborate taxonomy or fabricated popularity. |
| Feedback-driven reading controls | Return, adjust or print comfortably | Build on M2’s minimum local Continue with reader-created bookmarks, limited preferences and print after real needs; retain denied/invalid storage, changed-target and keyboard/mobile recovery. |
| Passage sharing and contextual feedback | Identify a useful passage | Stable paragraph identity, explicit reader action, source/version and chapter/section fallback when text changes; accessible/manual-copy support and selected-text disclosure; precise highlight remains optional. |
| One actual PDF or EPUB | Use a versioned export of the reviewed edition | Select one format, generate from approved source, validate layout/links/figures/code, record source revision/date/update policy and actual format coverage. Validate click statistics for the real link; a click is not completed transfer. |
| Small editable AI cards and context bundles | Bring a bounded explanation/question to one's own tool | Review visible/editable context, assumptions, source/version and copy/manual fallback; no automatic transmission, hosted model calls or key custody. No per-chapter quota or output/learning guarantee. |
| Feedback and measurement maintenance | Prioritize useful corrections and re-check sensitive claims | Combine observed feedback and defined aggregate signals with dated source review. Do not infer retention, comprehension, productivity or willingness to pay. |
| Optional pilot: Versioned chapter listening | Review suitable explanations away from the screen | Narration adaptation, technical pronunciation, matching text/audio versions, chapter/section navigation, incremental regeneration, storage and failure recovery. Text/listening position linking is optional. |
| Optional pilot: Offline website reading | Continue approved chapters with unreliable connectivity | Asset coverage, storage limits, cache/update behavior, unavailable content and recovery. PWA is an implementation option, not a mandated dependency. |
| Optional pilot: Selected progressive/interactive diagrams | Inspect difficult flows and changed conditions, such as retries, queues or RAG | Accessible controls and an equivalent useful static/text explanation; no animation throughout the book. |
| Optional pilot: Optional interactive examples | Explore one mechanism through a small controlled simulation or editable frontend sample | Begin with a request/response sample using mocked API states, clearly labeled; static prose remains complete. Pilot an external sandbox link or embed only after browser/mobile, service terms, privacy, availability, dependency and cost checks; provide a non-embed fallback. |

Other candidates require a concrete need: local reading-record import/export, a cross-chapter concept map, bilingual side-by-side comparison, material translation-drift notices or additional export formats. Keep stable links during ordinary updates from the start; sophisticated revision navigation is a separate later candidate. Do not add cross-device accounts to make these features possible.

<a id="beta-4--proposed-multi-guide-experience"></a>
### Delivery Milestone 4 — Proposed multi-guide experience

**Delivery Milestone 4** (planning alias: Beta 4; proposed).

**Product objective:** design and build a lightweight static author/bookshelf entry for this book and actual later works, reusing the reviewed editorial and measurement pipeline, and support the Goal 4 expansion (formerly Stage 4) when a second real collection serves a validated reader need. A simple entry does not require a second completed guide; deeper cross-guide search and shared navigation depend on real content and reader need. This is a proposed future scope, not an assignment, implementation or promise to launch every item.

| Feature candidate | Reader value and condition |
| --- | --- |
| Lightweight author/bookshelf entry | Help readers discover this book and actual later books, articles or projects across technical, career and life topics. Design and build a simple static author page with a factual works list, short introductions and actual book/article/project links to reading sites or suitable third-party shelves; reuse reviewed measurement/editorial practices. Evaluate usefulness, content readiness, accessibility and maintenance; no new brand, accounts, CMS, payment system or second completed guide is a prerequisite. This is a Milestone 4 planning candidate, not an assigned build. |
| Guide directory and guide-scoped navigation | Find a specific guide and understand its scope; only when there are at least two real collections |
| In-guide and cross-guide search | Find reviewed content with a clear source guide and language; preserve current-language availability |
| Shared content and editorial reading paths | Reference one approved article from multiple paths without duplicating its source; preserve stable existing URLs |
| Language/status and contribution information | Show actual translation and publication status; clarify how readers suggest corrections and who reviews them |
| Author/collaboration information | Present truthful author information, actual work and an appropriate contact route; no outreach/account system is implied. Broader paid offerings and sponsorship remain deferred until after Milestone 4 |

**Acceptance direction:** for a simple author/bookshelf entry, check factual work descriptions, usable links, actual content/language status, accessibility and maintenance without requiring another finished guide. For a richer multi-guide slice, prove both guides can be discovered, navigated and searched with real approved content, stable old links and honest language status; check accessibility, public content boundaries and maintenance effort. No account, payment system, ads, CMS or personalized recommendation engine is implied.

<a id="outside-the-planned-betas"></a>
### Outside the planned delivery milestones

**Author direction, 2026-11-18:** consider Amazon/KDP and other formal publishing, paid editions and broader commercialization only after Delivery Milestone 4. Reassess language support, costs, rights, licensing, tax, legal-deposit rules and platform terms at that later point; prior research is not an approved launch plan. Ordinary author information and incidental career or collaboration opportunities remain within earlier scope.

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

The historical gate heading remains stable; current acceptance follows the approved M2 writing-first routes above. Require coherent reviewed Chinese core coverage across all eight parts, original examples/figures with explained assumptions/limits, and no unresolved required chapter-review finding. The small closing section is scoped through the same gates; it does not automatically create a 49th outline unit.

Validate essential reader entry/navigation/search, code/table/image legibility, stable chapter/heading and language/source contracts, and sharing/correction on actual desktop/narrow screens. M2 acceptance also covers the reviewed/author-confirmed V2 core and minimum Continue, including explicit URL precedence, device-only disclosure and changed/missing/invalid/denied/quota-storage recovery. Plan Safari and real-phone checks and report exact devices/versions/results or unperformed limits; a Chromium run cannot silently certify either. Any required omitted check remains open. Verify the basic measurement's privacy, session deduplication, entry cohort and denominator, actual routes/availability, failures and reported counts before activation. Do not count a download where no real link exists.

An individually reviewed chapter can progress through separately authorized intake/publication before the whole draft; M2 completion needs the coherent core and scoped essential-reader/measurement acceptance, not 48 filenames or every optional pilot. Keep source readiness, UI design approval, local intake, CI/merge and public release distinct. No execution is authorized by this gate description.

<a id="beta-3-gate-prove-value-and-maintenance-feasibility"></a>
### Milestone 3 gate: prove value and maintenance feasibility

Review the full Chinese edition for cross-book continuity, accuracy, voice, examples, sources and declared limits. English batches follow stable Chinese source versions and separate review; keep their actual coverage visible. Validate one real PDF or EPUB export, its source/version/date, links/figures/code and actual download-click reporting. Feedback-driven links/reference aids/reading controls and copy-only cards/context bundles need bounded content/implementation review; they do not establish model quality, retention or productivity.

For reading-state slices, test changed/deleted chapter or heading targets, invalid/blocked/quota storage, explicit URL precedence and device-only disclosure. Preferences/print must preserve accessible defaults. For cards/bundles, inspect exact visible/editable context and explicit copy/manual fallback without automatic calls.

Each selected optional pilot needs a bounded assignment, a smaller accepted trial, concrete reader evidence and operational acceptance. A one-chapter audio trial can use manually reviewed assets: adapt narration from the approved Markdown, explain figures/tables, normally skip raw code/URLs and record pronunciation/omissions, model/execution/cost limits. It need not create a full-book regeneration system. For automated audio, narration and model/voice configuration identify a version; regenerate only affected reviewed material, publish assets before switching the index, preserve the working version on failure and prevent older jobs overwriting newer versions. Label or hide stale audio after material prose changes; formatting-only edits need not regenerate it. Specify retry/recovery and storage/cost boundaries. Playback uses prepared assets, not inference per visit; no arbitrary voice cloning.

Offline/interactive/context-bundle candidates each need their own accessibility, content-version and failure checks. For passage sharing, validate actual chapter/paragraph targeting and changed-text fallback, keyboard/mobile access, copy failure and selected-text disclosure; precise highlight is optional. For interactive examples, check mocked-versus-real boundaries, static alternatives, third-party costs/terms and ongoing maintenance. Do not infer approval for a provider, library, paid service or implementation from this roadmap. Feedback informs reviewed revisions; it never automatically publishes generated prose.

<a id="beta-4-gate-prove-multi-guide-value"></a>
### Milestone 4 gate: prove multi-guide value

A simple author/bookshelf entry may link this book before a second guide exists; check factual descriptions, actual availability, links, accessibility and maintenance within its selected scope. A real second collection and reviewed mapping for its intended reader must exist before selecting richer multi-guide implementation scope. For that richer scope, validate guide entry, cross-guide links and search, language availability, stable existing URLs and accessible navigation with approved content. Evaluate maintenance effort and reader feedback. Commercial or advertising experiments, if proposed, have separate scope and authorization; reader interest or site traffic is not proof of payment.

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
| Milestone 3 validated export and optional audio/automation | Developer proposes; Writer supplies reviewed samples | Author / Coordinator | Separate scoped export validation or optional bounded trial, reader value and resource authorization |
| License scope, provenance and contributions | Assigned document owner reviews actual materials and notices | Author decides unresolved scope; Coordinator reviews | Preserve selected MIT/CC BY-SA 4.0 notices; verify applicable rights, attribution and contribution terms before reuse/integration |
| Reader trial, release scope and deployment evidence | Owners propose; Developer supplies runtime evidence | Author / Coordinator | Bounded validation authorization; relevant reading, content and QA gates accepted |

Close TBU items with evidence, remove obsolete placeholders and synchronize status. Do not insert guessed measurements, unapproved dates or cost commitments.
