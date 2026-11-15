# Roadmap: Content, Reading Product and Maintenance

Updated: 2026-11-15. This is a planning framework, not a delivery-date commitment or a replacement for a scoped assignment.

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

The current priority is **AI Development Workflow and Delivery History** (legacy DOC02): English project/process documentation, readable delivery names and one concise Chinese stage summary. Complete and review this documentation stage, then pause for the author’s discussion of the overall project design. Do not automatically resume manuscript, code or deployment work after documentation acceptance. Earlier UI/E2E/QA and post-QA GitHub Pages authorization remains recorded, but resumption requires the author’s direction after that discussion.

| Deliverable | Current evidence | Remaining boundary |
| --- | --- | --- |
| Website Foundation and Bilingual Routing (D02) | Reviewed code/configuration is in main; bilingual home/empty contents routes, 404 and static export exist. [Review](reviews/D02.md). | Browser visual, keyboard and client-interaction acceptance is incomplete. |
| Opening and Common Foundations (W02) | Two Chinese drafts passed re-review with R1–R3 closed and merged through PR #1. [Review](reviews/W02.md). | Not connected to a public reading site; English adaptation and later chapters require scope. The accepted minimal content contract permits these reviewed drafts as initial inputs for a later assigned reading stage; that rendering is not implemented yet. |
| Repository Access and Main Protection (SEC01) | Default main and required-PR protections were independently checked. [Review](reviews/SEC01.md). | Access observations have dates and must be rechecked after changes; they are not an absolute security guarantee. |
| Project Documentation Integration (DOC01) | The original 27 documentation files plus the review record were integrated through PR #3. [Review](reviews/DOC01.md). | Storing a proposal does not approve its chapter list or features. |
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

## 2. Feature priorities

Priorities guide design; they do not assign all work at once. Establish reading and discovery before validating enhancements.

| Area | Minimum useful scope | Status | Outside the initial scope |
| --- | --- | --- | --- |
| Content and languages | One source for prose, order, status and language mapping | Accepted minimal opening/G01 contract; broader schema and future bilingual extensions TBU | Automatic publication of unreviewed drafts; translation on page open |
| Reading UI | Home, chapters, category navigation, local outline, responsive layout, Day/Night and keyboard access | Core direction; design delivered, implementation acceptance pending | Full desktop-OS simulation or unnecessary window controls |
| Search and case entry points | Chapter/paragraph search, keyword and case indexes | Priority plan; engine/index rules TBU | Semantic search or model recommendations |
| Reading recovery | Current-device position and necessary bookmarks | Planned; test with real prose | Accounts or cross-device synchronization |
| Sharing and correction | Stable paragraph links; feedback with chapter, location and version | Priority plan; details TBU | Built-in social platform or live comments |
| Terminology | Small shared glossary with keyboard-accessible short explanations and deeper links | Planned | A complete encyclopedia or repeated definitions |
| AI question cards | Curated questions, necessary context and copying | Small priority experiment | Hosted AI chat, model keys or live inference |
| Chapter audio | One listening sample, playback and narration conversion | Candidate experiment | Immediate full-book audio or arbitrary voice cloning |
| Content updates | Material-change notes and language/audio version mapping | Add as content grows; rules TBU | Notifications or regeneration for every punctuation change |
| Offline export | Validate one EPUB or PDF path | Later candidate | Every format and a dedicated reader at once |
| Progressive diagrams | Reveal a few difficult relationships in steps with static explanations retained | Later candidate | Animation for every diagram or interaction required to understand a principle |

## 3. Product acceptance checkpoints

These checkpoints complement the delivery stages without replacing their legacy identifiers or exact assignments.

### Positioning and sample chapters

Confirm the audience, tone, content boundaries, sources and author disclosures. The opening/foundations drafts passed review; later chapter and English-sample scope remain separate. License choices are still TBU. Explanations and examples must work in actual samples; a proposed complete outline is not a reviewed complete outline.

### Comfortable reading of approved content

- Use the accepted [initial-chapter contract](content-contract.md) for stable opening/G01 IDs, slugs/order, typed allowlist, source hashes, reviewed-draft status and missing-English navigation. It permits only these inputs for a later assigned implementation; main does not yet render them. Agree broader metadata/schema, new chapters and future translation/version behavior before expanding it.
- Build only approved prose and necessary public resources. Planning, handoffs, reviews, sync prompts and `.local/` do not enter the reading directory or search merely because they exist in Git. Search and audio must share the publication boundary.
- Validate the home, desktop and mobile chapter direction with real text, tables, diagrams, code, links and terminology.
- Developer supplies browser, keyboard, language-switching and runtime-error evidence for the scoped integration.
- Acceptance requires readable mobile/desktop samples, reliable refresh/switching and exclusion of unreviewed/private material from public artifacts.
- The minimal initial contract is accepted; its implementation and browser acceptance remain undone. Full-book schema, future bilingual/version extensions and expanded file scope remain **TBU**. Do not reopen accepted minimum decisions or imply they already shipped.

### Find, share and resume reading

Assign search, case entry points, paragraph access, correction context and reading-position behavior. Check Chinese/English search, no results, stable links and invalid local state. A reader should find an explanation from an ordinary engineering problem and share or report its precise location. Search/index updates, versioning and analytics remain **TBU**; do not assume tracking, accounts or a backend.

### Low-cost AI reading extensions

- Writer prepares a few cards in two or three suitable stable chapters; Coordinator reviews their assumptions and questions with the prose.
- Developer provides preview/copy with chapter links and versions, without a model call. Cards may ask for another example, a counterexample or a check of understanding.
- Readers manually paste the editable text into their own tools. Do not automatically send text, manage accounts/sessions or hold keys.
- Acceptance requires understandable prompts without hidden chat history, copying-error feedback and cards that do not interrupt reading.
- Actual tool-use trials, feedback collection and downloadable context remain **TBU**. A prepared prompt is not an integration with GPT, Codex or Claude, and does not guarantee model output.

### Single-chapter audio trial

- Choose a stable chapter suitable for listening, with samples for explanation, mixed-language technical terms and diagram/table narration.
- Derive narration from the same Markdown source. Skip raw code, URL strings and formatting; supply useful spoken explanations. Avoid maintaining a duplicate full-book script.
- Generate by section and assess necessary user-initiated play/pause/resume/stop, progress and speed controls; minimum scope remains TBU.
- Compare intelligibility, omissions/repetition, pronunciation, resources and generation time. Model, voice, execution location and budget are **TBU**; no listening trial or service selection has occurred.
- Check the audio against its prose and record which material needs the page.
- Only after a useful trial, design reviewed narration changes → affected-section regeneration → new asset upload → successful index switch. Narration, model and voice configuration jointly identify a version. Failed generation must not replace a working version; older concurrent jobs must not overwrite newer indexes.
- Generate only reviewed versions authorized for publication. Label older audio or hide it when material prose changes are not yet reflected. Formatting-only changes need not trigger regeneration. Implementation must specify retries and failure handling.
- Storage/CDN, execution, automation and costs remain **TBU**; model/deployment choices require applicable authorization. Local generation still uses hardware, time and storage and cannot continue while the machine is offline. Playback alone need not introduce an always-running application backend.
- Expand only after listening acceptance, not simply because full generation is technically possible.

### Public maintenance and release

Confirm content/code licenses, contribution rules, issue/PR entry points, public chapter scope and change notes. Verify static deployment, public URL, subpaths, 404 and released features on the live site. Update README links to actual deliveries and retain limitations. Release timing and each release's scope remain **TBU**. Basic reading can justify a first release without waiting for audio, cards or every candidate feature.

Feedback guides revisions and the next questions; it does not automatically generate or publish unreviewed prose. Keep feedback mechanisms small. Accounts, rankings, billing, advertising and lead generation are outside the initial release.

## 4. Ownership and handoff

Writer and Developer can advance independent assigned work, with disjoint files. Resolve content schema, language mapping and status rules before integrating them in parallel. During the current documentation priority, both work in a dedicated documentation tree, while the original theme checkpoint remains frozen elsewhere.

Owners submit stage records under their respective `docs/handoffs/` directories. Coordinator reads actual deliverables and evidence, records review decisions under `docs/reviews/`, returns revisions and manages Git integration. A dependent stage waits for its prerequisite review. The roadmap is not blanket authorization; local notes are not hidden dependencies for another role.

Writer authors assigned vision/roadmap and planning explanations; Developer authors assigned engineering/history records. Coordinator assigns, reviews, feeds back and integrates rather than writing the owners' formal deliverables. The author remains the final authority.

## 5. Open decisions

| Detail needed | Supplies detail | Accepts / coordinates | Prerequisite |
| --- | --- | --- | --- |
| Chapter names, order and next batch | Writer | Author / Coordinator | Current-stage review and outline discussion |
| Language, status and path contract | Writer + Developer | Coordinator | Before prose integration |
| Home/chapter/mobile design | Existing UI03 design; Developer supplies implementation feedback | Author / Coordinator | Visual acceptance and explicit implementation scope |
| Search, recovery and correction behavior | Developer | Coordinator | Content contract and basic reading |
| Card and copy-context format | Writer + Developer | Coordinator | Stable chapters allowed for publication |
| Audio model, resources and cost | Developer proposes; Writer supplies samples | Author / Coordinator | Single-chapter scope and resource authorization |
| Content/code license and contributions | Assigned document owner proposes options | Author decides; Coordinator records | Before reuse and outside contributions |
| Deployment URL, evidence and first-release scope | Developer | Author / Coordinator | Reading and QA gates accepted |

Close TBU items with evidence, remove obsolete placeholders and synchronize status. Do not insert guessed measurements, unapproved dates or cost commitments.
