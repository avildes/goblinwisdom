<template>
    <div class="footer">
      <button @click="emit('openAbout')">About</button>
    </div>
  </template>
  
  <script setup>
  const emit = defineEmits(['openAbout']);
  </script>
  
  <style lang="css">
  .footer {
    position: absolute;
    bottom: 0px;
    height: 30px;
    @apply w-full flex flex-row place-content-center text-white;
  }
  </style>
  