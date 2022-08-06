<template>
  <router-view v-if="blockUI" />
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue"
import { useRouter } from "vue-router"
import { onAuthStateChanged } from "@firebase/auth"
import { auth } from "../firebase.js"

const router = useRouter()
const blockUI = ref(true)

onBeforeMount(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      router.push("/user/tokens")
    } else {
      router.push("/")
    }
    blockUI.value = true
  })
})
</script>
