<template>
  <footer>
    <div id="about-me-wrap">
      <img src="../assets/sesamayo.png" alt="drawing of megan smith" width="100" height="100" />
      <h3>ABOUT ME</h3>
      <p>
        Hi there! My name is Megan Smith and I'm a front-end software and web developer living in
        New Hampshire with my two cats and partner. I have a passion for creating interactive
        applications that brings awe and smiles to viewers. In my spare time I enjoy playing JRPGs
        and reading fantasy books. Thanks for visiting!
      </p>
    </div>
    <div id="external-links">
      <a href="https://www.linkedin.com/in/mcsmith601" target="_blank">
        <i class="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="https://github.com/megancs601" target="_blank">
        <i class="fab fa-github fa-2x"></i>
      </a>
      <a href="https://www.instagram.com/sesamayo/" target="_blank">
        <i class="fab fa-instagram fa-2x"></i>
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

#external-links {
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 15em;
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
