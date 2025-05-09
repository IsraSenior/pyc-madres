// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  app: {
    head: {
      title: 'Mes de las madres | Punto & Corcho',
      htmlAttrs: {
        lang: 'es',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },

  modules: ['vue3-carousel-nuxt']
})