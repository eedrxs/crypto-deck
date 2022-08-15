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
      :connect="connect"
      :signer="signer"
      @toggle-sidebar="toggleSidebar"
      @connect="connect"
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
import { ref } from "vue"
import { useRoute } from "vue-router"
import { getContract, getSigner } from "../services/contractService"
import { address, jsonAbi } from "../config/contract.json"
import LeftPane from "../components/dashboard/LeftPane.vue"
import RightPane from "../components/dashboard/RightPane.vue"
import { tokens } from "../temp"
import { Token, TokenForm } from "../types/Token"

const route = useRoute()
const sidebarOpen = ref(false)
const selectedToken = ref<Token | undefined>(undefined)
const signer = ref<any>(undefined)
const tokenForm = ref<TokenForm>({
  name: "",
  symbol: "",
  network: "Polygon Mumbai",
  type: "",
  initialSupply: null,
  decimals: null,
  mintable: false,
  burnable: false,
})

const toggleSidebar = (state: boolean) => {
  sidebarOpen.value = state
}

const selectToken = (address: string) => {
  selectedToken.value = tokens.find((token) => token.address === address)
}

const connect = async () => {
  signer.value = await getSigner()
}

const createToken = async () => {
  const { name, symbol, initialSupply, mintable, burnable, decimals } =
    tokenForm.value
  const erc20Factory = getContract(jsonAbi, address)

  const newToken = decimals
    ? erc20Factory.methods.createTokenDecimals(
        name,
        symbol,
        initialSupply,
        mintable,
        burnable,
        decimals
      )
    : erc20Factory.methods.createToken(
        name,
        symbol,
        initialSupply,
        mintable,
        burnable
      )

  console.log(newToken)
}
</script>
