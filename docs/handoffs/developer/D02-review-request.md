# D02 代码 Review 请求

状态：已发给主审并收到反馈；结论见 `docs/reviews/D02.md`。本文件保留为原始 review prompt，不是审查结论。

请在 `/Users/haixin/Desktop/code/beyond-the-frontend` 审查 D02 工程骨架。用户明确要求 Developer 发起本次 review，主审反馈后由 Developer 修复、验证，再只提交和推送代码范围的交付。Writer 的内容会单独 review。

## 范围

- 先读 `docs/handoffs/developer/D02.md`、`site/DEVELOPMENT.md`，再检查实际代码，不以交接摘要代替审查。
- 审查 `site/` 的应用、配置与样式，根 `package.json`、锁文件、`.nvmrc`、`eslint.config.mjs`、`.gitignore`，以及 `scripts/verify-export.mjs` 和 `tests/`。`site/IMPLEMENTATION.md` 仅作为实施背景。
- **排除 `book/` 全部内容、Writer 规划与交接、共同内容研究。不要审查、修改或提交 Writer 文件。** 不因 Writer 同时工作而要求清理其未提交改动。
- 本次仅审查 D02，不扩展成正文接入、搜索、CI/CD、部署或仓库全面审计。

## 重点

1. Next.js 静态导出、根路径和 `/beyond-the-frontend/` 部署是否正确；英中文首页和目录能否直接访问、刷新，默认英文。
2. 语言切换是否保留当前页面；HTML `lang`、标题、可访问名称和 404 的语言入口是否合理。Pages 共用一份 404，不承诺按失效 URL 动态选语言。
3. 多 root layout 与 `experimental.globalNotFound` 是否可接受，有没有需要现在修正的稳定性风险。不要只因存在实验标志就推断故障，结合实际构建和版本文档判断。
4. 检查与锁文件是否可复现，依赖与本地预览的权限是否最小，输出是否可能暴露 `.local/` 或 repo 内部文件。当前没有读取正文、连接后端或发布网站。
5. 测试和产物验证有没有遗漏关键行为或掩盖问题。可运行 `npm run check`、两种路径构建和对应 `verify:export`；本地依赖已安装，不擅自改依赖。
6. 尽可能补充右侧 Browser 的桌面/手机、键盘、语言切换、hydration 和控制台检查。Browser 不可用时明确标未验收，不切换用户的 Safari/Chrome，不伪造截图或通过结果。

## 反馈与交接

- 只在 `docs/reviews/D02.md` 写审查结果，不直接改实现；注明“通过 / 需修改 / 信息不足”，问题列明优先级、文件/行号、触发方式、影响与建议。
- 明确哪些必须在本次提交前修复，哪些是后续阶段建议；没有问题就明确说明，并列验证和剩余限制。
- 完成后反馈给本 Developer 对话（`01a1d8ce-200b-7d32-9b6b-8a1e9a961346`）。用户已在 Developer 对话要求“review 完后生成反馈返回给你”；若消息工具授权受限，写好上述文件并在主对话结束，Developer 会读取。
- 审查期间 Developer 保持实现稳定。需要进一步复审时，由 Developer 带修复与验证结果请求；不代为 commit、push、merge 或发布。

用户最后要求的提交仅包含本阶段代码及 Developer 文档，将使用逐文件清单暂存；禁止 `git add .`，不要纳入 Writer 或主对话的其他未提交材料。
