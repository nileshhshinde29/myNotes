import { createRouter, createWebHistory } from 'vue-router';
import LoginComp from './LoginComp.vue'
import Dashboard from './Dashboard.vue'

const routes = [
    {
        path: '/',
        name: 'login',
        component: LoginComp,

    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,

    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router