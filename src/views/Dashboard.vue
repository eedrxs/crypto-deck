<template>
  <main
    :class="[
      route.fullPath === '/user/tokens'
        ? 'md:grid-cols-[15rem_1fr_21.5rem]'
        : 'md:grid-cols-[15rem_1fr]',
      'md:grid min-h-screen relative',
    ]"
  >
    <LeftPane :sidebarOpen="sidebarOpen" />
    <router-view
      :sidebarOpen="sidebarOpen"
      :tokens="tokens"
      @toggle-sidebar="toggleSidebar"
    ></router-view>
    <RightPane v-if="route.fullPath === '/user/tokens'" />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from "vue-router"
import LeftPane from "../components/dashboard/LeftPane.vue"
import RightPane from "../components/dashboard/RightPane.vue"

const route = useRoute()

const sidebarOpen = ref(false)
const tokens = [
  { name: "Satoshi", symbol: "SAT", network: "Ethereum", type: "ERC20" },
  { name: "hBAr", symbol: "HBAR", network: "Ethereum", type: "ERC1155" },
  { name: "Shiba Inu", symbol: "SHIB", network: "Ethereum", type: "ERC20" },
  { name: "Dogecoin", symbol: "DOGE", network: "Ethereum", type: "ERC1155" },
]

const toggleSidebar = (state: boolean) => {
  sidebarOpen.value = state
  console.log(sidebarOpen.value, state)
}
</script>
