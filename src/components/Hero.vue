<template>
  <div class="hero">
    <div class="top-bar">
      <div class="logo"></div>
      <ul class="page-links">
        <div class="left-links">
          <li><a>About</a></li>
          <li><a>Work</a></li>
          <li><a>Contact</a></li>
        </div>
        <div class="right-links">
          <li><a>Youtube</a></li>
          <li><a>Discord</a></li>
        </div>
      </ul>
    </div>
    <div class="center-wrapper">
      <div class="center-text" v-html="message"></div>
      <div class="cta-button">
        <a>commission  a build</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  data () {
    return {
      message: "You wanna buy a keyboard?<br>You've come to the right place!"
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


  .logo {
    width: 130px;
    height: 130px;
    display: inline-block;
    background-image: url(../../static/keebs_by_frosty__1_-removebg-preview.png);
    background-position: center;
    background-size: contain;
    margin-left: 50%;
    transform: translateX(-50%);
  }

  .top-bar {
    position: absolute;
    width: 100%;
    top: 40px;
    z-index: 1000
  }

  .page-links {
    width: 100%;
    position: absolute;
    left: 0;
    padding: 0;
    margin: 0;
    top: 65px;
    transform: translateY(-50%);
  }

  .page-links li {
    list-style: none;
    float: left;
  }

  .page-links li a {
    margin-right: 25px;
    margin-left: 25px;
    display: block;
    color: #fff;
    font-family: 'Inter';
    font-size: 18px;
    font-weight: 200;
  }

  .page-links li a:hover {
    
  }

  .left-links {
    float: left;
    margin-left: 50px;
  }

  .right-links {
    float: right;
    margin-right: 50px;
  }


  .center-text {
    font-family: 'Inter';
    color: #fff;
    width: 100%;
    text-align: center;
    margin-top: 50vh;
    transform: translateY(-50%);
    font-size: 46px;
    font-weight: 500;
  }

  .center-wrapper {
    width: 100%;
    position: absolute;

  }

  .cta-button {
    margin-top: 0;
    padding: 20px;
    background: #000;
    display: inline-block;
    margin-left: 50%;
    transform: translate(-50%, -20%);
  }

  .cta-button:hover {
    background: #1a1a1a;
  }

  .cta-button a {
    font-family: 'Inter';
    font-size: 16px;
    color: #fff;
  }
</style>