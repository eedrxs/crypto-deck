<template>
  <section
    class="bg-white px-6 pt-10"
    @click.stop="$emit('toggle-sidebar', false)"
  >
    <div class="flex justify-between items-center">
      <MenuIcon
        class="h-8 lg:hidden"
        @click.stop="$emit('toggle-sidebar', true)"
      />
      <h1 class="font-firs font-bold text-4xl">Profile</h1>
    </div>

    <hr class="border w-[full] my-3" />

    <div class="flex flex-wrap py-4 gap-6">
      <div class="flex gap-x-4 mt-4">
        <div class="h-[14rem] w-[14rem] bg-[#D9D9D9] rounded-full"></div>
        <div class="mt-10">
          <h1 class="font-medium text-3xl">Idris Abdul-Lateef</h1>
          <p class="font-medium text-sm text-[#BABABA]">
            created on 12 Aug 2022
          </p>
        </div>
        <div></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MenuIcon } from "@heroicons/vue/outline"

const props = defineProps<{ sidebarOpen: boolean }>()
</script>
