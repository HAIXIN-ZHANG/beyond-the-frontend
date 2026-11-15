# Vibe Coding, Then What? — coordination board

Updated: 2026-11-15 (Australia/Perth). This is the sole live assignment/hold/workspace record. Read [AGENTS](../AGENTS.md) → explicit role guide → this board → task brief/necessary inputs. [Collaboration](collaboration.md) owns detailed workflow. Reviews own actual acceptance; handoffs own execution/recovery evidence.

## Current scope and holds

**Beta 1 design/code/docs alignment:** Coordinator completed live Figma inspection, design changes and professional language/typography/composition re-review, accepted for technical handoff in [the actual review](reviews/beta1-design-alignment.md). Author visual judgment remains separate. Both r1 source/editorial audits were accepted. The author's required order was design/re-review first, then these narrowly assigned owner-authored alignment documents.

Main remains a bilingual home/empty-index/404 shell, not a Beta 1 chapter reader. Coordinator actually passed `npm run check` (lint, route types, strict TypeScript and four tests); that is shell evidence, not implemented reader/theme/search/copy behavior. No immediate source-only code fix was justified by the audit. [UI04 handoff](design/reading-experience-v1.md) defines targets and future acceptance.

**Other product/prose work remains Paused:** no chapter writing/translation or opening-orientation revision, chapter renderer/schema, Panda/theme integration, new UI behavior, E2E implementation, dependency installation or deployment. Design/document acceptance does not lift those holds. Future changes require exact assigned scope after the relevant review.

## Last scoped workspace and baseline

- Actual root: `/Users/haixin/Desktop/code/vibe-coding-then-what`; branch `codex/beta1-design-alignment`; HEAD/base/local `origin/main` verified at `630ab7e57dd2139c87e2bdd3e90cd981c008a6fd` before alignment.
- Initial main was clean. Coordinator subsequently created this branch while preserving the two audit reports. Executors made no Git writes. Use explicit workdirs and absolute edit paths; preserve disjoint ownership.
- The earlier directory `/Users/haixin/Desktop/code/beyond-the-frontend` in past handoffs is historical execution context. The project directory was externally renamed before PR #10's final return to main; Coordinator verified repository/origin/file hashes and preserved ignored recovery data. Do not recreate the old directory or rewrite historical handoffs.

## Closed owner assignments

| Owner | Concrete scope and handoff | State | Next action |
| --- | --- | --- | --- |
| Developer | Accepted r1 source/DS01 audit; r2 UI04 design handoff, this board, brief developer-guide target pointer and same [report](handoffs/developer/beta1-design-alignment.md) | Accepted through r3; closed | Preserve accepted documents; no implementation continuation |
| Writer | Accepted r1 editorial audit; r2 vision/roadmap pointers, single Chinese summary and same [report](handoffs/writer/beta1-design-alignment.md) | Accepted through r2; closed | Preserve accepted documents; no prose/body/outline expansion |
| Coordinator/Reviewer | Owns Figma changes, professional review, document acceptance, feedback and Git integration; [review](reviews/beta1-design-alignment.md) | Design and alignment Accepted; integration pending | Handle scoped PR, exact-head required checks and authorized merge |

Both executor assignments are closed after actual affected review. Coordinator integration is tracked in [PR #11](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/11), starting with accepted snapshot `94f321565058c464834fe671225c51159c232461`; only actual review/board pointers are added afterward. At this record's commit, final-head checks and merge remain pending. The PR execution record owns their eventual actual results; no future success is prefilled. The scoped workspace above is history, not a permanent checkout assignment. Preserve other holds throughout.

## Current design decisions and durable evidence

Same Figma file `3GYIfJz8xSPGx3AE3RRkKi`, three pages and 111 variables/four collections/14 text styles. Final addition: **eight families/24 variants**, six Beta 1 (including conditional copy and SearchField) and two Beta 2 concepts. The prior seven/21 count preceded the final SearchField correction. Compatibility BTF namespaces remain for DS01 mapping; no Code Connect publication is established.

[Beta 1 states](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=129-388) separate real Chinese availability and planned navigation. Current-language search honestly handles absent English corpus; Appearance separates effective Day/Night trigger from System/Day/Night preference; principal chapter layouts are card-free, with optional editable copy/manual fallback isolated. SearchField is distinct from the search trigger, including 320px text entry without a desktop shortcut hint. [Beta 2 concepts](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=129-475) stay separate; Beta 3 remains roadmap-only.

The design handoff records exact IDs, actual reported structure/color checks and unresolved runtime/accessibility gates. Temporary screenshots are supplementary; design composition, code implementation, browser acceptance and release are distinct.

## Last completed integration

Branding and reader-facing README/workflow alignment completed through [PR #10](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/10). Coordinator's actual integration record names final reviewed head `ec037833532cad033126e20f99952e1c82eea6c9`, successful Quality/root/Pages jobs and steps in [run 43719534693](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/actions/runs/43719534693), and squash `630ab7e57dd2139c87e2bdd3e90cd981c008a6fd`, the locally verified current base. [Its review](reviews/vibe-coding-rebrand.md) retains the accepted opening-title exception/current hash and scope. No deployment occurred.

The canonical repository/About/origin rename is completed. Older task paths, aliases and review/PR records retain their historical identities; none is an active assignment or proof of the current design's implementation.

## Preserved recovery

The unaccepted DS01 work stays at branch `codex/ds01-panda-theme` / checkpoint `4da2578048f8df113fed92d99e084f644a9a788e`. Locate it with `git worktree list` and actual revision/status checks, without assuming a permanent directory. [DS01 handoff](handoffs/developer/DS01.md) and [review](reviews/DS01.md) retain local evidence and unfinished browser/integration gates; no wholesale merge or harness run is assigned here.

Keep the 31 generated files and `manifest.json` in ignored `.local/recovery/theme-generated-after-onboarding-2026-11-15/` byte-identical. Their presence is recovery evidence, not main's theme implementation or a published artifact.
