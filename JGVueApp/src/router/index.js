import { createRouter, createWebHistory } from 'vue-router'

import main from '../components/main/main.vue'

const routes = [
  { path: '/login', name: 'login', component: () => import('../components/login/LoginTable.vue') },
  { path: '/main', name: 'main' , component: main},
  { path: '/uis', name: 'uis', component: () => import('../components/test/part13_card.vue')}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
