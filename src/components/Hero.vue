<template>
  <div class="hero">
    <Banner :bannerContent="banner" :visible="banner.visibility"></Banner>
    <div class="top-bar">
      <div class="logo"></div>
      <ul class="page-links">
        <div class="left-links">
          <li v-for="item in navLinks" :key="navLinks.text">
            <a :href="item.url">{{ item.text }}</a>
          </li>
        </div>
        <div class="right-links">
          <li id="email">
            <a v-bind:href="socialLinks.email.url">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="#ffffff" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
          </li>
          <li id="discord">
            <a v-bind:href="socialLinks.discord.url">
              <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 240"><path class="st0" d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"/><path class="st0" d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"/></svg>
            </a>
          </li>
          <li id="youtube">
            <a v-bind:href="socialLinks.youtube.url">
              <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 158 110" enable-background="new 0 0 158 110" xml:space="preserve"><path fill="#FFFFFF" d="M154.4,17.5c-1.8-6.7-7.1-12-13.9-13.8C128.2,0.5,79,0.5,79,0.5s-48.3-0.2-60.6,3c-6.8,1.8-13.3,7.3-15.1,14 C0,29.7,0.3,55,0.3,55S0,80.3,3.3,92.5c1.8,6.7,8.4,12.2,15.1,14c12.3,3.3,60.6,3,60.6,3s48.3,0.2,60.6-3c6.8-1.8,13.1-7.3,14.9-14 c3.3-12.1,3.3-37.5,3.3-37.5S157.7,29.7,154.4,17.5z M63.9,79.2V30.8L103.2,55L63.9,79.2z"/></svg>
            </a>
          </li>
          <li id="instagram">
            <a v-bind:href="socialLinks.instagram.url">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  style="fill:#ffffff"
                  d="M256,49.471c67.266,0,75.233.257,101.8,1.469,24.562,1.121,37.9,5.224,46.778,8.674a78.052,78.052,0,0,1,28.966,18.845,78.052,78.052,0,0,1,18.845,28.966c3.45,8.877,7.554,22.216,8.674,46.778,1.212,26.565,1.469,34.532,1.469,101.8s-0.257,75.233-1.469,101.8c-1.121,24.562-5.225,37.9-8.674,46.778a83.427,83.427,0,0,1-47.811,47.811c-8.877,3.45-22.216,7.554-46.778,8.674-26.56,1.212-34.527,1.469-101.8,1.469s-75.237-.257-101.8-1.469c-24.562-1.121-37.9-5.225-46.778-8.674a78.051,78.051,0,0,1-28.966-18.845,78.053,78.053,0,0,1-18.845-28.966c-3.45-8.877-7.554-22.216-8.674-46.778-1.212-26.564-1.469-34.532-1.469-101.8s0.257-75.233,1.469-101.8c1.121-24.562,5.224-37.9,8.674-46.778A78.052,78.052,0,0,1,78.458,78.458a78.053,78.053,0,0,1,28.966-18.845c8.877-3.45,22.216-7.554,46.778-8.674,26.565-1.212,34.532-1.469,101.8-1.469m0-45.391c-68.418,0-77,.29-103.866,1.516-26.815,1.224-45.127,5.482-61.151,11.71a123.488,123.488,0,0,0-44.62,29.057A123.488,123.488,0,0,0,17.3,90.982C11.077,107.007,6.819,125.319,5.6,152.134,4.369,179,4.079,187.582,4.079,256S4.369,333,5.6,359.866c1.224,26.815,5.482,45.127,11.71,61.151a123.489,123.489,0,0,0,29.057,44.62,123.486,123.486,0,0,0,44.62,29.057c16.025,6.228,34.337,10.486,61.151,11.71,26.87,1.226,35.449,1.516,103.866,1.516s77-.29,103.866-1.516c26.815-1.224,45.127-5.482,61.151-11.71a128.817,128.817,0,0,0,73.677-73.677c6.228-16.025,10.486-34.337,11.71-61.151,1.226-26.87,1.516-35.449,1.516-103.866s-0.29-77-1.516-103.866c-1.224-26.815-5.482-45.127-11.71-61.151a123.486,123.486,0,0,0-29.057-44.62A123.487,123.487,0,0,0,421.018,17.3C404.993,11.077,386.681,6.819,359.866,5.6,333,4.369,324.418,4.079,256,4.079h0Z"/>
                <path
                  style="fill:#ffffff"
                  d="M256,126.635A129.365,129.365,0,1,0,385.365,256,129.365,129.365,0,0,0,256,126.635Zm0,213.338A83.973,83.973,0,1,1,339.974,256,83.974,83.974,0,0,1,256,339.973Z"/>
                <circle
                  style="fill:#ffffff"
                  cx="390.476" cy="121.524" r="30.23"/>
              </svg>
            </a>
          </li>
        </div>
      </ul>
    </div>
    <div class="center-wrapper">
      <div class="center-text" v-html="centerText"></div>
      <a href="#contact">
        <div class="cta-button">
          <a>{{ button }}</a>
        </div>
      </a>
    </div>
    <video id="videoplayer" preload="false" src="../../static/keyboard_1080p_video.mp4" autoplay="false" loop muted disableRemotePlayback></video>
  </div>
</template>

<script>

import Banner from './Banner'
import content from '../../content/pagecontent.json'

export default {
  name: 'Hero',
  components: {
    Banner
  },
  data () {
    return {
      navLinks: [
        { text: 'About', url: '#about' },
        { text: 'Work', url: '#work' },
        { text: 'Contact', url: '#contact' },
        { text: 'Shop', url: '#'}
      ],
      socialLinks: {
        youtube: { url: content.youtube },
        discord: { url: content.discord },
        instagram: { url: content.instagram },
        email: { url: "mailto:" + content.email }
      },
      centerText: content.hero_text,
      button: content.cta_button_text,
      banner: {
        visibility: content.show_banner,
        text: content.banner_text,
        url: content.banner_url
      }
    }
  },
  mounted () {
    let video = document.getElementById('videoplayer')
    video.setAttribute('autoplay', 'true')
  }
}
</script>

<style>

  .hero {
    margin-top: 0;
    background: rgb(223, 223, 223);
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }


  video {
    display: block;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
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
    top: 75px;
    transform: translateY(-50%);
  }

  .page-links li {
    list-style: none;
    float: left;
  }

  .page-links li a {
    margin-right: 20px;
    margin-left: 20px;
    display: block;
    color: #fff;
    text-decoration: none;
    font-family: 'Inter';
    font-size: 18px;
    font-weight: 200;
  }

  .page-links li a:hover {
    color: gray;
  }

  .left-links {
    float: left;
    margin-left: 50px;
  }

  .right-links {
    float: right;
    margin-right: 50px;
  }

  .right-links li a {
    width: 28px;
  }

  .right-links li#youtube a {
    transform: translateY(3px);
  }

  .right-links li#instagram a {
    transform: translateY(-2px) scale(.9);;
  }

  .right-links li#email a {
    transform: scale(1.1);;
  }

  .st0{fill:#FFFFFF;}


  .center-text {
    max-width: 90%;
    font-family: 'Inter';
    color: #fff;
    text-align: center;
    margin-top: 50vh;
    margin-left: auto;
    margin-right: auto;
    transform: translateY(-50%);
    font-size: 4.5vh;
    font-weight: 500;
  }

  .center-wrapper {
    z-index: 900;
    width: 100%;
    position: absolute;

  }

  .cta-button {
    margin-top: 10;
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
    text-decoration: none;
    color: #fff;
    white-space: nowrap;
  }
  
  @media (max-width: 767px) {

    .page-links {
      width: 100%;
      position: absolute;
      left: 0;
      padding: 0;
      margin: 0;
      top: 140px;
      transform: translateY(-50%);
      white-space: nowrap;
    }

    .left-links {
      overflow: hidden;
      display: inline-block;
      position: absolute;
      margin-left: 50%;
      transform: translateX(-50%);
      width:max-content;
    }

    .left-links li {
      display: inline-block
    }

    .right-links {
      display: none;
    }

    .right-links li a {
      width: 28px;
    }

    .right-links li#youtube a {
      transform: translateY(3px);
    }

  }

</style>