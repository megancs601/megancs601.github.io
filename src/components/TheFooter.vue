<template>
  <footer>
    <div id="about-me-wrap">
      <img src="../assets/img/sesamayo.png" alt="drawing of megan smith" width="100" height="100" />
      <h3>ABOUT ME</h3>
      <p>
        If I am right for you, shoot me a message at
        <span class="underline bold">mcsmith601.dev@gmail.com</span> or connect with me on
        <a
          id="inline-link"
          class="underline bold"
          href="https://www.linkedin.com/in/mcsmith601"
          target="_blank"
        >
          Linkedin</a
        >. I currently live in New Hampshire with my two cats and long time partner. In my spare
        time I enjoy playing JRPGs, reading fantasy books, and tending to my garden. Thanks for
        visiting!
      </p>
    </div>
    <div id="external-links">
      <a href="https://www.linkedin.com/in/mcsmith601" target="_blank">
        <i class="fab fa-linkedin fa-2x"></i>
        <span class="sr-only">Go to LinkedIn</span>
      </a>
      <a href="https://github.com/megancs601" target="_blank">
        <i class="fab fa-github fa-2x"></i>
        <span class="sr-only">Go to Github</span>
      </a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  position: relative;
  margin: 0 auto;
  background-image: var(--waves);
  padding: 4em 1em;
}

#inline-link {
  font-weight: bold;
  color: var(--white);

  &:hover {
    text-decoration: solid underline;
  }
}

#external-links {
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 8em;
  margin-top: 2.5em;

  .fab {
    color: var(--purple);

    &:hover {
      cursor: pointer;
      color: var(--white);
    }
  }
}

#about-me-wrap {
  position: relative;
  margin: 0 auto;
  max-width: var(--max-width);

  h3 {
    color: var(--white);
  }

  p {
    color: var(--white);
    font-family: var(--open-sans);
    font-size: var(--paragraph-size);
    letter-spacing: 1px;
    line-height: var(--line-height);
    text-align: center;
  }

  img {
    display: block;
    margin: 0 auto;
  }
}
</style>
