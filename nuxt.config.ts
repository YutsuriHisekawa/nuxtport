export default {
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  app: {
    head: {
      title: 'Tetsuya.dev',
      link: [
        { rel: 'icon', type: 'image/png', href: '#' },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    }
  }
}