<template>
  <section class="bg-white px-3 pt-5 x-md:px-6 x-md:pt-10 h-auto">
    <Header page="New Token" @toggle-sidebar="$emit('toggle-sidebar', true)" />

    <div
      class="flex flex-col x-lg:flex-row mt-7 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-crypto-blue"
    >
      <!-- Passed entire 'tokenForm' object instead of 'selectedNetwork' property to maintain reactivity -->
      <NetworkPanel
        :tokenForm="tokenForm"
        :networks="Object.keys(networks)"
        :signer="signer"
        @network-change="$emit('network-change')"
        @connect-wallet="$emit('connect-wallet')"
      />
      <hr
        class="x-lg:border-r x-lg:border-r-[#d9d9d9a4] x-lg:h-[24rem] x-lg:mx-8 my-6"
      />
      <TokenSetupPanel
        :tokenForm="tokenForm"
        :tokenTypes="networks[tokenForm.selectedNetwork]?.tokenTypes"
        :signer="signer"
        :creatingToken="creatingToken"
        @create-token="$emit('create-token')"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import NetworkPanel from "./NetworkPanel.vue"
import TokenSetupPanel from "./TokenSetupPanel.vue"
import Header from "./Header.vue"
import { TokenForm, Networks } from "../../types/Token"

const props = defineProps<{
  sidebarOpen: boolean
  tokenForm: TokenForm
  networks: Networks
  signer: any
  creatingToken: boolean
}>()

const emits = defineEmits([
  "toggle-sidebar",
  "network-change",
  "connect-wallet",
  "create-token",
])
</script>
