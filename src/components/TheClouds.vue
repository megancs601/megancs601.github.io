<script setup>
import { onMounted, ref } from 'vue';
import SimpleParallax from 'simple-parallax-js/vanilla';

const cloudRefs = ref([]);
const cloudsList = [
  { name: 2, orientation: 'left', scale: 2.3 },
  { name: 4, orientation: 'left' },
  { name: 1, orientation: 'right', scale: 2.3 },
  { name: 6, orientation: 'right' },
  { name: 7, orientation: 'right' },
  { name: 7, orientation: 'left' },
];

const getImgUrl = (img) => {
  return new URL(`../assets/img/clouds_dark/${img}`, import.meta.url).href;
};

const applyParallax = () => {
  cloudRefs.value.forEach((cloud, index) => {
    new SimpleParallax(cloud, {
      orientation: cloudsList[index].orientation,
      scale: cloudsList[index].scale || 1.4,
      overflow: true,
    });
  });
};

onMounted(() => {
  applyParallax();
});
</script>

<template>
  <div id="dark-clouds-grid">
    <img
      v-for="(cloud, index) in cloudsList"
      :key="index"
      ref="cloudRefs"
      class="dark-cloud"
      alt="foreground cloud"
      :src="getImgUrl(`clouds_dark-0${cloud.name}.png`)"
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
