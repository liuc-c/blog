# 浮生仟记 - 现代化 Astro 博客

> 基于 Astro 5.x + MDX + TypeScript 构建的现代化博客系统，支持丰富的 Markdown 和 MDX 内容创作体验。

![Astro](https://img.shields.io/badge/Astro-5.9.2-FF5D01?style=flat-square&logo=astro&logoColor=white)
![MDX](https://img.shields.io/badge/MDX-支持-1B1F24?style=flat-square&logo=mdx&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

## ✨ 功能特性

### 🎯 核心功能
- **🚀 极速性能** - 基于 Astro 的静态站点生成，100/100 Lighthouse 性能评分
- **📝 混合内容支持** - 同时支持传统 Markdown (.md) 和 MDX (.mdx) 文章格式
- **🎨 现代化设计** - 简洁优雅的界面设计，注重阅读体验
- **🌙 深色模式** - 完整的深色/浅色主题切换支持
- **📱 响应式设计** - 完美适配桌面端和移动端设备
- **🔍 全文搜索** - 基于 Pagefind 的快速全文搜索功能

### 🛠️ 技术特性
- **类型安全** - 完整的 TypeScript 支持和类型检查
- **SEO 优化** - 自动生成 sitemap、RSS 订阅和 OpenGraph 数据
- **代码高亮** - 基于 Expressive Code 的高级代码高亮
- **数学公式** - 支持 KaTeX 数学公式渲染
- **图片优化** - 自动图片压缩和优化

## 🚀 快速开始

### 环境要求
- Node.js 18+
- pnpm 9+ (推荐) 或 npm/yarn

### 安装步骤

1. **克隆项目**
```bash
git clone <repository-url>
cd blog
```

2. **安装依赖**
```bash
pnpm install
```

3. **启动开发服务器**
```bash
pnpm dev
```

4. **访问网站**
打开浏览器访问 `http://localhost:4321`

### 构建部署

```bash
# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview
```

## 📁 项目结构

```
├── public/                 # 静态资源
├── src/
│   ├── components/         # 组件目录
│   │   ├── control/        # 控制组件
│   │   ├── misc/          # 通用组件
│   │   └── widget/        # 小部件组件
│   ├── content/           # 内容目录
│   │   ├── posts/         # 博客文章 (.md/.mdx)
│   │   └── config.ts      # 内容集合配置
│   ├── layouts/           # 布局组件
│   ├── pages/             # 页面路由
│   ├── styles/            # 样式文件
│   └── utils/             # 工具函数
├── astro.config.mjs       # Astro 配置
├── tailwind.config.cjs    # Tailwind 配置
└── tsconfig.json          # TypeScript 配置
```

## 📝 内容创作

### Markdown 文章
创建传统的 Markdown 文章：

```markdown
---
title: "我的第一篇文章"
published: 2024-12-17
description: "文章描述"
tags: ["标签1", "标签2"]
category: "分类"
lang: "zh-cn"
---

# 文章标题

这是文章内容...
```

### MDX 增强文章
创建支持 JSX 语法的 MDX 文章：

```mdx
---
title: "MDX 增强文章"
published: 2024-12-17
tags: ["MDX", "增强"]
---

# MDX 增强内容

MDX 支持在 Markdown 中使用 JSX 语法，可以创建更丰富的内容：

<div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
  <h3 className="text-blue-800 dark:text-blue-200">提示框</h3>
  <p className="text-blue-600 dark:text-blue-300">
    这是使用 JSX 语法创建的提示框内容。
  </p>
</div>

## 支持的功能

- 标准 Markdown 语法
- JSX 元素和属性
- Tailwind CSS 类名
- 响应式设计
```

## 🎨 MDX 功能特性

### JSX 语法支持
在 MDX 文章中可以使用 JSX 语法创建丰富的内容：

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
    <h3 className="font-bold text-blue-800 dark:text-blue-200">特性 1</h3>
    <p className="text-blue-600 dark:text-blue-300">描述内容</p>
  </div>
  <div className="p-4 bg-green-100 dark:bg-green-900 rounded-lg">
    <h3 className="font-bold text-green-800 dark:text-green-200">特性 2</h3>
    <p className="text-green-600 dark:text-green-300">描述内容</p>
  </div>
</div>
```

### 样式和布局
支持 Tailwind CSS 类名和响应式设计：

```jsx
<div className="prose dark:prose-invert max-w-none">
  <blockquote className="border-l-4 border-blue-500 pl-4 italic">
    这是一个自定义样式的引用块
  </blockquote>
</div>
```

## 🛠️ 开发指南

### 创建 MDX 文章

1. 在 `src/content/posts/` 目录下创建 `.mdx` 文件
2. 添加完整的 frontmatter 配置
3. 使用 Markdown 语法编写基础内容
4. 根据需要添加 JSX 元素增强表现力

### 内容创作最佳实践

- **语义化标记**: 使用合适的 HTML 标签和 Markdown 语法
- **响应式设计**: 使用 Tailwind 响应式类确保移动端体验
- **无障碍访问**: 为图片添加 alt 属性，使用语义化标签
- **性能优化**: 合理使用图片和媒体资源
- **SEO 友好**: 编写完整的 frontmatter 和描述信息

## 🧞 可用命令

| 命令 | 说明 |
| :--- | :--- |
| `pnpm dev` | 启动开发服务器 (localhost:4321) |
| `pnpm build` | 构建生产版本到 `./dist/` |
| `pnpm preview` | 本地预览构建结果 |
| `pnpm check` | 运行 Astro 类型检查 |
| `pnpm lint` | 运行代码检查和格式化 |
| `pnpm new-post` | 创建新文章 |

## 🎯 技术栈

- **框架**: [Astro 5.x](https://astro.build/) - 现代化静态站点生成器
- **内容**: [MDX](https://mdxjs.com/) - Markdown + JSX 支持
- **样式**: [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- **组件**: [Svelte](https://svelte.dev/) - 轻量级组件框架
- **语言**: [TypeScript](https://www.typescriptlang.org/) - 类型安全的 JavaScript
- **搜索**: [Pagefind](https://pagefind.app/) - 静态站点搜索
- **部署**: [Netlify](https://www.netlify.com/) - 现代化部署平台

## 📚 相关文档

- [Astro 官方文档](https://docs.astro.build/)
- [MDX 官方文档](https://mdxjs.com/)

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Astro](https://astro.build/) - 优秀的静态站点生成器
- [Fuwari](https://github.com/saicaca/fuwari) - 项目模板灵感来源
- 所有贡献者和开源社区

---

<div align="center">

**[⬆ 回到顶部](#浮生仟记---现代化-astro-博客)**

Made with ❤️ and [Astro](https://astro.build/)

</div>
