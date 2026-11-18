# Two examples for existing drafts

Writer assignment on the [coordination board](../../coordination.md), 2026-11-18 (Australia/Perth). Workspace `/private/tmp/vctw-m2-existing-manuscripts`, branch `codex/m2-existing-manuscripts` at `5141823f9c4a0b5403cf7a24d4269b0d09e2e92d`. Existing modifications in this checkout were present at startup.

The affected passages are the fictional signup call path in [P810M](../../reviews/P810M.md) and input validation in [P32M](../../reviews/P32M.md). Add a short reading example to each without expanding the accepted mechanisms. Coordinator owns affected manuscript review. The two drafts and this handoff are the assigned outputs.

## Submitted for affected review

- P8.10 replaces one paragraph with a short, explicitly unrun pseudocode example and reading cues. The handler waits for and checks the store's result before confirming. Inspecting the handler establishes the order and the branch. Checking whether the store actually fulfills its persistence promise still requires following the write and failure paths.
- P3.2 inserts an unsupported `level=expert` request and the example contract's HTTP `400` / `INVALID_LEVEL` response. The page retains the keyword and offers supported choices or clearing the filter. Valid empty results and failures retain their existing meanings.

| Source | Previously accepted SHA-256 | Submitted SHA-256 |
| --- | --- | --- |
| `03-after-ai-finishes.md` | `c5d066524720e82e63453823dc654878a83e581d88e7370207fac533df48cca3` | `b94c49a45c465b9c2d2028df44adba0d3861eca68eb24ab1e2cffa561f22da01` |
| `04-api-contract.md` | `7bdfb4eac5aa8203a0502a1f8f2c95091878100eda0d9ecd6b7578eb6f0c16fc` | `b85b2d706d863e611b7ab8faaaf2085396f01e583bc3f4440bc420198978c45f` |

Read the exact two-hunk diff. The installed chapter parser accepted both drafts. Heading IDs, ordered link targets, source notes and the existing fences were preserved. The G01 recovery fragment still resolves. Parsed the four JSON blocks and the invalid request URL locally. Read-only `git diff --check` passed. The pseudocode, backend and browser behavior were not run. Both drafts remain outside the reader manifest and await Coordinator review.

## EX-1 revision for affected review

Changed only “若保存结果未确认写入：返回错误” to “若保存结果未确认写入：不返回报名确认”. The pseudocode now limits this branch to withholding confirmation while writing remains unconfirmed. Reversing this exact line reproduces the entire previous signup draft digest. The installed Markdown parser, heading ID comparison, manifest exclusion check and `git diff --check` passed. The accepted API draft still matches its submitted digest.

Revised signup draft SHA-256: `0a707f763462099ee76f2b1e53b445a33cb61a23c65c3e599ac4ef644a191184`.
