<script setup>
import { ref, onMounted } from "vue";
import navbar from "~/layouts/navbar.vue";
import { useHead } from "@vueuse/head";
useHead({
  title: "Tetsuya.dev",
  meta: [
    { name: "description", content: "Portofolio Tetsuya" },
    { property: "og:title", content: "Tetsuya.dev" },
    { property: "og:description", content: "Portofolio Tetsuya" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://tetsuya.dev/current-page" },
    { property: "og:image", content: "https://tetsuya.dev/link-to-image.jpg" },
  ],
  link: [{ rel: "canonical", href: "https://tetsuya.dev/current-page" }],
});

const theme = ref("light");

onMounted(() => {
  document.documentElement.setAttribute("data-theme", theme.value);
});

const toggleTheme = () => {
  theme.value = theme.value === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", theme.value);
};
</script>

<template>
  <div class="flex">
    <div class=" flex items-center" >
      <navbar class="bg-white bg-opacity-0 absolute z-[99] " />
    </div>

    
    <div class=" relative h-screen w-screen ">
      <NuxtImg src="img/background.png" class="block w-full h-full object-cover"/>
      <div class="flex flex-col justify-center items-center h-full absolute inset-0 bg-black bg-opacity-75">
        <h1 class="text-2xl text-red-600">Welcome to the homepage</h1>
        <P class="text-white"> TETSUYA KUMIKO</P>
      </div>
    </div>
  </div>
</template>
