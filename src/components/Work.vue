<template>
  <div class="section">
  <a id="work"></a>
    <div id="work-section" class="section-wrapper">
      <div class="title">
        {{ title }}
      </div>
      <div class="section-content">
          <div class="gallery">
              <div class="image" v-for="item in images" :key="image">
                  <div class="image-title">{{ item.title }}</div>
                  <img :src="item.url"/>
              </div>
          </div>
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
      title: content.gallery_title,
      images: [
            {
                title: "quefrency v2, lubed gateron yellows (205g0)",
                url: 'https://i.imgur.com/F2DMPDR.jpg'
            },
            {
                title: "sinc 75%, kalih box whites",
                url: 'https://i.imgur.com/mXXAJPu.jpg'
            },
      ]
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

  #work-section {
    margin-top: 50px;
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

  .gallery {
    margin-top: 25px;
    width: 100%;
  }

  .gallery .image {
    background: #c9c9c9;
    max-width: 900px;
    height: 350px;
    margin: 13px 0;
    list-style: none;
    overflow: hidden;
  }

  .gallery .image .image-title {
      position: absolute;
      z-index: 5000;
      font-size: 26px;
      font-weight: 500;
      color: #fff;
      margin-top: 175px;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: ease 200ms all;
  }

  .gallery .image img {
      margin: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1);
      transition: ease 500ms all;
  }

  .gallery .image:hover > img {
      transform: scale(1.1);
      filter: brightness(0.8);
  }

  .gallery .image:hover > .image-title {
      opacity: 1;
  }
</style>