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
      :sidebarOpen="sidebarOpen"
      :tokens="tokens"
      :selectedToken="selectedToken"
      :selectToken="selectToken"
      :tokenForm="tokenForm"
      :connect="connectWallet"
      :signer="signer"
      :networks="networks"
      @toggle-sidebar="toggleSidebar"
      @network-change=""
      @connect-wallet="connectWallet"
      @create-token="createToken"
    />
    <!-- Fills the space of the left pane -->
    <div class="hidden x-md:block"></div>
    <RightPane
      v-show="route.fullPath === '/user/tokens'"
      :selectedToken="selectedToken"
      :selectToken="selectToken"
    />
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { useRoute } from "vue-router"
import { getNetworkLibrary } from "../services/contractService"
import networks from "../config/networks.json"
import LeftPane from "../components/dashboard/LeftPane.vue"
import RightPane from "../components/dashboard/RightPane.vue"
import { tokens } from "../temp"
import { Token, TokenForm } from "../types/Token"

const route = useRoute()
const sidebarOpen = ref(false)
const selectedToken = ref<Token | undefined>(undefined)

const tokenForm = ref<TokenForm>({
  selectedNetwork: "Polygon Mumbai",
  tokenType: "",
  name: "",
  symbol: "",
  initialSupply: null,
  decimals: null,
  mintable: false,
  burnable: false,
})
const signer = ref<any>(null)
const networkLibrary = computed(() => {
  return getNetworkLibrary(tokenForm.value.selectedNetwork)
})

function toggleSidebar(state: boolean) {
  sidebarOpen.value = state
}

function selectToken(address: string) {
  selectedToken.value = tokens.find((token) => token.address === address)
}

async function connectWallet() {
  signer.value = await networkLibrary.value.getSigner()
}

async function createToken() {
  const newToken = await networkLibrary.value.factoryContract(
    signer.value,
    tokenForm.value
  )
  console.log(newToken)
}
</script>
