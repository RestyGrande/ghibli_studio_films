<script setup>
import Header from "@/components/Header.vue";
import Spinner from "@/components/Spinner.vue";
import StarRating from "@/components/StarRating.vue";
import { onMounted, ref } from "vue";

const props = defineProps({
  id: String,
});

const film = ref(null);
const error = ref(false);

onMounted(async () => {
  try {
    if (!props.id) return [];
    const res = await fetch(`https://ghibliapi.vercel.app/films/${props.id}`);

    if (!res.ok) {
      error.value = true;
      return;
    }

    const data = await res.json();

    if (!data || Object.keys(data).length === 0) {
      error.value = true;
      return;
    }

    film.value = data;
  } catch (e) {
    error.value = true;
  }
});
</script>

<template>
  <Header />

  <div v-if="film" class="mx-auto w-full max-w-5xl px-4 py-10">
    <div class="flex flex-col md:flex-row gap-6">
      <div class="w-full md:w-1/3">
        <img
          :src="film.image"
          :alt="film.title"
          class="w-full h-auto rounded-lg shadow"
        />
      </div>

      <div class="flex-1">
        <h2 class="font-bold text-2xl mb-1">{{ film.title }}</h2>
        <small class="text-gray-500 block mb-4 text-sm">
          {{ film.original_title }} — {{ film.original_title_romanised }}
        </small>

        <p class="text-gray-700 leading-relaxed text-sm sm:text-base">
          {{ film.description }}
        </p>

        <ul class="mt-6 space-y-3 text-sm sm:text-base">
          <li><strong>Director:</strong> {{ film.director }}</li>
          <li><strong>Producer:</strong> {{ film.producer }}</li>
          <li><strong>Release Date:</strong> {{ film.release_date }}</li>
          <li><strong>Running Time:</strong> {{ film.running_time }} min</li>
          <li class="flex items-center gap-2">
            <strong>Rating Score:</strong> <StarRating :score="film.rt_score" />
          </li>
        </ul>

        <button
          class="mt-10 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-6 rounded-lg text-sm font-medium transition"
          @click="$router.back()"
        >
          ← Back
        </button>
      </div>
    </div>
  </div>

  <div v-else-if="error" class="text-center py-10">
    <h3 class="text-red-600 mb-3 text-lg font-semibold">Film not found</h3>
    <button
      class="mt-10 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-6 rounded-lg text-sm font-medium transition"
      @click="$router.back()"
    >
      ← Go Back
    </button>
  </div>

  <div v-else class="text-center py-10 text-gray-500">
    <Spinner :message="`Loading details...`" />
  </div>
</template>
