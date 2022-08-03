<template>
  <aside class="bg-[#D9D9D9] py-14 px-6">
    <p class="flex justify-end group mb-6 text-sm">
      <span class="group-hover:cursor-pointer group-hover:underline"
        >View on Etherscan</span
      >
      <ExternalLinkIcon class="h-5 ml-2 group-hover:cursor-pointer" />
    </p>

    <div v-for="(detail, i) in details" :key="i" class="mb-6">
      <p class="font-medium text-xs">{{ detail.label }}:</p>
      <h2 class="font-bold text-xl break-words">{{ detail.value }}</h2>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ExternalLinkIcon } from "@heroicons/vue/outline"

const details = [
  { label: "NAME", value: "Satoshi" },
  { label: "SYMBOL", value: "SAT" },
  { label: "NETWORK", value: "Ethereum" },
  { label: "TYPE", value: "ERC20" },
  { label: "INITIAL SUPPLY", value: "10,000,000,000" },
  { label: "MINT PRICE", value: "0.00001 ETH" },
  { label: "ADDRESS", value: "0x9907A0cF64Ec9Fbf6Ed8FD4971090DE88222a9aC" },
]
</script>
