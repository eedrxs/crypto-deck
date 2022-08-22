<template>
  <section
    class="flex flex-col-reverse sm:flex-row gap-y-8 items-center sm:justify-between mt-24 md:mt-24 lg:mt-36"
  >
    <div
      class="flex flex-col justify-center font-firs text-center sm:text-left"
    >
      <p class="font-semibold text-[.7rem] sm:text-sm lg:text-lg">
        MULTI-CHAIN CRYPTO PLATFORM
      </p>
      <h1
        class="font-bold w-[70vw] sm:w-[52vw] text-4xl x-md: lg:text-6xl lg:leading-snug"
      >
        Create all your <br class="hidden lg:block" />
        tokens <br class="hidden md:block lg:hidden" />
        in one place
      </h1>
      <div
        class="flex justify-center sm:justify-start gap-x-2 lg:gap-x-4 mt-4 sm:mt-2"
      >
        <div class="token-badge">ERC20</div>
        <div class="token-badge">ERC1155 (WIP)</div>
      </div>
    </div>
    <div class="flex justify-end">
      <img
        src="../../assets/images/ethereum-coin.png"
        class="h-[48vw] sm:h-[40vw] md:h-[32vw] lg:h-[22rem]"
        alt=""
      />
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0% {
    transform: translatey(0px) rotateY(180deg);
  }
  50% {
    transform: translatey(-20px) rotateY(180deg);
  }
  100% {
    transform: translatey(0px) rotateY(180deg);
  }
}

img {
  transform: rotateY(180deg);
  animation: float 6s ease-in-out infinite;
}
</style>
