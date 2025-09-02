<template>
  <div>
    <!-- 页面头部 -->
    <section class="py-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <UContainer>
        <div class="text-center">
          <div class="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
            <UIcon name="i-lucide-bell" class="w-12 h-12" />
          </div>
          <h1 class="text-4xl font-bold mb-4">订阅我们</h1>
          <p class="text-xl text-white/90">获取最新运势提醒和独家内容</p>
        </div>
      </UContainer>
    </section>

    <!-- 订阅选项 -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- 邮件订阅 -->
            <UCard class="text-center">
              <template #header>
                <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <UIcon name="i-lucide-mail" class="w-10 h-10 text-white" />
                </div>
                <h2 class="text-2xl font-bold text-gray-900 mb-2">邮件订阅</h2>
                <p class="text-gray-600">每日获取最新星座运势和命理资讯</p>
              </template>
              
              <div class="space-y-6">
                <div class="space-y-4">
                  <div class="flex items-center space-x-3">
                    <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-green-500" />
                    <span class="text-gray-700">每日星座运势推送</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-green-500" />
                    <span class="text-gray-700">独家命理文章</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-green-500" />
                    <span class="text-gray-700">重要星象提醒</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-green-500" />
                    <span class="text-gray-700">免费塔罗占卜</span>
                  </div>
                </div>
                
                <UForm :state="emailForm" @submit="submitEmailSubscription">
                  <div class="space-y-4">
                    <UInput
                      v-model="emailForm.email"
                      placeholder="输入您的邮箱地址"
                      type="email"
                      size="lg"
                      required
                    />
                    <UButton
                      type="submit"
                      color="blue"
                      variant="solid"
                      size="lg"
                      class="w-full"
                      :loading="emailSubmitting"
                    >
                      {{ emailSubmitting ? '订阅中...' : '立即订阅' }}
                    </UButton>
                  </div>
                </UForm>
                
                <p class="text-xs text-gray-500">
                  我们承诺不会向第三方分享您的邮箱信息，您可以随时取消订阅
                </p>
              </div>
            </UCard>

            <!-- 微信关注 -->
            <UCard class="text-center">
              <template #header>
                <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <UIcon name="i-simple-icons-wechat" class="w-10 h-10 text-white" />
                </div>
                <h2 class="text-2xl font-bold text-gray-900 mb-2">微信关注</h2>
                <p class="text-gray-600">加入我们的微信社群，获取更多互动</p>
              </template>
              
              <div class="space-y-6">
                <div class="space-y-4">
                  <div class="flex items-center space-x-3">
                    <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-green-500" />
                    <span class="text-gray-700">实时运势提醒</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-green-500" />
                    <span class="text-gray-700">社群互动交流</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-green-500" />
                    <span class="text-gray-700">专属优惠活动</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-green-500" />
                    <span class="text-gray-700">一对一咨询预约</span>
                  </div>
                </div>
                
                <!-- 微信二维码 -->
                <div class="bg-gray-50 rounded-lg p-6">
                  <div class="w-48 h-48 mx-auto bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center mb-4">
                    <div class="text-center">
                      <UIcon name="i-lucide-qr-code" class="w-16 h-16 text-gray-400 mx-auto mb-2" />
                      <p class="text-sm text-gray-500">微信二维码</p>
                    </div>
                  </div>
                  <p class="text-sm text-gray-600">扫描二维码关注公众号</p>
                  <p class="text-sm font-semibold text-gray-900">星语小站</p>
                </div>
                
                <UButton
                  color="green"
                  variant="outline"
                  size="lg"
                  class="w-full"
                  @click="copyWechatId"
                >
                  <UIcon name="i-lucide-copy" class="w-4 h-4 mr-2" />
                  复制微信号：starry_horoscope
                </UButton>
              </div>
            </UCard>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 订阅统计 -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">订阅数据</h2>
          <p class="text-lg text-gray-600">已有数万用户选择信任我们</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-3xl font-bold text-purple-600 mb-2">50,000+</div>
            <p class="text-gray-600">邮件订阅用户</p>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-green-600 mb-2">30,000+</div>
            <p class="text-gray-600">微信关注用户</p>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <p class="text-gray-600">用户满意度</p>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <p class="text-gray-600">在线服务</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 用户评价 -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">用户评价</h2>
          <p class="text-lg text-gray-600">听听用户们怎么说</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UCard class="text-center">
            <div class="flex justify-center mb-4">
              <div class="flex space-x-1">
                <UIcon v-for="i in 5" :key="i" name="i-lucide-star" class="w-5 h-5 text-yellow-400 fill-current" />
              </div>
            </div>
            <p class="text-gray-600 mb-4">
              "每天都能收到最新的星座运势，内容很专业，解读也很准确，真的很喜欢！"
            </p>
            <div class="flex items-center justify-center space-x-2">
              <UAvatar src="/avatars/user1.jpg" alt="用户头像" />
              <div class="text-left">
                <p class="font-semibold text-gray-900">小星星</p>
                <p class="text-sm text-gray-500">白羊座</p>
              </div>
            </div>
          </UCard>

          <UCard class="text-center">
            <div class="flex justify-center mb-4">
              <div class="flex space-x-1">
                <UIcon v-for="i in 5" :key="i" name="i-lucide-star" class="w-5 h-5 text-yellow-400 fill-current" />
              </div>
            </div>
            <p class="text-gray-600 mb-4">
              "塔罗占卜功能很实用，解读详细，帮助我解决了很多困惑，推荐给朋友们！"
            </p>
            <div class="flex items-center justify-center space-x-2">
              <UAvatar src="/avatars/user2.jpg" alt="用户头像" />
              <div class="text-left">
                <p class="font-semibold text-gray-900">月亮女神</p>
                <p class="text-sm text-gray-500">巨蟹座</p>
              </div>
            </div>
          </UCard>

          <UCard class="text-center">
            <div class="flex justify-center mb-4">
              <div class="flex space-x-1">
                <UIcon v-for="i in 5" :key="i" name="i-lucide-star" class="w-5 h-5 text-yellow-400 fill-current" />
              </div>
            </div>
            <p class="text-gray-600 mb-4">
              "文章内容很丰富，从基础到进阶都有，学习了很多命理知识，感谢星语小站！"
            </p>
            <div class="flex items-center justify-center space-x-2">
              <UAvatar src="/avatars/user3.jpg" alt="用户头像" />
              <div class="text-left">
                <p class="font-semibold text-gray-900">智慧之光</p>
                <p class="text-sm text-gray-500">处女座</p>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- 常见问题 -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">常见问题</h2>
            <p class="text-lg text-gray-600">解答您关于订阅的疑问</p>
          </div>

          <UAccordion :items="faqItems" />
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO配置
useSeoMeta({
  title: '订阅我们 - 星语小站',
  description: '订阅星语小站，获取最新星座运势、塔罗占卜和命理知识',
  ogTitle: '订阅我们 - 星语小站',
  ogDescription: '获取最新运势提醒和独家内容'
})

// 邮件订阅表单
const emailForm = ref({
  email: ''
})

const emailSubmitting = ref(false)

// 提交邮件订阅
const submitEmailSubscription = async () => {
  if (!emailForm.value.email) {
    useToast().add({
      title: '请输入邮箱地址',
      color: 'red'
    })
    return
  }
  
  emailSubmitting.value = true
  
  try {
    // 这里可以集成实际的邮件订阅服务
    await new Promise(resolve => setTimeout(resolve, 2000)) // 模拟API调用
    
    useToast().add({
      title: '订阅成功！',
      description: '感谢您的订阅，我们将定期为您发送最新运势',
      color: 'green'
    })
    
    emailForm.value.email = ''
  } catch (error) {
    useToast().add({
      title: '订阅失败',
      description: '请稍后重试',
      color: 'red'
    })
  } finally {
    emailSubmitting.value = false
  }
}

// 复制微信号
const copyWechatId = async () => {
  try {
    await navigator.clipboard.writeText('starry_horoscope')
    useToast().add({
      title: '微信号已复制',
      description: '微信号已复制到剪贴板',
      color: 'green'
    })
  } catch (error) {
    useToast().add({
      title: '复制失败',
      description: '请手动复制微信号：starry_horoscope',
      color: 'red'
    })
  }
}

// 常见问题
const faqItems = [
  {
    label: '订阅是免费的吗？',
    content: '是的，我们的邮件订阅和微信关注都是完全免费的，您可以随时取消订阅。'
  },
  {
    label: '多久会收到一次推送？',
    content: '邮件订阅通常是每日推送，包含当日星座运势和重要星象提醒。微信推送频率会根据内容重要性调整。'
  },
  {
    label: '如何取消订阅？',
    content: '邮件订阅可以在邮件底部的取消订阅链接中操作，微信关注可以直接取消关注公众号。'
  },
  {
    label: '会收到垃圾邮件吗？',
    content: '我们承诺不会发送垃圾邮件，所有内容都是经过精心筛选的优质内容。'
  },
  {
    label: '个人信息安全吗？',
    content: '我们严格遵守隐私政策，不会向第三方分享您的个人信息。'
  }
]
</script>
