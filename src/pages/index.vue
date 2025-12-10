<script setup>
import Banner from "@/components/Banner.vue";
import Header from "@/components/Header.vue";
import Pagination from "@/components/Pagination.vue";
import Spinner from "@/components/Spinner.vue";
import FilmCard from "../components/FilmCard.vue";

import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps({
  page: { type: Number, default: 1 },
});

const films = ref([]);
const page = ref(props.page ?? 1);
const perPage = route.query["page"] ?? 4;

onMounted(async () => {
  const res = await fetch("https://ghibliapi.vercel.app/films");
  films.value = await res.json();
});

const totalPages = computed(() => Math.ceil(films.value.length / perPage));

const paginatedFilms = computed(() => {
  const start = (page.value - 1) * perPage;
  return films.value.slice(start, start + perPage);
});
</script>

<template>
  <Header />
  <Banner />

  <main class="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-4">
    <div
      v-if="films.length === 0"
      class="py-10 text-center text-gray-500 text-lg"
    >
      <Spinner :message="`Loading films...`" />
    </div>

    <div
      v-else-if="paginatedFilms.length === 0"
      class="py-10 text-center text-gray-500 text-lg"
    >
      No films found.
    </div>

    <div
      v-else
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
    >
      <div v-for="film in paginatedFilms" :key="film.id" class="w-full">
        <FilmCard :film="film" />
      </div>
    </div>

    <Pagination :total-pages="totalPages" v-model:page="page" />
  </main>
</template>
