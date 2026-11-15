# Reading content contract · initial chapters

Decision date: 2026-11-15. Decision owner: Coordinator; technical writing: assigned Developer. Scope: the authorized PAGE01 reading implementation and later reviewed chapter additions. This is a small explicit publishing contract, not approval of the 45-chapter proposal or automatic publication of everything under `book/`.

Implementation is currently paused during the documentation upgrade. This is an accepted contract for a later assigned reading stage, not a claim that main already renders chapters.

## Approved initial input

Use the existing Markdown files as the single body source. At the original contract acceptance, Coordinator verified both manuscripts byte-identical to W02's merged revision `71b29c7`; [W02](reviews/W02.md) and [INT01](reviews/INT01.md) retain that historical review. The opening's original W02 SHA-256 was `726963e8c759d832b6821bede35c07780c24ca166f8b67ce86dac82e19ec21c5`. Coordinator subsequently accepted exactly one old-book-title to new-book-title string replacement in [the branding review](reviews/vibe-coding-rebrand.md); the current opening hash below identifies only that branding revision, without accepting any other prose change. G01 remains unchanged. The user has authorized using the reviewed materials for the app and deployment after QA; current execution holds remain separate.

| Stable ID | Locale | Slug | Display title | Source | SHA-256 |
| --- | --- | --- | --- | --- | --- |
| `opening` | `zh` | `before-we-start` | 写在前面：能跑，然后呢？ | `book/drafts/zh/00-before-we-start.md` | `805d2ebd747d63c65f8383275d3a3f709df40e960b0994a71eadc06837dfa8d0` |
| `G01` | `zh` | `a-page-and-a-system` | 一个页面，究竟连着什么？ | `book/drafts/zh/01-a-page-and-a-system.md` | `b928e5df21876c0ca49a3c227eb6c7e20723b3f22bb9c7cb2d560cc198db62d2` |

Order is opening, then G01. Publish these as **reviewed drafts**, without claiming the whole book or an English adaptation is complete. Figma sample prose and F01 analysis are not publishable chapters under this list.

## Minimal implementation

- Developer owns a small typed allowlist under `site/content/`, with stable ID, locale, slug, title, order, source path, reviewed status/review reference and expected source hash. It may be extended after review; do not require Writer to retrofit frontmatter merely to render the existing chapters.
- Read bodies at build time only. Validate unique locale/slug and ID/locale pairs, ordering, source existence, containment inside `book/`, and reviewed hashes. Do not crawl all Markdown or include planning, research, handoffs, reviews, `.local/` or unreviewed drafts.
- Render Markdown to static semantic HTML using a minimal maintained parser. Support the existing paragraphs, headings, lists, links, tables and fenced code/text diagrams. No MDX execution, arbitrary raw HTML execution, model calls, database or CMS.
- Do not copy bodies into JSX or maintain a website-specific duplicate of the chapter. Keep source links, examples, author/AI attribution and teaching caveats intact.
- The first H1 supplies the page title and appears once in the rendered document. The existing exact authoring marker `> 中文初稿 · 待 review` is stale editorial metadata, superseded by W02 acceptance: omit only that recognized preamble from the rendered body and show the manifest's reviewed-draft status. Do not broadly strip blockquotes or silently rewrite manuscript prose.

## Routes, language and navigation

Canonical chapter routes are `/zh/read/before-we-start/` and `/zh/read/a-page-and-a-system/`, with the normal deployment prefix added once by Next.js. Preserve the existing English/Chinese home/index routes, default English website entry and bilingual 404 behavior.

There are no English chapter bodies yet. English navigation may identify an available chapter using an English UI label, but must explicitly say the reading is Chinese and link to its canonical Chinese route. Do not present an automatic translation or a missing English article as delivered. Switching language from an untranslated chapter should lead to the other-language chapter index with a clear availability explanation, rather than manufacture a broken route. Use the same chapter counterpart when one is reviewed and available later.

Rewrite the two manuscripts' relative links to one another through the allowlist. Derive ordered chapter navigation and previous/next links from that same list. Generate the in-page outline and heading IDs from the actual Markdown; handle duplicate headings and preserve readable anchor links. Do not use proposed chapters as active links to nonexistent pages.

## Reading and validation

PAGE01 should first make one real chapter work responsively using the accepted components; the short opening uses the same renderer. Technical text diagrams may retain their original preformatted meaning with a clear figure label and local scrolling; do not convert them into misleading graphics or edit their technical meaning. Wide code and tables scroll within their own region, not the entire page.

Validate the real source-to-page flow, local chapter links, metadata/lang, chapter/index/404 paths under root and Pages prefixes, heading outline, keyboard/focus and narrow layout. QA01 adds a small useful E2E suite; passing parser/unit checks alone is not browser acceptance. Search, audio, AI features and automatic translation remain outside this foundational iteration.

Future addition: Writer completes the chapter's gates; Coordinator confirms its source/revision and adds or approves an allowlist entry; existing validation and route generation make it readable. Reviewed analysis alone never authorizes a manuscript's publication.
