<template>
  <section class="bg-white px-3 pt-5 x-md:px-6 x-md:pt-10">
    <Header page="Profile" @toggle-sidebar="$emit('toggle-sidebar', true)" />

    <div class="flex flex-wrap py-4 gap-6">
      <div class="flex gap-x-4 mt-4 relative">
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
        <div
          class="absolute top-0 right-0 bg-crypto-blue hover:bg-[hsl(216,84%,38%)] py-1 px-4 rounded-lg"
          @click="togglePopup = !togglePopup"
        >
          <CogIcon class="h-5 text-white" />
          <div
            v-show="togglePopup"
            class="absolute flex flex-col gap-y-2 right-0 top-[110%] w-[9rem] bg-crypto-blue rounded-lg p-1 text-white"
          >
            <div
              class="flex justify-between items-center hover:bg-[hsl(216,84%,38%)] text-sm rounded-md cursor-pointer p-1"
              @click.stop="togglePopup = !togglePopup"
            >
              <UploadIcon class="h-4" /> <span>Upload photo</span>
            </div>
            <div
              class="flex justify-between items-center hover:bg-[hsl(216,84%,38%)] text-sm rounded-md cursor-pointer p-1"
              @click.stop="togglePopup = !togglePopup"
            >
              <TrashIcon class="h-4" /><span>Delete photo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Header from "./Header.vue"
import { CogIcon, UploadIcon, TrashIcon } from "@heroicons/vue/outline"

const togglePopup = ref(false)

const props = defineProps<{ sidebarOpen: boolean; userDetails: any }>()
const emits = defineEmits(["toggle-sidebar"])
</script>
