<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  totalPages: { type: Number, required: true },
});

const emit = defineEmits(["update:page"]);

const route = useRoute();
const router = useRouter();

const page = ref(1);

onMounted(() => {
  const queryPage = Number(route.query.page);
  if (queryPage && queryPage > 0) {
    page.value = queryPage;
  }
});

function goToPage(num) {
  if (num < 1 || num > props.totalPages) return;

  page.value = num;
  emit("update:page", num);

  router.push({
    query: {
      ...route.query,
      page: num,
    },
  });
}

watch(
  () => route.query.page,
  (val) => {
    if (val) page.value = Number(val);
  }
);
</script>

<template>
  <div class="flex justify-content-center my-4 gap-2">
    <button
      class="rounded border border-gray-500 px-3 py-1"
      :disabled="page === 1"
      @click="goToPage(page - 1)"
    >
      ‹
    </button>

    <button
      v-for="num in totalPages"
      :key="num"
      class="rounded border px-3 py-1 gap-2"
      :class="{
        'bg-primary bg-gray-500': num === page,
        'border-gray-500': num !== page,
      }"
      @click="goToPage(num)"
    >
      {{ num }}
    </button>

    <button
      class="rounded border border-gray-500 px-3 py-1"
      :disabled="page === totalPages"
      @click="goToPage(page + 1)"
    >
      ›
    </button>
  </div>
</template>
