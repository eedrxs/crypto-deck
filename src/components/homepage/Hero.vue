<template>
  <section class="grid grid-cols-[1fr_1fr] mt-10 md:mt-24 lg:mt-36">
    <div class="flex flex-col justify-center font-firs">
      <p class="font-semibold text-[.5rem] md:text-sm lg:text-lg">
        MULTI-CHAIN CRYPTO PLATFORM
      </p>
      <h1
        class="font-bold text-[1.1rem] md:text-4xl lg:text-6xl lg:leading-snug"
      >
        Create all your <br />
        tokens in one <br class="lg:hidden" />
        place
      </h1>
      <div class="flex gap-x-2 lg:gap-x-4 mt-2">
        <div class="token-badge">ERC20</div>
        <div class="token-badge">ERC1155 (WIP)</div>
      </div>
    </div>
    <div class="flex justify-end">
      <img
        src="../../assets/images/ethereum-coin.png"
        class="h-[7.5rem] md:h-[18rem] lg:h-[22rem]"
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
