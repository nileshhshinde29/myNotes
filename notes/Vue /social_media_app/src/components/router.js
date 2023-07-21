import { createRouter, createWebHistory } from 'vue-router';
import LoginComp from './LoginComp.vue'
import Dashboard from './Dashboard.vue'
import pdf from './pdf'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: LoginComp,

    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }

    },
    {
        path: '/pdf',
        name: 'pdf',
        component: pdf,
        meta: { requiresAuth: true }

    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    let auth = localStorage.getItem('currentUser')
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // Check if the route requires authentication
        if (!auth) {
            console.log('if')
            // Redirect to the login page or any other appropriate action
            next({ name: 'login' });
        }
        else {
            console.log('else')
            // Proceed to the next route
            next();
        }
    } else {
        if (auth) {
            next({ name: 'dashboard' });
        }
        // If the route doesn't require authentication, proceed
        next();
    }
});

export default router