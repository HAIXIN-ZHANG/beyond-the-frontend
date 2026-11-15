# Beyond the Frontend: It Works. Now What?

**《前端往后看：能跑，然后呢？》**

An evolving engineering guide connecting frontend design systems, backend architecture, data, and AI collaboration through everyday product decisions.

页面能跑了，接下来该看什么？从界面往后看，把前端、后端、数据和 AI 协作连起来，理解功能背后的设计与取舍。

**By Jason Zhang · Created with AI assistance throughout the writing process.**

> Early development. The bilingual website skeleton and reviewed Chinese opening/foundations drafts are in `main`; the remaining chapter outline is a proposal. This is not a complete book or a launched reading service. `TBU` marks details to be updated or decided, not a delivered feature.

## Who this is for

Engineers who have shipped features but want to connect the knowledge around them: frontend developers growing toward full-stack work, full-stack developers revisiting architectural foundations, and engineers using AI coding tools who want to make better design and verification decisions.

You do not need to know every layer already. The guide assumes some development experience and introduces unfamiliar concepts through concrete problems. “AI-assisted full-stack engineering” describes the direction; a specific job title is not a prerequisite.

## What makes this guide worth building

- **Start with a working feature.** A search page, a shared component, a file upload, or a course registration becomes a way to understand the surrounding system.
- **Connect intuition with precise explanations.** Familiar examples, useful diagrams, technical principles, and the limits of an analogy belong together.
- **Follow decisions across layers.** UI states, API contracts, stored records, background work, and analytical data affect one another.
- **Compare choices in context.** Frameworks and cloud services are examples of trade-offs, not a universal shopping list.
- **Use AI with engineering judgment.** Scope, relevant context, contracts, and evidence matter both when working with AI tools and when building AI-powered features.

These are editorial goals to test with real chapters and reader feedback, not claims of a unique or proven method.

## Content map

| Area | Questions we want to make easier to reason about |
| --- | --- |
| Shared foundations | What does a working page depend on? Who owns state, rules, and the meaning of “done”? |
| Frontend | How do design systems, tokens, components, browser behavior, accessibility, and state fit together? |
| Backend and operations | How do APIs, databases, transactions, caches, deployment, and recovery support a product? |
| Concurrency and asynchronous work | When do queues, events, subscriptions, workers, or serverless functions help—and what complexity do they add? |
| Data | How do operational records become trustworthy metrics and analytical data? |
| Connected cases and AI collaboration | How do these decisions work together, and what should a coding agent know before implementing them? |

See the [project vision and proposed book structure](docs/project-vision.md) for the intended reading experience. The [Writer's detailed outline](book/planning/outline.md) remains a proposal; chapter names and ordering are not finalized.

## Project documents

| Document | Purpose |
| --- | --- |
| This README | Public introduction, reading entry points, current scope, and practical links |
| [Project vision](docs/project-vision.md) | Audience, editorial choices, content map, languages, and product boundaries |
| [Roadmap](docs/roadmap.md) | Feature priorities, delivery checkpoints, evidence, and items marked TBU |

Detailed chapters, developer instructions, handoffs, and reviews keep their own roles. They are not a second project vision, and repository documents do not automatically become public reading pages.

## Read, explore, and contribute

- **Online reading:** TBU — add a verified public URL after deployment. No live reading URL is claimed yet.
- **Languages:** English and Simplified Chinese are planned for the book. The website skeleton defaults to English and includes Chinese routes; complete bilingual chapters are not yet available.
- **Current writing:** The Chinese opening and shared-foundations drafts passed W02 review. Drafts live under `book/drafts/`; approval is recorded per stage and does not mean they are available on a deployed reading site.
- **Questions and corrections:** [Open an issue](https://github.com/HAIXIN-ZHANG/beyond-the-frontend/issues) with a question, a passage, or a source that helps explain the problem.
- **Contributions:** TBU — review, contribution, and licensing details must be settled before inviting reusable submissions.

## Website direction

**Design preview:** [Tokens](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=40-12) · [Components](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=22-135) · [Page Designs](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=2-2). Reading, responsive and Day/Night views share one page. UI and annotations are English-first. See the [design handoff](docs/design/reading-experience-v1.md); these are designs, not delivered website features.

A calm, OS-inspired reading interface for desktop and mobile, with chapter navigation, search, and connected examples. Later candidates include reading-position recovery, inline terminology, shareable passages, curated AI question cards, and chapter audio.

These capabilities have different stages of readiness. See the [roadmap and feature boundaries](docs/roadmap.md). The initial AI direction uses copyable prompts and selected context with the reader's own tools; an embedded chatbot or paid inference service is outside the initial scope. Audio is a separate, pre-generated publishing experiment; it is not yet available.

## Run the website locally

The current skeleton uses Next.js static export, React, and strict TypeScript for its pages, components, and application configuration. Tool scripts retain JavaScript where documented. Environment requirements, installation and build commands, root/subpath behavior, and known limits are maintained in [site/DEVELOPMENT.md](site/DEVELOPMENT.md).

```sh
npm ci
npm run dev
```

## Authorship, sources, and project status

Public access permits reading and feedback, not editing the original repository or design. See [SECURITY.md](SECURITY.md) and the [verified access policy](docs/security/access-policy.md).

Jason Zhang sets the direction and makes editorial decisions, with AI assistance across planning, drafting, examples, diagrams, and editing. Claims are checked and chapters reviewed in stages; this does not mean all current material has passed review.

Examples are teaching scenarios unless explicitly identified otherwise. They are not representations of an employer's system or evidence of production scale. Technology-specific behavior should include appropriate primary sources and relevant conditions. Questions, corrections, and updates are part of maintaining the guide.

**Licensing: TBU.** Content and website-code licenses have not yet been selected. Public availability is not a blanket reuse license. Third-party materials retain their own terms. No model-generated explanation or prompt is a substitute for checking actual behavior.

## Inspiration

- [The Engineering Handbook](https://github.com/handbook-academy/engineering-handbook): a reference for organizing substantial engineering reading around systems and technical decisions.
- [HowToLiveBetter](https://github.com/eternity4719/HowToLiveBetter): a reference for approachable, searchable, continuously maintained public knowledge.

This project has its own scope and teaching scenarios. These links acknowledge inspiration, not affiliation, endorsement, or a claim to have originated the underlying concepts.
