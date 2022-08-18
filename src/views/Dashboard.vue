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
      :explorer="networks[tokenForm.selectedNetwork].explorer"
    />
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeUnmount } from "vue"
import { useRoute } from "vue-router"
import { listenToDb } from "../services/dbService"
import toast from "../services/toastService"
import { getNetworkLibrary } from "../services/contractService"
import { onAuthStateChanged } from "@firebase/auth"
import { auth } from "../../firebase"
import networks from "../config/networks"
import LeftPane from "../components/dashboard/LeftPane.vue"
import RightPane from "../components/dashboard/RightPane.vue"
import { Token, TokenForm } from "../types/Token"
import router from "../router"

const route = useRoute()
const sidebarOpen = ref(false)
const tokens = ref([])
const selectedToken = ref<Token | undefined>(undefined)
const signer = ref<any>(null)
const unsubscribe = ref<any>(null)
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
const toastOptions = {
  type: "danger",
  transition: "bounce",
  timeout: 5000,
  showIcon: true,
  hideProgressBar: true,
}

const networkLibrary = computed(() => {
  return getNetworkLibrary(tokenForm.value.selectedNetwork)
})

function toggleSidebar(state: boolean) {
  sidebarOpen.value = state
}

function selectToken(address: string) {
  selectedToken.value = tokens.value.find(
    (token: any) => token.address === address
  )
}

function resetTokenForm() {
  tokenForm.value.tokenType = ""
  tokenForm.value.name = ""
  tokenForm.value.symbol = ""
  tokenForm.value.initialSupply = null
  tokenForm.value.decimals = null
  tokenForm.value.mintable = false
  tokenForm.value.burnable = false
}

async function connectWallet() {
  try {
    signer.value = await networkLibrary.value.getSigner()
  } catch (error: any) {
    toast(error.message, toastOptions)
  }
}

async function createToken() {
  try {
    console.log(tokenForm.value)

    await networkLibrary.value.factoryContract(signer.value, tokenForm.value)
  } catch (error: any) {
    toast(error.message, toastOptions)
    return
  }

  toastOptions.type = "success"
  toast("Token created!", toastOptions)
  router.push("tokens")
  resetTokenForm()
  console.log("Reset token form")
}

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const unsub = await listenToDb(
      tokens,
      "users",
      user.uid as string,
      "tokens"
    )
    unsubscribe.value = unsub
  }
})

onBeforeUnmount(() => {
  unsubscribe.value()
})
</script>
