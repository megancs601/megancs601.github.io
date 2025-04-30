<script setup>
import FishIcon from './icons/IconFish.vue';
</script>
<template>
  <div class="statement-grid">
    <FishIcon />
    <h3>A front-end software and web developer to make life a little easier :)</h3>
  </div>
</template>

<style scoped>
.statement-grid {
  position: relative;
  margin: 0 auto;
  margin-top: 8em;
  margin-bottom: 2em;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
}

svg {
  width: 8em;
  height: auto;
}

h3 {
  padding: 0 1em;
  color: var(--dark-purple);
  line-height: var(--line-height);
}
</style>
