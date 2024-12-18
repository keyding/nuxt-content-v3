// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxthub/core'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  content: {
    database: {
      type: 'd1',
      binding: '2b6a06ed-ebf4-4d6f-a218-bda0b7fc8d87'
    }
  },
  hub: {
    database: true
  }
})