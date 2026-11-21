# V2 reading polish — Coordinator review

Coordinator/Reviewer,2026-11-20 Australia/Perth. Author authorized the first reading-polish task only. Runtime baseline99ae1563f61b8945bf237028e80ecc90bb5c7fcc; [Developer handoff](../handoffs/developer/v2-reading-polish.md). Implementation, local review, PR/CI/integration and publication are separate gates. No PR or publication is assigned by this review.

## Target and preliminary design examination

Read the current role/board and exact bounded request. Figma file3GYIfJz8xSPGx3AE3RRkKi: desktop254:92, English Light/Dark280:123/184, Chinese mixed283:92; mobile258:3/280:245; navigation260:20; Appearance255:2. Coordinator inspected actual design context/screenshot for254:92 earlier in this same task, and refreshed258:3 and260:20 today. Developer obtained all eight assigned contexts separately. Use semantic typography and existing Panda recipes; no scaffold, specimen prose, new fonts, diagram adoption or fictitious English body.

The accepted requested scale is body16/28, desktop H1 32/mobile28 and H2 21. Some mobile specimen paragraphs remain16/26 or15/25; the explicit uniform body16/28 brief takes priority. Reading size controls visible in the design are outside this implementation.

A design-source gap was identified before coding: main reading frame contains an actual20px Collapse sidebar vector;260:20 still shows character demonstrations for the other sidebar actions. Coordinator returned the missing expand/hide/reopen asset mapping to the design owner. Independent typography/reset/control work proceeds; do not substitute hand-drawn assets or call the missing icons complete.

## Required affected checks

- Reset visibility depends on the stored preferred width, not a viewport-clamped effective width. Restoring default must leave deliberate keyboard focus on a stable control without moving the document. Preserve resize bounds, pointer cancellation, keyboard/ARIA values, stored preferences and all modes.
- Toolbar styling is explicit opt-in, with44px targets, readable neutral states, visible focus and forced-colors behavior; avoid weakening all quiet buttons or primary actions.
- Compare actual F01 before/after at1261/390/320, Light/Dark, enlarged text, content overflow and source-derived destinations. Existing fragments/Continue/search/Appearance/no-JS behavior remains operative. Distinguish browser-native zoom from CSS enlarged-text experiments.
- Review final actual diff, assets/context/callsite/rendered geometry, relevant tests and both export paths. Record untested engines/devices/AT.

Current outcome: local implementation accepted at the frozen revision below; integration and publication remain separate scopes.

## Final local implementation — accepted

Read the complete actual source diff, new SidebarIcon, all four added browser cases and final Developer handoff. Matched all16 frozen file SHA256 values; handoff SHA256e2898819a10b9198344d4f86fc3e75b7bef9d1528ae2cba62a4f78c04892b849. No manuscript, allowlist, theme-storage, package/lock or workflow delta. No new dependency or service was introduced. The original primary/quiet recipe definitions remain unchanged; toolbar/search are explicit opt-ins. Reset uses the stored preferred width and returns focus with preventScroll.

Verified each local sidebar export is nonempty with an unchanged20×20 root; search is18×18. Coordinator inspected actual295:92 and295:102 reference screenshots; design owner supplied approved295:92/97/102/107 and targeted search264:35. Runtime masks preserve geometry and inherit currentColor, with forced-color override confined to the decorative mask. Real browser requests and callsites/20px geometry/44px targets were checked.

Developer lint/types/60Node passed; root and Pages Webpack builds/verifiers passed8 documents/201 references and28Chinese/0English sections. Full Chromium suites passed48/48 per prefix. The local build flag is an existing workaround for the isolated dependency symlink; standard cloud CI has not run for this candidate.

Coordinator independently executed11 black-box result groups against the preserved root snapshot on4198: actual1261/390/320×Light/Dark metrics and overflow; body400 weight with16/28, desktop32/44 or compact28/40 title and21/32 H2; stored360→effective300 clamp without rewriting storage; reset at1261 kept scroll600→600, focused the separator and stored248; actual collapse/hide/reopen transitions, asset200 responses and20/44 geometry; forced-color mask paint/visible focus. No console/page errors. Script/result/screenshots: `.artifacts/coordinator-polish/`.

Visually inspected the actual before/after1261Light and320Dark captures, plus independent forced-colors screenshot. Sidebar/readability hierarchy is improved without widening/changing real content or theme semantics. Native Safari loaded the exact4197 root snapshot and its resting view was inspected. Attempts to use native zoom were repeatedly interrupted by browser interaction protection, so no native-zoom or full Safari acceptance is claimed. Successful200% root-text amplification is a separate test. Mobile hardware, mobile Safari, Firefox and actual assistive technology remain unrun.

Local review found no blocking issue within this bounded implementation. Keep the16-file revision frozen for the next authorized integration stage. Developer usage limit occurred after the completed frozen handoff; no extra runtime task follows. No PR, commit, push, merge or deployment occurred for this reading-polish task. The preview serves the retained root snapshot, independent of the final Pages export.

## Author byline amendment r2 — affected local review accepted

The author annotated the actual1006px reader and explicitly approved moving the unclear sidebar pen name. Read current source diff against the retained r1 archive, the complete r2 handoff (SHA2569724b45122108d6b64e5ae40e30cf88e98e4a02c2cb7f6d1db07b2fcce87047a), the nine affected-file digests and all23 final Developer identities. Independently matched every digest and the13 unchanged r1 source/assets. The book manuscripts, source manifest, theme stores, dependency/workflow files remain unchanged.

Coordinator actually inspected Figma297:122 context/screenshot with desktop297:123 and English mobile297:128: title14px above secondary13/20 labelled author, independent feedback action and natural narrow stacking. Design owner corrected297:127 to the existing approved Chinese提问与纠错 text. Source and small design/Developer-guide notes now use the same intended byline arrangement. The introduction retains its formal author line; the runtime-only sidebar attribution is removed. English/Chinese approved names come from existing README identity, centrally defined in i18n. No invented translation, card/avatar, new author link or copyright statement.

The initial root verifier failed because it still required the old sidebar attribution. Its original failure log is preserved. Inspected the narrow correction: every site's actual footer must contain exactly one properly escaped localized author paragraph; reader navigation must omit the bare name. The introduction's author/AI/source checks remain. No assertion was removed merely to pass.

Fresh r2 lint/types/60Node and both root/Pages Webpack builds and final verifiers passed (8documents/201references,28Chinese/0English). Browser49/49 passed per prefix. The new case covers40 ordinary route/locale/theme/width combinations and10 enlarged320px footer combinations; original source-identity checks retain JavaScript on/off and the unchanged introduction.

Coordinator independently exercised3 actual rendered cases on4199: Chinese F01 at1006 Light, English directory at320 Dark, and Chinese introduction at390 Light. Verified exact label/name,13/20 secondary metrics, title-before-author, mobile feedback order, no clipped name/document overflow, no sidebar attribution and retained intro byline; no console/page errors. Inspected both actual English mobile/Chinese footer captures in `.artifacts/coordinator-polish/`, with independent JSON at byline-result.json. Also loaded the r2 reader in the existing visible in-app browser and inspected its footer below real chapter content.

Accept the frozen r2 local amendment, with the existing native-zoom/mobile hardware/Firefox/AT limits retained. New preview4199 serves root-export-r2; old4197 owned preview has stopped. No feature commit, PR, push, merge or publication has occurred. Integration/standard cloud CI/publication remain subsequent scopes; keep the original shared checkout unchanged.

## Reader information dock r3 — changed placement, in review

The author subsequently rejected the entire reader horizontal footer, including feedback, and explicitly selected the bottom of the left book column. This supersedes r2 reader placement; r2 source/evidence remains archived and its non-reader footer remains. Coordinator dispatched the bounded server-rendered sidebar/mobile-menu book-info slot and returned the design revision to the original owner. Actually inspected299:3 desktop and299:14 mobile context/screenshots. The new author caption/name/feedback are grouped separately from navigation, without duplicate title/card/avatar.

Preliminary source feedback R3-1: the new feedback action needs an actual44px target, not only19px line height; keep its quiet appearance. Requested the matching transparent target in the design. Short-height criterion: verify real wheel and keyboard access when both outer/inner scroll regions are constrained; a programmatic scrollIntoView alone does not prove reachability. Review rendered evidence before deciding whether the scroll fallback needs correction.

Current outcome: r3 is in progress; no implementation acceptance is implied by r1/r2.

## Toolbar and prose-link amendment r4 — design reviewed, implementation pending

The author added three1188px annotations: the sticky status/outline row has mismatched hierarchy, the prose links look like unrefined global anchors, and the web.dev link crowds adjacent Chinese text. Coordinator inspected the current visible4199 r2 page and source: status lives inside ReadingTools, native details summary uses its triangle plus outlined control, and prose anchors inherit the global treatment. The new bounded assignment is in the project-local reading-toolbar-links brief; finish/freeze r3 first and keep its evidence.

Actually retrieved and inspected Figma302:6/14/25/34/48 high-fidelity contexts and screenshots. Accept the scoped design direction: metadata scrolls with the chapter, sticky controls retain clear labels/44px targets and natural wrapping;18px approved list asset; semantic prose-link Light#455D80/Dark#B0C7E3, inherited body font/weight, fine offset underline, visible hover/focus and minimal relative inline boundary spacing. Do not copy specimen card geometry, generated Tailwind, Noto font dependencies or the simulated final-character tracking into runtime. Preserve native details/no-JS, actual measured fragment clearance, chapter source text/URLs and r3 dock. Runtime and both export paths remain to be reviewed; design acceptance is not implementation acceptance.

R3 regression investigation: full root initially53/54; the restored-search wheel assertion targeted(2,850), now correctly within the isolated sidebar scroller. Inspected the recorded real DOM hit chain/overflow and wheel probe: closing actual search restored body/html overflow; sidebar wheel stayed582, a real reading-column wheel moved582→732. Developer's narrow test-only amendment verifies the actual reading-column hit before requiring document scrolling; backdrop lock assertions remain unchanged. Fresh complete checks and frozen delivery still required.

## Reader information dock r3 — affected local implementation accepted

Matched all11 final affected-file identities in r3-affected-digests.json before r4 edits. Read actual BookInfo/ChapterReader/ReaderLayout composition, global styles, i18n, verifier and affected browser assertions. The transparent44px feedback correction and real short-height one-scroller fallback close the preliminary findings. The search regression probe and narrow test-target amendment are recorded above; no runtime search change or weakened lock assertion was needed.

Fresh r3 lint/types/60Node, root/Pages Webpack builds and static verifiers passed; both complete Chromium suites54/54. Exports retain8pages/201references and28Chinese/0English searchable sections. The initial4/5 and53/54 failure evidence remains preserved. Manuscripts/manifest/theme storage/dependencies/workflows show no feature delta.

Coordinator independently ran dock-review.mjs against the frozen root-export-r3 on an isolated4201 server, then closed that server. Four actual cases passed with no console/page errors:1325×1267 Light chapter-end dock position,1006×360 Dark real wheel reachability,320×844 Dark without JS and390×844 Light mobile keyboard access. Verified labelled author/real feedback44px target, pure chapter navigation, zero accessible global reader footer and no document overflow. Actually inspected the desktop and no-JS mobile screenshots. Evidence: .artifacts/coordinator-polish/r3-dock-result.json and r3-dock-*.png.

Accept only this bounded local r3 implementation. The existing4199 visible preview has not yet been replaced. R4 is separately assigned above; no feature commit/PR/push/merge/deployment or broader independent quality certification is implied. Native zoom, physical mobile/Safari/Firefox/AT limits remain.

Final r3 delivery matched all26 Developer file identities including handofffd64dd41a046cf14178cbcfc9268297e7613104f578a6e921234bd01e444db70. Preserved the exact r3 archive73439b3558ee02ce413ec3e552e25319bd38b65439d6158a900ff4432de4a2cf in the project-local recovery record before r4 source edits.

## Reopened P1 — hidden-sidebar grid placement

The author reported that clicking Hide chapters produces a thin vertical strip of text. Coordinator reproduced it in the actual4199 r3 in-app browser on the introduction at1161px: expanded grid248px/913px, reader-body913px and chapter-column704px; hidden grid0px/1161px, auto reader-body64px including padding and chapter-column0px. Hiding book-rail removes the first auto-placed item, so reader-body moves into the reserved zero-width first column. Native Reopen restored the preview; that is temporary recovery, not a fix.

The prior acceptance tested mode/focus, not usable hidden-mode content geometry, and missed this defect. P1 is open; Developer must return the smallest real layout correction and regression evidence covering actual transitions, persisted hidden refresh, route changes and breakpoints. Existing r3 archives remain historical evidence; no broader hidden-layout acceptance is claimed. R4/any integration stays gated on this correction and affected review. Author also requests a more modern sidebar-credit treatment; the original design owner is preparing r5 comparisons without disturbing r4 code verification.

## Closeout checkpoint — P1 corrected, remaining work explicitly held

The author requested closing the current task without expanding scope. The original Developer reached its usage limit during the assigned amendment. Coordinator did not substitute runtime implementation, change models or self-certify the unfinished delivery.

Read the actual minimal P1 correction: reader-body now explicitly occupies Grid column2, preserving expanded/collapsed/hidden and mobile block composition. Independently reran hidden-column-review.mjs against the frozen root-export-r4:10 desktop cases (900/1006/1161/1261/1440×Light/Dark) passed real hide, saved-hidden refresh, native next chapter, mobile return, collapsed→hidden and recover focus, with readable column geometry and no console/page errors. Before evidence r3-hidden-result.json records the actual zero-width failure; after r4-hidden-result.json and viewport captures record the corrected behavior. P1 is locally corrected; final integration remains gated on complete candidate verification.

Coordinator independently exercised toolbar-link-review.mjs on four real root cases:1188Light,390Dark,320Light doubled text and320Dark no-JS. All passed after correcting the independent script's mistaken expectation that native details automatically closes without JavaScript (the product intentionally retains native open behavior). Source text/adjacency remained intact; links inherit fonts/weights, retain natural wrapping, themed underline and visible keyboard focus. Actually inspected desktop/mobile captures. Root-export-r4 has91 files byte-identical to the current root export before final checks.

Open R4 finding: the Developer's new six-accent prose-link case timed out after opening Appearance and calling check on the clipped visually-hidden radio. The trace shows the second green-accent interaction at approximately2.5s followed by timeout; the existing visible swatch/label is the actual pointer target. Return this to Developer to distinguish fixture targeting from any product error and use actual user interaction without force/weakening assertions. Initial normal-versus-0px letter-spacing mismatch was narrowly corrected to accept both zero-spacing representations; subsequent timeout remains unresolved. Do not describe4/5 targeted as full success.

R5 design only: actually inspected A305:8/22/65 and B305:50, selectedA for stable224/248 geometry. The chosen neutral utility feedback and inline labelled credit are recorded in the project-local reader-credit-refinement brief. The design owner markedA selected; runtime BookInfo/styles still remainr3. No claim is made thatR5 has shipped.

The current4199 server now serves frozen root-export-r4 (owned session24634); oldr3 preview server stopped. Current browser connection became unavailable, so no visible in-app refresh is claimed. Independent Chromium evidence remains valid. Native zoom, Safari/Firefox/mobile hardware/AT remain unverified. No source/manuscript/manifest/dependency/workflow delta outside the assigned work and no feature Git writes or publication occurred. Preserve original dirtymain95a6bec and isolated99ae156 branch plus all uncommitted files.

Closeout final checks: Coordinator npm run check passed lint/types/60Node after the initial sandbox-only listener restriction. Full root Chromium59/60; Pages affected5/6, both failures are the same unresolved new six-accent hidden-radio interaction. Pages build and verifier passed8pages/201references, zh28/en0. No current full Pages-suite pass is claimed. Final recoverable checkpoint is project-local reading-polish-closeout.md; no completed-delivery/merge approval is issued. This is an orderly stop with preserved work, not completion of r5 or independent quality acceptance.

## Resumed final closeout — R5A and affected independent review

The author clarified that closeout means completing the assigned work and submitting it to GitHub. Coordinator resumed the original Developer with the same bounded remaining implementation; commit/push/PR and protected merge are now authorized after review and exact-head CI. Website deployment is not included.

Read actual R5A BookInfo/scoped styles, message asset metadata/hash, new credit browser case and the two six-accent fixture corrections. The native feedback URL and accessible label remain; the source18px message SVG is local, masked/currentColor, with forced-colors handling confined to decorative paint. Credits now form a wrapping caption/name row with neutral44px utility action and no persistent prose underline. Existing manuscript/manifest/theme-storage/dependency/workflow contracts remain.

Independently tested the stable root-export-final using existing review scripts on isolated4201: hidden-column10cases passed; toolbar/prose-link4cases passed; R5A credit4cases at224/248×Light/Dark passed. No console/page errors. Actual credit default/hover/focus screenshots and context were captured; Coordinator inspected248Light default and224Dark hover against the selected305:8/22/65 references. The independent credit script initially assumed nav→feedback directly at224; the legitimate conditional width-reset button intervenes. Corrected the reviewer script to navigate backward from the stable separator; no product change was required.

The six-accent timeout had two successive fixture issues: clipped radio pointer targeting, then querying a correction-preview link before actually opening its disclosure/preview. Developer now operates the visible swatch label, asserts its radio checked, and opens the real correction controls before asserting its link stays outside prose styling. No forced input, skipped assertion, extra timeout or runtime workaround is introduced. Preserve earlier failed traces; full final checks and exact file freeze remain required before implementation/integration acceptance.

## Final inset correction — affected independent re-review, 2026-11-21

Coordinator caught the last reference mismatch before integration: the dock divider was16px from the rail edge, but an inherited8px inner padding placed the author caption24px from that edge. The selected A reference aligns divider and caption at16px. Developer removed only the extra desktop inner-padding rule and added actual geometric assertions; mobile and chapter navigation remain unchanged. The earlier root/Pages61/61 results are retained as pre-correction evidence, not reused as final r6 acceptance.

Independently reran the frozen root-export-final-r6: credit4/4 at224/248×Light/Dark now requires caption.left=dock.left=16; hidden-layout10/10 and toolbar/prose-link4/4 passed with no console/page errors. Inspected the actual248Light default and224Dark hover captures against the already inspected selected Figma A. An unknown service occupied4201; review used4203 and closed its own server without terminating another service. This closes the inset finding. Final exact-revision Developer checks and freeze are the remaining local gate before authorized protected Git integration.

## Final r6 local acceptance — 2026-11-21

Accepted the exact final31-file Developer manifest362f86d90a290dba52f79c6c3868740ee70f5b75950dec946939da14be946161, handoff00d1f3e3c37997d55c1720c6f99b17fc683f1ef0d36e9dca2dfb70e3004103ad and source archive51845a1f3f26ddab399690bad4cb419aebe80cfd0f5851df2e7eebdc5668a1a2. Independently matched every file identity and preserved the exact package in the recovery record. Read the final source/test/guide/design changes; the17 retained r3 source/assets are unchanged, and no manuscript, content manifest, theme store, dependency or workflow diff is introduced.

Checked the final r6 logs: lint/strict types/60Node passed, root and Pages builds/static verifiers passed8documents/201references and zh28/en0, and complete Chromium61/61 passed for each prefix with one worker/no retries. The final changed-inset case and18 independent actual result groups are described above. Inspected the corrected actual Day/Night credit images. P1, the six-accent fixture failures and final inset finding are closed on this revision; initial failures remain evidence. Native zoom, unrun engines/devices and AT limits remain explicit.

Developer implementation is accepted and closed; further executor work requires a concrete finding. The author authorized Coordinator commit/push/PR and protected squash merge of this candidate. The submitted PR records the exact committed head, required cloud checks and observed merge result; local acceptance does not predeclare those outcomes. Required checks remain Quality, Static export(root) and Static export(pages). No protection/workflow weakening or website deployment is included. Preserve the original dirty shared checkout and stage only the31-file manifest plus Coordinator board/review, excluding the dependency symlink and ignored evidence.

## Concurrent main update — integration re-review

PR38 was created for reviewed sourced3a498cfd8f0c3f9d44968e0dbfd5d10217b622e (treea469b09e217f00ceff0485941102ec435d27eedd). Main concurrently advanced to8b5789d4465f3f8ef3f406ef80f0edd516c531fa via PR37, changing only the existing Pages workflow and release runbook. Coordinator inspected both actual diffs and merged that main into the feature branch without conflict or force. The31 Developer deliverables remain byte-identical to the accepted r6 manifest; main's two files are preserved exactly. Coordinator updates only this integration record and current board alongside that merge.

PR37 enables the repository's existing automatic Pages release after successful main-push CI. This reading PR does not alter that configuration or manually dispatch deployment. Observe any automatic release separately and report its real result; earlier manual-only publication statements are historical. The newest submitted head must pass all3 required cloud checks before the authorized squash merge. The PR conversation records that exact head and subsequent observed outcome.

## Cloud findings — required checks block integration

Exact submitted5161d70 ran CI44869038003: Quality passed, both static builds/verifiers passed, but root/Pages browser runs each59/61. Cloud Ubuntu surfaced two platform-sensitive findings: localized index header heights at320px were117/169, and the hidden-body width was885 inside a900px window with a classic15px scrollbar. Coordinator retrieved actual logs from jobs136739585062/136739585085 and returned both findings to Developer. The header must be inspected for real overlap/wrapping; the hidden-body test must compare actual available layout width while retaining meaningful readable-column assertions. No automatic rerun/merge, forced input, check removal or protection weakening is authorized as a substitute for correction. A changed revision requires affected review and all exact-head required checks.

The author separately authorized auditing the original101 changes, integrating only meaningful missing changes and safely synchronizing local main. Current read-only audit at remote8b5789d found73 files byte-identical to main,25 identical to earlier main revisions and3 unique text differences. Two unique planning files contain stale two-public-chapter/source statements; the root board differs from this PR only by its stale manual-deployment sentence. No additional missing implementation is established by that inventory. A verified101-file archive and binary tracked patch preserve the original checkout before any later stash/fast-forward; never replay old source over current main.

## Cloud assertion repair — affected review accepted

Read the two actual changed tests and complete Developer cloud diagnosis. Independently inspected the actual Linux320px Chinese directory and900px hidden-reader screenshots, and both cloud job failures. The locale/header difference is intact variable-length text wrapping, not lost or overlapping content; the hidden reader correctly fills885 available pixels after a15px scrollbar. The revised tests retain shared-role typography/boundaries and desktop equal-height checks, add real44px visible targets, bounds/hit/non-overlap/Tab checks on narrow headers, and require hidden body/client-layout widths and all three horizontal boundaries to match while preserving600–704px prose, heading, overflow and60 transition checks.

Matched all3 repair digests (readerfb458471..., sidebar30697eda..., handoffdafb3ba4...) and all28 unchanged earlier deliverables. Inspected root6/6 and Pages6/6 repeated affected logs, lint and diff checks. There is no runtime/font/build/workflow/dependency change and no need to rebuild unchanged local exports solely for this test revision. The original Linux59/61 failures remain recorded. Accept this bounded assertion correction for push; the new exact submitted head still requires all3 complete cloud jobs before merge.
