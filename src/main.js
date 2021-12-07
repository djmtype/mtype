// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Dashboard from '~/layouts/Dashboard.vue'

import DefaultLayout from '~/layouts/Default.vue'

import Single from '~/layouts/Single.vue'

// import 'prismjs/themes/prism.css'

import '~/assets/scss/main.scss'



export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Dashboard', Dashboard)
  Vue.component('Layout', DefaultLayout)
  Vue.component('Single', Single)

  // head.link.push({
  //   rel: 'preconnect',
  //   href: 'https://fonts.googleapis.com'
  // })

  // head.link.push({
  //   rel: 'preconnect',
  //   href: 'https://fonts.gstatic.com',
  //   crossorigin: true,
  // })

  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,500;1,500&display=swap'
  // })
  


  head.link.push({
    rel: 'preload',
    href: '/assets/fonts/WorkSans-Regular.woff2',
    as: 'font',
    type: 'font/woff2',
    crossorigin: true,
  })
  head.link.push({
    rel: 'preload',
    href: '/assets/fonts/WorkSans-Italic.woff2',
    as: 'font',
    type: 'font/woff2',
    crossorigin: true,
  })
  head.link.push({
    rel: 'preload',
    href: '/assets/fonts/WorkSans-SemiBold.woff2',
    as: 'font',
    type: 'font/woff2',
    crossorigin: true,
  })
  head.link.push({
    rel: 'preload',
    href: '/assets/fonts/WorkSans-SemiBoldItalic.woff2',
    as: 'font',
    type: 'font/woff2',
    crossorigin: true,
  })

  head.link.push({
    rel: 'preload',
    href: '/assets/fonts/WorkSans-Medium.woff2',
    as: 'font',
    type: 'font/woff2',
    crossorigin: true,
  })

  head.link.push({
    rel: 'preload',
    href: '/assets/fonts/WorkSans-MediumItalic.woff2',
    as: 'font',
    type: 'font/woff2',
    crossorigin: true,
  })

  head.link.push({
    rel: 'preload',
    href: '/assets/fonts/iAWriterDuoV.ttf',
    as: 'font',
    type: 'font/ttf',
    crossorigin: true,
  })

  // head.link.push({
  //   rel: 'stylesheet',
  //   href: ' https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,700;1,400;1,700&display=swap'
  // })

  //   head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:ital,wght@0,400;0,600;1,400;1,600&display=swap'
  // })




  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://cdn.jsdelivr.net/npm/water.css@2/out/water.css'
  // })


}
