<template>
  <section class="bg-white px-6 pt-10">
    <h1 class="font-firs font-bold text-4xl">New Token</h1>

    <hr class="border w-[30rem] my-3" />

    <div class="flex py-4">
      <NetworkPanel />
      <div class="border-r-[#d9d9d9a4] border-r h-[24rem] mx-8"></div>
      <TokenSetupPanel />
    </div>
  </section>
</template>

<script setup lang="ts">
import NetworkPanel from "./NetworkPanel.vue"
import TokenSetupPanel from "./TokenSetupPanel.vue"

interface Token {
  name: string
  symbol: string
  network: string
  type: string
}

const props = defineProps<{
  tokens: Token[]
}>()
</script>
