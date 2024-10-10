<template>
  <div class="blog">
    <!--<h1 id="header">Punk Records</h1>-->
    <h1 id="header">Symlinks</h1>
    <div class="content">
      <Article />
    </div>
  </div>
</template>
<script setup>
import Article from "./Article.vue";
</script>

<style lang="css">
.blog {
  @apply flex flex-col bg-[var(--color-surface-a0)] text-[var(--text-color)] lg:items-center;
  font-family:
    Cascadia code,
    monospace;
}

.content {
  @apply text-pretty;
}

#header {
  @apply flex justify-center pt-8 text-4xl text-[var(--color-primary-a0)];
}

/*https://colorffy.com/dark-theme-generator?colors=5211a2-1F1B24*/
</style>
