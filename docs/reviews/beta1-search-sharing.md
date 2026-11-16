# Beta 1 static search and section sharing — review

- **Owner:** Coordinator/Reviewer; 2026-11-16, Australia/Perth.
- **Gate:** Latest-design alignment and subsequent actual implementation review. [Developer task/handoff](../handoffs/developer/beta1-search-sharing.md); [board](../coordination.md).
- **Starting baseline:** local HEAD/main/live remote main `612950a68d0d0b9bfc149b9e2236c7143020d1bf`; clean main verified before creating `codex/beta1-search-sharing`. Preserve disjoint Writer status-document work and Coordinator records.
- **Current outcome:** **Accepted r4; executor task closed.** Actual source/artifact/browser re-review closes SEARCH-01/02. PR/exact-head cloud checks/merge are subsequent Coordinator integration gates; no deployment is authorized or claimed.

## Actual design inspection before assignment

Coordinator inspected the live existing Figma file `3GYIfJz8xSPGx3AE3RRkKi`, including component text/contracts and scene structure. Reviewed screenshots of [narrow search](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=134-458) and [stable links/correction recovery](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=129-466). This is live design evidence, not application or prototype-flow acceptance.

| Source | Inspected contract and application boundary |
| --- | --- |
| SearchFeedback `127:95` | Initial/loading/results/empty/unavailable states; retained query, retry/browse recovery, current-reading-language approved content only. |
| SearchField `139:124`, set `139:134` | Real labelled text input, clear/focus/disabled behavior. Desktop shortcut belongs to the trigger; mobile has no shortcut hint. |
| Mobile search `129:445`, narrow `134:458` | English absence is an availability state with a deliberate Chinese-index route. The lower stacked examples are documentation, not simultaneous runtime panels. Use actual header layout/Close control rather than the specimen's spaced text. |
| SectionActions `127:160`, scene `129:466` | Native stable anchors, copied feedback without focus theft, selectable actual URL after clipboard failure, deliberate GitHub correction draft with real chapter/heading/revision context. |
| Optional copy `134:473` | An AI question-card specimen, **not** the section-link feature. Excluded from this stage. |

UI04 is the Beta 1 source. The separately added Beta 2 palette studies do not expand implementation: production keeps its existing 111-variable mapping, Original default and independent System/Day/Night preference. The live Figma file's 133-variable inventory includes 22 design-only palette additions. No Figma mutation, new design file or sharing-permission change was performed here.

## Acceptance boundaries

Index only the existing approved manifest/parsed sources and real heading IDs; no internal documents, unapproved drafts, fictional English corpus or extra publication input. Reuse semantic roles/recipes and actual content; keep native input/result links and bounded responsive Header changes. Verify search failure/retry and English availability honestly, preserve keyboard/focus/IME behavior, and keep a quiet card-free reading layout. Sharing/correction must use actual current-origin/base-path locations and source hashes without automatic issue/model transmission.

Review actual frozen files and emitted root/Pages artifacts, meaningful source tests, real responsive/theme/browser scenarios, copied/manual URLs and correction context. Recheck previous Appearance/disclosure regressions and inspect screenshots against the named Figma sources. Record findings to the original Developer and require affected re-review. Deployment, optional AI cards, Beta 2/3, new manuscripts/translations and permanent E2E/CI integration remain separate stages.

## Preliminary source inspection, before freeze

Inspected the new index extractor/query/validation functions, static-resource route, SearchControl, section actions/URL helpers, bounded Header/global-style changes and meaningful search/sharing tests. Independently ran the current 28 Node tests: passed. This is provisional source evidence, not final artifact/browser acceptance; owner work is still in progress. The owner separately detected the extensionless static-resource export issue and is correcting it to explicit `.json` resources rather than relying on hosting rewrites.

| ID | Finding and impact | Original owner / required check | State |
| --- | --- | --- | --- |
| SEARCH-01 | The new dialog backdrop used raw `colors.palette.shadowNight` instead of an existing semantic role, fixing the scrim to the Night primitive and bypassing the design's Day/Night alias contract. | Developer: use existing `colors.shadow.overlay`, without adding/renaming tokens; inspect actual Day/Night dialogs and emitted CSS. | Closed r4: corrected semantic reference; independently checked actual Day/Night colors/screenshots and frozen source/artifact hashes |
| SEARCH-02 | Keyboard result selection reached the correct heading URL/viewport position but restored focus to the offscreen Header search trigger. Root G01 → search `状态` → Enter: destination H2 y32, focused trigger y−2939. Subsequent keyboard navigation starts from the Header rather than the result. | Developer: distinguish navigation from cancel/close/outside dismissal; result activation must retain destination-heading focus/context, while cancellation returns the opener. Recheck same/cross-chapter, keyboard/pointer and both prefixes without timing-only acceptance. | Closed r4: twelve independent destination-focus/next-Tab cases; cancellation/Close/outside return separately passed; frozen native implementation and emitted artifacts verified |

## Independent browser review, before final owner freeze

Coordinator's own headless Chrome audit passed **56 cases**: root/Pages × Chinese/English ×1440/1024/768/390/320px ×Day/Night (40), pointer/Enter navigation from the same chapter, other chapter and index under both prefixes (12), plus two-prefix actual loading→HTTP503→retained-query retry and successful/denied clipboard with correction-context checks (4). Actual target-heading focus and the following Tab within the article are assertions, not inferred from a hash or scroll alone. Screenshots of desktop/narrow absence/no-match/results and manual correction recovery were inspected against the live design sources.

Two additional compound checks passed under both prefixes: all six real page routes returned200 and a missing route404; native modal background controls remained inert through22 Tab steps; simulated IME Enter/Escape did not navigate/dismiss; Close/outside cancellation returned focus; explicit Day/Night persisted after reload; malformed fetched index data showed retained-query recovery. Native dialog focus can transition through BODY while browser chrome owns focus; that is recorded separately from an actual background control receiving focus. No custom focus trap is required for that transition.

An initial Coordinator harness used `/en/read/` instead of the actual unprefixed English `/read/` route, inadvertently exercising the shared search on404. Those twenty English observations were superseded by a full rerun with explicit HTTP200/title assertions on the correct routes; the56-case total above refers to that corrected run. Temporary local evidence is supplementary. Browser checks are headless Chromium, with synthetic composition events and clipboard success/denial stubs; no physical IME, Safari/Firefox, native assistive-technology review or real GitHub submission is claimed.

## Final r4 review and freeze

Independently matched all **16 fixed files** in the owner handoff to their SHA-256 manifest; handoff SHA-256 at acceptance is `12bfa4d7319f8b1b14408fbcefe529121dc215972b76ec236675aa025a55bb88`. Both final root/Pages snapshots matched all **54 artifact hashes**. Their static Chinese/English JSON resources contain20/0 entries, with hashes `d2480cf38221e0f4edad2d11dadd337a40904e4369e15cfdf351b704a4acef5e` / `ea8697ba2324996bfccdcb85ca963119e3e88a5c8dddf9250a23de077213cb68`.

Coordinator independently ran `npm run check` (lint, strict application/tooling type checks and28 tests), fresh root build/export verification and fresh Pages build/export verification: both **7 pages /128 local references**, plus both search resources and every real target. Read the actual extractor/matcher/validator, route, dialog, action/URL helpers, Header/renderer/styles, tests and bounded documentation diff. Owner additionally supplies62 final browser cases and16 focused cases; these counts remain owner evidence rather than being relabelled as independent checks.

All previous export-verifier lines remain in order; the design handoff's historical body and Beta2 palette addendum are byte-identical. The two approved manuscript hashes, existing111-variable production tokens/reference, dependency/lock, CI, theme/controller/disclosure code and all31 ignored recovery files are unchanged. Accepted Writer r2's four current hashes still match. Verified66 current-stage local document links and clean whitespace. No new dependency, source manuscript, fictional English content, optional AI card, palette implementation or deployment is included.

No unresolved blocking finding remains for this stage. The literal small-corpus matcher and cross-document native navigation are documented, intentional limits. Permanent E2E/CI integration is the next separately scoped QA stage; other engines/devices, physical IME and assistive-technology acceptance remain unverified. Developer must preserve the frozen files/handoff and stop implementation until a new concrete assignment. Coordinator owns subsequent Git integration and exact-head cloud checks.

## Integration execution record

Accepted payload commit: `73835bdf3db96247ad71436246a88fab5e1d788c`,25 files, based on main `612950a68d0d0b9bfc149b9e2236c7143020d1bf`. [PR #15](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/15) was actually created against main. A subsequent Coordinator-only status commit may record this pointer without changing either frozen executor payload. The PR's execution record carries the actual final reviewed head, required Quality/root/Pages checks, merge result and local-main reconciliation once verified. No future SHA/run/merge is invented in this snapshot. No deployment or protection change.
