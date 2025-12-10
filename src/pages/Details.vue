<script setup>
import Header from "@/components/Header.vue";
import Spinner from "@/components/Spinner.vue";
import StarRating from "@/components/StarRating.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const film = ref(null);
const error = ref(false);

onMounted(async () => {
  try {
    const res = await fetch(
      `https://ghibliapi.vercel.app/films/${route.params.id}`
    );

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
    <div class="flex gap-4">
      <div class="flex-shrink-0" style="max-width: 350px">
        <img
          :src="film.image"
          :alt="film.title"
          class="img-fluid rounded shadow-sm"
        />
      </div>

      <div class="flex-grow-1">
        <h2 class="font-bold text-lg mb-2">{{ film.title }}</h2>
        <small class="text-muted d-block mb-3">
          {{ film.original_title }} - {{ film.original_title_romanised }}
        </small>

        <p class="fs-5">{{ film.description }}</p>

        <ul class="list-group mt-4">
          <li class="list-group-item">
            <strong>Director:</strong> {{ film.director }}
          </li>
          <li class="list-group-item">
            <strong>Producer:</strong> {{ film.producer }}
          </li>
          <li class="list-group-item">
            <strong>Release Date:</strong> {{ film.release_date }}
          </li>
          <li class="list-group-item">
            <strong>Running Time:</strong> {{ film.running_time }} min
          </li>
          <li class="list-group-item">
            <strong>Rating Score:</strong> <StarRating :score="film.rt_score" />
          </li>
        </ul>

        <button
          class="w-24 mt-10 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg text-sm font-medium transition"
          @click="$router.back()"
        >
          ← Back
        </button>
      </div>
    </div>
  </div>

  <div v-else-if="error" class="text-center py-10">
    <h3 class="text-danger mb-3">Film not found</h3>
    <button
      class="mt-10 w-24 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg text-sm font-medium transition"
      @click="$router.back()"
    >
      ← Go Back
    </button>
  </div>

  <div v-else class="text-center py-10 text-muted">
    <Spinner :message="`Loading details ..`" />
  </div>
</template>
