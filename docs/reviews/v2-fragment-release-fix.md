# V2 publication check and fragment recovery

- **Date/reviewer:** 2026-11-18, Australia/Perth. Coordinator/Reviewer.
- **Released scope:** publish the reviewed V2 reading slice, then restore the homepage/search order. First repair the exact-main fragment failure before dispatch.
- **Remote revision:** `e4e5037150608e116a4a066049b173adfd1b4b21`. [PR #28](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/28) passed all required checks before squash. Exact-main CI is [44291575947](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/actions/runs/44291575947). Quality and Pages succeeded. The root build and export verifier succeeded, but root Chromium returned 26 passed and one failure.
- **Gate:** [Developer fragment handoff](../handoffs/developer/v2-fragment-release-fix.md). Work in `/private/tmp/vctw-m2-fragment-release-fix`, based on exactly the remote revision above.
- **Outcome:** Changes requested, Pages dispatch pending. Existing Pages settings were read back in GitHub: GitHub Actions source, default HTTPS URL, and environment `github-pages` permits one branch (`main`) and zero tags.

## Independently inspected failure

The [root job 134758433045](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/actions/runs/44291575947/job/134758433045) failed in the JavaScript-enabled fragment identity regression, `tests/e2e/reader.spec.mjs:813`. The cloud artifact 14421748058 includes the trace and screenshots. Its local inspected copy is under `/private/tmp/vctw-m2-release-evidence/root-fragment/`.

The trace first loaded the canonical introduction fragment at 1440px. It then changed the same page to 390×844 and navigated to the legacy introduction fragment. Its alias had focus, `scroll-margin-top` was 69px and horizontal overflow was false. The actual heading was at -4px, above the 45px bottom of the sticky toolbar. The later screenshot shows the sticky toolbar and section body with the heading clipped.

Preserve both fragment IDs, native no-JS focus/links, the geometry acceptance criterion, current runtime/source identities and reader preferences. Accept the smallest causal correction after deterministic or repeated before/after evidence, exact changed hashes and independent matching root/Pages checks. Run the integrated exact-main CI again before the authorized dispatch. Verify public commit and all three Chinese chapters after deployment.

The live edition was previously read back from [release.json](https://haixin-zhang.github.io/vibe-coding-then-what/release.json) as `95a6bec69e26cbe13fe9f5d9433ee91e07632091` with opening and G01. The Browser Fundamentals route returned 404 on that revision.

### Local independent reproduction

The first unmodified Playwright repetition passed 20/20. An independent probe then waited specifically for the desktop reader to hydrate before resizing the same page to 390px and invoking its native legacy hash navigation. Across 50 attempts with normal or 4× CPU throttling, 37 headings were still above the toolbar after two animation frames. Eleven reproduced the exact cloud coordinates (-4px versus 45px). Twenty-six yielded 44px versus 45px. Thirteen cleared the toolbar at 69px. This establishes a user-visible geometry failure when the initial viewport/layout timing varies. The probe and structured output are saved under `/private/tmp/vctw-m2-release-evidence/`; no runtime change was made by Coordinator.

## Frozen r1 — accepted for PR

Verified the handoff SHA-256 `16ee6ef8e2b3b875c7c1badabe3f1168de754c71e0a2525e34b09b0ecd618eae`, runtime SHA-256 `1a003d1ecc30be0b02643cb6f19ba55e59da3a713f98fcce80249d1a9a179132` and browser-test SHA-256 `d073d8cdb57dced9252e656f56dc9203da6d1829115d1b9f071f40b71cb8ac43`. The reader reconciles native fragment landing when actual responsive geometry changes. The active target must still hold focus, and deliberate input releases correction. Events and observers are cleaned up. The test covers native same-page links, delayed responsive reconciliation and deliberate reader scroll without reducing the existing geometry threshold. All five sources and the manifest were compared byte-for-byte with the base.

Independently ran `npm run check` (52 Node tests, lint and strict types passed), fresh root and Pages builds, both export verifiers (8 pages, 171 references, 28 Chinese sections and zero English sections), and both full Chromium suites (27/27 each). The same independent 50-transition probe now settled 50/50 with 69px heading top and 45px toolbar bottom. Inspected the independent 390px controlled screenshot and retained 320px evidence. Logs and captures: `/private/tmp/vctw-m2-release-evidence/review-fixed/`. Native no-JS navigation remains covered. A temporary intermediate frame can still precede responsive alignment. Cross-engine, physical phone and assistive technology are separate from this local Chromium check.

Accept this exact revision for protected integration. Verify required checks on both the PR head and its integrated main before dispatch.

## Protected integration

[PR #29](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/29) was reviewed at `da42af5800d29563f7615f1e7386f4ffff3637c4` with Quality, Static export (root) and Static export (pages) successful in [CI 44309522713](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/actions/runs/44309522713). GitHub squash merged that exact head to `8167a056525e71eb61513d3d1ca9716428733531`. Independently fetched main and matched its Git tree to the reviewed PR head. The [integrated main CI](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/actions/runs/44310303987) is the publication gate.

## Pages dispatch

Exact-main CI 44310303987 successfully ran Quality, root export/Chromium and Pages export/Chromium. On the verified GitHub Actions source/default HTTPS/main-only deployment settings, manually requested [Pages release 44312295643](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/actions/runs/44312295643). The run metadata confirmed `workflow_dispatch`, `main`, attempt 1, and exact SHA `8167a056525e71eb61513d3d1ca9716428733531`. HTTP and browser acceptance follow the run's deploy result. Previous observed production was `95a6bec69e26cbe13fe9f5d9433ee91e07632091`, from [Pages release 44049823618](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/actions/runs/44049823618).

## Verified public release

At 21:28 Australia/Perth on 2026-11-18, independently verified the public deployment from attempt 1 of [Pages release 44312295643](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/actions/runs/44312295643). The build checked out and verified the immutable main SHA, validated sources and export, ran Chromium, stamped release identity and uploaded the validated export. The deploy job deployed that artifact successfully.

The exact-main checkout ran `npm run release:smoke -- https://haixin-zhang.github.io/vibe-coding-then-what/ 8167a056525e71eb61513d3d1ca9716428733531`: 7 routes, 11 assets, 22 requests passed. [Public metadata](https://haixin-zhang.github.io/vibe-coding-then-what/release.json) matches that commit and all three admitted Chinese chapters (opening, G01, F01). Both 03 and 04 remain outside the manifest. The English index still has no English body, and the English F01 route returns 404.

On the public origin, Chromium exercised English-to-Chinese discovery, all three chapters and previous/next links, search to focused heading, System/Light/Dark after refresh, correction preview without opening or posting an issue, legacy and canonical anchors, 320px keyboard outline/focus, local code scrolling, asset health and bilingual 404. The actual desktop/390px/320px captures and script are in `/private/tmp/vctw-m2-release-evidence/`. Native desktop Safari was unavailable after the Mac locked again, and a physical phone was not tested. No distinct-version rollback was run.
