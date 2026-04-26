import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '../components/AboutMe.vue'
import Contact from '../components/Contact.vue'
import Projects from '../components/Projects.vue'
import QA from '../components/QA.vue'
import LatestHobbies from '../components/LatestHobbies.vue'
import Music from '../components/Music.vue'

const routes = [
  { path: '/', component: AboutMe },
  { path: '/projects', component: Projects },
  { path: '/qa', component: QA },
  { path: '/latestHobbies', component: LatestHobbies },
  { path: '/music', component: Music },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router