import { createRouter, createWebHistory } from "vue-router"
import { onAuthStateChanged } from "@firebase/auth"
import { auth } from "../../firebase"

import HomePage from "../views/HomePage.vue"
import RegisterPage from "../views/RegisterPage.vue"
import LoginPage from "../views/LoginPage.vue"
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
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
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

// Checks if user is trying to navigate to dashboard
// and redirects to /login in not logged in
router.beforeEach((to, from) => {
  if (
    to.fullPath.startsWith("/user") &&
    !auth.currentUser &&
    !sessionStorage.getItem("user-id")
  ) {
    return "/login"
  }
})

// Prevents user from navigating to /user
router.beforeEach((to, from) => {
  if (to.fullPath === "/user" && auth.currentUser) {
    return "/user/tokens"
  }
})

// Checks if user is navigating to page other than dashboard
// and redirects to the dashboard if user is logged in
router.beforeEach((to, from) => {
  if (
    !to.fullPath.startsWith("/user") &&
    auth.currentUser &&
    sessionStorage.getItem("user-id")
  ) {
    return "/user/tokens"
  }
})

onAuthStateChanged(auth, (user) => {
  if (user) {
    sessionStorage.setItem("user-id", user.uid)
    router.push("/user/tokens")
  }
})

export default router
