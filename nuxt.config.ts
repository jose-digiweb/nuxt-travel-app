import env from './lib/env'

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

  runtimeConfig: {
    NODE_ENV: env.NODE_ENV,
    TURSO_DATABASE_URL: env.TURSO_DATABASE_URL,
    TURSO_AUTH_TOKEN: env.TURSO_AUTH_TOKEN,
    BETTER_AUTH_SECRET: env.BETTER_AUTH_SECRET,
    BETTER_AUTH_URL: env.BETTER_AUTH_URL,
    AUTH_GITHUB_CLIENT_ID: env.AUTH_GITHUB_CLIENT_ID,
    AUTH_GITHUB_CLIENT_SECRET: env.AUTH_GITHUB_CLIENT_SECRET,
    NUXT_HUB_PROJECT_KEY: env.NUXT_HUB_PROJECT_KEY,
  },
})
