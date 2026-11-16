# Beta 1 technical documentation closeout — Developer handoff

Owner: Developer. Revision: r1. Date: 2026-11-16 (Australia/Perth). Status: Frozen for Coordinator review; no self-acceptance or integration claimed. The [board](../../coordination.md) owns assignments and the [overall review](../../reviews/beta1-closeout.md) owns acceptance.

## Task brief

- **Authority/objective:** Coordinator assigned CLOSE-01 under the author's overall Beta1 review/closeout request. Correct obsolete live technical status and actual technical inconsistencies, using durable behavior and links to actual reviews/board/PR15. Do not predict merge or deployment.
- **Verified workspace:** `/Users/haixin/Desktop/code/vibe-coding-then-what`, branch `codex/beta1-search-sharing`, HEAD `a19e72c7e83494b35071bc4aee08145e1ec4ace1`, local main `612950a68d0d0b9bfc149b9e2236c7143020d1bf`. Only Coordinator board/new overall-review changes existed at startup. Preserve concurrent Writer README/four-document closeout work.
- **Allowed changes:** `docs/content-contract.md`, `docs/design/reading-experience-v1.md` opening/status and bounded search paragraph only, `site/DEVELOPMENT.md`, this new handoff. Read-only implementation inspection may flag concrete findings here for Coordinator; it does not authorize code changes.
- **Frozen/excluded:** all implementation/tests/styles, prior handoffs/reviews, historical design body/Beta2 addendum, source manuscripts, Writer files, board/CI/agent rules/dependencies. No Git writes, deployment, new feature/E2E setup or repeated tests/builds for unchanged code.
- **Checks/delivery:** inspect actual review/source/docs, correct only observed inconsistencies, validate changed local links/whitespace, verify frozen-source integrity, record changed-file SHA-256 manifest and stop for Coordinator review. Shared handoff/final response suffice; no outbound receipt loop.

## Execution evidence

Resumed after a context reset and verified the same assigned branch/HEAD/main. Concurrent Coordinator changes to the board/new overall review and Writer closeout files were present and preserved. The earlier TypeScript discussion did not complete this task; no TypeScript migration or product changes were made here.

### CLOSE-01 corrections

| File | Observed inconsistency and correction |
| --- | --- |
| `docs/content-contract.md` | Replaced search/sharing's pending-review status with durable behavior and actual r4 acceptance evidence. Linked board/PR15 for integration separately. Described the existing shared chapter renderer and identified permanent E2E as a separate QA assignment. Approved sources, source table and publication limits are unchanged. |
| `docs/design/reading-experience-v1.md` | Changed only the two opening implementation/search-alignment paragraphs: removed transient working-tree/pending-review wording and linked accepted stage evidence plus separate integration status. Preserved the historical design body and Beta2 palette addendum byte-for-byte. |
| `site/DEVELOPMENT.md` | Linked actual search/sharing acceptance and separate integration status. Clarified normal Next Link versus literal search/fetch prefix handling, client interaction/public-metadata boundaries, static GET resources versus a request-time backend, and excerpts' 140 source code points plus optional ellipses. Replaced the obsolete search-placeholder statement and transient release wording. Identified the dependency audit as dated theme-stage evidence rather than a fresh audit. |

The [search/sharing review](../../reviews/beta1-search-sharing.md) records accepted r4 and SEARCH-01/02 closure. This closeout changes documentation only and requires its own affected review; it does not rewrite the accepted implementation handoff or inherit acceptance for these edits. Read-only inspection of search, reader composition and interaction boundaries found no additional concrete implementation issue requiring a code-change request within this assignment.

### Actual closeout validation

- `git diff --check` passed. All **56 local Markdown link targets** in the three assigned documents and this handoff existed; none used local fragments. All four files passed trailing-whitespace and final-newline checks, including the untracked handoff. External URLs were not fetched; review/PR pointers are taken from the actual repository records, not a fresh cloud-status claim.
- All **145 tracked files outside the three assigned documents and six explicitly excluded concurrent-owner documents** matched HEAD byte-for-byte. This includes implementation, tests, styles, dependencies/lockfile, CI and **26 prior handoffs**. Concurrent-owner documents are README, project vision, roadmap, development history, Chinese stage summary and the coordination board; they were not edited or included in this freeze.
- All **13 non-document files** in the accepted r4 sixteen-file manifest matched their recorded SHA-256 values. The three reopened technical documents are the only changes to that manifest's files.
- The design suffix beginning at `## Current design sources and retained identity` matched HEAD byte-for-byte, SHA-256 `41d4301c24df925bebba59b2222f87b5422c5dfb52e844c03c513f09966cf48d`. The approved-source table also matched HEAD exactly.
- Both manuscript SHA-256 values matched the approved contract: opening `244c4f7a9ddeb781d8530691d07ba17b9daccf611b9631ea60faa412b87a6d90`, G01 `b928e5df21876c0ca49a3c227eb6c7e20723b3f22bb9c7cb2d560cc198db62d2`. All **31 ignored recovery files** matched their preserved manifest.
- No tests, builds, browser checks, installs, dependency audits, Git writes, external calls or deployment were run for this documentation-only revision. Prior stage runtime/cloud evidence remains dated evidence in its original handoff/review.

### Frozen r1 documents

| File | SHA-256 |
| --- | --- |
| `docs/content-contract.md` | `c0ee5c24036d80f9580ba4a2e3f53e34c2b7a699fab4ad239140841934a50aff` |
| `docs/design/reading-experience-v1.md` | `5da86ce2ec74ec34d1fc6f79ecc829749329ed12250fbb4e35ddb3c4c186667e` |
| `site/DEVELOPMENT.md` | `50dbb92e2f84b5e93dab8efc031c372cda505c6cc17b643581ebdb68caf348ee` |

This evolving handoff is excluded from its own hash manifest. Supplemental machine-readable evidence is at `/tmp/vctw-beta1-closeout/developer-r1-fixed.json` and `/tmp/vctw-beta1-closeout/developer-r1-validation.json`; the durable hashes and results above remain sufficient if temporary files disappear.

## Recovery

**Done:** CLOSE-01's three-document corrections, scoped read-only comparison, link/whitespace and payload-integrity checks, r1 freeze and this handoff. **Next:** Coordinator reviews the actual r1 changes and records finding closure in the overall review. No further executor edits are assigned absent concrete feedback; acceptance, exact-head CI, PR15 integration and deployment remain separate facts. No merge/deployment outcome is prefilled.

Resume only after verifying actual HEAD/status and current review feedback. Use the frozen hashes above to detect drift, preserve all disjoint changes, and append any authorized revision/check evidence in this same report.
