import { createApp } from 'vue'
import App from './App.vue'
import '@progress/kendo-theme-default/dist/all.css'; // Import Kendo UI styles
import '@progress/kendo-ui';

const Vue = createApp(App)

Vue.mount('#app')
