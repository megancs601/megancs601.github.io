<script setup>
import TheHeader from './components/TheHeader.vue'
import TheStatement from './components/TheStatement.vue'
import TheProjects from './components/TheProjects.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <header>
    <TheHeader />
  </header>
  <main>
    <TheStatement />
    <div id="content">
      <TheProjects />
    </div>
    <TheFooter />
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
