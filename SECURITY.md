# Security and access

Public visibility permits reading, comments and proposed contributions. It does not grant permission to push to this repository or edit the original Figma design.

`main` is the default integration branch. Server-side protection requires pull requests, blocks force pushes and branch deletion, and applies to administrators. See the [access policy](docs/security/access-policy.md) for the verified configuration and its limits. CODEOWNERS and Markdown instructions document responsibilities; they do not enforce permissions themselves.

## Reporting a problem

Use a GitHub issue for ordinary bugs and corrections. Do not post passwords, tokens, private data or an actionable security exploit in a public issue or comment.

For a suspected vulnerability, use GitHub's private vulnerability reporting if the repository offers that option. Otherwise use a private contact method published by the [repository owner](https://github.com/HAIXIN-ZHANG) before sharing sensitive details. This project does not promise a response time or an independently audited security certification.

## Maintainer rules

- Keep credentials and `.local/` notes outside commits. Never place account tokens in a public issue, PR, design annotation or screenshot.
- Grant new write access only with the owner's explicit authorization. Public Figma links must remain view-only; comments are permitted.
- Review changes to workflows, ownership, permissions and branch settings deliberately. Do not weaken branch protections to unblock a merge.
- A merged change is not permission to deploy, change account security or start a paid service.
