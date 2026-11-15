# 项目阶段速览

更新：2026-11-15（Australia/Perth）。这是唯一的中文项目过程速览；详细记录以英文[开发历史](development-history.md)、[路线图](roadmap.md)和各阶段 review 为准。书稿仍按中文先审、之后英文改写。

## 当前：文档升级收尾后，先暂停讨论整体设计

本轮交付 **AI Development Workflow and Delivery History**：整理英文项目、工程、协作、规划和审查文档，用可读的成果名称解释 AI 协作与交付过程，保留旧编号追溯；不写 F01 正文、不改网站功能。

以下状态表保留本轮文档提交 review、进入 PR 前的快照，不作为持续更新的最终结论。最终 review、PR、CI 与合并事实，以[本轮正式审查记录](reviews/ai-development-documentation.md)及其链接的 PR 为准；不在此预填尚未知晓的合并结果。

| 关口 | 提交前快照 |
| --- | --- |
| 文档产出与 review | Writer 与 Developer 按文件分工整理；本中文速览由 Writer 起草，待 Coordinator review 后维护；本轮尚未最终验收 |
| CI / 合并 | 当前文档修订尚未提交云端检查、未合并；不能套用上一阶段的成功检查 |
| 部署 | 没有已验收的上线站点；本轮不部署 |
| 收尾之后 | 完成本轮 review 和返修后暂停；下一步先由用户讨论、优化项目整体设计，不自动恢复代码、正文或部署 |

## 已有成果与关键决定

- 当前 main 已包括网站双语骨架、开篇与 G01 中文稿、访问保护、原项目文档整合、CI、strict TypeScript，以及浏览器基础的研究细纲。**研究细纲通过不代表正文完成。**
- 已接受的[最小内容契约](content-contract.md)允许后续指定阶段使用开篇/G01 的原 Markdown、固定 ID/slug 和 reviewed-draft 状态；英文正文尚无，缺英文时明确引导到中文或另一语言目录。契约已接受，正式阅读页尚未实现；全书扩展仍待定。
- 用户选用 PandaCSS。主题实现冻结在独立 checkpoint，尚未通过完整独立浏览器/UI review，也未合入 main。本地构建、10 项测试和 111-token 报告不等于浏览器验收。
- Panda 上游声明问题采用分开的应用/构建工具编译边界：Coordinator 提出边界，Developer 实现并做本地检查；不是修好了上游声明，也不是 UI 已验收。
- AI 阅读增强先考虑低成本提问卡：预览上下文后复制到读者自己的工具；站内付费 chat 不在初期范围。此方向仍为计划。
- 用户后来授权必要 npm、浏览器和 E2E 工具，并把原先“不部署”扩为相关代码/内容/QA 通过后另做 GitHub Pages 发布。临时工具已安装不代表永久 E2E 已建好；当前整体设计暂停安排优先于自动继续。
- 项目过程文档统一英文，只保留本速览为中文；中文书稿不随本轮翻译。旧分析 hash 对应原始受审稿，英文整理后的文件需单独 review。

## 恢复点与尚未完成

| 项目 | 恢复依据 / 未完成 |
| --- | --- |
| 已整合基线 | `main` 的 F01 分析整合提交 `4ff4a1ffd32209e80f64a60bd12766f3864ea489`；后续文档合并另记实际结果 |
| 本轮文档 | `/tmp/btf-project-docs`，分支 `codex/ai-development-history`；Coordinator 统一 Git、PR、检查与合并 |
| 主题实现 | 未验收 checkpoint `4da2578048f8df113fed92d99e084f644a9a788e`，不在 main；保留原工作，不覆盖或视作完成 |
| 浏览器章节 | [分析](../book/planning/analyses/F01.md)已通过原 r1 review；F01M 正文未写，实验 V1–V4 未运行 |
| 阅读产品 | 组件、真实章节呈现、浏览器/E2E/QA 与线上发布仍未完成；搜索、AI 卡片、音频和导出仍是后续方向 |
| 下一步 | 本轮文档完成 review/返修后暂停，先讨论整体设计；重新执行须有明确范围和恢复指令 |

## 紧凑历史索引

| 可读成果名称（旧编号） | 实际结果 | 详细证据 |
| --- | --- | --- |
| 网站基础与双语路由（D02） | 代码/配置已在 main；浏览器完整验收未完 | [review](reviews/D02.md) |
| 开篇与共同基础（W02） | R1–R3 已关闭，PR #1 已合并；未上线 | [review](reviews/W02.md)、[整合](reviews/INT01.md) |
| 访问权限与主线保护（SEC01） | PR #2 已合并；权限检查有日期边界 | [review](reviews/SEC01.md) |
| 原项目文档整合（DOC01） | 27 份原文档与 review 经 PR #3 合并；目录提案未因此获批 | [review](reviews/DOC01.md) |
| CI 与合并保护（CI01） | PR #4 三项检查通过并合并；required checks 已核实 | [review](reviews/CI01.md) |
| Strict TypeScript 迁移（TS01） | PR #5 三项检查通过并合并 | [review](reviews/TS01.md) |
| 浏览器基础：研究与细纲（F01A） | 原 r1 通过，PR #6 三项检查通过并合并；正文未写 | [review](reviews/F01A.md) |
| 设计 tokens 与明暗主题（DS01） | 只有未验收 checkpoint；无 review 通过或 main 合并结论 | [路线图](roadmap.md) |

本文件只给状态与入口，不复制完整开发历史，也不把“写完”“已审”“CI 通过”“已合并”“已部署”合成同一个完成标记。
