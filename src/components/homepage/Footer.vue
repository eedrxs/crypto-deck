<template>
  <footer
    class="flex flex-col sm:flex-row justify-between bg-crypto-blue text-white h-[15rem] px-5 md:px-10 lg:px-20 py-10 sm:py-14"
  >
    <div>
      <h1 class="font-firs font-bold text-xl md:text-3xl">CryptoDeck</h1>
      <h3 class="text-sm font-medium">Number 1 No-Code Crypto Platform</h3>
    </div>

    <div>
      <a
        href="https://github.com/eedrxs/crypto-deck"
        target="_blank"
        class="flex sm:justify-end items-center gap-x-1 text-[0.9rem] sm:text-base hover:underline"
        ><span>GitHub</span><ExternalLinkIcon class="h-4"
      /></a>

      <p class="text-xs sm:text-sm sm:text-right mt-1">
        Made with lots of sleepless nights
        <img
          src="../../assets/images/smiling-face-with-tear.png"
          class="h-5 inline"
        />
        <br />
        by
        <a href="https://twitter.com/eedrxs" target="_blank" class="underline"
          >@eedrxs</a
        >
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ExternalLinkIcon } from "@heroicons/vue/outline"
</script>
