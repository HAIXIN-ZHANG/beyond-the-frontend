# Independent review: quality findings r1

Date: 2026-11-17 (Australia/Perth). Reviewer: original quality reviewer. Outcome: **accepted for the bounded corrections below**, subject to the stated verification limits. This is source/design review only; no Git integration, CI acceptance, or deployment is implied.

## Reviewed revision

Shared checkout `/Users/haixin/Desktop/code/vibe-coding-then-what`, branch `main`, HEAD `95a6bec69e26cbe13fe9f5d9433ee91e07632091`. The submitted revision is an uncommitted working tree, not HEAD itself. The developer handoff `docs/handoffs/developer/quality-findings-2026-11-17.md` has SHA-256 `0904b3b1aee9f1d6c06d8f5d8e7493d2fe5798096ffb02e1b586a8ca5ee90e3f`; all 14 payload hashes in its manifest independently matched on review. This review record is separate from that manifest.

## Findings and disposition

No blocking finding was established in the reviewed scope.

1. **Search completeness and count:** reviewed removal of the 12-result truncation and actual dialog count. Independently queried the Pages export: 报名 yields 14 distinct destinations. Independently reran the Pages Chromium suite, including its count, final-result keyboard reachability and activation case.
2. **Unicode excerpts:** inspected grapheme-based source mapping and independently reproduced the former ligature fixture; the result now includes `needle` and original surrounding characters. The regression suite covers its additional synthetic boundaries. This is not a claim that the current manuscripts were corrupted.
3. **Mobile search density:** inspected the actual implementation, independently reran the browser case, and visually inspected the executor's 390px capture. Results are shorter and matching text is highlighted. A real screen-reader review remains outstanding.
4. **Nearby navigation:** inspected sticky positioning, measured height and disclosure behavior; independently reran the Pages browser case including text enlargement and heading placement. Inspected the executor's mobile screenshot: the explicitly opened panel covers part of the article. Accept this bounded, dismissible overlay tradeoff for this correction; it is not evidence that no prose is ever covered.
5. **Home discovery:** inspected the home component and English screenshot; the two linked destinations are Chinese and English absence is explicitly disclosed. The independent Pages browser case exercises both locales and actual destinations.
6. **Search design states:** independently retrieved Figma renders for nodes `129:445`, `134:458` and `239:1026`. The first two now show the no-English-corpus state, and the matrix distinguishes the six states at two widths. This visual review does not certify the prototype interaction behavior.
7. **Catalog design:** independently retrieved Figma renders for `129:392` and `129:405`; both chapters have visibly separate underlined link treatments and the Chinese-language boundary is explained. The `239:1026` render contains adjacent link-state/target annotations. Live prototype destinations and keyboard behavior in Figma were not independently exercised.

## Independent verification

- `npm test`: 42/42 pass with loopback access.
- `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run verify:export`: pass; 7 pages, 132 links/assets, zh 20 and en 0. This checked the already-built Pages artifact; it was not an independent rebuild.
- `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run test:e2e`: 15/15 pass in local Chromium against that Pages artifact.
- `git diff --check`: pass. Independently verified handoff SHA and all 14 listed file hashes.
- Executed direct search checks for 14 unique real destinations and the synthetic normalized excerpt.
- The desktop home, mobile search and mobile open-outline visual assessments above used the executor's saved captures, not fresh independent captures. Figma screenshots were freshly retrieved during this review.

Root-path build and E2E, Safari, Firefox, physical devices, screen readers, native zoom/OS font scaling, cloud CI and the deployed site were not independently checked. The executor reports separate root and Pages builds and tests; those are executor evidence rather than independent results. `Intl.Segmenter` support on older browsers remains a compatibility boundary. Complete-result rendering may need reassessment as the corpus grows. No changes to implementation, manuscripts or Figma were made by this reviewer.

## Next boundary

Return this review to the execution owner. Changes to the reviewed working tree or design require affected re-review. No commit, merge or publication is authorized by this review.
