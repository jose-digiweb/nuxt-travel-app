// Dependencies
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxthub/core', '@nuxt/icon', '@nuxtjs/color-mode', '@pinia/nuxt'],

  css: ['~/assets/css/main.css'],

  devtools: { enabled: true },

  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-03-01',

  hub: {},

  vite: {
    plugins: [tailwindcss()],
  },
  colorMode: {
    dataValue: 'theme',
  },
  nitro: {
    experimental: {
      openAPI: true,
    },
  },
})
