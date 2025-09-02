<template>
  <div>
    <!-- 星座头部信息 -->
    <section class="py-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <UContainer>
        <div class="text-center">
          <div class="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
            <UIcon :name="zodiacSign.icon" class="w-12 h-12" />
          </div>
          <h1 class="text-4xl font-bold mb-2">{{ zodiacSign.name }}运势</h1>
          <p class="text-xl text-white/90">{{ zodiacSign.date }}</p>
        </div>
      </UContainer>
    </section>

    <!-- 运势周期选择 -->
    <section class="py-6 bg-white border-b">
      <UContainer>
        <UTabs
          :items="periodTabs"
          v-model="selectedPeriod"
          class="justify-center"
        />
      </UContainer>
    </section>

    <!-- 详细运势内容 -->
    <section class="py-12 bg-gray-50">
      <UContainer>
        <div class="max-w-4xl mx-auto">
          <!-- 运势概览 -->
          <UCard class="mb-8">
            <template #header>
              <div class="flex items-center justify-between">
                <h2 class="text-2xl font-bold text-gray-900">运势概览</h2>
                <UBadge :color="overallColor" variant="soft">
                  {{ overallLevel }}
                </UBadge>
              </div>
            </template>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="text-center p-4 bg-red-50 rounded-lg">
                <UIcon name="i-lucide-heart" class="w-8 h-8 text-red-500 mx-auto mb-2" />
                <h3 class="font-semibold text-gray-900 mb-1">爱情运</h3>
                <div class="text-2xl font-bold text-red-500 mb-2">{{ zodiacSign.fortunes.love }}</div>
                <p class="text-sm text-gray-600">{{ zodiacSign.loveDetail }}</p>
              </div>
              
              <div class="text-center p-4 bg-blue-50 rounded-lg">
                <UIcon name="i-lucide-briefcase" class="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 class="font-semibold text-gray-900 mb-1">事业运</h3>
                <div class="text-2xl font-bold text-blue-500 mb-2">{{ zodiacSign.fortunes.career }}</div>
                <p class="text-sm text-gray-600">{{ zodiacSign.careerDetail }}</p>
              </div>
              
              <div class="text-center p-4 bg-green-50 rounded-lg">
                <UIcon name="i-lucide-coins" class="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h3 class="font-semibold text-gray-900 mb-1">财运</h3>
                <div class="text-2xl font-bold text-green-500 mb-2">{{ zodiacSign.fortunes.wealth }}</div>
                <p class="text-sm text-gray-600">{{ zodiacSign.wealthDetail }}</p>
              </div>
            </div>
          </UCard>

          <!-- 详细运势解读 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- 爱情运势 -->
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-heart" class="w-6 h-6 text-red-500" />
                  <h3 class="text-xl font-semibold text-gray-900">爱情运势</h3>
                </div>
              </template>
              
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">单身者</h4>
                  <p class="text-gray-600 text-sm">{{ zodiacSign.loveSingle }}</p>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">恋爱中</h4>
                  <p class="text-gray-600 text-sm">{{ zodiacSign.loveRelationship }}</p>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">已婚者</h4>
                  <p class="text-gray-600 text-sm">{{ zodiacSign.loveMarried }}</p>
                </div>
              </div>
            </UCard>

            <!-- 事业运势 -->
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-briefcase" class="w-6 h-6 text-blue-500" />
                  <h3 class="text-xl font-semibold text-gray-900">事业运势</h3>
                </div>
              </template>
              
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">工作发展</h4>
                  <p class="text-gray-600 text-sm">{{ zodiacSign.careerWork }}</p>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">人际关系</h4>
                  <p class="text-gray-600 text-sm">{{ zodiacSign.careerRelationship }}</p>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">学习进修</h4>
                  <p class="text-gray-600 text-sm">{{ zodiacSign.careerStudy }}</p>
                </div>
              </div>
            </UCard>

            <!-- 财运分析 -->
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-coins" class="w-6 h-6 text-green-500" />
                  <h3 class="text-xl font-semibold text-gray-900">财运分析</h3>
                </div>
              </template>
              
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">正财运</h4>
                  <p class="text-gray-600 text-sm">{{ zodiacSign.wealthIncome }}</p>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">偏财运</h4>
                  <p class="text-gray-600 text-sm">{{ zodiacSign.wealthExtra }}</p>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">投资理财</h4>
                  <p class="text-gray-600 text-sm">{{ zodiacSign.wealthInvestment }}</p>
                </div>
              </div>
            </UCard>

            <!-- 健康运势 -->
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-activity" class="w-6 h-6 text-purple-500" />
                  <h3 class="text-xl font-semibold text-gray-900">健康运势</h3>
                </div>
              </template>
              
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">身体状况</h4>
                  <p class="text-gray-600 text-sm">{{ zodiacSign.healthPhysical }}</p>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">心理健康</h4>
                  <p class="text-gray-600 text-sm">{{ zodiacSign.healthMental }}</p>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">注意事项</h4>
                  <p class="text-gray-600 text-sm">{{ zodiacSign.healthTips }}</p>
                </div>
              </div>
            </UCard>
          </div>

          <!-- 幸运信息 -->
          <UCard class="mt-8">
            <template #header>
              <h3 class="text-xl font-semibold text-gray-900">今日幸运信息</h3>
            </template>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div class="text-center">
                <div class="w-12 h-12 mx-auto mb-2 bg-yellow-100 rounded-full flex items-center justify-center">
                  <UIcon name="i-lucide-sun" class="w-6 h-6 text-yellow-600" />
                </div>
                <h4 class="font-semibold text-gray-900 mb-1">幸运色</h4>
                <p class="text-sm text-gray-600">{{ zodiacSign.luckyColor }}</p>
              </div>
              
              <div class="text-center">
                <div class="w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
                  <UIcon name="i-lucide-gem" class="w-6 h-6 text-blue-600" />
                </div>
                <h4 class="font-semibold text-gray-900 mb-1">幸运数字</h4>
                <p class="text-sm text-gray-600">{{ zodiacSign.luckyNumber }}</p>
              </div>
              
              <div class="text-center">
                <div class="w-12 h-12 mx-auto mb-2 bg-green-100 rounded-full flex items-center justify-center">
                  <UIcon name="i-lucide-map-pin" class="w-6 h-6 text-green-600" />
                </div>
                <h4 class="font-semibold text-gray-900 mb-1">幸运方位</h4>
                <p class="text-sm text-gray-600">{{ zodiacSign.luckyDirection }}</p>
              </div>
              
              <div class="text-center">
                <div class="w-12 h-12 mx-auto mb-2 bg-purple-100 rounded-full flex items-center justify-center">
                  <UIcon name="i-lucide-clock" class="w-6 h-6 text-purple-600" />
                </div>
                <h4 class="font-semibold text-gray-900 mb-1">幸运时间</h4>
                <p class="text-sm text-gray-600">{{ zodiacSign.luckyTime }}</p>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
// 获取路由参数
const route = useRoute()
const signSlug = route.params.sign as string

// SEO配置
const pageTitle = computed(() => `${getZodiacSign(signSlug)?.name || '星座'}运势 - 星语小站`)
const pageDescription = computed(() => `查看${getZodiacSign(signSlug)?.name || '星座'}的详细运势，包括爱情、事业、财运等全方位分析`)

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription
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
const zodiacData = {
  aries: {
    name: '白羊座',
    icon: 'i-lucide-zodiac-aries',
    date: '3.21-4.19',
    fortunes: { love: '★★★★☆', career: '★★★★★', wealth: '★★★☆☆' },
    loveDetail: '感情运势良好，适合主动表达',
    careerDetail: '事业蒸蒸日上，领导力突出',
    wealthDetail: '财运稳定，适合稳健投资',
    loveSingle: '单身白羊座今日桃花运旺盛，可能会遇到心仪的对象。建议多参加社交活动，展现自己的魅力。',
    loveRelationship: '恋爱中的白羊座感情甜蜜，但要注意控制脾气，避免因小事争吵。',
    loveMarried: '已婚白羊座家庭和睦，适合与伴侣一起规划未来，增进感情。',
    careerWork: '工作上充满干劲，适合接受新的挑战。领导会对你刮目相看。',
    careerRelationship: '与同事关系融洽，团队合作愉快。适合主动帮助他人。',
    careerStudy: '学习效率高，适合学习新技能或参加培训。',
    wealthIncome: '正财运稳定，工资收入有望增加。',
    wealthExtra: '偏财运一般，不建议冒险投资。',
    wealthInvestment: '投资理财需要谨慎，建议选择稳健型产品。',
    healthPhysical: '身体状况良好，精力充沛。',
    healthMental: '心情愉悦，压力较小。',
    healthTips: '注意保持规律作息，适量运动。',
    luckyColor: '红色',
    luckyNumber: '3',
    luckyDirection: '东方',
    luckyTime: '上午9-11点'
  },
  taurus: {
    name: '金牛座',
    icon: 'i-lucide-zodiac-taurus',
    date: '4.20-5.20',
    fortunes: { love: '★★★☆☆', career: '★★★★☆', wealth: '★★★★★' },
    loveDetail: '感情需要耐心，稳定发展',
    careerDetail: '事业稳步前进，成果显著',
    wealthDetail: '财运亨通，投资有回报',
    loveSingle: '单身金牛座感情运势平稳，需要更多耐心等待真爱。',
    loveRelationship: '恋爱中的金牛座感情稳定，但需要增加一些浪漫元素。',
    loveMarried: '已婚金牛座家庭生活温馨，适合与家人共度美好时光。',
    careerWork: '工作认真负责，会得到上级的认可和表扬。',
    careerRelationship: '与同事关系和谐，团队合作顺利。',
    careerStudy: '学习态度端正，适合深入学习专业知识。',
    wealthIncome: '正财运良好，收入稳定增长。',
    wealthExtra: '偏财运不错，可能有意外收获。',
    wealthInvestment: '投资眼光独到，适合进行长期投资。',
    healthPhysical: '身体状况稳定，但要注意饮食健康。',
    healthMental: '心情平静，适合放松身心。',
    healthTips: '注意饮食均衡，适量运动。',
    luckyColor: '绿色',
    luckyNumber: '6',
    luckyDirection: '南方',
    luckyTime: '下午2-4点'
  }
  // 其他星座数据可以继续添加...
}

// 获取星座信息
const getZodiacSign = (slug: string) => {
  return zodiacData[slug as keyof typeof zodiacData]
}

const zodiacSign = computed(() => getZodiacSign(signSlug))

// 计算整体运势等级
const overallLevel = computed(() => {
  if (!zodiacSign.value) return '一般'
  const scores = {
    love: zodiacSign.value.fortunes.love.length,
    career: zodiacSign.value.fortunes.career.length,
    wealth: zodiacSign.value.fortunes.wealth.length
  }
  const average = (scores.love + scores.career + scores.wealth) / 3
  if (average >= 4.5) return '极佳'
  if (average >= 4) return '良好'
  if (average >= 3.5) return '一般'
  return '较差'
})

const overallColor = computed(() => {
  switch (overallLevel.value) {
    case '极佳': return 'green'
    case '良好': return 'blue'
    case '一般': return 'yellow'
    default: return 'red'
  }
})

// 监听运势周期变化
watch(selectedPeriod, (newPeriod) => {
  console.log('选择的运势周期:', newPeriod)
})
</script>
