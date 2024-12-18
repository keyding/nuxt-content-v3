// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  content: {
    database: {
      type: 'd1',
      binding: 'dcce0bd8-5f1c-403a-acea-6f67d72ff5a3'
    }
  },
  routeRules: {
    '/': { prerender: true }
  }
})
