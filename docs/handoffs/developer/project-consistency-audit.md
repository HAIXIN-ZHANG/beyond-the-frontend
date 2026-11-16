# Project consistency audit — Developer handoff

Owner: Developer. Revision: r1. Started: 2026-11-16; verification/freeze: 2026-11-17 (Australia/Perth). Status: Frozen for Coordinator review; no self-acceptance, Git integration or release claimed.

## Task brief

- **Authority:** explicit human-authorized audit/fix assignment relayed by Coordinator. Follow [AGENTS](../../../AGENTS.md), [Developer guide](../../developer-sync-prompt.md) and [board](../../coordination.md). Existing editorial-review integration is Coordinator-owned and is not an audit branch yet.
- **Verified initial workspace:** `/Users/haixin/Desktop/code/vibe-coding-then-what`, branch `codex/editorial-review-criteria`, HEAD `4b6a2e11b9278c500dccb66b068296e919745999`, local main `8e31da5e65aee4880a80aba8a35a418eb0fd4d45`; working tree clean before this brief. Coordinator reports PR18 CI active, not a completed result in this report.
- **Phase A permitted write:** this new handoff only. Read-only audit of actual structure/package-lock/runtime/tooling, static bilingual routes/metadata/prefixes, strict TS/Panda/client-server boundaries, reviewed content/parser/search/share/heading behavior, cleanup/hydration and tests/verifier/CI/document consistency. Apply React best-practices proportionately, not as an automatic refactor checklist.
- **Next gate:** wait for Coordinator's branch-ready/fix scope before tracked edits or any check that generates ignored output. A later branch must be verified from actual HEAD/status before execution. Record concrete reproducible defects and minimal corrections, no-op areas, uncertainties and bounded follow-up here.
- **Preserve/exclude:** canonical prose, source intake/schema/translation expansion, Figma/design assets, licenses/access/security settings, Writer/product/editorial files, frozen handoffs/reviews, old DS01 checkpoint and all31 ignored recovery files. No Git writes, deployment, broad dependency update, forced override, new feature, permanent E2E/CD or framework/component rewrite.
- **Later verification boundary:** only proportionate checks authorized after branch-ready; necessary existing npm/browser tooling may be used without speculative installation. A read-only dependency audit plus primary advisory/exposure assessment may follow then. No current advisory repair/acceptance, fresh browser/build/CI result or installed tool is prefilled.
- **Delivery:** actual source/findings, file manifest, meaningful checks and limitations, frozen hashes and stop for Coordinator review. Shared report/final suffice; no receipt loop.

## Phase A evidence and recovery

Coordinator subsequently verified PR18 integration and released this audit at branch `codex/project-consistency-audit`, HEAD/local main `78488012044e0a8fd8e4946f1abc72e1e2b084c9`. Actual branch/HEAD/status were rechecked before edits. This release permits minimal demonstrated source/tool/test/current-tech-doc corrections and proportionate existing checks; all original exclusions remain.

### Reproduced present defect — AUD-01

`site/config/deployment.ts:3` deliberately accepts `/` as the empty root prefix, and its existing test confirms that alias. Before correction, SearchControl interpolated the raw environment value at the index fetch and result href. A read-only Node URL probe with `NEXT_PUBLIC_BASE_PATH=/` resolved the literal `//search-index/zh.json` to origin `https://search-index`, and `//zh/read/a-page-and-a-system/#section` to origin `https://zh`, rather than the current site. These are actual URL-resolution results, not a claimed browser run. Standard empty-prefix and repository-prefix builds do not exercise the root-alias defect.

Minimal correction completed: `withBasePath` reuses existing `parseBasePath` normalization; SearchControl uses it for its two literal URL sites. A new deployment regression checks same origin/path/encoded heading with absent/empty/root-alias/repository/nested prefixes and rejects a protocol-relative prefix. Real browser checks below verify that the component uses the corrected path, beyond the helper test. No route, manuscript, heading/search schema, framework or language scope changed. AUD-01 awaits independent Coordinator closure.

### Verification progress and failures retained

- Actual runtime is Node `v24.14.1` / npm `11.11.0`, within declared major ranges. Read-only JSON inspection confirms all package/lock root fields and direct pinned/installed package versions match; no install was run.
- Initial `npm run check` passed codegen but stopped during Next type generation with sandbox `EPERM` opening `site/.next/types/routes.d.ts`; it did not pass typecheck/tests. No application defect or test failure is inferred from that filesystem denial. The authorized retry passed lint, both strict compiler programs and all29 tests.
- Initial `npm audit --json` failed because sandbox DNS could not resolve the official npm registry; it yielded no vulnerability assessment. The authorized network retry with a temporary npm cache returned the actual audit below. Full-audit exit1 reflects reported vulnerabilities; it is not relabelled a zero-finding pass. No dependency change occurred.
- Baseline file hashes and all31 recovery files were captured/verified before source edits. Writer's tasks/editorial-brief and Coordinator's board/review changes are concurrent-owner work and remain untouched.

## Source/tooling audit and no-change judgments

Applied the React best-practices skill to actual server serialization/cache, direct imports, event listeners and hydration boundaries. Applied frontend-testing-debugging and Playwright skills to the affected exported search flow. No skill recommendation was treated as a requirement for a new state library, dependency, migration or blanket refactor.

| Audited area / actual source | Result and bounded disposition |
| --- | --- |
| Root structure, `package.json`, lock, `.nvmrc`, installed metadata | One root npm project with `site/`, `panda/`, `tests/`, `scripts/`, canonical `book/` and process `docs/`. Node24/npm11 runtime is in range; package/lock identity, engine fields and every direct pin match installed metadata. No workspace split/backend/new framework or general dependency update is justified. |
| Next static configuration, locale layouts/routes, `site/config/deployment.ts`, i18n, LanguageSwitch | Static export/trailing slashes, language-specific documents and an explicit global bilingual 404 are coherent with current two-source availability. AUD-01 is the concrete root-alias discrepancy; corrected only the two raw search URL consumers. Current chapter metadata remains real and source-derived. Public-origin social/canonical metadata is still release-dependent, not an invented deployed URL. |
| App/tooling TS, ESLint | App strict/noEmit/full declarations with `allowJs:false` and `skipLibCheck:false` is retained. Panda strict/noEmit isolates the documented upstream declaration skip. MJS tools receive lint/runtime checks. Effective ESLint parser options are `{}`; no projectService/allowDefaultProject is enabled. No compiler/lint weakening or indiscriminate `.mjs` migration. |
| Panda config/tokens/reference/globals/recipes and UI components | Existing semantic mappings, explicit `token(...)` recipes, native/disabled/focus controls and local overflow remain intact. Generated output is ignored/reproducible. No token/style/Figma edit or replacement component suite; inspected screenshots below cover the affected Day/desktop and Night/narrow search states, not a new full design certification. |
| Manifest/loader/parser/link validator, reader/navigation | Only opening/G01 enter the validated public tree; source hashes/title/containment/link checks remain enforced. Text renders through supported semantic nodes, not arbitrary HTML/MDX. Real headings/outline/previous-next derive from approved content. Source preambles and hashes are unchanged. Persistent IDs across edits and future paragraph/English/resource intake remain separately scoped contracts. |
| Search extraction/matcher/schema/static index and section actions/sharing | Canonical heading targets/current-language boundaries and reviewed source context remain coherent. The Chinese resource has20 entries; English has0 and does not silently fetch Chinese data. Existing clipboard/manual recovery and deliberate editable issue draft remain; no model/backend or automatic issue creation. Approximate normalization/display offsets are an already documented small-corpus limit, not a reason for a search-engine rewrite. |
| Client/server imports, `getBook`, effects/theme/disclosures | `React.cache` already deduplicates canonical loading within a server render; independent route params/book operations already run in parallel. Canonical AST stays on the server; client boundaries receive composed content/code/public sharing metadata. No observed Node filesystem import into client components. Mounted Appearance/ReadingDisclosure and shortcut effects have matching cleanup; the guarded per-document theme singleton intentionally owns its media/storage listeners. No demonstrated leak or hydration defect justified a speculative cache/SWR/memo/global-listener refactor. |
| Tests/verifier/CI/ignored artifacts | Five Node test files and semantic static verifier cover current contracts; CI has Quality plus root/Pages jobs, read-only permissions and no CD. No generated/env/recovery paths are tracked. Permanent E2E/CD, deployed smoke and rollback are still existing [Release Readiness](../../delivery/milestone-1.md) work; this temporary browser audit is not their implementation. |
| Current technical documents/process | Read current developer guide, implementation wrapper, content contract and necessary role/review/ledger references. Current first-delivery versus historical plan/DS01 distinctions remain accurate. Updated only the operating guide's durable test-area description, normalized `/` alias behavior and fresh dependency disposition. Historical numbered implementation/design bodies and every prior handoff/review stay frozen. |

No other demonstrated present defect required a source correction in this bounded audit. This is a source/affected-flow assessment, not proof of every browser, future input or performance property.

## Dependency reassessment — unresolved maintenance, not blanket acceptance

Actual `npm audit --json` reports **7 moderate records, zero high/critical**, all propagation of **GHSA-g3hv-75wg-m249 / CVE-2026-118764**. A separate actual `npm audit --omit=dev --json` reports **0** findings. Affected installed node: `node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch` **10.2.6**. The development dependency path is `typescript-eslint` → its parser/plugin/utils/type-utils → typescript-estree → minimatch; seven package records are not seven independently observed root vulnerabilities.

Checked the [maintainer advisory](https://github.com/isaacs/minimatch/security/advisories/GHSA-g3hv-75wg-m249) and [GitHub database entry](https://github.com/advisories/GHSA-g3hv-75wg-m249). They identify attacker-controlled glob amplification, patched11.0.1 and the optimizationLevel≥2 trigger. Actual installed `typescript-estree/dist/useProgramFromProjectService.js:244` invokes minimatch only through optional `allowDefaultProject`, with `{dot:true}`; installed nested minimatch defaults `optimizationLevel` to1. Actual effective parser configuration does not enable that project-service path. **Inference:** the inspected application configuration has lower exposure than the advisory's trigger scenario; this does not repair the package, rule out every build-tool exposure or approve all future PR/configuration changes. Search queries/manuscript text are not passed to that lint glob call by this code.

Official read-only npm latest queries identify typescript-eslint/typescript-estree **8.72.2**, the installed versions, with minimatch **`^10.2.2`**. Patched11.0.1 is outside that major-version range; no compatible upstream repair was identified in the queried current latest metadata. Full audit's suggested package operation is a typescript-eslint **8.36.0 downgrade**, flagged as a major change by the audit response, not a validated fix for this project's TypeScript6/ESLint10 boundary. No force/override/downgrade or new dependency was applied. A compatible upstream repair and affected checks belong to the existing Release Readiness dependency-maintenance item; Coordinator independently decides risk disposition. The guide records this fresh reassessment while retaining the historical audit separately.

Temporary actual artifacts: `npm-audit-network.json`, `npm-audit-production.json`, `typescript-eslint-latest.json`, `typescript-estree-latest.json` and `eslint-effective.json` under `/tmp/vctw-project-consistency-audit/`. They are supporting evidence, not committed dependency changes or proof of a zero-risk project.

## Actual checks and focused rendered verification

| Check | Actual result / evidence |
| --- | --- |
| Authorized `NEXT_PUBLIC_BASE_PATH='' npm run check` | Exit0: ESLint, route generation, strict app and isolated tooling compilers; **29 tests passed**, zero failures/skips. `check-authorized.log`. Initial EPERM failure is retained above. |
| Empty-root build + matching verifier | Exit0 each; **7 pages/128 local references**, zh20/en0 and every real target checked. Frozen export has54 files. `build-root.log`, `verify-root.log`, `root-export.json`. |
| Pages build + matching verifier | Exit0 each for `/vibe-coding-then-what`; same7/128 and index/target results,54-file snapshot. `build-pages.log`, `verify-pages.log`, `pages-export.json`. |
| `/` root-alias build + matching verifier | Exit0 each; same7/128 and index/target results,54-file snapshot. This extra configuration directly exercises AUD-01. `build-root-alias.log`, `verify-root-alias.log`, `root-alias-export.json`. Final ignored `site/out/` is this explicitly recorded root-alias variant. |
| Focused browser/HTTP checks | **9 UI cases +3 HTTP404 checks passed** across all three frozen exports, detailed below. `browser/smoke.js`, `browser/smoke.log`, `browser/results.json`. No broad previous-stage matrix was claimed as rerun. |

**Environment:** Browser plugin/skill is not available in this session. Reused the already installed temporary Playwright CLI0.1.24 in an isolated headless Chrome session; no browser/tool dependency was installed and no personal browser was used. Temporary loopback mounts were root `http://127.0.0.1:45031/`, Pages `http://127.0.0.1:45032/vibe-coding-then-what/` and alias `http://127.0.0.1:45033/`. Each served its own frozen export and real404 status. All three actual request URLs are in `browser/results.json`. The isolated browser and audit-only static server were stopped after checks.

**Flow:** Chinese chapter index → Search → query `状态` → real same-origin index/results → Enter → G01 heading with actual destination focus → reopen/Escape → Search trigger focus. This passed for each deployment at1440×900 Day and320×900 Night (**6 cases**). Resource URL equals that mount's current origin plus exactly one normalized prefix; result URLs preserve encoded heading. At320px there was no whole-page overflow. Additional English absence checks (**3 cases**,320px) showed the deliberate Chinese-entry link, no fictional results and **zero index requests**. Three separate HTTP checks confirmed unknown paths return404 with the actual bilingual document.

| QA criterion | Evidence / outcome |
| --- | --- |
| Page identity and meaningful content | Actual Chinese index title/H1 and final G01 title verified in the six affected flows; English guidance/link is visibly present in its three checks. |
| No blank/framework overlay | Meaningful source/index content and actual results; no framework overlay in the affected index checks. |
| Console health | No page/console errors in the nine UI cases; known404 requests were checked separately through the HTTP API. |
| Interaction proof | Real fetch response200, same-origin/prefix result URL, native heading focus, dialog closed after navigation and cancellation focus returned. |
| Screenshot evidence | Inspected `browser/root-alias-search-1440.png` and `browser/root-alias-search-320.png`: populated results, visible input/focus/Close, usable Day/desktop and Night/narrow composition. No visual redesign was made. |

Limits: one local headless Chrome engine, no physical mobile/IME, Safari/Firefox, screen-reader, complete keyboard/a11y or performance certification. Clipboard/correction and every earlier failure state were source-inspected but not newly browser-retested because this fix changes only index/result prefix composition. Current UI changes are URL behavior; screenshots support layout/no-regression claims while actual network/URL/focus assertions prove the fix. No cloud CI, merge or public deployment is claimed for this working tree.

## Actual submission and preservation

| File | Change | Frozen SHA-256 |
| --- | --- | --- |
| `site/config/deployment.ts` | Small `withBasePath` helper reusing existing parser. | `99a8e2a00fa0ed2ca9564213ab552a712904dfe573d13b9e0538fa2954eb7b8b` |
| `site/components/search/search-control.tsx` | Both literal search URL sites use normalized prefix. | `63aa812ccee0695950a0402fb875f289863954e83c9d56307795cfab6dc7337a` |
| `tests/deployment.test.mjs` | Same-origin root-alias/nested-prefix regression. | `e6a0ef1fb6c41cbe22343b4d02c898c1b589b020903d770288d001563f35f7e8` |
| `site/DEVELOPMENT.md` | Durable test-area description, normalized-prefix behavior and dependency reassessment/disposition. | `ba15432782c7ff94197613834489394fa61120d6c21491192066e7633204a309` |
| This new handoff | Brief, audit/fix history, actual checks/limits and freeze. | Digest returned separately to avoid self-hashing. |

Baseline comparison: **164 protected tracked files** remain byte-identical, including **33 prior handoffs and30 prior reviews**, all approved manuscripts/outline, dependencies/lock, tokens/styles, original implementation/design bodies, CI, SECURITY and licenses. Exclusions are the four assigned changed files plus concurrent-owner `book/planning/tasks.md`, `book/planning/editorial-brief.md` and `docs/coordination.md`; those owner edits and new Writer/Coordinator reports were preserved. All31 ignored recovery files and their manifest remain byte-identical. All54 files in each of the three frozen export snapshots match their recorded hashes. Package-lock, .nvmrc, compiler programs, actual design and source hashes did not change.

Supplemental manifest `/tmp/vctw-project-consistency-audit/developer-r1-fixed.json` records actual head/files/preservation counts. Durable file hashes and evidence above remain usable if temporary tooling/artifacts disappear. Final document checks passed: **33 local Markdown link occurrences** in the changed guide and this handoff resolve; trailing-whitespace/final-newline checks pass, and `git diff --check` passes. Source/guide hashes and all164 protected files/31 recovery files were rechecked at the unchanged audit HEAD. The complete handoff digest is returned separately; `/tmp/vctw-project-consistency-audit/developer-r1-validation.json` carries supplemental results. No Git write, install, dependency upgrade, canonical prose/schema, Figma/access/license change, permanent E2E/CD or deployment was performed.

**DOC-AUD-01 applied:** Coordinator's affected guide review requested removing hardcoded test totals/category counts from the maintained command description. The guide now names suite areas; this dated handoff retains the actual29-pass result. This final guide-only correction changes no tested source/artifact and requires no repeated check/build/browser run. Coordinator owns affected documentation closure.

## Recovery and next boundary

**Done:** bounded project/source/tool/document audit, one reproduced defect/minimal correction, new regression, actual29-test check, three export variants and focused browser/HTTP checks, fresh dependency disposition and frozen submission. **Next:** Coordinator independently reviews actual code/guide/report and AUD-01 closure plus unresolved advisory disposition. New code changes require affected checks/re-review; prior successful runs are not claimed for an altered revision. Broader Release Readiness/future reader features remain in their existing owning ledger/roadmap, not a second backlog here.

Verify current branch/HEAD/status and frozen file hashes before recovery. Preserve other owners' work and append concrete authorized feedback/corrections to this same handoff. Do not restart completed checks or proceed to Git/release merely because this report exists.
