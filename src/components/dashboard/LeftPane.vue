<template>
  <aside
    :class="[
      sidebarOpen ? 'left-0' : '-left-[100%]',
      'fixed min-h-full z-20 x-md:!left-0 flex flex-col items-center justify-between bg-crypto-blue p-6 transition-all',
    ]"
  >
    <div class="w-full">
      <h1
        class="font-firs font-bold text-white text-xl text-center mb-8 x-md:mb-12 hover:cursor-pointer"
      >
        CryptoDeck
      </h1>

      <div
        :class="[
          route.fullPath === '/user/new' ? '!bg-[#104EAD]' : '',
          'dashboard-button',
        ]"
        @click.stop="router.push('new')"
        @click.left="$emit('toggle-sidebar', false)"
      >
        <PlusCircleIcon class="dashboard-button-icon" /> New Token
      </div>

      <hr class="my-3 opacity-20" />

      <div
        :class="[
          route.fullPath === '/user/tokens' ? '!bg-[#104EAD]' : '',
          'dashboard-button',
        ]"
        @click.stop="router.push('tokens')"
        @click.left="$emit('toggle-sidebar', false)"
      >
        <CashIcon class="dashboard-button-icon" /> Tokens
      </div>
    </div>

    <div
      class="relative flex items-center justify-around w-full bg-[#104EAD] rounded-[1.7rem] p-2 cursor-pointer"
    >
      <div
        :style="{ backgroundImage: user.profilePhoto }"
        class="h-10 w-10 bg-cover bg-center rounded-full bg-white/70 -ml-1"
      ></div>
      <p
        class="text-white text-sm x-md:text-base font-medium tracking-wide ml-1 x-md:-ml-1"
      >
        {{ user.name?.substring(0, 9) }}...
      </p>
      <DotsVerticalIcon
        class="h-6 text-white/60 hover:text-white transition"
        @click="popupOpen = !popupOpen"
      />
      <ProfilePopUp
        v-show="popupOpen"
        @toggle-sidebar="$emit('toggle-sidebar', false)"
        @toggle-popup="popupOpen = false"
      />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { useRouter, useRoute } from "vue-router"
import ProfilePopUp from "./ProfilePopUp.vue"
import {
  PlusCircleIcon,
  CashIcon,
  DotsVerticalIcon,
} from "@heroicons/vue/outline"

const emits = defineEmits(["toggle-sidebar"])
const props = defineProps<{
  sidebarOpen: boolean
  userDetails: any
}>()

const user = computed(() => {
  return {
    name: props.userDetails?.name,
    profilePhoto: props.userDetails?.profilePhoto
      ? `url('${props.userDetails?.profilePhoto}')`
      : "url('/src/assets/images/profile.jpg'",
  }
})

const router = useRouter()
const route = useRoute()
const popupOpen = ref(false)
</script>
