<template>
  <div>
    <div class="me-score re">
      <div id="to-save-img">
      <img src="~static/26.jpg" width="100%" id="bac-img" alt="">
      <div class="me-data">
        <p class=" mt1 name ov" v-text="openIdName"></p>
        <p class="_p1 mt1">全球设计\插画师排名</p>
        <p class="_p2">{{scoreData.rank}}名</p>
        <p class="_p1 mt1" >全球综合身价预估</p>
        <p class="_p2">¥ {{scoreData.worth}}</p>
      </div>
      <!-- <img src="~static/21.jpg" class="qrimg" alt=""> -->
      </div>
      <div class="img-mask">
        <p>请稍等...</p>
      </div>
      <!-- <div class="img-mask" v-show="">
        
      </div> -->
    <img :src="imgUrl" alt="" class="me-img" ref="Userimage">
    </div>
    
    <div class="tc save-note">
      <div class="mask"></div>
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
  data() {
    return {
      imgUrl: ""
    };
  },
  // 要用mounted而不是created否则获取不到dom node
  mounted() {
    var _this = this;
    document.body.style.background = "#000000";
    var bacImg = document.getElementById("bac-img");
    // var qrimg = document.getElementsByClassName("qrimg")[0];
    bacImg.onload = function() {
      _this.saveImg();
    };
  },
  computed: mapState(["scoreData", "openIdName"]),
  methods: {
    // ...mapActions(["addNum", "initializeData"]),
    saveImg() {
      var _this = this;
      var node = document.getElementById("to-save-img");
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
      // 配置canvas, 解决图片失真问题
      var dom = $("#to-save-img");
      var bacImg = $("#bac-img");
      var width = dom.width();
      var height = dom.height();
      var type = "png";
      //缩放比例, 用来调节图片分辨率. 原图750x1334
      // var scaleBy = 750/width;
      var scaleBy = 1.5;
      var canvas = document.createElement("canvas");
      var rect = dom.get(0).getBoundingClientRect();
      canvas.width = width * scaleBy;
      canvas.height = height * scaleBy;
      canvas.style.width = width * scaleBy + "px";
      canvas.style.height = height * scaleBy + "px";
      var context = canvas.getContext("2d");
      context.scale(scaleBy, scaleBy);
      // 解决图片偏移问题
      context.translate(-rect.left, -rect.top);

      html2canvas(dom, {
        canvas,
        onrendered: function(canvas) {
          var img = canvas.toDataURL();
          _this.imgUrl = img;
          $(".img-mask").hide();
        }
      });
    }
  }
};
</script>

<style lang='less' rel='stylesheet/less' scoped>
.reset-font() {
  font-family: Microsoft YaHei;
  letter-spacing: 0;
  font-size: 0.7rem;
}

.me-score {
  // margin: 0.5rem 1.7rem 0 1.7rem;
  position: relative;
  width: 13.7rem;
  left: 1.18rem;
  top: 1.18rem;
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
    // position: absolute;
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
    left: 9.92rem;
    top: 16.6rem;
    width: 2.5rem;
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
.me-data {
  position: absolute;
  font-size: 0.9rem;
  top: 0;
  left: 7.8rem;
  .mt1 {
    margin-top: 0.17rem;
  }
  p {
    color: #fff;
  }
}
.me-data {
  width: 5.8rem;
  ._p2,
  .name {
    color: #fff;
    margin-top: 0.25rem;
    .reset-font();
    font-weight: bold;
    font-size: 0.8rem;
  }
  ._p1 {
    color: #d2bc00;
    .reset-font();
    font-family: "KaiTi";
    font-size: 0.55rem;
  }
  .name {
    margin-top: 0.45rem;
    height: 1rem;
  }
}
.reset-font() {
  font-family: Microsoft YaHei;
  letter-spacing: 0;
  font-size: 0.76rem;
}
.save-note {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 0.8rem;
  height: 1.65rem;
  z-index: 99;
  .tc {
    height: 1.65rem;
    line-height: 1.65rem;
    color: #fee31a;
    font-family: "Litchi";
  }
  .mask {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.7;
  }
}
.save-btn {
  width: 5.8rem;
  display: inline-block;
  // margin: 0 auto;
}
</style>