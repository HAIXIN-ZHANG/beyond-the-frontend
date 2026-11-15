# Repository and design access policy

Verified: 2026-11-14 (Australia/Perth). Scope: `HAIXIN-ZHANG/beyond-the-frontend` and Figma file `3GYIfJz8xSPGx3AE3RRkKi`. GitHub required CI checks were additionally verified on 2026-11-15 through CI01; Figma was not re-audited in that stage. This is a project access baseline, not an audit of every account, token or connected application.

## GitHub

| Control | Verified setting |
| --- | --- |
| Default branch | `main` |
| Visibility | Public; visitors may read, fork, comment or propose a PR |
| Repository collaborators | Owner `HAIXIN-ZHANG` only |
| Deploy keys / pending invitations | None found |
| Pull request required for main | Enabled |
| Force push / deletion of main | Both disabled |
| Apply protections to administrators | Enabled |
| Linear history | Required; squash merging is enabled |
| Resolve review conversations | Required |
| GitHub auto-merge | Disabled; Coordinator reviews and executes authorized merges |
| Required GitHub approval count | 0; local Coordinator review is recorded separately |
| Required CI status checks | `Quality`, `Static export (root)`, `Static export (pages)`; GitHub Actions app 15368; branch must be up to date |
| Default Actions token permissions | Read-only; workflow approval of PR reviews disabled |

Approval count 0 is intentional for the existing single-account workflow: the same GitHub identity cannot approve its own PR. The PR requirement still prevents ordinary direct updates to main, including by the owner while the rule remains in effect. The Coordinator reads actual files, records the reviewed revision, returns defects to the original author and merges only the accepted head SHA. A Markdown checkbox or CODEOWNERS entry cannot independently enforce that judgment.

Visitors are not granted write access by watching, starring, following a LinkedIn link, commenting, forking or opening a PR. A fork is a separate copy; it does not change this repository. Contributor requests do not justify accepting a write invitation or executing untrusted code with privileged credentials.

CI01 first passed all three jobs in [cloud run 43664712998](https://github.com/HAIXIN-ZHANG/beyond-the-frontend/actions/runs/43664712998) for reviewed head `d81df0a9b6ea79d50d4f0be6d00130f28a794d14`. Coordinator then enabled those observed checks, independently read the saved protection and compared every other field to the pre-change snapshot: no other protection changed. Later commits must still pass their own required checks; this evidence is not approval of future revisions.

## Figma

The design file's Share settings were inspected in the desktop app:

- Audience: **Anyone**; permission: **View**, with Edit unselected. The dialog states viewers can view and comment.
- The access list shows the owner and inherited access from the Beyond the Frontend folder. The inherited editor list contains only HAIXIN ZHANG.
- Viewers may currently copy, save and export. That does not grant editing rights to the original. Restricting redistribution is a different choice from protecting source edits.
- The previous folder default was restricted to team view/comment. This pass rechecked the effective file access and inherited editor list; it did not re-audit all team/account settings.

Use the [viewable design link](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=2-2) when sharing. Do not change it to “Anyone can edit” or invite unknown editors. Comments remain permitted as requested.

## Boundaries and maintenance

The owner retains administrative control and can change these settings. Agents, OAuth apps or clients using the owner's authorized identity act with that identity's permissions; separate chat roles are not separate security principals. Account compromise, malicious integrations and undiscovered product vulnerabilities are outside what these project controls can guarantee.

Use account MFA or a passkey, protect recovery methods and periodically inspect connected apps. This task did not change passwords, MFA, recovery settings or credentials. Recheck sharing and branch settings after adding collaborators or integrations, changing visibility, or preparing a public release.

The authoritative enforcement is the saved GitHub/Figma configuration. This policy, SECURITY.md, CODEOWNERS and the PR template explain the intended workflow; they cannot replace server-side access controls.
