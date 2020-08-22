<template>
  <div class="section">
    <div class="section-wrapper">
      <div class="title">
        <a id="contact">
            {{ title }}
        </a>
      </div>
      <div class="section-content">
        <!--form method="post" action="https://send.pageclip.co/7xR3DgqDSk9jW9ZXiWvKaBIT6XZQuOy0/contact-form">
            <div class="info">
                <input id="name" type="text" name="name" placeholder="Name" required="required"/>
                <input id="email" type="email" name="email" placeholder="Email" required="required"/>
            </div>
            <textarea id="message" type="text" name="name" placeholder="Message" required="required"></textarea>
            <input id="send" type="submit" value="Send">
        </form-->
        <div class="typeform-widget" data-url="https://form.typeform.com/to/kPhfPvl3" style="width: 100%; height: 600px;"></div>
        <!--div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"> powered by <a href="https://admin.typeform.com/signup?utm_campaign=kPhfPvl3&utm_source=typeform.com-01EDEPRQAYV1S4KPA8ECWB8F9Y-free&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN" style="color: #999" target="_blank">Typeform</a> </div-->
      </div>
    </div>
  </div>
</template>

<script>

import content from '../../content/pagecontent.json'

export default {
    name: 'Contact',
    data () {
        return {
            title: content.contact_title
        }
    },
    mounted() {
        let pageclip = document.createElement('script')
        pageclip.setAttribute('src', 'https://s.pageclip.co/v1/pageclip.js')
        document.head.appendChild(pageclip)

        //typeform code
        var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/";
        if(!gi.call(d,id)) { 
            js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) 
        }
    },
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

    .title a {
        color: black;
    }  

    form input {
        padding: 10px;
        background: rgb(230, 230, 230);
        border:none;
    }

    form textarea {
        font-family: 'Inter';
        padding: 10px;
        background: rgb(230, 230, 230);
        resize: vertical;
        margin-top: 13px;
        width: calc(100% - 20px);
        height: 200px;
        border:none;
    }

    .info {
        width: 100%;
    }

    .info * {
        width: calc(50% - 7px - 20px);
    }

    .info *:nth-child(1) {
        margin-right: 7px;
    }

    .info *:nth-child(2) {
        margin-left: 7px;
    }

    #send {
        width: 100%;
        margin-top: 10px;
        background: #000;
        color: #fff;
    }
    
    #send:disabled {
        background: rgb(230, 230, 230);
    }

    @media (max-width: 767px) {
        .info * {
            width: calc(100% - 20px);
        }

        .info *:nth-child(1) {
            margin-right: 0px;
            margin-left: 0px;
        }

        .info *:nth-child(2) {
            margin-top: 13px;
            margin-right: 0px;
            margin-left: 0px;
        }
    }

</style>