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
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: "hello! welcome to the site, take a nice look around and take a seat. now you're probably wondering what is this, how'd i get here and why am i watching some guy lube a keyboard, now i can only answer the first question. this is keebs by frosty. a place where you can have a luxurious typing experience made up to your tastes and on a budget. now what are you doing? contact me!"}
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
