# Milestone 1 public copy and locale audit — Writer handoff

Owner: Writer. Date: 2026-11-17 (Australia/Perth). Revision: r1, submitted for review. [Board](../../coordination.md) owns the assignment; [Coordinator review](../../reviews/milestone-1-product-polish.md) owns acceptance.

## Task brief

Inspect the existing minimal reading product's English/Chinese copy, terminology, metadata, accessible labels, availability and current public-document claims. Record exact strings, source locations, impact, proposed replacements and acceptance criteria. Chinese chrome should be Chinese-primary, English chrome English-primary; retain intentional brand/technical terms and explicitly marked Chinese originals in the English catalog. This is not manuscript translation or a new editorial strategy.

Verified workspace: `/Users/haixin/Desktop/code/vibe-coding-then-what`, branch `codex/milestone-1-product-polish`, HEAD `cc59fd42f74bb5ed856881443a8bb2fd528b0817`. Startup changes were Coordinator's board and new review only. Writer may create/edit only this handoff. Developer owns runtime corrections after Coordinator alignment; product documents and both approved book bodies remain read-only. No Git writes, installation, external research, deployment or new feature is assigned.

Begin with static source inspection; distinguish it from rendered observations. Screenshots/interactions require an available baseline preview and are not assumed performed. PR24 source integration is not its public deployment: initial public `8c29f4d` retains its own evidence; current identity comes from actual public metadata/Coordinator observation. Submit a frozen report for actual review rather than self-approving findings or implementing them.

## Inspected revision and coverage

All inspected runtime and product-document bytes matched HEAD `cc59fd42f74bb5ed856881443a8bb2fd528b0817` when the static audit finished. Writer did not inspect a new deployed revision. Source locations below refer to that baseline, before any Developer correction.

| Surface | Actual inspected inputs and conclusion |
| --- | --- |
| Home/header/catalog/footer | `site/config/i18n.ts`, `site/config/site.ts`, `site/components/{home-page,site-header,language-switch,reading-index,document-layout}.tsx`: localized title/navigation/skip/feedback/catalog strings are selected by locale. English catalog explicitly says links open Chinese originals and marks each `Chinese · Reviewed draft`; no invented translation or silent English chapter. Header brand is intentionally localized around retained `Vibe Coding`. |
| Metadata and 404 | Both locale layouts, home/index route files, Chinese chapter route metadata, locale not-found files and `site/app/global-not-found.tsx`; `scripts/verify-export.mjs` inspected, not executed. Chinese title template and chapter descriptions are Chinese-primary; English equivalents are English-primary. Shared static 404 deliberately offers English plus a separately marked Chinese recovery block; this is an intentional fallback, not unfinished localization. No fabricated Chinese-only hosted 404 behavior is claimed. |
| Search | `site/components/search/{messages.ts,search-control.tsx}`, `site/content/{search,build-search-index}.ts`: locale-specific dialog heading, input label, close/clear/retry/status strings; Chinese result excerpts come from Chinese sources. English absence leads explicitly to Chinese chapters. The unused English `results: 'matches · Chinese reviewed drafts'` is not a currently displayed mixed-language result state and is not reported as a live defect. |
| Appearance | `site/components/ui/appearance-control.tsx`, `site/theme/{runtime,use-theme}.ts`: localized option/current-state names and hints; the hint wording opportunity below is distinct from the implemented site-only theme behavior. No storage/persistence/browser outcome was tested by Writer. |
| Chapter navigation, help and sharing | All `site/components/reading/` components, including `chapter-reader`, `book-navigation`, `chapter-navigation`, `on-this-page`, `reading-disclosure`, `markdown-content`, `section-actions`, `sharing`, code/table/callout primitives: current reader is Chinese-only and its labels agree with that scope. Original heading/body text is preserved. Correction draft fields are the one concrete localization correction recommended below. |
| Availability and public claims | `site/content/manifest.ts`, actual `book/drafts/` file inventory, README, vision, roadmap, current ledger, licensing/readiness notes and release runbook: exactly two approved Chinese bodies, zero English bodies; original publication SHA is framed historically and current identity points to public metadata. README provides a prominent public reading entry and separates source/planning/development links. Historical pending gates are explicitly marked historical. No current false no-deployment hold or claim that PR24 UI was publicly verified was found in these inputs. |

There are no rendered book images or image `alt` strings in the inspected current reader; its four original fenced examples are text, not raster figures. Decorative icons are hidden from assistive technology and controls receive textual names. This is source inspection, not a screen-reader, visual, contrast, zoom or device certification.

## Concrete correction for Coordinator alignment

### W-COPY-01 — P2: Chinese correction flow generates English form scaffolding

- **Location/current strings:** `site/components/reading/sharing.ts:12–15` generates title `Correction: ${context.chapterTitle} · ${heading}` and body fields `Chapter:`, `Heading:`, `URL:`, `Source SHA-256:`, `Suggested correction / 建议修改：`. `site/components/reading/section-actions.tsx:34` introduces it as `将在 GitHub 打开可编辑的 issue 草稿，请检查后自行提交。` The preview's own field labels are Chinese, but the site-generated destination draft switches ordinary instructional labels to English.
- **Impact:** the Chinese-reader correction journey changes language after a Chinese explanation. GitHub's own UI language is outside this product's control, but these generated labels belong to the product. This is a bounded consistency correction, not a reason to translate source text, technical identifiers or the GitHub service.
- **Proposed replacement:** title `纠错：${context.chapterTitle} · ${heading}`; body `章节：${context.chapterTitle} (${context.chapterId})`, `小节：${heading}`, `链接：${url}`, `原稿版本 SHA-256：${context.sourceHash}`, blank line, `建议修改：`, blank line. Intro: `将在 GitHub 打开可编辑的问题草稿，请检查后自行提交。` Retain `GitHub`, chapter ID, actual URL and full SHA-256 unchanged.
- **Criterion/owner:** Coordinator chooses the disposition; Developer owns any correction. Opening the section preview and decoding its generated issue URL must show the same chapter/heading/URL/hash with Chinese scaffolding, remain editable and require the reader's deliberate submission. Copy success/manual fallback and actual section destination must remain intact. Do not add auto-submission or imply that opening the link sends a report. This finding is source-confirmed; no GitHub draft was opened or submitted by Writer.

## Optional wording improvements — nonblocking, not another work queue

These can be accepted or deferred together with the existing polish scope; no additional feature or report is proposed.

| ID / priority | Exact current location/string | Proposed replacement and reason | Criterion |
| --- | --- | --- | --- |
| W-COPY-02 / P3 | `site/components/reading/book-navigation.tsx:17–18`: aria-label `计划中的八篇`; visible `全书方向 · 计划中的八篇` | `计划中的八个部分`; `全书方向 · 计划中的八个部分`. The eight entries describe parts, each containing multiple flexible reading units; “八篇” can sound like eight articles. | Visible heading and accessible name describe the same planned eight parts; no route or acceptance is inferred for them. |
| W-COPY-03 / P3 | `site/config/i18n.ts:103`: `日间或夜间选择会覆盖设备外观。`; English counterpart `Day or Night overrides device appearance.` at line 65 | Chinese: `本网站使用所选外观，不再跟随系统。`; English: `This site uses your selected appearance instead of the device setting.` This says what changes without suggesting that the site modifies the device's appearance. | Same Day/Night/System behavior and accessible option names; text describes the website's appearance only. |

## Intentional exceptions and retained decisions

- `Vibe Coding`, `AI`, `API`, `Design System`, `GitHub`, `SHA-256`, source IDs, code identifiers and keyboard notation are legitimate brand/technical terms; do not remove them merely to make every glyph Chinese.
- Language-switch text `English`/`中文`, target-language `lang` and destination-oriented accessible labels help readers recognize the other language. They are intentional, not unfinished chrome.
- English catalog's two English chapter labels summarize Chinese originals and are paired with explicit absence/original-language notices. They are navigation labels, not a translated English manuscript. Following them correctly enters the Chinese reader.
- `Day`/`Night` and `日间`/`夜间` are consistent labels across the existing control and accessible state. No need to rename them to Light/Dark for this audit. Chinese `已审阅草稿` and English `Reviewed draft` consistently communicate the current content state.
- A bilingual global static 404 and original Chinese chapter/search excerpts are deliberate language-boundary cases. Dormant empty-catalog strings are not evidence that available chapters are hidden. Existing local-storage/key names do not appear as product prose and are not a naming-cleanup assignment.
- No new favicon, social card, metadata platform, translation framework, audio, AI question cards, chapter changes or full-book English adaptation is needed to address these findings.

## Actual checks, limits and review request

Writer performed source reads, baseline-byte comparison, local handoff-link and whitespace checks only. No new preview URL/captures were supplied before this static submission; no screenshots, browser interactions, builds, CI, cloud verification, installation, external research or public release check were performed by Writer. Rendered layout/accessibility and actual correction-preview observations remain with Developer/Coordinator's fresh baseline and affected review. Do not treat this source audit as visual acceptance.

Only this handoff was created/edited by Writer. Coordinator's board/review and Developer's handoff/work are preserved. This r1 report is frozen for actual Coordinator review: align W-COPY-01 and decide whether either optional wording change belongs in the already assigned runtime polish. Return concrete findings to Writer if the report needs correction. Developer retains runtime ownership; Writer does not self-approve the whole product or change public release claims. No dependent manuscript or feature work is started.
