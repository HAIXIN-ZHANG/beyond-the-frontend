# Exact chapter-title search — affected review

Coordinator/Reviewer, 2026-11-19 Australia/Perth. [Developer handoff](../handoffs/developer/m2-exact-title-search.md). Candidate in `/private/tmp/vctw-m2-exact-title-search`, based on integrated main `7fcb8c404243b6cee043c8cf92debf387ab74a06`. No release was included in this review.

## Baseline and first feedback

Rechecked the actual previously approved Chinese index. The full title of Browser Fundamentals returned nine section links, eight inherited from the chapter title. One H1 was a genuine heading match. The query “报名” returned 14 distinct section links.

In the first implementation candidate, independently checked the real two destinations, normalized title variants, distinct same-title chapters, genuine section matches across heading and body fields, and normal partial queries. These passed. One reproducible boundary was returned to the Developer: a synthetic 12-term exact title yielded a genuine H1 score of 264, so the fixed 200 score ranked its grouped chapter link second. Explicit chapter-first ordering must work without changing ordinary section ordering. The pending cross-page focus action should activate only on the intended full route and relinquish after failure or unmount. The independent probe is `/private/tmp/vctw-exact-search-review/independent-results.mjs`.

Verify the frozen payload, true result counts, distinct section and chapter links, focus and existing language/Unicode behavior before acceptance.

## r1 functional verification and visual feedback

The exact r1 handoff and all six payload digests matched a clean archive of `7fcb8c4` with only the Developer files applied. Independently ran `npm run check` (55 Node tests, lint, strict types), fresh root and Pages export verification, and 32/32 Chromium at each base path. The independent script confirmed chapter-first ordering for a 12-term title, ordinary-result link/excerpt/score equality and all previously identified literal/title cases. Verified the two actual target URLs and their focus in the Chromium suite, including the delayed route and a later user interaction.

The 390px capture showed a remaining presentation issue. The genuine H1 section displays its parent title as context immediately above the identical title. Requested suppressing the parent-title context only when the two titles normalize to the same value, keeping the result-type label, one title and both actual destinations. Ordinary section context remains intact. Review that revision against the exact r1 runtime and refreshed narrow-screen result before acceptance.

## Frozen r2 — accepted for protected integration

Checked the seven exact files in the Developer digest list, including handoff SHA-256 `ad1f89e8038dc9d72f9dfd7342eb5aec389ede8bfdbb5413ad7f138dcf66c9d8`. Compared r2 with the independently verified r1 package: only the conditional result label, its browser assertions and the updated evidence changed. The equal-title H1 now shows a short section label and one title. Other sections retain chapter context. The Chapter route and native H1 fragment remain separate targets.

Rebuilt and verified r2 on root and Pages. Four affected Chromium tests passed independently on each path, including the 24 navigation interactions, plain search and language paths, full-title normalization and deliberate focus cancellation. The Developer independently reported 32/32 for each full r2 suite and 55 Node tests. Inspected the actual 320px Pages and 390px root captures. Across the baseline and r2 exports, both Chinese and English search-index hashes match byte-for-byte. Retained 14 distinct signup results, unchanged section order on ordinary queries, canonical source hashes and no English bodies. The 12-term ordering fixture now always places the chapter first. Independent command logs and captures are under `/private/tmp/vctw-exact-search-review/`. Safari, native zoom, physical devices and actual AT remain unverified.

Accept r2 after matching local behavioral and scope re-review. Verify required checks on the exact head before merging. Publication is a separate action.
