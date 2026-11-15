# Roadmap: Vibe Coding, Then What?

Updated: 2026-11-15. This is a planning framework, not a delivery-date commitment or a replacement for a scoped assignment.

Project/book: **Vibe Coding, Then What?** Repository slug: `vibe-coding-then-what`. Subtitle: **Understand the Systems Behind Your AI-Built Products**. The AI-assisted-product entry positioning does not change the content framework, Beta scopes or implementation holds below.

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

## 1. Current baseline and immediate priority

The [board](coordination.md) alone owns current assignments and holds. **Full-stack and AI Product Engineering — v1 Content Framework** is a completed historical planning stage, accepted and integrated through [PR #9](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/9). Its Junior–Senior audience, required AI product architecture, separate coding-AI delivery thread and [eight-part framework](../book/planning/outline.md) remain the content direction; page names/splits can evolve and listing does not accept their research/manuscripts.

The rebranding assignment is a narrow exception for naming/positioning, necessary site metadata and Pages-prefix migration/verification, plus the explicitly authorized opening book-name replacement. It does not resume other product implementation, new prose/translation, UI/schema/E2E or deployment. Earlier tool and post-QA GitHub Pages authorization does not lift those holds. Use the board for current owners, status and exact scope, rather than treating this roadmap as an assignment. Completed documentation/onboarding outcomes belong in [history](development-history.md) and their [documentation](reviews/ai-development-documentation.md)/[onboarding](reviews/agent-workflow-onboarding.md) reviews.

| Deliverable | Current evidence | Remaining boundary |
| --- | --- | --- |
| Website Foundation and Bilingual Routing (D02) | Reviewed code/configuration is in main; bilingual home/empty contents routes, 404 and static export exist. [Review](reviews/D02.md). | Browser visual, keyboard and client-interaction acceptance is incomplete. |
| Opening and Common Foundations (W02) | Two Chinese drafts passed re-review with R1–R3 closed and merged through PR #1. [Review](reviews/W02.md). | Not connected to a public reading site; English adaptation and later chapters require scope. The accepted minimal content contract permits these reviewed drafts as initial inputs for a later assigned reading stage; that rendering is not implemented yet. |
| Repository Access and Main Protection (SEC01) | Default main and required-PR protections were independently checked. [Review](reviews/SEC01.md). | Access observations have dates and must be rechecked after changes; they are not an absolute security guarantee. |
| Project Documentation Integration (DOC01) | The original 27 documentation files plus the review record were integrated through PR #3. [Review](reviews/DOC01.md). | The historical 45-chapter proposal was not approved by storage. The author has now confirmed the eight-part v1 direction; individual page analysis/manuscript gates remain. |
| Continuous Integration and Merge Protection (CI01) | PR #4 passed Quality, Static export (root) and Static export (pages); matching required checks and up-to-date branches were verified. [Review](reviews/CI01.md). | Each new proposed head needs its actual required checks. CI does not deploy. |
| Strict TypeScript Migration (TS01) | Reviewed strict migration merged through PR #5 as `92a0edf`; three required checks passed. [Review](reviews/TS01.md). | This does not accept the subsequent UI or Panda configuration. |
| Browser Fundamentals — Research and Outline (F01A) | Analysis r1 accepted; PR #6 passed all three checks and merged as `4ff4a1f`. [Review](reviews/F01A.md). | Analysis only: no manuscript, browser experiment or publication acceptance. |
| Design Tokens and Day/Night Themes (DS01) | Frozen unaccepted checkpoint `4da2578048f8df113fed92d99e084f644a9a788e` outside main; local build, 10 tests and a 111-token report were reported. | Independent full browser/UI review is incomplete. Temporary browser tooling is not permanent project E2E coverage or a passed browser test. |
| Reading Experience Design (UI03) | Three Figma pages, semantic layout roles, component contracts and responsive/Day/Night specimens. [Design handoff](design/reading-experience-v1.md), [review](reviews/UI03.md). | Author visual acceptance and implementation acceptance remain distinct. |
| Public release | No accepted live site at this checkpoint. | URL, live acceptance and licenses remain TBU. |

### Authorized implementation sequence, currently paused

| Deliverable | Expected result and gate |
| --- | --- |
| Continuous Integration and Merge Protection (CI01) | Completed foundation; require successful checks for subsequent heads without weakening protection. |
| Strict TypeScript Migration (TS01) | Completed foundation; retain strict application checking as later tooling changes are reviewed. |
| Design Tokens and Day/Night Themes (DS01) | Keep the frozen checkpoint recoverable. After documentation acceptance, pause for overall-design discussion and a new resumption instruction; later review must still cover tokens, typography, system/default theme, explicit persistence and initial rendering. |
| Reusable Reading Components (CMP01) | Review shared header, controls, navigation, callout, code and comparison components and their states; no unassigned component suite. |
| Responsive Chapter Reading (PAGE01) | Review one responsive page against the accepted design. The accepted [minimal content contract](content-contract.md) permits opening/G01 as reviewed-draft inputs when this stage resumes; Figma specimen prose is not manuscript content. |
| Browser Validation and E2E Tests (QA01) | Actual narrow/tablet/desktop, theme/refresh, keyboard/focus, overflow, console and bilingual-route evidence; maintain a small useful E2E suite and CI/export checks. |
| GitHub Pages Release (DEP01) | User-authorized after relevant code/content/QA review; scope deployment separately and verify the live URL, subpath and 404. No paid service or automatic publication of all drafts. |

The Panda checkpoint includes an upstream declaration problem and a proposed split between application and build-tool compiler boundaries. Coordinator proposed the boundary; Developer implemented local checks. Local success is not independent UI acceptance or proof that upstream declarations were repaired. See Development History for the evidence and decision sequence.

## 2. Content direction and prerequisites

| Content outcome | Prerequisite and acceptance boundary |
| --- | --- |
| Junior–Senior Full-stack + AI Product Engineer framework | Confirmed audience/eight-part direction; refine independent page names/merges through planning review without claiming a job-level outcome |
| Eight connected parts | Product/architecture; frontend/Design Systems; API/integration; data/search; async/traffic/reliability; cloud/testing/delivery; observability/recovery; required AI product architecture plus coding-AI delivery. Detailed scope/examples/optional depth and all 45 legacy mappings live only in the outline. |
| Existing accepted material | Rebranding permits only the opening's book-name replacement, separately reviewed with its new source hash; G01 and F01A analysis stay byte-identical. Placement does not expand their old acceptance or authorize the unstarted F01 manuscript. |
| Future page writing | Concrete assignment → sources/detailed analysis and review → confirmed writing scope → manuscript and separate review. Do not list all working pages as Assigned. |
| Connected cases and depth | Shared mechanism/example/optional-trade-off layers; cases explain decisions, not compulsory projects. DevOps/data support product delivery/maintenance; specialist platforms and model training are outside the main line. |
| Frameworks, observability and AI providers | Examples chosen for explanatory value and checked when writing. Datadog is one proposed original correlation example; no provider/service/library adoption, installation or new paid account. |

The book's required AI product coverage is distinct from the reading website's optional AI question-card experiment. Required book coverage does not authorize live model calls, a chat product or an SDK integration on this site.

## 3. Reading-product releases and product rationale

**The book is the product; the website supports reading it.** Website Beta 1/2/3 are capability milestones, independent of the first-edition eight-part manuscript. New reviewed chapters do not require a new website beta. Later DevOps/data or other career guides are content extensions, not a current requirement for a recommendation engine, plugin system or specialist platform.

These are author-approved planning priorities, not implemented features, delivery dates or execution assignments. Existing implementation/manuscript holds still apply. Beta 1 can open with a small set of reviewed representative chapters; it does not require all working pages or both complete language editions. Any launch overview must first align the accepted opening's old organization through its own editorial review.

### Product evidence and selection rules

The desk review consulted [mdBook's reader guide](https://rust-lang.github.io/mdBook/guide/reading.html), [Material for MkDocs search](https://squidfunk.github.io/mkdocs-material/plugins/search/) and [Diátaxis](https://diataxis.fr/). These illustrate established reading/navigation/search patterns and distinct explanation/reference/tutorial/how-to needs. They are design references, not proof that our readers want every feature or a decision to adopt those tools.

**Not yet validated:** demand for audio, offline reading, exports, interactive diagrams or downloadable AI context. Junior–Senior is the confirmed audience range, not a validated market segmentation. Prefer chapter prerequisites, suggested routes and optional deeper discussion over separate skill-level products.

For each proposed feature, record the reader and situation, concrete problem, simplest content/link alternative, observable success and ongoing maintenance cost. Reject additions whose main justification is technical novelty. Distinguish a product hypothesis from an observed reader outcome; do not invent demand, engagement or analytics.

### Beta 1 — Reliable basic reading

| Capability | Reader value and minimum boundary |
| --- | --- |
| Entry and published chapters | Explain the book, prerequisites and where to start; render only explicitly approved chapter/resource inputs. Retain the accepted initial contract and review broader expansion separately. |
| Navigation and orientation | Chapter groups, previous/next, in-page outline and stable heading links. Chapter introductions and related-reading links help connect ideas without a recommendation system. |
| Comfortable reading | Responsive desktop/tablet/mobile, Day/Night with system default and persistent explicit choice, readable prose/figures/callouts/code/tables, local overflow, keyboard access and visible focus. Defaults must work without settings. |
| Basic static search | Search approved published content, reach a chapter or heading and explain no results. Content coverage and Chinese/English behavior must be tested; no semantic search or backend. |
| Languages and sharing | Clear language entry, honest missing-translation behavior, shareable chapter/heading URLs and a simple GitHub correction entry. A complete bilingual corpus is not a release prerequisite. |
| Small AI question-card trial | A few useful questions at genuine conceptual difficulties, with visible necessary context, source/version and copy feedback. Readers edit/paste into their own tools; no hidden chat context, keys or live site inference. No quota of cards per chapter. |
| Release quality | Actual browser/accessibility checks, useful narrow E2E coverage, required CI/root/subpath export evidence, clear public content/license boundaries and separately scoped live deployment acceptance. |

Core reading must not wait for audio, exports or a general AI feature framework. If question cards have not demonstrated value or passed review, record them as deferred rather than block a basic-reading release.

### Beta 2 — Practical improvements, with bounded experiments

| Priority | Capability | Scope and rationale |
| --- | --- | --- |
| First | Resume and local bookmarks | Help readers return after a break; current device only. Handle missing/invalid stored state and changed chapters. No accounts or cloud sync. |
| First | Glossary, case/topic index and related chapters | Support revisiting an engineering question as the corpus grows. Use ordinary pages/links; avoid a complete encyclopedia or complex taxonomy. |
| Next | Better search and correction context | Useful excerpts, limited filters when content warrants them, and feedback including chapter/location/version. Avoid maintaining filters before useful content exists. |
| Next | Small reading preferences and print styles | Assess font size/reading width and browser printing after default typography is sound. Do not build an elaborate settings panel. |
| Next | More useful question cards | Trial another example, counterexample or understanding check; a few editable assumptions if needed. Copy only, without a hosted model service. |
| Next | Content and language updates | Simple material-change notes and links to available counterparts. Career-oriented reading routes remain ordinary editorial pages, not personalized recommendations. |
| Independent pilot | One offline export format | Try PDF **or** EPUB on reviewed chapters; inspect figures, links, code and version information before expansion. Browser print styles do not imply a validated export pipeline. |
| Independent pilot | One listening chapter | Pre-generate and manually review a suitable chapter, with basic playback controls. Manual asset updates are acceptable. No full-book coverage or automatic regeneration requirement. |

Beta 2 is not a commitment to ship every row together. Prioritize observed reading problems; export/audio pilots can be deferred without blocking the useful reading improvements. Image zoom is an optional small remedy for an observed figure-legibility problem, not a diagram platform.

### Beta 3 — Selective, evidence-led extensions

These are candidates, not a promise to implement them all. Select one or two only after a smaller trial shows enough reader value to justify development and maintenance.

| Candidate | Value hypothesis | Complexity that must be justified |
| --- | --- | --- |
| Versioned chapter listening | Review suitable explanations away from the screen | Narration adaptation, technical pronunciation, matching text/audio versions, chapter/section navigation, incremental regeneration, storage and failure recovery. Text/listening position linking is optional. |
| Offline website reading | Continue approved chapters with unreliable connectivity | Asset coverage, storage limits, cache/update behavior, unavailable content and recovery. PWA is an implementation option, not a mandated dependency. |
| Selected progressive/interactive diagrams | Inspect difficult flows and changed conditions, such as retries, queues or RAG | Accessible controls and an equivalent useful static/text explanation; no animation throughout the book. |
| Downloadable AI context bundles | Carry selected explanations and questions into readers' own tools | Bounded editable context, source/version attribution and Markdown export. No live chat or model-key custody. |

Other candidates require a concrete need: local reading-record import/export, a cross-chapter concept map, bilingual side-by-side comparison, material translation-drift notices or additional export formats. Keep stable links during ordinary updates from the start; sophisticated revision navigation is a separate later candidate. Do not add cross-device accounts to make these features possible.

### Outside the planned betas

Hosted AI chat/personalized Q&A, accounts/cloud synchronization, community/live comments/rankings, billing/advertising/lead generation, automatic unreviewed translation/publication and full desktop-OS simulation are not planned. AI product engineering remains required **book content** without requiring the website to become an AI application.

## 4. Product validation and acceptance checkpoints

### Validate the reading proposition

Use a small formative trial, for example 3–5 willing target readers with different experience levels; this is a proposed usability exercise, not completed research or statistically representative market validation. Let them find a topic from an engineering question, read/explain one mechanism, return later and try a question card. Observe confusion, navigation failure, misunderstood assumptions and whether the card adds anything beyond the prose. Do not collect private prompts or introduce tracking by default.

Record actual observations, limitations and resulting scope decisions. An unsuccessful task should first trigger examination of the text, labels and structure; it does not automatically justify another feature. User recruitment, external messages and telemetry need applicable authorization.

### Beta 1 gate: find, read, continue and share

- Preserve the [accepted initial-chapter contract](content-contract.md): opening/G01 IDs, order, reviewed source hashes, allowlist and missing-English navigation. Rendering is not implemented by this plan; broader schema/new inputs need review.
- Build/search only approved public prose/resources. Planning, drafts without publication approval, handoffs, reviews, sync prompts and `.local/` must not leak into artifacts or indexes.
- Demonstrate the reading journey with actual reviewed content: entry → chapter → relevant heading → next chapter → share/report. Test basic search/no-results and both language entry paths honestly.
- Verify desktop/tablet/narrow screens, Day/Night/system/refresh, keyboard/focus, diagrams, long code/tables, broken links and runtime errors. Show root and Pages-subpath build/artifact checks and required CI on the proposed revision.
- For any released cards, review assumptions with the prose, preview exact text/context and provide keyboard-accessible copy success/failure feedback. A copied prompt is not a GPT/Codex/Claude integration or a guarantee of output quality.
- Confirm content/code licenses, contribution boundaries and public chapter scope before release; separately verify deployed URL, assets, subpaths and 404. Reviewed, merged and deployed remain separate facts.

### Beta 2 gate: improve a demonstrated reading need

Check resume/bookmark recovery against changed headings and invalid local state; test glossary/index/search with real content and Chinese/English availability. Validate preferences without reducing accessibility or breaking layout. Review contextual feedback and question-card changes without adding a backend by default.

Accept pilots separately. For export, inspect one output format on representative chapters. For audio, compare intelligibility, technical pronunciation, omissions/repetition and whether tables/diagrams can be understood or require the page. Adapt from the same approved Markdown rather than maintaining an independent full-book script; skip raw code/URLs/formatting and retain necessary spoken explanation. Record resources, time and limitations; model, voice, execution location and cost remain TBU. A basic single-chapter trial does not require a production regeneration pipeline.

### Beta 3 gate: prove value and maintenance feasibility

Each selected candidate needs a bounded assignment, a smaller accepted trial, concrete reader evidence and operational acceptance. For automated audio, narration and model/voice configuration identify a version; regenerate only affected reviewed material, publish assets before switching the index, preserve the working version on failure and prevent older jobs overwriting newer versions. Label or hide stale audio after material prose changes; formatting-only edits need not regenerate it. Specify retry/recovery and storage/cost boundaries. Playback uses prepared assets, not inference per visit; no arbitrary voice cloning.

Offline/interactive/context-bundle candidates each need their own accessibility, content-version and failure checks. Do not infer approval for a provider, library, paid service or implementation from this roadmap. Feedback informs reviewed revisions; it never automatically publishes generated prose.

## 5. Ownership and handoff

Writer and Developer can advance independent assigned work, with disjoint files. Resolve content schema, language mapping and status rules before integrating them in parallel. Use each task brief and the board to verify workspace and ownership rather than assume an old worktree. The preserved unaccepted theme checkpoint is not an input to content-framework implementation.

Owners submit stage records under their respective `docs/handoffs/` directories. Coordinator reads actual deliverables and evidence, records review decisions under `docs/reviews/`, returns revisions and manages Git integration. A dependent stage waits for its prerequisite review. The roadmap is not blanket authorization; local notes are not hidden dependencies for another role.

Writer authors assigned vision/roadmap and planning explanations; Developer authors assigned engineering/history records. Coordinator assigns, reviews, feeds back and integrates rather than writing the owners' formal deliverables. The author remains the final authority.

## 6. Open decisions

| Detail needed | Supplies detail | Accepts / coordinates | Prerequisite |
| --- | --- | --- | --- |
| Detailed reading-page names/splits and next assigned page | Writer | Author / Coordinator | Confirmed eight-part direction; planning review, then an explicit page assignment |
| Future language/status/path contract extensions | Writer + Developer | Coordinator | Preserve the accepted initial opening/G01 contract; review expansion before new prose integration |
| Home/chapter/mobile design | Existing UI03 design; Developer supplies implementation feedback | Author / Coordinator | Visual acceptance and explicit implementation scope |
| Beta 1 search/sharing; Beta 2 recovery and contextual correction | Developer | Coordinator | Content contract, basic reading and observed reader needs |
| Card and copy-context format | Writer + Developer | Coordinator | Stable chapters allowed for publication |
| Beta 2 export/audio pilots; Beta 3 automation | Developer proposes; Writer supplies samples | Author / Coordinator | Separate bounded trial, reader value and resource authorization |
| Content/code license and contributions | Assigned document owner proposes options | Author decides; Coordinator records | Before reuse and outside contributions |
| Reader trial, release scope and deployment evidence | Owners propose; Developer supplies runtime evidence | Author / Coordinator | Bounded validation authorization; relevant reading, content and QA gates accepted |

Close TBU items with evidence, remove obsolete placeholders and synchronize status. Do not insert guessed measurements, unapproved dates or cost commitments.
