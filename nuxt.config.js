export default {
  ssr: true,

  // Global door
  server: {
    port: 8080, // default: 3000
    host: 'localhost' // default: localhost
  },

  // Vue config
  vue: {
    config: {
      productionTip: true,
      devtools: true
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'FiqueOn',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500,800,900&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://image.nuxtjs.org/getting-started/installation
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Configuration for images
  image: {
    // put here your domain's, receives array of strings
    // domains: ['images.unsplash.com'],
    // alias: {
    //   unsplash: 'https://images.unsplash.com'
    // },
    dir: 'static/images',
    // // Generate images to `/_nuxt/image/file.png`
    staticFilename: '[publicPath]/images/[name]-[hash][ext]',
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280
    },
  }
}
