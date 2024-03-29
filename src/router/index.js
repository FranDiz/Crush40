import LandingPage from '../views/LandingPage.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: LandingPage },
    { path: '/contact', component: () => import('../views/ContactPage.vue')},
    { path: '/login', component: () => import('../views/LoginPage.vue')}, 
    { path: '/register', component: () => import('../views/RegisterPage.vue')},
    { path:'/categories', component: () => import('../views/CategoryPage.vue')},
    { path: '/category/:id', component: () => import('../views/CategorySelectedSongs.vue')},
    { path: '/product/:id', component: () => import('../views/AlbumPage.vue')},
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router