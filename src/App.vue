<template>
  <div id="app">
    <GoblinWisdom />
  </div>
</template>

<script>
import GoblinWisdom from "./components/goblin-wisdom/GoblinWisdom.vue";

export default {
  name: "app",
  components: {
    GoblinWisdom,
  },
};
</script>
<style lang="css">
.app {
  @apply bg-cover bg-center bg-no-repeat;
}
</style>
