# Existing manuscripts — canonical refresh and quiet acknowledgment

Owner: Writer. Revision: r1. Date: 2026-11-18 (Australia/Perth). Status: In review. The [board](../../coordination.md) owns assignment/status; Coordinator owns full affected manuscript review and later integration.

## Task brief

- **Authority/objective:** after the verified completed-batch merge, the author requested refreshing all five existing manuscripts before a new chapter and seeing the newer reading layout afterwards. Adopt already accepted voice/introduction sources, read all five continuously, and make only warranted local clarity/tone/continuity edits. Use the confirmed book pen name and one brief introduction acknowledgment instead of prominent/repeated creation-method blocks.
- **Workspace:** verified isolated `/private/tmp/vctw-m2-existing-manuscripts`, `codex/m2-existing-manuscripts@5141823f9c4a0b5403cf7a24d4269b0d09e2e92d`. Initial dirty files are Coordinator-owned board and preceding closeout review; preserve them. Do not use/reconcile the old shared checkout. No Git writes.
- **Allowed outputs:** canonical `book/drafts/zh/00-before-we-start.md` through `04-api-contract.md`, this handoff, and only current author/identity passages in `README.md` and `book/planning/editorial-brief.md`.
- **Chosen sources:** opening from accepted introduction r3 `book/revisions/zh/voice-alignment-2026-11-18/00-before-we-start-author-introduction-r3.md` (`9d88d46bfa58468b258a033219e351e14929a180ef75636ff5c54d2a15edb352`); G01/F01 from accepted voice copies in that directory; AI/API articles from their current accepted originals. Adoption into these isolated canonical files is explicitly authorized; historical copies/reviews remain frozen.
- **Protected inputs:** saved the seven allowed existing files' pre-edit bytes and all other tracked input hashes except Coordinator-owned board/review records. Preserve historical sources/reviews, technical examples/code/tables/citations, fiction/unrun limits, assets, parser/runtime/manifest/dependencies and existing routes. No artificial length cap or manufactured rewriting.
- **Acceptance:** submit all five final source identities, exact adoption/local-edit differences, explained heading/link changes, unchanged technical evidence, actual parser/local-link checks and compatibility needs. Coordinator reads the actual full five and affected delta; changed technical scope returns to its concept gate.
- **Next boundary:** no self-acceptance, review/board editing, new chapter, translation, cover, runtime, manifest or release work. Developer intake follows only Coordinator's manuscript acceptance.

## Actual full reading and chosen revisions

Created this brief before editing and verified the selected source digests. Read the whole selected introduction, G01 and F01, then both complete current AI/API articles; read the final introduction and the adoption/metadata differences. G01's browser handoff connects to F01; the AI article expressly changes to a fictional activity website rather than claiming the same implementation; the API article independently narrows to a public read-only course catalogue. Necessary qualifications explain different questions and were retained, not cut as repeated warnings. Existing paragraphs, source dates and fictional/unrun boundaries remain. No new mechanism or evidence claim requires concept expansion.

| Canonical file under `book/drafts/zh/` | Selected input and actual outcome | Final SHA256 |
| --- | --- | --- |
| `00-before-we-start.md` | Accepted separate introduction r3. Only two substitutions beyond adoption: public Chinese pen-name byline replaces the old credit/creation label; the dedicated AI-method heading and three paragraphs become one quiet acknowledgment paragraph within the motivation section. All other r3 bytes remain intact. | `b4d0dd040e183cebc0400526ca5b317d23db1dc406e0bd5b00e3af74a940f521` |
| `01-a-page-and-a-system.md` | Exact accepted G01 voice copy; no additional wording edits. Removes the canonical's stale pending-review preamble through the previously reviewed adoption. | `e0fca6dd95b87e93107c4279fb4bad120e80a068c8fc91a58689154293b25a05` |
| `02-browser-foundations.md` | Exact accepted F01 voice copy; no additional wording edits. | `3688b7967433b7a97304438100908d37883d5de9740aaa5c08820b37aa9bf624` |
| `03-after-ai-finishes.md` | Current accepted original; entire source byte-identical after the read. No author/method block was present to remove, and its AI teaching content stays intact. | `c5d066524720e82e63453823dc654878a83e581d88e7370207fac533df48cca3` |
| `04-api-contract.md` | Current accepted original r2; entire source byte-identical after the read. Valid empty result, failed result, runtime-shape limits and maintenance conditions stay intact. | `7bdfb4eac5aa8203a0502a1f8f2c95091878100eda0d9ecd6b7578eb6f0c16fc` |

Historical variants and their reviews remain unchanged. Adoption does not create more originals or supersede the historical identities in old reviews. The new introduction retains its durability wish, personal/work-life background, limited cats bridge, literal eight-part list, reader orientation, teaching-AI section and next-chapter link. No new autobiographical detail was added. Acknowledgment names AI help from research organization through drafting/revision, gives sincere thanks and keeps human selection, original-source checking and disclosure of assumptions/unverified material explicit; no assertion that all checks or English adaptations are complete.

## Narrow identity metadata delta

Only the README About-author paragraph and editorial identity table changed. README now identifies the book pen names and the real project maintainer separately, linking the introduction acknowledgment. The table distinguishes provenance from public byline and locates the single acknowledgment. Existing GitHub/contact text, legal/license names, title/subtitle, roadmap, historical evidence and every other editorial section remain unchanged.

| Additional submitted file | SHA256 |
| --- | --- |
| `README.md` | `78a31c20ba69febe9bdeb931c143ee6cfdf34083f40d5940f92273fb776326b1` |
| `book/planning/editorial-brief.md` | `075c41d9a3a7ae1990e74b0c2c5b385c5dd234801693d5c355664caf4cbc4eee` |

## Heading delta and required intake decision

- Only heading removed: introduction H2 `关于本书的 AI 协作`, previously generated fragment `关于本书的-ai-协作`. It exists in both the old canonical and selected r3. No H1 change, renamed heading or new heading; all remaining heading text/order/IDs across the five match the prior canonical sources (42 total H1/H2 after removal).
- The acknowledgment now lies under existing `我为什么想写这本书`, fragment `我为什么想写这本书`. Proposed safe compatibility for Developer review: explicitly map the old fragment to that retained section when admitting the new introduction; preserve the chapter route and avoid treating an existing shared URL as a missing chapter. This is a proposed target, not an implemented redirect/alias or behavior guarantee. No raw HTML/hidden anchor was injected and the pure parser was not changed.
- The local manifest is intentionally untouched and still hashes the older opening/G01/F01. Source-bound reader builds would require an expressly reviewed exact-source/hash intake first. Existing route IDs/order and the three-entry allowlist remain protected. The two new articles are not automatically admitted; this task does not choose a new reading order or publish five chapters.

## Actual checks and limits

- All five real canonical chapters passed the installed pure Markdown/GFM chapter parser: one H1 each, 42 total heading IDs, 12 code/diagram/JSON fences, five tables and 46 link occurrences. Raw fenced blocks and tables, plus ordered link destinations, match pre-edit canonical bytes exactly for every chapter. All existing local manuscript destinations/fragments resolve, including the AI article's G01 recovery link. Every chapter 01–04 source-note/date suffix is byte-identical to its prior canonical version; prior citation checks are not relabeled as newly browsed research.
- Exact-source assertions passed: introduction equals selected r3 after precisely the two substitutions above; the eight-item list is literal-equal; G01/F01 equal their accepted voice copies; 03/04 equal the pre-edit snapshot. The removed heading is the sole ID difference. Full reading checked the surrounding conditions as well as these structural comparisons.
- All 234 protected tracked identities match the pre-edit snapshot, excluding allowed outputs and Coordinator-owned current board/review records. This includes historical revisions/reviews, analyses, assets, legal records, parser/runtime/manifest and dependency inputs. No shared-old-checkout mutation was made.
- README/editorial/handoff passed the installed generic GFM parse, and their local file link targets exist. An initial auxiliary check prepended an extra H1 and therefore failed the chapter-only single-title rule on documents that already had H1s; the corrected generic document check passed without changing repository parser or content to accommodate the harness.
- Read-only `git diff --check` passed. The actual before/after tracked delta is available in this checkout and a local `/private/tmp/vctw-existing-refresh.diff` for Coordinator inspection: three adopted canonical sources plus two narrow metadata files; 03/04 have no diff. No build, browser/backend/model experiment, external source refresh, installation, Git write, translation or publication was performed.

## Recovery and next boundary

Final five manuscript identities and two metadata identities are frozen for actual Coordinator full-prose/affected review. This handoff is uncommitted; its own digest is sent separately rather than self-referenced. No required substantive issue was found in continuous reading. The old introduction fragment is an explicit Developer-intake compatibility dependency, not a silently solved runtime issue. Await concrete original-owner feedback in the same batch; do not self-close the review, edit Coordinator records or begin another article. Developer source intake and the separate V2 upgrade remain gated on actual review and assignment.

## Reader identity copy follow-up

For the next reviewed homepage/meta-description intake, use the approved English description and this proposed natural Chinese counterpart:

- **English (approved, exact):** Understanding the Systems We Build, and Learning to Live with What We Can’t Fully Control
- **Chinese (proposed):** 看懂我们构建的系统，也学着与无法完全掌控的事相处。

“看懂” keeps the approachable system-understanding theme; “也学着” connects it with ongoing adjustment to wider uncertainty in building, work and life. The latter does not claim that AI cannot be checked or engineering behavior cannot be constrained. This localizes the reader description; it does not rename the book or change the approved English subtitle. Coordinator's affected copy review precedes Developer intake. All previously accepted manuscript/metadata bytes and the original handoff body remain unchanged.

## Verified local source status follow-up

Aligned the six current status documents with the accepted [local source intake](../../reviews/existing-source-intake.md). The verified Developer checkout admits the revised opening based on accepted r3 with the Chinese pen name and brief AI acknowledgment, and the accepted G01/F01 voice revisions. There are five reviewed Chinese originals, three local reader entries, two entries in the last verified public edition and zero English manuscript bodies.

Checked the exact incremental diff and local link targets in changed lines. The dated Milestone 2 record, the Chinese summary below its content paragraph, and the README author section are byte-identical. The five manuscripts and editorial brief match their accepted identities. The other owners' concurrent record updates were preserved. This entry appends to the previously accepted handoff. The linked acceptance records the local runtime verification.

| Submitted status document | SHA-256 |
| --- | --- |
| `README.md` | `d0238d7c7f268ab3ddf5cd95f0eb5aa1deeac3b0e6ac9d26ee1901cb5d33ee5a` |
| `docs/project-vision.md` | `e0b58e4f62151c8f0c9a37ef9df83129971aacf0c17f8b8fcbd377e0d0d0a78b` |
| `docs/roadmap.md` | `06e99a55f57a711b09e851116509ec16605ef3c0c33a4f76cc63d7441dfc37b8` |
| `docs/delivery/milestone-2.md` | `ae940419a6c269fa1883b3e5691fab632c1e2878fe22baa6845f2f4b1ad00eb3` |
| `book/planning/tasks.md` | `92a310c30f538d57599ef0310a2744a2c74da4dde53cd3a25ca756b0dca9dbec` |
| `docs/stage-summary.zh-CN.md` | `a4c9df3b19ffc2c34d7c0a39de39de9e0b42d9f8a51704c4050cece8d87cc3c6` |
