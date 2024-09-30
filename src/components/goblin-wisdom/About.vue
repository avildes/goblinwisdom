<template>
    <div class="text-black bg-orange-900/50">
        <button @click="emit('closeAbout')">About</button>
    </div>
</template>
  
<script setup>
const emit = defineEmits(['closeAbout'])
</script>

<style lang="css">

</style>