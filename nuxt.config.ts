// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  compatibilityDate: '2024-12-19',
  devtools: { enabled: true },
  content: {
    database: {
      type: 'd1',
      binding: 'DB'
    }
  }
})