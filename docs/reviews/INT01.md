# INT01：初始分支整合 review

日期：2026-11-14（Australia/Perth）。主审：Coordinator。结论：**通过 W02 四文件整合；D02 已作为 main 基线，无新增差异。** 本轮按用户明确要求创建 PR 并合并已有成果，不涉及网站部署。

## 审查版本与实际范围

- `main` 初始提交：`d0965a172196091c9781f4ffea6b8dc9941ae6c5`，与远端 `codex/d02-engineering-skeleton` identical；比较为 ahead 0 / behind 0 / files 0。因此 D02 无需、也无法创建有新增差异的 PR，不倒退或重写 main 以制造记录。
- W02 head：`13513c91edf6b8a201222ab11b90cafee07c9d36`，比 main 多一项提交。范围仅 `book/drafts/zh/00-before-we-start.md`、`book/drafts/zh/01-a-page-and-a-system.md`、`book/planning/W02-scope.md`、`docs/handoffs/writer/W02.md`，共 407 行新增。
- [PR #1](https://github.com/HAIXIN-ZHANG/beyond-the-frontend/pull/1)：`codex/w02-opening-foundations` → `main`。PR 返回的 base/head SHA、四文件清单及行数与本地审查一致。

## 实际复核与证据

沿用 [D02](D02.md) 已通过的代码/静态构建范围和 [W02](W02.md) 已关闭 R1–R3 的内容 review。本次检查四份 W02 工作区文件与待合入的 commit 字节一致，两篇正文 SHA-256 与已审版本相同，单一 H1、围栏及相对链接通过。链接目标按实际提交树核对，没有把工作区中的未跟踪文档误计为远端依赖。

重新执行 `npm run check`：ESLint 零告警，4 个测试通过。本次差异只有 Markdown，未重新安装依赖或重复未受影响的静态构建；没有执行浏览器视觉、读屏或部署验收。D02 的浏览器验收限制继续保留；整合书稿不代表网站已经读取或公开呈现它。

本范围无阻塞修订。合并前核对 PR 当前 head，使用 `expected_head_sha=13513c91edf6b8a201222ab11b90cafee07c9d36`；若 head 改变或服务器合并条件不满足，停止并复核，不绕过。

## 执行与后续状态

PR #1 已通过 squash merge，提交为 `71b29c7885812e19936de5c1c0cbb73dd6347271`。再次读取 GitHub PR：`state=closed`、`merged=true`，merge commit 与工具执行结果一致。

主对话拉取了远端 main，核对 SHA 与 PR 的 merge commit 相同；`git diff origin/main codex/w02-opening-foundations` 无差异，证明合并后的整个文件树与已审 W02 分支一致，而不只核对 PR 标题。已跟踪文件及暂存区均无差异。

已创建本地 `main` 并跟踪 `origin/main`，共享 checkout 切到 main。所有本地未跟踪文档原样保留，未纳入此次 PR；两个执行方此前已收到暂停 Git 写操作的协调消息。D02 工作分支保留，没有强制更新或删除历史。

本轮未纳入本地未跟踪的 README、共享协作/设计/review、W01 规划或流程文件。它们仍需另一次精确范围的文档整合；本记录不声称已推送。没有安装 GitHub AI review action、配置付费推理、开启无人值守合并或部署服务。

GitHub 最新读取的默认分支仍是 `codex/d02-engineering-skeleton`；`main` 已存在与默认分支已切换是两件事。应用内浏览器控制接口本轮重试仍不可用；未改用 Safari。默认分支设置的剩余操作须通过可用的设置界面完成并另行核验，不阻止显式以 main 为 base 的本次 PR。

后续状态：上述默认分支限制随后已在 [SEC01](SEC01.md) 解决，默认实际改为 main，并启用管理员同样生效的分支保护。此处保留 INT01 当时的检查结果，不再代表待办。
