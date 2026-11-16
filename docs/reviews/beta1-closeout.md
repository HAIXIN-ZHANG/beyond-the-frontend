# Beta 1 overall review and closeout

Owner: Coordinator/Reviewer. Date: 2026-11-16 (Australia/Perth). Outcome: **Accepted closeout r1; executor tasks closed.** Exact-head cloud checks and integration are recorded separately in the PR15 execution record. No deployment.

## Scope and revision

The author requested an overall Beta1 review, required fixes and authorized integration/closeout. Actual clean checkout: `codex/beta1-search-sharing`, HEAD `a19e72c7e83494b35071bc4aee08145e1ec4ace1`; PR15 is open against main `612950a68d0d0b9bfc149b9e2236c7143020d1bf`. Preserve the separately accepted search/sharing r4 and Writer r2 payloads. Coordinator owns review records/board/Git integration; Developer owns narrow technical status corrections, Writer owns reader-facing editorial consistency. No new manuscripts, translations, palette/AI/audio features or deployment.

## Review plan

Inspect actual source and current UI04 design inputs, capture and inspect current product-flow screenshots, validate home → index → actual chapter → search/result → share/recovery, responsive Day/Night and keyboard behavior, source/publication boundaries and root/Pages routes. Reuse accepted unchanged evidence where appropriate, while distinguishing this run's actual checks. Record findings and affected owner rechecks here; link stage-specific evidence rather than rewriting prior outcomes. Permanent E2E/CI implementation is not silently added to this closeout.

## Initial findings and assignments

| ID | Finding / impact | Owner and criterion | State |
| --- | --- | --- | --- |
| CLOSE-01 | Live technical documents retain transient pending-review/current-working-tree wording after r4 acceptance; merge would leave those statuses stale. | Developer: durable behavior/status links in content-contract, design-handoff opening and runtime guide only; preserve historical body and code. New closeout handoff freezes changed docs/hashes. | Closed: independently inspected all three doc diffs and r1 hashes; corrected runtime descriptions match actual code; historical design body unchanged |
| CLOSE-02 | Reader-facing entry and long-lived planning documents need a final comparison against actual implemented availability, deferred features and public-release status. | Writer: audit README and four existing vision/roadmap/history/Chinese-summary documents; correct only observed contradictions, preserve dated history and source manuscripts. Record findings/changed files or no-change evidence in one closeout handoff. | Closed: independently accepted r1 no-change audit; five HEAD/file hashes and123 relative targets match |

Writer's [closeout handoff](../handoffs/writer/beta1-closeout.md) SHA-256 is `c2991603af45e1348d7ccf486208eb00f5af5b450051419cf152b0276f3b18bd`. Coordinator inspected actual reader entry/availability claims and dated baseline language; preserving README and the four status documents avoids inventing a deployed URL, English corpus or duplicate live queue. Prior r2 edits remain unchanged. Writer task is closed; no new manuscript, translation or chapter assignment follows from this audit.

**Parallel edit discovered after that freeze:** a separate ongoing product-planning conversation subsequently changed `docs/roadmap.md`, adding product-stage/Beta4 proposals. That is not Writer's accepted no-change delivery or a Beta1 implementation assignment. Preserve the working-tree edit byte-for-byte, exclude it from this closeout commit/PR15, and leave its planning review/integration separate. Writer acceptance above applies to its explicitly hashed inputs at audit time, not to this later parallel revision. Do not reset/stash/overwrite it or claim the entire checkout is clean while it remains uncommitted.

## Integration boundary

Recheck every changed revision and preserve source/recovery integrity. Verify required Quality/root/Pages checks at the exact final PR head, then authorized squash merge. Record actual PR/check/merge/local-main results separately; never weaken protection. Full public release, other browser/assistive-technology certification and unassigned QA automation remain distinct.

## Actual whole-product review

Coordinator inspected current home/index/language availability, chapter/Markdown/link loading, source manifest, navigation/disclosure/Appearance, search/sharing, semantic globals/recipes and CI/access boundaries. Canonical source hashes and parsed/publication allowlist remain the same; no recursive draft publishing, invented English corpus or deployment action is present. Only PR15 is currently open; the original unaccepted DS01 checkpoint is not an integration candidate.

Read-only live Figma review confirmed the three pages,133 variables/four collections/14 text styles. All111 production-reference variable IDs, names, primitive values and alias targets matched the live file; the22 design-only palette additions remain outside Beta1 code. Inspected current desktop `4:115` and narrow `25:311` screenshots plus current page/required-state identities. Design and runtime share the restrained semantic Day/Night hierarchy, wide rails and narrow on-demand navigation. Intentional adaptations remain: actual Chinese manuscript/figures instead of unpublished English specimen prose; real labelled controls fit the long brand; quiet per-heading disclosures avoid repeated default cards. This is contract/composition alignment, not pixel-identical text or a claim of author visual approval.

Fresh independent closeout browser run passed **24/24 compound cases**: root/Pages ×1440/1024/768/390/320px ×Day/Night (20), plus no-JavaScript reading and keyboard-skip/root-font-reflow per prefix (4). The20 end-to-end cases actually navigate English home → English index with explicit Chinese availability → canonical G01 → search `状态` → focused real heading/next Tab → denied clipboard/manual URL and inspected correction-draft context. Each checks real page identities, source revision, one H1, effective system appearance, rail breakpoints, absence of page overflow and local code/table scrolling. No correction link was opened/submitted.

Captured and inspected in this run, in reader-flow order:

1. English availability/index: clear Chinese-original links; no false English or completed-book promise.
2. Actual Chinese reader, desktop Day and320px Day/Night: source heading hierarchy and source diagrams/tables preserved, planned parts visibly separate from readable chapters, rails adapt without clipped controls.
3. Narrow Night search/results: real input/Close, one current state, locally scrolling results; native result navigation focuses the actual heading and preserves keyboard reading context.
4. Manual copy/correction recovery: visible selectable runtime URL and deliberate editable draft with source context; long text stays inside the page.

Supplementary current-run captures/scripts/results are in `/tmp/vctw-beta1-closeout/`; their local lifetime is not the durable acceptance record. First harness run passed4 cases and timed out20 at a moving `summary:focus` test locator; the corrected run locates actions by the actual source heading ID and passes24 without any product-code change. The test harness error is not reported as a product regression. Root-font doubling is a named reflow probe, not certification of every browser zoom or text-spacing setting.

Prior unchanged r4 evidence remains in the [search/sharing review](beta1-search-sharing.md): independent56 cases plus two compound checks; owner62+16, strict28 tests and fresh7-page/128-reference root/Pages builds. Those are retained stage evidence, not invented reruns in this closeout. Native/physical IME, screen readers, Safari/Firefox and physical devices remain unverified. Permanent E2E infrastructure, a selected redistribution license and deployed-site acceptance remain future gates rather than concealed completed work.

## Accepted closeout payload

Developer's [r1 handoff](../handoffs/developer/beta1-closeout.md), SHA-256 `b520f2b0e76333b9bb4de1b39946659d3d95f54c183b5f5103ce6b9e4f10b40d`, freezes exactly three technical documents. Coordinator independently matched their hashes: content-contract `c0ee5c24036d80f9580ba4a2e3f53e34c2b7a699fab4ad239140841934a50aff`; design handoff `5da86ce2ec74ec34d1fc6f79ecc829749329ed12250fbb4e35ddb3c4c186667e`; runtime guide `50dbb92e2f84b5e93dab8efc031c372cda505c6cc17b643581ebdb68caf348ee`.

The corrections remove stale review/working-tree claims, distinguish acceptance from integration, describe actual client-component/public-metadata boundaries and Next Link versus native URL prefixes, and label historical dependency findings honestly. The narrow renderer/QA descriptions match current implementation without adding publication scope. Independently confirmed the13 remaining search r4 payload files and31 recovery files unchanged, all58 local destinations across closeout technical/review inputs exist, and historical design/palette body unchanged. Writer's five no-change inputs were previously verified; the later parallel roadmap is explicitly excluded as noted above.

No blocking implementation finding remains from this overall review. Accepted Beta1 reading/search/sharing can be integrated; this is not a declaration that the entire book, permanent E2E, public release or Beta2 is complete. Both executor tasks are closed and frozen. The existing [PR15 execution record](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/15) is authoritative for the actual final head/CI/merge/local-main result, avoiding a speculative merge hash or recursive status-only PR. Later tasks require a new concrete assignment.
