import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'

const routes = [
  {
    path: '/', name: 'Main', component: Main
  },
  {
    path: '/repair-apartments-list-cities',
    name: 'ListCities',
    component: () => import('../views/ListCities.vue')
  },
  {
    path: '/apartment-repair/:city',
    name: 'City',
    component: () => import('../views/City.vue')
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('../views/Video.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
