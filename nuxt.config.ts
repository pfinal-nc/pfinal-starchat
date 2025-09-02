export default defineNuxtConfig({
  // 开发工具
  devtools: { enabled: true },
  
  // 模块
  modules: [
    '@nuxt/ui'
  ],
  
  // 应用配置
  app: {
    head: {
      title: '星语小站 - 每日星座运势与命理解读',
      htmlAttrs: {
        lang: 'zh-CN'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '专业的星座运势、塔罗占卜、命理解读平台，为您提供每日星座运势查询和命理知识' },
        { name: 'keywords', content: '星座运势,塔罗牌,占星术,命理,每日运势,星座配对' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  
  // 静态站点生成配置
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/robots.txt']
    }
  },
  
  // 路由规则
  routeRules: {
    '/': { prerender: true },
    '/horoscope/**': { prerender: true },
    '/articles/**': { prerender: true },
    '/about': { prerender: true },
    '/subscribe': { prerender: true }
  },
  
  css: ['~/assets/css/main.css'],

  

  

  
  // 实验性功能
  experimental: {
    payloadExtraction: true
  },
  
  // PostCSS配置
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  }
})
