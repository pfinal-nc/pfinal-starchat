<template>
  <div>
    <!-- 页面头部 -->
    <section class="py-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <UContainer>
        <div class="text-center">
          <div class="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
            <UIcon name="i-lucide-cards" class="w-12 h-12" />
          </div>
          <h1 class="text-4xl font-bold mb-4">塔罗占卜</h1>
          <p class="text-xl text-white/90">揭示命运的奥秘，指引前进的方向</p>
        </div>
      </UContainer>
    </section>

    <!-- 塔罗牌阵选择 -->
    <section class="py-12 bg-white">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">选择牌阵</h2>
          <p class="text-lg text-gray-600">不同的牌阵适用于不同的问题类型</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UCard
            v-for="spread in tarotSpreads"
            :key="spread.id"
            class="hover:shadow-lg transition-all duration-300 cursor-pointer group"
            @click="selectSpread(spread)"
          >
            <template #header>
              <div class="p-6 text-center">
                <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <UIcon :name="spread.icon" class="w-8 h-8 text-purple-600" />
                </div>
                <h3 class="text-xl font-bold text-gray-900">{{ spread.name }}</h3>
                <p class="text-sm text-gray-500">{{ spread.cards }}张牌</p>
              </div>
            </template>
            
            <div class="p-6 pt-0">
              <p class="text-gray-600 mb-4">{{ spread.description }}</p>
              <div class="space-y-2">
                <h4 class="font-semibold text-gray-900">适用问题：</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li v-for="question in spread.suitableQuestions" :key="question" class="flex items-center">
                    <UIcon name="i-lucide-check" class="w-4 h-4 text-green-500 mr-2" />
                    {{ question }}
                  </li>
                </ul>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- 占卜流程 -->
    <section class="py-12 bg-gray-50">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">占卜流程</h2>
          <p class="text-lg text-gray-600">简单三步，获得专业解读</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <span class="text-2xl font-bold text-white">1</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">选择牌阵</h3>
            <p class="text-gray-600">根据您的问题类型，选择合适的塔罗牌阵</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span class="text-2xl font-bold text-white">2</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">抽取卡牌</h3>
            <p class="text-gray-600">在虚拟牌阵中抽取塔罗牌，获得您的专属牌面</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
              <span class="text-2xl font-bold text-white">3</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">获得解读</h3>
            <p class="text-gray-600">获得详细的塔罗牌解读，了解命运指引</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 专业解读服务 -->
    <section class="py-12 bg-white">
      <UContainer>
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">专业解读服务</h2>
            <p class="text-lg text-gray-600">资深占星师为您提供个性化解读</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <UCard>
              <template #header>
                <div class="flex items-center space-x-3">
                  <UIcon name="i-lucide-user" class="w-6 h-6 text-purple-500" />
                  <h3 class="text-xl font-semibold text-gray-900">在线解读</h3>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-gray-600">通过我们的在线系统，您可以随时进行塔罗牌占卜，获得即时解读结果。</p>
                <ul class="space-y-2">
                  <li class="flex items-center text-sm text-gray-600">
                    <UIcon name="i-lucide-check" class="w-4 h-4 text-green-500 mr-2" />
                    多种牌阵选择
                  </li>
                  <li class="flex items-center text-sm text-gray-600">
                    <UIcon name="i-lucide-check" class="w-4 h-4 text-green-500 mr-2" />
                    详细解读说明
                  </li>
                  <li class="flex items-center text-sm text-gray-600">
                    <UIcon name="i-lucide-check" class="w-4 h-4 text-green-500 mr-2" />
                    免费使用
                  </li>
                </ul>
                <UButton
                  color="purple"
                  variant="solid"
                  class="w-full"
                  @click="startOnlineReading"
                >
                  开始在线占卜
                </UButton>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-3">
                  <UIcon name="i-lucide-video" class="w-6 h-6 text-blue-500" />
                  <h3 class="text-xl font-semibold text-gray-900">一对一咨询</h3>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-gray-600">预约专业占星师，获得个性化的深度解读和指导建议。</p>
                <ul class="space-y-2">
                  <li class="flex items-center text-sm text-gray-600">
                    <UIcon name="i-lucide-check" class="w-4 h-4 text-green-500 mr-2" />
                    资深占星师
                  </li>
                  <li class="flex items-center text-sm text-gray-600">
                    <UIcon name="i-lucide-check" class="w-4 h-4 text-green-500 mr-2" />
                    视频通话解读
                  </li>
                  <li class="flex items-center text-sm text-gray-600">
                    <UIcon name="i-lucide-check" class="w-4 h-4 text-green-500 mr-2" />
                    个性化建议
                  </li>
                </ul>
                <UButton
                  color="blue"
                  variant="outline"
                  class="w-full"
                  @click="bookConsultation"
                >
                  预约咨询
                </UButton>
              </div>
            </UCard>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 塔罗知识 -->
    <section class="py-12 bg-gray-50">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">塔罗知识</h2>
          <p class="text-lg text-gray-600">了解塔罗牌的历史和含义</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UCard
            v-for="article in tarotArticles"
            :key="article.slug"
            :to="`/articles/${article.slug}`"
            class="hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <template #header>
              <div class="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                <UIcon :name="article.icon" class="w-12 h-12 text-purple-600" />
              </div>
            </template>
            <div class="space-y-2">
              <h3 class="font-semibold text-gray-900 line-clamp-2">{{ article.title }}</h3>
              <p class="text-gray-600 text-sm line-clamp-3">{{ article.excerpt }}</p>
              <div class="flex items-center justify-between">
                <UBadge :color="article.category.color" variant="soft" size="sm">
                  {{ article.category.name }}
                </UBadge>
                <span class="text-sm text-gray-500">{{ article.readTime }}</span>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO配置
useSeoMeta({
  title: '塔罗占卜 - 星语小站',
  description: '专业的塔罗牌解读服务，揭示命运奥秘，指引前进方向',
  ogTitle: '塔罗占卜 - 星语小站',
  ogDescription: '专业的塔罗牌解读服务'
})

// 塔罗牌阵数据
const tarotSpreads = [
  {
    id: 'three-card',
    name: '三张牌阵',
    cards: 3,
    icon: 'i-lucide-layout-grid',
    description: '简单实用的牌阵，适合日常问题解答',
    suitableQuestions: ['今日运势如何？', '我应该怎么做？', '事情会如何发展？']
  },
  {
    id: 'celtic-cross',
    name: '凯尔特十字',
    cards: 10,
    icon: 'i-lucide-cross',
    description: '经典的塔罗牌阵，提供全面深入的分析',
    suitableQuestions: ['复杂问题的深度分析', '人生重大决策', '长期发展规划']
  },
  {
    id: 'horseshoe',
    name: '马蹄形',
    cards: 7,
    icon: 'i-lucide-heart',
    description: '适合爱情和人际关系问题的牌阵',
    suitableQuestions: ['感情问题分析', '人际关系处理', '爱情发展预测']
  },
  {
    id: 'past-present-future',
    name: '过去现在未来',
    cards: 3,
    icon: 'i-lucide-clock',
    description: '时间线牌阵，了解事情的发展脉络',
    suitableQuestions: ['事情的发展过程', '时间线分析', '历史影响分析']
  },
  {
    id: 'relationship',
    name: '关系牌阵',
    cards: 6,
    icon: 'i-lucide-users',
    description: '专门用于分析人际关系的牌阵',
    suitableQuestions: ['两人关系分析', '团队合作问题', '人际冲突解决']
  },
  {
    id: 'career',
    name: '事业牌阵',
    cards: 5,
    icon: 'i-lucide-briefcase',
    description: '专注于事业发展和职业选择的牌阵',
    suitableQuestions: ['职业发展方向', '工作机会分析', '事业规划建议']
  }
]

// 塔罗文章数据
const tarotArticles = [
  {
    slug: 'tarot-basics',
    title: '塔罗牌入门：从零开始学习塔罗占卜',
    excerpt: '了解塔罗牌的基本知识，包括牌阵解读、符号含义等，让你快速入门塔罗占卜。',
    category: { name: '塔罗基础', color: 'blue' },
    readTime: '5分钟',
    icon: 'i-lucide-book-open'
  },
  {
    slug: 'major-arcana',
    title: '大阿卡纳牌详解：22张主牌的含义',
    excerpt: '深入解析大阿卡纳牌的含义，了解每张主牌所代表的深层含义和象征。',
    category: { name: '牌面解读', color: 'purple' },
    readTime: '8分钟',
    icon: 'i-lucide-star'
  },
  {
    slug: 'minor-arcana',
    title: '小阿卡纳牌指南：56张副牌解读',
    excerpt: '掌握小阿卡纳牌的解读方法，了解权杖、圣杯、宝剑、钱币四组牌的含义。',
    category: { name: '牌面解读', color: 'green' },
    readTime: '10分钟',
    icon: 'i-lucide-cards'
  }
]

// 选择牌阵
const selectSpread = (spread: any) => {
  // 这里可以实现跳转到具体的占卜页面
  console.log('选择的牌阵:', spread)
  useToast().add({
    title: '功能开发中',
    description: '塔罗占卜功能正在开发中，敬请期待！',
    color: 'blue'
  })
}

// 开始在线占卜
const startOnlineReading = () => {
  useToast().add({
    title: '功能开发中',
    description: '在线占卜功能正在开发中，敬请期待！',
    color: 'blue'
  })
}

// 预约咨询
const bookConsultation = () => {
  useToast().add({
    title: '预约咨询',
    description: '请联系客服预约专业占星师咨询',
    color: 'green'
  })
}
</script>
