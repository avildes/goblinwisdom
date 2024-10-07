<template>
    <div class="article">
        <div class="content" v-html="mdToHtml"></div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { marked } from "marked";
const mdfile = "./src/assets/markdown/Symlinks.md";
const markdown = ref("");

const getMarkdownData =
    async () => {
        await fetch(mdfile)
            .then((response) => response.text())
            .then((data) => markdown.value = data);

    };
const mdToHtml = computed(() => {
    const mdhtml = marked.parse(markdown.value);
    return mdhtml;
});

getMarkdownData();
</script>


<style lang="css">
.article {
    @apply p-4 md:p-8 text-left rounded-lg bg-[var(--color-surface-a10)] max-w-max md:max-w-screen-lg text-pretty text-[var(--text-color)];
}

.article h1 {
    @apply text-2xl pt-4 pb-2 text-[var(--color-primary-a0)];
}

.article h2 {
    @apply text-xl ml-2 pt-2 pb-2 text-[var(--color-primary-a0)];
}

.article p {
    @apply text-lg pl-1 pr-1 md:pl-4 md:pr-4 pb-1;
}

.article p em {
    @apply text-lg text-[var(--color-green)] italic;
}

.article blockquote {
    @apply text-lg m-4 pl-4 pr-4 border-l-4 border-[var(--color-primary-a0)];
}

.article blockquote em {
    @apply text-lg text-[var(--color-surface-a30)] italic flex justify-end;
}

.article img {
    @apply pt-4 pb-8;
}

.article pre {
    @apply p-4 m-4 text-pretty bg-[var(--color-surface-a10)] rounded-lg overflow-x-auto;
}

.article pre code {
    @apply text-[var(--text-color)] bg-[var(--color-surface-a10)];
}

.article code {
    @apply p-1 bg-[var(--color-green)] text-nowrap text-[var(--color-surface-a10)] rounded-lg;
}
</style>