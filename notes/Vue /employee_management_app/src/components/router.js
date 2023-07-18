import { createRouter, createWebHistory } from 'vue-router';
import Login from './Login.vue'
import Dashboard from './Dashboard.vue'

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login,

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