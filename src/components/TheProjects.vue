<script setup>
import projects from '../projects.json';

const getImgUrl = (img) => {
  return new URL(`../assets/img/${img}`, import.meta.url).href;
};
</script>

<template>
  <div id="projects-wrap">
    <h3>LET'S SEE THE PROJECTS</h3>
    <ul id="projects-grid">
      <li v-for="(project, index) in projects" :key="index">
        <div class="project hvr-float">
          <img :src="getImgUrl(project.img)" :alt="`image of ${project.name} project`" />
          <div class="details">
            <div class="header">
              <a class="title" :href="project.link || project.gitLink" target="_blank">
                {{ project.name }}
              </a>
              <p v-if="project.wip" id="wip">(work in progress)</p>
            </div>
            <p class="description" data-testid="description">{{ project.description }}</p>
          </div>
          <hr />
          <div class="tags" data-testid="tags">
            <p class="tag" v-for="(tag, index) in project.tags" :key="index">{{ tag }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div id="portfolio-wrap">
    <p data-testid="portfolio">
      ...and last but not least, this web portfolio!
      <a href="https://github.com/megancs601/megancs601.github.io" target="_blank">
        <span class="sr-only">Go to </span> (source code)
      </a>
    </p>
  </div>
</template>

<style scoped>
#projects-wrap {
  position: relative;
  margin: 0 auto;
  max-width: var(--max-width);
  padding: 0px 20px;
  background-color: var(--white);
  text-align: center;
}

h3 {
  position: relative;
  margin: 5em auto;
  color: var(--grey);
}

#projects-grid {
  width: 100%;
  position: relative;
  margin: 0 auto;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  align-items: start;
  column-gap: 30px;
  row-gap: 55px;
  z-index: 100;
  list-style: none;
}

.project {
  background: var(--white);
  background-image: var(--waves-light);
  color: var(--grey);
  box-shadow: 0px 0px 1em rgba(104, 104, 104, 0.4);
  border-radius: 0.5em;

  img {
    width: 100%;
    height: auto;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
    border-radius: 0.5em 0.5em 0 0;
  }

  .details {
    text-align: left;
    font-size: var(--paragraph-size);
    font-family: var(--open-sans);
    padding: 20px;

    .header {
      display: inline-flex;
    }

    .title {
      margin: 0;
      font-size: 1.1em;
      color: var(--dark-purple);
      text-decoration: none;
      font-family: var(--oxygen);
      font-weight: bold;
      text-transform: capitalize;

      &:hover {
        color: var(--dark-grey);
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 6px;
      }
    }

    #wip {
      font-style: italic;
      padding: 0;
      margin: 0;
      margin-left: 8px;
      margin-top: 4px;
    }

    .description {
      margin: 1em 0 0 0;
      line-height: var(--line-height);
    }
  }

  hr {
    border: 0;
    height: 1px;
    background: #ddd;
    margin: 0 1em;
  }

  .tags {
    display: flex;
    padding: 1em;
    justify-content: flex-end;
    font-family: var(--lato);

    .tag {
      margin: 0;
      margin-left: 8px;
    }
  }
}

#portfolio-wrap {
  position: relative;
  margin: 5em auto;
  max-width: var(--max-width);
  font-size: 1.125em;
  font-family: var(--lato);
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;

  p {
    color: var(--grey);
  }

  a {
    color: var(--dark-purple);
    text-decoration: none;

    &:hover {
      color: var(--grey);
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 6px;
    }
  }
}
</style>
