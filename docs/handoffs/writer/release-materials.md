# Milestone 1 release materials — Writer inventory

Owner: Writer. Revision: r1. Date: 2026-11-17 (Australia/Perth). Frozen for Coordinator review. Brief recorded before inspection/delivery. The [board](../../coordination.md) owns live assignments and release holds; the [release-verification review](../../reviews/release-verification.md) owns actual acceptance.

## Task brief

- **Authority/objective:** explicit Coordinator assignment to audit the two approved Chinese sources, public-entry/language expectations, author/AI disclosure, license/contribution conditions and approved-content isolation for a bounded initial reading release. Report actual findings and no-change reasons; inventory acceptance is not publication.
- **Sole writable file:** this new `docs/handoffs/writer/release-materials.md`. All manuscripts, public documents, schema/contracts, license/security notices, technical sources, prior reports and reviews are read-only. Preserve concurrent Developer verification/dependency/CI work and Coordinator board/review. No Git writes.
- **Verified workspace:** `/Users/haixin/Desktop/code/vibe-coding-then-what`, branch `codex/milestone-1-release-verification`, HEAD `e0b530a3ef7397c16158cde8d59190f18f84e57b`. At startup only Coordinator's board edit and new review were present. The prior consistency/editorial assignments are closed; this is a new bounded materials audit, not chapter authorization.
- **Inputs:** AGENTS → Writer guide → board → actual release-verification review; approved manifest/content contract, both complete Markdown bodies and their acceptance records, README, MIT/content notices, CONTRIBUTING and licensing/readiness; necessary source/loading/render/search boundary references. Do not invent sources, an external rights clearance or a public URL.
- **Acceptance/check plan:** confirm exact identity/order/locale/hash/provenance, inspect attribution/citations/examples/assets and public copy, distinguish internal repository records from reader/search publication, note concrete blockers or limits and bounded future-copy owner/condition, validate report/local links and unchanged protected inputs, then freeze actual evidence/digest.
- **Next boundary:** direct Coordinator review of this report and stop. No prose/translation/rewrite, new dependency/research, runtime/design change, security/access setting, release pipeline or deployment. Existing no-deployment hold remains; inventory review does not lift it.

## Exact approved material

Read both complete bodies: opening lines 1–99 and G01 lines 1–227. The actual [manifest](../../../site/content/manifest.ts) and [content contract](../../content-contract.md) contain exactly these two entries in this order, both locale `zh` and status `reviewed-draft`:

| Order / identity | Source and H1 | Unprefixed route | Actual inspected SHA-256 / acceptance |
| --- | --- | --- | --- |
| 1 / `opening` | [00-before-we-start.md](../../../book/drafts/zh/00-before-we-start.md), 写在前面：能跑，然后呢？ | `/zh/read/before-we-start/` | `244c4f7a9ddeb781d8530691d07ba17b9daccf611b9631ea60faa412b87a6d90`; [opening r2 review](../../reviews/beta1-opening-alignment.md) |
| 2 / `G01` | [01-a-page-and-a-system.md](../../../book/drafts/zh/01-a-page-and-a-system.md), 一个页面，究竟连着什么？ | `/zh/read/a-page-and-a-system/` | `b928e5df21876c0ca49a3c227eb6c7e20723b3f22bb9c7cb2d560cc198db62d2`; [W02 manuscript review](../../reviews/W02.md) and [integration](../../reviews/INT01.md), including actual re-review closure |

Hashes match actual bytes, manifest, contract and assigned HEAD. Titles match each source's sole H1, and reciprocal local Markdown links resolve. Routes identify build/deployment inputs, not a verified public URL. No English body or additional chapter is implied by an English interface, eight-part/48-adjustable-unit outline, accepted F01A research or Figma specimens.

Both bodies retain the old authoring preamble `> 中文初稿 · 待 review`. Actual reviews/manifest supersede that metadata; the existing parser/contract handles the exact preamble. It is not a reason to modify frozen prose or invent another acceptance. [ChapterReader](../../../site/components/reading/chapter-reader.tsx) labels Chinese reviewed drafts and the unfinished book. No manuscript byte/hash was changed.

## Attribution, examples and citations

| Material inspected | Observation and no-change reason |
| --- | --- |
| Author and AI disclosure | Opening lines 5–6 identify **Jason Zhang** and AI assistance throughout creation. Its AI-collaboration section states the author's judgment, staged checking and unfinished-book status; README repeats the author/AI involvement. No invented employer case, measured productivity outcome or completed-book claim was found in these bodies. Preserve the credits. |
| Opening examples | Themes, authorized search, upload, enrollment and learning analytics are explanatory directions, not claims that all chapters or website features are delivered. Connections are expressly to develop as writing progresses. No external image/imported design asset or executable sample is included. |
| G01 course scenario | The browser/service/database arrangement, fault scenarios and lost-response timeline are explicitly fictional teaching assumptions. The AI task fragment is labelled a teaching description, not an executed/validated prompt or full implementation. Its final reflection requires no quiz or capstone. |
| Figures and tables | G01 has three original preformatted diagrams plus one task-description block, all fenced `text`, and two Markdown tables. No embedded images, imported diagrams, attached media or runnable programming samples are present. These text diagrams/explanations remain book content under the existing notice; a fence alone does not make them MIT programming code. |
| Technical references | G01 names MDN client/server overview, OWASP Authorization Cheat Sheet, RFC 9110 §15.3.3 and C4 diagrams, with stated access date 2026-11-14. Its source note says scenarios/text diagrams/task explanation are original and no source code, diagrams or continuous original passage was reused. Body citations/further-reading links remain intact. W02's actual review records primary-source inspection; this audit did not reopen or freshly verify those external pages. |
| Rights boundary | Inspection found citations rather than incorporated third-party code/images or an identified copied passage. This bounded observation and the author's source note are not exhaustive chain-of-rights proof or legal clearance. No concrete missing asset permission or attribution contradiction was identified for these exact sources. |

Read the actual [MIT notice](../../../LICENSE), [content notice](../../../LICENSE-CONTENT.md), [CONTRIBUTING](../../../CONTRIBUTING.md) and [licensing/readiness notes](../../licensing-and-readiness.md). Existing notices assign project code/original programming samples to MIT and original prose/teaching diagrams in `book/drafts/` to CC BY-SA 4.0, to the extent the rights holders can grant those rights. Text diagrams remain content inside fences. Third-party dependencies/material, names/logos and contributor ownership retain separate conditions; Writer selected or amended no license.

The content notice supplies Jason Zhang/named-contributor attribution, title/repository and license/change-notice expectations. CONTRIBUTING requires appropriate rights/provenance and review for accepted changes without a response/review deadline promise. It directs sensitive reports to SECURITY, not public exploit details; this audit adds no private channel or service promise. The [prior public-readiness review](../../reviews/product-delivery-alignment.md#license-and-public-readiness-review) records the separate license-text inspection. That acceptance does not clear every material's rights or deploy the site.

## Reader/search isolation and public entry

Inspected [load-book.ts](../../../site/content/load-book.ts): it reads only manifest entries, resolves source containment, checks reviewed hashes/H1 and validates links through approved chapters. [Search extraction](../../../site/content/build-search-index.ts) consumes those validated trees filtered by locale, rather than recursively scanning repository Markdown. English has no approved counterpart corpus. The [export verifier](../../../scripts/verify-export.mjs) retains approved revision/status, source diagram/table, author/AI-credit and actual-heading checks. These are source observations, not a new artifact/build/browser pass.

Planning, analyses, handoffs/reviews and `.local/` notes must remain outside chapter bodies, search resources and shipped static assets. Publicly tracked repository records are distinct from reader inputs; a README link to the repository/ledger does not authorize indexing that record. Private credentials/transcripts are not release material. Developer/Coordinator must check the final fresh artifact inventory within their release-verification/pipeline scope; this audit does not infer artifact exclusion from `.gitignore` alone.

[README](../../../README.md), lines 9 and 34–48, matches the material inventory: online reading is in preparation; source links identify two reviewed Chinese drafts; English bodies are absent; merged reader/search/sharing does not establish a verified deployed Pages edition/public reading URL. Title, author and license/contribution links remain accurate. **No README or manuscript correction is needed now.** Do not insert a guessed Pages URL or replace preparation text with “live”.

The inspected site shell has title/feedback footer content, and home links the repository; README supplies the selected license notices. Actual online discoverability of title/credit/notices should be confirmed in the final public-entry smoke review using those existing notices. This is a release-presentation follow-up, not a claim that a dedicated license UI or any uninspected host already exists.

## Findings and conditional follow-up

**No new content/material blocker or public-copy contradiction was identified for this exact two-source inventory.** Independent release verification, reviewed pipeline/recovery and actual public acceptance remain separate pending gates under the no-deployment hold. Inventory acceptance neither completes those gates nor publishes material.

| Owner / condition | Bounded action using existing sources |
| --- | --- |
| Coordinator/Developer, after accepted verification and separately reviewed/authorized pipeline scope | Check actual artifact allowlist, language availability, credit/notices and public URL/404/rollback evidence. Keep internal records and unapproved sources out of shipped reader/search assets. Existing [Release Readiness](../../delivery/milestone-1.md#6-release-readiness-remains-in-delivery-milestone-1) owns these gates; no duplicate roadmap is created here. |
| Writer, only after actual public acceptance and a scoped copy assignment | Update the existing README preparation/unverified-URL sentences using the observed URL and actual release evidence. Proposed bounded copy: “Read the reviewed Chinese opening and common-foundations chapter in the online reading edition; the rest of the book is still being written, and English chapters are not yet available.” Reconfirm the published scope at that time; link only verified destinations. No copy or URL change is made now. |
| Writer/Coordinator, if a source changes or new material is added | Recheck actual chapter/adaptation acceptance, provenance, notices and approved hash/manifest intake under the [existing chapter workflow](../../../book/planning/chapter-workflow.md) and contract. This inventory does not approve later text, English adaptation, examples or assets. |

## Observed input integrity and checks

Both source hashes are recorded above. These additional inputs were inspected unchanged from assigned HEAD:

| Input | SHA-256 |
| --- | --- |
| `site/content/manifest.ts` | `7fe10de1193c96595ac770986dfe205a0073391799b4e0c8c80a7eb02dcd99be` |
| `docs/content-contract.md` | `2524591ab0f422ec097c2dbf3220890819ed35910ea85a480197265b558fd874` |
| `README.md` | `b2a761214c3489c79e3e9e28c8ec5aebf8c35d6b44a0893e16de0623699dece7` |
| `LICENSE` | `5df221f88567a69a217e90acb595a1a130bf5b528996a3e8903ab7640cda2122` |
| `LICENSE-CONTENT.md` | `f8e841ea0fe3e01b1e7a59c383f9a97d364980c799091399d4c83e62d8725d3d` |
| `CONTRIBUTING.md` | `fdacf72630d84ee787e7e7ddd3fb4036bdef712ba48ad4b28657ad031e895dee` |
| `docs/licensing-and-readiness.md` | `f437f48f6b950061eeb42b07dd9ddc19efa32f678136b8aba19ffec02828fa35` |

All nine source/manifest/contract/public-entry/legal inputs match assigned HEAD byte-for-byte. Content checks passed: exact two identities/order/locale/status/review pointers, matching single H1s/source hashes, reciprocal local source links, author/AI text, balanced fences, four `text` blocks and two actual table separators. An initial broad substring table counter also counted repeated cells; separator-row counting corrected the probe before its passing result, with no source change.

Final local checks passed: all nine inspected-input hashes and HEAD comparisons, **57 relative destinations including two heading anchors** across the report/public-entry/legal/contract/source inputs, balanced fences and `git diff --check`. The report digest is supplied after the final write. No dependency, runtime test, fresh external citation/legal check, browser/artifact rebuild, Git write, source/schema/license/security edit or deployment was performed by Writer. Preserve parallel Developer verification/dependency/CI work and Coordinator records; those are not this report's verified results.

## Submission and recovery

This frozen report is the sole Writer deliverable. Coordinator reviews actual evidence in the existing release-verification record; Writer does not self-approve, grant publication or certify other owners' changes. The report's own digest is supplied after its last write, not recursively embedded.

On recovery, verify branch/HEAD/status, source hashes and the current board; preserve concurrent work and apply only concrete returned feedback within this report's scope. Stop after direct shared-file submission, without a receipt loop, chapter/prose/design continuation, live-URL update, pipeline or deployment.
