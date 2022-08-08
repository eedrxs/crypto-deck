<template>
  <aside
    :class="[
      selectedToken ? 'left-0' : 'right-[100%]',
      'fixed h-screen w-screen top-0 x-md:static x-md:h-auto x-md:w-auto bg-[#D9D9D9] py-8 x-md:py-14 px-6',
    ]"
  >
    <div
      v-if="details"
      class="flex justify-between x-md:justify-end items-center mb-6"
    >
      <div class="p-1 hover:bg-[#0000002f] rounded-full transition">
        <ArrowLeftIcon class="h-5 x-md:hidden" @click="selectToken('')" />
      </div>
      <p class="flex justify-end group text-sm">
        <span class="group-hover:cursor-pointer group-hover:underline"
          >View on Etherscan</span
        >
        <ExternalLinkIcon class="h-5 ml-2 group-hover:cursor-pointer" />
      </p>
    </div>

    <div
      v-if="details"
      v-for="(detail, key, i) in details"
      :key="i"
      class="mb-6"
    >
      <p class="font-medium text-xs">{{ key }}:</p>
      <h2 class="font-bold text-xl break-words">{{ detail }}</h2>
    </div>

    <div v-if="details" class="flex mt-10">
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
import { computed } from "vue"
import { ArrowLeftIcon, ExternalLinkIcon } from "@heroicons/vue/outline"
import { Token } from "../../types/Token.js"

const props = defineProps<{
  selectedToken: Token | undefined
  selectToken: (address: string) => void
}>()

const details = computed(() => {
  if (props.selectedToken) {
    return {
      NAME: props.selectedToken.name,
      SYMBOL: props.selectedToken.symbol,
      NETWORK: props.selectedToken.network,
      TYPE: props.selectedToken.type,
      "INITIAL SUPPLY": props.selectedToken.initialSupply,
      "MINT PRICE": props.selectedToken.mintPrice + " ETH",
      ADDRESS: props.selectedToken.address,
    }
  } else {
    return null
  }
})
</script>
