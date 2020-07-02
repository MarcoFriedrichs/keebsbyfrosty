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
    title: 'Keebs by Frosty'
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
