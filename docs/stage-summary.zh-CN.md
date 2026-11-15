# 项目阶段速览

更新：2026-11-15（Australia/Perth）。这是唯一的中文项目过程速览。**当前任务、负责人、工作区、状态与暂停条件，以[协作看板](coordination.md)为唯一依据**；本页提供简短说明和历史入口，不维护第二份任务看板。正式流程文档使用英文，中文书稿保持不变。

## 本次更新：协作流程与新 agent 接手

用户已批准 **Agent Workflow and Cold-start Onboarding** 文档改造：让没有聊天背景的新 agent 能确定角色、找到任务、核验工作区，并按现有 review/返修机制接手。Writer 整理角色指引、章节流程与本速览；Developer 整理共享入口、流程、看板、模板和其他角色文档。实际进展与审查结论分别查看[看板](coordination.md)及其中链接的 handoff/review。

- 启动顺序：`AGENTS.md` → 调用方指定的角色指引 → 当前看板 → 任务 brief 和必要输入 → 核验实际 checkout、分支、状态与版本 → 一次简短启动报告。范围清楚即可执行，启动报告不增加一层批准或回执。
- 三个角色是 Coordinator/Reviewer、Writer、Developer。主对话派工、验收、反馈和管理 Git；正式执行产物由被分配的负责人写。角色不靠猜，仓库位置与会话身份由调用方提供；Markdown 不会自动找到或控制聊天。
- 看板记录当前状态，handoff 复用开工部分作为任务 brief 并保存执行证据，review 保存审查决定。`Assigned`、`In progress`、`In review`、`Changes requested`、`Accepted`、`Merged` 分开；hold 另写原因与恢复条件，`Deployed` 单独记录。
- 中断或替换 agent 时，同一 handoff 留清实际工作区、未提交文件、最后检查、受审版本、未决问题、下一步和恢复前提；接手者先核验，不覆盖原工作。
- 现有会话直接传路径、修订号和证据；没有后台监听，不催回执，不复制私聊。章节仍先分析 review，再按明确范围写正文，正文另审。

书稿、网站功能、E2E 和部署仍暂停。本轮文档工作不恢复 F01 正文或产品开发，也不把旧 roadmap 当开工指令；之后按用户要求先讨论项目整体设计。恢复执行须以看板记录的明确范围和解除 hold 条件为准。

## 上轮已完成：英文文档与开发历史

**AI Development Workflow and Delivery History**（旧编号 DOC02）已接受并经 [PR #7](https://github.com/HAIXIN-ZHANG/beyond-the-frontend/pull/7) 合并。受审 head 为 `dd08e7aa4a6e13f949bd389d8919e23a96f07a1d`，[run 43672904569](https://github.com/HAIXIN-ZHANG/beyond-the-frontend/actions/runs/43672904569) 的三项 required jobs 成功，合并提交为 `aafc467860a80a4ad0918d08055336079ebf0e98`。这些是上轮事实，不是本轮文档的 CI/合并结果；本轮最终证据从看板进入对应 review/PR。

详见[正式审查记录](reviews/ai-development-documentation.md)和[开发历史](development-history.md)。本轮沿用英文过程文档、可读成果名称和旧编号追溯，不翻译中文书稿。

## 已有成果与保留事项

| 成果 / 保留点 | 已确认边界与详细入口 |
| --- | --- |
| 网站基础、CI、strict TypeScript | 已整合基线，完整浏览器/阅读产品验收仍未完成；[开发历史](development-history.md)记录各次 review、检查与合并 |
| 开篇与 G01 中文稿 | 已审并合并，正文保持原稿；[最小内容契约](content-contract.md)接受固定 ID/slug、reviewed-draft 输入与缺英文处理，阅读页尚未实现，全书扩展仍待定 |
| 浏览器基础：研究细纲 | [原 r1 review](reviews/F01A.md)通过并经 PR #6 合并；F01M 正文未写，V1–V4 实验未运行，研究通过不等于正文完成 |
| Panda 明暗主题 | 未验收 checkpoint `4da2578048f8df113fed92d99e084f644a9a788e` 保留在独立工作分支，不在 main；本地构建、10 tests、111-token 报告不等于独立浏览器验收；[主题 review](reviews/DS01.md)记录上游声明和双编译边界的限制 |
| 后续方向 | 组件、真实章节呈现、永久 E2E/QA 与线上发布未完成；搜索、低成本 AI 提问卡、音频和导出保留为[路线图](roadmap.md)方向，不自动开工 |

此前用户授权必要工具及相关代码/内容/QA 通过后的 GitHub Pages 发布；临时工具不等于 E2E 已完成，授权也不解除当前暂停。当前可恢复工作区和负责人从看板查找，不从本页旧路径或旧 SHA 猜测。
