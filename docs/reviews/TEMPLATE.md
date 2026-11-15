# [Readable task/outcome name] — review

Coordinator/Reviewer owns this judgment. Keep one record per gate with revision history; chapter analysis and manuscript use distinct agreed references. The task brief owns the full assignment and the board owns live state; link them instead of copying both.

- **Date/reviewer:** [date, timezone, reviewer].
- **Handoff/gate:** [actual path and review type].
- **Reviewed revision and scope:** [exact revision/commit or file/digest manifest, exclusions; distinguish executor evidence from inspected evidence].
- **Outcome:** [Accepted / Changes requested / Insufficient evidence].
- **Next boundary:** [required owner revision/evidence or already authorized continuation; holds and unresolved scope remain effective].

## Actual inspection and evidence

Record files read, commands run or behavior observed, actual results and missing checks. Distinguish source inspection, runtime checks, browser observation and cloud evidence. An executor's claim is not independent evidence merely because it is copied here. A documentation review does not accept product behavior.

## Findings and closure

| ID | Severity | Location and issue | Impact/evidence | Original owner and acceptance criterion | Closure evidence/status |
| --- | --- | --- | --- | --- | --- |
| [real ID] | [blocking/non-blocking] | [file/section/trigger] | [consequence] | [who corrects what, how rechecked] | [open or verified closure/revision] |

If no required revisions exist, say so and remove the example. Separate suggestions from blockers. “Insufficient evidence” is not acceptance; name the missing evidence and responsible owner.

## Feedback and re-review history

### [Date / submitted revision]

- **Feedback sent:** [findings, allowed revision scope, checks and original owner; report failed delivery].
- **Actual affected recheck:** [changed files/revision and what the reviewer inspected/ran].
- **Closed/open:** [finding IDs and closure evidence, preserving prior history].
- **Outcome and next action:** [exact acceptance or outstanding work; do not automatically release unrelated work].

Changed revisions require affected re-review; never apply old approval silently. Close executor assignments after acceptance unless scoped revisions or an explicitly authorized next task remain. Keep any product hold separate from review/integration.

## Git and publication evidence

- **PR/actual reviewed head:** [verified URL and exact head when available].
- **Required checks:** [actual run/job results for that head, not an earlier revision].
- **Merge:** [actual permitted squash result or verified already-in-main equality; never a predicted SHA].
- **Deployment:** [separate applicable authorization and actual outcome, or not performed].

The proposed head and squash commit differ. This review cannot contain its own future commit/merge SHA: use a pre-merge decision with an actual PR pointer, then the PR execution record or later evidence for final identifiers; recheck any additional committed change. Do not manufacture a PR for an already integrated branch, weaken protection or deploy merely to populate fields. Acceptance is not proof of checks, merge or release.
