<template>
  <main class="md:grid md:grid-cols-[15rem_1fr_21.5rem] min-h-screen">
    <LeftPane />
    <ContentArea />
    <RightPane />
  </main>
</template>

<script setup lang="ts">
import LeftPane from "../components/dashboard/LeftPane.vue"
import ContentArea from "../components/dashboard/ContentArea.vue"
import RightPane from "../components/dashboard/RightPane.vue"
</script>
