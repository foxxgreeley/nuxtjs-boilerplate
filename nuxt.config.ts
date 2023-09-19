// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
      modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxtjs/eslint-module',
      ],
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
  })

