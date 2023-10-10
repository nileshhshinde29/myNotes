import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import FormValidation from '../components_form_validation/FormValidaion.vue'

const routes: Array<RouteRecordRaw> =[
  {
    path: '/home',
    name: 'Home',
    component: FormValidation,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
