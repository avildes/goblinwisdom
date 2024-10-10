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
    @apply h-full w-full p-8 rounded-lg text-[var(--text-color)] flex flex-col items-center bg-[var(--color-surface-a0)];
    font-family: Cascadia code, monospace;
}

.content {
    @apply max-w-max md:max-w-screen-lg;
}

#header {
    @apply text-4xl text-[var(--color-primary-a0)];
}

/*https://colorffy.com/dark-theme-generator?colors=5211a2-1F1B24*/
</style>