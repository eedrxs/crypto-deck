import { createRouter, createWebHistory } from "vue-router"

import HomePage from "../views/HomePage.vue"
import Account from "../views/Account.vue"
import Dashboard from "../views/Dashboard.vue"

import RegisterPage from "../components/account/RegisterPage.vue"
import LoginPage from "../components/account/LoginPage.vue"
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
    path: "/account",
    name: "Account",
    component: Account,
    children: [
      {
        path: "register",
        component: RegisterPage,
      },
      {
        path: "login",
        component: LoginPage,
      },
    ],
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
