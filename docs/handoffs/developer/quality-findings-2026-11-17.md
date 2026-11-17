# Independent quality findings — correction handoff

Owner: executing Developer/design agent, explicitly assigned by the author. Date: 2026-11-17 (Australia/Perth). Revision: **r1, ready for independent second review**. [Board](../../coordination.md) owns the assignment. The original quality reviewer retains the acceptance decision; this record is executor evidence, not independent approval.

## Authority, workspace and freeze

- Actual directory: `/Users/haixin/Desktop/code/vibe-coding-then-what`.
- Branch: `main`; HEAD/local main/origin-main at assignment: `95a6bec69e26cbe13fe9f5d9433ee91e07632091`. HEAD and branch remain unchanged. The initial working tree was clean; the r1 payload below is uncommitted.
- Original report: `/private/tmp/vibe-coding-quality-review-2026-11-17.md`, retained unchanged. Its seven findings are the only correction scope.
- No dependency installation, Git writes, commit, push, merge, deployment or access change was performed. Figma changes were explicitly authorized by the supplied assignment. Other Developer/Writer assignments remain closed.
- Preserve the working tree while the original reviewer examines r1. A changed source revision requires affected reinspection; neither green local checks nor this submission grants acceptance.

## Corrections, reproduction and expected results

### 1. Complete search results and truthful count

`site/content/search.ts` no longer truncates the sorted results to twelve. The dialog counts and renders the complete returned array. The current reviewed Chinese corpus contains twenty indexed sections; searching **报名** matches fourteen, not twelve. No pagination or hidden remainder is introduced for this small corpus.

Reproduce at `/zh/read/`: open search, enter 报名. Expected: “14 条匹配 · 中文已审阅草稿”, fourteen links with the same destinations as all matching index entries. ArrowDown reaches the fourteenth link; Enter navigates and focuses its actual heading. The Node regression compares all expected destinations, and the E2E checks this at 1440/390/320px for both export base paths. The original implementation returns twelve against the same real index; the corrected one returns fourteen.

### 2. Original-text Unicode excerpts

Search matching still uses NFKC, lowercasing and collapsed whitespace. Excerpt/highlight ranges now map normalized UTF-16 positions back to original **grapheme clusters** using `Intl.Segmenter`. Excerpts slice original text around a real body match, with a nominal 64-grapheme window and sixteen graphemes of preceding context. A longer matching term can extend that window so the hit is not cut away. Contextual whole-string lowercasing is retained. React renders literal fragments and `<mark>`, without raw HTML.

Reproduce with a synthetic entry whose text is `ﬃ`.repeat(100) + `needle` + Chinese suffix, query needle. Baseline excerpt is only an ellipsis; r1 contains needle and its original surrounding text. **This is a constructed edge case, not evidence that either current manuscript has corrupted text.** Tests also cover matching the ligature itself, composed/decomposed accents, combining-prefix shifts, supplementary CJK, emoji/ZWJ clusters, contextual Greek sigma, collapsed whitespace and literal markup characters. Fragment concatenation must reproduce the exact source text; slices must not split surrogate pairs or source clusters.

### 3. Compact, readable mobile search

The result status and snippets use existing semantic typography/spacing roles. Snippets are contextual and normally 64 graphemes rather than the previous 140-character tail. Literal query matches are marked in chapter labels, headings and snippets using semantic foreground/selected-background colors. There is no line clamp hiding the matching tail. Results retain real links, native scrolling, existing modal focus handling, keyboard navigation and live count feedback.

Reproduce at 390×844 and 320×844 in Day and Night: search 报名; compare the before/after captures, inspect visible highlights, scroll to the last result, then use the keyboard to activate it. Actual Chromium results and captures show the complete fourteen results and denser summaries. Visual quality and assistive-technology interpretation still require independent judgment.

### 4. Nearby mobile/tablet chapter navigation

The existing reading-tools row becomes sticky below the desktop-rail breakpoint. Its existing chapter/section disclosures use a bounded scrolling panel; only one is open at once. Opening or closing the panel does not reflow the article. Escape returns focus to the summary with `preventScroll`; activating a link retains the existing anchor/heading-focus behavior.

`ReadingTools` measures the row through `ResizeObserver` and sets a local CSS custom property used by heading `scroll-margin-top`. This accounts for wrapping at narrow widths and enlarged controls. It is a measured layout value, not a new design token or a scroll-event loop.

Reproduce at 390/320px: open 本章目录, jump to 时间：先发生什么，用户要等到哪里？, then reopen the nearby outline without returning to the article top. Close with Escape; scroll position stays the same and focus returns to its summary. Double both summary font size and line height, repeat the jump: the focused heading must remain below the actual toolbar. Final root and Pages measurements are identical: at390 toolbar bottom75px/heading99px; at320 toolbar141px/heading165px; focused H2; no document horizontal overflow.

**Design tradeoff:** the collapsed toolbar does not cover its anchor target. An explicitly opened, dismissible navigation panel temporarily overlays part of the reading area, avoiding article reflow. Please independently assess this against the requested unobstructed reading experience; this is not a claim that the expanded panel never covers any prose.

An interim fixed-margin implementation failed the strengthened 320px text-enlargement check (heading112px behind toolbar141px). That failure/trace is retained. The fix measures actual height; the assertion was not weakened. Text enlargement is a CSS stress fixture, not certification of native browser zoom or OS font scaling.

### 5. Discoverable real reading content on home

Both home locales now list the same two approved Chinese destinations, concise localized reader benefits and reviewed-Chinese-draft status. The English home explicitly states that English chapter bodies are unavailable; links target the Chinese reader and declare `hreflang=zh`. No English manuscript or additional chapter is implied. Titles use the current locale's display labels while destinations remain truthful.

Reproduce on `/` and `/zh/` at desktop/390/320px. Expected: two concrete chapter links, correct locale-led chrome, availability and benefits. Follow either link to the real Chinese chapter; the G01 destination retains its approved source hash. The E2E covers both home locales and the actual destination hash.

### 6. Figma mutually exclusive search states

Existing [390px search129:445](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=129-445) and [320px search134:458](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=134-458) now each show only the no-English-corpus state. Previously hidden explanatory text is visible. Historical alternative example layers remain recoverable rather than deleted.

The separate [correction matrix239:1026](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=239-1026) contains independent 390px and320px specimens. Each labels its trigger, recovery and return path in English:

| State | 390px node | 320px node | Trigger / recovery / return |
| --- | --- | --- | --- |
| Ready |239:1028|239:1115|Chinese index ready, empty query; enter query; Close/Escape returns to reader|
| Loading |239:1042|239:1129|Chinese index fetching; await result or error; Close/Escape|
| Results |239:1056|239:1143|Chinese query has matches; all matches accessible, activate a section; Close/Escape|
| No matches |239:1072|239:1159|Ready Chinese index, nonempty query without matches; edit/clear or browse; Close/Escape|
| Fetch failure |239:1086|239:1173|Chinese index fetch fails; Retry keeps query; Close/Escape|
| No English corpus |239:1100|239:1187|English search opened with no English bodies; deliberate Chinese-index link or Close/Escape|

These are state-handoff specimens, not six states to render simultaneously and not an assertion that fourteen actual links are drawn in the Results specimen. Existing SearchField/SearchFeedback components, typography and variable bindings are reused. No new runtime feature is implied by a design annotation.

### 7. Figma catalog links

The [desktop catalog129:392](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=129-392) and [mobile catalog129:405](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=129-405) now each contain two separate linked navigation-component instances. Labels are underlined, use the existing semantic link role and have minimum44px action areas. English display titles remain clearly separate from the Chinese destination/availability. Real destinations are the existing published Chinese chapter URLs, not invented English body routes.

- Desktop link instances:240:1050 and240:1052; mobile:240:1059 and240:1061.
- Opening destination: `https://haixin-zhang.github.io/vibe-coding-then-what/zh/read/before-we-start/`.
- G01 destination: `https://haixin-zhang.github.io/vibe-coding-then-what/zh/read/a-page-and-a-system/`.
- [Link-contract/state column242:1058](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=242-1058) shows destinations, action areas, Enter behavior and reused Hover/Focus variants. Notes are expanded and separately positioned to avoid covering chapter descriptions.

Original title layers are retained hidden. Three pages, four variable collections,133 variables and14 text styles remain; no new token collection, component master, font package, future palette edit or access change was made. Figma screenshots/structure were inspected by the executor; independent visual/design acceptance is pending. The correction matrix preserves the other historical and future-design regions.

## Actual checks and evidence

Final code checks were run sequentially after the measured-height correction. Existing installed dependencies/browser were used; no install was performed. Exit0 and actual outcomes, rather than the old report's counts, are recorded here.

| Command | Actual result | Local evidence |
| --- | --- | --- |
|`npm run check`|ESLint, strict application/Panda compilers and42/42 Node tests pass; zero skips/failures|`/tmp/vctw-quality-final-check.log`|
|`npm run build`|Root static build passes|`/tmp/vctw-quality-final-root-build.log`|
|`npm run verify:export`|7 pages,132 local links/assets; zh20/en0, heading targets valid|`/tmp/vctw-quality-final-root-export.log`|
|`npm run test:e2e -- --output=/tmp/vctw-quality-final-root-e2e`|15/15 Chromium E2E pass,8.0s|`/tmp/vctw-quality-final-root-e2e.log`|
|`npm run build:pages`|Pages-prefix static build passes|`/tmp/vctw-quality-final-pages-build.log`|
|`NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run verify:export`|7 pages,132 local links/assets; zh20/en0, targets valid|`/tmp/vctw-quality-final-pages-export.log`|
|`NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run test:e2e -- --output=/tmp/vctw-quality-final-pages-e2e`|15/15 Chromium E2E pass,8.0s|`/tmp/vctw-quality-final-pages-e2e.log`|
|`node /tmp/vctw-quality-navigation.mjs final-root ''`|Actual Chromium theme-refresh/search/nearby-outline/enlarged-target checks pass; console/page errors empty|`/tmp/vctw-quality-final-root-navigation/results.json`|
|`node /tmp/vctw-quality-navigation.mjs final-pages /vibe-coding-then-what`|Same checks pass with actual Pages prefix; errors empty|`/tmp/vctw-quality-final-pages-navigation/results.json`|
|`node /tmp/vctw-quality-search-reproduction.mjs`|Original12→corrected14; synthetic original ellipsis→corrected needle excerpt|`/tmp/vctw-quality-search-before-after.json`|
|`git diff --check`|No whitespace errors|Rerun before submission|

The original twelve browser cases are retained; three new meaningful cases cover complete search access, mobile nearby-outline stability/enlarged targets and honest bilingual home discovery. Unicode utility boundaries are covered by the new Node cases. Browser checks also retain existing locale, IME, retry, modal scroll/focus, theme/storage, sharing/manual-copy and bounded table/code behavior.

### Screenshots and retained failures

- Original static baseline: `/tmp/vctw-quality-before-export`; screenshots/metrics: `/tmp/vctw-quality-before/` (1440/390/320 English/Chinese homes, search, mobile post-jump reading). Recreate capture with `node /tmp/vctw-quality-capture.mjs before '' /tmp/vctw-quality-before-export`.
- Regular corrected root captures: `/tmp/vctw-quality-after-root/`; Pages: `/tmp/vctw-quality-after-pages/`. Files include `390-search.png`, `320-search.png`, `1440-en-home.png`, `390-zh-home.png`, `320-en-home.png` and `metrics.json`. These precede only the measured toolbar-height correction; final navigation captures below cover that correction.
- Final root: `/tmp/vctw-quality-final-root-navigation/`; final Pages: `/tmp/vctw-quality-final-pages-navigation/`. Each has `1440-night-search.png`, `390-night-search.png`, `320-night-search.png`, `390-nearby-outline-open.png`, `320-nearby-outline-open.png`, `390-enlarged-outline-target.png`, `320-enlarged-outline-target.png` and `results.json`.
- Retained interim navigation failure: `/tmp/vctw-quality-enlarged-nav-before/reader-mobile-outline-stay-97dc9-ng-or-hiding-anchor-targets/test-failed-1.png`, `trace.zip` and `error-context.md`. Invocation: `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run test:e2e -- --grep 'mobile outline stays' --output=/tmp/vctw-quality-enlarged-nav-before` (one actual failed case before height measurement).
- Figma before: `/tmp/vctw-quality-figma-search-before.png`. Final: `/tmp/vctw-quality-figma-1.png` (corrected original390 search), `/tmp/vctw-quality-figma-catalog-final.png` (mobile links), `/tmp/vctw-quality-figma-matrix-final.png` (all twelve search scenes and link contracts). Intermediate `figma-2.png`/`figma-3.png` show annotation clipping before the final layout repair; they are not final screenshots.

Actual browser evidence is installed **Chromium on this Mac**, with desktop,768px cases in the retained suite, and320/390px viewport simulation. Safari/WebKit, Firefox, physical mobile devices, VoiceOver/other screen readers, native zoom/OS text scaling and touch hardware were **not tested**. Semantic roles, keyboard operation and text stress are evidence, not full WCAG or assistive-technology certification. No cloud CI or live-site deployment was executed for this uncommitted correction. A loopback-server attempt initially hit sandbox EPERM; the authorized local verification was rerun with execution permission, not by installing tools or exposing a public service.

## Preservation, risks and recovery

Both approved manuscript bytes match HEAD. SHA-256:

- opening: `244c4f7a9ddeb781d8530691d07ba17b9daccf611b9631ea60faa412b87a6d90`.
- G01: `b928e5df21876c0ca49a3c227eb6c7e20723b3f22bb9c7cb2d560cc198db62d2`.

All31 ignored recovery files match `.local/recovery/theme-generated-after-onboarding-2026-11-15/manifest.json`. Dependencies/lockfile and workflows remain unchanged. No manuscript edits, translation, access edits, publication or future palette implementation occurred.

`site/out` is ignored final **Pages-prefix** output. Root browser tests require rebuilding root first; do not test a root base path against the Pages export. Related test/guide commands remain reproducible without the scratch scripts. Temporary screenshots/logs may be cleaned by the OS; this report preserves the concrete reproductions, assertions, outcomes and limitations for recovery. Capture scripts are local supplements, not new maintained project tooling.

Independent review priorities: Unicode source offsets and hit visibility; reachability of result14; sticky toolbar/expanded-panel tradeoff and enlarged-text anchor focus; truthful English home destinations; the twelve separated search specimens and both catalogs' link areas/destinations. `Intl.Segmenter` requires a supporting browser; no fallback for older unsupported engines was added or certified. Complete-result rendering is proportionate to the current20-section corpus; revisit pagination with real corpus growth rather than silently limiting results again.

Next action: submit this frozen r1 and actual files to the original quality reviewer for independent second review. The reviewer owns a separate review record and acceptance/findings. Return specific findings to this execution owner; do not integrate or publish without new authorization.

## Uncommitted r1 file manifest

The following fourteen files plus this handoff (fifteen files total) form r1. Hashes exclude this handoff to avoid self-reference. The submission message supplies its SHA-256. Generated/temporary outputs are not source changes.

| File | SHA-256 |
| --- | --- |
|`docs/coordination.md`|`99dbb15b1382898eeedb88593f3f898ba0e870698211c527721fed4e08ff4baa`|
|`docs/design/reading-experience-v1.md`|`e9b0f3f04dbfba5c823354ce9343bdbd95e8ed0ee5249a32b072b372cdb611a7`|
|`docs/release.md`|`0264c50dc8d602307f770ceab96033258bd6cfb5ae91ee62030c3fcd83cf3621`|
|`panda/global-styles.ts`|`d596b46bf7a8df1af81ec61db4f25c0676130bcbf6b882d7a6163a95f29ac2b6`|
|`site/DEVELOPMENT.md`|`1d6d6263d13f8b1e605927a0149a545d5fcbda4d063ab6f8614ee5118fccb04a`|
|`site/components/home-page.tsx`|`e93aec1107da415cbc14291c62e9a3f9e6c18d1584aab146d9f9d4bb6db52c31`|
|`site/components/reading/chapter-reader.tsx`|`712ac6abd74a3e87da112e25e6bd0f3169497c2e55abf22cc913301ca3c83fe3`|
|`site/components/reading/reading-disclosure.tsx`|`c160c960d3c2d3621c220771ac0a2d4c62837ca9847f503bb9b6480c4bb77549`|
|`site/components/reading/reading-tools.tsx`|`038e9ab59c5030c24af729b904748e76d9d88827d76fd8834fa43bae067cc2b4`|
|`site/components/search/search-control.tsx`|`947ec5e0365ee0bd039211aa4e5bcd0fe18a698c19e6e1311aae71d079b3c3df`|
|`site/config/i18n.ts`|`041c0f1ff1fe417173fa409e8db83e6b8fcf289350e56274a46713e5c195cd40`|
|`site/content/search.ts`|`1bc0507068d33cf76ec510fb843d30133a42f2e89d9e515b22f36bdb8fee5883`|
|`tests/e2e/reader.spec.mjs`|`75e542c3ce5e08f0e45894bd28627af912b91ed49ae802335105245bf1be0405`|
|`tests/search-sharing.test.mjs`|`026c6c541f557314d10dfe25c19ec257382a56c2bd9ced4d1bd94a51b03a637e`|

## Original-reviewer decision and task closure — 2026-11-17

The original quality reviewer accepted the submitted r1 in the [independent second review](../../reviews/quality-findings-2026-11-17.md), with no blocking finding in the checked scope. It independently matched this handoff's submitted SHA-256 `0904b3b1aee9f1d6c06d8f5d8e7493d2fe5798096ffb02e1b586a8ca5ee90e3f` and the14 payload hashes, ran42 Node/15 Pages Chromium tests and documented independent versus executor evidence. The accepted expanded-navigation overlay and unperformed browser/device/AT/root/cloud checks remain explicit there.

This append records the other reviewer's decision; it does not replace that record or self-certify acceptance. The manifest above identifies r1 **at submission**, before this closure append and subsequent authorized board coordination. Runtime/design/test sources remain frozen; no integration or release occurred. The author subsequently resumed the separately scoped [Milestone 2 preparation](../../delivery/milestone-2.md).
