<template>
  <header
    class="flex justify-between items-center py-4 mx-5 md:mx-10 lg:mx-20 md:mt-4 text-crypto-blue"
  >
    <div class="font-extrabold text-md md:text-4xl">CryptoDeck</div>
    <div class="flex gap-x-4 font-medium text-[.6rem] md:text-base">
      <button class="hover:underline">
        <router-link to="/user/tokens">Sign In </router-link>
      </button>

      <div class="bg-crypto-blue text-white py-[.4rem] px-3 rounded-md">
        <router-link to="/user/new">Create an account</router-link>
      </div>
    </div>
  </header>
</template>
