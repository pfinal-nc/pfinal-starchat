<template>
  <div>
    <!-- 页面头部 -->
    <section class="py-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <UContainer>
        <div class="text-center">
          <div class="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
            <UIcon name="i-lucide-info" class="w-12 h-12" />
          </div>
          <h1 class="text-4xl font-bold mb-4">关于我们</h1>
          <p class="text-xl text-white/90">专业的占星命理平台，为您揭示命运的奥秘</p>
        </div>
      </UContainer>
    </section>

    <!-- 关于我们 -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-6">星语小站</h2>
              <div class="space-y-4 text-gray-600">
                <p>
                  星语小站成立于2024年，是一个专注于占星命理的专业平台。我们致力于为用户提供准确、专业的星座运势、塔罗占卜和命理知识服务。
                </p>
                <p>
                  我们的团队由资深占星师、塔罗牌解读师和命理专家组成，拥有丰富的经验和深厚的专业知识。我们相信每个人都有自己的命运轨迹，通过专业的解读和指导，可以帮助您更好地了解自己，把握人生方向。
                </p>
                <p>
                  我们坚持"专业、准确、贴心"的服务理念，为用户提供个性化的命理服务，让每个人都能在星语的指引下，找到属于自己的光明道路。
                </p>
              </div>
            </div>
            
            <div class="relative">
              <div class="w-full h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                <div class="text-center">
                  <UIcon name="i-lucide-star" class="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <p class="text-lg font-semibold text-gray-900">星语小站</p>
                  <p class="text-gray-600">揭示命运的奥秘</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 我们的优势 -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">我们的优势</h2>
          <p class="text-lg text-gray-600">为什么选择星语小站</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <UIcon name="i-lucide-award" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">专业团队</h3>
            <p class="text-gray-600">资深占星师和命理专家，拥有丰富的解读经验</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <UIcon name="i-lucide-target" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">准确解读</h3>
            <p class="text-gray-600">基于传统占星学和现代解读方法，提供准确的运势分析</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
              <UIcon name="i-lucide-heart" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">贴心服务</h3>
            <p class="text-gray-600">24/7在线服务，为用户提供个性化的命理指导</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <UIcon name="i-lucide-shield-check" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">隐私保护</h3>
            <p class="text-gray-600">严格保护用户隐私，确保个人信息安全</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 服务内容 -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">服务内容</h2>
          <p class="text-lg text-gray-600">我们为您提供的专业服务</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UCard class="text-center">
            <template #header>
              <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <UIcon name="i-lucide-zodiac-aries" class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900">星座运势</h3>
            </template>
            
            <div class="space-y-3">
              <p class="text-gray-600">每日、每周、每月星座运势解读，包含爱情、事业、财运等全方位分析。</p>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• 12星座详细运势</li>
                <li>• 运势评分系统</li>
                <li>• 幸运信息提醒</li>
                <li>• 个性化建议</li>
              </ul>
            </div>
          </UCard>

          <UCard class="text-center">
            <template #header>
              <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <UIcon name="i-lucide-cards" class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900">塔罗占卜</h3>
            </template>
            
            <div class="space-y-3">
              <p class="text-gray-600">专业的塔罗牌解读服务，多种牌阵选择，为您解答人生困惑。</p>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• 多种牌阵选择</li>
                <li>• 详细解读说明</li>
                <li>• 在线占卜服务</li>
                <li>• 一对一咨询</li>
              </ul>
            </div>
          </UCard>

          <UCard class="text-center">
            <template #header>
              <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <UIcon name="i-lucide-book-open" class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900">命理知识</h3>
            </template>
            
            <div class="space-y-3">
              <p class="text-gray-600">丰富的命理知识库，帮助您深入了解星座和占星术的奥秘。</p>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• 专业命理文章</li>
                <li>• 星座知识科普</li>
                <li>• 占星术教程</li>
                <li>• 实用建议</li>
              </ul>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- 团队介绍 -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">专业团队</h2>
          <p class="text-lg text-gray-600">资深占星师和命理专家</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UCard class="text-center">
            <template #header>
              <div class="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                <UIcon name="i-lucide-user" class="w-12 h-12 text-purple-600" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900">星辰大师</h3>
              <p class="text-gray-500">首席占星师</p>
            </template>
            
            <p class="text-gray-600">
              拥有20年占星经验，精通西方占星学和东方命理学，擅长星座运势解读和人生规划指导。
            </p>
          </UCard>

          <UCard class="text-center">
            <template #header>
              <div class="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center">
                <UIcon name="i-lucide-user" class="w-12 h-12 text-blue-600" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900">月亮女神</h3>
              <p class="text-gray-500">塔罗牌专家</p>
            </template>
            
            <p class="text-gray-600">
              专业塔罗牌解读师，擅长多种牌阵解读，能够准确洞察问题本质，提供有效的指导建议。
            </p>
          </UCard>

          <UCard class="text-center">
            <template #header>
              <div class="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center">
                <UIcon name="i-lucide-user" class="w-12 h-12 text-green-600" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900">智慧之光</h3>
              <p class="text-gray-500">命理学者</p>
            </template>
            
            <p class="text-gray-600">
              资深命理学者，专注于命理知识传播和教育，致力于让更多人了解命理学的奥秘。
            </p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- 联系我们 -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">联系我们</h2>
            <p class="text-lg text-gray-600">有任何问题或建议，欢迎联系我们</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- 联系信息 -->
            <div class="space-y-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">联系方式</h3>
              
              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <UIcon name="i-lucide-mail" class="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">邮箱</p>
                    <p class="text-gray-600">contact@starry.site</p>
                  </div>
                </div>
                
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <UIcon name="i-simple-icons-wechat" class="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">微信</p>
                    <p class="text-gray-600">starry_horoscope</p>
                  </div>
                </div>
                
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <UIcon name="i-lucide-phone" class="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">客服热线</p>
                    <p class="text-gray-600">400-123-4567</p>
                  </div>
                </div>
                
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <UIcon name="i-lucide-clock" class="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">服务时间</p>
                    <p class="text-gray-600">周一至周日 9:00-21:00</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 联系表单 -->
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">留言咨询</h3>
              
              <UForm :state="contactForm" @submit="submitContact">
                <div class="space-y-4">
                  <UInput
                    v-model="contactForm.name"
                    placeholder="您的姓名"
                    required
                  />
                  <UInput
                    v-model="contactForm.email"
                    placeholder="邮箱地址"
                    type="email"
                    required
                  />
                  <UInput
                    v-model="contactForm.phone"
                    placeholder="联系电话"
                    type="tel"
                  />
                  <UTextarea
                    v-model="contactForm.message"
                    placeholder="留言内容"
                    rows="4"
                    required
                  />
                  <UButton
                    type="submit"
                    color="purple"
                    variant="solid"
                    class="w-full"
                    :loading="contactSubmitting"
                  >
                    {{ contactSubmitting ? '发送中...' : '发送留言' }}
                  </UButton>
                </div>
              </UForm>
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
  title: '关于我们 - 星语小站',
  description: '了解星语小站，专业的占星命理平台，为您揭示命运的奥秘',
  ogTitle: '关于我们 - 星语小站',
  ogDescription: '专业的占星命理平台'
})

// 联系表单
const contactForm = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const contactSubmitting = ref(false)

// 提交联系表单
const submitContact = async () => {
  if (!contactForm.value.name || !contactForm.value.email || !contactForm.value.message) {
    useToast().add({
      title: '请填写完整信息',
      color: 'red'
    })
    return
  }
  
  contactSubmitting.value = true
  
  try {
    // 这里可以集成实际的表单提交服务
    await new Promise(resolve => setTimeout(resolve, 2000)) // 模拟API调用
    
    useToast().add({
      title: '留言发送成功！',
      description: '我们会尽快回复您的留言',
      color: 'green'
    })
    
    // 重置表单
    contactForm.value = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  } catch (error) {
    useToast().add({
      title: '发送失败',
      description: '请稍后重试',
      color: 'red'
    })
  } finally {
    contactSubmitting.value = false
  }
}
</script>
