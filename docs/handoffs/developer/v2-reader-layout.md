# V2 reader layout and chapter navigation

Owner: Developer. Date: 2026-11-18 (Australia/Perth). Revision: r2, deliberate-deselection correction complete; frozen for Coordinator review. Local implementation/review only.

## Brief and behavior contract before implementation

Authority: current board and Coordinator's bounded layout release after accepted source-intake r2. Verified workspace `/private/tmp/vctw-m2-v2-reader`, `codex/m2-v2-reader@5141823f9c4a0b5403cf7a24d4269b0d09e2e92d`. Preserve the accepted appearance and source intake, all five manuscript bytes and all three manifest entries. Writer/Coordinator status-only documents may change independently. Snapshot: `/tmp/vctw-reader-layout-baseline.json`.

Fresh read-only Figma inspection succeeded after the tool's requested single authentication retry. High-fidelity contexts and included screenshots inspected for [Chinese desktop254:92](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=254-92), [Chinese mobile258:3](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=258-3), [dark280:184](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=280-184), [navigation260:20](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=260-20), and [prose details269:48](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=269-48). Existing neutral/accent tokens, server-rendered Markdown/navigation and native controls are reuse points. No Code Connect mapping or image asset is supplied in these targets. Live nodes are not an immutable design version. Specimen prose/illustrations/callouts/English bodies and placeholder links are not content inputs.

Chosen practical contract: desktop at900px and wider starts expanded at248px; resize224–360px with a narrower effective maximum when the viewport needs reading room. A64px collapsed strip retains expand/hide controls; hidden has zero rail width and a visible nearby reopen control. Reopen restores the last validated expanded width. One scoped local preference stores only the enum and integer width; invalid/read/write-denied storage falls back safely. Viewport clamps effective width without overwriting the saved width. A visible captured pointer grip also implements a named vertical separator: Left/Right8px, Home/End bounds, Enter/reset button248px. Pointer cancel/lost capture/breakpoint change cancels safely. No reading-position persistence.

Below900px reuse a compact native chapter disclosure and nearby section outline, using the same chapter/heading data. One nearby panel at a time, Escape returns to its summary without scrolling; outside interaction and other overlays dismiss it without stealing deliberate focus. Breakpoint reconciliation returns focus to a visible nearby control/main. Native disclosures and static chapter/heading links remain available without JavaScript; enhanced desktop controls stay hidden until hydration. Section URLs remain authoritative after initial preference restoration. Sticky desktop header/sidebar and measured narrow tools must be included in actual heading clearance; mobile header scrolls away to protect reading space. Full-height light rail, about704px prose cap and wide right outline use flexible layout, not fixed mock coordinates. Existing code/tables retain local horizontal overflow and semantics. Long titles wrap naturally at320/390 without forced two-character orphans.

Expected affected files: new reader layout/control and small typed sidebar-preference helper; existing ChapterReader, ReadingDisclosure, BookNavigation only where needed, chapter-scoped Panda global styles; meaningful Node/E2E/export checks and factual developer guide; this single handoff. No manuscript/manifest/parser changes, dependency/CI/Figma edits, homepage/index redesign, AI/analytics/bookmark/Continue, Git operation or deployment.

Acceptance: lint/strict/Node, fresh matching root and Pages build/export/full E2E; actual3-chapter rendering, both appearances/accent,1440/1024/768/390/320, initial/deep links, all sidebar modes/recovery, pointer/keyboard width, mobile Escape/focus/position/overlay/breakpoint, no-JS access, enlarged text, code/table overflow; screenshots of the same actual chapter on desktop Light/Dark and390/320. Record exact files/digests, preserved inputs and untested engines/devices/AT; freeze for Coordinator review.


## Delivered behavior and review revisions

`ReaderLayout` composes the server-rendered article/navigation/outline as slots, leaving the source parser/manifest/search extraction unchanged. Its typed preference helper validates a local enum/integer width; hydration initially renders static defaults. The visible separator implements bounded native pointer capture and the documented keyboard controls. Cancel/lost capture/viewport change restores the pre-drag preference. Collapsed and hidden are distinct, with visible focusable reopen controls; viewport constraints retain the saved width. The nearby native chapter/outline disclosures retain static links without JS and coordinate with search/appearance.

The chapter-only mobile header uses a compact enhanced link menu and a named icon search trigger, retaining actual catalog/language/GitHub destinations and an independent Appearance control. Non-reader routes and no-JS pages retain inline header links. The status/nearby navigation row is compact; mobile header scrolls away. Normal320/390 H1s keep short punctuation-delimited phrases intact; enlarged text can wrap further and the header may add a row. Share/correction summaries use the existing muted role, remain44px keyboard/touch targets and retain their actual clipboard/manual/correction behavior. No manuscript paragraph was removed, reordered or converted to a decorative specimen callout.

| Review finding | Actual correction and verification |
| --- | --- |
| RL-1 mobile hierarchy/title | Existing keep-all/balance plus emergency wrapping; compact scoped header and one status/navigation row, reduced title-to-body spacing, muted secondary sharing. Real G01 first paragraph top230px at390 and270px at320, versus review's prior~390/430. Normal390 title is one line;320 wraps at the comma into two intact phrases. Desktop704px prose and wide outline retained |
| RL-2 sticky Appearance | Desktop assertion now checks the sticky control is in viewport. Real article/window scrolling must dismiss and return focus. The existing queued-scroll guard additionally compares opening window coordinates so a fixed anchor still detects actual document scroll; internal popover scrolling is retained. Separate mobile deep-link check proves the header is offscreen, then deliberate control activation reveals it and succeeds |
| RL-3 complete resize focus path | Reproduced all three widths before fixing: Chromium blurs the newly hidden grip to body before dispatching resize, while window scroll stays fixed. Recorded actual `focus-before.json`. Track last real connected focused element; when active is body at resize, resolve its former region and focus the visible narrow summary with preventScroll. Full heading→nearby panels→search→chapter link→wide/main→separator→narrow sequence now passes768/390/320, with unchanged scroll position |
| RL-4 desktop link spacing | Explicitly flex the link group with existing `token(spacing.header.utilityGap)`. Actual900/1440 computed gap20px and both link-to-link gaps20px. Permanent E2E checks measured gaps; compact menu and home/index regressions still pass |

The original implementation checkpoint returned23/26 in Coordinator's independent root/Pages pass. Intermediate local failures were resolved rather than removed: punctuation-breaking, an outdated desktop offscreen assumption, focus blur ordering, and the old language-switch test bypassing the new menu. The revised language test opens the real narrow menu and still verifies the truthful English index/missing-English404. Final results below supersede these intermediate runs. One attempted build command during the usage interruption was not executed because automatic approval review could not complete; normal approved verification succeeded after resumption, with no bypass.

## Actual r1 QA — superseded by r2 below

Environment: Node24.14.1/npm11.11.0, installed Playwright1.65.1/Chromium159.0.8154.6. Browser plugin not available; used the authorized existing local Chromium workflow. No installation/external publishing. Flow: real chapter entry/deep link→navigation mode or native panel→resize/keyboard/close→visible focus and reading position; real source/search/sharing/appearance regressions remain in the same maintained suite.

| Check | Final result |
| --- | --- |
| `npm run check` | PASS: zero-warning lint, both strict TypeScript compilers,52 Node tests |
| Fresh root build→matching export→full Chromium | PASS:8 pages/171 local references/zh28/en0;26 E2E cases,25.6s |
| Fresh Pages build→matching export→full Chromium | PASS:8 pages/171 references/zh28/en0, single `/vibe-coding-then-what` prefix;26 cases,25.2s |
| Runtime/console/static health | Correct real chapter IDs/H1s/source hashes and locale titles; meaningful articles, no framework overlay or unexpected errors. Static default-expanded rail, disclosure/resize target IDs and unique source IDs verified |
| Sidebar state/input/storage | Default248; keyboard256/Home224/End360/Enter248; actual pointer drag304, cancel restores304; effective300 at900 retains saved360 and restores360 wide. Collapse64, hide0, reload/reopen/reset; malformed/read-denied local preference leaves usable session |
| Narrow navigation and focus |768/390/320 full RL-3 sequence; native chapter/outline switching, Escape and unchanged position, header-menu Escape, search shortcut/appearance/nearby-panel mutual dismissal, deliberate language/index/SPA chapter return; no invisible focused control |
| Responsive reading | G01 Light Blue/Dark Purple at1440/1024/768/390/320 with refresh; real F01 safe source/code/tables/headings in both modes at1440/390/320; opening canonical/legacy fragments JS on/off;52 earlier/new source/theme/routing Node regressions retained |
| Text/overflow | Actual code/table regions remain local auto-scroll, including existing long-inline-code regression. At320,2× computed text sizes preserve separate header control boxes and document width; measured toolbar still clears a keyboard-selected heading. This is enlarged-text stress, not native zoom or full typography/AT certification |
| Search/sharing/appearance | Actual14 signup matches remain reachable at1440/390/320; current hashes and28 canonical entries/en0; all earlier12 appearance/accent pairs and bootstrap/refresh/OS/cross-tab/denied/quota/copy/manual-correction behaviors retained |
| Preservation and whitespace | All5 source byte identities and three-entry manifest unchanged; `git diff --check` passed. Owner-specific preservation results below |

### Measured layout and visual comparison

Final root and Pages observations match. Header height68px desktop and61px narrow at standard text size. Actual article widths:704 at1440/1024/768,350 at390,272 at320. Direct paragraph measurements use `article > p`, excluding hidden sharing-status paragraphs. G01 first-paragraph tops:254.75 at1440,263.75 at1024,230 at768/390,270 at320; both appearances match. Native old/canonical anchors and full resized-toolbar cases remain clear of the actual header/tools. No document overflow in the tested states.

Saved and inspected literal side-by-side reference/actual comparisons at `/tmp/vctw-reader-layout/comparisons/desktop.png` and `mobile.png`, using the Coordinator-retained verified1440/390 reference PNGs and final Pages G01 screenshots. Fresh live contexts in the brief also informed implementation. The source-backed comparison intentionally differs from specimens: localized Chinese brand/current reviewed status, working navigation/resize/44px controls, complete real prose and12 actual outline entries rather than the five-item sample. Flexible40px desktop content gutters/704px cap replace absolute310px specimen coordinates. The390 title avoids the reference's two-character final line;320 uses intact phrases. No invented lead, callout, system-map art or next-chapter destination was copied. These comparisons establish inspected hierarchy/relative geometry, not pixel-identical or immutable-version acceptance.

A direct shared middle-section link focuses and lands at the correct real heading; the outline currently does **not** indicate the current item. `OnThisPage.currentId` remains unwired. A hash-only current indicator is an optional separate decision; scroll tracking is a different feature. Neither was silently added in this slice.

## Evidence and exact frozen payload

Logs: `/tmp/vctw-reader-layout-{check,build-root,verify-root,e2e-root,build-pages,verify-pages,e2e-pages}.log`. Matching browser output is saved separately under `/tmp/vctw-reader-layout/root/playwright/` and `/tmp/vctw-reader-layout/pages/playwright/`; current ignored `.artifacts/playwright/` and `site/out/` are the final Pages revision. Each browser output has58 screenshots. `reader-V2-real-chapter-rem-249de-ts-widths-and-enlarged-text/` contains the same real G01 at desktop Light/Dark,390/320 Light/Dark, enlarged entry/deep section and `reader-widths.json`. `reader-V2-desktop-navigati-ca2c3-estores-its-validated-width/desktop-header-spacing.json` records actual20px gaps and `restored-sidebar-fragment.json` the hidden/reopened deep link. Original reproduction: `/tmp/vctw-reader-layout/focus-before.json`. Comparisons are outside the repository; no public fixture/report/art asset was added.

| Developer file | SHA-256 |
| --- | --- |
| `panda/global-styles.ts` | `8e84c479914e39270d0097dd74bb53fc35a5c7e874323ed7168f5cffb81b3ba5` |
| `scripts/verify-export.mjs` | `a5be5c219d18f1831c5c9220bf765437008a02170abc374e0694a13665925f12` |
| `site/DEVELOPMENT.md` | `13fc97f451b79e057694a5d70f391c149f5e5de3fbc7484fa0a62e1c22e853e3` |
| `site/components/reading/book-navigation.tsx` | `5a6016beceac2e72066598e23e2cd7749aa844508c3922069df9e07479ac40e7` |
| `site/components/reading/chapter-reader.tsx` | `3696d02f27d1f70bfd26930844677ced6f4a86e82095507539b78134319fc5ec` |
| `site/components/reading/reading-disclosure.tsx` | `5c790f9a1c1259e7bb7b44bae15b1c9f75e4b053bd99805ab7c82cb55c0ce257` |
| `site/components/reading/reader-layout.tsx` | `96df4fcedfc0d5820a07dd3dea6186a3455aba5b269c8b8c436169bc2a199665` |
| `site/components/reading/sidebar-preference.ts` | `762b583fc3a0c0b15c6b011ac1c072453a9aa05a1c70322d73eb14cf485b44bb` |
| `site/components/reading/chapter-header-menu.tsx` | `0e53c6d0aea597f1b67811cb6979171fe04028d675c538aef23d12043e01c95c` |
| `site/components/search/search-control.tsx` | `af009b11a638d869b40081c974e8ca96a551a0852e17f4073b86f4bf81835548` |
| `site/components/site-header.tsx` | `43a2898548003b964ac127ce50a45a4d7b41226ae9253f35016467c349debbc5` |
| `site/components/ui/appearance-control.tsx` | `da3df0c3dfea8e82cec4522fd585e133fdfe7d986c91930ddcec0c196c7b62dd` |
| `tests/e2e/reader.spec.mjs` | `50651c40e6d4375c84f789f0066284c1eb32a58f15883d82becb16c4c0b5e825` |
| `tests/sidebar.test.mjs` | `4f170c2ed3a49d87e530fe3d61db36864058099c771ca9e1b1244f9d227d3f8e` |

The fifteenth file is this single handoff; final digest is returned directly to Coordinator to avoid self-reference.

Pre-layout snapshot contains251 files: 236 remain byte-identical,10 existing Developer payload files changed, and5 authorized concurrent owner documents changed. The4 new implementation/test files plus this report are the Developer additions. No source/manifest/parser/content-contract/accepted-report/token/recipe/theme-store/package/workflow change was made for layout.

Concurrent owner documents were observed and excluded from the Developer delta, not overwritten:

| Owner document | Observed SHA-256 |
| --- | --- |
| `book/planning/tasks.md` | `de9844931659aa1619a51fdbf9bc419ed8b092f6496f24d399cebfce82f856ad` |
| `docs/coordination.md` | `bb447fb202f1d332ecf41c9d8495b6890b404746344f466a3e8313a07ccec191` |
| `docs/delivery/milestone-2.md` | `0407254a9a5699b1a816e5914197be21243e10d6114fc5ba173d17afc993a71d` |
| `docs/project-vision.md` | `5e19a64e1870f7f87fb504f41c33c39b5c1f9be32aa57b5db873a898ea3c25e9` |
| `docs/roadmap.md` | `950e177da04c0b9672f2a85808f842f27359b2302e36cf6c02b95f5a80f0c95c` |

Protected sources and manifest:

| File | SHA-256 |
| --- | --- |
| `book/drafts/zh/00-before-we-start.md` | `b4d0dd040e183cebc0400526ca5b317d23db1dc406e0bd5b00e3af74a940f521` |
| `book/drafts/zh/01-a-page-and-a-system.md` | `e0fca6dd95b87e93107c4279fb4bad120e80a068c8fc91a58689154293b25a05` |
| `book/drafts/zh/02-browser-foundations.md` | `3688b7967433b7a97304438100908d37883d5de9740aaa5c08820b37aa9bf624` |
| `book/drafts/zh/03-after-ai-finishes.md` | `c5d066524720e82e63453823dc654878a83e581d88e7370207fac533df48cca3` |
| `book/drafts/zh/04-api-contract.md` | `7bdfb4eac5aa8203a0502a1f8f2c95091878100eda0d9ecd6b7578eb6f0c16fc` |
| `site/content/manifest.ts` | `4a6526e3d806ec9bbb9d713ba798991ef93aa10a30af1dfcca5c41563520af77` |

## Limits and review gate

No Safari/Firefox, physical touch/device, actual screen reader or native browser zoom execution; enlarged text is explicitly simulated. Local Chromium/code evidence is not blanket accessibility/security certification or cloud CI. Source acceptance, this pending layout review, Git integration and deployment remain distinct. Appearance foundation retains its other previously documented limits. Local storage is a per-browser preference only, not synchronization or a reading-history service.

Freeze this exact candidate and return to Coordinator for actual affected RL-1–RL-4 re-review. Review code/layout/tests/technical guide, not Writer prose or owner planning mirrors. No known unresolved local test failure remains; visual fidelity and the current-outline observation are explicitly for review. Do not start homepage, exact-title search grouping, tracking/AI/Continue or Git/release work without the next bounded assignment.


## r2 — RL-3 deliberate pointer departure

Coordinator's affected follow-up reproduced a distinct path: focus the desktop separator, deliberately click blank header space at x490/y31 so focus is body, then narrow to390. The r1 fallback incorrectly treated that earlier intentional departure as an automatic resize blur. The existing actual reproduction script in the review was read; no layout expansion followed.

The reader now clears its fallback record on a pointerdown outside the last focused element; a later actual focusin records the chosen new target. Automatic CSS hiding without prior pointer departure still retains the connected focused element, preserving the original complete768/390/320 recovery sequence. A single new permanent regression clicks the real blank header, verifies body focus before and after narrowing, and checks unchanged scroll position. This does not claim to infer every possible browser blur intent.

Only `reader-layout.tsx`, the existing E2E file and the developer guide's current suite/focus wording changed after r1, plus this report. The other11 r1 Developer file digests, protected sources and manifest remain unchanged. External r1 report snapshot: `/tmp/vctw-reader-layout/r1-handoff.md`. The payload table above now records r2 hashes; earlier r1 measurements/checks remain dated evidence.

Final r2: `npm run check` passed (zero-warning lint, both strict compilers,52 Node tests). Fresh root build→matching export→all27 Chromium cases passed26.1s. Then fresh Pages build→matching export→all27 cases passed25.9s. Both exports remain8 pages/171 references/zh28/en0 with real targets. Original full RL-3 sequence and the deliberate-departure regression both pass; RL-1/2/4 checks remain in the same suite. Actual root/Pages screenshots and JSON at the paths above have been refreshed to r2, with58 screenshots each; current `site/out/` is the verified r2 Pages artifact. Comparison images are regenerated against those exact final captures. No unexpected browser errors, document overflow or source drift; `git diff --check` passes.

The environment/device/engine/AT and current-outline limits above still apply. Frozen for Coordinator's actual code/visual and affected RL-1–RL-4 re-review; no Git, next slice or publication is claimed.
