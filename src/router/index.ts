import { createRouter, createWebHistory } from "vue-router"

import HomePage from "../views/HomePage.vue"
import Dashboard from "../views/Dashboard.vue"
import TokensPage from "../components/dashboard/TokensPage.vue"
import NewTokenPage from "../components/dashboard/NewTokenPage.vue"
import ProfilePage from "../components/dashboard/ProfilePage.vue"

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
        component: TokensPage,
      },
      {
        path: "new",
        component: NewTokenPage,
      },
      {
        path: "profile",
        component: ProfilePage,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
