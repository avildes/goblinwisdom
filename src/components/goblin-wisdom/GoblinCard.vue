<template>
  <div>
    <div class="card">
      <h1 class="p-8 text-6xl text-center cardo-regular-italic">
        {{ flavor }}
      </h1>
      <img :src="image" alt="Goblin Card" />
    </div>

    <div v-if="loadingState === 'loading'" class="loading">
      <span class="text-gray-500">Loading card...</span>
      <img src="/spinner.svg" alt="loading" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { API_URL } from "../../config";
export default {
  data() {
    return {
      background: "",
      image: "",
      flavor: "",
      loadingState: null,
    };
  },
  methods: {
    fetchCard() {
      this.loadingState = "loading";
      axios.get(API_URL).then((response) => {
        setTimeout(() => {
          this.loadingState = "success";
          this.flavor = response.data.flavor_text;
          this.image = response.data.image_uris.png;
          this.background = response.data.image_uris.art_crop;
          document.querySelector(
            ".app"
          ).style.backgroundImage = `url(${this.background})`;
        }, 1000);
      });
    },
  },
  created() {
    this.fetchCard();
  },
};
</script>

<style scoped>
.card {
  @apply scale-75 top-0 left-0 right-0 bottom-0 grid grid-cols-2 gap-4 content-center p-8 rounded-lg items-center;
  color: aliceblue;
  font-size: large;
}

.loading {
  @apply fixed top-0 left-0 right-0 bottom-0 bg-white flex justify-center items-center;
}

.cardo-regular-italic {
  font-family: "Cardo", serif;
  font-weight: 400;
  font-style: italic;
}
</style>
