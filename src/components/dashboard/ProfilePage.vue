<template>
  <section class="bg-white px-3 pt-5 x-md:px-6 x-md:pt-10">
    <Header page="Profile" @toggle-sidebar="$emit('toggle-sidebar', true)" />

    <div class="flex flex-wrap py-4 gap-6">
      <div class="flex gap-x-4 mt-4">
        <div
          class="min-h-[6rem] min-w-[6rem] h-[14rem] w-[14rem] bg-[#D9D9D9] rounded-full"
        ></div>
        <div class="mt-10">
          <h1 class="font-medium text-3xl">{{ userDetails.name }}</h1>
          <p class="font-medium text-sm text-[#BABABA]">
            created on
            {{ new Date(userDetails.createdAt.seconds * 1000).toDateString() }}
          </p>
        </div>
        <div></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Header from "./Header.vue"

const props = defineProps<{ sidebarOpen: boolean; userDetails: any }>()
const emits = defineEmits(["toggle-sidebar"])
</script>
