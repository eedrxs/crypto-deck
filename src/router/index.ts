import { createRouter, createWebHistory } from "vue-router"

import HomePage from "../views/HomePage.vue"
import Dashboard from "../views/Dashboard.vue"

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/user",
    name: "DashBoard",
    component: Dashboard,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
