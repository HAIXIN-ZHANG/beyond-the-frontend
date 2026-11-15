# Agent Workflow and Cold-start Onboarding — Developer handoff

Revision: r3 (closure after accepted r2; earlier evidence retained below). Date: 2026-11-15 (Australia/Perth). Owner: Developer. Submitted revision: frozen for affected closure recheck. Coordinator accepted Developer r2 and Writer r1 after actual inspection and an independent cold-start exercise; no executor task remains open. The [board](../../coordination.md) owns current assignments and holds; this report owns task/execution evidence. [Coordinator review](../../reviews/agent-workflow-onboarding.md) owns the exact judgment and integration record.

## Task brief

- **Authority and objective:** Coordinator assigned the user-approved documentation-only workflow/onboarding change. A replacement agent must find its explicit role, current assignment, ownership, evidence and next action without private chat history.
- **Workspace and baseline:** `/tmp/btf-project-docs`, branch `codex/agent-workflow-onboarding`, starting HEAD `aafc467860a80a4ad0918d08055336079ebf0e98`. Writer shares the checkout with disjoint ownership. Every command uses an explicit workdir; edits use absolute paths. Coordinator manages all Git writes.
- **Allowed files:** `AGENTS.md`, `docs/collaboration.md`, `docs/coordination.md`, `docs/developer-sync-prompt.md`, new `docs/coordinator-role.md`, `docs/handoffs/TEMPLATE.md`, `docs/reviews/TEMPLATE.md`, `README.md`, `docs/project-brief.md`, `docs/agent-notes-policy.md`, `docs/development-history.md`, optional sole `docs/archive/coordination-before-onboarding.md`, and this report. No other files are assigned to Developer.
- **Inputs:** existing entry/role guides, workflow/board/templates, project entry/history, storage policy, completed PR #7 evidence, Writer's frozen four-file onboarding delivery and Coordinator's review criteria.
- **Deliverable and acceptance:** short stable English entry and role guides; collaboration as sole detailed workflow; board as current-state authority; task brief/recovery in the existing handoff format; exact-revision review and separate integration evidence; preserved historical board; minimal entry/history/storage alignment. Verify links/anchors, scope, no task snapshots in stable guides, original-owner revisions, hold behavior and unchanged manuscripts/product files.
- **Dependencies and next boundary:** Writer owns its guide, chapter workflow, Chinese summary and handoff. Coordinator owns the actual review and final board closure. Submit frozen evidence and handle scoped review findings only; product/manuscript/E2E/deployment work remains paused. No installation, Git writes, implementation or publication is performed under this assignment.

## Execution evidence

### Delivered manifest — 13 Developer files

| File | Result |
| --- | --- |
| `AGENTS.md` | Short stable English entry, project-context pointers used only when needed, explicit roles/startup/authority/evidence links; no current-task or workspace snapshot |
| `docs/collaboration.md` | Sole detailed ownership/workflow, lifecycle and independent holds, original-owner revision, two chapter gates, messages, recovery and integration boundaries |
| `docs/coordination.md` | Current tasks/owners/workspace, product hold, concrete task-brief links, prior PR #7 completion and preserved theme recovery; final-acceptance closure explicitly distinct from integration |
| `docs/developer-sync-prompt.md` | Stable Developer responsibilities, actual-state verification, startup prompt and scoped recovery/delivery |
| `docs/coordinator-role.md` | Stable Coordinator/Reviewer role, assignment/review/owner feedback/closure/Git boundaries and startup prompt |
| `docs/handoffs/TEMPLATE.md` | Assignment begins as task brief, then evidence/revision/recovery in one stage report |
| `docs/reviews/TEMPLATE.md` | Exact revision, actual inspection, owner/criterion/closure evidence and separate CI/merge/release evidence; avoids future self-SHA loops |
| `README.md` | Completed PR #7 status and startup/authority links; product prose and Mermaid diagram preserved |
| `docs/project-brief.md` | Compatibility links and identity/contracts, with runtime queue delegated to board |
| `docs/agent-notes-policy.md` | Stable formal/local storage authority and durable recovery requirements, no current-task snapshot |
| `docs/development-history.md` | DOC02 completed state, actual PR #7 head/run/squash ledger and optional archive link; earlier outcomes retained |
| `docs/archive/coordination-before-onboarding.md` | Original long board narrative retained; only relative link relocation and historical-use note added |
| `docs/handoffs/developer/agent-workflow-onboarding.md` | This initial task brief, exact manifest, checks, limits and recovery |

### Actual checks and evidence

- Verified assigned checkout/branch/HEAD and local `origin/main` equality at `aafc467860a80a4ad0918d08055336079ebf0e98`. The original theme checkout remains clean at `4da2578048f8df113fed92d99e084f644a9a788e`; no Git write was performed.
- GitHub read-only evidence confirms PR #7 is closed/merged, final head `dd08e7aa4a6e13f949bd389d8919e23a96f07a1d`, squash `aafc467860a80a4ad0918d08055336079ebf0e98`, and run `43672904569` completed successfully for Quality and both Static export jobs. Main's fetched branch metadata names that squash SHA. These are prior-task facts, not new onboarding CI or a new access audit.
- `python3 /tmp/btf-doc-verification/check-docs.py` passed combined-tree Markdown structure, local links/anchors, whitespace/sensitive-pattern checks, retained historical hashes and Figma links: 61 Markdown files, 299 relative links and one heading anchor, with no errors at r1. This is source-level verification, not product/browser acceptance.
- Scoped Python assertions passed: exactly 13 assigned Developer files plus four Writer files and one Coordinator review comprise the changed tree; stable entry/Developer/Coordinator guides contain no temporary workspace, working branch, task-ID queue, date or commit snapshot; individual tables have consistent columns.
- Archive round-trip restored every original narrative byte after removing its historical note and reversing only relative-link relocation. Original board SHA-256: `b4223e5a0c56991d45afb3656ca1da6062638e303871a65cbd36eb41516f5dbe`.
- README Mermaid source is byte-identical to HEAD. No new rendering is claimed or needed for unchanged diagram code. Product code, dependency files, workflow files and historical reviews are unchanged.
- Opening/G01 remain byte-identical to HEAD. Opening SHA-256: `726963e8c759d832b6821bede35c07780c24ca166f8b67ce86dac82e19ec21c5`; G01: `b928e5df21876c0ca49a3c227eb6c7e20723b3f22bb9c7cb2d560cc198db62d2`.
- `git diff --check` passed. No dependency installation, build/E2E rerun, browser harness, manuscript translation, deployment, settings change or Git mutation occurred for this documentation task.

### Author walkthrough — not independent acceptance

Read the entry → each role guide → board → assigned brief/review. Verified the written paths answer: explicit caller role rather than inference; clear assigned documentation work proceeds without another approval gate; missing task asks Coordinator; product hold does not block the separately assigned documentation task; Changes requested returns to its original owner and changed revisions need affected review; interrupted work recovers from the same brief and actual tree. The board explicitly requires closing executor tasks after final acceptance while keeping integration and product holds separate.

This is the owner's source walkthrough, not Coordinator's independent cold-start exercise. Coordinator must perform its own acceptance inspection on the combined frozen Writer/Developer tree. No new review acceptance, PR, CI or merge result is claimed here.

### Review revisions

| Finding | Owner revision/location | Verification and closure |
| --- | --- | --- |
| R1 | Before r1 freeze, AGENTS gained one stable product description and README/vision/roadmap pointers used only when needed | Closed by Coordinator's actual entry reinspection; see review |
| R2 | r2, `docs/handoffs/TEMPLATE.md`: explicit destination-relative link relocation and concrete role-directory examples | Closed by Coordinator after inspecting examples and resolving actual targets; see review |
| R3 | r2, archive first screen: Historical snapshot, not active instructions, source baseline and current-board link; original narrative retained | Closed by Coordinator's first-screen/reverse-relocation checks; see review |

Coordinator's closure guidance remains on the board and Coordinator guide: after acceptance, no open executor task remains unless a concrete new/revision assignment exists. r2 also updates the board's submitted revision and this report. The other nine fixed Developer files are unchanged from r1; the task report is excluded from fixed-file digest comparisons to avoid a self-hash loop. No feedback message substitutes for final acceptance.

r2 verification passed: the archive round-trip restores the original board narrative byte for byte; destination-relative template examples resolve in both role directories; the three affected fixed files above are the only changes against the saved r1 digests. The combined-tree checker again reports 61 Markdown files, 299 local links, one anchor and no errors; `git diff --check` passes. The supplementary twelve-file digest manifest is `/tmp/btf-onboarding-checks/developer-r2.json`, excluding this evolving report; the exact paths and durable results remain recorded here if the temporary manifest disappears.

### r3 — authorized two-file closure

Coordinator reported final acceptance after independently closing R1–R3, checking the combined tree and completing a read-only Developer cold-start exercise without project chat history. That exercise correctly identified product/roles, frozen r2, review/hold boundaries, document authorities and recovery/conflict behavior with no blocking ambiguity. These are Coordinator's reported review results, not a new Developer exercise or self-approval.

The only closure changes are `docs/coordination.md` and this handoff. The board records Writer r1/Developer r2 Accepted and no open executor tasks, separates Coordinator's remaining affected review/PR/checks/merge, and retains the product hold without predicting a new PR/head/CI/merge result. Theme recovery is anchored to `codex/ds01-panda-theme` plus checkpoint `4da2578048f8df113fed92d99e084f644a9a788e`; locate any checkout with `git worktree list` and actual revision/status checks. Coordinator's planned return of the usual directory to latest main is explicitly a plan, not a completed checkout change.

r3 checks passed: combined-tree checker reports 61 Markdown files, 301 relative links, one anchor and no errors; `git diff --check` is clean. A pre-closure digest comparison identifies exactly these two affected paths. All eleven other fixed Developer files match the frozen r2 digests; no other owned files changed during this revision. Board assertions confirm Accepted r1/r2, no open executor tasks, separate Coordinator integration and branch/checkpoint-based recovery without claiming a completed checkout restoration. HEAD remains `aafc467860a80a4ad0918d08055336079ebf0e98`; no Git write occurred.

## Recovery

**Done:** the 13-file delivery, r1/r2 source checks, Coordinator's independent review/cold-start exercise and R1–R3 closure; Developer r2 and Writer r1 are Accepted. The two-file r3 closure is frozen for affected recheck. **Not done:** Coordinator's r3 closure recheck, onboarding PR/cloud checks/integration or planned checkout restoration, and all product/manuscript/E2E/release work.

At r3 submission the 13 Developer files remain uncommitted in the assigned checkout/branch/base above. Writer's four files and Coordinator's review are separate owned changes; preserve them. No executor task is open. Coordinator performs the remaining affected review and authorized integration; a specific correction request returns only that revision to its original owner. Product holds continue pending the user's project-design discussion and an explicit scoped resumption. Do not infer new work from accepted documentation.

For any future assignment, read AGENTS → explicit role guide → board → relevant brief/review, then verify actual directory/branch/HEAD/status before editing. The theme branch/checkpoint above is durable; an old directory-to-branch association is not. Last accepted Developer revision is r2; r3 changes only closure evidence and awaits Coordinator's affected recheck. Temporary scripts/digests are supplementary; this manifest, evidence and remaining-work boundary support recovery without them.
