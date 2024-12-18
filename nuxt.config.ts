// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxthub/core'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  content: {
    database: {
      type: 'd1',
      binding: 'nuxt-content-v32'
    }
  },
  hub: {
    database: true
  }
})