export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Trockentrenntoilette',
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@/modules/sitemapRouteGenerator'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-purgecss'
  ],

  // Sitemap
  sitemap: {
    hostname: 'https://www.trockentrenntoilette.com',
    gzip: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    optimizeCSS: true,
    // html:{
    //   minify:{
    //     collapseBooleanAttributes: true,
    //     decodeEntities: true,
    //     minifyCSS: true,
    //     minifyJS: true,
    //     processConditionalComments: true,
    //     removeEmptyAttributes: true,
    //     removeRedundantAttributes: true,
    //     trimCustomFragments: true,
    //     useShortDoctype: true,
    //     minifyURLs: true,
    //     removeComments: true,
    //     removeEmptyElements: true
    //   }
    // }
  },

  generate: {
    dir: "docs",
  }

}
