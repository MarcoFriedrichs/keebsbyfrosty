<template>
  <div class="section">
    <div id="about-section" class="section-wrapper">
      <div class="title">
        <a id="pricing">
            {{ title }}
        </a>
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
  name: 'Pricing',
  data () {
    return {
      title: content.pricing.title,
      text: content.pricing.pricing_text
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
  
  .title a {
    color: black;
  }  
</style>