# V2 homepage — first visual review

- **Date/reviewer:** 2026-11-18 Australia/Perth, Coordinator/Reviewer.
- **Candidate:** saved Developer homepage candidate in `/private/tmp/vctw-m2-v2-home`, `codex/m2-v2-home@8167a05`. [Developer handoff](../handoffs/developer/v2-home.md).
- **Evidence:** inspected the actual/reference screenshots side by side at desktop and mobile, including the real three rendered chapter rows. Artifacts are under `/private/tmp/vctw-home/visual/`. [Desktop reference](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=254-2) and [mobile reference](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=255-26).
- **Outcome:** visual changes requested. Final frozen scope and QA review follow.

| ID | Finding | Acceptance |
| --- | --- | --- |
| HOME-1 | The hero prints the same approved book title as a small eyebrow directly above its H1, in addition to the header wordmark. The Figma eyebrow served a different purpose. | Remove the redundant hero eyebrow in both locales. Preserve the actual wordmark, H1 and approved subtitle. |
| HOME-2 | The English phone layout repeats Chinese/reviewed availability in the hero, section heading/notice and every reading row. The benefit copy is useful, but adding the identical row status pushes results and art well below the reference. The planned status is also repeated once per topic despite the common map note. | Keep the truthful section-level language notice, all three distinct link labels and benefits, and the common clarification that topics are planned. Remove status repetition where all visible entries share the same state. Check 320/390px and desktop in both languages and preserve heading, focus, link-purpose and no-JS behavior. |

Read the revised captures and exact file changes before accepting. The current public release covers the chapter reader; this homepage remains a candidate.

## Frozen r2 — accepted for integration

Read the exact 10 Developer file digests and the handoff SHA-256 `bb08eaf3267e9d447a709bec2ece16c6c4e50a5f0ca924d40616c7da7cd45e7f`. The seven existing payload paths had the same baseline bytes at `8167a05` and the newer docs-only main `e4ff0babfa48e151d10447e13b62408ffc65490b`. Copied only the 11 frozen Developer payload files into a clean review worktree based on the latter. Manuscripts, approved translations/identity, search algorithm, reading layout, theme store, dependencies and workflow settings were outside the change.

- HOME-1 closed. Both locales retain the approved wordmark, title and subtitle. The redundant hero eyebrow is gone.
- HOME-2 closed. Three entries retain title, benefit and real link. The common Chinese-draft count and English-language availability stay visible. The roadmap map has one planned notice. Checked actual 390px Chinese and 320px English light captures and 1440px English dark. The full source titles and benefit text still take more vertical space than the Figma specimens. At 320px the two hero actions wrap cleanly.
- Both approved SVG payload digests matched, with native 410×112 and 304×54 root dimensions. Independent XML inspection found only local references and no executable elements or handlers. The matching export verifier and real browser cases confirmed the local responsive source, readable labels, theme and prefix.

Ran `npm run check` (lint, strict app/Panda types, 52 Node tests), fresh root and Pages builds and verifiers, and full Chromium at both paths (30/30 each). Each export contained 8 pages, 185 local references, 28 Chinese search sections and zero English sections. Rechecked `git diff --check`, native no-JS links, mobile header/search keyboard flow and earlier reader fragment regressions. Independent logs and screenshots are under `/private/tmp/vctw-home/coordinator/`. Safari, Firefox, physical phones, native zoom and actual screen readers were outside this local pass.

Accepted for a protected PR based on the reviewed newer main. Package only the frozen implementation and review. Exact-title search remains a separate assignment. No Pages dispatch is included.
