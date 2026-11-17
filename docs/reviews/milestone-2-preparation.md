# Delivery Milestone 2 — preparation review

Date: 2026-11-17 (Australia/Perth). Reviewer: Coordinator. Gate: technical preparation, not runtime/design acceptance. **Current outcome: preparation r2 Accepted; implementation remains unassigned.** Initial r1 required the clarification retained below. [Developer handoff](../handoffs/developer/milestone-2-preparation.md) is the sole proposal/execution record.

## Actual inspected revision

Read the full119-line submitted proposal, SHA-256 `0dd34ee26d765089d99058f26b4448b13e36700731951847d07279972873251c`, against the shared uncommitted `main@95a6bec69e26cbe13fe9f5d9433ee91e07632091` tree. Compared actual manifest/load/parser/links, chapter reader/home/i18n, export verifier, content/search/i18n/E2E and public-smoke test assumptions, current theme storage and the cited recorded future-design boundaries. These are source/document observations; no runtime feature, live Figma scene, storage implementation or future browser result is accepted.

The proposed reuse of the allowlisted static pipeline, deliberate native Continue action, explicit section bookmarks, conservative changed-source fallback and separation from themes is appropriate for the small reader. Coordinator independently opened [MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and [storage events](https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event) on this date: origin-scoped state, denied persistence and separate writing-window notification support the proposed failure boundaries. Per-record limits/key strategy and entry placement remain project design choices, not platform guarantees or validated reader demand.

## Finding and bounded decisions

**M2-PREP-01 — clarify the verifier split before accepting the implementation plan.** In the `scripts/verify-export.mjs` dependency-map row, “Restrict those checks to G01” currently follows a list containing both source-specific table/code/RFC checks and positional `no-next/prev-opening` checks. Keeping a G01-only no-next assertion would fail the intended third-entry flow. Explicitly separate immutable G01 source assertions from ordered previous/next/last logic for all chapters. State that G01 must gain a next link and only the actual current last entry has no next. Add those concrete cases to the intake acceptance notes. This is a proposal-only clarification; do not edit the verifier or tests now.

Accepted design direction for preparation: (1) deliberate continuation from a quiet home/index entry, no automatic load-time jump or incoming-fragment override; (2) saved sections on existing indexes and save/remove in existing section actions, subject to responsive/live-design composition review before coding; (3) source-hash change falls back to chapter start, removed chapter to index, with explanatory state; (4) local-only disclosure, honest session-only/write-failure and explicit reading-data clearing; (5) B1 continuation before B2 bookmarks, using a bounded public locator projection and isolated storage. These are narrowly accepted recommendations, not a released runtime assignment or an accepted Figma rendering. Do not add a global header icon, drawer, account/sync, parser schema or palette work to make them possible.

## Return and next boundary

Developer should change only its preparation handoff, clarify M2-PREP-01 and resubmit actual hash/affected checks. Keep source/tests/contract/Figma unchanged. A third chapter still needs accepted actual prose and explicit publication metadata/intake assignment; B1/B2 still need a concrete code/design scope and interaction verification. The review does not authorize code, Git writes or deployment.

## r2 affected reinspection — 2026-11-17

Developer submitted r2 SHA-256 `cffa814b1bafcd72ac9943d648818e05d74d6ad04dc5f4e16fb87ce655c1d8ec`. Independently matched the file hash and read the changed verifier row, intake acceptance and revision note against actual verifier107–115. The proposal now explicitly restricts source-shape/citation assertions to G01 and derives navigation for all entries: opening→G01, G01 previous=opening and next=third, third previous=G01 and no next. It forbids preserving a G01 no-next assertion. Relative Markdown destinations and whitespace were checked. No verifier/runtime/test/contract change was performed or accepted.

**M2-PREP-01 closed. Preparation r2 accepted; no outstanding required revision.** Developer's preparation task is complete and its file frozen. This accepts a bounded implementation/design direction and actual source map, not a runtime feature or fresh Figma visual. The previously stated manuscript/metadata/intake and responsive-design/code-assignment prerequisites remain. No implementation, Git integration or publication is released by this closure.
