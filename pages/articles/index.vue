<template>
  <div>
    <!-- 页面头部 -->
    <section class="py-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <UContainer>
        <div class="text-center">
          <div class="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
            <UIcon name="i-lucide-book-open" class="w-12 h-12" />
          </div>
          <h1 class="text-4xl font-bold mb-4">命理文章</h1>
          <p class="text-xl text-white/90">深入了解星座、塔罗、占星术的奥秘</p>
        </div>
      </UContainer>
    </section>

    <!-- 搜索和筛选 -->
    <section class="py-8 bg-white border-b">
      <UContainer>
        <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
          <!-- 搜索框 -->
          <div class="flex-1 max-w-md">
            <UInput
              v-model="searchQuery"
              placeholder="搜索文章..."
              icon="i-lucide-search"
              size="lg"
            />
          </div>
          
          <!-- 分类筛选 -->
          <div class="flex flex-wrap gap-2">
            <UButton
              v-for="category in categories"
              :key="category.value"
              :color="selectedCategory === category.value ? 'purple' : 'gray'"
              :variant="selectedCategory === category.value ? 'solid' : 'outline'"
              size="sm"
              @click="selectedCategory = category.value"
            >
              {{ category.label }}
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 文章列表 -->
    <section class="py-12 bg-gray-50">
      <UContainer>
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <!-- 主内容区 -->
          <div class="lg:col-span-3">
            <!-- 文章网格 -->
            <div v-if="filteredArticles.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <UCard
                v-for="article in paginatedArticles"
                :key="article.slug"
                :to="`/articles/${article.slug}`"
                class="hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <template #header>
                  <div class="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center overflow-hidden">
                    <UIcon :name="article.icon" class="w-12 h-12 text-purple-600 group-hover:scale-110 transition-transform" />
                  </div>
                </template>
                
                <div class="space-y-3">
                  <!-- 文章元信息 -->
                  <div class="flex items-center justify-between">
                    <UBadge :color="article.category.color" variant="soft" size="sm">
                      {{ article.category.name }}
                    </UBadge>
                    <div class="flex items-center space-x-2 text-sm text-gray-500">
                      <UIcon name="i-lucide-clock" class="w-4 h-4" />
                      <span>{{ article.readTime }}</span>
                    </div>
                  </div>
                  
                  <!-- 文章标题 -->
                  <h3 class="font-semibold text-gray-900 line-clamp-2 group-hover:text-purple-600 transition-colors">
                    {{ article.title }}
                  </h3>
                  
                  <!-- 文章摘要 -->
                  <p class="text-gray-600 text-sm line-clamp-3">
                    {{ article.excerpt }}
                  </p>
                  
                  <!-- 文章标签 -->
                  <div class="flex flex-wrap gap-1">
                    <UBadge
                      v-for="tag in article.tags"
                      :key="tag"
                      color="gray"
                      variant="soft"
                      size="xs"
                    >
                      {{ tag }}
                    </UBadge>
                  </div>
                  
                  <!-- 发布时间 -->
                  <div class="flex items-center justify-between text-sm text-gray-500">
                    <span>{{ article.publishDate }}</span>
                    <div class="flex items-center space-x-1">
                      <UIcon name="i-lucide-eye" class="w-4 h-4" />
                      <span>{{ article.views }}</span>
                    </div>
                  </div>
                </div>
              </UCard>
            </div>
            
            <!-- 空状态 -->
            <div v-else class="text-center py-12">
              <UIcon name="i-lucide-search-x" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 class="text-lg font-semibold text-gray-900 mb-2">未找到相关文章</h3>
              <p class="text-gray-600">请尝试调整搜索条件或分类筛选</p>
            </div>
            
            <!-- 分页 -->
            <div v-if="filteredArticles.length > articlesPerPage" class="mt-8 flex justify-center">
              <UPagination
                v-model="currentPage"
                :total="totalPages"
                :ui="{ wrapper: 'flex items-center gap-1' }"
              />
            </div>
          </div>
          
          <!-- 侧边栏 -->
          <div class="lg:col-span-1 space-y-6">
            <!-- 热门文章 -->
            <UCard>
              <template #header>
                <h3 class="text-lg font-semibold text-gray-900">热门文章</h3>
              </template>
              
              <div class="space-y-4">
                <div
                  v-for="article in popularArticles"
                  :key="article.slug"
                  class="flex items-start space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                >
                  <div class="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <UIcon :name="article.icon" class="w-6 h-6 text-purple-600" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <h4 class="font-medium text-gray-900 text-sm line-clamp-2 hover:text-purple-600 transition-colors">
                      {{ article.title }}
                    </h4>
                    <div class="flex items-center space-x-2 mt-1">
                      <span class="text-xs text-gray-500">{{ article.publishDate }}</span>
                      <span class="text-xs text-gray-500">{{ article.views }}阅读</span>
                    </div>
                  </div>
                </div>
              </div>
            </UCard>
            
            <!-- 广告位 -->
            <AdBanner
              variant="sidebar"
              :sticky="true"
              :ad-data="sidebarAd"
            />
            
            <!-- 标签云 -->
            <UCard>
              <template #header>
                <h3 class="text-lg font-semibold text-gray-900">热门标签</h3>
              </template>
              
              <div class="flex flex-wrap gap-2">
                <UButton
                  v-for="tag in popularTags"
                  :key="tag.name"
                  :color="tag.color"
                  variant="soft"
                  size="sm"
                  @click="searchByTag(tag.name)"
                >
                  {{ tag.name }}
                  <span class="ml-1 text-xs">({{ tag.count }})</span>
                </UButton>
              </div>
            </UCard>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO配置
useSeoMeta({
  title: '命理文章 - 星语小站',
  description: '深入了解星座、塔罗、占星术的奥秘，获取专业的命理知识',
  ogTitle: '命理文章 - 星语小站',
  ogDescription: '专业的命理知识文章'
})

// 搜索和筛选状态
const searchQuery = ref('')
const selectedCategory = ref('all')
const currentPage = ref(1)
const articlesPerPage = 6

// 分类选项
const categories = [
  { label: '全部', value: 'all' },
  { label: '星座运势', value: 'zodiac' },
  { label: '塔罗牌', value: 'tarot' },
  { label: '占星术', value: 'astrology' },
  { label: '命理知识', value: 'fortune' },
  { label: '运势指南', value: 'guide' }
]

// 文章数据
const articles = [
  {
    slug: 'zodiac-compatibility',
    title: '十二星座配对指南：找到你的完美伴侣',
    excerpt: '了解不同星座之间的相性，掌握星座配对的奥秘，找到最适合你的那个人。',
    category: { name: '星座配对', color: 'purple' },
    tags: ['星座', '配对', '爱情', '关系'],
    publishDate: '2024-01-15',
    readTime: '8分钟',
    views: 1250,
    icon: 'i-lucide-heart'
  },
  {
    slug: 'tarot-basics',
    title: '塔罗牌入门：从零开始学习塔罗占卜',
    excerpt: '塔罗牌基础知识，包括牌阵解读、符号含义等，让你快速入门塔罗占卜。',
    category: { name: '塔罗牌', color: 'blue' },
    tags: ['塔罗牌', '占卜', '入门', '解读'],
    publishDate: '2024-01-12',
    readTime: '5分钟',
    views: 980,
    icon: 'i-lucide-cards'
  },
  {
    slug: 'lucky-colors',
    title: '2024年十二星座幸运色指南',
    excerpt: '每个星座都有属于自己的幸运色，了解并运用这些颜色，让好运常伴左右。',
    category: { name: '运势指南', color: 'green' },
    tags: ['幸运色', '星座', '运势', '2024'],
    publishDate: '2024-01-10',
    readTime: '6分钟',
    views: 1560,
    icon: 'i-lucide-palette'
  },
  {
    slug: 'moon-phases',
    title: '月相与星座运势的关系',
    excerpt: '探索月相对星座运势的影响，了解如何利用月相能量提升运势。',
    category: { name: '占星术', color: 'indigo' },
    tags: ['月相', '占星术', '运势', '能量'],
    publishDate: '2024-01-08',
    readTime: '7分钟',
    views: 890,
    icon: 'i-lucide-moon'
  },
  {
    slug: 'numerology-basics',
    title: '数字命理学基础：解读生命数字',
    excerpt: '学习数字命理学的基本原理，了解如何通过生日计算生命数字。',
    category: { name: '命理知识', color: 'orange' },
    tags: ['数字命理', '生命数字', '生日', '解读'],
    publishDate: '2024-01-05',
    readTime: '9分钟',
    views: 720,
    icon: 'i-lucide-hash'
  },
  {
    slug: 'feng-shui-home',
    title: '家居风水布局：提升家庭运势',
    excerpt: '学习家居风水的基本原理，通过合理的布局提升家庭运势和和谐。',
    category: { name: '运势指南', color: 'green' },
    tags: ['风水', '家居', '布局', '运势'],
    publishDate: '2024-01-03',
    readTime: '10分钟',
    views: 1100,
    icon: 'i-lucide-home'
  }
]

// 热门文章
const popularArticles = computed(() => {
  return articles
    .sort((a, b) => b.views - a.views)
    .slice(0, 5)
})

// 热门标签
const popularTags = [
  { name: '星座', count: 15, color: 'purple' },
  { name: '塔罗牌', count: 12, color: 'blue' },
  { name: '运势', count: 20, color: 'green' },
  { name: '爱情', count: 8, color: 'pink' },
  { name: '事业', count: 10, color: 'orange' },
  { name: '财运', count: 6, color: 'yellow' }
]

// 侧边栏广告
const sidebarAd = {
  title: '专业占星师一对一咨询',
  description: '资深占星师为您提供个性化解读，解答人生困惑',
  link: 'https://example.com/consultation',
  category: '专业服务',
  categoryColor: 'purple',
  price: '¥299起',
  buttonText: '立即预约'
}

// 筛选文章
const filteredArticles = computed(() => {
  let result = articles
  
  // 按分类筛选
  if (selectedCategory.value !== 'all') {
    result = result.filter(article => 
      article.category.name.toLowerCase().includes(selectedCategory.value)
    )
  }
  
  // 按搜索关键词筛选
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(article =>
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }
  
  return result
})

// 分页
const totalPages = computed(() => Math.ceil(filteredArticles.value.length / articlesPerPage))

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * articlesPerPage
  const end = start + articlesPerPage
  return filteredArticles.value.slice(start, end)
})

// 按标签搜索
const searchByTag = (tagName: string) => {
  searchQuery.value = tagName
  currentPage.value = 1
}

// 监听筛选变化，重置分页
watch([searchQuery, selectedCategory], () => {
  currentPage.value = 1
})
</script>
