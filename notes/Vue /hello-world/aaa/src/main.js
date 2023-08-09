import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

export const capitalize = (value) => {
    if (!value) return '';
    return value.toUpperCase();
};

app.config.globalProperties.$filters = {
    capitalize
}


app.mount('#app')
