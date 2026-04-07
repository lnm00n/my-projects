import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '../components/AboutMe.vue'
import Contact from '../components/Contact.vue'
import Dev from '../components/Dev.vue'
import LatestHobbies from '../components/LatestHobbies.vue'

const routes = [
  { path: '/', component: AboutMe },
  { path: '/contact', component: Contact },
  { path: '/devFun', component: Dev },
  { path: '/latestHobbies', component: LatestHobbies }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router