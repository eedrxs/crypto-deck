<template>
  <aside
    :class="[
      selectedToken ? 'right-0' : 'right-[100%]',
      'fixed min-h-screen min-w-full top-0 md:static bg-[#D9D9D9] py-14 px-6',
    ]"
  >
    <div
      v-if="details"
      class="flex justify-between md:justify-end items-center"
    >
      <ArrowLeftIcon class="h-5 md:hidden" @click="selectToken('')" />
      <p class="flex justify-end group mb-6 text-sm">
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
    return undefined
  }
})
</script>
