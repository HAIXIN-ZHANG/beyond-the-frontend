# Exact chapter-title search grouping

Owner: Developer. Date: 2026-11-19 Australia/Perth. Revision: r3, frozen for affected Coordinator review at PR head 19e94e6. Publication remains separate.

## Brief and contract before implementation

Authority: Coordinator's separate post-homepage assignment, current board and Milestone2 search follow-up. Verified `/private/tmp/vctw-m2-exact-title-search`, `codex/m2-exact-title-search@7fcb8c404243b6cee043c8cf92debf387ab74a06`. Only initial board/home-review mirrors are Coordinator-owned; preserve them. Snapshot `/tmp/vctw-exact-search-baseline.json`. Resume the same worktree, no duplicate setup/rebase/install/Git.

For a query whose existing NFKC/lowercase/whitespace normalization exactly equals a chapter title, group only entries that otherwise match solely through their inherited chapter-title field. Emit one real unfragmented chapter URL per actual locale/chapter identity, ahead of section hits. Retain each genuine heading/body match and original fragment, including real H1 matches. The section matching rule still uses the existing query terms across heading/body fields; no fuzzy/multi-query/schema change. Do not emit a chapter result if no inherited-only entries exist to group. Same-title chapters group separately. Non-exact queries retain the original score/order, excerpt, literal/Unicode matching and all destinations.

Use transient result kind/destination metadata without altering the exported index/schema or mutating indexed entries. Mark actual chapter and section results visibly/accessibly and count the final destinations. A chapter result links to its real chapter route, without a fake fragment; same-page chapter activation should focus/land at its real H1, while actual fragments keep native focus and accepted timing repair. Cross-page chapter navigation should likewise focus the real H1. Keep Enter/arrow/pointer results, retained-query error recovery, current-language boundaries and honest English empty corpus.

Expected actual corpus: full browser chapter title9→2 (one grouped chapter destination plus real H1 section destination); `报名` remains14. Baseline live inspection confirms the browser title appears in its H1 while eight remaining sections inherit it. Node checks must also cover normalized variants, same-name distinct chapters, genuine H1/H2/body hits, no-inherited case and ordinary-query preservation. Actual E2E will exercise same/cross-page chapter/fragment activation with mouse and keyboard at desktop390/320, final count/labels, no overflow, real URLs and focus/clearance, plus all existing regressions.

Allowed files: necessary search algorithm/result typing, SearchControl and search labels, related Node/E2E tests, directly affected technical guide only if needed, this single handoff. No manuscript/manifest/index-builder/schema/home/layout/Figma/dependency/CI/release/board/owner-copy changes. Run lint/strict/Node and fresh matching root/Pages build/export/full Chromium; record exact files/hashes, limitations and protected inputs, then freeze and return to Coordinator for independent review. Git/publication remain Coordinator-owned.

## Frozen implementation

`SearchResult` adds transient `kind` and destination `href`; the indexed entry remains intact. Exact normalized full-title queries group inherited-only hits by locale/chapter identity, using the real chapter route without a fragment. Genuine heading/body matches retain their original section URLs, excerpts and scores. No inherited-only hit means no manufactured chapter entry. Ordinary queries still return only sections with their original ranking. Chapter kind is explicitly sorted first: the Coordinator's long-title probe demonstrated that a genuine H1 can score 264, above the grouped chapter's 200, so a fixed score alone is insufficient. A dedicated Node regression covers that case.

The result list labels chapter/section destinations and counts final results. Existing native section anchors retain their fragment navigation. Chapter links use Next Link and the actual base-aware route. Same-page activation removes the prior fragment and focuses/scrolls the real article H1. Cross-page activation temporarily observes the route commit, checks the complete destination URL including hash and the actual chapter identity, then focuses that H1. Pending focus is canceled by subsequent pointer/keyboard/scroll/touch interaction, history/hash change, page exit, another result activation, component unmount, navigation elsewhere or a10-second safety deadline. Cleanup disconnects the observer, aborts listeners and clears the timer. This deadline bounds abandoned focus work; it never retries or delays navigation. A route taking longer than 10 seconds can still navigate but receives no late custom H1 focus.

The actual F01 title now returns exactly two destinations, chapter first:

- `/zh/read/browser-foundations/`
- `/zh/read/browser-foundations/#%E9%A1%B5%E9%9D%A2%E5%87%BA%E7%8E%B0%E4%B9%8B%E5%89%8D%E6%B5%8F%E8%A7%88%E5%99%A8%E5%9C%A8%E5%BF%99%E4%BB%80%E4%B9%88`

`报名` retains 14 distinct section results. English remains an honest unavailable corpus, with no manufactured translation. The technical guide documents only the directly changed behavior and regression count.

## r1 actual verification — before the display correction

- `npm run check`: passed zero-warning lint, strict app/Panda TypeScript and 55 Node tests. Three added Node cases cover actual 9→2/signup 14/index immutability; normalized same-title chapters/genuine heading and body/no-inherited/non-exact/language boundaries; and explicit chapter priority above a higher-scoring long H1. Log: `/tmp/vctw-exact-search-check.log`.
- Fresh root: `NEXT_PUBLIC_BASE_PATH='' npm run build`, matching `verify:export` and full Chromium E2E passed. Export: 8 pages, 185 local references, 28 Chinese/0 English sections. Browser suite: 32 passed in 35.2 seconds. Logs: `/tmp/vctw-exact-search-build-root.log`, `/tmp/vctw-exact-search-verify-root.log`, `/tmp/vctw-exact-search-e2e-root.log`.
- Fresh Pages: `npm run build:pages`, `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run verify:export` and matching full Chromium E2E passed. Same export counts; 32 passed in 35.2 seconds. Logs: `/tmp/vctw-exact-search-build-pages.log`, `/tmp/vctw-exact-search-verify-pages.log`, `/tmp/vctw-exact-search-e2e-pages.log`. Final `site/out` is this Pages build.
- The new browser matrix checks 24 combinations per base path: 1440/390/320px, same/cross-page, chapter/real H1 section, mouse/keyboard. It verifies exact href and final URL, source identity, dialog closure, actual H1 focus and header clearance, result count/type/title highlighting and no horizontal overflow. Input Enter separately selects the first chapter result. A controlled delayed route then proves reopening search cancels pending chapter focus: the new search input keeps focus after the destination commits. Existing Unicode, IME, error/retry, English, search fragment, no-JS, homepage, layout and appearance regressions remain in the full suite.
- Root and Pages navigation records each contain 24 observations with the expected prefix, unfragmented chapter URL, real H1 fragment and focus ID `页面出现之前浏览器在忙什么`. Artifacts are saved at `/tmp/vctw-exact-search/root/playwright/` and `/tmp/vctw-exact-search/pages/playwright/`. In each, `reader-exact-chapter-title-746ba-use-and-keyboard-navigation/` contains `exact-title-navigation.json` and `exact-title-{1440,390,320}.png`. Inspected actual root 1440/320 and Pages 390 captures: both kinds/count and full highlighted titles are visible without overflow.
- `git diff --check` passed. Both fresh build logs contain no warning/error matches. No dependencies were installed, Git written or deployment started.

## Preservation and exact payload

Compared all 268 tracked files against the preimplementation byte snapshot: only the six payload paths below changed; the other 262 were byte-identical. This includes the five canonical manuscripts, current manifest, index builder/schema inputs, homepage/art, reader layout/CSS, dependencies/lockfile, CI/settings, and the Coordinator's initially modified board/home-review mirrors. Those two mirrors remain outside this payload. The only new file is this handoff, making seven Developer delivery files.

Both final exported indexes are byte-identical to the unchanged index builder's output from the protected sources:

| Index | Sections | SHA-256 |
| --- | --- | --- |
| `site/out/search-index/zh.json` | 28 | `e1946cbb58dfdd7de20e315c61cdfdab7557c8e9c4adc1e36e39447497ac28df` |
| `site/out/search-index/en.json` | 0 | `ea8697ba2324996bfccdcb85ca963119e3e88a5c8dddf9250a23de077213cb68` |

| Developer file | SHA-256 |
| --- | --- |
| `site/DEVELOPMENT.md` | `17fe735ce2470a26d64f16cff73b44bc60f9479de4bd3ef0eccd5acb426672b0` |
| `site/components/search/messages.ts` | `c57b428c5bb5a34444546bf4bf767202ba48142584ac8324b8b28c6e2230bfb7` |
| `site/components/search/search-control.tsx` | `c21dd6f432e8ec631a2da0158d3a3ecc7abfee7300ac3f0765d6f699ad6048b8` |
| `site/content/search.ts` | `3c863441880d8b8831e258842be526e5b6af502a8a3e2e6922fec88fb9bc0dec` |
| `tests/e2e/reader.spec.mjs` | `e61c41367a66b7054af526e9b009cb99cc4a25ee2efbe31772ce90067344a50f` |
| `tests/search-sharing.test.mjs` | `c791cbf41b7a5bf7b47ee235c131759a9dde86486a567d4bcbcde2a3d07d6628` |

The seventh file is this handoff; its final digest is sent with delivery rather than self-embedded. The initial branch baseline was `7fcb8c404243b6cee043c8cf92debf387ab74a06`; the current r3 workspace is `codex/m2-exact-title-search@19e94e6527755ff449bf5277aa1e8e76bfae2df5`. The table reflects the latest r3 payload; r1/r2 evidence below retains its dated scope.

## Limits and next gate

Actual runtime evidence is local Chromium with emulated viewport sizes. No Safari, Firefox, physical device, native zoom or screen reader run is claimed. Cancellation after a later search interaction is browser-tested; page-exit/unmount/deadline cleanup is code-inspected, without separate browser simulations for every failure path. No external services or public runtime were used for this task. Local success does not establish cloud CI, review acceptance, merge or release. The candidate is frozen pending Coordinator's actual independent review; return scoped findings to Developer before integration. No subsequent roadmap item is started.

## r2 review correction — repeated H1 label

Coordinator independently verified the mechanism and both navigation paths, then returned a narrow display finding: the actual H1 result repeated its full title in the small chapter context and the bold heading at 390px. For normalized-equal heading/chapter titles, keep only the localized section kind above the single bold title; retain chapter context for differently titled sections. Result identities, counts, links, scoring and focus behavior remain unchanged.

Implemented only this label condition in SearchControl. The existing 24-case browser matrix now asserts the same-title section's small label is exactly `小节` and its link contains one title highlight. A separate ordinary differently titled F01 section assertion confirms the small label still includes `小节 · <chapter title>`, its real bold heading and its unchanged original href. Existing narrow captures now show the corrected label. Only SearchControl, the affected E2E test and this handoff changed after frozen r1; the other four delivery files retain their r1 bytes.

### r2 refreshed verification and evidence

- `npm run check` passed lint, strict app/Panda types and all 55 Node tests. Fresh root build/export/full Chromium passed 32/32 in 35.1 seconds; fresh Pages build/export/full Chromium passed 32/32 in 35.3 seconds. Both verifiers still report 8 pages/185 references/zh28/en0. Logs are `/tmp/vctw-exact-search-r2-{check,build-root,verify-root,e2e-root,build-pages,verify-pages,e2e-pages}.log`. These supersede the r1 logs for the current candidate.
- Browser plugin not available; used the existing Playwright workflow, local static server `http://127.0.0.1:4179`, both root and `/vibe-coding-then-what` prefixes, Chromium at 1440/390/320px. Existing fixtures verify actual page content/navigation, uncaught errors and unexpected console errors. The target flow opens search, enters the full real F01 title, shows two clearly labeled results without duplicate title context, then activates the same original destinations with correct focus. All 24 navigation combinations pass at each prefix; the distinct-heading context assertion also passes at each prefix. No framework error page or overlay appeared in the inspected captures.
- Current artifacts: `/tmp/vctw-exact-search/r2/{root,pages}/playwright/reader-exact-chapter-title-746ba-use-and-keyboard-navigation/`, containing the refreshed `exact-title-{1440,390,320}.png` and `exact-title-navigation.json`. Inspected root 390/320 and Pages 390 screenshots: `小节` appears once above the one highlighted title; chapter/section labels and the two real links remain separate and readable. The r1 screenshots above remain historical evidence only.
- Repeated the 268-file baseline audit: the same six payload paths differ and the other 262 remain identical, including owner mirrors and manuscripts. Both final index hashes are unchanged and their bytes equal the unchanged builder output. `git diff --check` passed. The r2 digests were sent with that revision; the table above now includes the subsequent r3 E2E correction. Final `site/out` at r2 remained the fresh Pages build. No Git operation, installation, external service or deployment occurred during r2.
- Frozen for affected review of this display correction and assertions. Browser/device/AT and individual cleanup-path limits above remain unchanged; no new acceptance or publication is claimed.

## r3 CI follow-up — precise locale navigation completion

Coordinator advanced the same checkout to the pushed PR32 head `19e94e6527755ff449bf5277aa1e8e76bfae2df5`; no executor reset/rebase/Git write occurred. The initially modified board and both review mirrors are protected. New byte snapshot: `/tmp/vctw-exact-search/r3/baseline.json` (270 tracked files).

The supplied [root CI job](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/actions/runs/44446332277/job/135299702669) failed one existing homepage case at its final `page.goto('/zh/')`, after both new search cases passed. Inspected the decoded job log and actual [failure artifact](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/actions/runs/44446332277/artifacts/14494390044) through the GitHub connector. Local trace: `/tmp/vctw-exact-search/r3/ci/reader-V2-home-keyboard-na-f2fa4--text-preserve-usable-links/trace.zip`.

The trace records `Switch to English`, then URL assertion `regexSource: \\/$`, then the next `goto('/zh/')` failing `net::ERR_ABORTED`. That suffix regex already accepts the source Chinese URL `/zh/`, so it does not establish that the English navigation has committed. The Pages prefix makes this false positive less likely because its expected suffix contains the project path. This is evidence of a test synchronization defect; no product change is currently indicated. The bounded correction is to assert the exact destination URL and its actual target document locale/visible homepage H1 before proceeding. Retain existing keyboard, search, language and enlarged-text coverage; no retry, fixed sleep, dependency/config/runtime change or weakened assertion.

### r3 implementation and actual checks

Changed only the existing homepage test's locale-completion assertion. It now requires an exact absolute URL, the target `html[lang]`, a visible `#book-title` and its actual localized title text. Both language directions still use the actual menu link. All earlier keyboard/search/viewport/enlargement/link assertions remain present; the suite remains 32 tests. No product runtime code changed from reviewed r2.

- `npm run check`: lint, strict app/Panda types and 55/55 Node passed. Fresh root build/export/full Chromium: 32/32 passed in 35.0 seconds. Fresh Pages build/export/full Chromium: 32/32 passed in 35.0 seconds. Both exports remain 8 pages/185 references/zh28/en0. Logs: `/tmp/vctw-exact-search-r3-{check,build-root,verify-root,e2e-root,build-pages,verify-pages,e2e-pages}.log`. These supersede r1/r2 checks for the latest candidate.
- Existing Playwright on local `http://127.0.0.1:4179`, root and Pages prefixes; Browser plugin unavailable. The actual formerly failing case now exercises both locale transitions through exact URL/locale/H1 confirmation before the next scripted navigation, then the original 320px enlarged-text steps. Full suites retain search 9→2/signup14, 24-way chapter/section navigation, focus cancellation, UI, no-JS and browser error checks. Refreshed artifacts: `/tmp/vctw-exact-search/r3/{root,pages}/playwright/`. Both include `reader-V2-home-keyboard-na-f2fa4--text-preserve-usable-links/home-320-enlarged.png`; inspected the Pages capture, which retains all three focused-accessible links and no horizontal overflow.
- Supplemental controlled Pages response gate: `/tmp/vctw-exact-search/r3/navigation-probe.mjs`, `probe-pages.log` and `probe-pages.json`, using local port 4181. While the English route was held, the actual source remained Chinese; the former root suffix predicate matched that source, while the Pages-specific predicate did not. After releasing the gate, the exact URL wait completed and the actual English document locale/visible H1 matched. This is supporting predicate/commit evidence, not a claimed deterministic reproduction of the exact early CI gap. An earlier root probe which awaited the old Playwright matcher after a document navigation had already registered timed out instead of reproducing the false positive (`probe-root.log`); the cloud trace is the evidence for that earlier timing window.
- The 270-file PR-head byte snapshot differs only at `tests/e2e/reader.spec.mjs` and this handoff; the other 268 files, including all runtime, source/index/dependency/CI inputs and the initially dirty board/two review mirrors, remain unchanged. `git diff --check` passed. Final export is the fresh Pages build. No Git writes, installation, retry setting, fixed sleep or deployment.

Frozen r3 for affected review and a new exact-head cloud run by Coordinator. Local success does not close the previous failed cloud job or establish the next cloud result. The original browser/device/AT limits remain; no product issue was indicated by the inspected failure trace and actual local checks.
