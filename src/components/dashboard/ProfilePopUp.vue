<template>
  <div
    class="absolute bottom-16 flex flex-col bg-[#0D408C] rounded-lg w-[75%] p-1 h-32"
  >
    <div class="profile-popup-item" @click="router.push('profile')">
      Profile
    </div>
    <div class="profile-popup-item" @click="logOut">
      Logout <LogoutIcon class="h-5" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { logOut } from "../../services/authService"
import { LogoutIcon } from "@heroicons/vue/outline"
import { useRouter } from "vue-router"

const router = useRouter()
const props = defineEmits(["toggle-popup"])
</script>
