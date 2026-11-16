# Beta 1 static search and section sharing — Developer handoff

Owner: Developer. Revision: r4. Date: 2026-11-16 (Australia/Perth). Status: Frozen for Coordinator review. The [board](../../coordination.md) owns assignments; Coordinator owns the [actual review](../../reviews/beta1-search-sharing.md) and Git integration. This is execution evidence, not owner acceptance.

## Task brief

- **Authority/objective:** the author-approved mainline now assigns static search and restrained chapter/section link-copy/correction actions, aligned to the latest live UI04 design. Reuse the merged reader; no deployment.
- **Actual workspace:** `/Users/haixin/Desktop/code/vibe-coding-then-what`, `codex/beta1-search-sharing`, verified HEAD/main/origin-main `612950a68d0d0b9bfc149b9e2236c7143020d1bf`. Only Coordinator board edits existed at startup. Preserve concurrent Writer vision/roadmap/history/summary/handoff changes and Coordinator records. No Developer Git writes.
- **Allowed files:** this handoff; necessary `site/content/**` search contracts/extraction; exported static index resources; bounded search/UI/reading components, Header/layout/i18n; necessary Panda globals/recipes; meaningful search/URL/index tests; export verifier preserving prior assertions; minimal necessary dependencies/lock; developer guide; content-contract implementation/index clarification; design handoff opening status and one bounded alignment paragraph. No other documents or closed reports.
- **Inputs/design:** accepted two-source content contract and current reader/components/themes; live Figma file `3GYIfJz8xSPGx3AE3RRkKi`, task session supplied by Coordinator. Read-only sources: SearchFeedback127:95, SearchField139:124/set139:134, MobileSearch129:445, NarrowSearch134:458, SectionActions127:160, stable-link/correction129:466. No Figma edits. Existing111-variable production mapping is unchanged; Beta2 palette designs remain separate.
- **Content boundary:** index only canonical approved opening/G01 nodes and real heading IDs; actual chapter/heading/locale/source revision and useful plain excerpts. No recursive scan, copied manuscript, new schema/frontmatter/translation, internal docs/plans/reviews/private content or English corpus. Match literal normalized Unicode text without a backend/model/search-engine dependency by default.
- **Behavior:** actual Header trigger and responsive native dialog/input/results; current-language scope; truthful missing English; initial/loading/matches/no-match/failure+retry with retained query. Real close/outside/Escape, focus entry/return, shortcut and keyboard/IME-safe interactions. Copy actual current-origin/prefix URL with success announcement/manual fallback; deliberate editable GitHub issue draft with public chapter/heading/hash/URL only, no submission.
- **Checks:** meaningful query/ranking/locale/heading/index/URL encoding tests plus existing20; fresh root/Pages builds and extended artifact verification; browser Day/Night at1440/1024/768/390/320, real search states/failure retry, links, dialog focus/shortcut/IME/mobile containment, copy success/denial/manual selection and correction context without submitting. Preserve prior Appearance/disclosure fixes, source hashes and31 ignored recovery files; inspect actual screenshots against design.
- **Exclusions/review boundary:** no Writer/book edits, prior handoffs/reviews/board/README/AGENTS/CI, token/compiler/controller changes, palettes/Beta2/3/audio/AI/live service/publication or permanent E2E framework. Freeze actual files/digests/checks/limits here, then stop for Coordinator review; no self-acceptance or next feature. Shared-file delivery suffices if outbound messaging is rejected; do not retry.

## Delivery and implemented behavior

This r4 submission is **16 fixed live files plus this handoff**, no deletions. Source is frozen on the assigned branch/base. No dependency or lockfile change, package installation, Figma mutation, model call, Git write or deployment occurred. Writer's four status documents/handoff and Coordinator's board/reviews remain separate owner work.

`site/content/build-search-index.ts` consumes the already validated `LoadedChapter` trees, not filesystem discovery. Each actual heading starts a record containing chapter/heading IDs and titles, locale, source SHA-256, canonical heading URL and its following plain text. It preserves public attribution/examples/citations but omits internal file paths/review provenance fields. The same approved opening/G01 hash validation governs generation. The force-static GET route emits explicit `.json` files: Chinese has20 real heading records and English has zero. A preliminary extensionless route was replaced before final QA so static hosting needs no path rewrite.

`site/content/search.ts` matches literal NFKC/case/whitespace-normalized substrings. Every whitespace-separated term must occur in heading/chapter/body text; Chinese needs no word-segmentation library. Exact headings rank first, heading mentions receive more weight than chapter/body mentions, ties retain manifest order and at most12 results are shown. Excerpts use up to140 Unicode code points near the first match. This deliberately small matcher has no regex execution, fuzziness, stemming or semantic ranking; compatibility normalization may make excerpt display offsets approximate for unusual characters. The client validates fetched schema/locale/hash shape/local heading URL before accepting data. The exported artifact verifier independently compares the full data with canonical extraction and checks every actual HTML target.

Header search uses existing Button states and a native modal dialog, real input and close button. Fetch starts only on Chinese opening; actual request duration drives Loading. Query survives close/reopen and request/JSON/schema failure; retry reissues the request. Empty input, loading, real matches, no match and unavailable are distinct. English explains its absent corpus and deliberately links the Chinese index without silently fetching Chinese. Cmd/Ctrl+K skips editable fields/composition, focuses the input, and cancellation returns to the opener or prior shortcut focus. Arrows move between input/results; Enter activates a real result; composing keyboard events cannot activate results or cancel the dialog.

Cancellation and navigation are separate. Populated search fields can consume Escape, so a non-composing Escape explicitly closes. Activating a result clears the later opener-restoration callback, immediately closes the dialog and follows a native anchor with the build prefix applied once. Default fragment navigation owns focus at the real destination heading for same-document and cross-document routes; the next Tab stays in the article. Native modal background inertness is retained without a custom focus trap. Chromium may report BODY during a browser-control focus transition; tests distinguish that from a background page control receiving focus and verify keyboard navigation resumes inside.

`SectionActions` is a small details disclosure after each existing source heading; native title anchors remain available, with no repeated default card. Copy creates the actual current-origin/path/encoded-heading URL on interaction, keeping the deployment prefix once and removing unrelated query data. Success announces without moving focus/scroll; clipboard failure/absence offers a visible selectable read-only URL. Correction first previews chapter/title/heading/source hash/actual URL locally, then supplies an editable GitHub issue-draft link. The reader reviews and submits; implementation/testing never creates an issue or attaches private logs. Runtime URL-dependent values appear only after interaction, not during server render/hydration. No manuscript body was copied into components.

Header changes are bounded to fitting the real search trigger alongside long branding/navigation at320px. Existing Appearance/controller and reading-disclosure code are byte-unchanged. Native result anchors and fetch resource URLs prepend the prefix once; normal Next links remain canonical/unprefixed.

## Design alignment and inspected limits

Developer read live design context and screenshots for SearchField139:124, Narrow134:458, SearchFeedback127:95, Mobile129:445 and SectionActions127:160/129:466 in the supplied shared task session. No static asset URL was returned/used, no new SVG/font was authored for this stage, and no Figma edit occurred. The existing111-variable production reference, primitive/semantic values and recipes are unchanged; styles use explicit token expressions and shared Button states.

| Design target | Actual implementation / intentional adaptation |
| --- | --- |
| Separate trigger and SearchField | Header hint only at desktop widths; real native text entry, clear control only with query, no mobile shortcut badge. Existing long brand remains readable. |
| Feedback states | One current state in one surface, not the design's stacked documentation specimens. Empty English corpus is truthful; failure retains query/retry/browse. |
| Geometry and color | Dialog/feedback reuse20px card radius and24px padding; input12px radius/44px target. Semantic Day/Night canvas/surface/border/focus and `shadow.overlay` are used. |
| SectionActions | Quiet per-heading disclosure rather than a large repeated card. Real runtime URL/manual fallback and local correction context replace specimen placeholders. |
| Scope exclusions | No optional AI card, filters, hosted search, automatic reporting or Beta2 palette implementation. Existing design decisions/history/palette addendum are preserved. |

Fresh desktop Day results,320px Night results,320px English unavailable and320px Night manual-copy/correction screenshots were inspected. Titles, actual buttons and excerpts wrap within the dialog/page; controls retain their minimum targets, focus rings and semantic colors. The long result list scrolls locally. Default reading remains card-free; correction preview/manual text expand only on deliberate interaction.

## Actual final verification

All results below refer to the final r4 native implementation and fresh root/Pages exports, not a reused intermediate pass. Environment: Node24.14.1/npm11.11.0, existing Playwright CLI0.1.24 and headless Chrome. Browser plugin unavailable; no personal browser profile was accessed. Only the two named temporary export copies were removed/recreated after builds. Each final snapshot contains54 files, including the two JSON resources.

| Check | Final result |
| --- | --- |
| `npm run check` | Passed lint, codegen, Next route declarations, unchanged strict application/tooling compilers and **28 tests**. All existing20 tests remain; eight new tests cover real index/source/heading metadata, Unicode/literal/case/whitespace matching, ranking/excerpts, locale boundaries, invalid data and sharing/correction URL encoding. |
| Root build/export | `NEXT_PUBLIC_BASE_PATH='' npm run build` and matching `npm run verify:export`: **7 pages /128 local links-assets**, plus Chinese20/English0 index records and real targets. |
| Pages build/export | `npm run build:pages` and `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run verify:export`: **7 /128**, same canonical index data and correct runtime prefix. |
| Full actual browser matrix | **62/62 passed**:40 search flows (two prefixes × five widths × Day/Night × English/Chinese), four loading/error-retry cases, four shortcut/IME cases, twelve clipboard/correction cases and two prior Appearance/disclosure regressions. |
| Final focused supplements | **16/16 passed**: four Day/Night/prefix semantic-color/editable/native-modal cases and twelve result-destination focus/next-Tab cases (three starting routes × pointer/keyboard × two prefixes). |
| Integrity and scope | All earlier export-verifier lines/assertions remain in order. Local doc links and whitespace checks pass. Dependency/lock, source manifest/manuscripts, accepted theme/controller/disclosure/compiler/CI/recipes and31 recovery files remain unchanged. |

The40 search flows verify real200/page identity/meaningful content/no overlay, current effective theme, actual trigger/input geometry, all five widths (1440/1024/768/390/320), absence of page/dialog clipping, no mobile shortcut hint, real state/query/result links, English corpus separation without a Chinese fetch, input/result arrow focus, Enter navigation, clearing, Escape/outside cancellation and correct opener return. Error tests hold an actual request, verify Loading rather than a false no-match, then serve503 or malformed JSON; retry keeps the query and loads real data. Expected injected503 responses are explained test conditions, not claimed ordinary network success. No relevant ordinary page/console/network errors were observed.

Clipboard tests inject success, denied or absent APIs under both prefixes/themes, compare actual copied/manual text with current origin/prefix/encoded heading, verify selection, success focus/reading-position preservation and inspect the real issue-draft query. No GitHub link is opened or submitted. Existing Appearance immediate-open→resize focus, explicit choice/refresh/System and both reading-disclosure resize→main-focus behaviors pass on the changed Header.

The focused16 cases inspect actual `::backdrop`: Day `rgba(16,44,36,0.08)` and Night `rgba(0,0,0,0.4)`, equal to the resolved semantic overlay; dialog20px radius/24px padding and input12px radius/44px height match. They verify editable-field shortcut protection, modal background focus rejection and native keyboard resumption. Result focus is checked after pointer and keyboard selection from G01 itself, the opening and the Chinese index, with actual destination H2 focus and next Tab inside the article. This addresses SEARCH-02 beyond scroll-only assertions.

Final evidence is supplementary under `/tmp/vctw-search-sharing/`: `browser/result-audit-final-r4.json` (62), `result-supplement-final-r4.json` (16), executable audit/supplement scripts and representative screenshots. `root-export-r4.json` / `pages-export-r4.json` inventory the54-file snapshots. Chinese JSON is30,996 bytes with SHA-256 `d2480cf38221e0f4edad2d11dadd337a40904e4369e15cfdf351b704a4acef5e`; English is40 bytes, SHA-256 `ea8697ba2324996bfccdcb85ca963119e3e88a5c8dddf9250a23de077213cb68`. Both prefixes emit byte-identical JSON because Next/native rendering applies prefixes at actual link/fetch boundaries, not in canonical index data. Preview script `serve.py` mounts root at `http://127.0.0.1:44771/` and Pages at `http://127.0.0.1:44772/vibe-coding-then-what/`; static404 behavior is preserved.

Limits: one local browser engine, simulated composition events rather than a physical IME, no Safari/Firefox/physical-device or assistive-technology certification. Interaction enhancements require JavaScript and native dialog/accepted Popover support; semantic reading/heading anchors remain static. No FCP benchmark, full search engine, persistence across document navigation, permanent E2E framework, cloud CI or deployment is claimed. The matcher is suited to the approved small corpus. A future corpus/translation/index change requires its own content authorization and review.

## Findings and revision history

| Finding | Owner correction and actual final evidence | Coordinator closure |
| --- | --- | --- |
| SEARCH-01 | Replaced raw Night scrim primitive with existing `colors.shadow.overlay`; final computed Day/Night values above match the semantic role in both prefixes. No token addition. | Pending final r4 review. |
| SEARCH-02 | Cancellation restores prior focus; navigation suppresses the late callback and uses native prefixed anchors. All12 same/other-chapter/index pointer/keyboard destination/next-Tab cases pass, alongside normal cancel-focus checks. | Pending final r4 review. |

Earlier evidence is retained honestly. Initial matrix r1 had22/62: all40 basic flows stopped when a populated search input consumed Escape instead of closing. A targeted reproduction located that wait; explicit non-composing Escape close fixed it and the one-case affected rerun passed. Intermediate r2 and r3 full matrices passed62/62, but their result checks established scroll only; Coordinator then observed SEARCH-02 with target H2 at y32 while focus returned to an offscreen Header button. Those intermediate counts did not close destination focus.

An initial supplemental probe failed before exercising UI because it assigned an invalid empty `contentEditable` DOM property; the harness now uses the valid empty HTML attribute. Later supplements had12/16: the twelve destination-focus cases passed, while a strict contains(activeElement) assertion treated native BODY/browser-control transitions as background page focus. A brief custom Tab-cycle experiment was removed on Coordinator feedback; it is not in final source or artifacts. Final tests instead assert actual page-background controls remain inert and keyboard navigation resumes inside the open native modal, while preserving the strict destination-focus/next-Tab criteria. These corrected semantics passed16/16 without a custom trap. Intermediate logs are not final acceptance.

## Documentation and frozen files

The [developer guide](../../../site/DEVELOPMENT.md) describes actual resources, matching/ranking limitations, native control/focus semantics, prefix handling, copy/correction behavior, tests and review/release boundaries. The [content contract](../../content-contract.md) changes only current implementation/index-scope clarification; approved sources/hashes/routes and publication gates are unchanged. The [design handoff](../../design/reading-experience-v1.md) changes only its opening status paragraph plus one bounded alignment paragraph. Everything from Current design sources onward, including all Beta2 palette additions and historical evidence, is byte-identical to the stage baseline. No closed handoff/review was rewritten.

Opening/G01 hashes remain `244c4f7a9ddeb781d8530691d07ba17b9daccf611b9631ea60faa412b87a6d90` / `b928e5df21876c0ca49a3c227eb6c7e20723b3f22bb9c7cb2d560cc198db62d2`. The preserved DS01 checkpoint/recovery is untouched. Coordinator requested shared-file delivery if outbound messaging is rejected; this handoff/final response is sufficient for review. No outbound message was attempted in this stage.

The following16 fixed files identify r4, excluding this evolving handoff to avoid a self-hash loop. Machine-readable copy: `/tmp/vctw-search-sharing/developer-r4-fixed.json`. No deletion or generated file is included.

| Path | SHA-256 |
| --- | --- |
| `docs/content-contract.md` | `0b2ef4743c2ec9ec231da4bdf6fe15c7f7596f427cf04214560ec53469595a1f` |
| `docs/design/reading-experience-v1.md` | `6f53c9c4dc597319636f2eb081fb722c3f13ec630a86977af816ef1571ebf2b7` |
| `site/DEVELOPMENT.md` | `d679f5d277b41b4b167a986360bfc825527f766e1ca48990b0924db0049409a1` |
| `panda/global-styles.ts` | `08e40f5bc74b2c1ed7512326579a480bbaa28b53191797bdcb59547f51c47520` |
| `scripts/verify-export.mjs` | `f43361c999083ae849a46842b7261c2e67df5242401f2d624a4b4144ef633a39` |
| `site/components/site-header.tsx` | `1f42a7a8c37ec9845603876695f1b77a67b95b2858940c3984d98df2c9aeb538` |
| `site/components/reading/chapter-reader.tsx` | `a3863d5bbdfaa1aaffd2ff88d52f38dfede23453203501c7f5125aa235a962e8` |
| `site/components/reading/markdown-content.tsx` | `48793d914080472b888bb3a4e0f6a1c725a1a8590da56bde89b604fc4fe1ee47` |
| `site/components/reading/sharing.ts` | `805db37077e1813e3542bb53e712d9caabe72938e6f24d3adb0ee3907628d008` |
| `site/components/reading/section-actions.tsx` | `740a909a60b80fc53ff3fc3f605fc433fe57e00105ca9373ee2238a9e93839a2` |
| `site/components/search/messages.ts` | `17989399203bc2189ee081e2aaef533505efedd6ce91fd7a3b20b0701014419c` |
| `site/components/search/search-control.tsx` | `ac2364200a777e792e3667176bc38d702e07361cd39aa21414214cca73b84706` |
| `site/content/search.ts` | `028aefb1ee15aaecf3e27d092c45ab04258660e61bb03df2897582d21961bfa0` |
| `site/content/build-search-index.ts` | `db50cbf22e7f254a856dea0a1c0b1c96c1fb7a320890df75542823f46c90a8e1` |
| `site/app/search-index/[locale]/route.ts` | `2303cc063843d677ce6f40871a30525a5f47d51a3aaf8d358ce96c1564ec5e02` |
| `tests/search-sharing.test.mjs` | `ada8b828eb70ea63a4768ed188beec9aeefe2c3c444bad39865be1ff1fdc2c96` |

## Recovery checkpoint

- **Done:** scoped static indexes/search/dialog/sharing/correction preview, required owner revisions, bounded documentation, final checks/screenshots and frozen manifest. No pending owner implementation is concealed by the review boundary.
- **Actual tree:** `codex/beta1-search-sharing`, HEAD/main baseline `612950a68d0d0b9bfc149b9e2236c7143020d1bf`;16 fixed owner files plus this handoff, all uncommitted. Preserve separate Writer/Coordinator files. No stage/commit/push/merge/reset/branch switch by Developer.
- **Last verification:** final check28/28, fresh root/Pages build/export7/128 plus20/0 indexes, browser62/62 and focused16/16, protected-source/recovery/doc-link/whitespace checks. Supplemental screenshots/artifacts are under the named temporary directory; previews remain available for Coordinator.
- **Not done:** Coordinator acceptance of final r4, PR/exact-head cloud checks/merge/deployment, other browser/device/physical-IME/accessibility certification, permanent E2E/CI work or next features.
- **Next:** Coordinator reads shared handoff/actual files and records acceptance or returns scoped findings in its review. Keep source frozen; resume only those corrections or an explicit new assignment. No AI/palette/Beta2/3, manuscript/translation, Git integration or deployment continuation.
