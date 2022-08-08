<template>
  <form
    class="self-start max-w-[34rem] bg-[#d9d9d948] rounded-lg pt-7 pb-5 px-5"
  >
    <div class="flex flex-col gap-y-1 mb-5">
      <label for="name" class="token-setup-input-label">Name:</label>
      <input type="text" class="token-setup-input" id="name" />
    </div>

    <div
      class="flex flex-col x-sm:flex-row x-sm:justify-between gap-y-5 x-sm:gap-x-6 mb-5"
    >
      <div>
        <label class="token-setup-input-label" for="symbol">Symbol:</label>
        <input type="text" class="token-setup-input" id="symbol" />
      </div>

      <div class="block w-[100%] x-sm:w-[50%]">
        <label class="token-setup-input-label" for="type">Type:</label>
        <select class="token-setup-input border-none" id="type">
          <option label="Select a type" disabled selected></option>
          <option value="">ERC20</option>
          <option value="">ERC1155</option>
        </select>
      </div>
    </div>

    <div
      class="flex flex-col x-sm:flex-row x-sm:justify-between gap-y-5 x-sm:gap-x-6 mb-5"
    >
      <div>
        <label class="token-setup-input-label" for="symbol"
          >Initial Supply:</label
        >
        <input type="number" class="token-setup-input" id="symbol" />
      </div>

      <div>
        <label class="token-setup-input-label" for="type">Mint Price:</label>
        <input type="number" class="token-setup-input" id="type" />
      </div>
    </div>

    <div class="flex gap-x-6 mt-7 mb-16">
      <div class="flex items-center gap-x-2">
        <label for="mintable" class="cursor-pointer font-medium text-sm"
          >Mintable:</label
        >
        <label
          for="mintable"
          class="inline-flex relative items-center cursor-pointer"
        >
          <input type="checkbox" value="" id="mintable" class="sr-only peer" />
          <div
            class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
          ></div>
        </label>
      </div>

      <div class="flex items-center gap-x-2">
        <label for="burnable" class="cursor-pointer font-medium text-sm"
          >Burnable:</label
        >
        <label
          for="burnable"
          class="inline-flex relative items-center cursor-pointer"
        >
          <input type="checkbox" value="" id="burnable" class="sr-only peer" />
          <div
            class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
          ></div>
        </label>
      </div>
    </div>

    <button
      @click.prevent=""
      class="w-full bg-crypto-blue hover:bg-[hsl(216,84%,38%)] text-white font-medium rounded-md py-3 transition"
    >
      Create Token
    </button>
  </form>
</template>
