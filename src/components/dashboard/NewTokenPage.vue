<template>
  <section class="bg-white px-3 pt-5 x-md:px-6 x-md:pt-10 h-auto">
    <Header page="New Token" @toggle-sidebar="$emit('toggle-sidebar', true)" />

    <div
      class="flex flex-col x-lg:flex-row mt-7 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-crypto-blue"
    >
      <NetworkPanel />
      <hr
        class="x-lg:border-r x-lg:border-r-[#d9d9d9a4] x-lg:h-[24rem] x-lg:mx-8 my-6"
      />
      <TokenSetupPanel />
    </div>
  </section>
</template>

<script setup lang="ts">
import NetworkPanel from "./NetworkPanel.vue"
import TokenSetupPanel from "./TokenSetupPanel.vue"
import Header from "./Header.vue"

interface Token {
  name: string
  symbol: string
  network: string
  type: string
}

const props = defineProps<{
  tokens: Token[]
  sidebarOpen: boolean
}>()

const emits = defineEmits(["toggle-sidebar"])
</script>
