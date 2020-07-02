<template>
  <div class="footer">
    {{ footerText }}
  </div>
</template>

<script>
export default {
  name: 'Hero',
  data () {
    return {
      footerText: "©2020"
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
</style>