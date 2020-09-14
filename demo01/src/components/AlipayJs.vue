<template>
<div>alipay
 <div class="home">
        <div class="payBox">
        <div class="img-logo">
            <img src="http://img.huoxingbeidiao.com/public/WePayLogo.png" alt="">
        </div>
        <div class="info-box">
            <div style="padding-bottom: 20px;">
                <qrcode-vue :value="qrurl" :size="200" level="H"></qrcode-vue>
            </div>
            <img src="http://img.huoxingbeidiao.com/public/WePayInfo.png" alt="">
            <p class="price">¥&nbsp;{{amt}}</p>
        </div>
        <div style="width:200px;height:200px;background:red;" @click="to"></div>
    </div>
  </div>
  </div>
</template>
<script src="https://gw.alipayobjects.com/as/g/h5-lib/alipayjsapi/3.1.1/alipayjsapi.min.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script>
import axios from 'axios';
export default {
   data() {
      return {
           qrurl:'10',
           amt:'11',
            prodConfig : {
                        "body": "body",
                        "subject": "daledou",
                        "out_trade_no": "70501111111S001111110",
                        "timeout_express": "90m",
                        "total_amount": 9.00,
                        "product_code": "QUICK_WAP_WAY"
                    },
            alipayConfig : {
                biz_content: JSON.stringify(this.prodConfig),
                app_id: '2016101100663861',
                version: '1.0',
                format: 'json',
                sign_type: 'RSA2',
                method: 'alipay.trade.wap.pay',
                notify_url: 'http://localhost:8080',
                return_url: 'http://localhost:8080',
                charset: 'UTF-8',
                sign: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqCZxPbaDyemkDISoZ+Og7nFS7B738QI7/imqQigyfmxe91l2C6+ZwnjblKiqKeVOI3hrkhny0dT3VRLH+27qoFqvluJ14RRDGlMmRpPTuJeHYplgEZkXWikpqMQihxy+SxEJ6ub1JKWUXwSU0piJHqEICnurAtY1cOddFmNBGBFX+J32CLGtRtyXbDIVMg2/4MXevX4AAwZTGtdZs3UY9Y6e9eSd85yhFwLY4ZrjH8Ov0PO8CeKexRt3IWC0s6Ffp5V4Mn3bCtehbNCH0JWm+k9iNxIrL55FC7yHjBMH54JVtuELRkFTPPil4U+nCij2gaJuZviRXZi5WYWx1N4PvwIDAQAB',
                timestamp: '2017-11-15 14:55:46'
            }
      }
    },
    methods: {
        to() {
        this.httpPost('https://openapi.alipaydev.com/gateway.do', this.alipayConfig)
        },
        httpPost(URL, PARAMS) {
            var temp = document.createElement("form");
            temp.action = URL;
            temp.method = "post";
            temp.style.display = "none";

            for (var x in PARAMS) {
                var opt = document.createElement("textarea");
                opt.name = x;
                opt.value = PARAMS[x];
                temp.appendChild(opt);
            }

            document.body.appendChild(temp);
            temp.submit();

            return temp;
        }
    },
    created(){
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
