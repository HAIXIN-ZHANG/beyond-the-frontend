# Vibe Coding, Then What? — coordination board

Updated: 2026-11-16 (Australia/Perth). This is the sole live assignment/hold/workspace record. Read [AGENTS](../AGENTS.md) → explicit role guide → this board → task brief/necessary inputs. [Collaboration](collaboration.md) owns detailed workflow. Reviews own actual acceptance; handoffs own execution/recovery evidence.

## Current scope and holds

**Beta 1 design/code/docs alignment:** Coordinator completed live Figma inspection, design changes and professional language/typography/composition re-review, accepted for technical handoff in [the actual review](reviews/beta1-design-alignment.md). Author visual judgment remains separate. Both r1 source/editorial audits were accepted. The author's required order was design/re-review first, then these narrowly assigned owner-authored alignment documents.

Main now includes the reviewed Panda/System/Day/Night foundation on its bilingual home/empty-index/404 shell. It still has no chapter reader/search/section-copy implementation. The earlier four-test shell audit remains historical evidence; the foundation has its own actual eleven-test, export, browser and cloud acceptance in [the theme review](reviews/beta1-theme-foundation.md). [UI04 handoff](design/reading-experience-v1.md) defines the component/reading targets; design acceptance alone is not implementation.

**The author explicitly approved staged Beta 1 execution on 2026-11-16.** Current assignments below lift the earlier hold only for their named files and checks. Coordinator reviews each frozen stage, returns findings to its owner, and integrates accepted work through PR and exact-head CI before assigning dependent stages. Necessary npm/browser tooling is authorized. Do not deploy.

| Owner | Current assignment | State and next boundary |
| --- | --- | --- |
| Developer | [Reading components](handoffs/developer/beta1-reading-components.md): UI04 Header/Appearance and reusable reading primitives/recipes | Frozen r4 [Accepted](reviews/beta1-reading-components.md); all four findings closed after independent checks/digest comparison; task closed, PR/CI/integration pending; no renderer/search/AI/deployment continuation |
| Writer | [Opening orientation alignment](handoffs/writer/beta1-opening-alignment.md): new entry/audience, eight-part guide and two outline-status paragraphs | Prose r2/status through r4 [Accepted](reviews/beta1-opening-alignment.md) and merged in PR #12; closed; no new chapter/translation |
| Coordinator/Reviewer | Own review/status/Git; preserve disjoint executor changes | Theme/opening merged; assign and review next bounded component stage; no substitute implementation |

After accepted components: reviewed initial chapter renderer → scoped static search/section actions → actual QA/E2E → integration/handoff. These are approved plan dependencies, not current executor file assignments. Optional AI cards may be deferred. Beta 2/3, new manuscript mechanisms, translations and deployment remain on hold.

Current shared checkout: `/Users/haixin/Desktop/code/vibe-coding-then-what`, branch `codex/beta1-reading-components`, starting HEAD/remote main `2534b90d23c3624e4ce393aa02f52df4dea75e06` (fetched, clean and verified against reviewed implementation digests before this assignment). Preserve all changes. Only Coordinator performs Git writes; Developer owns the new scoped brief/files, Writer is closed.

Completed foundation/opening integration: [PR #12](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/12), final reviewed head `23c3d19586d03e3cfb5d84044f0db7015c51188e`, successful [CI run 43791847318](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/actions/runs/43791847318), actual squash `2534b90d23c3624e4ce393aa02f52df4dea75e06`. All Quality/root/Pages jobs and steps passed; exact-head checks came from app 15368. Main remains public/default/protected against force push/deletion; no settings were weakened and no deployment occurred. The original DS01 checkpoint is preserved, not merged wholesale.

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

Both design/document executor assignments are closed after actual affected review. [PR #11](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/11) merged after final head `f4f3254a625d0dd38d634f4af127b03102f8cd8e` passed all three required jobs in [run 43723690316](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/actions/runs/43723690316); actual squash is `eb822357b6bf1cafe090508254b1aa6c3e71ce8f`, verified locally against fetched main. No deployment occurred. The scoped workspace above is historical, superseded by the current assignments.

## Current design decisions and durable evidence

Same Figma file `3GYIfJz8xSPGx3AE3RRkKi`, three pages and 111 variables/four collections/14 text styles. Final addition: **eight families/24 variants**, six Beta 1 (including conditional copy and SearchField) and two Beta 2 concepts. The prior seven/21 count preceded the final SearchField correction. Compatibility BTF namespaces remain for DS01 mapping; no Code Connect publication is established.

[Beta 1 states](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=129-388) separate real Chinese availability and planned navigation. Current-language search honestly handles absent English corpus; Appearance separates effective Day/Night trigger from System/Day/Night preference; principal chapter layouts are card-free, with optional editable copy/manual fallback isolated. SearchField is distinct from the search trigger, including 320px text entry without a desktop shortcut hint. [Beta 2 concepts](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=129-475) stay separate; Beta 3 remains roadmap-only.

The design handoff records exact IDs, actual reported structure/color checks and unresolved runtime/accessibility gates. Temporary screenshots are supplementary; design composition, code implementation, browser acceptance and release are distinct.

## Earlier integrations

Branding and reader-facing README/workflow alignment completed through [PR #10](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/10). Coordinator's actual integration record names final reviewed head `ec037833532cad033126e20f99952e1c82eea6c9`, successful Quality/root/Pages jobs and steps in [run 43719534693](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/actions/runs/43719534693), and squash `630ab7e57dd2139c87e2bdd3e90cd981c008a6fd`, the verified base at that stage. [Its review](reviews/vibe-coding-rebrand.md) retains the historical opening-title exception/hash and scope. No deployment occurred. PR #11 and the latest PR #12 evidence are recorded above.

The canonical repository/About/origin rename is completed. Older task paths, aliases and review/PR records retain their historical identities; none is an active assignment or proof of the current design's implementation.

## Preserved recovery

The unaccepted DS01 work stays at branch `codex/ds01-panda-theme` / checkpoint `4da2578048f8df113fed92d99e084f644a9a788e`. Locate it with `git worktree list` and actual revision/status checks, without assuming a permanent directory. [DS01 handoff](handoffs/developer/DS01.md) and [review](reviews/DS01.md) retain local evidence and unfinished browser/integration gates; no wholesale merge or harness run is assigned here.

Keep the 31 generated files and `manifest.json` in ignored `.local/recovery/theme-generated-after-onboarding-2026-11-15/` byte-identical. Their presence is recovery evidence, not main's theme implementation or a published artifact.
