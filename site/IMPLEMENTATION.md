# Website implementation proposal — historical plan

Original proposal: 2026-11-14 (Australia/Perth). Owner: Developer. Legacy references: D01/D02 and the original D03–D05 proposal.

Current identity: **Vibe Coding, Then What?** / **《Vibe Coding 之后：能跑，然后呢？》**, subtitle **Understand the Systems Behind Your AI-Built Products**, repository slug `vibe-coding-then-what`. The book/repository names, illustrative tree and proposed URL below retain their historical identity. Follow [the developer guide](DEVELOPMENT.md) for current `/vibe-coding-then-what` build/preview commands. The existing local checkout path is intentionally unchanged; a repository rename does not rename an active local directory. This narrow migration does not resume the rest of the proposal.

This preserves the initial staged plan in English; it is not the current execution graph. Website Foundation and Bilingual Routing, Continuous Integration and Merge Protection, and Strict TypeScript Migration are now in main. Design Tokens and Day/Night Themes is an unaccepted separate checkpoint. Further code/content/release work is paused for the documentation task. Use [Development History](../docs/development-history.md), the [board](../docs/coordination.md) and [main's developer guide](DEVELOPMENT.md) for actual status/commands. JavaScript/JSX and the tree below describe the earlier proposal, not current source extensions.

## 1. Purpose and decision boundaries

The author asked for a Markdown implementation proposal that the roles could inspect before proceeding stage by stage. Each reviewable delivery would be reviewed rather than automatically releasing the next stage.

- The book is primary; the website supports reading, finding material and feedback, with modest implementation/maintenance scope.
- The original stack proposal used the author's familiar React, JavaScript, Next.js and npm ecosystem. The later explicit TypeScript request superseded the initial language choice.
- Writer's `book/` remains the only manuscript source; Developer does not write chapters or maintain a second body.
- The confirmed project/repository/local-directory name is Beyond the Frontend / `beyond-the-frontend`, superseding D01's earlier name. Book titles are **Beyond the Frontend: It Works. Now What?** / **《前端往后看：能跑，然后呢？》**.
- The repository/site direction is public reading with issues and proposed PRs; authorized maintainers retain write, merge and publishing control.
- D01 delivered only a proposal/handoff. The author then directly authorized D02 and English-default bilingual UI; this does not invent a D01 review acceptance or give every later stage Git/release authority.

Inputs: [brief](../docs/project-brief.md), [collaboration](../docs/collaboration.md), [Developer synchronization](../docs/developer-sync-prompt.md). Product naming/content decisions remain with the author/Coordinator and Writer's assigned explanations.

## 2. Original technical proposal

| Area | Proposed implementation | Rationale and boundary at that checkpoint |
| --- | --- | --- |
| Framework | Next.js App Router + React | Familiar stack, with chapters generated at build time |
| Language | JavaScript/JSX and `.mjs` config | Initial lightweight choice; subsequently replaced by the authorized strict TypeScript migration |
| Package management | npm with committed lockfile | Pin actual versions; CI uses `npm ci` |
| Prose | Ordinary Markdown, possibly minimal frontmatter | Readable on GitHub, editable by Writer, adaptable to later exports; exact metadata required agreement |
| Content processing | Build-time Markdown parsing and navigation metadata | Choose one parser before integration rather than maintain parallel rules |
| Reading UI | Small React components and CSS | Prioritize typography/navigation/mobile; do not begin with a complete design-system implementation |
| Search | Pagefind candidate | Index generated public HTML; no search backend |
| Hosting | Next.js static export + GitHub Pages | HTML/CSS/JS without a persistent application Node server |
| Checks/release | GitHub Actions with separate privileges | PR checks and deployment do not share broad permissions |

Recheck stable compatible package versions when installation is authorized, pin the resolved tree and align supported Node LTS locally/CI. A metadata query does not establish a permanent baseline.

Nextra remained optional, not required: prove compatibility with Markdown, `book/`, subpaths and Chinese reading before selection; do not adopt multiple documentation frameworks together. The initial release excluded authentication, databases, admin/CMS, embedded AI Q&A and vector storage. PDF/EPUB would be separate requirements, with editable sources retained rather than a premature export pipeline.

## 3. Proposed source-to-page flow

1. Writer maintains prose, sources and chapter assets under `book/`.
2. The build reads an accepted chapter list/metadata and validates status, paths, links and duplicate identity.
3. Next generates static home/index/chapter pages and navigation.
4. A later Pagefind experiment indexes approved public prose only.
5. An authorized release workflow uploads the reviewed static artifact after successful checks.

Do not download and parse the whole book on the reader's first visit. Website, future export and checks should use the same body. The later [initial content contract](../docs/content-contract.md) now defines a small allowlist without requiring Writer to retrofit frontmatter.

The proposal drew on HowToLiveBetter's single-source/public-maintenance approach. The recorded source inspection found its handwritten HTML/JavaScript loading prose in the browser, while this project proposed build-time pages. This is a dated organization reference, not a claim of current upstream behavior or permission to copy its prose, diagrams or code.

## 4. Proposed tree and ownership

This is the historical plan, not a claim that every path existed or authorization to create it all:

```text
beyond-the-frontend/
├── book/                         # Writer: prose and chapter assets
├── site/
│   ├── IMPLEMENTATION.md          # Historical proposal
│   ├── app/
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   ├── not-found.jsx
│   │   └── read/
│   │       ├── page.jsx
│   │       └── [...slug]/page.jsx # Future Markdown chapter route
│   ├── components/
│   ├── lib/                       # Future content/link helpers
│   ├── config/
│   ├── styles/
│   ├── public/                    # Static assets, no duplicate prose
│   └── next.config.mjs
├── scripts/                       # Assigned build/check tooling
├── tests/                         # Necessary behavior/regression tests
├── .github/workflows/             # Later checks/release stages
├── docs/
│   ├── handoffs/developer/
│   ├── handoffs/writer/
│   └── reviews/
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

Use one root npm manifest and Next's `site/` application directory rather than introducing monorepo tooling for one reading site. Ignore generated/cache output: `site/.next/`, `site/out/`, dependencies and local validation artifacts.

The original plan assigned shared entries/contracts and reviews to Coordinator. The later role decision delegates formal technical writing to Developer and product explanations to Writer; Coordinator retains decisions/review/Git. Current [ownership](../docs/collaboration.md) supersedes this historical allocation. Never edit another owner's decisions merely because a dependency needs agreement.

## 5. Proposed content interface

These were proposals before a schema was accepted. The foundation did not depend on chapter format; real reading needed agreement first.

| Question | Developer proposal | Consequence to settle |
| --- | --- | --- |
| Identity/URL | Stable slug, independent order | Inserting/retitling chapters should not silently break links |
| Minimal metadata | Title, slug, status; other fields only as needed | Avoid unnecessary authoring fields; define the single H1 source |
| State | Distinguish draft, review and public permission | Finished prose is not automatically published; unknown states fail safely |
| Navigation order | One explicit list | Home/sidebar/previous-next must not maintain separate orders |
| Chapter links | Normal relative Markdown links | Rewrite to website routes and validate targets/anchors |
| Assets/diagrams | Writer owns sources; website renders derived assets | Agree relative resolution, alt text, captions and descriptions |
| Code | Fenced blocks and optional language | Readable rendering/local scrolling; do not execute examples by default |
| Deeper material | Prefer ordinary Markdown structures | If raw HTML/collapsibles are needed, constrain allowed elements/sanitization |
| Special diagrams | Assess static SVG/images before Mermaid | Source and rendering are separate choices; no installed support was claimed |
| Publication list | Build approved public content only; separate preview | Drafts must not leak through HTML, indexes, browser data or assets |

Do not accept executable MDX, arbitrary scripts or uncontrolled raw HTML by default. Resolve unsafe URL schemes, path traversal and untrusted SVG within the eventual parser/asset scope. Markdown itself is not a complete security boundary; PR content/build configuration still needs review.

## 6. Historical delivery stages

These preserve the original proposal. The actual later outcome names/gates are in History; this list does not release current implementation.

### Implementation Proposal — D01

Output: this file and `docs/handoffs/developer/D01.md`. Separate accepted facts from proposals and specify stage inputs, files and criteria. No application code, install, CI or release occurred. A D01 review was not recorded; the author's direct foundation authorization was the next actual gate.

### Website Foundation and Bilingual Routing — D02

Input: proposal review or direct author release and applicable dependency authorization; the latter was used. Scope: home/index-empty/404/layout, configuration/styles, assigned package/lock/ignore/runtime files and checks. Build a small Next/React application, centralized titles and static export, without inventing published chapters or reading unagreed Writer inputs.

Acceptance: clean install/run/build; English default and Chinese switch; correct root/Pages pages, assets, metadata and 404 without a runtime application server. Handoff records versions, actual commands and output. Browser evidence is required when actually available, never assumed from HTML checks.

### Responsive Chapter Reading — original D03 proposal

Input: accepted foundation, content contract, assigned reviewed chapter and publication/preview state. Read `book/` only; implement build-time content, chapter routes/navigation/prose styles and necessary checks. Render headings/outline/previous-next, tables, code, quotations, images and any separately accepted expandable content.

Acceptance: one real chapter, correct headings, direct/refresh routes, valid relative links/assets/anchors and explicit rejection/handling of invalid paths, duplicate slugs, unknown states and unsafe content. Public output/index/data may contain only allowed prose. Planned browser widths were 360/768/1440 CSS px, with keyboard, skip link, focus, heading hierarchy, diagram explanations, local code/table overflow and console checks. No complete WCAG conformance was claimed. Current related work is the separate, paused Responsive Chapter Reading stage (PAGE01).

### Search, Diagrams and Reading Regression — original D04 proposal

Input: accepted reading UI, enough real content and Writer's diagram meaning/format. Evaluate Pagefind with Chinese terms, English terminology and mixed queries; verify mobile/alternate-display diagrams. Search must locate chapters/sections, provide understandable empty/failure states and keyboard behavior, work under the Pages prefix and exclude draft/internal/navigation noise.

Static search is not semantic Q&A. Writer/Coordinator supplies representative queries/expected results; record misses and ordering limits. Add diagram zoom/static alternatives only as needed. Theme implementation was not automatically released by this historical suggestion. Search remains outside the current foundation/documentation task.

### Static CI, Access and Release — original combined D05 proposal

Input originally followed reading/search acceptance, stable checks, release authorization and confirmed public content/license scope. Actual delivery later separated early CI/access from future release rather than following this original ordering.

- PRs: locked install, code/content checks, necessary tests, static build and output verification; no publishing privileges or secrets for external PRs.
- Release: trusted main revision, successful checks and matching artifact; official Pages artifact/deploy flow only when assigned.
- Permissions: read-only CI; only an authorized deploy job gets necessary `pages:write` and `id-token:write`. Hosted runners; no new long-lived personal token.
- Contributions: keep issue/PR entry points; never execute issue text or privileged checkout of untrusted PR code.
- Settings: inspect public visibility, collaborators/apps/deploy keys, main rules, external-workflow approval, default token and Pages source separately from repo files. Do not require a sole account to supply an impossible self-approval.
- External link checks distinguish transient network failure from real internal defects. Verify the first actual release's direct/refresh/404/assets/code/search behavior and record URL/revision/run/page evidence.
- Without applicable publishing authorization, deliver configuration/evidence only; never label it live.

## 7. Pages and access details

The proposed address `https://haixin-zhang.github.io/beyond-the-frontend/` was a planned URL, not a verified deployment. Use static export and directory-friendly routes, with one base-path policy for links/assets/search rather than ad hoc prefix concatenation.

A static site cannot depend on Server Actions, request-state APIs, server login, ISR or default runtime image optimization. Use static assets or explicitly agreed build-time processing. Public read/download/fork does not grant push/branch creation/merge rights in the original repository; account/app credentials and saved branch rules enforce that boundary. Disabling auto-merge alone is not complete access protection.

Keep credentials/personal details out of prose, output, logs and history. `.gitignore` cannot remove already committed sensitive data; treat static page data as public. Minimize dependencies, commit the lockfile and pin third-party Actions to reviewed full SHAs. Report actual checked settings and gaps rather than absolute safety.

At the original proposal checkpoint, public visibility/Issues and disabled auto-merge/Wiki/Pages had been observed, while branch/ruleset lists were empty and collaborators/Actions/app/deploy-key review incomplete. Browser access was unavailable; the right-side app browser was preferred over the user's Safari/Chrome. These are historical observations: later [access](../docs/reviews/SEC01.md) and [CI](../docs/reviews/CI01.md) reviews established default main/protection/required checks. Do not reuse the old gaps as current settings.

## 8. Handoff and review

One report per reviewable stage uses the [template](../docs/handoffs/TEMPLATE.md) under Developer handoffs. Include scope, paths, actual commands/results, real page/screenshot evidence, missing checks, limits and cross-role dependencies. Coordinator records judgment in the corresponding review; Developer revises the same report and resubmits. Freeze during review and do not advance a dependent stage without actual release. Return content/diagram-meaning changes to Writer rather than editing its prose.

The original proposal expected user-relayed feedback; later explicit authorization enables direct messages among the existing roles. Neither the historical proposal nor the updated process is background file monitoring.

## 9. Primary references recorded during planning

- [Next.js installation](https://nextjs.org/docs/app/getting-started/installation): project entry/dependencies.
- [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports): output and unsupported runtime features.
- [Custom GitHub Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages): artifacts and deployment jobs.
- [Secure use of pull_request_target](https://docs.github.com/en/actions/reference/security/securely-using-pull_request_target): untrusted PR and privileged workflow boundaries.
- [Pagefind](https://pagefind.app/): recheck indexing/language/subpaths when search is actually assigned.
- [HowToLiveBetter page source](https://github.com/eternity4719/HowToLiveBetter/blob/main/index.html) and [content reader](https://github.com/eternity4719/HowToLiveBetter/blob/main/tools/lib/book.mjs): organization references, not dependencies or reused code.

These links preserve the dated planning sources; changing product behavior/package versions must be checked against the actual selected version in a future implementation task. Links do not establish installed or delivered capabilities.
