<template>
  <div class="wisdom">
    <div class="overlay">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "./Footer.vue";
</script>

<style lang="css">
.wisdom {
  @apply h-screen bg-cover bg-center bg-no-repeat m-0 p-0 overflow-hidden bg-orange-900;
}

.overlay {
  @apply h-screen bg-orange-900/50 flex items-center justify-center;
}
</style>