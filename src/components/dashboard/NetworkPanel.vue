<template>
  <div
    class="flex flex-col justify-between self-start w-[20rem] bg-[#d9d9d948] rounded-lg pt-7 pb-5 px-4"
  >
    <div class="flex justify-between items-center mb-14">
      <span class="font-medium text-lg">Choose a network:</span>
      <select
        class="focus:outline-[#00000015] h-full py-1 pl-2 pr-7 border-[#D9D9D9] bg-[#d9d9d980] text-gray-600 sm:text-sm rounded-md"
      >
        <option value="">Ethereum</option>
        <option value="">Solana</option>
      </select>
    </div>

    <button
      class="w-full bg-crypto-blue hover:bg-[hsl(216,84%,38%)] text-white font-medium rounded-md py-3 transition"
    >
      Connect Wallet
    </button>
  </div>
</template>
