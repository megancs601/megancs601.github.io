<script setup>
defineProps({
  clickHandler: { type: Function, required: false },
  focusHandler: { type: Function, required: false },
});
</script>

<template>
  <nav>
    <ul>
      <li>
        <button id="projects" @click="clickHandler" @focus="focusHandler">Projects</button>
      </li>
      <li>
        <button id="about-me" @click="clickHandler" @focus="focusHandler">About Me</button>
      </li>
      <li>
        <a href="/smith_megan.pdf" target="_blank" rel="noopener noreferrer" @focus="focusHandler">
          Resum&eacute;
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: var(--max-width);
  display: flex;
  justify-content: flex-end;
  padding: 0;

  ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
  }

  a,
  button {
    padding: 0px 20px;
    font-family: var(--lato);
    font-size: 1em;
    color: var(--white);
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.5s ease;
    background: none;
    border: none;

    &:hover {
      color: var(--white);
      cursor: pointer;
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 6px;
    }
  }
}

@media screen and (max-width: 480px) {
  nav {
    justify-content: center;
  }
}
</style>
