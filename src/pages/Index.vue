<template>
  <div class="overflow">
    <Hero></Hero>
    <About></About>
    <Rule></Rule>
    <Work></Work>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>

<script>
import Hero from '../components/Hero'
import About from '../components/About'
import Rule from '../components/Rule'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default {
  components: {
    Hero,
    About,
    Rule,
    Work,
    Contact,
    Footer
  },
  metaInfo: {
    title: 'Home',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    
  },
  mounted () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
    });

  }
}
</script>

<style>
  body {
    margin: 0;
  }
  .overflow {
    overflow-x: hidden;
  }
</style>
