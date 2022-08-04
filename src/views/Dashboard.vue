<template>
  <main
    :class="[
      route.fullPath === '/user/tokens'
        ? 'md:grid-cols-[15rem_1fr_21.5rem]'
        : 'md:grid-cols-[15rem_1fr]',
      'md:grid min-h-screen',
    ]"
  >
    <LeftPane />
    <!-- <ContentArea /> -->
    <router-view :tokens="tokens"></router-view>
    <RightPane v-if="route.fullPath === '/user/tokens'" />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue"

import LeftPane from "../components/dashboard/LeftPane.vue"
import RightPane from "../components/dashboard/RightPane.vue"
import { useRoute } from "vue-router"
const route = useRoute()

const currentPage = ref("tokens")
const tokens = [
  { name: "Satoshi", symbol: "SAT", network: "Ethereum", type: "ERC20" },
  { name: "hBAr", symbol: "HBAR", network: "Ethereum", type: "ERC1155" },
  { name: "Shiba Inu", symbol: "SHIB", network: "Ethereum", type: "ERC20" },
  { name: "Dogecoin", symbol: "DOGE", network: "Ethereum", type: "ERC1155" },
]
</script>
