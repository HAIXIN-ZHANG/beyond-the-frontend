# Beyond the Frontend — shared project entry

Updated: 2026-11-15 (Australia/Perth). This file remains for existing agent prompts and links. Its original onboarding brief has been consolidated into the primary entry points below; do not maintain a second vision or roadmap here.

| Read | For |
| --- | --- |
| [README](../README.md) | Public introduction, practical entry points and current scope |
| [Project vision](project-vision.md) | Audience, bilingual book title, editorial approach, content map, UI and AI direction |
| [Roadmap](roadmap.md) | Future feature scope, priorities and acceptance gates |
| [Development History](development-history.md) | Past/current outcomes, decision evolution and immutable delivery evidence |

## Current identity and working baseline

- Project: **Beyond the Frontend**; repository: [HAIXIN-ZHANG/beyond-the-frontend](https://github.com/HAIXIN-ZHANG/beyond-the-frontend).
- Book: **Beyond the Frontend: It Works. Now What?** / **《前端往后看：能跑，然后呢？》**.
- Author: **Jason Zhang**, with AI assistance throughout the creative process.
- Local workspace: `/Users/haixin/Desktop/code/beyond-the-frontend`. Engineer Better / `engineer-better` and NEStory / `nestory-web` are historical names.
- D02 established a Next.js static-export skeleton with React and npm; TS01 migrated all pages/components and application configuration to strict TypeScript while retaining documented JavaScript tooling. TS01 passed local/cloud review and merged through PR #5. Browser acceptance remains incomplete. English is the default website language; the book targets English and Simplified Chinese, with Chinese drafts reviewed before English adaptation. The initial [content contract](content-contract.md) is accepted for later explicit integration; rendering and publication are not implemented.
- Writer's Chinese opening/foundations drafts passed [W02 review](reviews/W02.md) and were merged through PR #1; the full chapter outline is still a proposal. The future analysis-first workflow passed [WF01](reviews/WF01.md). Browser Fundamentals research/outline subsequently passed review and merged through PR #6; its manuscript remains a separate, currently paused gate.
- GitHub's default branch is `main`, protected against force pushes/deletion and requiring PRs even for administrators. Public Figma access is view/comment only. See the committed [access policy](security/access-policy.md); CI01 has cloud-verified Quality/root-export/Pages-export checks configured as required, with up-to-date branches required. After this documentation task/review/integration, pause for overall project-design discussion; acceptance does not resume implementation. Site deployment remains unconfigured. Theme code is preserved only in unaccepted checkpoint `4da2578`, not main. Subsequent components, chapter UI, E2E and release are paused for the current documentation priority.

## Coordination

Read [AGENTS.md](../AGENTS.md), [file ownership and handoffs](collaboration.md), [coordination status](coordination.md), [handoff template](handoffs/TEMPLATE.md), and [formal/local notes policy](agent-notes-policy.md).

Writer and Developer work only within the user's approved stages in their respective conversations. Coordinator owns shared decisions, review and Git integration; assigned executors write formal explanations. There is no standing Checker. The current shared documentation tree is `/tmp/btf-project-docs`, with disjoint Developer/Writer ownership; verify the assigned workdir rather than using the original checkout by default. These documents do not authorize a new stage, installation or publication. New user instructions take priority; cross-role changes are recorded rather than assumed to be automatically visible.
