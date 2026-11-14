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
