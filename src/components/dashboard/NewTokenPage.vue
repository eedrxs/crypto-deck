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
      <h1 class="font-firs font-bold text-4xl">New Token</h1>
    </div>

    <hr class="border w-full my-3" />

    <div class="flex flex-col lg:flex-row py-4">
      <NetworkPanel />
      <hr
        class="lg:border-r lg:border-r-[#d9d9d9a4] lg:h-[24rem] lg:mx-8 my-6"
      />
      <TokenSetupPanel />
    </div>
  </section>
</template>

<script setup lang="ts">
import NetworkPanel from "./NetworkPanel.vue"
import TokenSetupPanel from "./TokenSetupPanel.vue"
import { MenuIcon } from "@heroicons/vue/outline"

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
