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
      @toggle-sidebar="toggleSidebar"
      :sidebarOpen="sidebarOpen"
      :tokens="tokens"
      :selectedToken="selectedToken"
      :selectToken="selectToken"
    ></router-view>
    <RightPane
      v-show="route.fullPath === '/user/tokens'"
      :selectedToken="selectedToken"
      :selectToken="selectToken"
    />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from "vue-router"
import LeftPane from "../components/dashboard/LeftPane.vue"
import RightPane from "../components/dashboard/RightPane.vue"
import { Token } from "../types/Token"

const route = useRoute()

const sidebarOpen = ref(false)
const selectedToken = ref<Token | undefined>(undefined)
const tokens = [
  {
    name: "Satoshi",
    symbol: "SAT",
    network: "Ethereum",
    type: "ERC20",
    initialSupply: 10000000000,
    mintPrice: 0.0002,
    address: "0x9907A0cF64Ec9Fbf6Ed8FD4971090DE88222a9aA",
  },
  {
    name: "hBAr",
    symbol: "HBAR",
    network: "Ethereum",
    type: "ERC1155",
    initialSupply: 10000000000,
    mintPrice: 0.00001,
    address: "0x9907A0cF64Ec9Fbf6Ed8FD4971090DE88222a9aB",
  },
  {
    name: "Shiba Inu",
    symbol: "SHIB",
    network: "Ethereum",
    type: "ERC20",
    initialSupply: 10000000000,
    mintPrice: 0.00015,
    address: "0x9907A0cF64Ec9Fbf6Ed8FD4971090DE88222a9aC",
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    network: "Ethereum",
    type: "ERC1155",
    initialSupply: 10000000000,
    mintPrice: 0.00001,
    address: "0x9907A0cF64Ec9Fbf6Ed8FD4971090DE88222a9aD",
  },
]

const toggleSidebar = (state: boolean) => {
  sidebarOpen.value = state
}

const selectToken = (address: string) => {
  // Expects an address or an empty string
  // to set 'selectedToken' to a token or undefined
  selectedToken.value = tokens.find((token) => token.address === address)
}
</script>
