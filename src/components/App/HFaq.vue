<template>
  <section class="px-10 lg:px-96 lg:mb-40">
    <div
      class="flex flex-col lg:flex-row lg:justify-between lg:items-center pb-24 mb-10 border-b"
    >
      <h2 class="text-4xl w-96 text-harbour">Frequently asked questions</h2>
      <HSelect class="mt-10 lg:mt-0" label="Filter by:" />
    </div>
    <div v-for="i of 5" :key="i" class="flex justify-between border-b py-4">
      <div class="hidden lg:block">
        <h4 class="text-harbour text-xl">Program conditions</h4>
      </div>
      <div class="w-[40rem]">
        <span class="text-xl">What if I want to start my own company? </span>
        <p
          class="my-10 font-lighter text-xl overflow-hidden transition-[max-height] duration-700"
          :class="{ 'max-h-0': active !== i, 'max-h-full': active === i }"
        >
          What are my obligations? The majority of our students receive numerous
          job offers at the end of the second academic year of their Bachelor's
          programme and at the end of the first academic year of their Master's
          programme. The best applicants receive an offer from our industrial
          partners at the beginning of their programmes. Harbour.Space is highly
          recognized among innovative employers and is strategic partner of
          B.Grimm multi- industry corporation with 140 years of history in
          Thailand. Together we insure students get the best knowledge about the
          current job market opportunities. We offer our students paid
          internships options during studies jointly with our industrial
          partners. Employers that hired graduates of Harbour.Space in the past
          include Google, IBM, Accenture, Typeform, Frog, and other tech centric
          companies. Our industry specific employability report could be
          provided to you separately during the admission process.
        </p>
      </div>
      <HButton @click="toggleActive(i)" :is-active="active === i" />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import HButton from "../Interactions/HButton.vue";
import HSelect from "../Interactions/HSelect.vue";
const active = ref(null);

const toggleActive = (idx) => {
  active.value = active.value === idx ? null : idx;
};
</script>

<style scoped></style>
