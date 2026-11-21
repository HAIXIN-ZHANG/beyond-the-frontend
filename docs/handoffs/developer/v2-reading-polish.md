# V2 reading polish — task brief and handoff

Owner: Developer. Current revision: PR38 Linux CI test-contract repair on submitted head5161d70, following the frozen r6 runtime. Date: 2026-11-21. Status: two test-only corrections and affected local verification frozen for Coordinator review/push; next-head cloud CI remains pending. Historical r1–r6 identities/checks below are preserved, not current cloud acceptance claims.

Historical r2: author-byline relocation assigned2026-11-20, frozen and accepted by Coordinator before r3. Coordinator preserved its source archive and owns its acceptance record.

Historical r3: reader information dock assigned2026-11-20, frozen and accepted before r4. Its composition superseded only the reader's r2 footer placement. The later hidden-column P1 reopened a missed geometry defect; r3 acceptance did not establish readable hidden-body geometry.

Current assignment: r4 reading toolbar/prose links, P1 hidden-body fix and selected r5A credit refinement. Prior revision evidence below remains historical. Read the updated board and the scoped briefs; no new feature or design expansion is assigned.

Resumed closeout: the author explicitly requested completing the existing task and cloud integration. Developer is assigned the unresolved six-accent test interaction, selected r5A dock refinement and final combined r4/P1/r5 verification. Coordinator owns subsequent reviewed Git/PR/main integration; deployment is excluded. The saved stop checkpoint's59/60 root and5/6 Pages affected outcomes are failures, not inherited final passes. No further design or feature expansion is assigned.

## Assignment and baseline

The author authorized the first bounded reader-polish task. Actual workspace is persistent `.local/worktrees/v2-reading-polish-20261120`, branch `codex/v2-reading-polish-20261120`, HEAD `99ae1563f61b8945bf237028e80ecc90bb5c7fcc` (reviewed PR36 merge). Read AGENTS → Developer role → [active board](../../coordination.md) → the scoped project-local recovery brief. Initial status contains only Coordinator's updated board and an existing untracked identical-lock dependency symlink; neither is Developer-owned or part of this delivery.

Allowed scope: conditional quiet sidebar-width reset, exact20px sidebar icons with44px targets, reading-only body16/28 and H1 desktop32/mobile28/H2 21, quiet sidebar/Appearance toolbar and a neutral search surface. Preserve all pointer/keyboard/ARIA sizing, saved versus effective width, collapse/hide/restore, native focus/fragments, Continue, appearance semantics and static/no-JS reading. No Reading size radio/storage, prose/manifest/roadmap/workflow/settings/Git/dependency or deployment change. Do not edit board/reviews or other owners' files.

Use existing Panda tokens/recipes and approved local icon exports; no approximated SVG, new font, concept prose/figure/callout or copied specimen manuscript. Figma file `3GYIfJz8xSPGx3AE3RRkKi`, assigned desktop254:92/280:123/280:184/283:92, mobile258:3/280:245, nav notes260:20, Appearance255:2. Follow design-to-code skill and actual high-fidelity context/screenshots before edits. The explicit body16/28 brief takes precedence over inconsistent26/25 line heights on individual mobile specimen paragraphs; record that difference instead of reproducing per-paragraph values.

## Acceptance and evidence plan

Capture the same real F01 before/after at1261/390/320 in Light/Dark. Verify default and changed stored widths versus viewport clamping; quiet reset discoverability; actual icons/44px target geometry, labels/focus; all sidebar modes, resize cancellation and keyboard/ARIA; browser zoom/enlarged text, forced colors and no horizontal document overflow; real fragments/legacy/Continue/search/Appearance and no-JS paths. Run appropriate lint/types/Node, root/Pages export and browser checks. Use the existing local Webpack option for the supplied symlinked toolchain, without changing build config. Durable generated evidence lives under ignored `.artifacts/v2-reading-polish/`.

One handoff owns execution/recovery evidence. Freeze actual files/hashes/results/limitations for Coordinator review; no approval, integration or release is inferred from implementation. The next UI or reading-size task requires a separate assignment.

## Implemented candidate

- `ReaderLayout` no longer displays the effective pixel width. A quiet reset appears only for a non-default preferred width, independently of viewport clamping. Reset cancels any drag, saves248px and explicitly focuses the stable separator with `preventScroll`; pointer capture, keyboard bounds, ARIA values and the existing saved-width model remain intact.
- `SidebarIcon` masks the exact approved collapse/expand/hide/reopen exports with currentColor. The unmodified SVG roots are20×20; parent buttons retain44px targets and the original Chinese accessible labels. Collapse, expand, hide and reopen preserve their existing focus destinations. The four exports came from Figma nodes295:92/295:97/295:102/295:107 after the design owner supplied the missing vectors. The search trigger uses the exact18px search export from264:35. All assets are local, with deployment-prefix handling; no expiring design URL is used at runtime.
- Reading-specific semantic text styles now provide body16/28, desktop H1 32/44, narrow H1 28/40 and H2 21/32 at the default text size. Rem units allow default-text enlargement. Shared Latin/CJK system fonts, manuscript content,704px prose cap and home/index typography remain unchanged. The explicit16/28 brief takes precedence over the mobile concept's inconsistent individual26/25px paragraph line heights.
- Explicit toolbar/search recipe variants are used by sidebar, Appearance and the search trigger. Existing primary/quiet callsites retain their styles. Neutral hover/pressed surfaces and focus rings remain visible. In forced colors, system button contours/colors remain enabled; only decorative mask spans preserve their currentColor paint. Appearance still reflects actual System/Light/Dark state rather than a static specimen icon.
- The narrowly affected Developer guide describes these local candidate behaviors without changing its recorded public release. No Reading size control/storage, search-input redesign, concept prose/callout/figure/font, dependency, manuscript, manifest, workflow or release change was made.

The assigned high-fidelity contexts and screenshots were actually read for254:92,280:123,280:184,283:92,258:3,280:245,260:20 and255:2; targeted quiet-control264:44/search264:35 and all four new vector contexts/screenshots were also read. Broader component study296:2 was excluded.

## Actual checks and durable evidence

All generated evidence below is project-local and ignored, rooted at `.artifacts/v2-reading-polish/`. Existing installed dependencies were reused. Local builds use the already authorized `--webpack` option because the supplied dependency symlink is outside Turbopack's workspace root; no build config or cloud command was changed.

| Actual command/check | Result | Evidence |
| --- | --- | --- |
| `npm run check` | Lint, strict application/Panda types and60/60 Node tests passed | `check.log` |
| `npm run build -- --webpack` | Root static export passed | `after-build.log` |
| `npm run verify:export` |8 documents,201 local links/assets; Chinese28 reviewed sections, English0; actual heading targets valid | `root-verify.log` |
| `NEXT_PUBLIC_BASE_PATH='' npm run test:e2e -- --output=.artifacts/v2-reading-polish/root-e2e` |48/48 passed, one serial worker, no retries | `root-e2e.log`, `root-e2e/` |
| `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run build -- --webpack` | Pages-prefix static export passed | `pages-build.log` |
| `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run verify:export` | Same8 documents/201 references and28/0 search sections passed at the Pages prefix | `pages-verify.log` |
| `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run test:e2e -- --output=.artifacts/v2-reading-polish/pages-e2e` |48/48 passed, one serial worker, no retries | `pages-e2e.log`, `pages-e2e/` |
| `git diff --check -- panda site tests/e2e/reading-polish.spec.mjs` | Passed | Actual local check |

The four added browser cases cover preferred width versus viewport clamp, disappearing-reset keyboard focus/scroll, all four exact icon requests/geometry and44px targets, reading metrics/home independence/200% text amplification, and real Dark selection followed by forced-color icon/contour/focus/search behavior. The existing44 cases also passed unchanged, including pointer resizing/recovery, denied storage, nearby navigation/breakpoints, real fragments and legacy aliases, explicit Continue/persistence, search/Appearance and static no-JS access. Health assertions retain actual console/page errors. These checks are local Chromium evidence, not cloud CI or publication.

`before/` and `after/` each contain the actual F01 in Light/Dark at1261/390/320px: `f01-{light,dark}-{1261,390,320}.png`, plus measured `geometry.json`. Each capture completed with no console/page errors and no document horizontal overflow. Before: body17/30, desktop H1 35/50.75, H2 22/34. After: body16/28, desktop H1 32/44, narrow H1 28/40, H2 21/32. The Appearance focus ring in these captures is the actual Escape-return keyboard state. Developer actually opened the after1261Light and320Dark images, the root `reading-polish-opt-in-tool-f8bb5-rs-and-usable-visible-icons/reader-forced-colors.png`, and the root `reading-polish-reading-rol-01bfb-ut-changing-home-typography/reading-amplified-320.png`; hierarchy, wrap, visible icons and system outlines are consistent with the checks.

`root-export/` is a complete copy of the successful root output for independent Coordinator review on a separate port; current `site/out/` contains the successful Pages-prefix output. Both Developer test-managed4179 previews have exited. Coordinator's separate4197 server/review is not Developer-owned.

## Limits, recovery and next gate

A headed Chromium Meta+Equal probe did **not** change viewport width/DPR/visual scale (`zoom-probe.json`); native browser zoom is therefore unverified by Developer. The successful200% root-font amplification case is separately identified and is not treated as native zoom. Coordinator is performing independent Safari/native-zoom review against the frozen root snapshot; only its review can establish that result. Physical devices, mobile Safari and assistive-technology testing were not run by Developer. No all-engine accessibility or performance certification is claimed.

The candidate remains uncommitted at the assigned baseline. Coordinator's board/review edits and the existing dependency symlink are preserved and excluded from Developer digests. Protected manuscript/content-manifest/package/lock/workflow paths have no Developer diff. No Git write, install, external submission, analytics activation or deployment occurred. Resume only for Coordinator findings on this revision; future UI or Reading size work remains a separate assignment.

## Frozen Developer file identities

SHA256 identities below cover the exact runtime/test/assets/guide revision verified above. The final handoff's own digest is reported separately to Coordinator to avoid a self-referential hash. Generated logs, images and export copies are supplemental ignored evidence; this handoff preserves the actual outcomes even if those artifacts are unavailable later.

| Path | SHA256 |
| --- | --- |
| `panda/global-styles.ts` | `558a86b5b53280b3248be291e8e953098fdeee2a3be00fc380a8118ab42d6b3e` |
| `panda/recipes.ts` | `01f75130eee60a1e9c66cda9994e5e39c6876b296913bc276b767cdd3cdf81ff` |
| `panda/tokens.ts` | `dc801b88b5b9bd6c70cde5a8456747a22ee46b42d73923f88e09a2fd76d0bda3` |
| `site/components/reading/reader-layout.tsx` | `4e8cbdbb336c65b0c9b111188f4b49e5e5d3a5692889c59b3d839dd74661916c` |
| `site/components/reading/sidebar-icon.tsx` | `89637654154df93737b030523ae631ab490d127194e181ab9b6da8494e2c9e7c` |
| `site/components/search/search-control.tsx` | `3e9f834ee84b940da1300e4133c471b3a0b67be82aa1af9887bff769381e518b` |
| `site/components/ui/appearance-control.tsx` | `7d5c647edf0e2bbc6840eb81d80663329262124c2aa8e9d2a6adf14a84828bd5` |
| `site/components/ui/button.tsx` | `1d8038501b2ca81463577cff5ed77855c32703d6f5f6d7e28281a00719914f77` |
| `site/components/ui/icon-button.tsx` | `89e8bdffc1898be7bbaf855ae9da33cd99bde8200f48ce14f514bef7a11614bc` |
| `site/public/icons/reader/collapse.svg` | `9bb7b954a391cbfb9f06320935734ea6ca76d2dca6ed17ae01479a698b952de0` |
| `site/public/icons/reader/expand.svg` | `a4a3ac5567fbf79b0b450b0757ecd34757de46dc0fd09a040243e2b7637baaa5` |
| `site/public/icons/reader/hide.svg` | `72c8cc9ac2bc2926927ecfbe0f5f204527028d0243f5927282e53872edaa4c69` |
| `site/public/icons/reader/reopen.svg` | `bc00db0e5968a39f96e82bfb11d36e72705a8893d44e95bd3f4d217725d9e81e` |
| `site/public/icons/reader/search.svg` | `8581040e590f279b9c29ee6503ac084a653137936025d8ac69f4234b915b6a00` |
| `tests/e2e/reading-polish.spec.mjs` | `c4d6b2dc1d83ab9535767b523ee71f880b33e73f9626c9e75c6009ffc7a3830c` |
| `site/DEVELOPMENT.md` | `a6ddd52006de31439ba2abcdcddce5364c3c4fee6c58045f74f0b7b2c3531471` |

## r2 assignment — explicit footer author identity

The author annotated the actual1006px reading preview: the bare pen name below chapter navigation is unclear and distracting. Coordinator assigned a bounded relocation in the same verified workspace/branch/HEAD99ae156. Remove the bare name from `BookNavigation`; place an explicitly localized byline below the existing `DocumentLayout` footer book title, preserving feedback. Reuse the README-approved identities centrally: Chinese `缸子太子与世界`, English `Jar & Prince Explore the World`. Existing introduction manuscript/byline remains unchanged; no per-chapter header, author card, avatar, link, copyright or license change.

Allowed amendment files are BookNavigation, DocumentLayout, necessary existing i18n/footer rules, affected tests and this handoff/guide. Other r1 code/assets remain frozen. Read the updated board and project-local `author-byline-relocation-brief.md`; preserve Coordinator's review/board. Verify home/directory and actual reader destinations at320/390/1006/1261px, Light/Dark, localized names/labels, wrapping and200% text, unchanged source/routes, root/Pages build/export/browser checks. No install, Git write or deployment. Affected r2 review is required before any integration.

## r2 frozen delivery and verification

The actual footer now groups the book title above a labelled author line, with feedback remaining an independent native link. `getMessages()` centrally defines the two approved names and localized label punctuation; `DocumentLayout` uses the current UI locale. `BookNavigation` no longer renders a pen name. No reader header or manuscript content was changed. Footer styles reuse the existing13/20 small role, use the14px UI role for the book title, and limit the two-line grouping and narrow stacking to the footer. Text can wrap without truncation or fixed-height clipping. No global small style or other r1 control/typography behavior changed.

Developer actually obtained high-fidelity design context **and screenshots** for the new Figma specimen297:122, Chinese desktop297:123 and English narrow297:128, and inspected all three. The component has no new asset or font download. Existing feedback wording, issue URL, shell geometry, padding and theme roles were retained instead of copying specimen-only text/fonts or fixed widths. The assigned short design note was appended to `docs/design/reading-experience-v1.md`, preserving its historical sections; the Developer guide describes this as a local candidate.

The first root export verifier correctly exposed an outdated test contract: line113 required the removed sidebar `.reading-attribution`. Its failure is preserved in `r2-root-verify.log`; this was a stale assertion, not missing attribution. Coordinator explicitly extended the amendment to `scripts/verify-export.mjs`. The revised verifier checks exactly one actual site footer and one footer byline in **all8 documents**, compares the serialized text to the current locale's complete label/name while handling SSR comments and HTML escaping, and rejects the old sidebar class or a bare name in the book rail. It does not accept an arbitrary whole-page author mention. The introduction's author/AI acknowledgment, source/hash, anchors, navigation and safety assertions remain intact.

Actual final checks, under the same ignored evidence root:

| Check | Actual result | Evidence |
| --- | --- | --- |
| `npm run check` | Lint, strict types and60/60 Node tests passed | `r2-check.log` |
| `npm run lint` after the verifier amendment | Passed | `r2-lint-final.log` |
| `NEXT_PUBLIC_BASE_PATH='' npm run build -- --webpack` | Passed | `r2-root-build.log` |
| `NEXT_PUBLIC_BASE_PATH='' npm run verify:export` after the targeted assertion update |8 pages/201 references, zh28/en0 passed | `r2-root-verify-final.log` |
| `NEXT_PUBLIC_BASE_PATH='' npm run test:e2e -- --output=.artifacts/v2-reading-polish/r2-root-e2e` |49/49 passed, one worker, no retries | `r2-root-e2e.log`, `r2-root-e2e/` |
| `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run build -- --webpack` | Passed | `r2-pages-build.log` |
| `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run verify:export` |8 pages/201 references, zh28/en0 passed | `r2-pages-verify.log` |
| `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run test:e2e -- --output=.artifacts/v2-reading-polish/r2-pages-e2e` |49/49 passed, one worker, no retries | `r2-pages-e2e.log`, `r2-pages-e2e/` |
| Scoped `git diff --check`; Markdown relative-file links | Passed; handoff1, design29 and guide56 local links exist | Actual local checks |

The new footer case checks English/Chinese home and directory plus the actual Chinese F01 reader at320/390/1006/1261px in Light/Dark: **40 layout combinations**, with full approved text, title/byline order, narrow feedback stacking, no clipping/document overflow, exact feedback destination, no sidebar author and unchanged F01 source hash. It also captures **10 additional320px combinations with doubled actual font/line metrics**, checking26px byline text and natural wrapping. This controlled text amplification is not native browser zoom. English manuscripts/routes remain absent; English home/directory identify the approved English pen name, while real Chinese readers use the Chinese UI/byline. The existing source-identity case now asserts the footer and unchanged introduction author line with JavaScript both on and off; all existing reading-polish/Continue/fragments/search/appearance/no-JS regressions passed.

Screenshots and the attached `footer-locales-geometry` JSON are in each `r2-*-e2e/reading-polish-localized-f-6908c-olluting-chapter-navigation/` case directory. Names are `footer-{routeIndex}-{en|zh}-{light|dark}-{width}.png`, plus `-320-amplified.png`; route indices0/1 are English home/directory,2/3 Chinese home/directory and4 F01. Developer actually opened root `footer-0-en-light-320.png`, `footer-4-zh-dark-1006.png` and `footer-0-en-dark-320-amplified.png`; the identity remains secondary, feedback separate and enlarged text fully wrapped.

`root-export-r2/` is the successful root snapshot for Coordinator's separate4199 review; r1 `root-export/` and its4197 preview were not overwritten. Current `site/out/` is the successful r2 Pages-prefix export. Developer's4179 test servers exited after both suites. No other preview was restarted or redirected by Developer. Native zoom remains unverified; this amendment does not inherit broad Safari/physical-device/AT acceptance from any earlier release or r1 resting-render inspection.

Direct byte comparison with the preserved r1 archive confirms the remaining **13 r1 source/asset files** unchanged. Manuscripts, content manifest, theme stores, dependencies/lock and workflows have no diff. The nine affected source/test/document paths are frozen below; this handoff is the tenth affected deliverable. `r2-amendment.diff` and `r2-affected-digests.json` supplement review against the r1 archive, rather than confusing r1 with the main baseline. Coordinator board/review remain excluded. No Git write, install, external submission or publication occurred. Next gate is affected Coordinator review of r2; no new execution scope is inferred.

| r2 affected path | SHA256 |
| --- | --- |
| `panda/global-styles.ts` | `7131aeb09a29bbf78dff53028a6aa1aeb98662339df2166f7d092bfa09445504` |
| `site/components/document-layout.tsx` | `77b1cd93a3ba581404296dacd11bb599d72ac1ef8570b8d0ce1e5d3d8181ac52` |
| `site/components/reading/book-navigation.tsx` | `3c8ab4dbebf97d1e8ebd315b840e8fe2ce009aedc1f2a47942555d7a2069492e` |
| `site/config/i18n.ts` | `880a1e47889e940c7c843af1da9d843e831c910d0abca819c0747bc6315a0c36` |
| `scripts/verify-export.mjs` | `ff3827645c6f5976b61c7daf604e6e267aeac563bf9d487417f16ff52fdf586e` |
| `tests/e2e/reader.spec.mjs` | `3364e4cc8d56fb1c592e3b67ccc472296f1941e46d200e125941b8a7b7f52e8d` |
| `tests/e2e/reading-polish.spec.mjs` | `8cb0f82f6bdc0235892de0aa5e09d9c7a4d9d8b025b52cc20401f1cb05cf8a89` |
| `site/DEVELOPMENT.md` | `1dcbc14f372d3a8568f22d6101620b28bab01efa60070abb1ed099487e088753` |
| `docs/design/reading-experience-v1.md` | `c2883e7bfc9fd42ff21a6df7bfd0d44620dae894c0a5f9e6673ab0f24dfc9c8d` |

## r3 assignment — reader information dock

Verified the same persistent workspace, branch and99ae156 baseline plus the archived r2 candidate against the updated board and `reader-info-dock-brief.md`. The author rejected the reader's horizontal footer, including feedback, and selected the bottom of the book sidebar. Implement a distinct, quiet author/feedback dock outside the expanded desktop navigation scroller; retain the approved labelled name and real feedback destination without a repeated book title/card/avatar. Mobile/no-JS exposes the same server-rendered information at the end of the existing chapter disclosure. Reader global footer must be hidden from layout, accessibility and Tab; non-reader footer remains r2.

Allowed amendments: ReaderLayout/ChapterReader, small book-info component, required existing i18n/global styles, affected verifier/browser tests and this handoff/guide/design note. BookNavigation remains pure navigation. Preserve manuscripts/source hashes, theme/storage, approved icons, other r1/r2 runtime, packages/workflows and Coordinator files. No install, Git or deployment. Test real top/chapter-end at1325×1267,1006/1261/320/390 Light/Dark;224/360px widths, short height/200% text reachability, focus/reset/collapse/hide/reopen, mobile/no-JS and actual EN directory→ZH reader. Preserve r1/r2 snapshots and create a separate `root-export-r3` only after root verification. No native zoom or AT claim is inferred.

## r3 implementation and causal checks

`ChapterReader` supplies a server-rendered `BookInfo` slot to `ReaderLayout`. Desktop places it as a flex sibling after the directory scroller and conditional reset, while mobile reuses it after pure navigation in the existing chapter disclosure. The component has no IDs, state, new link destination or repeated title. Current i18n supplies a separate unpunctuated author caption and book-information landmark label, retaining the r2 localized footer labels/names for non-reader pages. `BookNavigation` and `DocumentLayout` themselves remain byte-identical to r2.

Developer actually read high-fidelity context and screenshots for Figma299:3/299:14 and the subsequent transparent44px feedback wrappers300:2/300:3. No asset download was needed. The shared sidebar surface, subtle divider, caption12/19, approved name14/22 medium and feedback13/19 match these targeted references using existing colors/fonts/spacing. The link has a44px transparent hit area. The normal desktop directory owns remaining space and scrolls independently; at heights up to480px, its internal scroll is released and one outer rail scroller provides wheel/Tab access to the entire directory and dock. No information overlays prose or navigation. Structural `body:has(.chapter-layout) > .site-footer` hiding works before hydration and without JS, removing the generic reader footer from layout, accessibility and focus; the existing expanded/collapsed/hidden recovery remains.

The static verifier retains its precise localized generic-footer serialization checks, including non-reader pages. Reader checks now require two responsive book-information instances with actual caption/name and issue link, one in the expanded rail, while rejecting author/book-info inside `#reader-book-navigation`. Introduction attribution/AI acknowledgment, source/hash, content safety, IDs and native links remain checked. Browser source-identity checks retain the introduction's formal byline with JS on/off and assert that the global reader footer is hidden.

Two initial test failures are preserved rather than reported as passes:

- `r3-root-targeted.log`:4/5 new cases passed; English directory→Chinese reader synchronously read the URL immediately after a Next link click and observed the old directory URL. The test now waits for the same exact destination pathname before inspecting its dock. It does not alter product navigation or accept another route. The corrected case passes in the full final revision.
- `r3-root-e2e.log`:53/54 passed; the existing search-scroll recovery case delivered its post-dismissal wheel at(2,850), now inside the intentionally isolated outer sidebar. The actual `r3-scroll-probe.json` records body/html overflow visible after closing Search, scrollY582→582 at that sidebar hit, then582→732 after a true wheel at(640,850) inside the actual chapter column (PRE→ARTICLE→column hit ancestry). The minimal test-only correction derives x from the real column bounds and asserts the point is inside that column before checking document scroll recovery. Modal-backdrop locking, results scrolling, exact restored positions/focus and real post-dismissal document movement remain asserted. The affected case passed5/5 repeated runs in `r3-scroll-affected.log`; original failure trace/screenshot remain under `r3-root-e2e/`.

The final five dock cases cover top/chapter-end at1325×1267 and1006/1261 in Light/Dark, actual224/360 resizing and reset, sibling/scroller geometry,44px feedback, collapse/hide/reopen focus; true wheel and Tab at1006×360 with doubled text;320/390 mobile in Light/Dark with JS on/off,320 doubled text, Escape/native close and actual English-directory→Chinese-reader access. They check one accessible information region when exposed, zero accessible global reader footers, inability to focus its hidden feedback, pure navigation and unchanged source identity. Non-reader footer coverage remains32 normal combinations plus8 enlarged320px combinations. Native browser zoom, physical devices and AT remain unverified.

## r3 final evidence and file freeze

| Actual final check | Result | Evidence under `.artifacts/v2-reading-polish/` |
| --- | --- | --- |
| `npm run check` on the final revision | Lint/strict application and Panda types/60 Node tests passed | `r3-check-final.log` |
| `NEXT_PUBLIC_BASE_PATH='' npm run build -- --webpack` | Passed | `r3-root-build-final.log` |
| `NEXT_PUBLIC_BASE_PATH='' npm run verify:export` |8 documents/201 local references; zh28/en0, targets valid | `r3-root-verify-final.log` |
| Root complete browser suite |54/54 passed, one worker, no retries | `r3-root-e2e-final.log`, `r3-root-e2e-final/` |
| Affected search-scroll case repeated5 times |5/5 passed with unchanged modal/document-movement contract | `r3-scroll-affected.log` |
| `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run build -- --webpack` | Passed | `r3-pages-build.log` |
| `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run verify:export` |8 documents/201 local references; zh28/en0, targets valid | `r3-pages-verify.log` |
| Pages complete browser suite |54/54 passed, one worker, no retries | `r3-pages-e2e.log`, `r3-pages-e2e/` |
| Scoped `git diff --check`; relative-file links | Passed; handoff1/design33/guide56 relative destinations exist | Actual local checks |

Browser commands use the corresponding `NEXT_PUBLIC_BASE_PATH` and `npm run test:e2e -- --output=.artifacts/v2-reading-polish/r3-{root-e2e-final,pages-e2e}`. Builds use the already authorized local Webpack option; cloud commands/config remain unchanged. Both Developer4179 test servers have exited. Current `site/out/` is the final r3 Pages export. `root-export-r3/` independently preserves the successful root runtime; r1/r2 export snapshots remain untouched. Coordinator owns independent preview ports and its separate review.

Actual screenshots include `reader-dock-{1325,1006,1261}-{light,dark}-{top,end}.png`, `reader-dock-short-200-percent.png`, mobile `reader-info-{320,390}-{light,dark}-js-{true,false}.png` and320 amplified variants, with attached desktop geometry. Developer opened the stable-r3-runtime1325Light top,1325Dark chapter-end, short-height amplified,320Dark no-JS and320Dark amplified JS-on captures under `r3-root-e2e/`: dock separation, name/feedback clarity, short-height reachability, wrapping and absence of a horizontal reader footer are visible. The first full run's unrelated search test failure remains in that same preserved run; final54/54 evidence is separately named rather than overwriting it. Native zoom/physical devices/AT and broader Safari functional acceptance remain unrun by Developer.

Against the frozen r2 archive,14 prior Developer source/asset files remain byte-identical, including `BookNavigation`, `DocumentLayout` and all approved icons. No manuscript, content manifest, theme store, package/lock or workflow diff was introduced. Eleven affected source/test/guide/design files plus this handoff form r3's amendment;26 total Developer files form the cumulative candidate. `r3-amendment.diff`, `r3-affected-digests.json` and `r3-final-digests.json` support exact review. A separate ignored `r3-frozen-files.tar.gz` preserves this candidate before any subsequently authorized amendment. Coordinator board/review are excluded; no Git write, install, external submission or deployment occurred.

| r3 affected path | SHA256 |
| --- | --- |
| `panda/global-styles.ts` | `54559263883d7a9ac60dabf355d326004a9a6d74481528d3029907b473f34ef8` |
| `site/components/reading/chapter-reader.tsx` | `352355394ef8f31fc3205220d66ef57340338b6a9e4f7fd7dc97138bcc67bf24` |
| `site/components/reading/reader-layout.tsx` | `2637b7177be1796061b169d22c15fe3fe95c39d95901c6fdb1ef98b6bb2f1ed7` |
| `site/components/reading/book-info.tsx` | `605caa2fbc7a765f29143e4b2da3c7b3c736e155bdf493961be35998939d83de` |
| `site/config/i18n.ts` | `64fb93c036430fc99366a83b7ef2ced044ac6e5fdcd5a399ce0baf49ed28f684` |
| `scripts/verify-export.mjs` | `2fd250474014a8783204c77510d836db331c40523be05bd5f8a404143479dc26` |
| `tests/e2e/reader.spec.mjs` | `128ef948c0ffaf07491103139823584d46e0f4c89de46b1e3f85a0881bd9b73d` |
| `tests/e2e/reading-polish.spec.mjs` | `b29c6b8c6eca326e7d279a4c82cf1e5ef493331f13ccf518971329dbc06d6739` |
| `tests/e2e/reader-info.spec.mjs` | `ee27bec71e89699c4abcf485bb804a233ab8bec80251bab1058c144be20fcada` |
| `site/DEVELOPMENT.md` | `e6d69a7b620b2df1c5f348c32a07b86f3b1c69a381438209840869ce28a8b2c7` |
| `docs/design/reading-experience-v1.md` | `eb17c56748652cbe762bcb8089fd461ef0f316cb198330cad69c41cdb3e0024e` |

## r4 assignment — reading toolbar and inline links

Same verified workspace/branch/99ae156 plus the preserved r3 candidate. The author requests a quieter, coherent nearby reading toolbar and less cramped prose links. Move truthful Chinese/reviewed-draft status outside the sticky navigation, retain native details/no-JS,44px actions and overlay dismissal/focus; hide an empty desktop tools wrapper rather than retaining a blank strip. Preserve measured toolbar/header clearance and recheck native no-JS fragment fallback under wrapping/enlargement. Use the design owner's actual302:6/302:14/302:25 references for controls and302:34/302:48 for link states; do not copy specimen cards, fonts, prose or figures.

Scope is the current reading toolbar/disclosure/layout and narrowly scoped prose-link styling, required semantic tokens/exact approved list icon, affected tests/verifier and current handoff/guide/design notes. Links retain inherited body typography, original strings/URLs and natural wrapping, with a fine offset underline, theme-aware semantic colors, hover/focus and small relative inline boundary space. Exclude heading anchors/section actions/navigation/pagination; no chips, blanket nowrap, letter spacing, external-link icons or manuscript edits. Preserve r3 info dock, source identities, Continue, all stored preferences, home/non-reader footer, package/workflow and Coordinator files. No install, Git or publication.

Verify annotated actual F01 DOM and web.dev links at1188px, top/scrolled controls,320/390 Light/Dark, six accents, enlarged text, hidden/collapsed sidebar, real keyboard/focus/links/wrapping, JS on/off and direct/legacy fragment clearance. Run actual root/Pages builds/verifiers/browser and appropriate check; preserve initial failures and a separate `root-export-r4` before Pages. Existing4199 preview remains Coordinator-owned and unchanged until review. r3 source/archive and its result logs remain frozen.

### Priority P1 — hidden-sidebar body placement

The author then reported actual single-character vertical prose after hiding the sidebar in the r3 preview. This is a real previously missed geometry regression, not a font or annotation issue. Coordinator measured1161px: expanded grid248/913 with body913 and prose704; hidden grid0/1161 but auto-placed body64 and prose0. Developer independently reproduced the same hidden failure in the immutable `root-export-r3` for the introduction and F01 in both Light/Dark, preserving `p1-hidden-before.json`, log and four viewport screenshots. The earlier r3 hide checks established mode/focus, not hidden-body readability; they do not establish acceptance of this geometry.

The smallest correction explicitly places `.reader-body` in Grid column2, independent of whether the first-column sidebar is rendered. This preserves the zero-width hidden rail, collapsed/expanded modes and existing mobile block layout without new state or route logic. P1 verification takes priority before completing the r4 visual checks:900/1006/1161/1261/1440 Light/Dark, actual hide/reopen geometry, persisted hidden reload, chapter changes, collapsed→hidden and mobile/desktop return, with real focus/reopen position and readable prose widths. No manuscript/font/state rewrite is involved. r4's remaining toolbar/link changes stay in the same bounded candidate but are not treated as verified by this correction.

## r5A closeout assignment and implementation

Resumed at the same verified codex/v2-reading-polish-20261120@99ae156 candidate, preserving all source and archives. Read AGENTS, Developer role, updated board and project-local `reading-polish-closeout.md`/`reader-credit-refinement-brief.md`. No conflict or Git mutation was needed. The six-accent test previously attempted `.check()` on a visually hidden radio; it now clicks the actual visible `.accent-option` label containing the named radio and explicitly asserts that radio checked. No forced input, sleep, timeout increase or reduced link-state assertion is used.

Developer actually fetched high-fidelity Figma contexts and screenshots for selected A305:8,224px Night hover305:22,mobile keyboard focus305:65 and the exact source icon component305:84. Authentication requested one retry for305:8; the retry returned its real screenshot/context. B was excluded. The exact18×18 message export is stored unchanged at `site/public/icons/reader/message.svg`, source asset7997c951-fa09-4d46-a2f7-887f35e7d077, SHA256 `c0113e38deca4d0cf34fdac1431b0cd0fdf4fc5d59406173a9588aa6c14ffe8b`. Existing CSS-mask/currentColor conventions adapt its semantic colors and narrowly preserve forced-color paint.

The dock's author caption and approved name share a wrapping row with10px gap, followed by neutral message-icon feedback. The divider uses the sidebar's16px inset;14px after-divider space,4px credit/action gap and8px bottom follow A. The initial implementation mistakenly added another8px desktop-only content inset, making the caption24px from the rail edge despite a16px divider. Coordinator identified this mismatch; the final r6 correction removes only that extra rule, leaving mobile and navigation unchanged. A real geometry assertion now requires caption/divider left edges equal and16px from the rail edge at224/248 in both themes. Earlier61/61 root and Pages results predate this correction and are preserved separately rather than claimed for r6. Feedback retains its own8px hit-area padding,44px target,6px icon gap, no persistent prose underline, selected neutral hover and2px current-accent keyboard outline. No arrow, card, profile/avatar, new font, clipping or fixed-height copy was added. Desktop separation/short-height fallback and mobile/no-JS disclosure access remain. Non-reader footer and manuscript/source identities are unchanged. Final verification below applies to this exact combined r6 candidate, not the former checkpoint.

## Final r6 scope, failure recovery and review boundary

The final local candidate combines the accepted reading foundations with the bounded r4 toolbar/prose links, real hidden-column P1 correction and selected r5A credit utility. It uses the same workspace/branch/99ae156 baseline; Developer did not stage, commit, push, merge, install or deploy. Coordinator owns subsequent exact-revision review and the author's authorized GitHub/PR/main integration. Cloud CI/merge and deployment are distinct; no local result establishes either.

R4 implementation uses the exact18px local SectionList export from302:6, SHA256 `051169d3ec146abf464f3070351612dcaef0c6b69dc58db9e81a754228a739ca`. Actual context/screenshots302:6/14/25/34/48 supplied toolbar/link geometry and colors. The separate303:2 variable selection did not render as a node; color values were directly present in the retrieved link-state contexts. The visible “本章目录” label remains constant and matches its accessible name; native expanded state/selected surface communicates open state without new state or JS-only labels. The status is outside sticky tools; empty wide tools disappear, while hidden-sidebar reopen stays available. Narrow reading insets are16px, with no home layout change. Enhanced heading clearance still measures real wrapping controls; no-JS conservatively budgets scalable rows plus an open bounded native overlay. No-JS links do not pretend to close the native details automatically. Prose/reference links inherit16/28 and emphasis, remain inline/wrappable and use only semantic color/underline/focus and0.075em edge margins. Real DOM and web.dev source strings, punctuation, URLs and source hashes remain unchanged.

The old r4 failure sequence remains available: natural CSS `letter-spacing:normal` was incorrectly asserted as the equivalent serialization0px, then a clipped radio was incorrectly used as a pointer target. After visible label interaction was fixed, `final-targeted.log` reached11/12 but exposed another test setup error: `.section-actions a` does not exist before the actual correction preview is opened. The final test opens the native section controls and clicks “查看纠错信息”, checks that real preview link's exclusion from prose styling, then closes it. It never opens/submits the issue. All exact text, theme/six-accent, margin, hover, focus and exclusion assertions remain; no forced action, arbitrary sleep or timeout increase was introduced. The corrected case passed3/3 repeats in `final-six-colors.log`, then complete pre-r6 root/Pages61/61. Those earlier full results and the later inset finding are historical, not substitutes for the final r6 checks below.

The P1 before probe independently measured both introduction and F01 in Light/Dark at1161px: hidden tracks0/1161, body64, prose0, auto-placement. After explicit column2 placement, the same four measurements are body1161/prose704; `p1-hidden-before.json`/`p1-hidden-after.json` and their screenshots preserve the comparison. The meaningful regression visits900/1006/1161/1261/1440 in Light/Dark and checks60 actual hidden states across hide, saved-hidden reload, both native next-chapter transitions, collapsed→hidden and mobile/desktop return, including usable prose width, heading geometry, actual reopen hit/focus and overflow. It writes `hidden-sidebar-geometry.json` under each final suite's case output. The previous mode/focus-only acceptance gap is explicitly retained above.

Coordinator independently reviewed the preserved root runtime with10 P1 groups,4 toolbar groups and4 credit groups, and identified the final desktop inset mismatch. That review belongs to the separate Coordinator record; Developer's final r6 assertion and screenshots address the changed revision. Frozen historical root exports/archives are preserved. `root-export-final-r6` is the independent final root snapshot; the earlier `root-export-final`, r1/r2/r3/r4 outputs and Coordinator-owned4199 preview were not overwritten or restarted by Developer.

Final source inventory is31 Developer files, excluding the Coordinator board/review and existing dependency symlink. Compared with the r3 archive,17 earlier source/assets remain byte-identical;13 source/test/guide/design paths plus this handoff changed in the final closeout. Manuscript bodies, content manifest, theme stores, package/lock and workflows have no Developer diff. Relative-file links in this handoff, guide and design note are checked. Native browser zoom, final Safari/Firefox functional acceptance, physical/mobile hardware and assistive technology remain unverified; controlled text amplification and Chromium forced-colors evidence are labelled as such. No broader certification is claimed.

## Final r6 affected file identities

These are the13 source/test/guide/design files changed since the preserved r3 package. Its other17 source/assets retain their r3 identities; this handoff is the31st cumulative Developer deliverable. The cumulative manifest and source archive are saved under the ignored evidence directory as `final-r6-digests.json` and `final-r6-frozen-files.tar.gz`. The handoff/archive digests are sent directly to Coordinator after the final result append, avoiding self-referential hashes. Board/review/dependency symlink are never included.

| Path | SHA256 |
| --- | --- |
| `panda/global-styles.ts` | `f315aaed46e26044f8fe962a1e35f52960626c147e5bbe38b7677d659ddfb251` |
| `panda/tokens.ts` | `f06d86b0dfc2ffe7f5f742177e77a754109020e3cf7744ff8042a2f315477bd7` |
| `site/components/reading/reader-layout.tsx` | `33df9b371005feef310e9b2ebe8aff661d35b1c38a58c64c8cb3a993f867ad98` |
| `site/components/reading/book-info.tsx` | `935da25c8e39e437ef5c58b8590efb374309b30fdb2bed7d572d01b244d1bd63` |
| `site/components/reading/reading-disclosure.tsx` | `68fc0f59841370d8b314d0a2dc563cc077e288b2459ef999a4e45ed4ca6b85db` |
| `site/public/icons/reader/section-list.svg` | `051169d3ec146abf464f3070351612dcaef0c6b69dc58db9e81a754228a739ca` |
| `site/public/icons/reader/message.svg` | `c0113e38deca4d0cf34fdac1431b0cd0fdf4fc5d59406173a9588aa6c14ffe8b` |
| `tests/e2e/reader.spec.mjs` | `049dbe06bffbb36496cc1aa60eb7b86a0002f38a3db5462bf680fc5a7476cd64` |
| `tests/e2e/reader-info.spec.mjs` | `a1a2affb22fddfe573368f063eb9aaa537eb2f43e2e47efbf4dfba76208323b6` |
| `tests/e2e/reading-toolbar-links.spec.mjs` | `1e5b571fce41005c91a241cc04df7db34c2458228f706f313afb61c8bece3802` |
| `tests/e2e/sidebar-hidden.spec.mjs` | `4e60e61e5641266ec1f4e22512143689c4134146ec2115b5aa93cb1662edbcac` |
| `site/DEVELOPMENT.md` | `48531310b2b85630f0a2357d525f91d0ced66b22e77cddbdce710ad640bc5756` |
| `docs/design/reading-experience-v1.md` | `e5b48c03f0fb077f76b36b935725882bb3cd11623a125fa40b0be8f04db7da06` |

## Final r6 verification and handoff — 2026-11-21

Every row below was completed on the final16px-aligned r6 source. Earlier failed/partial or pre-alignment results are preserved above and in their separately named logs; they are not counted here. Evidence is rooted at ignored `.artifacts/v2-reading-polish/` in the assigned persistent workspace.

| Actual command/check | Final result | Evidence |
| --- | --- | --- |
| `npm run check` | Lint, strict application/Panda types and60/60 Node tests passed | `final-r6-check.log` |
| `NEXT_PUBLIC_BASE_PATH='' npm run build -- --webpack` | Root static build passed | `final-r6-root-build.log` |
| `NEXT_PUBLIC_BASE_PATH='' npm run verify:export` |8 documents/201 local references, zh28/en0 and real heading targets passed | `final-r6-root-verify.log` |
| Root selected-credit affected case |1/1 passed;224/248×Light/Dark, actual caption/divider16px alignment, default/hover/focus,44px/18px geometry, amplification and forced colors | `final-r6-inset.log`, `final-r6-inset/` |
| `NEXT_PUBLIC_BASE_PATH='' npm run test:e2e -- --output=.artifacts/v2-reading-polish/final-r6-root-e2e` |61/61 passed, one worker, no retries (1.5m) | `final-r6-root-e2e.log`, `final-r6-root-e2e/` |
| `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run build -- --webpack` | Pages static build passed | `final-r6-pages-build.log` |
| `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run verify:export` |8 documents/201 local references, zh28/en0 and real heading targets passed | `final-r6-pages-verify.log` |
| `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run test:e2e -- --output=.artifacts/v2-reading-polish/final-r6-pages-e2e` |61/61 passed, one worker, no retries (1.5m) | `final-r6-pages-e2e.log`, `final-r6-pages-e2e/` |
| Scoped `git diff --check`; relative-file destinations | Passed; handoff2/design34/guide56 relative destinations exist | Actual final checks |

Local builds retain the existing authorized Webpack option for the supplied dependency symlink; no dependency, build config, cloud workflow or protection was altered. Both final Developer4179 test servers exited. `root-export-final-r6/` contains the final root export for independent review; current `site/out/` is the corresponding final Pages-prefix export. Earlier snapshots/archives remain intact. Coordinator controls4199 and any review server; Developer did not change that preview.

Developer actually opened the final r6 selected-credit248Light default and224Dark hover images under `final-r6-inset/reader-info-selected-credi-7e7f3-tates-and-natural-name-wrap/`. Caption and divider now share the same left edge; hover/neutral message feedback matches selected A. The full suites save equivalent credit states/amplification/forced-color images, real1188/390/320 toolbar/prose-link/fragment captures, non-reader footer captures and1161px hidden introduction/F01 captures with `hidden-sidebar-geometry.json`. The preserved r4 before/after capture sets additionally document both annotated actual prose links without changing strings or source. Screenshots and checks do not establish native browser zoom or unrun platform/AT acceptance.

Coordinator reported the final r6 independent18 groups passed (hidden10, toolbar4, credit4), verified actual caption/divider16px equality and closed the inset finding. Its judgments and final source approval belong to the [separate Coordinator review](../../reviews/v2-reading-polish.md); this handoff does not self-approve integration. All31 Developer file identities and the exact source archive are frozen in `final-r6-digests.json`/`final-r6-frozen-files.tar.gz`, with13 affected identities above and a direct handoff/archive digest sent to Coordinator. Final source has no manuscript/manifest/theme-store/package/lock/workflow diff;17 r3 source/assets remain byte-identical. No Git write, installation, external form submission or deployment was performed by Developer.

The author authorized completion and GitHub integration of this one candidate. Next owner is Coordinator for exact-file review, PR/required cloud CI and protected integration; deployment remains excluded. Developer resumes only for a concrete affected finding, not another design/feature task.

## PR38 cloud findings — environment-neutral test repair

Coordinator submitted [PR38](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/38), preserving the concurrent PR37 main update. Developer verified the assigned persistent workspace/branch now at `5161d7081cede93e1e0302609c6f33f639da59c7`, initially clean except the existing dependency symlink. This assignment permits the necessary source/tests and same handoff only; no Git operation, dependency/workflow change, redesign or shared-checkout cleanup is assigned to Developer. Coordinator's current board/review edits are preserved and excluded from this delivery.

The actual [cloud run44869038003](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/actions/runs/44869038003) built the PR merge result `1ba111e0b1ee390407e709430d2053e27d31dd82`. Quality and both normal Turbopack builds/export verifiers passed, but **both browser jobs failed59/61 with the same two assertions**. Developer fetched the full decoded [root job136739585085](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/actions/runs/44869038003/job/136739585085) and [Pages job136739585062](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/actions/runs/44869038003/job/136739585062) logs through the GitHub connector and downloaded [Pages artifact14693391322](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/actions/runs/44869038003/artifacts/14693391322). ZIP SHA256 `c7fd10f637411cb65ad0625d1c4d072693098262699a9fd11f34ad7261f232d8` matches the cloud upload digest. Unmodified logs/archive, extracted failing screenshots/traces and decoded narrow-role measurements are retained under `.artifacts/v2-reading-polish/pr38-ci/`; no failed run is relabelled as passed.

### Actual diagnosis

1. **Narrow localized header equality:** the test expected English/Chinese index headers to be equal height at320px. Developer actually opened the cloud Chinese320px failure PNG and the English index screencast frame from its trace. Both retain complete brand phrases, visible search and inline navigation, with no overlapping or lost controls. Trace measurements show a305px document layout width with273px inset header. English search is173.75px wide and its brand cannot share that row, producing169px height; Chinese brand149px + search116px +8px gap exactly fills273px, producing117px height. The52px difference is a legitimate extra wrapped row with localized text/platform font metrics and classic-scrollbar space. It does not justify adding an empty row, shrinking targets or changing product text/styles.
2. **Hidden reader width:** the900px browser screenshot shows the readable hidden reader with15px classic scrollbar space; its actual body is885px, while the test incorrectly demanded at least899px from `window.innerWidth`. This was not a recurrence of the real zero-column P1. The body must fill the document's actual available layout column, while still satisfying usable prose width, bounded heading height, no overflow and a real visible/hittable reopen control. The original assertion conflated viewport outer width with available document width.

### Minimal corrections and retained contracts

Only `tests/e2e/reader.spec.mjs` and `tests/e2e/sidebar-hidden.spec.mjs` changed, plus this handoff. There is no runtime/layout/font/config change.

- The locale case retains exact shared typography, header/content left and width comparisons, complete title phrases, locale/route/content checks and desktop (`>=900px`) cross-locale equal header height. At narrow widths it now checks every real visible header control within header/document bounds, a44px target height (and44px width for button/summary targets), correct center hit, pairwise non-overlap, and actual sequential Tab focus. This verifies each locale's full usable layout instead of presuming equal row counts for different text. Attached `localized-header-controls` geometry makes those observations reviewable.
- The hidden-sidebar case now checks document `clientWidth` equals actual chapter-layout width and that reader-body fills that layout with matching width/left/right boundaries. It retains the600–704px prose requirement, bounded H1 height, no document overflow, true reopen hit/44px height and all60 hidden states through resize, saved reload, actual next chapters, collapsed→hidden and mobile/desktop recovery. A zero or shrunken reader column still fails. Overflow is measured against available document width.

### Actual verification, unchanged runtime and limits

`NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run test:e2e -- tests/e2e/reader.spec.mjs tests/e2e/sidebar-hidden.spec.mjs --grep 'localized chrome|hidden sidebar keeps readable' --repeat-each=3` passed **6/6** against the existing matching Pages export (`pr38-ci/pages-affected.log`, output `pages-affected/`). The same two cases repeated3 times against the preserved matching root export also passed **6/6** (`pr38-ci/root-affected-final.log`, output `root-affected-final/`). An ignored local config points the root run to `root-export-final-r6`, preserving current `site/out/` and production test configuration. Its initial incorrect preview cwd failed before any browser test; that harness startup log is retained as `root-affected.log`, and the final local-only config explicitly sets the correct cwd. No test result is inferred from the startup failure.

`npm run lint` passed (`pr38-ci/lint.log`); scoped `git diff --check` passed. All28 other Developer file identities match the frozen r6 package, including all runtime/assets/guide/design and static verifier files; current root/Pages exports were served without rebuilding or mutating them. This test-only repair did not repeat the full local build/suite or claim a new full-suite/cloud pass. The previous61/61 macOS results and failing59/61 Linux results remain separate facts. A local Chromium gutter probe confirmed this macOS runner retains overlay scrollbars even with `scrollbar-gutter:stable`; an actual Linux/classic-scrollbar rerun was not performed locally. The retained cloud trace is the platform-specific evidence. Next-head full required CI on Linux remains the gate after Coordinator review/push.

The two changed tests and this handoff are frozen for affected review, with exact SHA256s and an archive in ignored `pr38-ci/repair-digests.json`/`repair-files.tar.gz` and direct handoff/archive hashes sent to Coordinator. Developer's4179 servers exited after both repeated runs; no other preview, Git state, workflow, protection, dependency, manuscript or deployment was changed. Coordinator owns the next push and cloud CI; this repair does not authorize further features or editing the original dirty shared checkout.
