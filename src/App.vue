<script setup>
import TheHeader from './components/TheHeader.vue';
import TheStatement from './components/TheStatement.vue';
import TheProjects from './components/TheProjects.vue';
import TheFooter from './components/TheFooter.vue';

import { onMounted, onUnmounted, ref } from 'vue';
import TheClouds from './components/TheClouds.vue';

const header = ref(null);
const projects = ref(null);
const footer = ref(null);

const previousScrollY = ref(0);
const isHidden = ref(false);

// when scrolling down, hide the nav bar, else show it when scrolling up
const scrollHandler = () => {
  isHidden.value = window.scrollY > previousScrollY.value;
  previousScrollY.value = window.scrollY;
};

const navItemClickedHandler = (e) => {
  if (e.target.id === 'projects') {
    projects.value?.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  footer.value?.scrollIntoView({ behavior: 'smooth' });
};

// show nav bar when focus is set to any of the nav items
const navItemFocusedHandler = () => {
  isHidden.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', scrollHandler);
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler);
});
</script>

<template>
  <header ref="header" :class="{ hide: isHidden }">
    <TheHeader :click-handler="navItemClickedHandler" :focus-handler="navItemFocusedHandler" />
  </header>
  <main>
    <div id="content">
      <div id="clouds-animate1"></div>
      <div id="clouds-animate2"></div>
      <TheStatement />
      <TheClouds />
      <div ref="projects">
        <TheProjects />
      </div>
    </div>
    <div ref="footer">
      <TheFooter />
    </div>
  </main>
</template>

<style scoped>
header {
  position: fixed;
  margin: 0 auto;
  background-image: var(--waves);
  width: 100%;
  height: 4em;
  z-index: 500;
  top: 0em;
  transition: 0.3s ease-in-out;

  &.hide {
    top: -4em;
  }
}

#content {
  position: relative;
  margin: 0 auto;
  padding-top: 4em;
  width: 100%;
  overflow: hidden;
}

#clouds-animate1 {
  position: absolute;
  margin: 0 auto;
  width: 100%;
  height: 210px;
  background-image: url('assets/img/white_clouds_pattern1.png');
  background-repeat: repeat-x;
  animation: slide 120s linear infinite;
  z-index: -1;
}

#clouds-animate2 {
  position: absolute;
  margin: 0 auto;
  width: 100%;
  height: 190px;
  margin-top: 190px;
  background-image: url('assets/img/white_clouds_pattern2.png');
  background-repeat: repeat-x;
  animation: slide 60s linear infinite;
  z-index: -1;
}

@keyframes slide {
  0% {
    background-position: 0, 0;
  }
  100% {
    background-position: 1152px, 0;
  }
}
</style>
