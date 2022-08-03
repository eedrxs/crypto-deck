<template>
  <div
    class="absolute bottom-16 flex flex-col bg-[#0D408C] rounded-lg w-[75%] p-1 h-32"
  >
    <div class="profile-popup-item">Profile</div>
    <div class="profile-popup-item">Logout <LogoutIcon class="h-5" /></div>
  </div>
</template>

<script setup lang="ts">
import { LogoutIcon } from "@heroicons/vue/outline"
</script>
