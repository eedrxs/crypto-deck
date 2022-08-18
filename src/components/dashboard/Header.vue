<template>
  <div class="flex top-0 left-0 justify-between items-center">
    <MenuIcon
      class="h-7 x-md:h-8 x-md:hidden cursor-pointer"
      @click="$emit('toggle-sidebar', true)"
    />
    <h1 class="font-firs font-bold text-2xl x-md:text-4xl">{{ page }}</h1>
  </div>

  <hr class="border w-full my-3" />
</template>

<script setup lang="ts">
import { MenuIcon } from "@heroicons/vue/outline"

const props = defineProps({ page: String })
const emits = defineEmits(["toggle-sidebar"])
</script>
