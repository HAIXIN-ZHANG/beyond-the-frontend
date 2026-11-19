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

## Exact-head cloud follow-up

[PR #32](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/32), head `19e94e6527755ff449bf5277aa1e8e76bfae2df5`, passed Quality, both static builds/verifiers and the complete Pages browser suite. The root browser suite passed the new search cases and 31 cases overall. The existing homepage keyboard/locale case aborted at its direct `page.goto('/zh/')` immediately following the language-navigation loop. [Job evidence](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/actions/runs/44446332277/job/135299702669), artifact 14494390044. The PR remains unmerged. Developer owns the bounded cause diagnosis and repair. Preserve existing user-facing assertions and ordinary navigation.

The root trace identified the false positive. The test compiled the expected English-home navigation to the suffix regular expression `\\/$` and accepted it within about 5 ms. The old Chinese-home path `/zh/` also ends in a slash, so it could pass before the English page committed. The next direct `goto('/zh/')` then competed with the pending language navigation. The narrowed repair must wait for the exact destination and actual locale content, retaining the later enlarged-text, keyboard and search checks. The inspected trace is stored under `/private/tmp/vctw-exact-search-review/cloud/homepage/`.

## Narrow r3 — accepted for exact-head CI

The revised homepage language test waits for the exact absolute destination, target document language and visible localized H1 before moving on. Existing keyboard, search and enlarged-text assertions are preserved. Inspected the original CI trace and compared the exact r3 files with the pushed head. Only the existing E2E test and handoff changed in the Developer payload. Test SHA-256 `e61c41367a66b7054af526e9b009cb99cc4a25ee2efbe31772ce90067344a50f`; handoff SHA-256 `cb52063b762652c6ba0e9fa8918a0c6c425d84c8dacf3fa423789aa31def09e2`. The Developer's normal build and export verification passed at both paths, with 55 Node and 32/32 Chromium tests per browser suite.

Independently ran the changed browser test eight times per path in the isolated review copy (8/8 root and 8/8 Pages). Used the existing Next.js Webpack build flag for the independent run because the local Turbopack worker could not bind a port under the review sandbox. Both exports passed verification, with 8 pages and zh28/en0. An earlier invalid root retry served Pages output and produced asset 404s. It was discarded, then both paths were rebuilt and tested sequentially. Evidence: `/private/tmp/vctw-exact-search-review/r3-independent-*`.

The affected correction is accepted. Protected merge still requires the new exact head's cloud checks.
