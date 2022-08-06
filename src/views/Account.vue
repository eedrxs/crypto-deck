<template>
  <main class="grid grid-cols-1 lg:grid-cols-[28rem_1fr] min-h-screen">
    <div class="hidden lg:flex flex-col items-center justify-center">
      <img
        class="h-[18rem] ml-14"
        src="../assets/images/ethereum-coin.png"
        alt=""
      />
    </div>
    <router-view></router-view>
  </main>
</template>

<style scoped>
img {
  transform: rotateY(180deg);
}
</style>
