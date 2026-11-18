# V2 fragment landing — publication blocker

Owner: Developer. Date: 2026-11-18 Australia/Perth. Revision: r1, causal correction and local QA complete; frozen for Coordinator review. Local code/review only.

## Brief before implementation

Authority: Coordinator's bounded publication-blocker assignment and current board. Verified workspace `/private/tmp/vctw-m2-fragment-release-fix`, branch `codex/m2-fragment-release-fix`, baseline `e4e5037150608e116a4a066049b173adfd1b4b21`. Only initial tracked change is the Coordinator-owned board mirror. Dependencies already reused; no installation. Snapshot `/tmp/vctw-fragment-baseline.json`.

Investigate the exact integrated-main root CI failure in [run44291575947/job134758433045](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/actions/runs/44291575947/job/134758433045), artifact14421748058: JS-on legacy/canonical introduction geometry at `tests/e2e/reader.spec.mjs:813`, reported canonical heading top-4 versus toolbar bottom45. Distinguish transient observation from an actual hydration, same-document fragment or toolbar measurement race. Reproduce with controlled timing and repeated1440/390/320 entry/same-page native navigation; record causal evidence before choosing a minimum correction. Preserve strict landing and focus, old/canonical IDs, no-JS links, existing toolbar/scroll/resize behavior and all5 manuscripts/manifest.

Expected scope: only causally affected runtime/fragment-test code plus this single handoff, factual technical guide only if required. No relaxed geometry, unconditional sleeps or retries as a repair. No source/manifest, layout redesign, homepage/search, dependency/workflow/settings/Git or release action. Complete actual lint/strict/Node and fresh matching root/Pages export/full Chromium, record exact hashes and evidence, freeze and return to Coordinator for review before protected integration/publication.

## Causal diagnosis before correction

Local baseline exact-sequence probe `/tmp/vctw-fragment/probe.mjs` and `/tmp/vctw-fragment/before.json` reproduced persistent failure30/30 natural immediate desktop→390/320 native same-document navigations (alternating widths). Two animation frames later all30 remained wrong: heading-4, toolbar45. The controlled case intercepted existing resize listeners before load, held their callbacks during the exact native hash navigation, then released them: before release top44/header109/margin44; after actual responsive reconciliation top-4/header61/margin69, scrollY unchanged304. The stale desktop toolbar measurement was20, while the real narrow toolbar was45; afterward the compact header shrank48px. Merely waiting for observers does not repair the native landing. The CI trace has this same1440 canonical→390 old-fragment sequence and final geometry. This is an actual responsive/same-document landing race, not just a transient assertion or newly discovered source/hash failure.

Chosen minimum runtime correction: replace only ReaderLayout's existing initial-fragment rAF with a bounded current-fragment landing owner. Initial/hash navigation schedules correction; actual header/toolbar/reader-body resize observations reconcile both current measurements together, then align the still-focused real fragment using its existing CSS clearance. Native target focus/IDs and CSS geometry are not changed. Any deliberate pointer/wheel/touch/key interaction relinquishes pending ownership; a later real hash change starts a new navigation. No perpetual scrolling, retry timer, synthetic focus or weakened geometry. Verify the exact held/released sequence plus user-scroll noninterference and both full base-path suites before freeze.


## Implemented minimum correction

Only `site/components/reading/reader-layout.tsx` changes runtime. The existing initial-fragment effect now also listens for native hash changes and actual ResizeObserver changes to header/tools/reader-body dimensions. It coalesces a requested alignment into the next rendering frame, checks that the same real fragment still has native focus inside this reader, synchronizes both existing measured CSS variables from current rectangles, then uses the real target's unchanged computed scroll margin. It never writes the URL, substitutes target IDs, changes focus or source, bypasses no-JS fallback, changes CSS/toolbar geometry, or adds a retry timer. A one-pixel runtime movement threshold avoids subpixel churn around the intended margin; the acceptance assertion still strictly requires `headingTop >= actual sticky surface bottom` with no tolerance.

Pending landing ownership is canceled by pointerdown, wheel, touchstart or keydown. A later native hash change arms a new landing. Thus layout work can finish a newly chosen URL landing without reclaiming the viewport after a reader chooses to scroll/interact. Existing header and toolbar measurement mechanisms and focus/resize controls remain unchanged. The helper is scoped to the mounted reader's focused current fragment; cleanup removes observations/listeners and any queued frame.

Only `tests/e2e/reader.spec.mjs` changes test behavior. The existing JS-on/off identity cases still check native focus, sources, aliases, real indexes and both locales. Geometry is observed with a bounded predicate on actual focus/overflow/header/toolbar clearance, then asserted strictly again; it additionally accounts for the sticky desktop header rather than weakening the previous toolbar threshold. This observes the runtime layout repair rather than assuming a viewport/hash API call means resize reconciliation has already finished. A controlled JS-on branch holds real production resize listeners, performs1440 canonical→390/320 legacy native navigation, releases the callbacks and verifies strict final clearance, native Tab→Enter canonical focus/URL, and captures before/after geometry. It also checks that a real wheel scroll relinquishes ownership and a subsequent observed resize invokes no corrective `scrollIntoView`. These extend existing cases, leaving the maintained count27 and retry configuration unchanged.

## Actual evidence and validation

Environment: existing Node24.14.1/npm11.11.0, Playwright1.65.1/Chromium159.0.8154.6 on this host. Browser plugin unavailable; authorized local Playwright used. No dependency installation or new external lookup after resumption. Exact CI evidence had already been read through the GitHub connector and locally extracted trace; later diagnosis used only local source/trace/builds. No Figma or release/workflow/settings/Git operation.

| Experiment/check | Actual result |
| --- | --- |
| Local original baseline probe |30/30 natural alternating390/320 transitions still failed after two diagnostic frames; final top-4/toolbar45. Controlled release reproduced header109→61 with unchanged scrollY304 and final-4/45 |
| Coordinator original baseline stress | Independently reported37/50 after-two-frame failures, including11 exact-4/45; attributed to Coordinator's recorded baseline script/log, not a Developer rerun |
| Same Developer probe after runtime change |0/30 settled failures; same controlled case before release44/45 and after release69/45, focus remains legacy target. Final scrollY231 correctly reflects the73px landing adjustment |
| Same Coordinator50-case script on root |0/50 settled geometry failures and0 focus mismatches,25 normal+25 at4× CPU throttle, using exact same two-frame diagnostic observation as the original script |
| Matching script on Pages |0/50 settled failures/focus mismatches, same normal+4× CPU matrix with only correct base-path parameterization |
| Final `npm run check` | PASS: zero-warning lint, both strict TypeScript compilers,52 Node tests |
| Fresh root build→matching export→full E2E | PASS:8 pages/171 local references/zh28/en0;27 Chromium cases,27.3s |
| Fresh Pages build→matching export→full E2E | PASS:8 pages/171 references/zh28/en0, `/vibe-coding-then-what`;27 cases,27.0s |
| Preserved regressions | Original no-JS old/canonical fragments1440/390/320, three-source hashes, actual14 signup results, locale identity, both appearances/all12 mode-accent pairs, toolbar/enlarged text, native keyboard, sidebar resize/modes/storage, deliberate focus departure, search/modal/copy/table/code behaviors all pass |
| Final whitespace/byte preservation | `git diff --check` passes;257 of259 snapshot files identical, with only the two authorized runtime/test files changed. Coordinator board/review retained untouched by Developer |

The race is not claimed eliminated before the browser performs its scheduled layout work: the Coordinator script's **immediate** samples still observe an intermediate obscured heading32/50 root and31/50 Pages. After the unchanged two-frame diagnostic checkpoint, all100 are correct. Production does not sleep for those frames; the correction is driven by actual hash/layout events. The permanent tests observe strict final behavior and would fail against the baseline that stays wrong after layout. Neither longer fixed waits nor a failed-job/test retry was used as the repair.

Screenshots `/tmp/vctw-fragment/controlled-before.png` and `controlled-after.png` were opened and inspected: same real introduction, old focus group/toolbar preserved, previously clipped canonical title becomes fully visible with24px clearance. Browser captures in the final root/Pages suites additionally show the real target after controlled390/320 release. No unexpected browser console/page error, framework overlay, blank body or page-level overflow was observed in the maintained checks. This is local Chromium evidence, not universal browser/AT acceptance.

## Reproduction, logs and artifacts

- Exact original CI trace/screenshots: `/private/tmp/vctw-m2-release-evidence/root-fragment/reader-reviewed-source-ide-44931-nks-work-with-JavaScript-on/trace.zip` and adjacent files. The downloaded artifact copy also exists at `/tmp/vctw-fragment-ci/artifact/`; no temporary download URL is included here.
- Developer baseline/fixed experiment: `/tmp/vctw-fragment/{probe.mjs,before.json,probe-after.mjs,after.json,controlled-before.png,controlled-after.png}`. The probe's two rendering frames are diagnostic sampling only.
- Coordinator's original baseline script/log: `/private/tmp/vctw-m2-release-evidence/baseline/stress-fragment.mjs` and `/private/tmp/vctw-m2-release-evidence/stress-baseline.log`. Local adaptation for exact imports/base path: `/tmp/vctw-fragment/stress-after.mjs`; measured root/Pages output in `stress-root.log` and `stress-pages.log` there.
- Final checks: `/tmp/vctw-fragment-{check,build-root,verify-root,e2e-root,build-pages,verify-pages,e2e-pages}.log`. Baseline build in `/tmp/vctw-fragment-build-before.log`.
- Matching E2E artifacts copied separately to `/tmp/vctw-fragment/root/playwright/` and `/tmp/vctw-fragment/pages/playwright/`,60 PNGs each. In `reader-reviewed-source-ide-44931-nks-work-with-JavaScript-on/`, inspect `source-intake-fragments.json`, `fragment-controlled-390.png` and `fragment-controlled-320.png` plus original identity captures. Current ignored `.artifacts/playwright/` and `site/out/` are the matching final Pages candidate, not a public release.

## Frozen payload and protected inputs

| Developer file | SHA-256 |
| --- | --- |
| `site/components/reading/reader-layout.tsx` | `1a003d1ecc30be0b02643cb6f19ba55e59da3a713f98fcce80249d1a9a179132` |
| `tests/e2e/reader.spec.mjs` | `d073d8cdb57dced9252e656f56dc9203da6d1829115d1b9f071f40b71cb8ac43` |

The third file is this single brief/handoff; its final digest is sent directly to Coordinator to avoid self-reference. No guide/source/layout stylesheet changes were needed.

| Protected input | SHA-256 |
| --- | --- |
| `book/drafts/zh/00-before-we-start.md` | `b4d0dd040e183cebc0400526ca5b317d23db1dc406e0bd5b00e3af74a940f521` |
| `book/drafts/zh/01-a-page-and-a-system.md` | `e0fca6dd95b87e93107c4279fb4bad120e80a068c8fc91a58689154293b25a05` |
| `book/drafts/zh/02-browser-foundations.md` | `3688b7967433b7a97304438100908d37883d5de9740aaa5c08820b37aa9bf624` |
| `book/drafts/zh/03-after-ai-finishes.md` | `0a707f763462099ee76f2b1e53b445a33cb61a23c65c3e599ac4ef644a191184` |
| `book/drafts/zh/04-api-contract.md` | `b85b2d706d863e611b7ab8faaaf2085396f01e583bc3f4440bc420198978c45f` |
| `site/content/manifest.ts` | `4a6526e3d806ec9bbb9d713ba798991ef93aa10a30af1dfcca5c41563520af77` |

The259-file snapshot includes the already mirrored board state. Its257 unchanged files include all five manuscripts, manifest/parser, CSS, header/toolbar components, theme, source contracts/accepted handoffs, package/lockfiles, workflows, release scripts and settings documentation. The new Coordinator review is not Developer payload and has not been edited. No Git integration or publication was performed.

## Limits and next gate

No Linux/cloud execution of this candidate, Safari/Firefox, real touch device, native browser zoom or screen-reader run was performed. CPU throttling and held callbacks exercise the observed timing boundary, not every browser scheduling possibility. Simulated resize/keyboard/storage/regression evidence retains its existing limitations. Short intermediate frames remain as disclosed; persistent incorrect landing is repaired in all measured cases. No current test failure remains locally.

Freeze this exact three-file payload for Coordinator's actual review and independent reproduction against both built outputs. Coordinator owns any PR, exact-main cloud CI and authorized Pages dispatch/public acceptance afterward. Homepage, search grouping and other features remain unassigned here; do not resume them merely because local checks passed.
