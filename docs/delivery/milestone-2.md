# Delivery Milestone 2 — a useful next reading slice

Date: 2026-11-17 (Australia/Perth). Owner: Coordinator/Reviewer. The author approved the five-item sequence and resumed work. [The board](../coordination.md) is the only live assignment/status authority; [the roadmap](../roadmap.md#beta-2--practical-improvements-with-bounded-experiments) owns the complete candidate backlog. This record defines the current slice, not a promise to deliver every candidate or the whole first edition at once.

## Design direction and next delivery priority — 2026-11-17

The author approved planning for a V2 reading experience based on the existing Milestone 1 design. Preserve the earlier Figma pages, historical decisions and accepted local intake; use the separate `04 · Reading Experience V2` page for the new work. That page was created empty; a completed design, author acceptance and code change are not yet established. The earlier Original / Mist Blue / Soft Grey background-palette handoff is retained as historical evidence and superseded as the future direction by neutral light/dark surfaces with six accent choices independent of System/Light/Dark.

**Sequence:** (1) define and review V2 foundations and key controls; (2) design desktop/mobile home, chapter reading and critical states using real reviewed Chinese content, including notes, code, figures and language availability; (3) author reviews the design; (4) Developer assesses existing code and proposes a bounded implementation slice, starting with theme foundations/shared components and reading surfaces; (5) verify actual browser behavior and integrate/release only through the normal distinct gates. Homepage reading entry and discovery improvements can follow toward the end of Milestone 2. This updates prospective priority without rewriting the dated completed slices below or independently assigning an executor.

Design and eventual implementation should consider keyboard/focus and non-color indicators, light/dark contrast for all accents, reduced motion, responsive navigation (including collapse and accessible width adjustment), URL-fragment precedence over local resume, storage failure, long content, missing translation and stable heading links. Accurate social previews and editable feedback are candidates; existing section-sharing/correction behavior must be preserved. A selection toolbar, editable copy-only AI prompt and selection feedback are design explorations, not promises to ship; exact-text links need a tested fallback. No automatic submission or model call, hosted chat, account, tracking service or cross-device sync is implied. Six accent colors, visual details and first implementation scope remain subject to design/technical review.

## Original content-first sequence — completed before the V2 priority update

Make the next reviewed explanation available for a continuous reading journey, while preparing a small way to return to reading. Content is the main effort; website work supports it. Product Goal 2's eight-part Chinese core draft remains an editorial direction, not a requirement to finish all working units in this milestone.

| Order | Work and owner | Reviewable output and prerequisite |
| --- | --- | --- |
|1|Close the independent quality corrections; Coordinator records the original reviewer's decision|The original reviewer has accepted r1 with explicit limits. Integration and deployment remain pending and unauthorized under the latest bounded task|
|2|Confirm Browser Fundamentals reuse; Writer, reviewed by Coordinator|Compare accepted F01A, P1.2, current editorial/workflow guidance and earlier G01. Record retained scope, changed assumptions and any substantive gap in F01M's handoff; do not repeat completed research without a reason|
|3|Write and review the Chinese browser chapter; Writer, reviewed by Coordinator|After scope confirmation, deliver `book/drafts/zh/02-browser-foundations.md` as one chapter. Review mechanism accuracy, example consistency, accessible explanation and reading flow; return findings and repeat affected review as needed|
|4|Prepare minimal approved-content intake; Developer, reviewed by Coordinator|Trace current manifest/parser/navigation/search/verifier dependencies. Propose the smallest reviewed allowlist/metadata/test changes for a third chapter. No runtime intake until its actual manuscript/hash/route decisions are accepted and specifically assigned|
|5|Prepare local resume/bookmarks; Developer, reviewed by Coordinator|One bounded behavior/design proposal using existing assets: explicit continuation, section fallback, local-only disclosure, storage failures and accessible recovery. Code and Figma implementation require a subsequent scoped release of this preparation gate|

The first-checkpoint Writer and Developer proposals can proceed concurrently because their files are disjoint and neither mutates shared build outputs. Browser prose depends on the reuse decision; chapter intake depends on accepted prose. Resume/bookmark preparation does not depend on a third chapter, but implementation is not part of its initial assignment.

## Writer gate and reading quality

Reuse [F01 analysis](../../book/planning/analyses/F01.md) and [its actual review](../reviews/F01A.md). Preserve the accepted causal sequence: different waits → document/style/geometry → resource dependencies → execution/events → visible versus action-ready → investigating evidence. Use the same fictional course-search setting; define terms through a concrete effect before optional precision. Do not teach a complete browser engine, React internals, protocol stack or event-loop puzzle collection.

Connected Chinese prose, restrained humor, original narrow diagrams and explained examples are preferred over bullet-only notes or a translated source survey. A reader should be able to distinguish resource waiting, busy page execution and a specific behavior not being ready. Native interactions must not be described as universally dependent on JavaScript. Async is not parallel CPU execution, a DOM change does not guarantee an immediate displayed frame, and a received200 response is not proof a feature works.

Conceptual diagrams and explicitly illustrative pseudocode are in scope. Invented timings, screenshots, observed results or employer incidents are not. Experiments in F01A remain unrun unless separately scoped and actually performed. New empirical claims require their corresponding evidence gate. Official-source reads may support technical claims; the writer records actual dates/sections/limits.

The two review gates in the [chapter workflow](../../book/planning/chapter-workflow.md) remain distinct. This assignment resumes one chapter, not English translation, a subsequent chapter, source publication or a global content-schema rewrite.

## Developer preparation criteria

At the first preparation checkpoint, the [initial content contract](../content-contract.md) allowed only opening/G01; its subsequent additive extension admits the exact accepted F01 source for local intake. A working identifier/path by itself does not define a public slug or approve publication. Identify actual code/tests that assume two entries and where localized home labels/benefits and English absence must be maintained. Recommend one approved input at a time, deterministic heading links and explicit source identity; no directory-wide draft scanning or body copies in JSX.

For local reading state, prefer a stable chapter/heading identity over raw scroll pixels. Explain existing URL fragment precedence, the timing of any deliberate resume action, invalid/removed headings or chapters, denied/quota/malformed storage, clearing and cross-tab behavior. Distinguish last reading position from a reader-created bookmark. State minimum keyboard/mobile behaviors and scope persistence to device/browser; no account, tracking backend or cloud sync.

Existing future Figma scenes are design inputs, not delivered runtime behavior. Any needed future visual correction must be listed with actual node IDs and current-code differences before mutating Figma. Search, modal/disclosure focus, the measured mobile toolbar and themes must remain unaffected. All official proposal/comment language is English-first.

## Deferred work and boundaries

Three direct palette swatches have an existing [accepted design handoff](../design/reading-palettes-spec.md); they are not implemented by this slice. Glossary/case links, question cards, reflection questions, printing/preferences, language notes and discoverability follow useful approved content. PDF or EPUB and one-chapter audio remain separately accepted pilots; no hosted AI chat, accounts, mass translation, offline service worker or automation pipeline is needed for this slice.

Necessary code/tests/builds will be assigned with the implementation slice. Current preparation installs nothing, alters no system/access settings, and does not stage/commit/push/merge/deploy. Preserve all accepted implementation and prior reviews; coordinate any future build/output ownership first. Formal acceptance, integration, CI and release remain different facts.

## First-slice outcome — 2026-11-17

The original [independent quality review](../reviews/quality-findings-2026-11-17.md) accepted the seven prior corrections. Writer's [reuse scope](../reviews/F01M-scope.md) and [Browser Fundamentals manuscript r3](../reviews/F01M.md) are accepted after actual source review, bounded feedback/revisions and affected reinspection. Developer's [intake and local-reading-state preparation r2](../reviews/milestone-2-preparation.md) is accepted after its verifier/navigation clarification. Both execution tasks are closed/frozen; the board owns any next assignment.

This completes the five-item **writing/preparation slice**, not the full milestone or a release. There are now three accepted Chinese manuscript sources, but only the original two are runtime/public inputs. No new English body, reading-state implementation, palette, live future Figma scene or release was delivered by this slice. Source/parser/link/preservation checks are recorded in the reviews; no new site build, cloud CI, merge or deployment occurred.

Recommended next slice: admit the exact accepted browser source using explicitly confirmed ID/slug/order/H1/hash/review and bilingual navigation metadata, correcting the documented two-entry verifier/test assumptions, then validate root/Pages and actual reading paths. Continue/bookmark visible design/code remains a separate small slice; B1 precedes B2. Do not use source acceptance or these recommendations to bypass a concrete task assignment, matching checks, integration authority or publication boundary.

## Second slice assigned — third-chapter local intake

After the author resumed main work, Coordinator confirmed the exact F01 r3 source and metadata in the [contract extension](../content-contract.md#delivery-milestone-2--approved-local-intake-extension), then assigned Developer the [bounded intake](../handoffs/developer/milestone-2-chapter-intake.md). This supersedes the first slice's preparation-only runtime boundary for intake, not its no-Git/no-release boundary. Implement and review the third local chapter before assigning continuation. The prior first-slice statements above describe their dated two-runtime-input checkpoint; this new assignment is not evidence that intake, browser verification or publication has already succeeded.

## Second-slice outcome — accepted local third chapter

The [intake review](../reviews/milestone-2-chapter-intake.md) accepts Developer r4 after actual source inspection, returned documentation findings and affected reinspection. The local manifest now explicitly renders opening/G01/F01, derives home/index availability, produces29 Chinese/0 English search entries and preserves all original complete-search/Unicode/nearby-outline safeguards. G01 is now the middle local chapter; F01 is the actual last local entry. The Writer's current outline/tasks status has its own factual follow-up acceptance. Both tasks are closed/frozen.

Executor checks passed44 Node plus lint/strict types, root/Pages builds/verifiers and16 Chromium E2E per prefix. Coordinator independently passed44 Node/lint/strict checks, rebuilt/verified root and ran16 root E2E, verified the handed-over Pages artifact and ran16 Pages E2E, then inspected actual1440/390/320×844 capture flows under both prefixes. Exact hashes, logs, screenshots, returned findings, browser/device/AT limits and current root-output state are in the review. This is local source/code/artifact acceptance, not cloud CI or deployment.

No Git writes or publication occurred; the last verified public edition remains two Chinese chapters. Continuation, bookmarks and palette remain future slices. The earlier recommendation to implement B1 Continue next is superseded by the V2 design-first priority above. Retain B1/B2 preparation for later assessment; neither continuation nor bookmark implementation is currently assigned. Existing chapter-level acceptance remains valid.

## Existing-work closeout and next gate

The [closeout review](../reviews/uncommitted-closeout-2026-11-17.md) separates accepted local work from Git integration/publication and unresolved V2 design. Existing quality/F01 outcomes are retained; there is no need to discard them or wait for a redesign to preserve a reviewed baseline. The old three-background palette is historical; no old palette, continuation or V2 UI coding should proceed from earlier recommendations.

The next design gate uses the separate V2 page and neutral System/Light/Dark plus six independent accents. System resolves the light/dark appearance; it is not a third rendered background. Accent choices are not six background palettes. Exact shades, components/states, responsive behavior and final implementation slice remain to be reviewed. No Figma changes, code upgrade, Git write or deployment is performed by this closeout; the board owns live assignments.
