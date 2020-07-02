<template>
  <div class="overflow">
    <Hero></Hero>
    <About></About>
    <Rule></Rule>
    <Work></Work>
    <Contact></Contact>
  </div>
</template>

<script>
import Hero from '../components/Hero'
import About from '../components/About'
import Rule from '../components/Rule'
import Work from '../components/Work'
import Contact from '../components/Contact'

export default {
  components: {
    Hero,
    About,
    Rule,
    Work,
    Contact
  },
  metaInfo: {
    title: 'Hello, world!'
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
