# 星航海 · 翻页书书签导航

> 零依赖、纯静态、双击即用的书签导航——做成了一本会 3D 翻页的杂志，还住着一只会游泳、会聊天、能被你拎起来的 DeepSeek 鲸鱼娘。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![Dependencies](https://img.shields.io/badge/dependencies-none-green)
![Static](https://img.shields.io/badge/pure%20static-HTML%2FCSS%2FJS-orange)

## 特性

- **零依赖纯静态**：单个 HTML + 一份 `config.js`，无框架、无构建、无外部库、无后端
- **3D 翻书**：黑色星空 + 纸张翻转动画（书脊阴影、手持弧光），点封面/按键/点击书页半区逐页翻阅
- **拖拽跟随翻页**：按住书页拖动，纸页实时跟手；拖过半程或快速甩动即翻页，幅度不够则弹回
- **翻页音效**：WebAudio 现场合成纸张声，不加载任何音频文件；🔊 一键开关（记忆偏好）
- **搜索跳页**：第一页搜索框输入关键词回车，自动逐页翻到目标页并红色高亮
- **DeepSeek 鲸鱼娘看板娘**：她会随机走动、爬行、横穿屏幕游泳（带气泡轨迹）；点击可文字聊天，说「我叫××」她会记住你的名字；可以用鼠标把她拎起来——狂甩会头晕、半空松手会掉下去弹两下；双击=撸鲸鱼，会冒爱心；开刊、跳页、读到封底都会主动说话
- **拖拽排序 + 访问统计**：顺序与点击热度存本机 localStorage，封底显示总访问量与 Top3
- **无障碍**：跟随 `prefers-reduced-motion`，动效自动降级

## 快速开始

```
starnavi-bookmarks/
├── book.html   # ★ 打开这个（双击即可）
├── config.js   # ★ 唯一需要改的文件：所有书签配置
├── assets/
│   └── whale-girl.png  # 看板娘立绘（版权说明见下文）
├── LICENSE
└── README.md
```

部署到 GitHub Pages：仓库 Settings → Pages → 选 `main` 分支根目录即可；Vercel / 任意静态托管 / Nginx 同理。

## 配置书签

每个书签一行，字段含义见 `config.js` 顶部注释：

```js
{ name: "GitHub", url: "https://github.com", desc: "代码托管", group: "dev", icon: "", tags: ["开源"] },
```

- `icon` 留空会自动抓取网站 favicon，无需手动准备图标
- 分组在 `categories` 里自由增删，书签的 `group` 对应分组 `id`
- `theme.mode` 改默认明/暗，`accent` / `accent2` 改全站主色

## 数据存储

书签排序、点击统计、音效开关、看板娘状态与昵称全部存于**本机浏览器** localStorage
（键：`nav.extra` / `nav.order` / `nav.stats` / `nav.sound` / `nav.mascot` / `nav.petname`），**不上传任何数据**。

- 清空统计：控制台执行 `localStorage.removeItem('nav.stats')` 后刷新
- 恢复默认顺序：`localStorage.removeItem('nav.order')`

## 致谢与素材版权

- 看板娘形象灵感来自 DeepSeek 的拟人二创文化（鲸鱼娘）
- ⚠️ `assets/whale-girl.png` 为网络流传的同人表情包插画抠图，**非本项目原创，不包含在 MIT 许可内**，仅供学习与本地演示。请勿将其用于公开部署或商业用途；建议替换为你自己拥有权利的立绘（替换同名文件即可，尺寸约 518×849、透明底）
- 除该图片外，全部代码（HTML / CSS / JS / 配置）以 MIT 许可开源

## License

[MIT](LICENSE) © 2026 guazixiong
