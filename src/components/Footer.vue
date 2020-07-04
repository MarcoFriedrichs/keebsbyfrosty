<template>
  <div class="footer">
    {{ footerText }} - developed by <a href="https://www.marcofriedrichs.com">Marco Friedrichs</a>
  </div>
</template>

<script>

import content from '../../content/pagecontent.json'

export default {
  name: 'Hero',
  data () {
    return {
      footerText: content.footer
    }
  }
}
</script>

<style>
  .footer {
    margin-bottom: 25px;
    width: 100%;
    font-family: 'Inter';
    text-align: center;
    color: gray;
  }

  a {
    color: black;
  }
</style>