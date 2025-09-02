<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>

<script setup lang="ts">
// 全局SEO配置
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 星语小站` : '星语小站 - 每日星座运势与命理解读'
  }
})
</script>

<style>
/* 全局样式 */
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
