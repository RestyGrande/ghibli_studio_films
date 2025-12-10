<script setup>
const props = defineProps({
  message: {
    type: String,
    default: "Loading...",
  },
});
</script>

<template>
  <div class="flex flex-col items-center justify-center py-10">
    <div
      class="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"
    ></div>

    <p class="mt-3 text-gray-500 text-sm">
      {{ message }}
    </p>
  </div>
</template>
