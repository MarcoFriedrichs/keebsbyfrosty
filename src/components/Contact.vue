<template>
  <div class="section">
    <div class="section-wrapper">
      <div class="title">
        {{ title }}
      </div>
      <div class="section-content">
        ok
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  data () {
    return {
      title: "Commission a Build"
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

  .section-wrapper {
    margin: 100px 0;
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