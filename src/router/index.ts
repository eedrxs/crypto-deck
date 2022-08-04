import { createRouter, createWebHistory } from "vue-router"

import HomePage from "../views/HomePage.vue"
import Dashboard from "../views/Dashboard.vue"
import Tokens from "../components/dashboard/Tokens.vue"
import NewToken from "../components/dashboard/NewToken.vue"

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
    children: [
      {
        path: "tokens",
        component: Tokens,
      },
      {
        path: "new",
        component: NewToken,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
