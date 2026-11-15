# D02 工程骨架与本地运行

本阶段只实现首页、章节目录空状态、404 与静态导出。正文、搜索、CI/CD 和远端安全设置不在 D02 范围。

项目名为 **Beyond the Frontend**，项目链接集中在 `site/config/site.mjs`，双语界面与书名集中在 `site/config/i18n.mjs`。目录和 GitHub 仓库已由用户改为 `beyond-the-frontend`，本地 origin 已核实并更新。主对话共同文档中的旧名称需要协调更新；D02 不改写其文件或 Writer 正文。

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

静态产物位于 `site/out/`。`check` 运行 ESLint 和部署路径行为测试；`verify:export` 检查实际生成的页面及其链接/资源，不以开发服务器可用代替产物检查。

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
- ESLint 10 使用官方 JavaScript、Next.js 和 React Hooks 规则；不依赖含 TypeScript 解析工具的整套默认文档配置。没有关闭审计或使用强制依赖覆盖。
- 未配置 API、服务端写入、密钥、外部字体或第三方统计。
- 没有读取/发布 `book/`，目录的空状态不等于 Writer 没有草稿。
- 图标为本阶段原创简易 SVG；不复用第三方网站代码、素材或品牌。
- 自动化部署和 GitHub 权限检查留在 D05，当前没有启用发布。
- 不提交缓存、构建输出、本地验证产物、环境变量文件及 `node_modules/`。

## 验收与交接

实际结果见 `docs/handoffs/developer/D02.md`。本阶段完成后等待 review，再按明确的正文契约进入 D03。

## CI01：自动检查

`.github/workflows/ci.yml` 在 PR 和推送到 `main` 时运行，不负责部署。代码审查仍由主对话进行；工作流不接 GitHub AI review action。

三个检查名称保持稳定，方便主对话在云端实际通过后配置 required checks：

| Check | 命令与范围 |
| --- | --- |
| `Quality` | `npm ci --no-fund` 后运行 `npm run check`，当前含 ESLint 和 4 项测试 |
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
