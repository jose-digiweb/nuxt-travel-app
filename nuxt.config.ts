// Dependencies
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ['@nuxthub/core', '@nuxt/icon'],

  css: ['~/assets/css/main.css'],

  devtools: { enabled: true },

  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-03-01',

  hub: {},

  vite: {
    plugins: [
      tailwindcss()
    ]
  }
})
