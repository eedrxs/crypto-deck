<template>
  <section class="bg-white px-3 pt-5 x-md:px-6 x-md:pt-10">
    <Header page="Tokens" @toggle-sidebar="$emit('toggle-sidebar', true)" />

    <div
      class="flex flex-wrap py-4 px-1 gap-6 max-h-full overflow-y-auto !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-crypto-blue"
    >
      <div
        v-for="(token, i) in tokens"
        :key="i"
        :class="[
          token.address === selectedToken?.address
            ? 'outline outline-2 outline-black'
            : 'hover:outline outline-[#00000079]',
          'flex flex-col grow aspect-square justify-between px-4 pb-7 pt-5 h-56 w-56 rounded-lg outline-2 cursor-pointer transition',
        ]"
        :style="{ backgroundColor: networks[token.network].color }"
        @click="selectToken(token.address)"
      >
        <p class="text-right font-medium mr-1">{{ token.symbol }}</p>
        <div>
          <h3 class="font-bold text-3xl mb-1">{{ token.name }}</h3>
          <span class="text-sm mr-2">{{ token.network }}</span
          ><span class="text-sm mr-2">{{ token.type }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Header from "./Header.vue"
import { Networks, Token } from "../../types/Token.js"

const emits = defineEmits(["toggle-sidebar"])
const props = defineProps<{
  tokens: Token[]
  networks: Networks
  sidebarOpen: boolean
  selectedToken: Token
  selectToken: (address: string) => void
}>()
</script>
