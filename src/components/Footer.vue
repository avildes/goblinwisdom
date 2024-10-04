<template>
  <div class="footer" v-if="$route.path === '/'">
    <RouterLink to="/about">About</RouterLink>
  </div>
</template>

<style lang="css">
.footer {
  position: absolute;
  bottom: 0px;
  height: 30px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  @apply w-full flex flex-row place-content-center text-white;
}
</style>