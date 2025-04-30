<script setup>
import TheHeader from './components/TheHeader.vue'
import TheStatement from './components/TheStatement.vue'
import TheProjects from './components/TheProjects.vue'
import TheFooter from './components/TheFooter.vue'

import { onMounted, onUnmounted, ref } from 'vue'

const header = ref(null)
const projects = ref(null)
const footer = ref(null)

const previousScrollY = ref(0)
const isHidden = ref(false)

// when scrolling down, hide the nav bar, else show it when scrolling up
const scrollHandler = () => {
  isHidden.value = window.scrollY > previousScrollY.value
  previousScrollY.value = window.scrollY
}

const navItemClickedHandler = (e) => {
  if (e.target.id === 'projects') {
    projects.value?.scrollIntoView({ behavior: 'smooth' })
    return
  }

  footer.value?.scrollIntoView({ behavior: 'smooth' })
}

// show nav bar when focus is set to any of the nav items
const navItemFocusedHandler = () => {
  isHidden.value = false
}

onMounted(() => {
  window.addEventListener('scroll', scrollHandler)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler)
})
</script>

<template>
  <header ref="header" :class="{ hide: isHidden }">
    <TheHeader :click-handler="navItemClickedHandler" :focus-handler="navItemFocusedHandler" />
  </header>
  <main>
    <TheStatement />
    <div id="content">
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
</style>
