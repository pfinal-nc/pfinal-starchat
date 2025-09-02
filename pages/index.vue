<template>
  <div>
    <!-- Hero 大横幅 -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">今日星座运势 🌟</h1>
        <p class="hero-subtitle">点击查看你的专属运势</p>
        <UButton
          to="/horoscope"
          color="white"
          variant="solid"
          size="lg"
          class="hero-button"
        >
          立即查看
        </UButton>
      </div>
    </section>

    <!-- 精选文章 -->
    <section class="featured-section">
      <div class="container mx-auto px-4 py-12">
        <h2 class="section-title">精选文章</h2>
        <div class="featured-grid">
          <div
            v-for="article in featuredArticles"
            :key="article.slug"
            class="featured-card"
            @click="navigateTo(`/articles/${article.slug}`)"
          >
            <div class="card-image">
              <UIcon :name="article.icon" class="w-12 h-12 text-purple-600" />
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ article.title }}</h3>
              <p class="card-description">{{ article.excerpt }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 趣味互动 / 社区 -->
    <section class="community-section">
      <div class="container mx-auto px-4 py-12">
        <h2 class="section-title">趣味互动 🌙</h2>
        <div class="fun-links">
          <UButton
            to="/tarot"
            color="blue"
            variant="soft"
            size="lg"
            class="fun-link"
          >
            <UIcon name="i-lucide-cards" class="w-5 h-5 mr-2" />
            抽一张塔罗牌
          </UButton>
          <UButton
            to="/horoscope"
            color="purple"
            variant="soft"
            size="lg"
            class="fun-link"
          >
            <UIcon name="i-lucide-heart" class="w-5 h-5 mr-2" />
            星座配对测试
          </UButton>
          <UButton
            to="/subscribe"
            color="green"
            variant="soft"
            size="lg"
            class="fun-link"
          >
            <UIcon name="i-lucide-message-circle" class="w-5 h-5 mr-2" />
            留言分享你的故事
          </UButton>
        </div>
      </div>
    </section>

    <!-- 今日运势快速查看 -->
    <section class="quick-horoscope">
      <div class="container mx-auto px-4 py-12">
        <h2 class="section-title">今日运势快速查看</h2>
        <div class="zodiac-grid">
          <div
            v-for="sign in zodiacSigns"
            :key="sign.slug"
            class="zodiac-card"
            @click="navigateTo(`/horoscope/${sign.slug}`)"
          >
            <div class="zodiac-icon">
              <UIcon :name="sign.icon" class="w-8 h-8" />
            </div>
            <h3 class="zodiac-name">{{ sign.name }}</h3>
            <p class="zodiac-date">{{ sign.date }}</p>
            <div class="zodiac-fortune">
              <span class="fortune-text">{{ sign.fortune }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 邮件订阅 -->
    <section class="subscribe-section">
      <div class="container mx-auto px-4 py-12">
        <div class="subscribe-content">
          <h2 class="subscribe-title">订阅我们</h2>
          <p class="subscribe-description">获取最新运势提醒和独家内容</p>
          <div class="subscribe-form">
            <UInput
              v-model="email"
              placeholder="输入您的邮箱地址"
              type="email"
              size="lg"
              class="subscribe-input"
            />
            <UButton
              color="purple"
              variant="solid"
              size="lg"
              @click="subscribe"
              :loading="subscribing"
            >
              {{ subscribing ? '订阅中...' : '立即订阅' }}
            </UButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO配置
useSeoMeta({
  title: '星语小站 - 每日星座运势与命理解读',
  description: '专业的星座运势、塔罗占卜、命理解读平台，为您提供每日星座运势查询和命理知识',
  ogTitle: '星语小站 - 每日星座运势与命理解读',
  ogDescription: '专业的星座运势、塔罗占卜、命理解读平台'
})

// 邮箱订阅
const email = ref('')
const subscribing = ref(false)

// 精选文章数据
const featuredArticles = [
  {
    slug: 'aries-today',
    title: '白羊座今日运势',
    excerpt: '爱情、财富、事业运势全面解析，让你一目了然~',
    icon: 'i-lucide-zodiac-aries'
  },
  {
    slug: 'tarot-weekly',
    title: '塔罗牌周运解析',
    excerpt: '抽一张牌，看看这周的好运和注意事项。',
    icon: 'i-lucide-cards'
  },
  {
    slug: 'zodiac-compatibility',
    title: '星座配对趣闻',
    excerpt: '十二星座谁最配谁？趣味分析告诉你答案~',
    icon: 'i-lucide-heart'
  }
]

// 星座数据
const zodiacSigns = [
  { name: '白羊座', slug: 'aries', date: '3.21-4.19', fortune: '今日运势不错', icon: 'i-lucide-zodiac-aries' },
  { name: '金牛座', slug: 'taurus', date: '4.20-5.20', fortune: '财运亨通', icon: 'i-lucide-zodiac-taurus' },
  { name: '双子座', slug: 'gemini', date: '5.21-6.21', fortune: '沟通顺畅', icon: 'i-lucide-zodiac-gemini' },
  { name: '巨蟹座', slug: 'cancer', date: '6.22-7.22', fortune: '家庭和睦', icon: 'i-lucide-zodiac-cancer' },
  { name: '狮子座', slug: 'leo', date: '7.23-8.22', fortune: '领导力强', icon: 'i-lucide-zodiac-leo' },
  { name: '处女座', slug: 'virgo', date: '8.23-9.22', fortune: '细节完美', icon: 'i-lucide-zodiac-virgo' },
  { name: '天秤座', slug: 'libra', date: '9.23-10.23', fortune: '平衡和谐', icon: 'i-lucide-zodiac-libra' },
  { name: '天蝎座', slug: 'scorpio', date: '10.24-11.22', fortune: '洞察力强', icon: 'i-lucide-zodiac-scorpio' },
  { name: '射手座', slug: 'sagittarius', date: '11.23-12.21', fortune: '自由奔放', icon: 'i-lucide-zodiac-sagittarius' },
  { name: '摩羯座', slug: 'capricorn', date: '12.22-1.19', fortune: '稳重踏实', icon: 'i-lucide-zodiac-capricorn' },
  { name: '水瓶座', slug: 'aquarius', date: '1.20-2.18', fortune: '创新思维', icon: 'i-lucide-zodiac-aquarius' },
  { name: '双鱼座', slug: 'pisces', date: '2.19-3.20', fortune: '直觉敏锐', icon: 'i-lucide-zodiac-pisces' }
]

// 订阅功能
const subscribe = async () => {
  if (!email.value) {
    useToast().add({
      title: '请输入邮箱地址',
      color: 'red'
    })
    return
  }
  
  subscribing.value = true
  
  try {
    await new Promise(resolve => setTimeout(resolve, 2000))
    useToast().add({
      title: '订阅成功！',
      description: '感谢您的订阅，我们将定期为您发送最新运势',
      color: 'green'
    })
    email.value = ''
  } catch (error) {
    useToast().add({
      title: '订阅失败',
      description: '请稍后重试',
      color: 'red'
    })
  } finally {
    subscribing.value = false
  }
}
</script>

<style scoped>
/* Hero 大横幅 */
.hero-section {
  background: linear-gradient(135deg, #ffe4e1 0%, #f7d9ff 100%);
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #333;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1200&q=80') no-repeat center/cover;
  opacity: 0.3;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-button {
  font-size: 1.1rem;
  padding: 0.75rem 2rem;
}

/* 精选文章 */
.featured-section {
  background: #fff;
  padding: 3rem 0;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #333;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.featured-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

.featured-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
}

.card-image {
  height: 150px;
  background: linear-gradient(135deg, #f7d9ff 0%, #ffe4e1 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-content {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
}

.card-description {
  color: #666;
  line-height: 1.5;
}

/* 趣味互动 */
.community-section {
  background: #f0f0ff;
  padding: 3rem 0;
  text-align: center;
}

.fun-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.fun-link {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}

/* 星座网格 */
.quick-horoscope {
  background: #fff;
  padding: 3rem 0;
}

.zodiac-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.zodiac-card {
  background: #fff;
  border: 2px solid #f7d9ff;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.zodiac-card:hover {
  transform: translateY(-3px);
  border-color: #d9f0ff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.zodiac-icon {
  margin-bottom: 1rem;
}

.zodiac-name {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
}

.zodiac-date {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
}

.zodiac-fortune {
  background: #f0f0ff;
  padding: 0.5rem;
  border-radius: 8px;
}

.fortune-text {
  font-size: 0.9rem;
  color: #333;
}

/* 订阅区域 */
.subscribe-section {
  background: linear-gradient(135deg, #f7d9ff 0%, #ffe4e1 100%);
  padding: 3rem 0;
}

.subscribe-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.subscribe-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
}

.subscribe-description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #666;
}

.subscribe-form {
  display: flex;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
}

.subscribe-input {
  flex: 1;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .featured-grid {
    grid-template-columns: 1fr;
  }
  
  .zodiac-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .subscribe-form {
    flex-direction: column;
  }
  
  .fun-links {
    flex-direction: column;
    align-items: center;
  }
}
</style>
