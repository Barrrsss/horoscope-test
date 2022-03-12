import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/MainApp')
  },
  {
    path: '/two',
    name: 'two',
    component: () => import('../views/PageTwo.vue')
  },
  {
    path: '/three',
    name: 'three',
    component: () => import('../views/PageThree.vue')
  },
  {
    path: '/four',
    name: 'four',
    component: () => import('../views/PageFour.vue')
  },
  {
    path: '/five',
    name: 'five',
    component: () => import('../views/PageFive.vue')
  },
  {
    path: '/six',
    name: 'six',
    component: () => import('../views/PageSix.vue')
  },
  {
    path: '/reg',
    name: 'reg',
    component: () => import('../views/RegistrationNew')
  },
  {
    path: '/final',
    name: 'final',
    component: () => import('../views/FinalPage')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
