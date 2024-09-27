<template>
    <div class="main">
        <GoblinCard />
    </div>
</template>

<script>

import GoblinCard from './GoblinCard.vue';

export default {
    name: "GoblinWisdom",
    components: {
        GoblinCard,
    },
};
</script>

<style lang="css">
.main {
    @apply bg-orange-900/50 
}
</style>