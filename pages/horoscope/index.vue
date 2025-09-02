<template>
  <div>
    <!-- 页面头部 -->
    <section class="py-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <UContainer>
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-4">星座运势</h1>
          <p class="text-xl text-white/90">探索十二星座的神秘力量，了解您的运势走向</p>
        </div>
      </UContainer>
    </section>

    <!-- 运势类型选择 -->
    <section class="py-8 bg-white border-b">
      <UContainer>
        <UTabs
          :items="periodTabs"
          v-model="selectedPeriod"
          class="justify-center"
        />
      </UContainer>
    </section>

    <!-- 星座运势网格 -->
    <section class="py-12 bg-gray-50">
      <UContainer>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <UCard
            v-for="sign in zodiacSigns"
            :key="sign.name"
            :to="`/horoscope/${sign.slug}`"
            class="hover:shadow-lg transition-all duration-300 cursor-pointer group"
          >
            <template #header>
              <div class="p-6 text-center">
                <div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <UIcon :name="sign.icon" class="w-10 h-10 text-purple-600" />
                </div>
                <h3 class="text-xl font-bold text-gray-900">{{ sign.name }}</h3>
                <p class="text-sm text-gray-500">{{ sign.date }}</p>
              </div>
            </template>
            
            <div class="p-6 pt-0">
              <!-- 运势评分 -->
              <div class="grid grid-cols-3 gap-4 mb-4">
                <div class="text-center">
                  <div class="text-lg font-bold text-red-500">{{ sign.fortunes.love }}</div>
                  <div class="text-xs text-gray-500">爱情运</div>
                </div>
                <div class="text-center">
                  <div class="text-lg font-bold text-blue-500">{{ sign.fortunes.career }}</div>
                  <div class="text-xs text-gray-500">事业运</div>
                </div>
                <div class="text-center">
                  <div class="text-lg font-bold text-green-500">{{ sign.fortunes.wealth }}</div>
                  <div class="text-xs text-gray-500">财运</div>
                </div>
              </div>
              
              <!-- 运势摘要 -->
              <p class="text-sm text-gray-600 line-clamp-3">{{ sign.summary }}</p>
              
              <!-- 查看详情按钮 -->
              <div class="mt-4">
                <UButton
                  variant="outline"
                  color="purple"
                  size="sm"
                  class="w-full"
                >
                  查看详情
                  <UIcon name="i-lucide-arrow-right" class="w-4 h-4 ml-2" />
                </UButton>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- 运势解读说明 -->
    <section class="py-12 bg-white">
      <UContainer>
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">运势解读说明</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <UIcon name="i-lucide-heart" class="w-8 h-8 text-red-500" />
              </div>
              <h3 class="text-lg font-semibold mb-2">爱情运</h3>
              <p class="text-gray-600 text-sm">反映感情生活、人际关系和桃花运的走向</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <UIcon name="i-lucide-briefcase" class="w-8 h-8 text-blue-500" />
              </div>
              <h3 class="text-lg font-semibold mb-2">事业运</h3>
              <p class="text-gray-600 text-sm">体现工作发展、学业进步和职业机遇</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <UIcon name="i-lucide-coins" class="w-8 h-8 text-green-500" />
              </div>
              <h3 class="text-lg font-semibold mb-2">财运</h3>
              <p class="text-gray-600 text-sm">预示财富积累、投资机会和财务状况</p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO配置
useSeoMeta({
  title: '星座运势 - 星语小站',
  description: '查看十二星座的每日、每周、每月运势，了解爱情、事业、财运走向',
  ogTitle: '星座运势 - 星语小站',
  ogDescription: '查看十二星座的运势走向'
})

// 运势周期选择
const selectedPeriod = ref('daily')

const periodTabs = [
  {
    label: '今日运势',
    value: 'daily',
    icon: 'i-lucide-calendar'
  },
  {
    label: '本周运势',
    value: 'weekly',
    icon: 'i-lucide-calendar-days'
  },
  {
    label: '本月运势',
    value: 'monthly',
    icon: 'i-lucide-calendar-range'
  }
]

// 星座数据
const zodiacSigns = [
  {
    name: '白羊座',
    slug: 'aries',
    icon: 'i-lucide-zodiac-aries',
    date: '3.21-4.19',
    fortunes: { love: '★★★★☆', career: '★★★★★', wealth: '★★★☆☆' },
    summary: '今日白羊座充满活力，适合主动出击。感情方面会有意外惊喜，事业上贵人相助，财运稳定。'
  },
  {
    name: '金牛座',
    slug: 'taurus',
    icon: 'i-lucide-zodiac-taurus',
    date: '4.20-5.20',
    fortunes: { love: '★★★☆☆', career: '★★★★☆', wealth: '★★★★★' },
    summary: '金牛座今日稳重踏实，感情需要耐心经营，事业稳步发展，财运亨通，适合投资理财。'
  },
  {
    name: '双子座',
    slug: 'gemini',
    icon: 'i-lucide-zodiac-gemini',
    date: '5.21-6.21',
    fortunes: { love: '★★★★☆', career: '★★★☆☆', wealth: '★★★☆☆' },
    summary: '双子座思维活跃，沟通能力突出。感情丰富多彩，事业需要专注，财运平平。'
  },
  {
    name: '巨蟹座',
    slug: 'cancer',
    icon: 'i-lucide-zodiac-cancer',
    date: '6.22-7.22',
    fortunes: { love: '★★★★★', career: '★★★☆☆', wealth: '★★★☆☆' },
    summary: '巨蟹座情感丰富，家庭观念强。感情运势极佳，事业需要突破，财运稳定。'
  },
  {
    name: '狮子座',
    slug: 'leo',
    icon: 'i-lucide-zodiac-leo',
    date: '7.23-8.22',
    fortunes: { love: '★★★★☆', career: '★★★★★', wealth: '★★★★☆' },
    summary: '狮子座领导力突出，魅力四射。感情甜蜜，事业蒸蒸日上，财运良好。'
  },
  {
    name: '处女座',
    slug: 'virgo',
    icon: 'i-lucide-zodiac-virgo',
    date: '8.23-9.22',
    fortunes: { love: '★★★☆☆', career: '★★★★★', wealth: '★★★★☆' },
    summary: '处女座追求完美，工作认真负责。感情需要放松，事业成就显著，财运稳定。'
  },
  {
    name: '天秤座',
    slug: 'libra',
    icon: 'i-lucide-zodiac-libra',
    date: '9.23-10.23',
    fortunes: { love: '★★★★★', career: '★★★☆☆', wealth: '★★★☆☆' },
    summary: '天秤座优雅平衡，人际关系和谐。感情运势极佳，事业需要平衡，财运平平。'
  },
  {
    name: '天蝎座',
    slug: 'scorpio',
    icon: 'i-lucide-zodiac-scorpio',
    date: '10.24-11.22',
    fortunes: { love: '★★★★☆', career: '★★★★☆', wealth: '★★★★★' },
    summary: '天蝎座洞察力强，意志坚定。感情深刻，事业有突破，财运亨通。'
  },
  {
    name: '射手座',
    slug: 'sagittarius',
    icon: 'i-lucide-zodiac-sagittarius',
    date: '11.23-12.21',
    fortunes: { love: '★★★☆☆', career: '★★★★☆', wealth: '★★★☆☆' },
    summary: '射手座乐观开朗，追求自由。感情需要稳定，事业有发展，财运一般。'
  },
  {
    name: '摩羯座',
    slug: 'capricorn',
    icon: 'i-lucide-zodiac-capricorn',
    date: '12.22-1.19',
    fortunes: { love: '★★★☆☆', career: '★★★★★', wealth: '★★★★☆' },
    summary: '摩羯座务实稳重，目标明确。感情需要耐心，事业成就突出，财运良好。'
  },
  {
    name: '水瓶座',
    slug: 'aquarius',
    icon: 'i-lucide-zodiac-aquarius',
    date: '1.20-2.18',
    fortunes: { love: '★★★☆☆', career: '★★★★☆', wealth: '★★★☆☆' },
    summary: '水瓶座创新思维，特立独行。感情需要理解，事业有创意，财运稳定。'
  },
  {
    name: '双鱼座',
    slug: 'pisces',
    icon: 'i-lucide-zodiac-pisces',
    date: '2.19-3.20',
    fortunes: { love: '★★★★★', career: '★★★☆☆', wealth: '★★★☆☆' },
    summary: '双鱼座富有同情心，艺术天赋强。感情运势极佳，事业需要专注，财运一般。'
  }
]

// 监听运势周期变化
watch(selectedPeriod, (newPeriod) => {
  // 这里可以根据选择的周期更新运势数据
  console.log('选择的运势周期:', newPeriod)
})
</script>
