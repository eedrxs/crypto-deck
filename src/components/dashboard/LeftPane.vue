<template>
  <aside class="flex flex-col items-center justify-between bg-crypto-blue p-6">
    <div class="w-full">
      <h1
        class="font-firs font-bold text-white text-xl text-center mb-12 hover:cursor-pointer"
      >
        CryptoDeck
      </h1>

      <div class="dashboard-button" @click="router.push('/user/new')">
        <PlusCircleIcon class="dashboard-button-icon" /> New Token
      </div>

      <hr class="my-3 opacity-20" />

      <div class="dashboard-button" @click="router.push('/user/tokens')">
        <CashIcon class="dashboard-button-icon" /> Tokens
      </div>
    </div>

    <div
      class="relative flex items-center justify-around w-full bg-[#104EAD] rounded-[1.7rem] p-2 cursor-pointer"
    >
      <div class="h-10 w-10 rounded-full bg-white/70 -ml-1"></div>
      <p class="text-white font-medium tracking-wide -ml-1">Idris Abd...</p>
      <DotsVerticalIcon class="h-6 text-white/60 hover:text-white transition" />
      <ProfilePopUp />
    </div>
  </aside>
</template>

<script setup lang="ts">
import ProfilePopUp from "./ProfilePopUp.vue"
import {
  PlusCircleIcon,
  CashIcon,
  DotsVerticalIcon,
} from "@heroicons/vue/outline"
import { useRouter } from "vue-router"
const router = useRouter()
</script>
