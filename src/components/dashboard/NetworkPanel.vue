<template>
  <div
    class="flex flex-col justify-between self-start w-[20rem] bg-[#d9d9d948] rounded-lg pt-7 pb-5 px-4"
  >
    <div class="flex justify-between items-center mb-14">
      <span class="font-medium text-lg">Choose a network:</span>
      <select
        v-model="network"
        class="focus:outline-[#00000015] h-full py-1 pl-2 pr-7 border-[#D9D9D9] bg-[#d9d9d980] text-gray-600 sm:text-sm rounded-md"
      >
        <option value="Polygon Mumbai">Polygon Mumbai</option>
        <option value="Ethereum">Ethereum</option>
      </select>
    </div>

    <button
      :class="[
        signer
          ? 'bg-green-500 hover:bg-green-600'
          : 'bg-crypto-blue hover:bg-[hsl(216,84%,38%)]',
        'w-full text-white font-medium rounded-md py-3 transition',
      ]"
      @click="$emit('connect')"
    >
      {{ signer ? "Connected" : "Connect Wallet" }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { TokenForm } from "../../types/Token"

const props = defineProps<{
  network: string
  signer: any
}>()

const emits = defineEmits(["connect"])
</script>
