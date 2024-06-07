// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    "@nuxt/content",
    "nuxt-og-image"
  ],
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('swiper-')
    }
  },
  
  devtools: { enabled: true },

  site: {
    url: 'https://tonygreen.dev',
  }
})