# DOC01：剩余项目文档归属与整合 review

日期：2026-11-15（Australia/Perth）。主审与整合：Coordinator。结论：**27 份文档经有限返修后可作为正式项目资料入库。** 本记录另计 1 份，文档 PR 共 28 份；不包含网站代码、章节正文、配置或依赖变更。

## 为什么还有 27 个 change

开始审查时 `main` 为 `c8993cec0eb94203cae3a57104462e2dd67f2e3f`，暂存区和已跟踪文件均无差异，27 份全部为未跟踪 Markdown。它们此前被排除在 W02 四文件 PR #1 和安全基线五文件 PR #2 外，以保持两次整合范围明确。20 份由 Coordinator 维护，7 份由 Writer 交付；没有遗留的 Developer 网站代码。责任按原交付记录和 Writer 确认判定，未跟踪文件本身没有可用于归属的 Git 作者记录。

共享规则与 Writer 规划互相链接，因此由 Coordinator 统一建立文档分支和 PR，而不是让 Writer 提交其他角色的文件。Developer 已收到本轮 Git 协调说明；Writer 已交回 DOC01 有限状态修订 r1 并冻结七份文件。

## 精确文件清单

| 负责人 | 文件 |
| --- | --- |
| Coordinator | `AGENTS.md`、`README.md` |
| Coordinator | `docs/agent-notes-policy.md`、`docs/collaboration.md`、`docs/coordination.md` |
| Coordinator | `docs/project-brief.md`、`docs/project-vision.md`、`docs/roadmap.md`、`docs/positioning-discussion.md` |
| Coordinator | `docs/design/reading-experience-v1.md` |
| Coordinator | `docs/developer-sync-prompt.md`、`docs/writer-sync-prompt.md` |
| Coordinator | `docs/handoffs/TEMPLATE.md`、`docs/reviews/TEMPLATE.md` |
| Coordinator | `docs/reviews/D02.md`、`docs/reviews/INT01.md`、`docs/reviews/UI02.md`、`docs/reviews/UI03.md`、`docs/reviews/W02.md`、`docs/reviews/WF01.md` |
| Writer | `book/planning/editorial-brief.md`、`book/planning/outline.md`、`book/planning/tasks.md` |
| Writer | `book/planning/chapter-workflow.md`、`book/planning/templates/chapter-analysis.md` |
| Writer | `docs/handoffs/writer/W01.md`、`docs/research/jr-academy-topic-map.md` |

本记录 `docs/reviews/DOC01.md` 是 Coordinator 的新增审查产物，不是原 27 份之一。`.local/`、临时验证脚本、原始私聊和账户材料不在提交范围。

## 发现、返修与复审

| 编号 | 问题与影响 | 处理和复核结果 |
| --- | --- | --- |
| R1 | Writer 当前入口仍称 W02 待复审或只推送分支，未反映 PR #1 已合入 main；流程入口仍暗示需要用户搬运反馈 | Writer 修订六份自有文件，W01 交接只追加后续状态；复读实际入口，确认 W02 R1–R3 已关闭、WF01 已接受、直接反馈返修循环一致。已关闭 |
| R2 | 文档用途需要区分：阶段方案与已实现基线不是同一入口；Coordinator 初查误判 `site/IMPLEMENTATION.md` 不存在 | Developer 交叉检查指出原文件已跟踪；Coordinator 读取两份实际文件，更正判断，并在笔记规则同时说明 `site/IMPLEMENTATION.md` 是阶段方案、`site/DEVELOPMENT.md` 是已实现基线与运行说明。已关闭 |
| R3 | 旧 UI02 的四页、中文注释与旧默认分支状态容易被当成当前指令 | Coordinator 补历史说明；UI03 的三页、English-first 注释及 SEC01 默认 main/权限基线为当前依据。角色同步入口注明旧 SHA/checkout 只是快照。已关闭 |
| R4 | 协调表包含内部对话 ID，传播讨论包含不必要的个人职业背景 | Coordinator 改用角色名称，保留项目需要的产品定位和实际能力边界，移除内部 ID 与个人求职背景。已关闭 |

Writer 的实际修订和检查见 [W01 追加交接](../handoffs/writer/W01.md)。复核的是文件本身，不将交接中的自查直接等同于主审证据。

## 实际检查与边界

- 阅读项目入口、愿景、路线图、共享协作规则、设计交接及各阶段记录；核对书名、角色、英文 UI/中文先行书稿、PandaCSS 选定但未实施、D02 基线和 W02 已合并状态。
- 检查全部 28 份候选文件的单一 H1、代码围栏、尾部空白；116 处相对 Markdown 链接按已跟踪文件与本次精确清单共同组成的候选提交树解析并通过，不能靠未提交文件掩盖断链。
- 复核 45 个目录提案编号唯一、顺序保持原提案；分析模板未改，研究笔记只增加旧工作名说明。研究盘点保留原查阅日期及“公开目录/介绍盘点”的证据边界，没有声称重新调研或读过完整课程。
- 扫描凭据常见形式和内部对话 ID，未发现匹配项；这是有限静态检查，不是全面秘密检测或账户安全审计。
- 复核已跟踪文件保持不变，网站代码、W02 四文件及安全基线未混入。没有安装、运行网站测试、改 Figma 或重新核实所有历史外部来源；纯文档整合不重复代替先前代码/设计验收。

W01 全目录可作为明确标注的提案入库，**不表示 45 章编排已整体通过**。下一章分析、英文改写、网站内容契约、TypeScript/PandaCSS 实施、CI 和部署仍按实际任务范围另行处理。许可证仍为 TBU，不把公开可读解释为任意复用许可。

## 允许的下一步与 Git 证据

允许 Coordinator 仅将上方 27 份及本记录通过 `codex/project-docs-contracts` 文档 PR 整合，按实际提交差异复核并使用匹配 head SHA 的 squash merge。提交前记录候选文件摘要，提交后再次核对精确清单与已审文件字节；新差异需重新检查。

这是入库前审查记录，不预先宣称已经提交、合并或部署。精确 reviewed head SHA、实际检查与最终 merge result 由该 PR 的整合记录提供，GitHub 上的实时结果为准；本记录不写入尚未生成的 PR 号或合并 SHA。Coordinator 在执行后向两位负责人同步实际 main 基线；不为填表重复启动后续任务。

### 执行后记录（2026-11-15）

[PR #3](https://github.com/HAIXIN-ZHANG/beyond-the-frontend/pull/3) 的 reviewed head 为 `f4790e1916aee7a1c0bea376e96a350e8bd64839`，精确 28 文件与本地已审摘要逐字节一致。Developer 独立只读交叉检查在 R2 纠正后未发现剩余问题。PR 通过匹配 head SHA 的 squash merge 合并为 `884129bb313e62160321a0c1c1422452a237478a`；Coordinator 独立获取远端 main，验证完整 tree 与已审分支相同，工作区干净。未部署。本段为后续迭代追加的执行事实，不属于原 PR 的预合并结论。
