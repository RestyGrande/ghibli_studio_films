<script setup>
import { computed } from "vue";

const props = defineProps({
  score: { type: [Number, String], required: true },
});

const filledStars = computed(() => Math.round(props.score / 20));

const displayScore = computed(() => `${props.score}/100`);
</script>

<template>
  <div class="flex items-center gap-1">
    <span v-for="n in 5" :key="n" class="text-yellow-400 text-xl">
      <span v-if="n <= filledStars">★</span>

      <span v-else>☆</span>
    </span>

    <span class="text-sm text-gray-500 ml-1">
      {{ displayScore }}
    </span>
  </div>
</template>
