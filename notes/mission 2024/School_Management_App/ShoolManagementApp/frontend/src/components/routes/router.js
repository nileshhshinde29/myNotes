import { createRouter, createWebHistory } from "vue-router"
import Login from "../../components/Login.vue"
import Home from "../../components/Home.vue"
import HelloWorld from "../HelloWorld.vue"
import NotFound from "../NotFound.vue"

let routes = [
    {
        name: 'login',
        path: '/',
        component: Login
    },
    {
        name: 'home',
        path: '/home',
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        name: '/hello',
        path: '/hello',
        component: HelloWorld,
        meta: { requiresAuth: true }
    },
    {
        name: 'not-found',
        path: '/:pathMatch(.*)',
        component: NotFound
    }
]

let router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

router.beforeEach((to, from, next) => {
    let auth = localStorage.getItem('accessToken')
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // Check if the route requires authentication
        if (!auth) {
            // Redirect to the login page or any other appropriate action
            next({ name: 'login' });
        }
        else {
            // Proceed to the next route
            next();
        }
    } else {
        if (auth && !to.matched.some(record => record.name == "not-found")) {
            next({ name: 'home' });
        }
        // If the route doesn't require authentication, proceed
        next();
    }

})



/* 

#Global Guards:
    beforeEach: Executed before each navigation globally.
    beforeResolve: Executed after beforeEach and before confirming navigation.
    afterEach: Executed after confirming navigation globally.
    
#Per-Route Guards:
    beforeEnter: Specific to individual routes, executed before entering the route.

#In-Component Guards:
    beforeRouteEnter: Specific to individual route components, executed before creating and adding the component to the route.
    beforeRouteUpdate: Specific to individual route components, executed when the route that renders the component is updated.
    beforeRouteLeave: Specific to individual route components, executed when leaving the route that renders the component.  
    
*/
