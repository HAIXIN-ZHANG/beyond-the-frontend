# Existing signup and API examples — affected manuscript review

- **Date/reviewer:** 2026-11-18 Australia/Perth, Coordinator/Reviewer.
- **Gate:** [Writer handoff](../handoffs/writer/existing-draft-example-refresh.md). Scope is the two revised passages in otherwise accepted drafts [P810M](P810M.md) and [P32M](P32M.md). The isolated Writer checkout is `codex/m2-existing-manuscripts@5141823`.
- **Inspected revisions:** signup `b94c49a45c465b9c2d2028df44adba0d3861eca68eb24ab1e2cffa561f22da01`; API `b85b2d706d863e611b7ab8faaaf2085396f01e583bc3f4440bc420198978c45f`.
- **Initial outcome:** API example accepted. Signup example needs one clarification. Neither draft is in the reader manifest.

## Independent examination

Read the two exact diff hunks in the context of the completed chapters. The new pseudocode gives readers a specific call, a returned result to check, and a point when the page may confirm. It keeps the example explicitly unrun and leaves the storage guarantee to the actual implementation. The API passage demonstrates an unsupported `level`, one example-local `400` response and a reader action. It keeps the later valid-empty and service-failure examples distinct.

Compared the revised sources with `git show HEAD:<path>` using the project's installed Markdown parser. Headings/IDs, links, original code blocks and source-note suffixes are unchanged. Each article adds one code block. Parsed the API error JSON and URL parameters and checked the manifest excludes both articles. `git diff --check` passed. The examples were examined as prose, without running a model or an example service.

| Finding | Outcome |
| --- | --- |
| EX-1 · Signup draft | The branch “若保存结果未确认写入：返回错误” groups a confirmed failure and an unknown outcome under an undifferentiated error. The later chapter expressly preserves the unknown state. Retain the same compact example and explicitly say the handler returns no success confirmation when writing is unconfirmed, without implying the write failed. Keep the rest of both passages and all accepted earlier decisions unchanged. |
| API draft | Accepted at the inspected digest. No required change. |

Both drafts remain outside reader intake.

## EX-1 affected re-review — accepted

Independently checked the revised signup branch now says “若保存结果未确认写入：不返回报名确认”. This expresses what the handler can safely confirm and leaves the write outcome open. Reversing that one line reproduces the entire prior digest. The current signup digest is `0a707f763462099ee76f2b1e53b445a33cb61a23c65c3e599ac4ef644a191184`; the accepted API digest remains `b85b2d706d863e611b7ab8faaaf2085396f01e583bc3f4440bc420198978c45f`. Markdown heading IDs and both manifest exclusions passed recheck; `git diff --check` passed.

Both corrections are accepted as local manuscripts. Close the Writer assignment and keep the exact two files frozen in the Writer checkout for authorized integration. No chapter admission, execution of either example, PR, merge or deployment occurred in this review.
