<template>
  <section class="bg-white px-3 pt-5 x-md:px-6 x-md:pt-10">
    <Header page="Profile" @toggle-sidebar="$emit('toggle-sidebar', true)" />

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
import { auth } from "../../../firebase"
import { readDocFromDb } from "../../services/dbService"
import Header from "./Header.vue"

const props = defineProps<{ sidebarOpen: boolean }>()
const emits = defineEmits(["toggle-sidebar"])
</script>
