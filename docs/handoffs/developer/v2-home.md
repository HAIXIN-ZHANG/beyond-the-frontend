# V2 homepage

Owner: Developer. Date: 2026-11-18 Australia/Perth. Revision: r2, HOME-1/HOME-2 revisions and final local QA complete; frozen for Coordinator review. Local candidate/review only.

## Brief and design contract before implementation

Authority: current board and Coordinator's separate homepage assignment after verified V2 publication. Workspace verified `/private/tmp/vctw-m2-v2-home`, `codex/m2-v2-home@8167a056525e71eb61513d3d1ca9716428733531`. Initial board/release-review changes are Coordinator-owned. Snapshot `/tmp/vctw-home-baseline.json`. Writer's factual public-copy update is separate; do not edit its documents or approved messages/prose.

Read-only Figma session succeeded after the tool-requested single authentication retry. Full contexts and included screenshots inspected for [desktop254:2](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=254-2) and [mobile255:26](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=255-26). Targets contain a real exported connected-systems illustration at desktop275:58 and mobile279:60. Use only those exact supplied SVG exports, preserving native dimensions, with localized accessible description; no cover/placeholder/generated/redrawn substitute. Inspect local asset presence, root dimensions and effective visual slots. These are live design nodes, not an immutable version. No Code Connect mapping was supplied.

Structure: full-width scoped home shell, restrained248px desktop book rail and flexible hero with approved title/subtitle plus exact system illustration, then three real ordered reading entries with current benefit/status copy and a clearly planned non-link topic map. Mobile places real reading entries ahead of the illustration as in255:26. Use current localized identity, Chinese source destinations and truthful English absence, not specimen prose or a fictional lead/Continue action. Existing reader/source/search/fragment behavior remains untouched. Reuse shared action/navigation/token primitives; narrow header may reuse its existing accessible compact-menu component if needed. Desktop home rail uses a simple native disclosure for collapse/restore rather than adding another persisted reader preference; narrow readers can reach the same real destinations through existing header and home list.

Allowed expected payload: homepage/server composition, home-localized supplemental UI labels only if necessary (approved copy unchanged), approved SVG files in site public assets, scoped Panda styles and minimally affected existing header composition, meaningful home/export/E2E checks and factual developer guide, this single handoff. No board/owner public copy, manuscript/manifest, exact-title search algorithm, Continue, AI/analytics, cover, dependency/workflow/settings/Git/deployment change.

Acceptance: exact real link count/destinations/locale/status, local approved asset/accessibility/native dimensions, both appearances/accent, keyboard/search/collapse/header menus,320/390/desktop/enlarged text/no overflow, static no-JS access, fresh matching root and Pages build/export/full Chromium plus lint/strict/Node. Save real screenshots, reference comparison, exact hashes/preserved inputs and device/engine limits; freeze for Coordinator review.


## In-progress visual feedback — HOME-1/HOME-2

Coordinator inspected actual/reference captures before final freeze and requested removing the duplicate title eyebrow, identical reviewed-state labels per homepage row, and Planned per topic card. The pre-feedback matching root/Pages30-case runs passed31.4s/31.5s; logs and Pages artifacts are retained under `/tmp/vctw-home/pre-review/`, not final acceptance evidence.

Scoped revision: keep wordmark/H1/approved subtitle and every real title/benefit/destination; remove hero eyebrow and main row statuses. Shared ChapterNavigation gets a default-true metadata-visibility option, used false only by home; existing reader status remains the default. The common source/English availability notices stay. The map keeps one visible planned notice; the sidebar uses its Explore label and references that notice accessibly. Cards retain actual topic names and have no per-card status repetition. Refresh both builds/full E2E and real320/390/desktop captures before freeze. No rebase or Writer/public-copy edit; Coordinator packages on its newer base separately.


## Final delivered behavior

The server-rendered homepage derives all three real ordered destinations and titles from the unchanged manifest/current messages. It keeps the exact approved localized H1, subtitle, benefits and availability wording, plus truthful English absence. New supplemental labels describe only the home navigation, planned map and approved illustration; they live in `home-content.ts`. The primary action opens the actual Chinese introduction; the secondary action opens the current locale's chapter index. Repository/feedback remain real existing destinations. No English body, specimen excerpt, cover, Continue/AI/analytics action or fictitious chapter was added.

Desktop uses a248px book rail with a native keyboard/no-JS disclosure; closing leaves64px with its real summary to reopen. It is independent of the persisted reader preference. The hero has a flexible text/illustration composition and real semantic ordered reading rows. Below900px, the same real reading rows precede the illustration. Eight existing topic directions are explicitly planned, have no links/disabled fake buttons, and are described by a single common notice. The shared compact header is reused for home and reader views; indexes/no-JS retain inline links. The only header behavior change is recognizing `.home-layout` as a compact-shell target. Scoped home CSS reuses the existing neutrals, accent roles, action/navigation components and spacing/radius/type tokens.

HOME-1 removed the hero's duplicated book-title eyebrow in both locales. The wordmark, single H1 and exact approved subtitle remain. HOME-2 removed identical row statuses from the three main rows and the home rail, preserving all distinct link labels and useful benefits. Shared ChapterNavigation accepts `showAvailability=false` for the home rail; default `true` preserves the existing reader metadata. The common source count/reviewed/Chinese notice and explicit English-absence paragraph remain. Topic cards no longer repeat Planned; the sidebar references the single planned-map notice with `aria-describedby`. Permanent home regressions check absence of the duplicate/repeated elements and exactly one common planned notice. Closure of the findings still requires Coordinator's affected review, not this delivery claim.

## Approved illustration and asset verification

These are the exact SVG export bytes returned by the assigned high-fidelity Figma contexts, not a cover, screenshot substitute, regenerated art or SVG redrawing:

| Asset / design slot | Native root dimensions | SHA-256 |
| --- | --- | --- |
| `site/public/illustrations/home-systems-desktop.svg`, connected systems275:58 in254:2 |410×112 | `8d064bb9a9ccd8e554294a8b497827a0f74a7ee84ac233841299ef5cc9b192ef` |
| `site/public/illustrations/home-systems-mobile.svg`, connected systems279:60 in255:26 |304×54 | `a37d7b9dd95599ea1173f43d409ace2db32c54f20ee2e1957e4d14b0225ea80d` |

A picture with a narrow source selects the correct variant; unoptimized local Next Image supplies native dimensions and a localized alternative describing all four connected stages. Visible localized stage labels/caption identify it as one successful-enrolment example. Root SVG dimensions/content were not edited. Metadata inspection found no external references. The export verifier checks both local files, native dimensions, localized description, real chapter destinations and absence of expiring Figma URLs. The browser decodes each selected file and checks natural dimensions and actual aspect ratio/bounds at both locales/modes and1440/1024/390/320.

Measured geometry:1440/1024 desktop asset410×112;390 mobile294×52.21875,320 mobile224×39.78125 within the existing24px padded panel. Intrinsic aspect ratios remain correct. This bounded scaling changes neither the supplied SVG roots nor the art itself. The same approved static art keeps its source colors in Light/Dark; live controls/text use the selected semantic accent. No dark/other-accent export was invented or recolored. No art is missing from its assigned desktop/mobile figure slot.

## Actual final QA and interactions

Environment: Node24.14.1/npm11.11.0, existing Playwright1.65.1/Chromium159.0.8154.6 on this host. Browser plugin unavailable; used the authorized existing local preview/Playwright workflow. No dependency installation. Flow under test: localized home→real Chinese chapter or index; header Search/menu/Appearance→actual state/focus; desktop native collapse→restore; narrow reading list→approved illustration; no-JS home→same actual chapter.

| Check | Final result |
| --- | --- |
| `npm run check` | PASS: zero-warning lint, both strict TypeScript compilers,52 Node tests |
| Fresh root build→matching export→full E2E | PASS:8 pages/185 local link-asset references, zh28/en0, all real targets;30 Chromium cases31.2s |
| Fresh Pages build→matching export→full E2E | PASS:8 pages/185 references, zh28/en0, single `/vibe-coding-then-what` prefix;30 cases30.9s |
| Home identity and availability | One H1, exact approved locale title/subtitle, three distinct actual Chinese reading rows and useful benefits; no English manuscript claim; HOME-1/2 assertions pass |
| Art and responsive geometry |16 locale/width/appearance cases decode correct local asset/native dimensions/aspect; no overflow/clipping; mobile list precedes illustration; no fake planned links |
| Interaction loop | Native desktop summary keyboard248→64→248; primary action Enter opens actual introduction; real Chinese search14 matches and honest English search; Escape focus return; narrow menu visibly ready before keyboard Enter, language switch goes to correct real locale; no hidden-input assumption or retry |
| Existing appearance | Both Light Green/Dark Purple with refresh at1440/1024/390/320; additional default Blue captures. Full12-combination contrast/state/independent accent regressions remain and sample the actual accent arrow, while V2 titles correctly use the neutral text role |
| Reading/fragment preservation | Earlier27 E2E cases retained, including controlled responsive hash repair, legacy/canonical links, no-JS reader, current source hashes/search28 and actual14 results, toolbar/focus/resize/storage/copy/table/code checks |
| Keyboard/no-JS/text | Both locale no-JS homes retain native art/static language and chapter links/collapse.320 enlarged text has no document overflow and actual reading links remain focusable. Existing enlarged-header overlap checks also pass |
| Page/console/screenshot health | Correct locale URL/title, meaningful real content and no framework overlay/unexpected browser error. Screenshot/JSON evidence and reference comparison inspected |
| Whitespace/preservation | `git diff --check` passes; only the scoped payload below and confirmed Coordinator board update differ from snapshot |

The home test extension adds three cases, making30. It does not add mirrored unit tests for a reversible presentation change; the52 meaningful existing Node checks remain. Initial diagnostic issues were resolved: old home selectors/text needed the new semantic structure, the accent test previously sampled neutral titles, and a focus-only narrow-menu test tried Enter before the compact summary became visible. The revised test first verifies actual readiness/closed search, then exercises keyboard behavior. No arbitrary sleep or retry was added. One overlapping diagnostic test/build caused temporary artifact conflicts; that run is discarded, and the final matching root→Pages sequences above were serial. Pre-feedback passing evidence is retained as history under `/tmp/vctw-home/pre-review/`; it is not substituted for final HOME-1/2 validation.

### Visual comparison and intentional deviations

Saved full context reference PNGs at `/tmp/vctw-home/reference/{desktop,mobile}.png`. Final actual default-Light/Blue captures for both locales at1440/390/320 and observations are under `/tmp/vctw-home/visual/`. `comparison-desktop.png` and `comparison-mobile.png` place the inspected reference next to the exact final Pages English home; both comparisons and the final Chinese390 capture were opened after revision.

The final composition follows the sidebar, title/subtitle/actions, real reading rows, system figure and planned-map hierarchy. The mobile reading rows precede the image. It intentionally preserves approved full titles, useful benefit descriptions and honest English absence instead of adopting shortened specimen labels/prose; rows and page height are therefore longer. HOME-1 deliberately removes the specimen-eyebrow slot without replacing it with an unapproved marketing line. HOME-2 removes repeated statuses while preserving common notices. Native44px controls, intrinsic localized header wrapping, existing font stacks and token geometry take precedence over fixed artwork coordinates. The map presents eight existing directions rather than treating the specimen's four cards as the full book. Static art remains exactly the supplied variants. No pixel-identical/font/immutable-file-version acceptance is implied; Coordinator reviews these concrete differences.

## Exact evidence paths and frozen payload

Final logs: `/tmp/vctw-home-{check,build-root,verify-root,e2e-root,build-pages,verify-pages,e2e-pages}.log`. Matching E2E artifacts: `/tmp/vctw-home/root/playwright/` and `/tmp/vctw-home/pages/playwright/`,73 PNGs each. `reader-V2-home-uses-approv-550ed-ss-viewports-and-appearance/` contains the12 new locale/desktop390/320 mode captures and `home-assets-geometry.json` (16 actual layout observations). The home keyboard directory contains `home-320-enlarged.png`. Current ignored `.artifacts/playwright/` and `site/out/` are the final matching Pages candidate. Extra default-Blue visual observations record no errors. All artifacts/temporary scripts/reference screenshots remain outside tracked product files.

| Developer file | SHA-256 |
| --- | --- |
| `panda/global-styles.ts` | `d794b88db44ef092e1738de843658c923cfcd1c4b458ba99d1fe3353529aac08` |
| `scripts/verify-export.mjs` | `131206f373711b98b22647c750c888b210bef729a779c466201edc3e0d7c285a` |
| `site/DEVELOPMENT.md` | `012d0924c068cc633ccdedb2b10b54e2b0a0586d48f1e3133beec3f597d46311` |
| `site/components/home-page.tsx` | `c9f64be75b0bd179989a6c6c98e0351cee961fdfea2fce5d7c5c2a533559bb05` |
| `site/components/home-content.ts` | `4b16c978ee093ca9b5cfdecffb5d6fdcb142c41ed1f81769d092c80f8b4ef4f1` |
| `site/components/reading/chapter-header-menu.tsx` | `7762011d8b72c3a07869463b6e3565bfc5d680a81784b92d7e852b1925ff1b48` |
| `site/components/reading/chapter-navigation.tsx` | `e19d89ee8c47b7630e9fe3d682141fe1b2fd0257b2a4fcdda95de0829bc1ad8b` |
| `site/public/illustrations/home-systems-desktop.svg` | `8d064bb9a9ccd8e554294a8b497827a0f74a7ee84ac233841299ef5cc9b192ef` |
| `site/public/illustrations/home-systems-mobile.svg` | `a37d7b9dd95599ea1173f43d409ace2db32c54f20ee2e1957e4d14b0225ea80d` |
| `tests/e2e/reader.spec.mjs` | `a892f83423a3d611d510acd7098bc6a4efbc859491373700309abf0f36403596` |

The eleventh payload file is this single handoff; final digest is returned directly to Coordinator to avoid self-reference. The payload contains7 changed existing files and3 new implementation/assets files.

The261-file snapshot now has253 byte-identical files,7 scoped existing Developer changes and1 concurrent Coordinator board update. The pre-existing release-review mirror remains unchanged. The board now records Writer PR30 closure; it was read/confirmed as Coordinator-owned and not edited. No rebase was performed. Writer current-facing source copy remains outside this checkout assignment; Coordinator will package on a newer base.

| Confirmed owner file | Current SHA-256 |
| --- | --- |
| `docs/coordination.md` | `8b63bfca0a14ba789d784928ed718f82f8afc6bd90d7665d64a005b4a8268b1b` |
| `docs/reviews/v2-fragment-release-fix.md` | `c2edefab8f5550e850d0b5759ea97530199458a9f351935d6c016e2054b29af7` |

| Protected runtime/source input | SHA-256 |
| --- | --- |
| `book/drafts/zh/00-before-we-start.md` | `b4d0dd040e183cebc0400526ca5b317d23db1dc406e0bd5b00e3af74a940f521` |
| `book/drafts/zh/01-a-page-and-a-system.md` | `e0fca6dd95b87e93107c4279fb4bad120e80a068c8fc91a58689154293b25a05` |
| `book/drafts/zh/02-browser-foundations.md` | `3688b7967433b7a97304438100908d37883d5de9740aaa5c08820b37aa9bf624` |
| `book/drafts/zh/03-after-ai-finishes.md` | `0a707f763462099ee76f2b1e53b445a33cb61a23c65c3e599ac4ef644a191184` |
| `book/drafts/zh/04-api-contract.md` | `b85b2d706d863e611b7ab8faaaf2085396f01e583bc3f4440bc420198978c45f` |
| `site/content/manifest.ts` | `4a6526e3d806ec9bbb9d713ba798991ef93aa10a30af1dfcca5c41563520af77` |
| `site/config/i18n.ts` | `07e9d6c810418c9be165f4b495cffbc4b9deb0276cd4d2e770b316b92b9659dc` |
| `site/components/reading/reader-layout.tsx` | `1a003d1ecc30be0b02643cb6f19ba55e59da3a713f98fcce80249d1a9a179132` |
| `site/components/search/search-control.tsx` | `af009b11a638d869b40081c974e8ca96a551a0852e17f4073b86f4bf81835548` |

The developer guide also identifies the already released reader/fragment baseline accurately; the homepage alone remains the candidate. This final prose-only baseline-label correction did not change the tested runtime or rerun its completed checks.

## Limits and next gate

No Safari/Firefox, physical phone/touch or actual screen reader/native browser zoom run was performed. Enlarged text is an explicit computed-size stress, not full accessibility certification. Local static exports/browser checks are not exact-head Linux CI, Git integration or homepage deployment. The already released reader and fragment code remain frozen; this candidate has no new source admission, search grouping/AI/Continue/analytics/cover, dependency/workflow/settings or Git/release action.

Freeze this exact homepage payload for Coordinator's affected HOME-1/HOME-2 visual/code/asset re-review. Return any finding to Developer in this same handoff. Do not start exact-title search or another publication merely because the local checks passed.
