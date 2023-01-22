export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vue2-clinic',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~static/custom.sass', lang: 'sass' },
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '@plugins/global.js',  // сначала так глобально регистрировал и импортировал компоненты, а потом узнал, что можно сделать просто через плагин
    // '~/plugins/app-components.js', // а потом вообще узнал, что у накста есть такая штука, как авто импорт компонентов (см ниже)
    '~/plugins/fontawesome.js',
    '~/plugins/animateOnScroll.client.js',
    { src: '~/plugins/vue-scrollto', ssr: false },
    { src: "~/plugins/vClickOutside", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    // Equivalent to { path: '~/components' }
    '~/components',
    { path: '~/components/sections', extensions: ['vue'] },
    { path: '~/components/cards', extensions: ['vue'] },
    { path: '~/components/global', extensions: ['vue'] },
    { path: '~/components/titles', extensions: ['vue'] },
    { path: '~/components/sliders', extensions: ['vue'] },
    { path: '~/components/sidebar', extensions: ['vue'] },
    { path: '~/components/content', extensions: ['vue'] },
    { path: '~/components/header', extensions: ['vue'] },
    { path: '~/components/footer', extensions: ['vue'] },
    { path: '~/components/forms', extensions: ['vue'] },
    { path: '~/components/reuse', extensions: ['vue'] },
    { path: '~/components/embed', extensions: ['vue'] },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    sass: ['./static/*.sass'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  loading: {
    color: '#a11824',
    height: '3px',
  },
}
