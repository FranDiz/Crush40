import LandingPage from '../views/LandingPage.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: LandingPage },
    { path: '/contact', component: () => import('../views/ContactPage.vue')},
    { path: '/register', component: () => import('../views/RegisterPage.vue')},
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router