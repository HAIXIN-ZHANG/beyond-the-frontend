# Reading content contract · initial chapters

Decision date: 2026-11-15. Decision owner: Coordinator; technical writing: assigned Developer. Scope: the authorized PAGE01 reading implementation and later reviewed chapter additions. This is a small explicit publishing contract, not approval of the 45-chapter proposal or automatic publication of everything under `book/`.

This contract supplies the reviewed inputs for Delivery Milestone 1 (historical Beta 1). Theme, reusable components and the two-source reader merged through PR14; [PR15](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/15) integrated the accepted search/sharing and reading closeout. The [search/sharing implementation](handoffs/developer/beta1-search-sharing.md) derives a static index and link/correction context only from those same reviewed sources and real heading IDs; its [independent review](reviews/beta1-search-sharing.md) retains r4 acceptance evidence. No additional publication inputs or English corpus are implied. The [canonical first-delivery ledger](delivery/milestone-1.md) separates original expectations, delivered foundation and remaining Release Readiness; the [board](coordination.md) owns assignments/holds. Product Goals and Delivery Milestones are distinct; this contract does not release deployment.

## Approved initial input

Use the existing Markdown files as the single body source. At the original contract acceptance, Coordinator verified both manuscripts byte-identical to W02's merged revision `71b29c7`; [W02](reviews/W02.md) and [INT01](reviews/INT01.md) retain that historical review. The opening's original W02 SHA-256 was `726963e8c759d832b6821bede35c07780c24ca166f8b67ce86dac82e19ec21c5`. The [branding review](reviews/vibe-coding-rebrand.md) subsequently accepted its single-title replacement at SHA-256 `805d2ebd747d63c65f8383275d3a3f709df40e960b0994a71eadc06837dfa8d0`; both earlier hashes remain historical source evidence. Coordinator has now accepted the separately scoped opening alignment r2 in [the opening review](reviews/beta1-opening-alignment.md); the current table identifies that reviewed revision. This does not accept additional chapters or unreviewed prose. G01 remains unchanged. The user has authorized using the reviewed materials for the app and deployment after QA; current execution holds remain separate.

| Stable ID | Locale | Slug | Display title | Source | SHA-256 |
| --- | --- | --- | --- | --- | --- |
| `opening` | `zh` | `before-we-start` | 写在前面：能跑，然后呢？ | `book/drafts/zh/00-before-we-start.md` | `244c4f7a9ddeb781d8530691d07ba17b9daccf611b9631ea60faa412b87a6d90` |
| `G01` | `zh` | `a-page-and-a-system` | 一个页面，究竟连着什么？ | `book/drafts/zh/01-a-page-and-a-system.md` | `b928e5df21876c0ca49a3c227eb6c7e20723b3f22bb9c7cb2d560cc198db62d2` |

The original input order is opening, then G01; the approved local extension below adds F01. Treat these inputs as **reviewed drafts**, without claiming the whole book or an English adaptation is complete. Figma sample prose and F01 analysis are not publishable chapters under this list.


## Delivery Milestone 2 — approved local intake extension

Decision date: 2026-11-17. The author resumed the main work after the first writing/preparation slice. Coordinator now authorizes **local implementation and review of exactly one additional source**, the accepted [F01M manuscript r3](reviews/F01M.md). The original input table/order above is the initial two-source baseline; this additive extension makes the assigned local order opening(1), G01(2), F01(3). It is not a deployment decision: the last verified public edition still has only opening/G01 until separately authorized integration/release is performed.

| Stable ID | Locale | Slug / canonical route | H1 / source | Approved SHA-256 / review |
| --- | --- | --- | --- | --- |
| `F01` | `zh` | `browser-foundations` / `/zh/read/browser-foundations/` | 页面出现之前，浏览器在忙什么？ / `book/drafts/zh/02-browser-foundations.md` | `54b983945710303a7e790706d86b9acc3884f50f6ae82f06dbde71711967ca24` / `docs/reviews/F01M.md` |

The new entry has order3 and status `reviewed-draft`. Preserve both original entries, routes and hashes. Approved English **navigation label**, not an English manuscript: **How the Browser Builds a Page**. Home benefits: Chinese **分清资源等待、代码执行和画面更新，理解页面为什么看得见却还不一定能及时响应。**; English **Separate resource waits, code execution and visual updates to understand why a visible page can still respond late.** English bodies remain absent; every chapter link still leads deliberately to a Chinese original.

Reuse the current renderer/parser and relative-link allowlist, including F01's link back to G01. Do not rewrite manuscripts or add source-discovery/frontmatter machinery. Navigation/last-chapter expectations must derive from the approved order: G01 now has next=F01, F01 previous=G01 and no next. Preserve source-specific G01 shape/citation checks separately from these positional rules. Counts/availability/search must describe the actual approved local corpus rather than two-entry assumptions. Shared client i18n must not import full source/review-path metadata merely to obtain a count; pass or derive only public counts where needed.

The new chapter's original diagrams/pseudocode are conceptual material, not browser benchmark results. Verify its real rendered code/tables/headings/links at desktop and320/390px with Day/Night under root and Pages prefixes. Manuscript source acceptance, local intake/code acceptance, CI, Git integration and public deployment remain separate. The [current board](coordination.md) and [intake handoff](handoffs/developer/milestone-2-chapter-intake.md) define permitted execution; this extension assigns no translation, next chapter, resume/bookmark/palette feature, dependency installation or release.

## Reviewed source revision and reader identity — 2026-11-18

The [accepted Writer refresh](reviews/existing-manuscripts-refresh.md) replaces only the reviewed revisions of the three already admitted sources. Earlier tables above retain their dated source identities. The current manifest keeps their IDs, locale, slugs, H1s, order and reviewed-draft status, with the same review pointer `docs/reviews/existing-manuscripts-refresh.md` for all three:

| ID | Current reviewed SHA-256 |
| --- | --- |
| opening | `b4d0dd040e183cebc0400526ca5b317d23db1dc406e0bd5b00e3af74a940f521` |
| G01 | `e0fca6dd95b87e93107c4279fb4bad120e80a068c8fc91a58689154293b25a05` |
| F01 | `3688b7967433b7a97304438100908d37883d5de9740aaa5c08820b37aa9bf624` |

The approved introduction removes its separate AI-method heading while retaining a quiet acknowledgment and human responsibility under `我为什么想写这本书`. A single explicit typed compatibility entry preserves old fragment `关于本书的-ai-协作` at that retained section. Build validation requires a real canonical target and rejects reserved/canonical/alias collisions. The controlled renderer uses a named focusable static wrapper around the canonical H2 and actions: direct old links focus the wrapper, including without JavaScript; Tab then Enter on the heading link moves to the canonical H2/URL. The old URL is not automatically rewritten. Alias and H2 scroll clearance include a closed-toolbar fallback before JavaScript measurement. This is one reviewed exception, not a general heading-migration contract.

Aliases do not create headings, outline/search entries or sharing targets. The actual Chinese index contains28 canonical sections across3 chapters (opening7/G01 12/F01 9); English remains empty. Both newer original manuscripts03/04 remain unadmitted. Reader byline is `缸子太子与世界` without a repeated creation-method label. Descriptions are EN `Understanding the Systems We Build, and Learning to Live with What We Can’t Fully Control` and ZH `看懂我们构建的系统，也学着与无法完全掌控的事相处。` Approved body prose, AI teaching/provenance and all5 source bytes remain Writer-owned. See the [intake handoff](handoffs/developer/existing-source-intake.md) for actual QA and limits; this addendum establishes neither integration nor deployment.

## Minimal implementation

- Developer owns a small typed allowlist under `site/content/`, with stable ID, locale, slug, title, order, source path, reviewed status/review reference and expected source hash. It may be extended after review; do not require Writer to retrofit frontmatter merely to render the existing chapters.
- Read bodies at build time only. Validate unique locale/slug and ID/locale pairs, ordering, source existence, containment inside `book/`, and reviewed hashes. Do not crawl all Markdown or include planning, research, handoffs, reviews, `.local/` or unreviewed drafts.
- Render Markdown to static semantic HTML using a minimal maintained parser. Support the existing paragraphs, headings, lists, links, tables and fenced code/text diagrams. No MDX execution, arbitrary raw HTML execution, model calls, database or CMS.
- Do not copy bodies into JSX or maintain a website-specific duplicate of the chapter. Keep source links, examples, author/AI attribution and teaching caveats intact.
- The first H1 supplies the page title and appears once in the rendered document. The existing exact authoring marker `> 中文初稿 · 待 review` is stale editorial metadata, superseded by W02 acceptance: omit only that recognized preamble from the rendered body and show the manifest's reviewed-draft status. Do not broadly strip blockquotes or silently rewrite manuscript prose.

## Routes, language and navigation

The initial canonical chapter routes are `/zh/read/before-we-start/` and `/zh/read/a-page-and-a-system/`; the approved local extension adds `/zh/read/browser-foundations/`. Next.js adds the normal deployment prefix once. Local input approval is distinct from public deployment. Preserve the existing English/Chinese home/index routes, default English website entry and bilingual 404 behavior.

There are no English chapter bodies yet. English navigation may identify an available chapter using an English UI label, but must explicitly say the reading is Chinese and link to its canonical Chinese route. Do not present an automatic translation or a missing English article as delivered. Switching language from an untranslated chapter should lead to the other-language chapter index with a clear availability explanation, rather than manufacture a broken route. Use the same chapter counterpart when one is reviewed and available later.

Rewrite relative links among the approved manuscript inputs through the explicit allowlist. Derive ordered chapter navigation and previous/next links from that same list. Generate the in-page outline and heading IDs from the actual Markdown; handle duplicate headings and preserve readable anchor links. Do not use proposed chapters as active links to nonexistent pages.

## Reading and validation

All approved local chapters use the same responsive renderer and accepted components. Technical text diagrams may retain their original preformatted meaning with a clear figure label and local scrolling; do not convert them into misleading graphics or edit their technical meaning. Wide code and tables scroll within their own region, not the entire page.

Validate the real source-to-page flow, local chapter links, metadata/lang, chapter/index/404 paths under root and Pages prefixes, heading outline, keyboard/focus and narrow layout. The [first-delivery ledger](delivery/milestone-1.md) records actual initial-publication/CI/CD/recovery outcomes and retained dependency/rollback limits. Each later intake still needs its assigned source/build/browser review and separately authorized integration/release; passing parser/unit checks alone is not browser acceptance. Search/sharing indexes only these validated public trees, with current-language scope, source revisions and real target headings; correction drafts require deliberate reader review/submission. Audio, AI features and automatic translation remain outside this contract.

Future addition: Writer completes the chapter's gates; Coordinator confirms its source/revision and adds or approves an allowlist entry; existing validation and route generation make it readable. Reviewed analysis alone never authorizes a manuscript's publication.
