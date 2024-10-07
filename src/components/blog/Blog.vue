<template>
    <div class="blog">
        <!--<h1 id="header">Punk Records</h1>-->
        <h1 id="header">Symlinks</h1>
        <Article />
    </div>
</template>
<script setup>
import Article from "./Article.vue";
</script>

<style lang="css">
.blog {
    @apply h-full p-8 max-w-max md:max-w-screen-lg rounded-lg text-[var(--text-color)] flex flex-col text-center bg-[var(--color-surface-a0)];
    font-family: Cascadia code, monospace;
}

#header {
    @apply text-4xl text-[var(--color-primary-a0)];
}

/*https://colorffy.com/dark-theme-generator?colors=5211a2-1F1B24*/
</style>