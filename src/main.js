// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Index from '~/pages/Index'



export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Index', {
    
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://rsms.me/inter/inter.css'
  })
}
