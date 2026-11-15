# [Readable task/outcome name] — task brief and handoff

Owner: [Writer/Developer]. Legacy reference: [if applicable]. Revision: [r1/r2]. Begin this file at assignment, before execution, and maintain one report per meaningful stage. Delete unused placeholders; do not invent evidence. The [board](../coordination.md) owns live state; this report owns assignment/execution evidence; the [review](../reviews/TEMPLATE.md) owns judgment.

When instantiating this template, relocate relative links for the destination directory. For `docs/handoffs/developer/<task>.md` or `docs/handoffs/writer/<task>.md`, the board link is `../../coordination.md` and the review-template link is `../../reviews/TEMPLATE.md`; replace the latter with the actual stage review when it exists. Verify the instantiated links rather than copying the template's directory-relative destinations unchanged.

## Task brief — record at assignment

- **Owner and status:** [assigned role; lifecycle state from collaboration; any independent hold, reason, responsible party and resume condition].
- **Authority/objective:** [concrete user/Coordinator assignment and intended result].
- **Allowed files and exclusions:** [exact paths/areas; other-owner changes to preserve].
- **Workspace/branch/baseline:** [assigned checkout/branch/base, actual verification; Coordinator manages Git writes].
- **Inputs:** [necessary accepted contracts, files/revisions and source boundaries].
- **Deliverable/review type:** [output and research/outline, manuscript, code/page, design or process gate].
- **Acceptance criteria:** [observable checks and explicit evidence required].
- **Dependencies and next boundary:** [decision/owner needed; next already authorized step or scope pending].

The board links this brief rather than duplicating the full assignment. A role guide or roadmap does not supply missing scope.

## Execution and submitted revision

- **Delivery:** [exact changed files and important sections/modules; submitted revision and excluded work].
- **Actual verification:** [commands/observations and results, source/browser evidence where relevant; explicitly unperformed checks and limits].
- **Open issues:** [question, consequence, responsible owner and resolution needed].
- **Review:** [actual record/revision if present, otherwise pending Coordinator review].
- **Next action:** [submit/revise/wait, or already authorized continuation after acceptance; no self-release].

Use a commit or exact file/digest manifest when available. A report cannot know its own future commit SHA; do not chase a self-referencing hash. A fixed product/file manifest may exclude this evolving report if stated; Coordinator later records the actual reviewed commit. Historical hashes refer to their named original revisions.

## Revision responses — append in this file

| Finding | Revision and changed location | Actual verification/limits | Coordinator closure evidence |
| --- | --- | --- | --- |
| [real ID only] | [specific correction] | [actual result] | [pending or actual review] |

Freeze submitted files and send the path, revision, short scope/checks/open questions directly to Coordinator. Announce changes to frozen work. Findings return to the original owner; Coordinator rechecks affected revisions. Receipt/silence is not acceptance. Analysis and manuscript have distinct reviews.

## Recovery checkpoint — update before stopping

- **Done / not done:** [deliverables completed, unfinished work and exclusions].
- **Uncommitted work:** [exact owner files, shared-tree changes to preserve, actual checkout/branch/base].
- **Last verification:** [checks/results/date, missing checks and limits].
- **Review state:** [last submitted/reviewed revision, open findings and actual review link].
- **Resume:** [next concrete action, responsible party, applicable hold and explicit resume condition].

Keep essential recovery facts here, not only ignored notes, temporary screenshots or tool logs. On restart verify actual tree/status and current board before editing. Acceptance, Git/checks/merge and deployment remain separate; reference actual integration records once they exist.
