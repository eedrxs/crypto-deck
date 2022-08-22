<template>
  <div id="call-to-action" class="bg-gray-50 mb-24">
    <div
      class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
    >
      <h2
        class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
      >
        <span class="block">Ready to dive in?</span>
        <span class="block text-crypto-blue">Start buidling today.</span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <router-link
            to="/register"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-crypto-blue hover:bg-[hsl(216,84%,38%)]"
          >
            Get started
          </router-link>
        </div>
        <div class="ml-3 inline-flex rounded-md shadow">
          <router-link
            to="/login"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-crypto-blue bg-white hover:bg-indigo-50"
          >
            Log in
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#call-to-action {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}
</style>
