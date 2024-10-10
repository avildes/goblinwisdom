<template>
  <div class="article">
    <div class="content" v-html="mdToHtml"></div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { marked } from "marked";
import mdfile from "@/assets/markdown/Symlinks.md?url";
const markdown = ref("");

const getMarkdownData = async () => {
  await fetch(mdfile)
    .then((response) => response.text())
    .then((data) => (markdown.value = data));
};
const mdToHtml = computed(() => {
  const mdhtml = marked.parse(markdown.value);
  return mdhtml;
});

getMarkdownData();
</script>

<style lang="css">
.article {
  @apply max-w-max text-pretty rounded-lg bg-[var(--color-surface-a10)] p-4 text-left text-[var(--text-color)] md:max-w-screen-lg md:p-8;
}

.article h1 {
  @apply pb-2 pt-4 text-2xl text-[var(--color-primary-a0)];
}

.article h2 {
  @apply ml-2 pb-2 pt-2 text-xl text-[var(--color-primary-a0)];
}

.article p {
  @apply text-pretty pb-1 pl-1 pr-1 text-lg md:pl-4 md:pr-4;
}

.article p em {
  @apply text-lg italic text-[var(--color-green)];
}

.article blockquote {
  @apply m-4 text-pretty border-l-4 border-[var(--color-primary-a0)] pl-4 text-lg lg:pr-4;
}

.article blockquote em {
  @apply flex justify-end text-lg italic text-[var(--color-surface-a30)];
}

.article img {
  @apply pb-8 pt-4;
}

.article pre {
  @apply m-4 overflow-x-auto text-pretty rounded-lg bg-[var(--color-surface-a10)] p-4;
}

.article pre code {
  @apply bg-[var(--color-surface-a10)] text-[var(--text-color)];
}

.article code {
  @apply text-nowrap rounded-lg bg-[var(--color-green)] p-1 text-[var(--color-surface-a10)];
}
</style>
