import { createWebHistory, createRouter } from 'vue-router'

import About from "./components/goblin-wisdom/About.vue";
import GoblinWisdom from "./components/goblin-wisdom/GoblinWisdom.vue";
import GoblinCard from "./components/goblin-wisdom/GoblinCard.vue";
import Blog from "./components/blog/Blog.vue";

const routes = [
  {
    path: '/',
    component: GoblinWisdom,
    children: [
      { path: '/', component: GoblinCard },
      { path: '/about', component: About },
    ]
  },
  { path: '/Blog', component: Blog },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router