<template>
  <header
    class="flex justify-between items-center py-4 mx-4 sm:mx-8 md:mx-10 lg:mx-20 md:mt-4 text-crypto-blue"
  >
    <div class="font-extrabold text-xl sm:text-3xl md:text-4xl">CryptoDeck</div>
    <div
      class="flex gap-x-4 font-semibold text-[.7rem] sm:text-[.9rem] md:text-base"
    >
      <button class="hover:underline">
        <router-link to="/login">Sign In </router-link>
      </button>

      <div
        class="bg-crypto-blue hover:bg-[hsl(216,84%,38%)] text-white py-[.4rem] px-3 rounded-md transition"
      >
        <router-link to="/register">Create an account</router-link>
      </div>
    </div>
  </header>
</template>
