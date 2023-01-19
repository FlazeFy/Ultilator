import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import MathView from '../views/MathView.vue'
import HomeView from '../views/HomeView.vue'
import OthersView from '../views/OthersView.vue'
import PhysicsView from '../views/PhysicsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/math',
      name: 'math',
      component: MathView
    },
    {
      path: '/others',
      name: 'others',
      component: OthersView
    },
    {
      path: '/physics',
      name: 'physics',
      component: PhysicsView
    }
  ]
})

export default router
