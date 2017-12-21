<template>
  <div>
    <div class="me-score re">
      <div id="to-save-img">
      <img src="/static/19.jpg" width="100%" alt="">
      <p class="p1">
        杨帅
      </p>
      <p class="p2">
        依据IDR全球设计师排行榜测试
      </p>
      <p class="p3 tc">你的排名</p>
      <p class="p4 tc">No.{{scoreData.rank}}</p>
      <p class="p5 tc">你的身价</p>
      <p class="p6 tc">¥{{scoreData.worth}}</p>
      <p class="p7">{{scoreData.tip}}</p>
      <img src="/static/21.jpg" class="qrimg" alt="">
      </div>
    </div>
    <br>
    <div class="tc">
    <img src="/static/20.png" width="5.8rem" alt="" class="save-btn" @click="saveImg">
    </div>
  </div>
</template>

<script type='text/babel'>
import { mapState, mapActions } from "vuex";
import domToImage from "dom-to-image";
import fileSaver from "file-saver";

console.log(fileSaver, domToImage);

export default {
  created() {
    document.body.style.background = "#000000";
  },
  computed: mapState(["scoreData"]),
  methods: {
    // ...mapActions(["addNum", "initializeData"]),
    saveImg() {
      console.log(fileSaver, domToImage);
      // var node = document.getElementById('my-node');
      domToImage
        .toBlob(document.getElementById("to-save-img"))
        .then(function(blob) {
          fileSaver.saveAs(blob, "我的评测.png");
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
  width: 12.7rem;
  left: 1.7rem;
  img {
    left: 0;
    top: 0;
    z-index: -1;
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
    }
  }
  .qrimg {
    position: absolute;
    left: 9.12rem;
    top: 16.8rem;
    width: 2.6rem;
    z-index: 1;
  }
}
#to-save-img{
  font-size: 0;
}
.save-btn {
  width: 5.8rem;
  display: inline-block;
  // margin: 0 auto;
}
</style>