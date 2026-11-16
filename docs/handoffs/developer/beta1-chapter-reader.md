# Beta 1 initial chapter reader — Developer handoff

Owner: Developer. Revision: r3. Date: 2026-11-16 (Australia/Perth). Status: Frozen for Coordinator review. The [board](../../coordination.md) owns assignment status; Coordinator owns the [actual review](../../reviews/beta1-chapter-reader.md) and Git integration. This is an execution record, not owner acceptance.

## Task brief

- **Authority/objective:** Coordinator explicitly assigned the next author-approved Beta 1 stage after PR13 merged. Build a real static reader for the two reviewed Chinese sources, using accepted UI04 components and themes. No search, section actions, AI, translations or deployment.
- **Workspace/baseline:** `/Users/haixin/Desktop/code/vibe-coding-then-what`, `codex/beta1-chapter-reader`, verified HEAD/main baseline `a96fd2134c09989667a16d728a9f1b00f21c6580`. Only Coordinator board/component-review edits existed at startup; preserve them. Developer performs no Git writes.
- **Allowed files:** new `site/content/**`; new Chinese `zh/read/[slug]/**` route; reading-index/home only availability/entry; language-switch/layout/Header only necessary navigation/composition; reading components; necessary i18n; Panda config/globals/recipes; minimal compatible parser dependencies/lock; export verifier preserving all prior checks; meaningful parser/manifest/heading/link safety tests; site developer guide; design handoff opening implementation-status paragraph only; content contract obsolete renderer-status prose only; this handoff.
- **Excluded:** book/prose/planning, README/vision/roadmap/AGENTS, board/reviews, prior handoffs, CI, theme controller/hook/token mappings/compiler relaxation. No recursive scan, frontmatter rewrite, copied JSX manuscript, raw HTML/MDX execution, paid service, Git integration or deployment.
- **Inputs:** accepted UI04, theme/component reviews and [content contract](../../content-contract.md). Read both complete Markdown sources. Exact allowlist/order: opening `book/drafts/zh/00-before-we-start.md`, SHA-256 `244c4f7a9ddeb781d8530691d07ba17b9daccf611b9631ea60faa412b87a6d90`, `/zh/read/before-we-start/`; G01 `book/drafts/zh/01-a-page-and-a-system.md`, SHA-256 `b928e5df21876c0ca49a3c227eb6c7e20723b3f22bb9c7cb2d560cc198db62d2`, `/zh/read/a-page-and-a-system/`.
- **Acceptance:** validate manifest identity/order/containment/source hash; safe semantic Markdown, one source H1, remove only exact stale preamble, preserve attribution/caveats/citations/diagrams. Deterministic duplicate-aware heading IDs, allowlisted relative links, same-manifest previous/next. English entry truthfully labels Chinese drafts and chapter language switch returns English index. Both prefixes, real static404, accessible responsive book navigation/outline,704px prose, local table/pre overflow, no fake planned routes.
- **Checks:** meaningful source/parser/link/heading/safe-HTML tests; lint/strict compilers/tests; root+Pages build/export with extended assertions; exact fresh production browser previews at1440/1024/768/390/320 Day/Night, long content/anchor/navigation/mobile focus/Appearance/refresh/System/bilingual404 and errors; actual screenshot inspection. Preserve31 ignored recovery files. No synthetic performance claim.
- **Delivery boundary:** freeze exact files/digests, checks and limits here; Coordinator independently reviews and returns scoped findings. No self-approval or automatic next feature.

## Delivery and source boundaries

The earlier interruption preserved the implementation without acceptance. Actual execution resumed on 2026-11-16 following the author's mainline resumption, with the assigned branch/HEAD and disjoint owner changes verified. This final r3 submission contains **22 fixed live files plus this handoff**, with no deletion. The shared design file also contains Coordinator-owned palette additions; only its opening Target versus implementation paragraph belongs to this reader stage. Preserve that addendum, the palette spec/review, board and all review records. No Developer Git write occurred.

- `site/content/manifest.ts` defines exactly the two approved inputs, with identity/locale/slug/title/order/source/status/review/hash. Validation rejects duplicate identities/routes/sources, invalid or non-increasing order, malformed paths/slugs/hashes and absent provenance. No recursive book discovery or Writer frontmatter change.
- `load-book.ts` resolves filesystem paths within `book/`, reads bytes at build time, checks the reviewed SHA-256 before parsing, and checks the single source H1 against the manifest title. Missing files, drift and escaping symlinks fail rather than silently render. `book.ts` deduplicates this work within a React server-rendering pass.
- `markdown.ts` parses CommonMark plus table syntax into typed nodes. Only supported semantic nodes are accepted; raw HTML/images/unsupported extensions fail. `links.ts` permits ordinary HTTP/HTTPS/mailto citations and rewrites relative Markdown links only through the allowlist and real heading IDs; unsafe schemes, control characters, protocol-relative links and unapproved destinations fail. There is no MDX, arbitrary HTML injection, model call or browser Markdown fetch.
- Source paragraphs, headings, lists, emphasis, tables, citations and fenced text remain canonical. Only the exact stale preamble immediately following H1 is omitted; substantive/later blockquotes survive. The opening has eight heading IDs/seven outline entries; G01 has twelve/eleven, four unchanged preformatted blocks and two tables. Unicode/NFC heading IDs handle duplicates and collisions deterministically; native heading anchors and outlines use the same IDs.
- The static Chinese `[slug]` route generates only the two reviewed chapters, with source-derived metadata and one H1. Home/index availability is truthful in both languages. English has no invented article or translation: its index labels the Chinese drafts, and chapter language switching returns to that English index. Previous/next/current navigation comes from the same reviewed order; G01 has no unwritten next chapter. The eight-part planned map remains nonlink text.
- `ChapterReader` composes accepted navigation/outline/code/table primitives around a card-free article up to 704px. Desktop uses a 248px book rail and outline; 1024px retains a 224px book rail, 768px hides fixed rails with 32px gutters, and 390/320px uses 20/16px gutters. Native details provide on-demand navigation, keyboard activation, Escape/focus return and close-on-link behavior. No Search/AI/resume/audio/section-action or palette control is rendered.
- Original G01 text diagrams/examples remain exact preformatted text with context labels and local scrolling. No replacement teaching graphic or copied JSX body was invented. `ComparisonTable` changes only its header title type from string to ReactNode so supported inline semantics survive actual composition.

Three necessary runtime dependencies were pinned: `mdast-util-from-markdown` 2.1.0, `mdast-util-gfm-table` 2.0.1 and `micromark-extension-gfm-table` 2.1.2, with direct development type dependency `@types/mdast` 4.0.4. Official npm metadata and the maintainers' [parser](https://github.com/syntax-tree/mdast-util-from-markdown) / [table-extension](https://github.com/syntax-tree/mdast-util-gfm-table) documentation were checked. Only table extensions are enabled, rather than a complete GFM feature set. Installation and `npm ci --no-fund` succeeded before the interruption; the final lock adds 43 package entries and changes no pre-existing locked package version. Final production-only audit reports zero vulnerabilities; the existing seven moderate development-chain entries were not forced away.

Read-only Figma design context and screenshots for desktop `4:115` and narrow `25:311` informed composition. Accepted components and existing local-font preferences were reused. Intentional scope differences: actual Chinese manuscripts replace English specimens; source diagrams remain text; existing Header/Appearance remains integrated; fake Search, future section controls and optional AI cards are omitted. No Figma write, new asset/font, token mapping, compiler relaxation or palette implementation.

## Actual final verification

These are resumed local checks against final r3 sources, not reuse of pre-interruption passes. Environment: Node 24.14.1/npm 11.11.0, existing headless Chrome through Playwright CLI 0.1.24. Browser plugin unavailable; no personal Safari/Chrome profile was used. Both named temporary export directories were removed and recreated from their corresponding fresh build before final tests, each containing 53 files.

| Check | Final actual result |
| --- | --- |
| `npm run check` | Passed ESLint, Panda/Next generation, unchanged strict application/tooling compilers and all **20 tests** (nine content, four routing/deployment, seven theme). |
| Root build and verifier | `NEXT_PUBLIC_BASE_PATH='' npm run build` and matching `npm run verify:export` passed: **7 HTML pages / 120 local links-assets**. |
| Pages build and verifier | `npm run build:pages` and `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run verify:export` passed: **7 / 120**. |
| Final production browser matrix | **64/64 passed**: 40 chapter cases (two routes × two prefixes × five widths × Day/Night), eight keyboard-disclosure cases, twelve resize/close/focus/reopen cases, two Appearance cases and two entry/pagination/language/404 flows. |
| Affected focus subset | **12/12 passed** on final exports before the full matrix: both responsive controls, both prefixes/themes and relevant 320→1024/1440 transitions. Requires actual closed state plus visible `main` focus; separately checks that an explicitly focused Header link retains focus and controls reopen/Escape normally. |
| Targeted supplements | **8/8 passed**: four native-details-before-hydration cases (two controls × two prefixes, script loading held/released explicitly) and four narrow technical-reading cases (two prefixes × Day/Night). |
| Emitted CSS | Both final exports contain the real `zh-h2` font family, weight 700, 22/34px desktop and 24/32px narrow override; expanded-tools display is restricted to max-width 1199px. No unresolved role literal or `token(...)` macro was found in reader rules. Computed H2 values passed in all 40 chapter cases. |
| READ-03 safe-text probe | Using actual React escaping and the verifier's real attribute helper, `data-chapter-id` is excluded from the DOM-ID inventory; escaped script/id/onClick text is accepted; a real onclick attribute is detected. Final verifiers also inspect actual exported IDs/skip targets/anchors. |
| Scope and integrity | All original export-verifier lines remain in order. Local doc links and `git diff --check` pass. Manuscripts, accepted tokens/reference, controller/hook, app/tooling tsconfigs, CI, global.css, recipes/config and prior handoffs are unchanged; all 31 ignored recovery files match their manifest. |

The 64-case flow checks actual 200 responses, page identity/lang, exactly one source H1, meaningful body, absence of framework overlay, draft/AI attribution, expected rails/gutters/prose width, source diagrams/tables, local containment, no whole-page horizontal overflow, correct Chinese H2, real/current/planned links and no invented next/English page. It exercises keyboard details activation/Tab/Escape, anchor navigation and actual target focus, close/reopen across breakpoints, Appearance immediate-open/resize/Escape/refresh/System-following, English entry to both Chinese chapters, pagination, language fallback and actual HTTP 404 with bilingual recovery. No relevant page/console/request error was observed; expected missing-route HTTP404 is excluded from request-error counts.

The eight supplements explicitly hold framework JavaScript, open/focus native details, cross the breakpoint, then release scripts and require closed details plus visible `main` focus. This verifies the mount-time reconciliation without a timing sleep. Technical cases focus/keyboard-scroll original pre/table regions and force clipboard denial, verifying exact manual-copy bytes and text selection. At 320px the timeline measures scrollWidth539/clientWidth286 and the first table345/288, with no page overflow. These are layout observations, not performance measurements.

Fresh screenshots inspected: desktop Day G01, 320px Night G01, 320px Day opening with author/AI attribution, and 320px Night table/timeline in page context. Long Chinese titles wrap, body is card-free, normal table words retain useful widths, and technical content scrolls within its region. Header remains the accepted current implementation rather than a new redesign. Focus rings are visible on the table/navigation controls.

Temporary evidence under `/tmp/vctw-chapter-reader/` is supplementary. `browser/result-final-r3.json` is the 64-case report; `result-resize-fixed-r3.json` the affected 12-case subset; `result-extra-final-r3.json` the eight supplements; `css-final-r3.json` emitted CSS inspection. `root-export-final-r3.json` and `pages-export-final-r3.json` inventory the exact 53-file artifacts. Final G01 HTML SHA-256: root `df7932e96ec73e4d5084b58c0c4c386e2bd86acbd371c820b07ea7cd1567fb42`; Pages `b6561f3399e86377ee7f37e365568e9f0dd82d438da784834340f1e7a18c1ee2`. Preview script `serve.py` mounts root at `http://127.0.0.1:44761/` and Pages at `http://127.0.0.1:44762/vibe-coding-then-what/`; it returns actual exported404 with HTTP404 for missing slugs.

Limits: one local browser engine, not Safari/Firefox, physical-device or full assistive-technology certification. No numerical FCP benchmark, deployment, cloud CI or merge is claimed. Native Popover API is the accepted existing Appearance requirement. Reference-style links, images and further Markdown extensions are unsupported until separately scoped. This stage adds meaningful Node content tests but no permanent E2E framework; the later QA stage remains separate. Default fonts use existing system fallbacks; no exact Figma glyph match is claimed.

## Review responses and failure history

| Finding | Actual owner correction and evidence | Coordinator closure |
| --- | --- | --- |
| READ-01 | Uses existing `zh-h2`, without adding a duplicate token. Both emitted CSS audits and all 40 final chapter computed-style cases verify the actual Chinese font role/sizes. | Pending final r3 review. |
| READ-02 | Expanded-tools display is media-scoped. Mounted resize cleanup closes hidden open details, restores `main` when focus is contained or already blurred to body, preserves other explicit focus, and reconciles a pre-hydration breakpoint on mount. Final affected12/full64/supplement8 passes above. | Pending final r3 review; owner does not self-close. |
| READ-03 | IDs and event checks inspect actual opening-tag attributes rather than data-* suffixes or article text. Every old verifier assertion is preserved; both final7/120 exports and the safe-text probe pass. | Pending final r3 review. |

The original interrupted run had **52/54**, failing hidden mobile-disclosure focus; it is not a final pass. On resumed exports before the final focus correction, the strengthened full run had **54/64**. A separate twelve-case diagnostic had **1/12** and recorded eleven failures with details already closed but `document.activeElement === BODY`, after waiting for the combined closed/main-focus condition. Example exact flow: fresh context at root or Pages G01,320px → keyboard-open chapter/outline details → focus its first link → resize1024/1440 → condition times out after8000ms. This distinguishes a native cleared-focus outcome from simply sampling before a handler. Single runs and Coordinator's independently observed hydrated/cold passes did not reproduce every failure; that variation is retained as evidence, not used to discard the failed cases.

Pre-fix disclosure source SHA-256 was `c9369f2726a0a46acfafeef1ef406434d8981556604a20bbaa40010c0a0cc901`, matching Coordinator's preserved interruption inventory. The failing resumed root G01 HTML was `ce24c0f53b8dd71417b62b22a9c03e748c85239ab335672de9131624fcc62c0f`; Pages was `1cad982e32da10d733201e2a6dafe82bf5d2168216c158102d03b92faf9c2657`. Their 53-file manifests remain in `root-export-resumed.json`/`pages-export-resumed.json`; diagnostic reports are `browser/result-resumed-r2.json` and `result-resize-diagnostic.json`. The temporary old directories were replaced only after those runs finished. Final disclosure SHA-256 below and final artifact hashes above identify the corrected revision separately. The body-focus branch fixes the observed behavior; mount reconciliation additionally protects native pre-hydration interaction and has its own explicit supplement.

One resumed outbound status message was rejected by automatic approval review for insufficient authorization for that specific cross-chat send. It was not delivered or retried. Coordinator explicitly directed delivery through this shared handoff and the final response; it can read both directly, so no implementation/review task remains blocked by that messaging restriction. No claim of a new cross-chat handoff send is made.

## Documentation and preserved work

The [developer guide](../../../site/DEVELOPMENT.md) now records actual source-to-page behavior, parser dependencies, seven-page verification, 20 tests, component composition and limits. Only obsolete renderer-status prose changes in the [content contract](../../content-contract.md); its two reviewed hashes, routes, order and all agreed behavior remain unchanged. Only the opening implementation-status paragraph changes in the [design handoff](../../design/reading-experience-v1.md) for this stage. Coordinator's separately authored Beta 2 palette addendum and its full-file hash are preserved, not attributed to Developer or implemented in production.

Opening SHA-256 remains `244c4f7a9ddeb781d8530691d07ba17b9daccf611b9631ea60faa412b87a6d90`; G01 remains `b928e5df21876c0ca49a3c227eb6c7e20723b3f22bb9c7cb2d560cc198db62d2`. Both DS01 refs still name the preserved checkpoint `4da2578048f8df113fed92d99e084f644a9a788e`. No prior report, manuscript, content decision, existing 111-variable production mapping or palette design was rewritten by Developer.

## Frozen fixed-file SHA-256 manifest

The following 22 files are fixed r3; this evolving handoff is excluded to avoid a self-hash loop. A machine-readable copy is `/tmp/vctw-chapter-reader/developer-final-r3-fixed.json`. The shared design-file digest includes preserved Coordinator changes outside the single assigned paragraph; all other Coordinator files are excluded.

| Path | SHA-256 |
| --- | --- |
| `docs/content-contract.md` | `a8056fc7a60b0ab2b514fd792158e2652194e1d13e0f9746c4ab16889658c713` |
| `docs/design/reading-experience-v1.md` | `129c8dd41161673022baca28265edfd996addfbdd443290a2b2c358c66a7ec36` |
| `package.json` | `93bb85d7ef0a66f3c6f117adcbab9bf53466a05d7af9d341529b78aebd01eb42` |
| `package-lock.json` | `ba00fc7643b3b16152e79fcf5a2288402cbfef1475c0a358aeeee0d81d10543f` |
| `panda/global-styles.ts` | `1dc6085964c5cc3c20b418eb9f0a79d67d12ebf35fc3d44545ecb7009333fdf2` |
| `scripts/verify-export.mjs` | `863a499d05296845850d419ad341863ee0f936de1d2d79d8531f3b266cef3916` |
| `site/DEVELOPMENT.md` | `8ab79e054f32df3b5843da3bc756efe14c3d6c286039f3aa6900853d3662e2fb` |
| `site/components/home-page.tsx` | `5d9dbda44168aef5af30007fc8392336dcb1dee4eacf2109cdf7a8e850c472ab` |
| `site/components/reading-index.tsx` | `48cf4f5d3deffa3f6568297f9609aed55de2595cd5ca490e1c925f10c669b336` |
| `site/components/reading/comparison-table.tsx` | `267882cfc10f4879d07967a4b508e893a51ac57c1e02217f084d93d0208b88ff` |
| `site/config/i18n.ts` | `db1df83873ace9413c3c813a98b8b707aad9eae98ca2ef93697a740a849936b8` |
| `site/app/(chinese)/zh/read/[slug]/page.tsx` | `0ad411b40a5d099f9636f3e3dd517def2f9f160481adcf274a93f4649b299fc3` |
| `tests/content.test.mjs` | `073a32eb048a79df834c8082aca9db64c0fe0d257249026c853e84cc7798d6d8` |
| `site/content/book.ts` | `e44495ec6d88fbe082904183c1420063302aa92809e2ef5bc1ce46ab79948d24` |
| `site/content/links.ts` | `dae320b48b6b43613f4a79e0657323b26060e30bbead1439b721e38b9c286cfb` |
| `site/content/load-book.ts` | `982c4a7ce4c2745095dd5be14c26d57ad688032223fd4dd4ef38752337369ce4` |
| `site/content/manifest.ts` | `7fe10de1193c96595ac770986dfe205a0073391799b4e0c8c80a7eb02dcd99be` |
| `site/content/markdown.ts` | `8bc777174eddfc406785a49211189e9e4f571d161bf5e9c8a6cf2e1326fff4ff` |
| `site/components/reading/book-navigation.tsx` | `c3466863f43f4f422bf34d8adfb8a72831074c2224df2f9ff331afa90f5a7530` |
| `site/components/reading/chapter-reader.tsx` | `1e9d38d42868db65f37ad5eb87e34a05d97441c2d197c5da2989089501efcdc9` |
| `site/components/reading/markdown-content.tsx` | `656aa935b756ba91531d0c532b05a5c248850f60e0aa1c6684ad742c7b3182a2` |
| `site/components/reading/reading-disclosure.tsx` | `f2b06467e422a0e190f3fd6883489bca803521c875ae1c950c58c653988adbfc` |

## Recovery checkpoint

- **Done:** two-source static reader, canonical metadata/anchors/navigation, honest bilingual entries, responsive composition, READ-01–03 owner corrections, current implementation docs and final local checks/screenshots. Fixed source is frozen r3 on `codex/beta1-chapter-reader`, HEAD/base `a96fd2134c09989667a16d728a9f1b00f21c6580`.
- **Uncommitted work:** 22 fixed files above plus this handoff. Preserve all separate Coordinator board/review/palette files and the shared design addendum. No Developer staging, commit, push, branch switch, reset or merge.
- **Last verification:** final check20/20; fresh root/Pages build/export7 pages/120 references each; affected focus12/12, complete matrix64/64 and targeted supplements8/8; CSS/safe-text/source integrity/local links/whitespace checked. Final screenshots and immutable source/export inventories are supplementary under the named temporary directory.
- **Not done:** Coordinator acceptance of this final revision, cloud CI, PR/merge/deployment, other browser/device/accessibility certification, permanent E2E/search/section actions, new manuscript/translation/AI/audio or Beta 2 palette implementation.
- **Next:** Coordinator reads this shared handoff, compares actual frozen files and records acceptance or scoped findings in its review. Developer resumes returned corrections only or a new explicit assignment. Recheck current board/HEAD/status on recovery; do not rewrite accepted earlier reports or infer the next feature from a roadmap.
