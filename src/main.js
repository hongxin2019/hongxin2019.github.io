// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
// import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
// import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// import VueViewer from 'v-viewer'
// import 'viewerjs/dist/viewer.css'

// library.add(faGithub, faGoogle, faFilePdf, faHome);

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // Vue.component('font-awesome-icon', FontAwesomeIcon);
  // Vue.use(VueViewer, {
  //   defaultOptions: {
  //     title: false,
  //     toolbar: false,
  //     navbar: false
  //   }
  // });

  head.meta.push({
    name: 'viewport',
    content: 'width=device-width, initial-scale=1'
  })
}
