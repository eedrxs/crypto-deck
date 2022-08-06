<template>
  <router-view />
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue"
import { useRouter } from "vue-router"
import { onAuthStateChanged } from "@firebase/auth"
import { auth } from "../firebase.js"

const router = useRouter()

onBeforeMount(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      router.push("/user/tokens")
    } else {
      router.push("/")
    }
  })
})
</script>
