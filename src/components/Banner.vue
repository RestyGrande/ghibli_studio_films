<script setup>
import { onMounted, ref } from "vue";

const bannerFilm = ref(null);

onMounted(async () => {
  const res = await fetch("https://ghibliapi.vercel.app/films");
  const films = await res.json();

  bannerFilm.value = films[Math.floor(Math.random() * films.length)];
});
</script>

<template>
  <div
    v-if="bannerFilm"
    class="relative w-full h-72 sm:h-96 mb-6 rounded-xl overflow-hidden"
  >
    <img :src="bannerFilm.movie_banner" class="w-full h-full object-cover" />

    <div class="absolute inset-0 bg-black/40"></div>

    <div class="absolute bottom-5 left-5 text-white">
      <h2 class="text-2xl sm:text-4xl font-bold drop-shadow-lg">
        {{ bannerFilm.title }}
      </h2>
      <p class="text-sm sm:text-base drop-shadow-md">
        {{ bannerFilm.original_title }}
      </p>
    </div>
  </div>
</template>
