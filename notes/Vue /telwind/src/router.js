import { createRouter, createWebHistory } from "vue-router";
import dashboard from './components/DashBoard.vue'
export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: dashboard,
        }
    ]
})