// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js'
  },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper'
  ],

  runtimeConfig: {
    public: {
      BASE_URL: process.env.API_BASE_URL || 'https://admin.verel-auto.uz'
    },
  },

  colorMode: {
    preference: 'light'
  },

  compatibilityDate: '2024-07-05'
});