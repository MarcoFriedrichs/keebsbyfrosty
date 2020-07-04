<template>
  <div class="section">
    <a id="about"></a>
    <div id="about-section" class="section-wrapper">
      <div class="title">
        {{ title }}
      </div>
      <div class="section-content">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>

import content from '../../content/pagecontent.json'

export default {
  name: 'Hero',
  data () {
    return {
      title: content.about_section.title,
      text: content.about_section.about_text
    }
  }
}
</script>

<style>
  .section {
    margin: 0 auto;
    padding: 0 50px;
    max-width: 900px;
    font-family: 'Inter';
    text-align: center;
  }

  .section a {
    color: rgb(114, 114, 114);
  }

  #about-section {
    margin-bottom: 50px;
  }

  .section-content {
    width: 100%;
    margin-top: 15px;
    font-size: 18px;
  }

  .title {
    font-size: 30px;
    font-weight: 600;
    width: 100%;
    text-align: center;
  }
</style>