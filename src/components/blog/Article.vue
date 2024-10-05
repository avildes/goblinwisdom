<template>
    <div class="content flex flex-col place-content-center" v-html="mdToHtml">
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