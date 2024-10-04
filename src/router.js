import { createWebHistory, createRouter } from 'vue-router'

import About from "./components/goblin-wisdom/About.vue";
import GoblinWisdom from "./components/goblin-wisdom/GoblinWisdom.vue";

const routes = [
  { path: '/', component: GoblinWisdom },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router