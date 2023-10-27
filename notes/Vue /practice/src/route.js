import { createRouter, createWebHistory } from "vue-router";
import RouterComponent from './components/RouterComponent.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/RouterComponent',
            name: 'RouterComponent',
            component: RouterComponent
        }
    ]
})