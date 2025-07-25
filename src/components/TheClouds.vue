<script setup>
import { ref } from 'vue';

const cloudRefs = ref([]);
const clouds = [2, 4, 1, 6, 7, 7];

const getImgUrl = (img) => {
  return new URL(`../assets/img/clouds_dark/${img}`, import.meta.url).href;
};
</script>

<template>
  <div id="dark-clouds-grid">
    <img
      v-for="(cloud, index) in clouds"
      :key="index"
      ref="cloudRefs"
      class="dark-cloud"
      alt="foreground cloud"
      :src="getImgUrl(`clouds_dark-0${cloud}.png`)"
    />
  </div>
</template>

<style scoped>
#dark-clouds-grid {
  position: relative;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: auto auto;
  z-index: 10;
}

.dark-cloud:nth-child(1) {
  justify-self: left;
  grid-column: 2;
  grid-row: 1;
}

.dark-cloud:nth-child(2) {
  justify-self: right;
  grid-column: 1;
  grid-row: 2;
}

.dark-cloud:nth-child(3) {
  justify-self: center;
  grid-column: 3;
  grid-row: 1;
}

.dark-cloud:nth-child(4) {
  grid-column: 3;
  grid-row: 2;
  justify-self: right;
}

.dark-cloud:nth-child(5) {
  padding-left: 40px;
}

.dark-cloud:nth-child(6) {
  justify-self: center;
  padding-right: 40px;
}

@media screen and (max-width: 480px) {
  #dark-clouds-grid {
    display: none;
  }
}
</style>
