<template>
  <div class="grid grid-cols-[auto_1fr]">
    <span class="mx-3 mt-4">{{ props.label }}</span>
    <div class="relative min-w-[200px]">
      <div
        @click="isActive = !isActive"
        class="absolute bg-white top-0 left-0 min-w-[200px] border py-4 px-5 rounded-2xl transition-[max-height] duration-700 overflow-hidden cursor-pointer"
        :class="{ 'max-h-[58px]': !isActive, 'max-h-[100vh]': isActive }"
      >
        <ul class="text-lg">
          <li class="text-harbour">Program conditions</li>
          <li class="mt-2 hover:text-harbour">All</li>
          <li class="mt-2 hover:text-harbour">Admission</li>
          <li class="mt-2 hover:text-harbour">Harbour.Space</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "Label",
  },
});

const isActive = ref(false);
</script>

<style lang="scss"></style>
