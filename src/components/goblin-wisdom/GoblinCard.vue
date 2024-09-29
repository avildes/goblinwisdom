<template>
  <div class="main">
    <div class="overlay">
      <div class="card" v-if="loadingState === 'success'">
        <h1 class="text cardo-regular-italic text-shadow">
          {{ flavor }}
        </h1>
        <img :src="image" alt="Goblin Card" class="w-full max-w-xs md:max-w-sm lg:max-w-md" />
      </div>
      
      <div v-if="loadingState === 'loading'" class="loading">
        <Loading/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { API_URL } from "../../config";
import Loading from "./Loading.vue"
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
    fetchLocal() {
      this.flavor = "\"He would've wanted me to have it!\"";
      this.image = "https://cards.scryfall.io/png/front/4/4/44420f52-2ed8-4f81-93e4-5decc77bed01.png?1699044280";
      this.background = "https://cards.scryfall.io/art_crop/front/4/4/44420f52-2ed8-4f81-93e4-5decc77bed01.jpg?1699044280";
      document.querySelector(".main").style.backgroundImage = `url(${this.background})`;
      this.loadingState = "success";
    },
    fetchCard() {
      this.loadingState = "loading";
      axios.get(API_URL).then((response) => {
        setTimeout(() => {
          this.loadingState = "success";
          this.flavor = response.data.flavor;
          this.image = response.data.image;
          this.background = response.data.background;
          document.querySelector(".main").style.backgroundImage = `url(${this.background})`;
        }, 1000);
      });
    },
  },
  mounted() {
    this.fetchCard();
    //this.fetchLocal();
  },
  components: {
    Loading
  }
};
</script>

<style scoped>
body {
  @apply m-0 p-0 h-screen overflow-hidden;
}

.main {
  @apply h-screen bg-cover bg-center bg-no-repeat;
}

.overlay {
  @apply h-screen bg-orange-900/50 flex items-center justify-center;
}

.card {
  @apply gap-4 content-center p-8 rounded-lg flex flex-col-reverse items-center md:flex-row space-y-10 md:space-y-0 md:space-x-4;
}

.loading {
  @apply fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center;
}

.text {
  @apply p-4 text-4xl md:text-5xl lg:text-6xl text-center text-white;
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
