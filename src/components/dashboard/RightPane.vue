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

    <div class="flex mt-10">
      <div class="flex items-center mr-5">
        <div class="inline-block bg-crypto-blue rounded-full p-2">
          <img class="h-4" src="../../assets/images/money-bag.png" alt="" />
        </div>
        <span class="font-bold ml-2">Mintable</span>
      </div>
      <div class="flex items-center">
        <div class="inline-block bg-crypto-blue rounded-full p-2">
          <img class="h-4" src="../../assets/images/fire.png" alt="" />
        </div>
        <span class="font-bold ml-2">Burnable</span>
      </div>
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
