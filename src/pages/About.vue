<script setup>
import Banner from "@/components/Banner.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <Header />

  <div class="relative w-full h-64 sm:h-80 mb-10 overflow-hidden">
    <Banner />

    <div class="absolute inset-0 bg-black/40"></div>

    <div class="absolute bottom-6 left-6 text-white">
      <h1 class="text-4xl font-bold drop-shadow-lg">About Studio Ghibli</h1>
      <p class="text-lg drop-shadow-lg">A world of imagination and wonder</p>
    </div>
  </div>

  <main class="mx-auto w-full max-w-5xl px-6 pb-20">
    <section class="mb-10">
      <h2 class="text-2xl font-bold mb-3">Who We Are</h2>
      <p class="text-gray-700 leading-relaxed">
        Studio Ghibli is one of the most beloved animation studios in the world,
        known for its breathtaking storytelling, hand-drawn art style, and
        timeless films created by Hayao Miyazaki, Isao Takahata, and their team.
        This website showcases a curated collection of Studio Ghibli films,
        allowing fans to explore film details, release years, ratings, and more.
      </p>
    </section>

    <section class="mb-10">
      <h2 class="text-2xl font-bold mb-3">What This App Does</h2>
      <ul class="list-disc pl-6 text-gray-700 leading-relaxed">
        <li>Browse Studio Ghibli films with beautiful card designs</li>
        <li>View detailed movie information on each film page</li>
        <li>See ratings, descriptions, posters, and release years</li>
        <li>Enjoy a smooth and responsive Vue 3 Tailwind UI</li>
        <li>Favorite your top Ghibli movies (if enabled)</li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-bold mb-3">About the Developer</h2>
      <p class="text-gray-700 leading-relaxed">
        This project was built using Vue 3, Vite, Tailwind CSS, and the Studio
        Ghibli public API. It demonstrates component-based design, dynamic
        fetching, pagination, routing, and responsive layouts.
      </p>
    </section>
  </main>
</template>
