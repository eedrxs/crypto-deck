<template>
  <section class="bg-white px-6 pt-10">
    <h1 class="font-firs font-bold text-4xl">Tokens</h1>

    <hr class="border w-[30rem] my-3" />

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
const tokens = [
  { name: "Satoshi", symbol: "SAT", network: "Ethereum", type: "ERC20" },
  { name: "hBAr", symbol: "HBAR", network: "Ethereum", type: "ERC1155" },
  { name: "Shiba Inu", symbol: "SHIB", network: "Ethereum", type: "ERC20" },
  { name: "Dogecoin", symbol: "DOGE", network: "Ethereum", type: "ERC1155" },
]
</script>
