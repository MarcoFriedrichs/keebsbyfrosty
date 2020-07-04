<template>
  <div class="section">
    <a id="about"></a>
    <div id="about-section" class="section-wrapper">
      <div class="title">
        {{ title }}
      </div>
      <div class="section-content">
        I believe in everyone having a luxurious typing experience and I can help make that happen. any demand, any features, any budget, i can help make that happen. just drop me an <a href="mailto:samadrizvi@yahoo.com">email</a> and ill help.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  data () {
    return {
      title: "Keyboard Assembly on a Budget"
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