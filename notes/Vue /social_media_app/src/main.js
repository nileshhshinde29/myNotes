import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css';
import router from './components/router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faEnvelope, faHeart, faUserSecret, faPaperPlane, faCommentDots, faBookmark as fasBookmark, faHouse, faMagnifyingGlass, faFilm, faMessage, faBell, faVideo } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons';



/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* add icons to the library */
import '@fortawesome/fontawesome-free/css/all.css';

// import '@fortawesome/fontawesome-free/css/all.css';


library.add(faUser, faEnvelope, faHeart, faPaperPlane, faUserSecret, faCommentDots, farBookmark, fasBookmark, faHouse, faMagnifyingGlass, faFilm, faMessage, faBell, faVideo);


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
