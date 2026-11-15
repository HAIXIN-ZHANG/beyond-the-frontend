# Agent Workflow and Cold-start Onboarding — review

Date: 2026-11-15 (Australia/Perth). Reviewer: Coordinator/Reviewer.

## Scope and outcome

**Accepted: Writer r1 and Developer r3, including the affected board-closure recheck.** The user approved making the three-role Markdown workflow understandable without conversation history. Developer owns stable entry/shared workflow/current-board/templates and engineering explanations; Writer owns its role guide, chapter-workflow alignment and the Chinese overview. Coordinator assigns, inspects, returns findings and integrates; it does not implement the executors' deliverables.

Documentation branch: `codex/agent-workflow-onboarding`, based on main `aafc467860a80a4ad0918d08055336079ebf0e98`. Application code, dependencies, CI/access settings, Chinese manuscripts and the separate unaccepted theme checkpoint are excluded. Product/manuscript/release work remains paused.

## Acceptance criteria

- Stable AGENTS/role guides identify responsibilities and a short startup path without embedding a current task, temporary checkout, branch or historical execution queue.
- One current board owns assignments/workspaces/holds; handoffs own execution evidence and recovery; reviews own actual versioned judgments. Archives are not mandatory startup reading.
- Each task has concrete scope, owner, allowed files, required inputs, output, acceptance and next-step boundary before execution. New agents verify actual checkout/status/revision and preserve existing work.
- Startup reports do not create another approval gate. Unknown roles/scope and applicable holds prevent invented work; direct handoff/feedback is explicit, without continuous watching or repeated receipt loops.
- Original-owner revision, affected re-review, separate chapter analysis/manuscript gates and separate review/check/merge/deployment evidence remain intact.
- Local links/anchors, document scope, English formal text and unchanged manuscript hashes pass appropriate checks. A read-only onboarding exercise must assess whether the actual files answer role, state, ownership and next-action questions.

## Findings and re-review

Writer r1's four-file delivery was read: its stable role guide, chapter workflow, Chinese summary and stage handoff. It removes live task/path/hash snapshots from the role guide, preserves the separate writing gates and links current state to the board. Independent structure/local-link/manuscript-hash checks pass at this point. No blocking Writer issue was found; final cross-file/onboarding acceptance remains pending Developer's frozen delivery.

| Finding | Location and impact | Owner and correction | State |
| --- | --- | --- | --- |
| R1 | The shortened AGENTS entry initially identifies roles/rules without explaining the product or linking its purpose. A new agent can learn procedure while missing what the repository is for. | Developer: add one stable purpose sentence and README/vision pointers for task-relevant reading, without restoring live task/branch/history snapshots. | Closed: inspected AGENTS' purpose paragraph and conditional product links |
| R2 | Template-relative links resolve at `docs/handoffs/TEMPLATE.md` but break if copied unchanged into a role subdirectory. | Developer: explicitly require adapting links to the instantiated report's directory; no new generator is needed. | Closed in r2: inspected the destination-relative examples and resolved actual targets |
| R3 | The archived board starts with old current-task language while its archive disclaimer appears only at the end. Search/readers could mistake it for an active queue. | Developer: label the first screen as a historical snapshot with provenance, preserving original evidence and relocated links. | Closed in r2: first-screen provenance/active-board pointer present; independent reverse relocation preserves original narrative |

The cold-start exercise below has now completed. No PR/check or integration outcome is prefilled. Any missing evidence remains explicit; elapsed time or a handoff is not acceptance.

## Actual frozen-delivery inspection

Read the full 13-file [Developer r2 handoff manifest](../handoffs/developer/agent-workflow-onboarding.md) and four-file [Writer r1 manifest](../handoffs/writer/agent-workflow-onboarding.md), plus the affected diffs. The stable entry and three role guides no longer embed current task IDs, temporary checkouts, working branches or commit snapshots. The current board separates bounded process-document work from the product hold, links exact briefs and accurately records prior PR #7 completion. Its final task closure still needs recording after acceptance.

The workflow/template split supports scoped assignment, actual directory/revision checks, one informational startup report, original-owner revisions, affected re-review, separate chapter gates and durable recovery. No new unattended orchestration, standing reviewer or product implementation is asserted. README's diagram is unchanged; no repeat rendering or product-browser acceptance is claimed.

Independent combined-tree checks pass: 61 Markdown files, 299 local links, no destination/anchor/structure/sensitive-pattern errors and clean whitespace. The changed-file inventory matches the 18 allowed Markdown paths exactly: 13 Developer, four Writer and this review. Both manuscript hashes remain unchanged. Reversing only archive-relative-link relocation recovers the original board narrative (source SHA-256 `b4223e5a0c56991d45afb3656ca1da6062638e303871a65cbd36eb41516f5dbe`). Product sources, dependencies, CI and historical reviews are outside the diff.

The owner's walkthrough is evidence of self-check only. The 12 fixed Developer r2 file hashes were independently compared with their freeze manifest and all match; the evolving handoff is explicitly outside that fixed-file manifest. Writer's four-file delivery was read separately. A final limited board/handoff closure revision was returned to Developer after acceptance; all other files remain frozen.

## No-history, read-only onboarding exercise

A temporary agent started with no parent conversation history, an explicit Developer role, the checkout path and a read-only comprehension task. It read the repository startup route and verified actual local Git state. It did not implement, write files/Git, install dependencies, use external services or message the owner chats. This exercise does not create a fourth standing role or independent product/code acceptance.

The report correctly identified:

- The bilingual engineering book and supporting website, with repository claims distinguished from independently observed product behavior.
- All three role boundaries, the exact documentation-only assignment and both frozen owner revisions; product/manuscript/theme/E2E/release work remained paused.
- The actual branch, HEAD and local main/merge-base equality, the canonical `/private/tmp` path corresponding to the assigned `/tmp` checkout, and existing uncommitted documentation changes that must be preserved.
- Board as live state, task brief as scope, handoff as execution/recovery evidence and review as exact-revision judgment.
- The next safe action: preserve the frozen work and await concrete Coordinator findings, without choosing a roadmap task, switching/resetting a mismatch or treating historical authorization as hold resolution.
- Writer's separate analysis/manuscript gates and the Coordinator's distinct review/closure/Git responsibilities.

It found no broken local links on its inspected startup path and no blocking scope ambiguity. This is a successful comprehension exercise, not exhaustive usability research, remote-state verification, runtime/browser acceptance or proof every future agent will behave correctly. The report was returned during the r2 review window; final closure-state changes will receive an affected recheck separately.

## Continuation

Return required revisions to the original owner, recheck changed work and integrate only the accepted exact revision after required cloud checks. Completion of this workflow-documentation task does not resume the book, theme, components, E2E or deployment.

## Final closure recheck and integration gate

Read Developer r3's actual board/handoff changes. Only the board changed among the 12 fixed r2 files; its handoff separately appends the announced closure. Both executors are Accepted with no open execution task, the product hold remains, and Coordinator integration is separate. The durable theme branch/checkpoint is no longer tied to a permanent directory. The proposed usual-checkout restoration is correctly a plan, not an invented completed operation. All other owner files remain frozen.

Final independent checks pass for 61 Markdown files and 301 local links, with no recorded destination/anchor/structure/sensitive-pattern error, clean whitespace, unchanged manuscripts and the exact 18-file document-only scope. No blocking finding remains. Coordinator may create the scoped PR, add actual integration pointers as separately rechecked status records, wait for its exact head's required cloud checks, and use permitted squash merge. No deployment or downstream stage follows.

The actual PR will supply the reviewed head, cloud run and squash result; this pre-merge review cannot contain its own future commit/merge SHA. Any integration-pointer change receives an affected check and fresh required CI. Following integration and safe checkout synchronization, all product/executor work remains paused for the author's design discussion.
