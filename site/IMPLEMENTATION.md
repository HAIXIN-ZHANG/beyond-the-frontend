# 网站实现与阶段计划

更新日期：2026-11-14（Australia/Perth）

负责人：Developer

本文保留 D01/D02 的历史方案；其中 JavaScript/JSX 和示意目录不再代表当前扩展名。CI01/TS01 已完成集成；当前 DS01 PandaCSS/主题基础待 review，实际代码与检查命令见 [运行说明](DEVELOPMENT.md)，交接见 `docs/handoffs/developer/DS01.md`。后续阶段以协调看板和实际任务为准，本提案不自动放行实施。

## 1. 本文的用途与决定边界

本文供 Writer、Developer 和主对话共同查看网站实现方案、依赖和阶段验收。它不是正文，不替代主对话维护的共同决定。

- 用户最新指令：先写 Markdown 方案，再按阶段实现；每阶段完成后提交 review，不连续推进后续阶段。
- 项目以写书为主，网站辅助阅读、检索和贡献；保持实现与维护简单。
- 用户熟悉 React、JavaScript、Next.js 和 npm 生态，实施方案围绕这些技术设计。
- `book/` 由 Writer 维护，是唯一正文来源；Developer 不代写章节，也不复制维护另一份正文。
- 用户随后确认项目名改为 **Beyond the Frontend**，仓库及本地目录改为 `beyond-the-frontend`；该要求覆盖 D01 的旧名称。
- 正式中文书名：**《前端往后看：能跑，然后呢？》**。
- 正式英文书名：**Beyond the Frontend: It Works. Now What?**。
- 网站和仓库维持公开方向，读者可提 issue、提交 PR；写入、合并和发布由授权维护者控制。
- D01 仅交付方案和交接；用户随后授权 D02 骨架，并补充网站界面中英双语、默认英文。各阶段仍不自动获得 commit、push 或发布授权。

依据：[项目 brief](../docs/project-brief.md)、[协作边界](../docs/collaboration.md)、[Developer 同步](../docs/developer-sync-prompt.md)。命名与内容方向由 Writer 和主对话决定。

## 2. 技术方案

| 部分 | 实施建议 | 理由与边界 |
| --- | --- | --- |
| 页面框架 | Next.js App Router + React | 使用用户熟悉的技术；章节在构建时生成 |
| 开发语言 | JavaScript / JSX；配置用 `.mjs` | 本项目不额外引入 TypeScript 学习与维护要求 |
| 包管理 | npm，提交 `package-lock.json` | 安装后锁定实际版本，CI 使用 `npm ci` |
| 正文 | 普通 Markdown；少量 frontmatter | 保持 GitHub 可读、方便 Writer 修改和未来导出 |
| 内容处理 | 在构建端解析 Markdown，提取目录和元数据 | 第二阶段内容接入前确定具体包，避免同时维护多套解析规则 |
| 阅读界面 | 精简 React 组件 + CSS | 优先排版、导航和移动端；不先搭完整 Design System |
| 搜索 | Pagefind 静态全文搜索 | 构建 HTML 后生成索引，在浏览器查询，无搜索后端 |
| 托管 | Next.js 静态导出 + GitHub Pages | 发布 HTML/CSS/JS，无常驻 Node.js 服务 |
| 检查与发布 | GitHub Actions | PR 检查和主分支部署分开授予权限 |

Next.js、React 和检查工具的具体版本在安装获准时重新核实，使用兼容的稳定版本并记录到锁文件；不把本次查询的版本直接视为永久基线。Node.js 选择届时受支持的 LTS，并在本地说明与 CI 中保持一致。

Nextra 仍是可选方案，**本计划不把它定为必需依赖**。若考虑引入，先证明它与普通 Markdown、`book/`、子路径部署和中文阅读需求兼容，再由主审确认；不同时接入多个文档框架。

第一版不增加登录、数据库、后台管理、CMS、AI 问答或向量数据库。未来 PDF/EPUB 作为单独需求，现阶段通过普通 Markdown 和可编辑图示源文件保留适配空间，不提前实现导出管线。

## 3. 内容到页面的流程

1. Writer 在 `book/` 维护正文、来源和章节资产。
2. 构建端读取经确认的章节清单及元数据，校验状态、路径、链接和重复标识。
3. Next.js 生成首页、目录、各章节的静态 HTML 和导航资源。
4. Pagefind 只索引获准公开的页面正文。
5. CI 检查通过后，部署工作流上传静态产物到 GitHub Pages。

不会在浏览器首次阅读时下载并解析全书 Markdown。网站、未来导出和检查工具读取同一份正文，不手工复制章节到 React 页面。

参考 HowToLiveBetter 的“一份正文、多种输出、issue 纠错”组织方式。其网站实际使用手写 HTML/JavaScript 在浏览器读取正文；本项目采用构建时生成章节页面。这里只借鉴维护思路，没有复制其正文、图示或网站代码。

## 4. 建议目录与所有权

以下是计划结构，**不表示这些文件已经创建，也不授权一次性创建所有内容**。

```text
beyond-the-frontend/
├── book/                           # Writer：正文及章节资产
├── site/                           # Developer：网站与实现说明
│   ├── IMPLEMENTATION.md            # 本方案
│   ├── app/
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   ├── not-found.jsx
│   │   └── read/
│   │       ├── page.jsx             # 章节目录
│   │       └── [...slug]/page.jsx   # 从 book/ 生成章节
│   ├── components/                 # 导航、目录、搜索等
│   ├── lib/                        # 内容处理、链接与路径处理
│   ├── config/                     # 网站名称、导航等配置
│   ├── styles/                     # 阅读与响应式样式
│   ├── public/                     # 站点图标等资产，不复制正文源文件
│   └── next.config.mjs
├── scripts/                        # Developer：按阶段分配的构建检查
├── tests/                          # Developer：必要的行为与回归测试
├── .github/workflows/               # Developer：后续检查与发布流程
├── docs/
│   ├── handoffs/developer/          # Developer：D01、D02 等交接
│   ├── handoffs/writer/             # Writer：内容交接
│   └── reviews/                    # 主审：review 结果
├── package.json                    # 后续阶段明确分配给 Developer
├── package-lock.json
├── .gitignore
└── README.md                        # 主对话维护；Developer 提供运行说明输入
```

采用根目录一份 npm 清单，Next.js 的应用目录为 `site/`，避免为一个阅读站创建 monorepo 工具链。产物与缓存不提交；例如 `site/.next/`、`site/out/`、`node_modules/` 和本地验证文件。

`AGENTS.md`、共同 brief、协调看板、正式内容契约、根 README、许可证及 review 文件由主对话维护。安装和实现各阶段时只触碰已分配文件，不替其他角色修改决定。

## 5. 需主对话与 Writer 确认的内容接口

本节是**提案**，不是已接受的内容 schema。D02 骨架可以不依赖正文格式；D03 接入真实章节前必须对齐以下事项。

| 问题 | Developer 建议 | 需要确认的影响 |
| --- | --- | --- |
| 章节身份与 URL | 稳定 slug；阅读顺序单独配置 | 插入章节不因重编号破坏链接；标题变化不自动改 URL |
| 最小元数据 | `title`、`slug`、`status`；其他字段按需增加 | 不让 Writer 为每章填写大量无用字段；明确 H1 的唯一来源 |
| 状态 | 区分草稿、待审、获准公开；具体枚举由主对话定 | 写完不等于发布，缺失或未知状态不能意外上线 |
| 阅读顺序 | 一份明确的导航来源 | 首页、侧栏、上下篇共用；不要分别维护三份排序 |
| 章节链接 | 支持章节间标准 Markdown 相对链接 | 构建时解析成网站 URL，校验目标及锚点 |
| 图片与图示 | 源文件归 Writer；网站处理派生产物 | 相对路径解析、alt、图注及图示文字说明需约定 |
| 代码块 | fenced code blocks + 可选语言 | 先支持高亮和横向滚动；不默认执行示例 |
| 深入内容 | 优先使用普通 Markdown 可表达的结构 | 折叠语法若需 HTML，限定允许元素和清理规则 |
| 特殊图示 | 先确认静态 SVG/图片是否足够，再评估 Mermaid | Mermaid 并非本轮已安装能力；源文件与展示方式分别确认 |
| 公开清单 | 只构建获准公开的内容，预览单独运行 | 草稿不得出现在 HTML、搜索索引、浏览器数据或可下载资产中 |

Markdown 默认不接受可执行 MDX、任意脚本或不受控原始 HTML。解析与清理策略在 D03 落地；特别处理危险 URL 协议、目录穿越和不可信 SVG。来自 PR 的内容和构建配置仍需 review，Markdown 本身不是完整安全边界。

## 6. 阶段安排与验收

各阶段只记录实际执行结果。完成交接后保持文件稳定，等待用户通知的 review；发现需跨角色决定的依赖，先向主对话交接，不自行改写契约。

### D01：实现方案文档（已交接，未有 review 结论）

- 输出：本文，以及 `docs/handoffs/developer/D01.md`。
- 验收：已确认事项与提案分开；各阶段有输入、文件范围和完成标准；不含已实现或已通过测试的虚假陈述。
- 此阶段没有创建应用代码、安装依赖、启用 CI 或部署；后续实现以 D02 交接为准。

### D02：工程骨架与静态构建

- 输入：D01 review 结果或用户直接放行，以及本阶段必要依赖安装的授权；本次为用户直接放行，未虚构 D01 已通过。
- 文件范围：`site/app/` 的首页、目录空状态、404 和布局，网站配置和基础样式；明确分配的根 npm 清单、锁文件、忽略规则、运行版本文件及必要检查脚本。
- 工作：建立 Next.js + React + JavaScript/JSX 应用；设置静态导出；提供本地运行、检查和构建命令；书名集中配置。
- 页面只呈现必要导航和真实空状态，不虚构已发表章节；不接入未确认的 Writer 文件。
- 验收：干净安装后可运行和构建；英文默认且可切换中文；根路径与 `/beyond-the-frontend/` 子路径下首页、目录、404、资源和链接正确；构建无运行时服务依赖。
- 交接：记录安装版本、实际命令与结果、产物位置；浏览器可用时附初步页面证据，不把未执行的视觉检查记为通过。

### D03：接入真实章节与阅读体验

- 输入：D02 review 通过、正式内容契约、Writer 交付的样章与公开/预览状态决定。
- 文件范围：`site/` 的内容读取、章节路由、导航、阅读组件和样式，分配的内容检查与相关测试；只读取 `book/`。
- 工作：构建时读取正文；生成章节目录、页内目录、上下篇；支持表格、代码、引用、图片及经确认的折叠内容；处理手机阅读。
- 验收：一篇真实样章完整呈现；目录与标题一致；章节刷新与直接访问有效；相对链接、资源和锚点可用；非法路径、重复 slug、无效状态、危险内容被明确拒绝或按约定处理。
- 状态验收：公开构建中没有未获准公开的正文及其关联索引/数据；预览方式由主对话确认后实现。
- 浏览器验收：计划检查 360、768、1440 CSS px 宽度；键盘导航、跳过导航、焦点、标题层级、图示说明、长代码/表格溢出和控制台错误。记录实际测试结果，不宣称已经达到完整 WCAG 合规。

### D04：搜索、图示与阅读回归

- 输入：D03 review 通过，足以验证搜索的真实内容，Writer 对图示语义与格式的交接。
- 文件范围：搜索组件、索引配置、经确认的图示支持，以及必要回归检查。
- 工作：Pagefind 构建索引；以中文词、英文术语和混合输入测试；验证图示在移动端及不同显示设置下可读。
- 验收：搜索结果能定位章节/小节；无结果与加载失败可理解；键盘可操作；结果链接在 Pages 子路径有效；不索引导航噪声、草稿或内部协作资料。
- 全文搜索不等同于语义问答，不承诺任意自然语言问题都能找到正确答案。由 Writer/主审提供代表性查询与预期结果，实际记录未命中和排序问题。
- 图示按需要提供缩放或静态替代；是否增加深色主题由 review 决定，不先做无实际需求的交互组件。

### D05：CI/CD、GitHub 安全与发布验收

- 输入：D04 review 通过、必要检查命令稳定、发布授权、GitHub 管理页面访问、主对话确认公开内容和许可。
- 文件范围：分配的 `.github/workflows/`、issue 模板与配置、构建验证脚本和网站路径配置；GitHub 设置另列变更与结果，不用仓库文件假装远端设置已生效。
- PR：`npm ci` 后运行代码/内容检查、必要测试、静态构建和产物验证；外部 PR 不获得发布或密钥权限。
- 发布：只对受信任的 `main` 提交运行；部署必须依赖成功检查，并构建该提交对应的产物；使用官方 Pages artifact/deploy 流程。
- 权限：CI 默认 `contents: read`；仅部署 job 授予所需的 `pages: write` 与 `id-token: write`；使用 GitHub 托管 runner，不新增长期个人 token。
- 外部贡献：保留 issue/PR 入口；不根据 issue 内容执行命令；不使用带写权限的流程 checkout 并执行陌生 PR。
- GitHub 设置验收：确认仓库公开、实际协作者/应用/deploy key 的权限、`main` Ruleset、外部 PR 工作流审批、默认 token 权限和 Pages 发布来源。避免要求单人维护者取得自己无法提供的第二人审批。
- 外链通断检查与每次发布分开，网络波动单独报告；真实站内错误阻止发布。
- 首次部署后验证首页、章节直接访问和刷新、404、图片、代码样式及搜索；保存实际 URL、提交标识、Actions 结果与页面证据。
- 未获得发布授权时只交付配置和本地验证结果，不能写“已上线”。

## 7. GitHub Pages 与安全实施细节

- 默认项目站点预期路径为 `https://haixin-zhang.github.io/beyond-the-frontend/`；**这是计划地址，尚未启用或验证上线**。
- Next.js 配置静态导出和适合静态目录服务的 URL 形式。统一处理 base path、资源引用和搜索索引地址，避免在各组件手工拼接不同前缀。
- 静态站不使用 Server Actions、依赖请求状态的 API、服务端登录、ISR 或默认运行时图片优化服务。图片使用静态资产或经确认的构建期处理。
- 公开仓库允许阅读、下载和 fork，不代表允许在原仓库创建分支、push 或 merge；真正的控制点是写权限、应用凭据和分支规则。
- 关闭 auto-merge 不是完整权限保护；Ruleset 也不能替代最小权限。两者都需要实际核实。
- 密钥和个人资料不得进入正文、构建产物、日志或 Git 历史；`.gitignore` 不能移除已经提交的敏感文件。静态页面中的数据都应视为公开。
- 后续 npm 依赖控制数量、提交锁文件；第三方 Actions 固定到审核过的完整 commit SHA，更新时重新 review。
- 不承诺“绝对安全”。只报告已检查的具体设置、测试和仍未覆盖的风险。

当前已确认远端仓库公开、Issues 开启、auto-merge 关闭、Wiki 关闭、Pages 未启用；分支与 Rulesets API 当前返回空列表。协作者、Actions 管理权限、应用和 deploy key 尚未完整核实，不能标记安全验收通过。右侧 Browser 先前无法建立工具连接；继续此项时优先重试右侧 Browser，不切换用户的 Safari/Chrome。

## 8. 交接与 review

- 每阶段一个摘要，使用 [统一模板](../docs/handoffs/TEMPLATE.md)，存放于 `docs/handoffs/developer/Dxx.md`。
- 摘要包含任务范围、实际文件、命令及结果、实际页面/截图、未检查项目、限制和跨角色依赖。
- 主审在 `docs/reviews/Dxx.md` 记录结论。Developer 按用户转交的意见或获得授权的主审任务修订，在原摘要补记变化。
- 提交 review 后冻结该阶段文件；用户未明确放行前，不进入依赖该阶段的下一阶段。
- 内容格式与图示语义问题定位到 Writer 文件，交主对话协调；不直接修改正文。

## 9. 实施时查阅的原始资料

- [Next.js 手动安装](https://nextjs.org/docs/app/getting-started/installation)：基础依赖与项目入口。
- [Next.js 静态导出](https://nextjs.org/docs/app/guides/static-exports)：静态输出和不支持的服务端功能。
- [GitHub Pages 自定义工作流](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)：构建、artifact 与部署 job。
- [GitHub Actions：安全使用 pull_request_target](https://docs.github.com/en/actions/reference/security/securely-using-pull_request_target)：不可信 PR 与有权限工作流的边界。
- [Pagefind](https://pagefind.app/)：进入搜索阶段时核对索引、中文检索及部署配置。
- [HowToLiveBetter 网页源码](https://github.com/eternity4719/HowToLiveBetter/blob/main/index.html)与[内容读取脚本](https://github.com/eternity4719/HowToLiveBetter/blob/main/tools/lib/book.mjs)：已查阅的内容组织参考，不作为本项目代码依赖。

产品行为和依赖版本可能变化，各实施阶段需按实际选定版本重新核实相关原始文档。上述链接不代表本项目已安装或实现对应能力。
