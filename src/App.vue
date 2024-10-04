<template>
  <div class="main">
    <div class="overlay">
      <div id="app">
        <main>
          <RouterView />
        </main>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "./components/Footer.vue";

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
