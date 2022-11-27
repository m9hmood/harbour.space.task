<script setup>
import HNavbar from "./components/HNavbar.vue";
import HHeader from "./components/App/HHeader.vue";
import HAbout from "./components/App/HAbout.vue";
import HQuotes from "./components/App/HQuotes.vue";
import HFaq from "./components/App/HFaq.vue";
</script>

<template>
  <HNavbar />
  <main class="overflow-x-hidden">
    <HHeader />
    <HAbout />
    <HQuotes />
    <HFaq />
  </main>
</template>
