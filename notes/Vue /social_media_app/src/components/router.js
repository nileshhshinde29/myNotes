import { createRouter, createWebHistory } from 'vue-router'
import LoginComp from './LoginComp.vue'
import Dashboard from './Dashboard.vue'
import DisplayPoints from './PointsDisplay.vue'
import SocialMediaMain from '../SocialMediaComponents/SocialMediaMain.vue'
import ShoppingMain from '../ShoppingCart/ShoppingMain.vue'
import form from '../ResumeBuilder/form.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginComp,
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            children: [
                { path: 'display-points:id', component: DisplayPoints },
                // Define more nested routes here
            ],
            meta: { requiresAuth: true }
        },
        /* {
            path: '/display-points:id',
            name: 'displayPoints',
            component: DisplayPoints,
            meta: { requiresAuth: true }
        }, */
        {
            path: '/social-media',
            name: 'socialMedia',
            component: SocialMediaMain,
            meta: { requiresAuth: true }
        },
        {
            path: '/shopping-dashboard',
            name: 'shoppingDashboard',
            component: ShoppingMain,
            meta: { requiresAuth: true }
        },
        {
            path: '/resumeBuilder',
            name: 'resumeBuilder',
            component: form,
            meta: { requiresAuth: true }
        },

    ]
})


// router.beforeEach((to, from, next) => {
//     let auth = localStorage.getItem('currentUser')
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         // Check if the route requires authentication
//         if (!auth) {
//             // Redirect to the login page or any other appropriate action
//             next({ name: 'login' });
//         }
//         else {
//             // Proceed to the next route
//             next();
//         }
//     } else {
//         if (auth) {
//             next({ name: 'dashboard' });
//         }
//         // If the route doesn't require authentication, proceed
//         next();
//     }

// })


export default router