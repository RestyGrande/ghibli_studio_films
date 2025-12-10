<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>

<template>
  <header class="w-full py-4">
    <div class="max-w-screen-lg mx-auto flex items-center justify-between px-4">
      <h1 class="text-2xl font-bold tracking-wide text-gray-800">
        Studio Ghibli <span class="text-blue-500">Films</span>
      </h1>

      <nav class="hidden md:flex gap-6 text-gray-600 font-medium">
        <a href="/" class="hover:text-blue-500 transition">Home</a>
        <a href="/about" class="hover:text-blue-500 transition">About</a>
      </nav>

      <button
        @click="isOpen = !isOpen"
        class="md:hidden text-gray-700 focus:outline-none"
      >
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <transition name="fade">
      <nav
        v-if="isOpen"
        class="md:hidden px-4 pt-3 pb-4 bg-white shadow rounded-lg mx-4 mt-2 space-y-3"
      >
        <a
          href="/"
          class="block text-gray-700 hover:text-blue-500 text-lg transition"
        >
          Home
        </a>
        <a
          href="/about"
          class="block text-gray-700 hover:text-blue-500 text-lg transition"
        >
          About
        </a>
      </nav>
    </transition>
  </header>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
