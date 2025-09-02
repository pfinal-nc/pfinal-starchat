<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
    <!-- 导航栏 -->
    <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <UContainer>
        <nav class="flex items-center justify-between h-16">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <UIcon name="i-lucide-star" class="w-5 h-5 text-white" />
            </div>
            <span class="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              星语小站
            </span>
          </NuxtLink>

          <!-- 导航菜单 -->
          <UNavigationMenu :items="navigationItems" class="hidden md:flex" />

          <!-- 移动端菜单按钮 -->
          <UButton
            icon="i-lucide-menu"
            color="gray"
            variant="ghost"
            class="md:hidden"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          />
        </nav>

        <!-- 移动端菜单 -->
        <div v-if="isMobileMenuOpen" class="md:hidden py-4 border-t border-gray-200">
          <div class="space-y-2">
            <NuxtLink
              v-for="item in navigationItems"
              :key="item.label"
              :to="item.to"
              class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              @click="isMobileMenuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>
      </UContainer>
    </header>

    <!-- 主内容区 -->
    <main>
      <slot />
    </main>

    <!-- 页脚 -->
    <footer class="bg-gray-900 text-white mt-20">
      <UContainer>
        <div class="py-12">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <!-- 站点信息 -->
            <div class="col-span-1 md:col-span-2">
              <div class="flex items-center space-x-2 mb-4">
                <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <UIcon name="i-lucide-star" class="w-5 h-5 text-white" />
                </div>
                <span class="text-xl font-bold">星语小站</span>
              </div>
              <p class="text-gray-400 mb-4">
                专业的星座运势、塔罗占卜、命理解读平台，为您提供每日星座运势查询和命理知识。
              </p>
              <div class="flex space-x-4">
                <UButton
                  icon="i-simple-icons-wechat"
                  color="green"
                  variant="ghost"
                  size="sm"
                >
                  关注微信
                </UButton>
                <UButton
                  icon="i-simple-icons-weibo"
                  color="red"
                  variant="ghost"
                  size="sm"
                >
                  关注微博
                </UButton>
              </div>
            </div>

            <!-- 快速链接 -->
            <div>
              <h3 class="text-lg font-semibold mb-4">快速链接</h3>
              <ul class="space-y-2">
                <li>
                  <NuxtLink to="/horoscope" class="text-gray-400 hover:text-white transition-colors">
                    星座运势
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/tarot" class="text-gray-400 hover:text-white transition-colors">
                    塔罗占卜
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/articles" class="text-gray-400 hover:text-white transition-colors">
                    命理文章
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/about" class="text-gray-400 hover:text-white transition-colors">
                    关于我们
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <!-- 联系方式 -->
            <div>
              <h3 class="text-lg font-semibold mb-4">联系我们</h3>
              <ul class="space-y-2">
                <li class="flex items-center space-x-2 text-gray-400">
                  <UIcon name="i-lucide-mail" class="w-4 h-4" />
                  <span>contact@starry.site</span>
                </li>
                <li class="flex items-center space-x-2 text-gray-400">
                  <UIcon name="i-lucide-phone" class="w-4 h-4" />
                  <span>400-123-4567</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- 版权信息 -->
          <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 星语小站. 保留所有权利.</p>
          </div>
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<script setup lang="ts">
// 移动端菜单状态
const isMobileMenuOpen = ref(false)

// 导航菜单项
const navigationItems = [
  {
    label: '首页',
    to: '/',
    icon: 'i-lucide-home'
  },
  {
    label: '星座运势',
    to: '/horoscope',
    icon: 'i-lucide-zodiac-aries'
  },
  {
    label: '塔罗占卜',
    to: '/tarot',
    icon: 'i-lucide-cards'
  },
  {
    label: '命理文章',
    to: '/articles',
    icon: 'i-lucide-book-open'
  },
  {
    label: '关于我们',
    to: '/about',
    icon: 'i-lucide-info'
  }
]
</script>
