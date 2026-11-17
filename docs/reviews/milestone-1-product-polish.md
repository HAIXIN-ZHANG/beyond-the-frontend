# Milestone 1 whole-product publication audit

Reviewer: Coordinator. Status: **Accepted — source and bounded product QA; integration/public acceptance separate**. Baseline: `cc59fd42f74bb5ed856881443a8bb2fd528b0817`, clean main/origin-main before branch `codex/milestone-1-product-polish`. [Board](../coordination.md) owns the live assignment; [Developer handoff](../handoffs/developer/milestone-1-product-polish.md) and [Writer handoff](../handoffs/writer/milestone-1-product-polish.md) own execution evidence.

## Scope and acceptance

Review the complete existing minimal reading product rather than adding features: both locale entries/indexes, the two approved Chinese manuscripts, search empty/result/no-result states, Appearance preferences and persistence, reading navigation/section actions, true404 behavior and the direct reading entry. Inspect shared semantic tokens, role-based typography, horizontal geometry, information hierarchy, language/metadata, mobile/tablet/desktop/zoom, Day/Night, visible focus and keyboard interaction. Retain intentional reading prose roles and realistic platform-specific glyph shapes; matching roles must share declared metrics and layout constraints.

Use fresh rendered captures and actual interactions before judging the surface. Check actual files and owner findings independently, return concrete defects to the original owner, then inspect affected final states. Passing automated tests does not establish visual polish, full accessibility certification or a translated English corpus. Record actual source acceptance, matching CI, merge and public acceptance separately. The lock-screen publication interruption is an operational constraint, not a UI defect or permission to weaken release controls.

## Findings and evidence

Coordinator built a fresh Pages baseline from unchanged `cc59fd4` runtime and preserved an isolated export for independent inspection. The first sandbox build failed because a subprocess could not bind a port; an escalated retry initially reused that generated failure. A separate loopback probe succeeded. After preserving the failed generated cache outside the checkout, the fresh escalated build succeeded. No project configuration/check was weakened. This is an environment/cache interruption, not a successful first build or a confirmed application fault.

Fresh baseline capture covered19states: English/Chinese desktop and mobile entries, both catalogs, G01 desktop/tablet320px, opening375px, desktop/narrow Night, Chinese search results/no results, Appearance, English-search absence, correction preview, code/diagram and the actual global404. Coordinator opened and inspected all19saved screenshots. Their metric record reported no page/console error or horizontal document overflow. Header navigation links measured44px tall at375px. Keyboard Tab exposed the skip link with a2px semantic focus ring; Enter focused `main`. Captures are supplementary local evidence under `/tmp/vctw-product-baseline/`, not public artifacts or proof of final-source acceptance.

The first capture harness used an incorrect `.code-block` selector and timed out after17screens; correcting that review-only selector to `pre` allowed a complete fresh19-state capture. Theme measurement initially read before the media change was applied; the corrected probe explicitly waited for the actual `data-theme` state. These harness corrections do not hide product failures. Subsequent observed Day/Night semantic palette changes were consistent with the existing controller.

| Flow step | Fresh baseline captures / observation | Baseline health |
| --- | --- | --- |
| 1. Enter and choose language | 01–04 English/Chinese desktop/mobile homes; actual localized title/chrome and matched roles | Regular layout coherent; enlarged-header overlap requires correction |
| 2. Browse available content | 05–06 catalogs; actual approved manifest and explicitly marked Chinese-original targets | Honest two-source availability; no English bodies implied |
| 3. Read and navigate | 07–12 G01/opening, desktop/tablet/narrow, Day/Night;18code/diagram; actual skip/main focus | Prose/rails hierarchy and local content boundaries coherent in sampled normal states |
| 4. Find a section | 13–14 Chinese results/no match;16English absence;20actual backdrop wheel | Correct language/empty states; modal/background scroll defect confirmed |
| 5. Change appearance | 15native Appearance panel;11–12Night; computed actual Day/Night palette | Clear System/Day/Night separation; site-only wording refinement assigned |
| 6. Share or correct | 17actual correction preview plus generated URL source inspection | Explicit metadata/deliberate submission retained; Chinese draft scaffolding correction assigned |
| 7. Recover from an invalid URL | 19actual unknown route/static global404 | English-primary document with explicitly marked Chinese recovery; intentional static-hosting exception |

Primitive colors, semantic foreground/background/focus/border aliases and actual recipe/text-style use were inspected. Runtime TSX contains no ad hoc color/font/padding/margin declarations in the inspected source. Main default/muted/link text pairs on canvas/surface/subtle backgrounds measured at least5.03:1 Day and7.9:1 Night; sampled focus pairs exceed6:1. These are selected opaque role pairs, not every alpha/hover/disabled/native-control state or full accessibility conformance. Text-labelled quiet-button decorative borders are not treated as the sole control affordance. Platform glyph weight differs inherently; same-role declared metrics, fallback stacks and geometry are the invariant, rather than pretending Latin and Chinese glyphs are optically identical.

### Required corrections and bounded refinements

| ID | Priority | Actual location/trigger and impact | Original owner / acceptance | Status |
| --- | --- | --- | --- | --- |
| MODAL-01 | P2 | Chinese search opened from G01 with an empty query; wheeling over the backdrop moved `window.scrollY`0→600 while the modal remained open, disturbing reading position and dialog geometry | Developer: contain the modal and background scroll while retaining internal result scrolling; recheck Escape/Close/result navigation and restored normal scrolling | Changes requested; actual before screenshot/probe inspected |
| REFLOW-01 | P2 investigation | At375px, an explicit CSS `zoom:2` stress exposed intact brand spans extending beyond their allocated99px region and overlapping the180px Search control | Developer: verify text enlargement/intrinsic layout behavior and correct actual overlap, preserving normal320–1440px phrase integrity. This stress is not native browser-zoom certification | Changes requested; fresh screenshot inspected; broader reflow evidence pending |
| TITLE-01 | P3, accepted bounded refinement | Narrow chapter-title balancing splits能跑and究竟inside short phrases | Developer: restrict the minimal keep-all rule to chapterH1with existing emergency overflow fallback; preserve canonical text/source/anchors and regular desktop metrics | Review-only experiments inspected; actual affected-source recheck pending |
| W-COPY-01 | P2 | Chinese-reader correction link generates English form scaffolding in `reading/sharing.ts` despite a Chinese preview; site-generated instructions unexpectedly change language | Developer: apply Writer's Chinese-primary title/fields/问题草稿 wording, preserve real metadata and explicit editable submission; decode/check URL without submitting | Writer source finding accepted; implementation assigned |
| W-COPY-02/03 | P3, accepted bounded refinement | Planned eight parts are labelled八篇; explicit theme hint can imply device-wide changes | Developer: 八个部分 and site-only hint in both locales, same existing behavior | Assigned within existing polish |
| DOC-CURRENT-01 | P2 documentation | Current introduction in the technical design handoff still reports old test count/pending release work/no-deployment hold | Developer: correct current wrapper and pointers against actual evidence, preserve named historical bodies and Figma reference | Assigned narrow additional file scope |

Writer's r1 [copy audit](../handoffs/writer/milestone-1-product-polish.md) was inspected against actual strings/components/metadata. Its source-only scope and intentional exceptions are accurate: recognizable language-switch labels, technical/proper names, clearly marked Chinese-original destinations and the static bilingual recovery404 are retained. Report accepted/task closed; Writer does not certify rendering or rewrite manuscripts. Runtime findings return to Developer.

No whole-product acceptance, new merge or public release is claimed by these baseline observations. Final changed files, affected screenshots/interaction rechecks, matching CI and actual publication remain separate gates.

## Candidate inspection and affected follow-up

Coordinator independently captured and opened19candidate states from an isolated copy of Developer's completed Pages export. Normal layout, reading hierarchy, locale identity, code/diagram and global404 remained coherent; captures recorded no page/console errors or document overflow. Independent backdrop wheel now kept document position0→0, and CSS-zoom stress moved Search onto its own row instead of overlapping the brand. The first Tab/skip/main behavior and selected semantic colors were retained. This is independent candidate evidence, not a copy of the owner's test results.

Coordinator also inspected the rendered correction preview and decoded its actual target without opening/submitting GitHub: Chinese title/fields, real G01identity/hash/current URL and editable suggestion scaffold were preserved. The planned-part wording and actual explicit-night site-only hint matched the accepted refinement. Writer's static-only evidence boundary remains intact.

Opening375px andG01at320px still showed short Chinese phrases split in theirH1lines. A review-only keep-all experiment produced clearer punctuation-based breaks with the original canonical strings. Developer reproduced the exact lines with Range geometry and was assigned that one final scopedH1change. Earlier candidate evidence remains valid for unchanged surfaces; final source acceptance waits for this affected recheck and the frozen manifest. Broader redesign/feature work is not released.

## Final frozen revision and decision

Coordinator read the ten actual modified Developer files and complete frozen report, checked every file against its submitted SHA-256 manifest and verified179unaffected tracked files byte-identical to the baseline. Frozen Developer report SHA-256: `a4237196162ccb6a2026cc37b5133285d244aa634dac9acda17d71a3d70c7832`; accepted Writer report: `8daaab13032a2a0fd95aa9ab0298aa22cc4f6e4d1d0b8291e4828bc00723f09a`. Both approved manuscript hashes, all31recovery files, dependencies/workflows, Figma reference and token/recipe definitions are preserved.

The final changes remain proportionate: native modal scroll containment and stable gutters, intrinsic compact-header wrapping, one chapterH1line-break property, three aligned copy refinements and factual technical-wrapper/test-count updates. Existing architecture, approved content, routes and visual language remain appropriate for the minimal release. No new feature, remote font, model service or speculative abstraction is needed for these findings.

| Finding | Actual final closure evidence |
| --- | --- |
| MODAL-01 | Independent actual candidate backdrop probe0→0; final maintained suite independently passed real internal result scrolling, restoration/unlock and native destination focus on all three exits |
| REFLOW-01 | Independently viewed nonoverlapping candidate CSS-zoom stress; final actual computed-text2xEN/ZH case passed, with intact phrases and usable Search. This remains stress/reflow evidence rather than native zoom certification |
| TITLE-01 | Actual final Pages export, without injected styles: both canonical titles at320/375/768/1440; eight measured samples and four opened narrow screenshots confirm intact能跑/究竟, no overflow and unchanged desktop lines |
| W-COPY-01–03 | Actual rendered target decoded without external issue submission; canonical metadata retained, Chinese scaffolding/part terminology/site-only hint inspected. Existing meaningful URL-encoding unit checks updated, not removed |
| DOC-CURRENT-01 | Actual diff corrects only current technical wrapper/status/pointers, preserves historical design body and distinguishes original public release from later accepted source |

Developer's final check reports lint, strict application/Panda compilers,39Node tests and fresh root/Pages build/verifier/12E2E success for each final export. Coordinator independently ran all12maintained Pages E2E against final output: **12passed in6.3seconds**, zero retries/skips or assertion changes by the reviewer. Health assertions remain. The final title measurements/captures were independently executed as well; unchanged earlier candidate states retain their explicitly bounded evidence.

Coordinator inspected the actual cold-paint probe and saved Day/Night screenshots/JSON: seven framework scripts held in each fresh context, saved appearance opposite the OS, expected theme/canvas already applied after the local first-contentful-paint observation. The sample's20ms is a local observation, not a production performance promise. Inspected computed contrast samples agree with declared semantic roles. Native browser zoom, Safari/Firefox/Windows glyphs/scrollbars, physical mobile keyboards, assistive technology and full WCAG conformance are not certified by this Chromium review. No unresolved demonstrated product defect remains in the assigned minimal scope; these broader coverage limits and existing dependency/recovery maintenance retain their stated boundaries.

**Decision: Accepted.** Close both executor tasks/files; return any concrete cloud/public failure to its original owner. Coordinator may proceed with the already authorized protected PR/check/merge flow and deliberate publication once the logged-in browser is available. Exact reviewed head, cloud checks, squash/main reconciliation and any actual deployment/public results belong in the scoped PR execution record after observation. No future merge SHA or public success is prefilled here.
