<template>
    <div class="blog">
        <h1>Blog</h1>
        <p>Coming soon...</p>
        
    </div>
</template>
<script setup>
import Article from "./Article.vue";
</script>

<style lang="css">
h1 {
    @apply text-4xl font-bold text-white;
}

.blog {
    @apply m-0 p-0 h-full bg-black p-8 rounded-lg text-white flex flex-col items-center;
}
</style>