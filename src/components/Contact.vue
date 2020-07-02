<template>
  <div class="section">
  <a id="contact"></a>
    <div class="section-wrapper">
      <div class="title">
        {{ title }}
      </div>
      <div class="section-content">
        <form method="post" action="https://send.pageclip.co/7xR3DgqDSk9jW9ZXiWvKaBIT6XZQuOy0/contact-form">
            <div class="info">
                <input id="name" type="text" name="name" placeholder="Name" required="required"/>
                <input id="email" type="email" name="email" placeholder="Email" required="required"/>
            </div>
            <textarea id="message" type="text" name="name" placeholder="Message" required="required"></textarea>
            <input id="send" type="submit" value="Send">
        </form>
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
    },
    mounted() {
        let pageclip = document.createElement('script')
        pageclip.setAttribute('src', 'https://s.pageclip.co/v1/pageclip.js')
        document.head.appendChild(pageclip)
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