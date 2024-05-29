import { createApp } from 'vue'
import App from './App.vue'
import router from './components/routes/router'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'



const icons = {
    defaultSet: 'mdi',
    aliases,
    sets: {
        mdi,
    }
}

const vuetify = createVuetify({
    components,
    directives,
    icons,
})

let app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
