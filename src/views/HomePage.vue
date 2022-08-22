<template>
  <Header />
  <main class="mx-4 sm:mx-8 md:mx-10 lg:mx-20 mt-10 md:mt-24 lg:mt-36">
    <Hero />
    <Boxes />
    <Message />
    <CallToAction />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from "../components/homepage/Header.vue"
import Hero from "../components/homepage/Hero.vue"
import Boxes from "../components/homepage/Boxes.vue"
import Message from "../components/homepage/Message.vue"
import Footer from "../components/homepage/Footer.vue"
import CallToAction from "../components/homepage/CallToAction.vue"
</script>
