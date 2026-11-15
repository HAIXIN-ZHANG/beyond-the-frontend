# Vibe Coding, Then What? — Developer rebrand handoff

Owner: Developer. Revision: r2 (documentation supplement after accepted r1). Date: 2026-11-15 (Australia/Perth). Status: supplement frozen for review; accepted r1 implementation remains frozen. Coordinator owns [review](../../reviews/vibe-coding-rebrand.md), GitHub rename/About/remote and all Git writes; this report owns assigned execution evidence.

## Task brief

- **Authority/objective:** the user approved **Vibe Coding, Then What?** / **《Vibe Coding 之后：能跑，然后呢？》**, subtitle **Understand the Systems Behind Your AI-Built Products**, and repository slug `vibe-coding-then-what`. Coordinator assigned narrow branding and Pages-prefix migration, preserving bilingual routes and current UI behavior.
- **Workspace/base:** `/Users/haixin/Desktop/code/beyond-the-frontend`, branch `codex/vibe-coding-rebrand`, starting HEAD/local `origin/main` `40f5f40effc2bedecf2e1b91c4a31fd58caba308`. Verified actual cwd/branch/status. Writer's existing vision/roadmap changes are separate and preserved; no Developer Git writes.
- **Allowed files:** `AGENTS.md` (two brand occurrences only), `docs/coordinator-role.md` and `docs/developer-sync-prompt.md` (brand in prompts only), `docs/coordination.md`, `docs/development-history.md` (one rename decision/alias note), `site/config/site.ts`, `site/config/i18n.ts`, `site/config/deployment.ts`, `site/app/global-not-found.tsx`, `scripts/verify-export.mjs`, `tests/deployment.test.mjs`, `tests/i18n.test.mjs`, `package.json`, `package-lock.json` (project-name metadata only), `.github/workflows/ci.yml` (Pages prefix only), `site/DEVELOPMENT.md`, `site/IMPLEMENTATION.md` (active guidance only), and this report. Additional necessary paths require Coordinator assignment.
- **Inputs/acceptance:** explicit title/subtitle/slug, existing agent/role/board/engineering guides, current source/tests/CI. Update metadata/header/footer/404 via existing configuration, all hardcoded export expectations, project names and `/vibe-coding-then-what` deployment prefix. Preserve strict assertions, existing routes, default English, Chinese navigation/404 behavior, pinned dependencies and required CI names/permissions. Run check and both root/new-Pages build+verification; use existing browser tooling if available for relevant layout/navigation checks. Explain former names without rewriting historical evidence.
- **Dependencies/exclusions:** Writer owns editorial/entry documents assigned separately; Coordinator owns remote settings and actual review. Preserve all existing manuscript/hash, historical reviews/handoffs/security/Figma names, DS01 branch/checkpoint and ignored recovery files. No theme migration, UI redesign, chapter/schema work, deployment, unrelated dependency changes or extra feature is authorized.
- **Next boundary:** freeze exact files/evidence and submit directly to Coordinator for review; original-owner revisions only. All product/prose holds remain except this narrow branding migration. No self-approval, commit, push or merge.

**Narrow scope supplement:** after Coordinator independently accepted the opening's one-title replacement at SHA-256 `805d2ebd747d63c65f8383275d3a3f709df40e960b0994a71eadc06837dfa8d0`, Developer was additionally assigned `docs/content-contract.md` solely for the historical W02-baseline explanation and current opening hash/review reference. That makes this an exact 19-file Developer deliverable. G01, IDs/slugs/order, rendering rules and other prose remain unchanged; Developer did not edit the manuscript.

## Delivery and checks

### Exact 19-file manifest

| File | Change |
| --- | --- |
| `AGENTS.md` | Two brand substitutions only; stable workflow/authority text retained |
| `docs/coordinator-role.md` | Brand in copyable role prompt only |
| `docs/developer-sync-prompt.md` | Brand in copyable role prompt only |
| `docs/coordination.md` | This task's owners/workspace/holds, actual external rename and completed PR #9 facts; Writer accepted r2 and Developer review pending |
| `docs/development-history.md` | One rename-decision row, explicitly preserving historical aliases/evidence |
| `site/config/site.ts` | Current project name and canonical repository/issues URLs |
| `site/config/i18n.ts` | Approved titles, readable two-line home titles and English subtitle/Chinese description through existing layouts |
| `site/config/deployment.ts` | New prefix in validation-error example; validation behavior retained |
| `site/app/global-not-found.tsx` | Independent global 404 metadata title |
| `scripts/verify-export.mjs` | Five exact title expectations and new issues slug; additionally exact repository/issues href checks and rejection of old brand/prefix; existing language/404/noindex/asset checks retained |
| `tests/deployment.test.mjs` | New repository-prefix example and corresponding invalid no-leading-slash case |
| `tests/i18n.test.mjs` | New prefix and home/index switching cases for both languages, retaining root cases |
| `package.json` | Package name and Pages build prefix only |
| `package-lock.json` | Top-level and root-package names only; dependency graph unchanged |
| `.github/workflows/ci.yml` | Pages matrix prefix only; jobs, pinning, permissions and checks unchanged |
| `site/DEVELOPMENT.md` | Current brand, commands/mount prefix and scope/evidence pointers; historical checkpoint URL retained |
| `site/IMPLEMENTATION.md` | One current identity/prefix/local-directory note above preserved historical proposal |
| `docs/content-contract.md` | Original W02 opening hash retained as history, exact reviewed branding-only opening hash current; only two lines changed |
| `docs/handoffs/developer/vibe-coding-rebrand.md` | This brief, manifest, actual checks, limits and recovery |

### Actual verification

- Runtime: Node `v24.14.1`, npm `11.11.0`, existing locked dependencies. No installation or dependency version change occurred.
- `NEXT_PUBLIC_BASE_PATH='' npm run check` passed ESLint, Next route type generation, strict tsc and all four Node tests. The migration adds prefix/home cases inside the existing behavior test; it does not count each case as a separate test.
- `NEXT_PUBLIC_BASE_PATH='' npm run build` and matching `npm run verify:export` passed. Separately, `NEXT_PUBLIC_BASE_PATH=/vibe-coding-then-what npm run build:pages` and matching verification passed. Each actual export checks five pages and 73 local links/assets, including language destinations, exact title/feedback/repository links, bilingual 404/noindex and real files. Root output was preserved separately before the Pages build; there is no mixed-prefix verification claim.
- Object comparisons prove `package-lock.json` differs only in its two project-name fields; all resolved dependency data is identical. `package.json` differs only in name/Pages script, and CI differs byte-for-byte only at the Pages matrix prefix. Existing required check names and security settings were not edited.
- Static assertions prove AGENTS has exactly its two brand replacements, role prompts only their brand phrase, and History exactly one added direction row. Content-contract diff changes only its original-baseline paragraph and the current opening-hash row. The opening equals HEAD bytes with exactly one old-title replacement, and matches Coordinator's accepted hash above. G01 and the existing F01 analysis remain unchanged; historical reviews/handoffs/design/access evidence were preserved.
- Read-only GitHub metadata confirms the same repository ID `1417292071`, canonical new slug, approved About and default main. Local origin uses the new canonical URL. Coordinator performed those mutations; Developer did not. Prior PR #9 metadata is merged with reviewed head `3f3b938364f35130156bb5bedd2f85ead2904dc1` and squash `40f5f40effc2bedecf2e1b91c4a31fd58caba308`. Prior CI success is Coordinator's recorded integration fact, not this rebrand's new cloud result.

### Real browser evidence

No Browser-control plugin was exposed and the listed frontend skill files were missing from their configured locations/search roots. Used the available local Playwright skill and preinstalled `@playwright/cli` `0.1.24`, isolated headless Chrome with no personal profile. No dependency or system setting was changed. Temporary preview/evidence lives under `/tmp/btf-rebrand-checks/`, not the repository deliverable.

Actual result: **30 checks** = root/new-Pages targets × five documents (English/Chinese home/index plus unknown-path 404) × widths **320, 375, 1280**. Exact title/lang, header/footer brand, subtitle metadata, canonical links, no obsolete brand, document width, header/navigation geometry and real 200/404 hosting status passed. No page errors, unexpected console errors or unexpected failed responses remained in the final run. Four 375px screenshots were captured; Developer opened the Pages English and Chinese screenshots for visual inspection. Both show wrapping titles/navigation without clipping or overlap. First Tab reaches “Skip to content” and Enter focuses `main` on both targets. Actual Pages English-to-Chinese link activation reaches the prefixed Chinese homepage.

The first temporary preview incorrectly omitted prefix mapping for HEAD requests, producing false prefetch 404s. Corrected only that temporary server, then reran all 30 checks with rejection of any failed response outside the intentional unknown-path document. Final evidence: `/tmp/btf-rebrand-checks/browser-result.json`, audit script/log, four PNGs and CLI snapshots. These temporary artifacts support local branding behavior, not Linux CI, full accessibility/theme/reading acceptance or deployment. One headless Chrome channel was used; no broader browser/device claim is made.

### Review boundaries

Writer owns its nine-file frozen rebrand/opening scope and retained Beta inputs. Coordinator accepted Writer r2 and the exact opening exception; Developer did not edit or self-review that scope. The current contract records that accepted hash only after receiving Coordinator's decision. Other prose changes, the old opening orientation and new chapter/schema implementation remain held. New branding PR/check/merge results are unknown and not prefilled. All code/browser results here are Developer evidence for independent review, not acceptance.

Final r1 source/scope checks passed: 67 Markdown files, 337 local links, five heading anchors, no structure/link/sensitive-pattern errors and clean `git diff --check`. The exact changed tree is 19 Developer paths + nine Writer paths + one Coordinator review = 29. All other tracked bytes match the captured starting snapshot, including historical reviews/handoffs/design/access records. Both theme refs still name `4da2578`; all 31 ignored recovery files match their manifest. Eighteen fixed-file SHA-256 values are saved at `/tmp/btf-rebrand-checks/developer-r1.json`, excluding this evolving report to avoid a self-hash loop. The exact manifest/commands/results here remain durable if temporary evidence disappears.

Coordinator's inline engineering feedback was applied before freeze: the two role prompts have no extra period after the question-mark title, and the developer guide explicitly identifies the older syntax-only harness as DS01 theme evidence, distinct from this migration's actual browser checks. These corrections do not claim independent Developer acceptance.

## r2 task brief — reader README documentation supplement

- **Authority/goal:** the user requested a reader-focused README; Coordinator assigned migration of its necessary collaboration explanation into the existing workflow authority, not a second AI-workflow document.
- **Allowed paths:** `docs/collaboration.md` and this same handoff only. Accepted r1 code/engineering files remain frozen. Writer exclusively edits README and its own handoff; Coordinator owns board/review/integration.
- **Workspace/input:** same absolute root and `codex/vibe-coding-rebrand`; current checkpoint `63127dbf27717a5ff34ad993720af78fe941c722`. Read the exact former README AI-workflow section from `63127db:README.md` and the current collaboration document. No Git writes by Developer.
- **Deliverable/acceptance:** preserve the unique Mermaid flow and necessary human/agent responsibility/coordination explanation in collaboration, merged with its existing role table and detailed rules. Do not duplicate rule sets, npm instructions, current-task state or historical rewrites. Preserve owner revision, hold, Git/release and evidence boundaries. Check Markdown links/structure/whitespace and Mermaid parse/render with existing tooling only.
- **Next boundary:** freeze r2 supplement and submit affected evidence to Coordinator. No new install, CI/code edit, product implementation or build/E2E rerun for this docs-only supplement. Accepted r1 verification stays historical evidence, not a new execution claim.

## r2 delivery and verification

- **Exact affected paths:** `docs/collaboration.md` and this report. Collaboration's opening integrates the human author's role and AI-assistance context; its existing three-agent role table and detailed workflow remain the authority. One workflow overview contains the exact Mermaid source from checkpoint `63127db:README.md`, with an explicit reminder that assignments/holds govern continuation. No duplicated role table, npm commands or current-task queue was added.
- **Diagram evidence:** reused installed Mermaid `12.3.0` and the existing isolated Chrome renderer, changing only its input/output paths in a temporary script. Actual parse/render passed with **13 nodes, 14 edges, zero page errors**. Developer opened the rendered PNG and checked readable labels, owner-feedback loop and separate release/no-release paths. SVG/PNG/result: `/tmp/btf-rebrand-checks/collaboration-workflow.svg`, `collaboration-workflow.png`, `collaboration-render-result.json`. This is local render evidence, not a GitHub-hosted-rendering check.
- **Ownership and scope:** Writer separately removes the old workflow/role/Mermaid/npm blocks from README and updates its own report. Coordinator separately owns the board/review updates. Developer did not edit those files. The implementation/package/CI/contract files accepted in r1 remain unchanged by this supplement. No new workflow file, npm guide, license/contribution document, tooling installation or product change was introduced.
- **Review boundary:** Coordinator already accepted the r1 engineering deliverable; this r2 supplement needs its own affected review. No runtime check/build/E2E rerun is claimed for unchanged code, and no new PR/cloud/merge/deployment result is prefilled.
- **Final source checks:** 67 Markdown files, 323 relative links and four heading anchors pass structure/link/sensitive-pattern checks; `git diff --check` passes. The unique active diagram across README/collaboration matches the checkpoint source byte for byte; collaboration has one role table, no copied npm instructions and no current-task snapshot. All detailed rules from “Assignment and lifecycle” onward are byte-identical to the checkpoint. The accepted fixed r1 engineering files match checkpoint bytes; only Coordinator's separately owned board is excluded from that comparison. Current supplement delta is six Markdown paths: two Developer, two Writer and two Coordinator, with no code/CI/package changes.

## r1 recovery — historical submission snapshot

**Done:** the 19-file manifest, root/new-Pages builds/export checks, strict check/tests, actual browser cases and approved current opening-reference update. **Not done:** Coordinator's independent Developer/combined review, any requested revision/closure, new PR/cloud CI/merge, or deployment. Submitted Developer revision is frozen r1; acceptance is pending.

The 19 Developer paths are uncommitted on the assigned branch/base. Preserve Writer's nine separate paths (including its opening edit) and Coordinator's review; do not stage/reset/change branches. Local folder deliberately retains its old name while origin uses the new slug. The unaccepted DS01 branch/checkpoint `4da2578048f8df113fed92d99e084f644a9a788e` and 31 ignored generated backup files remain recovery inputs, not this migration's targets.

Next action: Coordinator reads frozen sources/evidence and returns any specific findings to Developer. Resume only such scoped corrections after AGENTS → role guide → board → this report/review and actual directory/branch/HEAD/status checks. No new UI, theme, prose, E2E or release stage follows automatically. Temporary tools/screenshots/digests are supplementary; exact paths, commands, outcomes and limits remain recorded here for recovery without them.

## Current r2 recovery

The original r1 files are accepted and preserved at checkpoint `63127dbf27717a5ff34ad993720af78fe941c722`; their earlier uncommitted/pending-review wording above records the r1 submission moment. Current Developer work consists only of the two uncommitted supplement paths named above, frozen as r2. Preserve concurrent Writer README/handoff and Coordinator board/review changes in the shared checkout. No Developer Git writes occurred.

Done: source migration, local diagram parse/render and visual inspection, plus the source checks recorded below. Not done: Coordinator's affected r2 review and any subsequent integration. Next action is that review; only specific feedback authorizes a revision. Current product/prose holds and Git/release boundaries remain unchanged. Re-read current board/brief/review and verify actual branch/HEAD/status before any future scoped continuation. Temporary artifacts are supplementary; this record preserves source provenance, exact paths, actual verification and remaining boundaries.
