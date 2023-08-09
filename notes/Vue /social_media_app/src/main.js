import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';


// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from './components/router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faEnvelope, faHeart as fasHeart, faUserSecret, faPaperPlane, faCommentDots, faBookmark as fasBookmark, faHouse, faMagnifyingGlass, faFilm, faMessage, faBell, faVideo } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as farBookmark, faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

const app = createApp(App)
app.component('QuillEditor', QuillEditor)
app.use(store)

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* add icons to the library */

import '@fortawesome/fontawesome-free/css/all.css';

// import '@fortawesome/fontawesome-free/css/all.css';
library.add(faUser, faEnvelope, fasHeart, farHeart, faPaperPlane, faUserSecret, faCommentDots, farBookmark, fasBookmark, faHouse, faMagnifyingGlass, faFilm, faMessage, faBell, faVideo);

app.use(router)
// app.use(BootstrapVue)
// app.use(IconsPlugin)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')



// createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
