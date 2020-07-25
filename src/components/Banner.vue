<template>
    <div id="banner">
        <a :href="bannerContent.url">{{ bannerContent.text }}</a>
    </div>
</template>

<script>

import content from '../../content/pagecontent.json'

export default {
    name: 'Banner',
    props: {
        bannerContent: {
            type: Object,
            required: true,
            default: {
                text: "click here",
                url: "#"
            }
        },
        visible: {
            type: Boolean,
            default: false
        }
    },
    mounted () {
        if (this.visible == true) {
            var element = document.getElementById("banner");
            element.classList.add("visible");
        }
    }
}
</script>



<style>
    #banner {
        position: fixed;
        line-height: 30px;
        width: 100%;
        background: black;
        top: -30px;
        opacity: 0;
        transition: ease all 500ms;
    }

    #banner.visible {
        top: 0px;
        opacity: 1;
    }

    #banner a {
        font-family: 'Inter';
        text-decoration: none;
        display: inline-block;
        width: 100%;
        text-align: center;
        color: white;
    }
</style>