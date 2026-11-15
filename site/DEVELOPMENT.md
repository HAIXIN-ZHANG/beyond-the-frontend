# 网站工程与本地运行

D02 工程骨架包含首页、章节目录空状态、404 与静态导出。CI01 已单独引入自动检查；TS01 在这一基础上迁移 strict TypeScript，当前交付待 review。正文与搜索尚未接入，网站尚未部署。

项目名为 **Beyond the Frontend**，项目链接集中在 `site/config/site.ts`，双语界面与书名集中在 `site/config/i18n.ts`。目录和 GitHub 仓库为 `beyond-the-frontend`。本轮不修改 Writer 正文。

## 双语界面

- 默认英文：`/`、`/read/`；中文：`/zh/`、`/zh/read/`。
- 两种语言使用独立 root layout，输出正确的 HTML `lang`、标题和界面文本；语言切换保留首页/目录位置。跨语言 root layout 导航会完整加载页面。
- 不做浏览器语言自动重定向或持久化偏好；打开根路径始终默认英文。
- 不复制或自动翻译 Writer 的正文。D03 需由主对话确认章节语言、对应 slug 和缺少翻译时的展示规则。
- GitHub Pages 只有一份站点级 `404.html`，默认英文，同时提供中文说明和中文首页入口。中文分段的 `not-found` 用于后续章节调用；不承诺静态托管能按失效 URL 动态选择 404 语言。
- Next.js 16.4.6 在多 root layout 下需要 `experimental.globalNotFound` 来输出定制的全局 404。此实验配置已纳入两种路径的产物检查；升级 Next.js 时必须重验，review 可决定是否改用其他路由方案。

## 环境与命令

在仓库根目录运行；使用 Node.js 24 LTS、npm 11。依赖版本固定在 `package.json` 与 `package-lock.json`，已有锁文件时使用 `npm ci`。

```sh
npm ci
npm run dev
```

开发站点默认 `http://localhost:3000/`，端口占用时以命令实际打印为准。未启动后台服务或连接数据库。

```sh
npm run check
npm run build
npm run verify:export
```

静态产物位于 `site/out/`。`check` 依次运行 ESLint、TypeScript 类型检查和部署路径/语言切换行为测试；`verify:export` 检查实际生成的页面及其链接/资源，不以开发服务器可用代替产物检查。

## GitHub Pages 子路径

```sh
npm run build:pages
NEXT_PUBLIC_BASE_PATH=/beyond-the-frontend npm run verify:export
```

`NEXT_PUBLIC_BASE_PATH` 是构建期配置，默认根路径。通过校验的前缀交给 Next.js，内部 `Link` 不再手工加一遍。切换路径需要重新构建；检验命令使用的环境变量必须与构建一致。

Pages 产物虽然包含 URL 前缀，`site/out/` 内部不再额外嵌套 `beyond-the-frontend/`。本地用静态服务器预览时，需要将这个输出目录挂载到 `/beyond-the-frontend/`，并将未知路由映射到 `404.html`、返回 404 状态。生产端行为需在 D05 用 GitHub Pages 实测。不要直接把根静态目录打开后将错误归因于页面不存在。

不使用 `next start` 运行静态导出，也不把 `next dev` 当成 GitHub Pages 的行为。运行 `npm run build` 可恢复根路径产物。

## 安全与范围

- 本地 Next.js 遥测在 npm 开发和构建命令内关闭，没有修改机器的全局设置。
- 关闭 Next.js 自动生成 agent 规则文件，保留项目现有协作约定。
- ESLint 10 使用官方 JavaScript、typescript-eslint、Next.js 和 React Hooks 规则；应用 `.ts/.tsx` 均纳入检查。没有关闭审计或使用强制依赖覆盖。
- 未配置 API、服务端写入、密钥、外部字体或第三方统计。
- 没有读取/发布 `book/`，目录的空状态不等于 Writer 没有草稿。
- 图标为本阶段原创简易 SVG；不复用第三方网站代码、素材或品牌。
- 自动化部署和 GitHub 权限检查留在 D05，当前没有启用发布。
- 不提交缓存、构建输出、本地验证产物、环境变量文件及 `node_modules/`。

## 验收与交接

原始骨架交接见 `docs/handoffs/developer/D02.md`；后续各阶段使用独立交接与 review。当前 TS01 的实际结果和未决项见 `docs/handoffs/developer/TS01.md`，通过 review 前不推进 DS01；接入正文仍需明确的内容契约。

## CI01：自动检查

`.github/workflows/ci.yml` 在 PR 和推送到 `main` 时运行，不负责部署。代码审查仍由主对话进行；工作流不接 GitHub AI review action。

三个检查名称保持稳定，方便主对话在云端实际通过后配置 required checks：

| Check | 命令与范围 |
| --- | --- |
| `Quality` | `npm ci --no-fund` 后运行 `npm run check`，当前含 ESLint、strict 类型检查和 4 项测试 |
| `Static export (root)` | 显式设 `NEXT_PUBLIC_BASE_PATH=''`，运行 `npm run build` 与 `npm run verify:export` |
| `Static export (pages)` | 设 `NEXT_PUBLIC_BASE_PATH=/beyond-the-frontend`，运行 `npm run build:pages` 与 `npm run verify:export` |

Quality 通过后，两种 export 在独立 runner 中执行；一项失败不会提前取消另一项。构建与验证共用同一 job 环境；根路径 job 的显式空值会覆盖 workflow/repository 等继承的前缀值。本地复现时也要明确清空根前缀：

```sh
NEXT_PUBLIC_BASE_PATH='' npm run check
NEXT_PUBLIC_BASE_PATH='' npm run build
NEXT_PUBLIC_BASE_PATH='' npm run verify:export
NEXT_PUBLIC_BASE_PATH=/beyond-the-frontend npm run build:pages
NEXT_PUBLIC_BASE_PATH=/beyond-the-frontend npm run verify:export
```

使用 `ubuntu-24.04` GitHub 托管 runner，项目 Node 主版本来自 `.nvmrc`，具体 Node/npm 版本输出到每个 job 日志。Node 24 的具体补丁随官方发行更新；不是冻结整台 runner 镜像。`npm ci` 使用项目锁文件，不在 CI 升级依赖。

官方 Actions 固定至已核实的完整 commit SHA：

- [actions/checkout v7.0.1](https://github.com/actions/checkout/releases/tag/v7.0.1)：`3d3c42e5aac5ba805825da76410c181273ba90b1`。
- [actions/setup-node v7.1.0](https://github.com/actions/setup-node/releases/tag/v7.1.0)：`949feb2413d6458794dcd2491c4babbbce0c15c1`。

2026-11-15 已通过 GitHub API 读取官方 release tag 与 commit 对应关系，并读取相应 tag 的 README/action.yml：二者使用 Node 24 action runtime，要求 Actions Runner ≥2.327.1。这里使用 GitHub 托管 runner，不为此配置或升级本机/自托管 runner。

工作流只有 `contents: read`，checkout 设置 `persist-credentials: false`；关闭自动包缓存，不配置 registry 凭据、私有 secret、发布权限或 artifact 上传。使用 `pull_request` 而不是 `pull_request_target`，不将 issue/PR 文本拼入 shell。新的 PR 提交会取消同一 PR 的旧运行。

本地命令通过不表示 Linux runner 或云端 Actions 已通过，也不表示 required checks 已配置。CI01 的修订、实际验证和云端状态见 `docs/handoffs/developer/CI01.md`；主对话 review 后负责 PR、云端检查和合并，Developer 不通过本阶段修改分支保护或发布网站。

## TS01：strict TypeScript

应用的 15 个页面/布局/组件使用 `.tsx`，3 个 `site/config/` 模块使用 `.ts`。`site/tsconfig.json` 开启 `strict`、`noEmit`、`isolatedModules` 和 `verbatimModuleSyntax`，覆盖全部应用源码及 Next.js 生成的路由类型。`Locale` 限定 `en | zh`，两套界面消息通过 `satisfies Record<Locale, Messages>` 检查键与值的结构；组件 props、`ReactNode` 和 `Metadata` 按实际用途标注类型。没有引入正文 schema 或改写页面结构。

```sh
npm run typecheck
npm run check
```

`typecheck` 先执行 `next typegen site`，再执行 `tsc --project site/tsconfig.json --noEmit`，因此首次安装后无需先 build，也不依赖已存在的 `.next` 类型文件。`check` 包含此命令，CI 的 `Quality` 会实际执行；三个 required job 名称和工作流权限不变。

开发依赖固定为 TypeScript 6.0.3、typescript-eslint 8.72.2、`@types/react`/`@types/react-dom` 19.3.0、`@types/node` 24.19.2。2026-11-15 已查询官方 npm 元数据确认版本与 peer/engine 范围：[typescript-eslint 支持说明](https://typescript-eslint.io/users/dependency-versions/)目前支持 ESLint 10、Node 24 和 TypeScript `>=4.8.4 <6.1.0`。本次选择兼容的 TS 6.0.3，未直接采用 TS latest 主版本，也未升级现有 Next.js/React/ESLint。

保留的 JavaScript 边界是 `site/next.config.mjs`、根 ESLint 配置、`scripts/verify-export.mjs` 和两份 Node 测试；它们接受 ESLint 和真实运行验证，不宣称已接受 TypeScript 静态检查。Node 24 的[原生类型擦除](https://nodejs.org/docs/latest-v24.x/api/typescript.html)支持直接导入配置 `.ts`；`erasableSyntaxOnly` 约束这些源码不依赖 enum 等转换语法，不添加运行器或别名解析。应用检查使用 bundler resolution 和显式扩展名；保留工具通过相对 `.ts` 路径导入。Node 自身不做类型检查，类型正确性由独立 `tsc` 保证。

`skipLibCheck: false` 同时检查依赖声明文件，不保留不必要的跳过；应用 `.ts/.tsx` 全部包含在检查范围。`site/next-env.d.ts` 由 Next.js 生成，并按[官方 TypeScript 文档](https://nextjs.org/docs/app/api-reference/config/typescript#next-envdts)忽略；`.next/`、`out/` 和 `*.tsbuildinfo` 同样不提交。未添加 `any` 或 TypeScript 抑制指令，也未关闭构建类型检查。

实际本地结果：`npm ci` 成功；清除生成类型与编译缓存后，`check` 从零生成路由类型并通过（lint、strict typecheck、4 项测试）；root/Pages build 与 export 验证均通过（各 5 页、73 个本地引用）。额外核对全部 18 个应用模块都在 compiler 输入中；临时负向探针确认错误 locale、错误组件 prop 和隐式 any 被拒绝，探针随后删除。逐模块去除类型、统一 import 扩展名后，运行时代码与 JSX 和基线一致；CSS 没有修改。本轮未执行真实 Browser QA，云端结果由主对话 PR 验证。

依赖审计的未决项：完整 `npm audit` 报告 7 条中危依赖记录，均来自 typescript-eslint → typescript-estree → minimatch 10.2.6 的同一[公告 GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249)，不是 7 个独立漏洞。公告修复版为 minimatch 11.0.1，超出上游声明的 `^10.2.2`；未强行 override 或降级到不兼容工具。当前未启用 projectService/allowDefaultProject，已安装代码的该 minimatch 调用未设置公告要求的 `optimizationLevel >= 2`；这仅说明当前调用条件，不能当作依赖已修复。`npm audit --omit=dev` 为 0 项。该告警需主审明确评估，不能将功能检查通过表述为审计无问题。
