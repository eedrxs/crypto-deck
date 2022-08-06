<template>
  <section
    class="bg-white px-6 pt-10"
    @click.stop="$emit('toggle-sidebar', false)"
  >
    <div class="flex justify-between items-center">
      <MenuIcon
        class="h-8 lg:hidden"
        @click.stop="$emit('toggle-sidebar', true)"
      />
      <h1 class="font-firs font-bold text-4xl">Tokens</h1>
    </div>

    <hr class="border w-[full] my-3" />

    <div class="flex flex-wrap py-4 gap-6">
      <div
        v-for="(token, i) in tokens"
        :key="i"
        class="flex flex-col justify-between px-4 pb-7 pt-5 h-56 w-56 bg-[#F9D423] rounded-lg hover:outline outline-3 outline-black cursor-pointer"
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
import { MenuIcon } from "@heroicons/vue/outline"

const props = defineProps<{
  tokens: Token[]
  sidebarOpen: boolean
}>()

interface Token {
  name: string
  symbol: string
  network: string
  type: string
}
</script>
