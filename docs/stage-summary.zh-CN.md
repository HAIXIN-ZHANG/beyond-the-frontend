# Vibe Coding, Then What?：项目阶段速览

更新：2026-11-15（Australia/Perth）。这是唯一的中文项目过程速览。**当前任务、负责人、工作区、状态与暂停条件，以[协作看板](coordination.md)为唯一依据**；本页解释内容方向和已发生的关口，不另建任务队列。正式规划文档使用英文，中文书稿保持原稿。

## 新书名与项目名

正式名称：**Vibe Coding, Then What?** / **《Vibe Coding 之后：能跑，然后呢？》**；仓库 slug：`vibe-coding-then-what`。英文副标题：**Understand the Systems Behind Your AI-Built Products**。中文副描述：**系统理解 AI 帮你构建的产品：从界面、API 和数据，到交付、恢复与 AI 能力。**

从“已经借助 AI 做出能运行的产品，但想补齐系统理解”的工程师出发，帮助判断如何验证、改进和维护产品；不把 AI 写代码一概视为错误，也不承诺从零基础学完一切。本轮只做获准的品牌与定位同步，实际执行和审查见[交接](handoffs/writer/vibe-coding-rebrand.md)及看板。八篇/48 个可调整单元和其他 hold 不变；开篇另获准仅替换一次书名，单独核对改动与新 hash，G01/F01 不变。Beta 1/2/3 阅读产品规划保留，未因此实现或发布。

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

## 已完成的框架与当前窄范围例外

**Full-stack and AI Product Engineering — v1 Content Framework** 是上一轮已完成的定位与规划任务，已审并经 [PR #9](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/9) 合并，历史文件与检查见[交接](handoffs/writer/full-stack-ai-book-scope.md)。方向已确认，不代表每页研究、正文或发布通过；之后仍逐页“分析调研/细纲 review → 明确范围写正文 → 正文独立 review”。当前任务、负责人和状态只看[协作看板](coordination.md)，不从本页历史记录继续开工。

- 开篇仅按明确授权替换书名字符串，其他正文逐字不动，单独做精确替换复审；契约负责人据此更新当前 hash/review 指针，不篡改 W02 历史。G01 原字节保留，放在第一篇承接边界/状态，不把新增成功标准算作已审；[最小内容契约](content-contract.md)的章节 ID/slug 不改。
- 开篇仍介绍旧三部分结构；作为 v1 发布前，需要另行安排这段说明的编辑与复审，本轮书名替换不放行该改写。
- F01 仍只有已审分析，放在浏览器阅读单元；F01M 正文未写，V1–V4 实验未运行。更大范围须返回分析关口。
- 本次品牌同步、站点名称/元数据、Pages 路径迁移及必要校验是明确的窄例外，另有开篇一次书名替换；不恢复其他网站/UI/schema/E2E/部署或新正文/英文书稿。原未验收主题 checkpoint `4da2578048f8df113fed92d99e084f644a9a788e` 保留。
- 英文文档与开发历史升级已经 [PR #7](https://github.com/HAIXIN-ZHANG/beyond-the-frontend/pull/7) 合并；协作/接手流程已经 [PR #8](https://github.com/HAIXIN-ZHANG/beyond-the-frontend/pull/8) 合并。它们的成功不代替本轮 review/CI/merge；详细证据见[开发历史](development-history.md)。

本速览不预填本轮通过、合并或上线结果。新执行须有明确任务范围；必要工具和 QA 后发布的旧授权不解除当前 hold。
