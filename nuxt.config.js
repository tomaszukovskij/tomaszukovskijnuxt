import lt from './i18n/lt'
import en from './i18n/en'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tomas Žukovskij - artist from Vilnius',
    htmlAttrs: {
      lang: 'lt',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tomas Žukovskij - photography artis from Vilnius, Lithuania.' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-ET0MVFZ1EP',
        async: true,
      },
      {
        src: 'plugins/gtag.js',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/base'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-gtag'
  ],

  // axios
  axios: {
    baseURL: 'https://tomaszukovskij.com/admin/wp-json'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
    '@nuxtjs/i18n',
    'nuxt-mq',
    'nuxt-facebook-pixel-module',
    '@nuxtjs/sitemap',
    'nuxt-gtag'
  ],

  facebook: {
    /* module options */
    pixelId: '687096992841398',
    autoPageView: true,
    disabled: false
  },

  i18n: {
    locales: [
      {
        code: 'lt',
        name: 'LT'
      },
      {
        code: 'en',
        name: 'EN'
      },
    ],
    defaultLocale: 'lt',
    vueI18n: {
      fallbackLocale: 'lt',
      messages: {
        lt,
        en,
      }
    },
    detectBrowserLanguage: false,
  },

  googleAnalytics: {
    id: 'G-384756415'
  },

  'mq': {
    defaultBreakpoint: 'sm',
    breakpoints: {
      sm: 576,
      md: 1024,
      lg: Infinity,
    }
  },

  apollo: {
    clientConfigs: {
      default: "~/apollo.js"
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  },

  server: {
    port: 4500,
  },

  sitemap: {
    hostname: 'https://tomaszukovskij.com',
    gzip: true,
    exclude: [
      '/secret',
      '/admin/**'
    ],
  }
}
