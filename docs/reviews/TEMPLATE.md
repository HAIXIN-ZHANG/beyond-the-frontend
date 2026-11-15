# [Readable outcome name] — review

Legacy reference: [existing review/task ID]. Coordinator writes the actual judgment. Use one record per gate, preserving revisions; research/outline and manuscript use different references. Historical translation may clarify names without changing the original acceptance or finding IDs.

- **Date/reviewer:** [date, timezone, reviewer]
- **Review type:** [research/outline / manuscript / code/page / design / process]
- **Handoff:** [actual path]
- **Reviewed revision and scope:** [revision, exact files, commit/digest when available, exclusions]
- **Outcome:** accepted / changes required before re-review / insufficient evidence
- **Next step:** [specific authorized continuation or required revision/evidence; unresolved scope stays unresolved]

## Actual inspection and evidence

Record what was read, run or observed, with results and missing checks. Distinguish source checks, static inspection, runtime tests and browser verification. An executor's report does not become independent reviewer evidence merely by copying it.

## Findings

| ID | Severity | Location and actual issue | Impact/evidence | Owner, revision and acceptance criterion |
| --- | --- | --- | --- | --- |
| R1 | [blocking / non-blocking] | [trigger and file/section] | [specific consequence] | [who changes what and how it is rechecked] |

If there are no required revisions, say so and remove the example. Do not manufacture findings. Separate suggestions from blockers.

## Feedback returned to the owner

Provide executable guidance: findings, allowed files, preserved behavior/content, checks, handoff update and re-review. If accepted, state the exact acceptance and next already authorized step without enlarging scope.

## Re-review history

### [Date / revision]

- **Actual recheck:** changed files, findings and checks.
- **Closed/open:** finding IDs, locations and evidence.
- **Current outcome:** accepted / further revision / insufficient evidence.
- **Continuation:** already authorized next step or pending decision.

## Git and publication evidence

Record actual PR, reviewed head SHA, check run/results, squash merge and deployment separately. New commits require affected changes to be rechecked. A reviewed PR head and its squash commit are different identifiers. Review acceptance is not evidence that Git operations or publication occurred; do not execute extra release work merely to populate this section.
