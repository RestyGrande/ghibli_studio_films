<script setup>
import StarRating from "@/components/StarRating.vue";

defineProps({
  film: Object,
});
</script>

<template>
  <div
    class="bg-white rounded-xl shadow hover:shadow-lg transition p-3 flex flex-col h-full"
  >
    <img
      :src="film.image"
      :alt="film.title"
      class="w-full h-60 object-cover rounded-lg mb-3"
    />

    <h3 class="font-bold text-lg">
      {{ film.title }}
      <span class="text-gray-500 text-sm block">
        ({{ film.original_title }})
      </span>
    </h3>

    <p class="text-gray-600 text-sm mt-2 line-clamp-3">
      {{ film.description }}
    </p>

    <div class="mt-3 text-sm text-gray-700 space-y-1">
      <p><span class="font-semibold">Release:</span> {{ film.release_date }}</p>
      <p>
        <span class="font-semibold">Rating:</span>
        <StarRating :score="film.rt_score" />
      </p>
    </div>

    <router-link
      :to="`/film/${film.id}`"
      class="mt-10 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg text-sm font-medium transition"
    >
      View Details
    </router-link>
  </div>
</template>
