/* ═══════════════════════════════════════════════════════════════
   📌 站点配置文件 —— 只需修改这个文件，即可定制你的导航页
   ═══════════════════════════════════════════════════════════════
   1. site    : 站点名称、副标题
   2. theme   : 主题色与默认明暗模式
   3. categories : 分组（书签按 group 字段归类到这些分区）
   4. links   : 书签列表
      - name : 显示名称
      - url  : 跳转链接
      - desc : 卡片描述（可留空 ""）
      - group: 所属分组的 id（对应 categories）
      - icon : 图标 URL，留空则自动使用网站 favicon
      - tags : 标签数组，用于搜索高亮（可留空）
   ═══════════════════════════════════════════════════════════════ */

window.NAV_CONFIG = {
  site: {
    name: "星航海 · 书签导航",
    tagline: "Every journey starts from a single click.",
  },

  theme: {
    mode: "dark",          // 默认主题："dark" | "light"
    accent: "#6c5ce7",     // 主强调色（卡片高亮、按钮）
    accent2: "#00cec9",    // 辅助强调色（渐变搭配）
  },

  categories: [
    { id: "all",      name: "全部",     emoji: "✨" },
    { id: "dev",      name: "开发",     emoji: "⌨️" },
    { id: "design",   name: "设计",     emoji: "🎨" },
    { id: "ai",       name: "AI",       emoji: "🤖" },
    { id: "read",     name: "阅读",     emoji: "📚" },
    { id: "life",     name: "生活",     emoji: "🌿" },
  ],

  links: [
    { name: "GitHub",     url: "https://github.com",        desc: "全球最大代码托管平台",       group: "dev",    icon: "", tags: ["code", "开源"] },
    { name: "Stack Overflow", url: "https://stackoverflow.com", desc: "程序员的问答圣地",       group: "dev",    icon: "", tags: ["问答", "debug"] },
    { name: "MDN",        url: "https://developer.mozilla.org", desc: "Web 技术权威文档",       group: "dev",    icon: "", tags: ["文档", "web"] },
    { name: "CodePen",    url: "https://codepen.io",          desc: "前端创意代码游乐场",        group: "dev",    icon: "", tags: ["playground"] },
    { name: "Vercel",     url: "https://vercel.com",          desc: "一键部署前端应用",          group: "dev",    icon: "", tags: ["deploy"] },

    { name: "Figma",      url: "https://figma.com",           desc: "协作式设计工具",            group: "design", icon: "", tags: ["ui"] },
    { name: "Dribbble",   url: "https://dribbble.com",        desc: "全球设计师作品社区",        group: "design", icon: "", tags: ["灵感"] },
    { name: "Mobbin",     url: "https://mobbin.com",          desc: "真实 App 界面参考库",      group: "design", icon: "", tags: ["app", "竞品"] },

    { name: "ChatGPT",    url: "https://chat.openai.com",     desc: "OpenAI 旗舰对话模型",       group: "ai",     icon: "", tags: ["llm", "chat"] },
    { name: "Claude",     url: "https://claude.ai",           desc: "Anthropic 智能助手",        group: "ai",     icon: "", tags: ["llm", "chat"] },
    { name: "Hugging Face", url: "https://huggingface.co",    desc: "开源模型与数据集仓库",      group: "ai",     icon: "", tags: ["model", "开源"] },
    { name: "Poe",        url: "https://poe.com",             desc: "多模型聚合对话平台",        group: "ai",     icon: "", tags: ["chat"] },

    { name: "知乎",       url: "https://www.zhihu.com",       desc: "专业问答与深度讨论",        group: "read",   icon: "", tags: ["社区"] },
    { name: "Medium",     url: "https://medium.com",          desc: "全球创作者平台",            group: "read",   icon: "", tags: ["blog"] },
    { name: "Hacker News", url: "https://news.ycombinator.com", desc: "技术圈风向标",            group: "read",   icon: "", tags: ["news"] },
    { name: "微信读书",   url: "https://weread.qq.com",       desc: "社交化电子书阅读",          group: "read",   icon: "", tags: ["书"] },

    { name: "Bilibili",   url: "https://www.bilibili.com",    desc: "弹幕视频与学习资源",        group: "life",   icon: "", tags: ["视频"] },
    { name: "Unsplash",   url: "https://unsplash.com",        desc: "高质量免费图库",            group: "life",   icon: "", tags: ["图片"] },
    { name: "小宇宙",     url: "https://www.xiaoyuzhoufm.com", desc: "中文播客社区",             group: "life",   icon: "", tags: ["podcast"] },
    { name: "Excalidraw", url: "https://excalidraw.com",      desc: "手绘风白板工具",            group: "life",   icon: "", tags: ["画图"] },
  ],
};
