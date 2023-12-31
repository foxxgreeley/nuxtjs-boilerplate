// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
  ],
  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: 'light',
    classSuffix: '',
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
        },
      ],
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ],
    },
  },
})

