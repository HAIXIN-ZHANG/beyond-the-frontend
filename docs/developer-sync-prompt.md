# 发给 Developer 的协作同步指令

## 当前文档整合：DOC01（2026-11-15）

此前剩余的 27 份本地 Markdown 已完成归属盘点与有限状态返修，现由主对话统一 review 并通过独立文档 PR 整合；范围与实际结果见 `docs/reviews/DOC01.md` 和 `docs/coordination.md`。下方各阶段的提交号、分支和“未跟踪”描述均为对应日期的历史快照，不能作为当前 checkout 或任务状态。获取当前 main 应读取远端，不复用这里的旧 SHA。目录仍为提案，整合文档不放行下一章、TypeScript/PandaCSS 实施、CI 或部署；按已明确的任务继续交接、review 和返修。

## 最新权限基线：SEC01（2026-11-14）

GitHub 默认分支已实际切换为 main，main 禁止 force push/删除、必须 PR、管理员同样受限；不要再沿用下方“默认分支待改”的旧快照。安全基线 PR #2 已合并，当前 main 为 `c8993ce`。见已提交的 `docs/security/access-policy.md` 与 `docs/reviews/SEC01.md`：审批人数 0 对应同账号本地主审流程，并不代表网站/CI已验收；没有新增云端AI review。访客没有push权限，Figma公开只读可评论，继承编辑者仅Owner。不要为排错放宽权限或绕过规则；新依赖/权限/部署按实际授权。其它本地未跟踪文档未混入本次安全PR。

## 当前主线：main 与本地 review（2026-11-14）

D02 已作为 main 初始基线；W02 PR #1 已 squash merge，main 当前为 `71b29c7`。共享 checkout 现在跟踪 origin/main，后续 scoped 工作分支从最新 main 建立并由主对话协调切换。主对话承担本地 reviewer，记录 review MD、退回修订、通过后按授权 PR/merge；不安装 GitHub AI review action 或新增常驻 Reviewer。基础 CI 与这个选择分开，尚未实现；本条不放行 CI、TypeScript、PandaCSS 或部署。旧段落中的 Writer 分支 checkout 状态已被 INT01 替代。

## 当前 review 循环（2026-11-14）

用户已确认后续由执行方完成阶段后直接回传主对话 review，再按反馈修订。主动发送交接路径、修订号、精确文件清单、实际验证及未决项；主对话检查代码/页面后写明确结论并直接反馈，你返修后发回复审。无需用户手动搬运同一任务的消息；通过后继续已授权下一步，扩大范围、安装或发布仍按适用授权。无需为每个小改动额外建立 Analyzer 文档，不重复回执或制造消息循环。UI03 你已确认阅读，无需再次设计同步；当前仍未迁移 TypeScript/PandaCSS。具体下一阶段尚未由这条流程更新放行。

## 最新设计补充：UI03（2026-11-14）

以 `docs/reviews/UI03.md` 和当前 `docs/design/reading-experience-v1.md` 为准：Figma 现在只有 Tokens、Components、Page Designs 三页；Day/Responsive/Interactions/Night 在页面设计页纵向分区。界面和设计注释均以英文为主，中文仅在必要时补充；下方 UI02 的四页结构、55 变量和中文注释状态均为历史。当前 111 个变量含 36 个 semantic layout aliases；组件展开并说明 slots、recipes 与状态。实现须消费角色语义，避免把每个像素复制为局部值，也不要给每个节点新增同义 token。Header 的固定高度/内边距、disabled 图标、主题源组件与搜索恢复说明已修正。17 张现有画板保持 ID。仍没有 PandaCSS 配置或 Code Connect；作者视觉验收和实际浏览器验收待完成，不据此启动新阶段或安装依赖。

## 当前阶段补充：分析完成与 Writer 交接（2026-11-14）

Developer 已完成 TypeScript 迁移分析，尚未修改代码或安装依赖；建议先做最小严格类型迁移，再接 PandaCSS/UI02，不将建议当成实现完成。W02 的 R1–R3 已由 Coordinator 复审关闭，四份文件已推送到 `codex/w02-opening-foundations`（`13513c9`），本次 Git 协调结束。当前本地仍在 Writer 分支；D02 原分支与提交保留。正文尚未接入网站，正式内容契约仍待确定；W01 与共享文档仍在本地未跟踪。本次结束 Git 协调不放行新的迁移、安装或分支操作，后续按实际任务范围执行。实际状态以 `docs/coordination.md` 为准。

## 已发送的 UI02 同步消息（历史记录，2026-11-14）

用户已明确要求主对话把这批更新同步给你。本次先对齐既有决定、当前任务与缺口，不把整个 roadmap 一次放行。工作目录为 `/Users/haixin/Desktop/code/beyond-the-frontend`。

请读取 `README.md`、`docs/project-vision.md`、`docs/roadmap.md`、`docs/design/reading-experience-v1.md`（路径沿用 v1，当前修订为 v2）和 `docs/reviews/UI02.md`，遵守 `AGENTS.md` 与文件所有权约定。

- 正式书名为 **Beyond the Frontend: It Works. Now What?** / **《前端往后看：能跑，然后呢？》**，项目与仓库名为 `beyond-the-frontend`。网站是可持续维护的静态阅读产品，先做可靠阅读、导航、查找，再试增强功能。
- **PandaCSS 已由用户指定。** 设计使用 primitives → semantic tokens → recipes/slot recipes → 页面组合，含 Day/Night、按钮/图标/导航状态、Desktop/Compact/Narrow Header、阅读提示、代码块和表格。55 个项目 tokens、14 个 text styles、2 个 effect styles 是 Figma 设计资产；尚无对应 Panda 配置，不可当成已接入 Code Connect 或已实现样式。
- 风格偏 iOS：轻透导航、胶囊主题选择与克制留白；正文保持实色。**UI 设计文案英文、实现注释可以中文；既有中英路由和全书双语目标不因此取消。** 明暗主题共享语义变量，默认跟随系统，显式选择后持久化，并避免初始化闪白。
- 已有 1440/1024/768/390/320px 样本。主要依赖：响应式规则、焦点/关闭归还、原生链接与按钮语义、44px 操作区域、代码/表格局部滚动、图示文字替代、减少动效与透明度回退。Figma review 不代替浏览器和读屏检查；D02 尚欠的 Browser 验收仍要补。
- 组件库建议是按需采用 Park UI，复杂交互沿用其底层 Ark UI；Lucide 为图标建议，Pagefind 为静态搜索候选。它们不是全部必装清单，未做当前依赖版本兼容验证。
- 已读到你本对话最新用户提出升级 **TypeScript**。请优先回应这条原始需求，明确迁移收益、最小范围和与 Panda/UI 接入的顺序；不能用旧文档的“本轮不顺带迁移”阻止用户的新方向。当前实现仍是 JS/JSX；本次同步本身不替代该对话的具体迁移/安装授权。
- AI 首期仅精选问题和上下文的查看/复制，交给读者自己的工具；不接站内 chat、模型密钥或实时推理。音频仍为后续单章试验。Figma 中的正文、搜索结果、章名和代码不等于批准公开的 Writer 内容。

**当前主线：保留已通过的 D02 基线，先回应 TypeScript 请求并对齐 UI02，再明确下一阶段最小范围。** 正式内容 schema、稳定标识/slug、语言版本/缺译规则、公开与预览清单尚待主对话和 Writer 确认；规划、交接、review 和 `.local/` 不进入公开阅读、搜索或音频。不要擅自接入未审稿或重写 `book/`。

请在自己的对话简短回复：已吸收的更新、与你已有用户指令的冲突（如有）、建议先做的最小阶段及其依赖。继续独立授权的工作，但不要仅凭本条同步开始完整 D03、安装一整套库、改共享契约、切换分支、提交其他角色文件或部署。后续以明确任务和逐文件范围执行。

Figma：https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=4-115 。Night 与 responsive 节点在设计交接中。共享链接只读，项目团队默认仅查看和评论；你消费设计，不改 Figma 或访问设置。请在本对话确认即可，不主动向其他对话转发。

## 常规协作约定

请先重新阅读 `AGENTS.md`、`docs/project-vision.md`、`docs/roadmap.md`、`docs/collaboration.md` 和 `docs/handoffs/TEMPLATE.md`，吸收共同约定；保留用户在本对话里给出的更新、更具体的要求。如有冲突，指出并等待相关决定，不丢弃已确认的细节。

正式书名：**Beyond the Frontend: It Works. Now What?**，中文 **《前端往后看：能跑，然后呢？》**。项目简称 **Beyond the Frontend**；仓库和本地目录已改为 `beyond-the-frontend`。旧名称仅作历史记录。

你按本对话中用户已批准的范围实现静态阅读网站，主要负责 `site/` 与明确授权的构建/测试配置。正文以 Writer 的 `book/` 为单一来源，不复制维护第二份正文，不直接更改 Writer 的章节。已有技术选择以用户在本对话确认的为准；跨角色的内容格式、路径与图示约定要记录并交主对话确认。

每完成一个可 review 的网站阶段，在 `docs/handoffs/developer/` 使用实际任务标识留下简短交接：任务范围、修订号、实际文件、功能结果、验证及证据、预览地址、限制和跨角色依赖。参考模板；注明真正做过的构建、桌面/移动尺寸、键盘与浏览器检查，不把计划检查写成通过。主动把交接路径和必要摘要发给主对话，请其实际 review；收到意见后按范围返修和复审。不自行启动未授权的依赖阶段。

主对话会直接检查代码和实际页面，不只阅读摘要。读取主对话回传及写入 `docs/reviews/` 的实际阶段意见，按指令修订并发回复审。审查期间保持本阶段文件稳定；若必须变更，补记报告并通知主审。遇到正文或图示语义问题，定位文件并交主对话协调 Writer 修改。

这是一条协作方式同步消息，不覆盖你与用户已确认的任务。没有明确任务时只确认并等待；不得据此扩大范围、安装依赖或发布。
