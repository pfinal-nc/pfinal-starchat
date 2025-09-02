# 星语小站 - 占星命理静态网站

一个基于 Nuxt 4 + Nuxt UI 3.3 开发的现代化占星命理静态网站，提供星座运势、塔罗占卜、命理知识等内容。

## 🌟 项目特色

- **现代化设计**: 采用渐变色彩和卡片式布局，视觉效果优雅
- **响应式布局**: 完美适配移动端、平板和桌面端
- **静态生成**: 基于 Nuxt 4 的静态站点生成，部署简单
- **SEO 优化**: 完整的 SEO 配置，搜索引擎友好
- **组件化开发**: 使用 Nuxt UI 3.3 组件库，开发效率高

## 🚀 技术栈

- **框架**: Nuxt 4
- **UI 组件**: Nuxt UI 3.3
- **样式**: Tailwind CSS
- **图标**: Lucide Icons
- **部署**: GitHub Pages / Vercel / Netlify

## 📁 项目结构

```
starry-horoscope-site/
├── components/          # 可复用组件
├── layouts/            # 页面布局
│   └── default.vue     # 默认布局
├── pages/              # 页面文件
│   ├── index.vue       # 首页
│   ├── horoscope/      # 星座运势
│   │   ├── index.vue   # 运势列表
│   │   └── [sign].vue  # 星座详情
│   ├── tarot/          # 塔罗占卜
│   ├── articles/       # 命理文章
│   ├── about.vue       # 关于页面
│   └── subscribe.vue   # 订阅页面
├── data/               # 静态数据
│   └── zodiac.json     # 星座数据
├── assets/             # 静态资源
├── public/             # 公共文件
├── nuxt.config.ts      # Nuxt 配置
├── package.json        # 项目依赖
└── README.md           # 项目说明
```

## 🛠️ 安装和运行

### 环境要求

- Node.js 18+ 
- npm / yarn / pnpm

### 安装依赖

```bash
# 使用 npm
npm install

# 使用 yarn
yarn install

# 使用 pnpm
pnpm install
```

### 快速启动

```bash
# 使用启动脚本（推荐）
chmod +x start.sh
./start.sh

# 或手动执行
npm install
npm run dev
```

### 开发模式

```bash
# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

### 构建部署

```bash
# 构建静态文件
npm run generate

# 预览构建结果
npm run preview

# 构建生产版本
npm run build
```

## 📱 功能模块

### 1. 首页
- Hero 区域展示
- 星座快速选择
- 特色功能介绍
- 推荐文章展示
- 邮件订阅功能

### 2. 星座运势
- 12星座运势展示
- 每日/每周/每月运势切换
- 详细运势解读
- 爱情、事业、财运分析
- 幸运信息展示

### 3. 塔罗占卜
- 塔罗牌解读服务
- 在线占卜功能
- 牌阵展示

### 4. 命理文章
- 文章列表和详情
- 分类标签系统
- 搜索功能

### 5. 订阅系统
- 邮件订阅
- 微信关注
- 社区引流

## 🎨 设计特色

### 色彩方案
- **主色调**: 紫色渐变 (#8B5CF6 → #EC4899)
- **辅助色**: 粉色、橙色、蓝色
- **背景色**: 浅灰渐变 (#F8FAFC → #F1F5F9)

### 布局设计
- **导航栏**: 固定顶部，毛玻璃效果
- **卡片布局**: 圆角设计，阴影效果
- **响应式网格**: 自适应列数
- **渐变背景**: 营造神秘氛围

## 📊 SEO 优化

- 完整的 Meta 标签配置
- 结构化数据支持
- 自动生成 Sitemap
- 图片优化和懒加载
- 页面标题和描述优化

## 🚀 部署方案

### GitHub Pages

1. 创建 GitHub 仓库
2. 配置 GitHub Actions 工作流
3. 自动构建和部署

### Vercel

1. 连接 GitHub 仓库
2. 自动检测 Nuxt 项目
3. 一键部署

### Netlify

1. 连接代码仓库
2. 配置构建命令
3. 设置环境变量

## 📈 性能优化

- **静态生成**: 预渲染所有页面
- **代码分割**: 自动代码拆分
- **图片优化**: WebP/AVIF 格式支持
- **缓存策略**: 长期缓存静态资源
- **CDN 加速**: 支持 CDN 部署

## 🔧 自定义配置

### 修改主题色彩

在 `nuxt.config.ts` 中配置：

```typescript
export default defineNuxtConfig({
  ui: {
    colors: {
      primary: 'purple',
      gray: 'cool'
    }
  }
})
```

### 添加新页面

1. 在 `pages/` 目录创建 `.vue` 文件
2. 自动生成路由
3. 配置 SEO Meta 信息

### 修改星座数据

编辑 `data/zodiac.json` 文件，添加或修改星座信息。

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交代码
4. 创建 Pull Request

## 📄 许可证

MIT License

## 📞 联系方式

- 邮箱: contact@starry.site
- 微信: starry_horoscope
- 网站: https://starry.site

---

⭐ 如果这个项目对您有帮助，请给我们一个 Star！
