<template>
  <div class="hero">
    <div class="top-bar">
      <div class="logo"></div>
      <ul class="page-links">
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </div>
    <div class="center-text">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  data () {
    return {
      message: ''
    }
  }
}
</script>

<style>
  .hero {
      margin-top: 0;
      background: rgb(223, 223, 223);
      width: 100%;
      height: 100vh;
  }

  .top-bar {
    margin-top: 35px;
    background: chocolate;
  }

  .logo {
    width: 130px;
    height: 130px;
    background-image: url(../../static/keebs_by_frosty__1_-removebg-preview.png);
    background-position: center;
    background-size: contain;
    margin-left: 50%;
    transform: translateX(-50%);
  }

  .page-links {
    float: left;
    list-style: none;
  }

  .center-text {
    font-family: 'Inter';
  }
</style>