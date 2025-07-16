<script setup></script>
<template>
  <div id="statement">
    <h1>Hello! I am <span class="cursive">Megan Smith</span></h1>
    <h3>
      A <span class="underline">frontend developer</span> who bridges design and development by
      turning UI concepts into responsive, testable, and accessible web applications.
    </h3>
  </div>
</template>

<style scoped>
.cursive {
  font-size: 1.5em;
  font-family: 'Caveat', cursive;
  font-weight: 500;
  font-style: italic;
}

#statement {
  padding: 0 1em;
  margin-top: 8em;
  margin-bottom: 3em;
}

h1,
h3 {
  text-align: center;
  position: relative;
  margin: 0 auto;
  color: var(--dark-purple);
  line-height: var(--line-height);
}

h3 {
  margin-top: 1em;
  max-width: 35em;
}

@media screen and (max-width: 480px) {
  h1 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1em;
  }

  .cursive {
    font-weight: 600;
  }
}
</style>
