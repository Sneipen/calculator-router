import { createRouter, createWebHistory } from 'vue-router'
import ContactFrom from '../views/ContactForm.vue'
import Calculator from '../views/Calculator.vue'
import Welcome from '../views/Welcome.vue'


const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/contact-form',
    name: 'ContactForm',
    component: ContactFrom
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
