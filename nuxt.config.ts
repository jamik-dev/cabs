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

  colorMode: {
    preference: 'light'
  }
});
