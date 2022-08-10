<template>
  <main
    :class="[
      route.fullPath === '/user/tokens'
        ? 'x-md:grid-cols-[15rem_1fr_21.5rem]'
        : 'x-md:grid-cols-[15rem_1fr]',
      'md:grid min-h-screen relative overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-scrollbar',
    ]"
  >
    <LeftPane :sidebarOpen="sidebarOpen" @toggle-sidebar="toggleSidebar" />
    <!-- Fills the space of the left pane and overlays the page behind the left pane when activated -->
    <div
      :class="[
        sidebarOpen ? 'bg-black opacity-40 z-10' : '-z-50',
        'fixed top-0 left-0 h-screen w-screen x-md:static x-md:w-auto x-md:h-auto',
      ]"
      @click="toggleSidebar(false)"
    ></div>
    <router-view
      @toggle-sidebar="toggleSidebar"
      :sidebarOpen="sidebarOpen"
      :tokens="tokens"
      :selectedToken="selectedToken"
      :selectToken="selectToken"
    ></router-view>
    <div class="hidden x-md:block"></div>
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
  selectedToken.value = tokens.find((token) => token.address === address)
}
</script>
