import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '../components/AboutMe.vue'
import Contact from '../components/Contact.vue'

const routes = [
  { path: '/', component: AboutMe },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router