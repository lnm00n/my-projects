import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '../components/AboutMe.vue'
import Contact from '../components/Contact.vue'
import Dev from '../components/Dev.vue'
import QA from '../components/QA.vue'
import LatestHobbies from '../components/LatestHobbies.vue'

const routes = [
  { path: '/', component: AboutMe },
  { path: '/devFun', component: Dev },
  { path: '/qaFun', component: QA },
  { path: '/latestHobbies', component: LatestHobbies },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router