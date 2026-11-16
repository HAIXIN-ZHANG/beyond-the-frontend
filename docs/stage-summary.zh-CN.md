# Vibe Coding, Then What?：项目阶段速览

更新：2026-11-16（Australia/Perth），基线为已合并 PR #14 的版本。这是唯一的中文项目过程速览。**当前任务、负责人、工作区、状态与暂停条件，以[协作看板](coordination.md)为唯一依据**；本页解释内容方向和已发生的关口，不另建任务队列。正式规划文档使用英文，中文书稿保持原稿。

**已合并的阅读基础：** PR #12 合并主题基础与引言更新，PR #13 合并阅读组件，PR #14 合并真实中文阅读器。现在可阅读获审的引言和 G01，支持响应式导航、正文标题锚点、原有文字图表及 System/Day/Night；英文入口如实说明中文可读，尚无英文书稿。这些是代码合并与指定检查的结果，不代表已部署或完成整本书。实际行为以[运行说明](../site/DEVELOPMENT.md)为准，验收、CI 与合并证据见[开发历史](development-history.md)及[阅读器复审](reviews/beta1-chapter-reader.md)。

**设计与实现分开：** [UI04 设计复审](reviews/beta1-design-alignment.md)接受技术交接，作者视觉判断仍独立。设计要求当前阅读语言搜索、无英文语料说明，以及真实章节链接和复制/纠错恢复；在 2026-11-16 的 PR #14 基线中，静态搜索与章节链接复制尚未实现。后续任务以看板为准，实际行为看运行说明，验收与集成看对应复审和 PR 记录，本页不另存实时状态。AI 卡片继续延期，不阻塞基础阅读，也不是站内 chat。

Figma 保留三页、四个 collections、14 个 text styles；原有 111 个变量保留，另加 22 个 Beta 2 配色设计变量，现合计 133 个，生产映射仍为 111 个。[配色规范](design/reading-palettes-spec.md)和[设计复审](reviews/reading-palettes-design.md)中的 Original / Mist Blue / Soft Grey 是三个直接可点的色块，与 System/Day/Night 独立；仍只完成设计与技术交接，没有上线这些控件。[其余 Beta 2 概念](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=129-475)与 Beta 3 规划也不等于实现。

## 新书名与项目名

正式名称：**Vibe Coding, Then What?** / **《Vibe Coding 之后：能跑，然后呢？》**；仓库 slug：`vibe-coding-then-what`。英文副标题：**Understand the Systems Behind Your AI-Built Products**。中文副描述：**系统理解 AI 帮你构建的产品：从界面、API 和数据，到交付、恢复与 AI 能力。**

从“已经借助 AI 做出能运行的产品，但想补齐系统理解”的工程师出发，帮助判断如何验证、改进和维护产品；不把 AI 写代码一概视为错误，也不承诺从零基础学完一切。此前[品牌同步](handoffs/writer/vibe-coding-rebrand.md)已经完成，后续引言入口、读者指引和八篇导读也经[独立复审](reviews/beta1-opening-alignment.md)通过并随 PR #12 合并。八篇/48 个可调整单元保持原方向，G01/F01 不变；品牌与导读通过不代表其余章节或整套 Beta 功能已完成。

## 第一版定位：Full-stack + AI Product Engineer

用户已确认面向 **Junior–Senior** 的全栈与 AI 产品工程师。大家共读同一正文，按“基础机制 → 具体工程例子 → 可跳读的进阶取舍”分层；不承诺读完获得某个职级，也不要求完成综合项目。

AI 产品架构是必读主线，包括是否需要 AI、模型接入、用户控制、上下文与状态、RAG、工具执行、权限、评测和质量/延迟/成本取舍。Coding AI 是另一条开发交付线：需求拆分、上下文/契约、skills、diff review、测试和发布验证，不能替代产品架构。

## 八篇内容框架

| 篇章 | 要连起来的问题 |
| --- | --- |
| 1. 产品目标与全栈架构全景 | 用户成功标准、系统边界、浏览器、架构维度、类型与运行时校验 |
| 2. 前端 Design System 与产品交互 | 真实布局、设计系统/tokens/组件契约、状态、表单/a11y、异步与 AI 流式控制、渲染性能 |
| 3. API、后端与外部集成 | HTTP/接口/权限约定、模块边界、错误与清理、文件/外部 API/webhook |
| 4. 数据库、搜索与数据流 | 模型/ORM/SQL/索引/事务/缓存、关键词与向量、业务事件和可信指标 |
| 5. 异步、流量与可靠性 | 容量、限流/配额/背压、超时取消重试、幂等、worker/消息与一致性窗口 |
| 6. 云、测试与交付 | 运行环境/容器/托管与函数选择、网络身份、测试、CI/CD、迁移和安全发布 |
| 7. 可观测性、排错与恢复 | logs/metrics/traces、前端到数据库的证据链、故障缓解、备份恢复/RPO/RTO |
| 8. AI 产品架构与协作开发 | 十个工作阅读单元，分别解释产品能力与 Coding AI 交付 |

详见[正式细纲](../book/planning/outline.md)、[愿景](project-vision.md)和[写作基线](../book/planning/editorial-brief.md)。目前整理成 48 个工作阅读单元，数量和拆分可继续调整，不是印刷页数指标、网站路由或已完成篇数。每单元写明主要问题、必要范围、原创例子和进阶边界；旧 45 个章号在细纲中逐项映射，不丢弃历史。

主题设主讲位置并交叉引用：前端负责 AI 界面与可访问性，AI 篇负责流式/远程执行约定；数据篇讲搜索基础，RAG 页讲摄取到权限/更新/删除/引用；运维证据不同于 AI 输出质量 evals；一般流量配额不同于 AI token/模型成本。架构方案是可组合的不同维度，不把高并发、异步和 serverless 当升级链。

DevOps/Data 只讲交付、维护产品所必需的知识。CQRS/Event Sourcing/Saga、共识/分片、Kubernetes/Service Mesh、多区域等为可跳读或后续扩展；训练/微调/GPU/推理引擎和大数据平台运维不进入第一版主线，不因此建立插件架构或更多网站功能。

## 已完成的关口与后续边界

**Full-stack and AI Product Engineering — v1 Content Framework** 是上一轮已完成的定位与规划任务，已审并经 [PR #9](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/9) 合并，历史文件与检查见[交接](handoffs/writer/full-stack-ai-book-scope.md)。方向已确认，不代表每页研究、正文或发布通过；之后仍逐页“分析调研/细纲 review → 明确范围写正文 → 正文独立 review”。当前任务、负责人和状态只看[协作看板](coordination.md)，不从本页历史记录继续开工。

- W02 与书名替换保留各自历史来源；后来的引言 r2 已完成入口/读者/八篇导读的独立验收。获审字节与渲染要求以[内容契约](content-contract.md)为准，不把后续验收倒写成最初 W02 就已通过。
- G01 原字节保留，放在第一篇承接边界/状态，不把新增成功标准算作已审；仅引言/G01 进入当前阅读器，八篇规划不生成未完成章节或英文正文。
- F01 仍只有已审分析，放在浏览器阅读单元；F01M 正文未写，V1–V4 实验未运行。更大范围须返回分析关口。
- 原未验收主题 checkpoint `4da2578048f8df113fed92d99e084f644a9a788e` 继续保留。PR #12 的新基础经单独验收，只择取复用，不是整份旧 checkpoint 通过或合并。
- 阅读器曾因额度中断停在未验收状态；作者恢复主线后，原执行者修订并重新验证，才完成复审和 PR #14 合并。失败、暂停及恢复证据保留在原复审/交接中，不能用后来的通过改写当时状态。
- 本次恢复只释放看板指定的 Beta 1 工程与必要文档任务；新正文/英文改写、Beta 2/3 实现和部署仍暂停。详细历史与不可变提交/CI 记录集中在[开发历史](development-history.md)，不在各页复制任务队列。

搜索/分享及后续阶段的实际验收、CI、合并或上线结果，以看板链接的复审和 PR 执行记录为准。新执行仍须有明确范围；已有代码合并、工具和 QA 后发布的旧授权不代替当前阶段验收或部署放行。
