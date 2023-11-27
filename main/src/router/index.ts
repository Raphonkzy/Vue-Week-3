import HomeViewVue from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import ('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import ('../views/AboutView.vue')
  },
  {
    path: '/restricted',
    name: 'restricted',
    component: () => import ('../views/Restricted.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import ('../views/Login.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})
export default router
