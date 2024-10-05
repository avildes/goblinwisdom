<template>
  <div class="card" v-if="loadingState === 'success'">
    <h1 class="text cardo-regular-italic text-shadow">
      {{ flavor }}
    </h1>
    <img :src="image" alt="Goblin Card" class="w-full max-w-xs md:max-w-sm lg:max-w-md" />
  </div>

  <div v-if="loadingState === 'loading'" class="loading">
    <Loading />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from "axios";
import { API_URL } from "../../config";
import Loading from "./Loading.vue";

const background = ref("https://cards.scryfall.io/art_crop/front/4/4/44420f52-2ed8-4f81-93e4-5decc77bed01.jpg?1699044280")
const image = ref("https://cards.scryfall.io/png/front/4/4/44420f52-2ed8-4f81-93e4-5decc77bed01.png?1699044280")
const flavor = ref("\"He would've wanted me to have it!\"")
const loadingState = ref("loading")

const fetchCard = () => {
  loadingState.value = "loading";
  axios.get(API_URL).then((response) => {
    setTimeout(() => {
      loadingState.value = "success";
      flavor.value = response.data.flavor;
      image.value = response.data.image;
      background.value = response.data.background;
    }, 1000);
  }).finally(() => {
    loadingState.value = "success";
    document.querySelector(".wisdom").style.backgroundImage = `url(${background.value})`;
  });
}

onMounted(() => {
  fetchCard();
})
</script>

<style scoped>
.card {
  @apply gap-4 content-center p-8 rounded-lg flex flex-col-reverse items-center md:flex-row lg:space-x-4;
}

.loading {
  @apply fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center;
}

.text {
  @apply pt-4 md:p-4 text-2xl md:text-5xl lg:text-6xl text-center text-white;
}

.cardo-regular-italic {
  font-family: "Cardo", serif;
  font-weight: 400;
  font-style: italic;
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
