export default {
  components: true,
  head: {
    titleTemplate: "Mastering Nuxt %s",
    htmlAttrs: {
      lang: "en"
    },
    bodyAttrs: {
      class: ["my-style"]
    },
    meta: [{
      charset: "utf-8"
    }]
  },
  router: {
    prefetchLinks: false,
  },
  plugins: [
    "~/plugins/maps.client", 
    "~/plugins/dataApi",
    "~/plugins/auth.client",
    "~/plugins/vCalendar.client",
    "~/plugins/stripe.client",
  ],
  modules:[
    '~/modules/auth', 
    '~/modules/algolia', 
    '~/modules/cloudinary', 
    '@nuxtjs/cloudinary', 
    '~/modules/stripe', 
  ],
  buildModules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  cloudinary:{
    cloudName: 'corneel-online',
  },
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/corneel-online/image/upload/'
    }
  },
  css: ['~/assets/sass/app.scss'],
  build: {
    extractCSS: true,
    loaders: {
      limit: 0,
    }
  },
  publicRuntimeConfig: {
    auth: {
      cookieName: 'idToken',
      clientId: '843687423888-m5eeugrnt7di3fhk0u6rgpnb1656klbb.apps.googleusercontent.com',
    },
    algolia:{
      appId: "SJSBLY3O1W",
      key: "32f6b3d911cdea23871b9c0faa0ea6cd",
    },
    cloudinary:{
      apiKey: "327351381948196",
    },
    stripe:{
      key: "pk_test_51JjOxvFE27bQ6XenNX7J5HPbESjC9vLdBNrMjdvQ6x9V4iXxPVItB1XhnsMh5GHuIjmWT5zESNn4fUDjZ1ek2Isf00VLyiZGN2",
    },
  },
  privateRuntimeConfig: {
    algolia:{
      appId: "SJSBLY3O1W",
      key: "9245348365137cd91e800b7f119627b7",
    },
    cloudinary:{
      apiSecret: "BPJkMX1j6meC7gn2UayMR21seK0"
    },
    stripe:{
      secretKey: process.env.STRIPE_SECRET_KEY,
    },
  },
}