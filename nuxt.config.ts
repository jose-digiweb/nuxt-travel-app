import './app/lib/env'

// Dependencies
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxthub/core',
    '@nuxtjs/color-mode',
    '@vee-validate/nuxt',
    '@formkit/auto-animate/nuxt',
  ],

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
  sourcemap: {
    client: false,
  },
})
