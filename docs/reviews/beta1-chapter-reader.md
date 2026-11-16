# Initial chapter reader — review

## Final r3 decision — 2026-11-16

**Outcome: Accepted for PR integration.** Coordinator read the final r3 owner handoff, inspected actual source/behavior and independently compared all **22 frozen file hashes: no mismatches**. Handoff SHA-256 at review: `08535694fff016b5f4c3f8cfb44477520951ab4fea388f84301d869bfbfed4b9`. Its manifest is the exact accepted implementation/document revision; this Coordinator record does not self-hash. The Developer task is closed; no dependent feature is released before integration.

Independent final checks: lint/strict application/tooling compilers and **20 tests passed**; Pages export verifier passed **7 pages/120 references**; **46 browser cases plus 12 fresh-context focus cases passed** on the final root/Pages copies. Both **53-file export inventories match** the owner's final manifests. G01 HTML hashes are root `df7932e96ec73e4d5084b58c0c4c386e2bd86acbd371c820b07ea7cd1567fb42` and Pages `b6561f3399e86377ee7f37e365568e9f0dd82d438da784834340f1e7a18c1ee2`. Final screenshots were inspected; no new blocking finding remains. The owner's separate fresh build, 64-case matrix and eight supplements are recorded as owner evidence in the [handoff](../handoffs/developer/beta1-chapter-reader.md), not relabelled as Coordinator executions.

| Finding | Final affected verification | Closure |
| --- | --- | --- |
| READ-01 | Final emitted/computed Chinese H2 styles pass across both prefixes/five widths/Day-Night. | Closed |
| READ-02 | Corrected source closes hidden details, recovers visible main focus after native body blur or pre-hydration resizing and preserves an explicitly focused visible control. Independent final46/12 and owner64/8 checks pass. | Closed |
| READ-03 | Actual attribute parsing retained; final static verifier passes, actual IDs/anchors are unique/present and owner safe-text probe distinguishes escaped text from real event attributes. | Closed |

Canonical manuscript hashes and all 31 ignored recovery files are unchanged. Eight affected documents have **75 valid relative links**; `git diff --check` passes. The separately reviewed Beta 2 palette design/spec/addendum is documentation only, preserved in this delivery; no palette code or new manuscript is accepted here. The previous component-integration status notes are Coordinator evidence, not Developer implementation.

Limits remain Chrome-only local browser evidence, no complete assistive-technology/physical-device certification, no deployment and no permanent E2E suite in this stage. The existing strict compiler separation is unchanged; no check/protection was weakened. PR/exact-head cloud checks/merge remain separate pending facts at this decision. The actual PR execution record must identify the eventual reviewed head, successful jobs and permitted squash result; no future SHA is prefilled here.

**Git execution pointer:** [PR #14](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/14), targeting `main`. Accepted payload commit: `2f30ede4982cc08ad3e5598d538694b0f34b8eda` (28 scoped source/design/status files). A subsequent Coordinator-only board/review pointer update was reviewed as documentation; it does not alter any of the 22 frozen owner files. The PR body records the actual final head, all required job/step results and permitted squash result when observed, avoiding a self-referential future commit/merge claim in this fixed review snapshot.

## Historical interrupted checkpoint

Date: 2026-11-16 (Australia/Perth). Owner: Coordinator/Reviewer. **Outcome: Insufficient evidence; not accepted, committed, in a PR or merged.** The executor reached its usage limit during the current task. The author subsequently asked to record specs and wait until they reset the limit and return to continue.

## Scope and actual workspace

Read [AGENTS](../../AGENTS.md), the [board](../coordination.md), [Developer brief](../handoffs/developer/beta1-chapter-reader.md) and [content contract](../content-contract.md) on recovery. Actual checkout: `/Users/haixin/Desktop/code/vibe-coding-then-what`; branch `codex/beta1-chapter-reader`; HEAD/main baseline `a96fd2134c09989667a16d728a9f1b00f21c6580`. The owner brief remains an unfinished r1 execution record; Coordinator does not rewrite it as a completed delivery.

All existing changes are preserved. Before this checkpoint,25 tracked/untracked changed paths were inventoried, including the two Coordinator status files. Point-in-time SHA-256 inventory: `/tmp/vctw-coordinator-qa/reader-quota-checkpoint.json`, digest `c0814d68fa9150d764de4d025f022ecc49b805f1fdfa957e4465d9c752f84c28`. It precedes the Coordinator-only checkpoint/spec additions and is not an accepted final deliverable manifest. Use actual current status and the list below if temporary files disappear.

## Inspected work and actual evidence

- Inspected the explicit two-source manifest, source containment/hash/H1 checks, build-time Markdown tree and link validation, server-rendered chapter route, semantic body renderer, reading layout/navigation/disclosures, language fallback and source tests. The reviewed manuscript hashes are unchanged: opening `244c4f7a9ddeb781d8530691d07ba17b9daccf611b9631ea60faa412b87a6d90`; G01 `b928e5df21876c0ca49a3c227eb6c7e20723b3f22bb9c7cb2d560cc198db62d2`.
- Independently loaded both sources: opening eight heading IDs/seven outline entries; G01 twelve heading IDs/eleven outline entries, four preformatted blocks and two tables retained. This is source/parser evidence, not whole-reader acceptance.
- Independently ran `npm run check`: lint, strict application/tooling checks and **20 tests passed**, including source drift, missing files, symlink escape, exact preamble handling, duplicate Unicode headings, unsafe HTML/links and English fallback.
- One independent **42-case** root/Pages chapter matrix passed: two sources × five widths × two appearances, plus each prefix's navigation/anchor/language/404 flow. Source hashes/H1/lang, availability, prose/rails/heading sizing, mobile Escape, tables/diagrams, actual links and console errors were checked. Desktop Day and narrow Night/code-table screenshots were inspected. The first test attempt read a client-navigation URL too early; the passing rerun waits for actual URL completion.
- That 42-case run did **not** establish the later hidden-disclosure focus criterion. A subsequently strengthened run stopped at a synchronous focus check after resizing. Later observation found visible body focus but an open hidden disclosure in the then-served artifact. Source now contains a mounted resize listener to close hidden disclosures and return affected focus to `main`; fresh complete export/runtime verification of this exact source is still required.
- Developer's first browser report recorded **52/54** passes and two failures for hidden mobile-disclosure focus. These are executor results, not a passing final delivery. No final frozen owner manifest or completed handoff was received before the usage-limit error. No exact-head cloud CI exists for the reader stage.

## Findings and remaining gates

| ID | Observation / owner response | Required recovery check | Status |
| --- | --- | --- | --- |
| READ-01 | Chinese H2 referenced nonexistent `zh-heading`; source corrected to accepted `zh-h2` | Verify emitted/current computed H2 style in final root/Pages exports | Source correction observed; provisional runtime evidence only |
| READ-02 | Expanded mobile-tool styling could remain active at desktop; media scope corrected. Developer then found focus retained in hidden disclosure and added resize cleanup | From mobile open/focused chapter and outline controls, resize to desktop; wait for observable resize handling, require hidden disclosures closed and focus visible, with no hidden target. Recheck reopening/anchors/keyboard | Not finally closed |
| READ-03 | Export-ID regex matched `data-*-id` suffixes; article-wide event-attribute regex could reject harmless code text. Source now parses real opening-tag attributes | Run final root/Pages verifier, meaningful safe-text/ID checks and inspect actual artifact IDs without weakening original assertions | Source correction observed; final verifier rerun pending |

Do not accept old screenshots/partial matrices as evidence for a new revision. Recheck dependent source changes and preserve all prior failures as history. No search, section actions, palette implementation or other feature may proceed while this reader is unaccepted and on hold.

## Uncommitted implementation paths to preserve

- Dependencies: `package.json`, `package-lock.json`.
- Content: `site/content/manifest.ts`, `links.ts`, `markdown.ts`, `book.ts`, `load-book.ts`.
- Route: `site/app/(chinese)/zh/read/[slug]/page.tsx`.
- New reading composition: `site/components/reading/book-navigation.tsx`, `chapter-reader.tsx`, `markdown-content.tsx`, `reading-disclosure.tsx`.
- Existing integration: `site/components/home-page.tsx`, `reading-index.tsx`, `reading/comparison-table.tsx`, `site/config/i18n.ts`, `panda/global-styles.ts`.
- Verification/docs: `scripts/verify-export.mjs`, `tests/content.test.mjs`, `site/DEVELOPMENT.md`, `docs/content-contract.md`, `docs/design/reading-experience-v1.md`, `docs/handoffs/developer/beta1-chapter-reader.md`.
- Separate Coordinator changes: current board, prior component integration record, this review checkpoint and the new palette spec. Do not stage/reset/overwrite them as executor source.

## Recovery order

1. Wait for the author to reset the usage limit and explicitly resume. No automatic agent restart is scheduled.
2. Developer verifies actual root/branch/HEAD/status, reads this checkpoint and its existing brief, then records the unfinished implementation/checks in that same handoff.
3. Inspect actual changed code against the contract, complete READ-01–03, regenerate clean root/Pages exports and rerun the affected focus/route/content/console and meaningful tests. Temporary preview script is `/tmp/vctw-chapter-reader/serve.py` (ports 44761/44762); recreate if missing. Coordinator scripts/screenshots under `/tmp/vctw-coordinator-qa/` are supplementary, not prerequisites.
4. Finish truthful implementation/design/contract status documentation, freeze exact owner files/digests/evidence, then request Coordinator's actual review. Owner prose completion, local checks, cloud CI, merge and deployment remain separate facts.
5. Coordinator rechecks the frozen revision; only after acceptance create a scoped PR, inspect exact final head and required checks, then perform an authorized merge. No deployment.

The later [reading-palette spec](../design/reading-palettes-spec.md) records a Beta 2 design handoff. It neither changes the current reader scope nor authorizes implementing colors before the current review is complete.

## Resumed recovery — 2026-11-16

The author explicitly requested continuation of the mainline. Coordinator resumed the existing Developer assignment; the owner's execution response confirms availability and recovery of READ-01–03. The earlier author hold is lifted for this Beta 1 stage only. The interrupted evidence and findings above remain historical, not final acceptance.

Coordinator independently rechecked the actual checkout/branch/HEAD and the live GitHub `main` branch: both remain at `a96fd2134c09989667a16d728a9f1b00f21c6580`. The remote branch reports protection with the three existing required checks. No branch or settings change was needed. All reader and Coordinator design/document changes remain preserved.

Pending: the owner's fresh root/Pages artifacts, completed handoff/frozen manifest and actual independent affected re-review. No product acceptance, PR, cloud CI or merge is recorded for this resumed stage yet. Beta 2 implementation and deployment remain held.

### Independent resumed checks, before owner freeze

Coordinator inspected the manifest/load/parser/link pipeline, server route and semantic renderer, responsive layout/disclosures, export assertions and affected documentation. Independently reran `npm run check` after the actual READ-02 correction: lint, strict application/tooling checks and all 20 tests passed. Independently ran the final Pages artifact verifier: seven pages and 120 local links/assets passed. The owner's root/Pages build evidence remains separately attributable.

On the freshly rebuilt root/Pages preview copies, the independent 46-case chapter matrix passed (both sources, five widths and Day/Night plus anchors, language/next/404 and resize/reopen flows). A separate 12-case new-context matrix passed closure/main-focus recovery and preservation of an already focused visible Header control. Neither matrix reported page errors. New desktop Day, narrow Night and local-table screenshots were inspected. Supplementary scripts/results are under `/tmp/vctw-coordinator-qa/`; the final owner freeze/revision comparison is still required before acceptance.

The READ-02 intermittent failure was real: the browser could blur a newly hidden descendant to body before the resize callback checked containment. The owner added body-focus recovery while preserving other explicit focus targets, and initial reconciliation for a breakpoint crossed before hydration. Earlier passing/provisional matrices do not supersede the failing observation; the new checks above exercise the corrected source/artifacts.

Both reviewed manuscript SHA-256 values remain unchanged. All 31 files in the ignored recovery snapshot match its existing manifest. No product implementation was written by Coordinator. The managed GitHub connection can read the live protected-branch/required-check summary, but its full protection-detail endpoint returned 403; no settings or access were changed, and historical detailed flags are not claimed as freshly re-audited here.
