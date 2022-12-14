<template>
  <main
    :class="[
      route.fullPath === '/user/tokens'
        ? 'x-md:grid-cols-[15rem_1fr_21.5rem]'
        : 'x-md:grid-cols-[15rem_1fr]',
      'md:grid min-h-screen relative overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-scrollbar',
    ]"
  >
    <LeftPane
      :sidebarOpen="sidebarOpen"
      :userDetails="userDetails"
      @toggle-sidebar="toggleSidebar"
    />
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
      :userDetails="userDetails"
      :creatingToken="creatingToken"
      @toggle-sidebar="toggleSidebar"
      @connect-wallet="connectWallet"
      @create-token="createToken"
    />
    <!-- Fills the space of the left pane -->
    <div class="hidden x-md:block"></div>
    <RightPane
      v-show="route.fullPath === '/user/tokens'"
      :selectedToken="selectedToken"
      :selectToken="selectToken"
      :explorer="networks[selectedToken?.network as string]?.explorer || {}"
    />
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUpdated, onBeforeUnmount } from "vue"
import { useRoute } from "vue-router"
import { listenToDocInDb, listenToCollectionInDb } from "../services/dbService"
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
const userDetails = ref()
const tokens = ref([])
const userDetailsUnsubscribe = ref<any>(null)
const tokensUnsubscribe = ref<any>(null)
const sidebarOpen = ref(false)
const selectedToken = ref<Token | undefined>(undefined)
const signer = ref<any>(null)
const creatingToken = ref(false)
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
    creatingToken.value = true
    const supportedNetwork = Object.values(networks).find(
      (network) => network.chainId === window.ethereum.chainId
    )
    if (!supportedNetwork) throw new Error("Network not supported")
    await networkLibrary.value.factoryContract(signer.value, tokenForm.value)
  } catch (error: any) {
    creatingToken.value = false
    toast(error.message, toastOptions)
    return
  }

  await router.push("tokens")
  creatingToken.value = false
  toast("Token created!", { ...toastOptions, type: "success" })
  resetTokenForm()
}

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const tokensUnsub = await listenToCollectionInDb(
      tokens,
      "users",
      user.uid,
      "tokens"
    )
    const userDetailsUnsub = await listenToDocInDb(
      userDetails,
      "users",
      user.uid
    )
    tokensUnsubscribe.value = tokensUnsub
    userDetailsUnsub.value = userDetailsUnsub
  }
})

onMounted(() => {
  const currentNetwork = Object.values(networks).find(
    (network) => network.chainId === window.ethereum.chainId
  )
  tokenForm.value.selectedNetwork =
    (currentNetwork?.name as string) || "Polygon Mumbai"

  window.ethereum.on("chainChanged", (networkId) => {
    const newNetwork = Object.values(networks).find(
      (network) => network.chainId === networkId
    )

    if (!newNetwork) {
      return toast("Selected network not supported", {
        ...toastOptions,
        type: "danger",
        position: "bottom-right",
      })
    }

    tokenForm.value.selectedNetwork = newNetwork?.name as string
    toast(`Network changed to '${newNetwork?.name}'`, {
      ...toastOptions,
      type: "info",
      position: "bottom-right",
    })
  })
})

onUpdated(() => {
  document.body.style.overflowY = sidebarOpen.value
    ? // ||
      // (document.documentElement.clientWidth < 950 && selectedToken.value)
      "hidden"
    : "auto"
})

onBeforeUnmount(() => {
  tokensUnsubscribe.value()
  userDetailsUnsubscribe.value()
})
</script>
