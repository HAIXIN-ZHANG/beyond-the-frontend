# V2 appearance foundation and shared controls

Owner: Developer. Date: 2026-11-18 (Australia/Perth). Revision: r2, submitted for affected documentation review after runtime/test/artifact acceptance; payload frozen pending findings. Scope: released first V2 slice only; no Git integration or publication.

## Brief

Authority: the [accepted gap review and first-slice release](../../reviews/v2-design-gap.md), [board](../../coordination.md), AGENTS and Developer guide. Workspace: `/private/tmp/vctw-m2-v2-reader`, branch `codex/m2-v2-reader`, baseline `5141823f9c4a0b5403cf7a24d4269b0d09e2e92d`. Existing Coordinator mirror/review and accepted gap report remain untouched; Writer refreshes are separate and not admitted.

Allowed areas: existing Panda config/tokens/recipes/global styles, theme runtime/hook/head only as needed, AppearanceControl, i18n, affected theme/i18n/E2E tests, factual developer-guide section and this one handoff. Preserve source/manifest/parser, locale-specific Chinese identity, actual reviewed-draft labels, real routes/search/heading links/complete Unicode-safe results and existing layout. No dependency/Figma/manuscript/sidebar/home-structure/new-feature/Git/release change.

Implement neutral System/Light/Dark plus six independently stored enum accents (default Blue), compatible `btf.theme` and new validated `btf.accent` in the existing single head installer/controller. Native radio groups stay open across changes; Escape/outside/scroll/resize dismiss without scroll jumps or outside-focus theft. Six direct named/check-marked swatches with44px hit areas wrap responsively. Reuse actual approved soft-button/neutral roles; keep status/focus meaning independent and adequate text/boundary contrast.

Checks: lint/strict/Node; actual12 mode/accent combinations, keyboard/first-paint/storage/media/cross-tab/reduced-motion/forced-color and1440/1024/768/390/320px checks; fresh sequential root build→verifier→E2E then Pages build→matching verifier/E2E. Record screenshots/computed values, exact files/hashes and unrun engine/device/AT limits. No Browser plugin is listed; use existing authorized Playwright without installation.

## Delivered behavior and design mapping

Flow under test: locale home/reading entry → Appearance → successive appearance/accent choices → theme/accent/checked state updates while the panel stays open → deliberate dismissal and reload/storage/media recovery.

- The existing self-contained head installer/store now validates and applies independent accent preference and exposes a stable snapshot with accent; no parallel provider. Default Blue, exactly six enum values, `btf.accent` and root `data-accent`; `btf.theme` values/removal/System behavior remain compatible. Per-key read failure defaults independently; write/getter failures still allow an in-memory choice. Only real localStorage events affect the matching preference; clear resets both, unrelated/sessionStorage events are ignored.
- The existing native popover/radios now stay open across either group's choices. Escape, actual anchor movement on scroll and resize close it with prevent-scroll focus return when focus was inside. Outside focus survives. Native groups support arrow/Space selection. Six visible soft swatches include names, checked shape/check,44px targets and semantic focus. Container queries keep six columns at wide panel size, three at390px and two at320px, and adapt to enlarged text. Max-height/clamped placement keeps small viewports locally scrollable.
- Existing Panda primitives/semantic roles/recipes now map neutral canvas/raised/selection/text and twelve accent combinations from the accepted Figma inputs. Soft buttons use primary text; links retain accent foregrounds. Control boundaries and neutral focus roles were strengthened where necessary instead of copying the deficient literal settings text/border. Warning/status roles remain independent. No per-node token proliferation: swatch dimensions/strokes/focus/gaps use existing roles; family primitives carry actual palette identity.
- Visible labels follow the settled V2 terminology: System/Light/Dark and 跟随系统/浅色/深色; existing `dayTheme`/`nightTheme` identifiers and stored enums remain compatible. The current localized Chinese brand/titles, real draft status, three-source allowlist/search/headings/links, diagrams and layout remain intact. No new manuscript/intake, sidebar, home structure, Continue, AI or other future affordance.

Reused the reviewed [design targets and gap findings](v2-design-gap.md); no new Figma call/write or image asset in this implementation slice. The full reader upgrade remains separate; these controls do not assert complete V2 delivery or publication. The factual developer-guide section describes local implemented behavior and pending review, preserving historical stage evidence.

## Actual verification

Existing Node/npm and Playwright tooling was retained; actual Chromium159.0.8154.6. Browser plugin not available, so the authorized existing Playwright path was used without installation.

| Final sequential check | Result |
| --- | --- |
| `npm run check` | ESLint, strict application/Panda compilers and all49 Node tests pass (44 prior +4 controller cases +1 locale case) |
| Empty-prefix build → matching `verify:export` | Pass;8 pages,165 local references; zh29/en0; actual targets/hashes/serialized bootstrap validated |
| Empty-prefix maintained E2E |19/19 pass in17.5s: all16 prior behavior cases plus3 appearance cases |
| `npm run build:pages` → Pages-prefix `verify:export` | Pass;8 pages/165 references/zh29/en0, matching prefix |
| Pages-prefix maintained E2E |19/19 pass in17.4s; no skips/retries/failures |
| Additional real Pages browser pass |36 selected/hint/check color pairs pass; no-JS System Dark CSS works; getter-denied, accent-read-denied and quota-failed storage all allow actual UI color selection at320×480; errors empty |
| Preservation/inspection | Accepted gap hash unchanged;12 scoped payload files plus this report only; Coordinator board/review updates identified separately. No source/parser/manifest/Header/reader structural/package/lockfile/asset change. Exported client JS contains no manuscript/review/local-directory paths; `git diff --check` passes |

The controller regressions cover six saved accents across system/explicit modes, invalid values, independent read failures, blocked writes, subscription stability, cross-tab/clear and unrelated storage areas. Browser cases exercise sequential native group selection without closing, real outside focus, Escape/scroll/resize return, both locale labels,1440/1024/768/390/320×900 layouts,200% computed-text stress, forced colors/reduced motion, before-body saved appearance observation, OS switching, explicit-mode independence, actual two-tab storage changes, refresh, malformed value/clear and quota recovery. These are real local fixtures/observations, not source-only assertions.

The color case uses temporary DOM controls with the production primary/caution recipe classes; no fixture route or product component was published. Actual normal/hover colors were measured for every one of the12 resolved combinations. Lowest ratios: body/canvas15.145; link/canvas5.353; primary label/default7.537; primary label/hover5.558; required border against default/hover surface3.405; neutral focus/canvas15.145. Extra real selected-theme text/background minimum4.554, hint/panel6.298, check/swatch7.537. Neutral canvas and actual caution roles remain invariant within each mode across accents (Light caution `rgb(128,85,29)` on `rgb(248,238,220)`; Dark caution `rgb(236,238,244)` on `rgb(32,36,44)`). This supports the inspected role/state pairs, not blanket conformance.

### Evidence locations and visual inspection

Final command logs are `/tmp/vctw-v2-appearance-{check,build-root,verify-root,e2e-root,build-pages,verify-pages,e2e-pages,extra}.log`. Root screenshots/results were copied to `/tmp/vctw-v2-appearance/root/playwright/` before Pages overwrote the suite output. Current `.artifacts/playwright/` is the final Pages evidence; each prefix contains32 PNGs including24 changed-appearance captures plus the retained reader-regression captures.

Within either prefix's Playwright output:

- `reader-V2-twelve-appearanc-a12a6-ng-neutral-or-warning-roles/`:12 `appearance-{light|dark}-{accent}.png` captures and `appearance-computed-colors.json` with actual normal/hover values for all pairs.
- `reader-V2-native-groups-re-37109-oss-actual-viewport-changes/`:10 `appearance-{en|zh}-{width}.png` captures plus `appearance-320-enlarged.png` and `appearance-forced-colors.png`. Actual native-focus/checked/target/name-wrap assertions pass at all widths; Graphite remains a whole word under true2× text stress.
- `/tmp/vctw-v2-appearance/extra/`: source `check.mjs`, `observations.json` and three `storage-{getter|accent-read|quota}-320x480.png` captures. Records actual browser version,36 additional pairs, no-JS dark colors, media flags and errors. Forced-colors/reduced-motion flags were true; swatch animation was none and transition0s.

Viewed actual wide Light Blue and Dark Graphite controls,390px English/320px Chinese,320px English, enlarged text and forced-color captures. Wide swatches form one calm row; narrow names/checks remain legible in ordered rows and preserve the44px target. Chinese header/title remains localized, and real reading links/status stay visible in the underlying page. These are CSS viewport checks, not physical-phone/native-zoom/assistive-technology certification. Current `site/out/` is the final Pages-prefixed export.

### Corrections made before submission

The first restricted Node run passed lint/types and40 tests but four existing HTTP tests could not bind loopback (`EPERM`); the authorized loopback rerun and final49 tests pass. The initial nested Panda OS/accent selector produced an invalid attribute-before-type selector; removing the unnecessary type prefix from the shared System condition resolves it, with actual no-JS Dark CSS and twelve-mode browser verification. New E2E globals were qualified through `window` to satisfy existing lint rules. An initial enlargement harness mutated ancestors before sampling descendants, overstating magnification; it now snapshots all computed metrics before applying exactly2× and asserts single-line color names. These are resolved implementation/harness findings, not open exceptions or a reason to weaken checks.

## Frozen payload SHA-256

These12 complete file digests exclude this report's self-reference. The accepted gap report remains `1a0880102e53fd11d83672e30fa4f1a068f19945707dd62fece25f7e97d6d7d9`. `site/app/theme-head.tsx` required no change.

| File | SHA-256 |
| --- | --- |
| `panda.config.ts` | `72b64b4b0e5fe201bbe5bd41e4263f4d94ee39b789138d085d8075f11e77075d` |
| `panda/tokens.ts` | `ae0225d83279350d6277ce86c447c0abd5893b5e0f8ee5d6b595e839c7557d02` |
| `panda/recipes.ts` | `d97f3e895f0e5ae5fbd1bb6783f90bbbf51a4ac37cb8e3318d27c315a52a293b` |
| `panda/global-styles.ts` | `a98cc47f6f043fc263cb0d79dde22d5381baea7b1c306d53308ecf0a1e828d18` |
| `site/theme/runtime.ts` | `3c28b576273576041f4c3a068b97bb4130d0b3c18b69cc5756f1d7d2923ca52f` |
| `site/theme/use-theme.ts` | `9b1a24c2e948084b8fad23cc6af0156a685128073b7c689dac1c2a80ea57004c` |
| `site/components/ui/appearance-control.tsx` | `c999417a4fb4913d4b23a5f8511bf7b2745892f82d458b8ace9368aaec043ad8` |
| `site/config/i18n.ts` | `5c272c976b1cd7bf45d4bef96e5c5a448612d8e2b8edebb4f0530293cf153e7b` |
| `tests/theme.test.mjs` | `384f08ced758d721cb78f3a4508e7dbe14785a13d204cc3cf13d4b0c7a593282` |
| `tests/i18n.test.mjs` | `6b38236f91a73418023a7b9525a2ec3b235c60d7c6f72e291535255b35867bc8` |
| `tests/e2e/reader.spec.mjs` | `1078e858f89fcf548c498ca6be5b1088348848166dd69d31509fc2fe89171540` |
| `site/DEVELOPMENT.md` | `1a297e3ed2f962b7c68c47e360f5856e18608e4b37ad854c48e6371e7da87964` |

## Limits, review and recovery

Coordinator accepted the runtime/test/artifact revision and returned only the two documentation findings below; affected documentation closure remains pending. Local results do not prove cloud CI, integration or publication. Safari/WebKit, Firefox, physical devices, native browser zoom and real assistive technology were not run in this slice; their limits remain open. No Figma mutation/inspection, image conversion, remote-provider/dependency selection or audit refresh, installation, Writer-source intake, Git write, release stamp/public smoke or deployment occurred. The full V2 reader/sidebar/home and minimum Continue require separate assignments after review.

The246-file post-brief byte snapshot is `/tmp/vctw-v2-appearance-baseline.json`. Preserve Coordinator's mirrored board/review and separate new Writer review files; those are outside this payload. Canonical drafts/manifest and all other runtime inputs retain baseline bytes. This report is the thirteenth owner file; its final digest is sent directly at delivery. Files are uncommitted over the assigned baseline, frozen for actual review. Developer releases exclusive shared build/browser output ownership at final delivery; the current artifact is Pages-prefixed. Next action: Coordinator inspection and concrete original-owner findings, then an explicitly released slice. No next work starts automatically.

## r2 documentation responses

| Finding | Exact affected change | Verification / closure |
| --- | --- | --- |
| V2-A-DOC01 | Current component table now describes System/Light/Dark plus six independent named swatches and native keep-open groups; Popover API support limit retained | Guide/handoff only. All11 runtime/test payload hashes remain the accepted r1 values; affected text/link/diff checks pass. Coordinator closure pending |
| V2-A-DOC02 | Typography paragraph now explicitly attributes “no remote font or new color/visual system” to that earlier typography correction, separately pointing to the subsequent V2 mapping | Historical metrics/evidence remain unchanged. No code/test/build/browser rerun or shared-output write; Coordinator retains output ownership. Affected review pending |

The [actual foundation review](../../reviews/v2-appearance-foundation.md) records independent source/hash/protected-file checks,49 Node/lint/strict checks and real12-pair/five-width/native-focus/storage/first-paint/no-JS browser inspection with normal errors empty. This is the reviewer's separate evidence, not a new executor run. The r2 guide delta is exactly two replacement lines plus this report's revision/hash/status update. No source/identity intake, old home subtitle/byline edit or next UI slice is released here. Submit r2 and stop for affected documentation re-review.
