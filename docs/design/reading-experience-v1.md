# 阅读体验设计

日期：2026-11-14。当前修订：v3 / UI03。负责人：主对话。状态：完成三页整理、英文注释、semantic layout 与设计复查，待用户视觉审核。沿用原文件和本文路径；不代表网站实现或完整交互验收通过。最新结果见 [UI03 review](../reviews/UI03.md)，历史检查保留在 [UI02](../reviews/UI02.md)。

最新用户要求：**Figma 界面、页面标题、组件说明和原生 annotations 以英文为主；中文只在确有必要时补充。** 当前画布已全部使用英文。保留 Day/Night；书稿的中英文计划不变。

## 设计交付

- 团队：HAIXIN's Starter team。
- 项目：[Beyond the Frontend Folder](https://www.figma.com/files/team/1563112246153281261/folder/690927640)。用户已明确授权创建 Folder 并将本次设计文件移入，桌面 Figma 中已核实文件位于该项目内。
- 文件：[Beyond the Frontend · Reading Experience v1](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=4-11)。
- 页面仅三页：`01 · Tokens`（0:1）、`02 · Components`（22:135）、`03 · Page Designs`（2:2）。页面设计按 Day、Responsive、Interactions、Night、Night interactions 从上向下分区，主题和响应式不再各占一页。采用原生文字、Auto Layout、组件实例和矢量。

| 设计 | Figma 节点 | 用途 |
| --- | --- | --- |
| Tokens 参考 | [40:12](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=40-12) | 明暗角色对照、空间/尺寸/圆角语义、字体与 recipe 示例；替代旧 2:65 |
| 组件库 | [22:135](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=22-135) | 13 组组件展开、variants 排开、英文 slots/recipe/行为说明 |
| 页面设计总览 | [2:2](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=2-2) | 阅读体验、响应式、交互、Day/Night 的同页分区 |
| 桌面首页 | [4:11](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=4-11) | 品牌、阅读入口、三部分路径与案例入口 |
| 桌面章节页 | [4:115](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=4-115) | 全书侧栏、正文、本章导航、图示和提问卡 |
| 手机首页 | [4:220](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=4-220) | 单列阅读路径与清楚的开始入口 |
| 手机英文章节 | [4:256](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=4-256) | 17px 正文、目录入口、纵向图示与主题选择 |
| 桌面搜索 | [7:53](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=7-53) | 查询、类别、结果摘要与关闭入口 |
| 手机章节目录 | [7:87](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=7-87) | 英文分组导航与当前章节 |
| AI 提问预览 | [7:125](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=7-125) | 显示问题、假设和出处，再由读者复制 |
| 必要状态 | [7:142](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=7-142) | 搜索无结果、缺少翻译、复制反馈 |
| 暗色首页 | [24:71](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=24-71) | 与浅色相同结构、同一套语义变量 |
| 暗色桌面章节 | [24:177](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=24-177) | 深色阅读、图示、提问卡与选中主题 |
| 暗色手机章节 | [24:330](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=24-330) | 手机夜间阅读样本 |
| 1024px 中屏 | [25:71](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=25-71) | 保留较窄全书目录、收起右栏 |
| 768px 平板 | [25:183](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=25-183) | 两侧目录按需打开、正文居中 |
| 320px 窄屏 | [25:311](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=25-311) | 窄屏 Header variant，保留操作区域 |
| 代码块与比较表 | [22:80](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=22-80) | 技术书必需的阅读模式样例 |
| 响应式与主题说明 | [22:119](https://www.figma.com/design/3GYIfJz8xSPGx3AE3RRkKi?node-id=22-119) | 已移入页面设计页，英文交接备注；关键组件另有英文 annotations |

章名、搜索结果、英文正文与代码用于验证布局，不是已批准的公开目录或英文书稿。手机稿已由中文样本改为英文设计文案；本轮不改动 `book/`。实际公开状态仍由内容契约控制。

## 视觉与响应式规则

采用偏 iOS 的轻透顶部栏、胶囊形主题选择、克制圆角与留白。白天使用浅色阅读画布与深绿强调；夜间使用深炭色与柔和浅绿。正文保持实色，材质效果集中在导航层。它是 Web 阅读界面，不声称实现原生 UIKit 或完整 Liquid Glass。

- 桌面样本 1440px，左侧全书导航 248px；正文最大宽度 704px，右侧放本章导航。
- 手机样本 390px，正文两侧 20px；导航按需打开，图示重排为纵向，章节工具位于顶部。
- 响应式约定：≥1200px 显示左右导航；900–1199px 保留 224px 全书目录、隐藏右栏；768–899px 隐藏固定侧栏，正文左右 32px；<768px 按需目录与单列正文；≤360px 使用 Narrow Header、正文左右 16px。现有样本为 1440/1024/768/390/320px。实现还需验证区间中间宽度与文字放大。
- 英文 UI/正文使用 Inter；中文长文使用 Noto Sans SC；代码使用 JetBrains Mono。Figma 列出 SF Pro 可用，但实际节点报告缺失字体，故首版改用可正常渲染的字体。实现时确认字体交付与系统回退，不分发 SF Pro。
- 桌面正文 18/30px，手机英文 17/29px；手机主标题 32/40px，小节标题 24/32px。UI 文案与正文分别定义 text styles，不将所有文字压成同一个字号。中文 text styles 保留作后续书稿适配。
- 使用 4px 间距节奏与 6/12/20px 圆角。主题的两个选择区域各为 44×44px；主按钮、IconButton 和目录入口均明确操作范围。
- 行内链接加下划线；导航通过位置、文字与底色表达当前状态。焦点有可见外环；动效遵循 reduced motion。

## PandaCSS 与组件层次

**用户已确定 PandaCSS 作为样式基础。** 这是新的设计决定，当前代码仍使用原有 CSS，本轮未迁移或安装依赖。

Figma 当前共 111 个项目变量：24 个原始颜色、22 个语义颜色、29 个空间/圆角/尺寸/线宽原始量、36 个 semantic layout aliases。语义颜色提供 Light/Dark 模式，语义尺寸引用原始量；另有 14 个 text styles 和 2 个 effect styles。新增 `fg.link`、`focus.ring`、`bg.selected`、`bg.hover`、`bg.disabled`、`fg.disabled`、`border.focus`，保留既有材质与阴影角色。

间距标注按用途命名，例如 `control.paddingInline`、`card.padding`、`prose.blockGap`、`layout.gutterMobile`、`table.cellBlock`；圆角用 `shape.control` / `shape.card`，尺寸用 `size.actionMin` / `size.proseMax`。这些角色已绑定到对应组件或页面属性，不只是文档中的文字。组件 recipe/slot recipe 说明属性、slots 和状态；像素值只在 Tokens 页用于展示解析结果。零间距、图标几何与少量结构尺寸仍可保持固定值，不为每个节点增加一套同义 token。

| 层次 | 项目中的职责 | PandaCSS / Figma 对应 |
| --- | --- | --- |
| 1. 基础与语义 | 颜色角色、空间、字阶、圆角 | `tokens`、`semanticTokens`、text styles；如 `bg.canvas`、`fg.muted`、`accent.default` |
| 2. 基础组件 | 按钮、链接、搜索入口、标签 | recipes；按钮 Default/Hover/Focus/Disabled，导航 Default/Selected |
| 3. 阅读模式 | 目录项、阅读路径卡、提问卡、搜索结果 | 多 slot 模式可用 slot recipes；重复结构保持共同 API |
| 4. 页面组合 | 首页、章节页、手机目录与搜索视图 | 布局与内容组合，不复制维护另一套基础样式 |

这四层是本项目的维护方式，不作为所有 Design System 的通用标准。当前最小组件集合为：Button、IconButton、ThemeControl、SiteHeader、ChapterToolbar、Chapter navigation item、Badge、Search trigger、Reading path card、Callout、AIQuestionCard、CodeBlock、ComparisonTable。Button/IconButton 有 Default/Hover/Focus/Disabled，目录项有 Default/Selected/Hover/Focus；Header 有 Desktop/Compact/Narrow，主题控件有 Light/Dark。

结构图属于具体教学内容，继续保持可编辑图层和文字说明；正文标题、段落、列表、引用使用语义 HTML。TOC 项、搜索结果与反馈模式还可在实现中按实际复用收敛，不为了组件数而拆分每个 Frame。代码块与表格已提供组件样例，尚未接到网站正文。

变量已设置明确 scopes 和 WEB code syntax。CSS 变量名是给 PandaCSS 落地的命名目标，尚无对应配置文件；Developer 确认生成规则后对齐，不能据此声称已经 Code Connect 同步。

## 库的建议

| 工具 | 建议用法 | 取舍与边界 |
| --- | --- | --- |
| [PandaCSS](https://panda-css.com/docs) | 基础 tokens、semantic tokens、recipes 和响应式条件 | 构建时生成样式；保持可静态提取的样式写法与明确的 variants |
| [Park UI](https://park-ui.com/docs/introduction) | 按需引入可修改源码的组件与 recipes | 已基于 PandaCSS 和 Ark UI；便利的同时，本地组件源码需要我们维护，不整套导入 |
| [Ark UI](https://ark-ui.com/docs/overview/about) | 通过 Park UI 使用 Dialog、Drawer、Tooltip 等交互基础；确有缺口才直接组合 | 提供 headless 行为，视觉由本项目定义；采用它仍需验证实际焦点、键盘与读屏行为 |
| [Lucide React](https://lucide.dev/guide/react) | 搜索、关闭、菜单、复制等少量图标 | 命名导入需要的图标；纯图标按钮仍要有可访问名称 |
| [Pagefind](https://pagefind.app/docs/) | 后续静态全文搜索候选，接自定义搜索 UI | 构建后索引公开 HTML；中英检索质量、语言隔离及子路径需用真实内容试验后确定 |

推荐组合是 **PandaCSS + 少量 Park UI 组件，复杂交互沿用底层 Ark UI**。原生链接、按钮与静态正文不为统一外观而额外引入交互运行时。正文与布局继续适合现有 Next.js 静态导出；客户端范围集中在弹层、搜索、阅读恢复与复制。

以上库建议参考当前官方文档，不表示已安装或已做版本兼容验证。当前已实现基线仍为 Next.js/React/JavaScript。用户随后已在 Developer 对话提出升级 TypeScript 的方向，Developer 应优先回应并按该对话的实际授权明确迁移范围；不能把旧提醒理解成禁止 TypeScript，也不能把引入某份上游 TypeScript 示例自动当作全项目迁移授权。本次 UI 同步本身不执行迁移或安装。

## 交互交接

- 搜索：点击入口或非输入场景的快捷键打开；Escape/可见关闭按钮关闭，返回触发入口。真实输入、索引加载、无结果和加载失败分别处理。搜索范围限当前语言与已批准公开内容；Figma 结果只是样例。
- 手机目录：进入时定位当前章节；关闭后归还焦点，不丢正文位置。实现模态抽屉时处理背景滚动和焦点范围；章节链接保持原生导航语义。
- 本章导航：根据真实标题生成稳定锚点，当前位置用 `aria-current` 表达。图示提供文字说明；代码和宽表可在各自区域横向滚动，不让整页溢出。
- AI 卡片：先完整展示可复制内容，允许修改；复制正文中实际带上已确认的章节 URL、锚点和 revision。设计预览里的说明文字需在实现中替换成实际值。复制成功与失败反馈可以被读屏获知；失败时保留手动选择路径。
- 缺少翻译：显示缺失原因，给用户明确选择，不暗中换语言。当前设计是待确认的交互建议，需纳入正式内容契约后实施。
- 主题：默认尊重系统；读者显式选择 Day/Night 后持久化并优先使用其选择。首次渲染避免闪白；文字、图标、边框、提示块和阴影共同切换。减少透明度或不支持 blur 时回退实色。
- 音频：保留在后续单章试验，不把播放入口放进本轮已可用页面。阅读恢复、术语浮层与段落分享的细节随后单独分配。

Figma 已写入主题模式/variant 切换动作，并保留或重接部分阅读、搜索与提问预览演示。未运行网站或完整点击验收原型；Figma 里有连接不等于实际网站行为已实现。真实查询、剪贴板、焦点捕获、快捷键、滚动、系统主题跟随与持久化仍需代码阶段检查。

## 文件与项目权限

后续 SEC01 核查（2026-11-14）：本次在 Figma Desktop 再次打开 Share 和 Share settings，确认 Anyone / View 已选中、Edit 未选中，界面明确允许查看和评论；文件访问列表显示 Owner 与项目继承，继承编辑者只有 HAIXIN ZHANG。无需再次修改权限。Viewer copy/save/export 当前允许，复制不等于可以编辑原件；团队全部成员与账号集成不在本次全量审计范围。详细记录见 [SEC01](../reviews/SEC01.md) 和 [权限基线](../security/access-policy.md)。

本轮实际检查并按用户的明确确认修改了 Folder 权限：团队默认由“可编辑、邀请和修改权限”收紧为“仅查看和评论”。设计文件的链接权限是 **Anyone can view**；继承项目权限的编辑者显示为当前 Owner，未发现额外直接编辑成员。Owner 权限保留；没有改动整个团队或其他项目的设置。

这是文件/账号层面的权限控制。使用同一个 Owner 账号授权的 agent 仍可能编辑，不能宣称 Figma 已对 Writer/Developer 实现账号隔离；角色边界继续由项目任务范围约束。

## UI03 检查与下一步

完成三页结构和 13 组组件总览检查；17 张原有页面/状态画板保留原 ID。查看了 Tokens、组件总览、Day 页面组合、手机 Day/Night、320px 与反馈状态截图。修复 Header 固定高度与垂直 padding 不匹配、组件总览过宽、主题源组件的黑色填充回退、disabled 图标误填充、色板行高度不足及部分 recipe 说明与绑定不一致。搜索补充加载/失败恢复要求。

111 个变量的 alias 目标存在，36 个 semantic layout 变量均为 aliases，无 `ALL_SCOPES`，均有 WEB syntax。页面画板与组件总览的 Auto Layout 子节点未发现结构越界；Tokens 色板行高度修复后复查通过。页面设计含 154 个实例，无整页位图；画布文字与 annotations 检查未发现中文残留。20 组明暗文字/焦点配色达到本轮阈值（文字 4.5:1，焦点 3:1）；这不是全部状态或 DOM 可访问性认证。

移动端 Search/Prompt 仍是行为约定，尚无完整独立窄屏画板；200% 文字缩放、键盘/读屏、主题初始化与复制结果必须在实现阶段验收。未经上述检查，不宣称生产阅读体验全部通过。UI03 没有修改账号/文件权限；权限说明来自下方 UI02 的已验证记录，未在本轮重新审计。

先由用户 review 视觉方向，再与 Developer 明确实施范围、PandaCSS 映射和内容契约；这次设计工作没有安装依赖、修改网站、commit、push、部署或发布。

## UI02 历史检查

本轮结构检查覆盖 17 张页面/状态画板；截图检查了首页、明暗桌面与手机章节、中屏、平板、窄屏、暗色搜索/提问预览，以及代码/表格示例。修复了 320px Header 越界、平板页脚宽度、暗色主题选中状态等问题；已检查页面没有缺失字体，响应式样本最终未发现横向越界。55 个项目变量均有明确 scope 与 WEB syntax。

按实际解析后的 semantic tokens 计算 18 组前景/背景配色，均达到本轮检查目标（普通文字 4.5:1、控件边界 3:1）。正文/画布 Day 约 13.79:1、Night 16.26:1；次要文字/画布约 5.35:1、9.10:1；按钮文字约 6.86:1、12.04:1。这些检查不覆盖所有透明叠层或状态，也不等于完整可访问性认证。依据见 [WCAG 对比度说明](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum)；材质使用参考 [Apple Materials](https://developer.apple.com/design/human-interface-guidelines/materials)，按阅读场景克制使用。

先由用户 review 视觉方向、章节阅读舒适度和功能密度。通过后，主对话与 Developer 明确实施范围及内容契约，再按阶段落地。此交接不放行依赖安装、字体下载、全站重写、部署或发布。
