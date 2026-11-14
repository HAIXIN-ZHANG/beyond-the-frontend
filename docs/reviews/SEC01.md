# SEC01: repository and Figma access review

Date: 2026-11-14 (Australia/Perth). Reviewer: Coordinator. Outcome: **the requested access baseline was configured and verified; the five-file documentation change is accepted for a scoped PR.** This is not a claim of absolute account security or a production security audit.

## Actual configuration and evidence

GitHub's authenticated repository API initially returned the D02 default branch, no protection on main, no rulesets and only the owner as collaborator. Coordinator used the existing Git credential through the credential helper for requests to api.github.com; credential material was not logged, written to a file or placed in the repository.

Changed the repository default to main and added main protection. Independent GET requests confirmed: force pushes disabled, branch deletion disabled, enforcement for administrators enabled, PRs required, linear history required and review conversations must be resolved. Required GitHub approvals remain 0 to support the user's single-account local-review workflow; required CI checks remain unconfigured. Auto-merge stays disabled. No protection was bypassed or disabled.

Additional API checks returned no deploy keys or pending invitations. Actions already used read-only default token permissions and disallowed workflow approval of pull requests; no change was needed there. These checks do not enumerate every owner-authorized OAuth application or audit credentials.

Figma desktop Share settings were read without editing the design: Anyone / View selected, Edit unselected, view-and-comment permitted. The share list showed the owner and folder inheritance; the inherited editor list contained only HAIXIN ZHANG. Copy/save/export remains enabled, which permits copies but not edits to the original. Team-wide and account-wide permissions were not independently re-audited.

## Reviewed file scope

| File | Purpose |
| --- | --- |
| `.github/CODEOWNERS` | Route ownership to @HAIXIN-ZHANG; clearly state that server settings enforce access |
| `.github/PULL_REQUEST_TEMPLATE.md` | Record scope, reviewed revision, real verification and pre-merge requirements |
| `SECURITY.md` | Access expectations, safe reporting and maintainer rules |
| `docs/security/access-policy.md` | Verified GitHub/Figma settings, single-account workflow and limits |
| `docs/reviews/SEC01.md` | This scoped review and evidence boundary |

Read all five files and checked their relative links against the proposed commit tree, heading/fence structure, whitespace and CODEOWNERS identity. No blocking issue was found. The policy distinguishes public visibility, comments, copies and source-edit permission, and explains that an owner can still administer the account and that agents using the same identity are not isolated accounts.

No dependency, website code, chapter, CI workflow, paid AI review or account credential change is included. Existing untracked shared/planning documents are outside the commit scope. No build was rerun for these documentation-only changes. This record is the pre-merge review; the PR URL, merged commit and final API recheck are recorded in the Coordinator's integration report after execution.

## References

- [GitHub protected-branch API](https://docs.github.com/en/rest/branches/branch-protection) documents administrator enforcement, force-push/deletion controls and approval counts including 0.
- [Figma file sharing](https://help.figma.com/hc/en-us/articles/360040531773-Share-files-and-prototypes) and [view/edit permissions](https://help.figma.com/hc/en-us/articles/1500007609322-Guide-to-sharing-and-permissions) explain public audiences, inherited access and source-edit permissions.
