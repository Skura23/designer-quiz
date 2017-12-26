<template>
  <div>
    <div class="me-score re">
      <div id="to-save-img">
      <img src="~static/19.jpg" width="100%" id="bac-img" alt="">
      <p class="p1" v-text="openIdName">
        
      </p>
      <p class="p2">
        依据IDR全球设计师排行榜测试
      </p>
      <p class="p3 tc">你的排名</p>
      <p class="p4 tc">No.{{scoreData.rank}}</p>
      <p class="p5 tc">你的身价</p>
      <p class="p6 tc">¥{{scoreData.worth}}</p>
      <p class="p7">{{scoreData.tip}}</p>
      <img src="~static/21.jpg" class="qrimg" alt="">
      </div>
      <div class="img-mask">
        <p>请稍等...</p>
      </div>
      <!-- <div class="img-mask" v-show="">
        
      </div> -->
    <img :src="imgUrl" alt="" class="me-img" ref="Userimage">
    </div>
    
    <div class="tc save-note">
    <p class="tc">↓长按图片保存到手机</p>
    </div>
  </div>
</template>

<script type='text/babel'>
import { mapState, mapActions } from "vuex";
import domToImage from "dom-to-image";
import fileSaver from "file-saver";

console.log(fileSaver, domToImage);

export default {
  data(){
    return {
      imgUrl:''
    }
  },
  // 要用mounted而不是created否则获取不到dom node
  mounted() {
    var _this = this;
    document.body.style.background = "#000000";
    var bacImg = document.getElementById("bac-img");
    var qrimg = document.getElementsByClassName("qrimg")[0];
    qrimg.onload = function() {
      _this.saveImg();
    };
  },
  computed: mapState(["scoreData", "openIdName"]),
  methods: {
    // ...mapActions(["addNum", "initializeData"]),
    saveImg() {
      var _this = this
      var node = document.getElementById("to-save-img")
      console.log(node);
      // console.log(domToImage.toPng);
        // domToImage.toPng(node).then((dataUrl) => {
        //   console.log('aaa');
        //   var img = new Image()
        //   img.src = dataUrl
        //   this.imgUrl = img.src
        // })
        // let b64;
        // console.log(html2canvas);
        // html2canvas(node, {
        //   useCORS: true
        // }).then(function(canvas) {
        //   try {
        //     b64 = canvas.toDataURL("image/png");
        //     console.log('aa');
        //   } catch (err) {
        //       // alert(err)
        //   }
        //   _this.imgUrl = b64
        // }).catch(function onRejected(error) {});
    //   console.log(fileSaver, domToImage);
      // var node = document.getElementById('my-node');
      // domToImage
      //   .toBlob(document.getElementById("to-save-img"))
      //   .then(function(blob) {
      //     console.log(blob);
      //     saveBlobAsFile(blob, "我的评测.png");
      //     // fileSaver.saveAs(blob, "我的评测.png");
      //   });
      // function saveBlobAsFile(blob, fileName) {
      //   var reader = new FileReader();
      //   reader.onloadend = function() {
      //     var base64 = reader.result;
      //     _this.imgUrl = base64
      //   };
      //   reader.readAsDataURL(blob);
      // }
    // var div = $("#to-save-img").get(0);
    // var rect = div.getBoundingClientRect();

    // var canvas = document.createElement("canvas");
    // canvas.width = rect.width;
    // canvas.height = rect.height;

    // var ctx = canvas.getContext("2d");
    // ctx.translate(-rect.left,-rect.top);

    // html2canvas(div, {
    //     canvas:canvas,
    //     height:rect.height,
    //     width:rect.width,
    //     onrendered: function(canvas) {
    //         var image = canvas.toDataURL("image/png");
    //         var pHtml = "<img class='me-img' src="+image+" />";
    //         $("#to-save-img").append(pHtml);
    //     }
    // });
    // }

    html2canvas(document.getElementById("to-save-img"), {
      onrendered: function(canvas) {
        var img = canvas.toDataURL()
        _this.imgUrl = img
        $('.img-mask').hide()
      }
    });
    }
  }
};
</script>

<style lang='less' rel='stylesheet/less'>
.reset-font() {
  font-family: initial;
  letter-spacing: 0;
  font-size: 0.76rem;
}

.me-score {
  // margin: 0.5rem 1.7rem 0 1.7rem;
  position: relative;
  width: 12.7rem;
  left: 1.7rem;
  img {
    left: 0;
    top: 0;
    z-index: -1;
  }
  .img-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000;
    // opacity: 0;
    z-index: 4;
    p {
      color: #fee31a;
      text-align: center;
      margin-top: 4rem;
      width: 100%;
      font-family: "Litchi";
      font-size: 1.2rem;
    }
  }
  p {
    position: absolute;
    .reset-font;
    &.p1 {
      top: 3.2rem;
      width: 10.4rem;
      left: 1.1rem;
      font-size: 0.9rem;
    }
    &.p2 {
      .reset-font;
      top: 4.6rem;
      width: 10.4rem;
      left: 1.1rem;
      font-size: 0.7rem;
    }
    &.p3 {
      top: 6.7rem;
      width: 10.4rem;
      left: 1.1rem;
      color: #00ff66;
      font-size: 0.6rem;
    }
    &.p4 {
      top: 7.7rem;
      width: 10.4rem;
      left: 1.1rem;
      color: #00ff66;
      font-size: 1.15rem;
      font-weight: bold;
    }
    &.p5 {
      top: 10rem;
      width: 10.4rem;
      left: 1.1rem;
      color: #00ff66;
      font-size: 0.6rem;
    }
    &.p6 {
      top: 11rem;
      width: 10.4rem;
      left: 1.1rem;
      color: #00ff66;
      font-size: 1.15rem;
      font-weight: bold;
    }
    &.p7 {
      top: 13rem;
      width: 10.4rem;
      left: 1.1rem;
      color: #ffe100;
      font-size: 0.7rem;
      font-family: Litchi;
      padding: 0.2rem;
      letter-spacing: -0.14rem;
      text-align: center;
    }
  }
  .qrimg {
    position: absolute;
    left: 9.12rem;
    top: 16.7rem;
    width: 2.6rem;
    z-index: 1;
  }
  .me-img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 5;
  }
}
#to-save-img {
  font-size: 0;
}

.save-note {
  margin-top: 10px;
  font-size: 0.8rem;
  .tc {
    color: #fee31a;
    font-family: "Litchi";
  }
}
.save-btn {
  width: 5.8rem;
  display: inline-block;
  // margin: 0 auto;
}
</style>