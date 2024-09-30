<template>
  <div class="main">
    <div class="overlay">
      <div id="app">
        <div v-if="!about">
          <GoblinWisdom />
        </div>
        <div v-else>
          <About @closeAbout="toggleAbout" />
        </div>
      </div>
    </div>
    <Footer @openAbout="toggleAbout" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import About from "./components/goblin-wisdom/About.vue";
import Footer from "./components/Footer.vue";
import GoblinWisdom from "./components/goblin-wisdom/GoblinWisdom.vue";

const about = ref(false);

function toggleAbout() {
  about.value = !about.value;
}
</script>

<style lang="css">
body {
  @apply m-0 p-0 h-screen overflow-hidden;
}

.main {
  @apply h-screen bg-cover bg-center bg-no-repeat;
}

.overlay {
  @apply h-screen bg-orange-900/50 flex items-center justify-center;
}
</style>
