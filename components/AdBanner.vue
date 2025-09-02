<template>
  <div class="ad-banner" :class="[`ad-banner--${variant}`, { 'ad-banner--sticky': sticky }]">
    <div class="ad-banner__content">
      <!-- 广告标识 -->
      <div class="ad-banner__label">
        <UIcon name="i-lucide-megaphone" class="w-4 h-4" />
        <span class="text-xs">广告</span>
      </div>
      
      <!-- 广告内容 -->
      <div class="ad-banner__main">
        <div v-if="adData" class="ad-banner__info">
          <h4 class="ad-banner__title">{{ adData.title }}</h4>
          <p class="ad-banner__description">{{ adData.description }}</p>
          <div class="ad-banner__meta">
            <UBadge v-if="adData.category" :color="adData.categoryColor" variant="soft" size="xs">
              {{ adData.category }}
            </UBadge>
            <span class="ad-banner__price" v-if="adData.price">{{ adData.price }}</span>
          </div>
        </div>
        
        <!-- 占位内容 -->
        <div v-else class="ad-banner__placeholder">
          <div class="w-full h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
            <div class="text-center">
              <UIcon name="i-lucide-image" class="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <p class="text-sm text-gray-500">广告位</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 行动按钮 -->
      <UButton
        v-if="adData"
        :to="adData.link"
        target="_blank"
        rel="noopener noreferrer"
        color="purple"
        variant="solid"
        size="sm"
        class="w-full mt-3"
      >
        {{ adData.buttonText || '立即查看' }}
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
interface AdData {
  title: string
  description: string
  link: string
  category?: string
  categoryColor?: string
  price?: string
  buttonText?: string
}

interface Props {
  variant?: 'sidebar' | 'inline' | 'banner'
  sticky?: boolean
  adData?: AdData
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'sidebar',
  sticky: false
})

// 示例广告数据
const sampleAdData: AdData = {
  title: '专业塔罗牌解读',
  description: '资深占星师在线解读，揭示命运奥秘',
  link: 'https://example.com/tarot',
  category: '塔罗占卜',
  categoryColor: 'purple',
  price: '¥99起',
  buttonText: '立即咨询'
}
</script>

<style scoped>
.ad-banner {
  @apply bg-white rounded-lg border border-gray-200 overflow-hidden;
}

.ad-banner--sidebar {
  @apply p-4;
}

.ad-banner--inline {
  @apply p-6 my-6;
}

.ad-banner--banner {
  @apply p-4 bg-gradient-to-r from-purple-50 to-pink-50;
}

.ad-banner--sticky {
  @apply sticky top-20;
}

.ad-banner__label {
  @apply flex items-center space-x-1 text-gray-500 mb-2;
}

.ad-banner__title {
  @apply font-semibold text-gray-900 mb-1;
}

.ad-banner__description {
  @apply text-sm text-gray-600 mb-3;
}

.ad-banner__meta {
  @apply flex items-center justify-between;
}

.ad-banner__price {
  @apply text-sm font-semibold text-green-600;
}

.ad-banner__placeholder {
  @apply w-full;
}
</style>
