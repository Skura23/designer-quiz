<template>
  	<div>
    	<div class="me-title">
          <p v-text="openIdName">杨帅</p>
          <p>依据IDR全球设计师排行榜测试</p>
      </div>
      <div class="me-info re">
        <div class="up">
          <p class="p1">你的排名</p>
          <p class="p2 mb"> NO.{{meRank}}</p>
        </div>
        <div class="down">
          <p class="p1 mt">你的身价</p>
          <p class="p2">¥{{worthArr[10-rightNum]}}</p>
        </div>
      </div>
      <div class="me-descri tc mb">
        <p>{{scoreTipsArr[10-rightNum]}}</p>
      </div>
      <div class="btns">
        <!-- 坑点: webpack无法识别并编译router-link内的src -->
        <router-link to="/scoreImg" tag="img" :src="img5"></router-link>
        <router-link to="/answers" tag="img" :src="img6"></router-link>
      </div>
      <div class="logo">
        <img src="~static/14.png" alt="">
      </div>
        <!-- <div class="share_button" @click="showCover"></div>
        <div class="share_code">
            <header class="share_header">关注葡萄之家，获取答案。</header>
            <img src="../../images/4-4.png" height="212" width="212" class="code_img"> 
        </div>
        <div class="share_cover" v-show="showHide" @click="showCover">
            <img src="../../images/5-2.png" class="share_img">
        </div> -->
  	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "score",
  data() {
    return {
      // showHide: false, //是否显示提示
      score: 0, //分数
      scoreTips: "", //分数提示
      //正确答案
      rightAnswer: [2, 8, 11, 15, 18, 22, 25, 32, 35],
      rightNum: 0,
      scoreTipsArr: [
        "Oh 霾god! 阁下乃设计届之旷世奇才, 这里有个CEO的小职位愿意来坐坐吗! ",
        "设计界扛把子! 已经有183位猎头请求添加你为好友.",
        "久仰久仰, 设计届大佬! 以后有问题还请多指教.",
        "骚年, 你这么值钱, 老板知道吗? ",
        "年终奖发多少? 老板看了这张图难道还没点X数? ",
        "是时候把这张图片转发给那些叫你美工的人了.",
        "这张图建议中午看, 因为你早晚都要改稿.",
        "其实, 做一个美工也挺好, 至少不丑.",
        "改行吧, 你更适合做甲方.",
        "外行瞎凑什么热闹."
      ],
      // 身价集合
      worthArr: [
        20000000,
        10000000,
        5000000,
        2500000,
        1500000,
        1000000,
        600000,
        400000,
        300000,
        100000,
        100000
      ],
      // 排名
      meRank: "",
      img5: require("../../../static/5.png"),
      img6: require("../../../static/6.png")
    };
  },
  computed: mapState(["answerid", "allTime", "scoreData", "openIdName"]),
  created() {
    this.computedScore();
    this.getMeRank();
    // var url = require('~static/3.png')
    document.body.style.backgroundImage = "url(./static/3.png)";
    var music = document.getElementsByClassName("music")[0];
    // console.log(music);
    music.style.display="none"
  },
  methods: {
    ...mapActions(["getScoreData"]),

    //计算分数
    computedScore() {
      this.answerid.forEach((item, index) => {
        if (index == 9) {
          this.rightNum++;
        } else {
          if (item == this.rightAnswer[index]) {
            this.rightNum += 1;
          }
        }
      });
    },
    // Math.floor(Math.random()*9+11)
    //根据分数显示提示及身价
    getMeRank: function() {
      var _this = this;
      if (this.rightNum == 10) {
        getRank(3, 10);
        return;
      }
      if (this.rightNum == 9) {
        getRank(11, 50);
        return;
      }
      if (this.rightNum == 8) {
        getRank(51, 100);
        return;
      }
      if (this.rightNum == 7) {
        getRank(101,500, 11);
        return;
      }
      if (this.rightNum == 6) {
        getRank(501,2000, 11);
        return;
      }
      if (this.rightNum == 5) {
        getRank(2001,5000, 111);
        return;
      }
      if (this.rightNum == 4) {
        getRank(5001,10000, 111);
        return;
      }
      if (this.rightNum == 3) {
        getRank(10001,15000 ,111);
        return;
      }
      if (this.rightNum == 2) {
        getRank(15001, 20000,111);
        return;
      }
      if (this.rightNum == 1) {
        getRank(20001,30000, 111);
        return;
      }
      function getRank(floorNum, ceilNum, randomScope) {
        console.log(_this.rightNum);
        // var randomScope = randomScope || 1;
        var n = _this.allTime > 10 ? _this.allTime : 10;
        var worth = _this.worthArr[10 - _this.rightNum];
        var tip = _this.scoreTipsArr[10 - _this.rightNum];
        var rank = "";
        // randomNum为随机数, maxN为根据随机数算出的最大时间
        var randomNum = null,
          maxN = null;
        var data = [];
        randomNum =randomScope? Math.floor(Math.random() * 9 + randomScope):1;
        // 为后七种情况设置rank极值
        if (floorNum > 51) {
          maxN = Math.floor((ceilNum - floorNum) / randomNum + 10);
          if (n >= maxN) {
            n = maxN;
          }
        }
        rank = floorNum + randomNum * (n - 10);
        // console.log(tip, worth);
        // 为前三种情况设置rank极值
        if (floorNum == 3 && rank >= 10) {
          rank = 10;
        }
        if (floorNum == 11 && rank >= 50) {
          rank = 50;
        }
        if (floorNum == 51 && rank >= 100) {
          rank = 100;
        }
        data.push(tip);
        data.push(worth);
        data.push(rank);
        _this.getScoreData(data);
        _this.meRank = rank;
      }
    }
  }
};
</script>

<style lang="less">
body {
  background-image: url(~static/3.png);
  padding-top: 1.2rem;
}
.reset-font() {
  font-family: initial;
  letter-spacing: 0;
  font-size: 0.76rem;
}
.me-title {
  width: 12rem;
  // height: 9.1rem;
  // background: url(../../images/4-2.png) no-repeat;
  background-size: 100% 100%;
  margin: 0 auto 0;
  margin-top: 0.5rem;
  position: relative;
  > p {
    .reset-font;
  }
}
.me-info {
  margin: 1rem auto 2rem;
  padding: 1rem 1.5rem;
  width: 14rem;
  background: url(~static/4.png) no-repeat;
  background-size: 100% 100%;
  p {
    text-align: center;
    color: #00ff66;
    .reset-font;
  }
  .p1 {
    font-size: 0.75rem;
  }
  .p2 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  > div:first-child {
    border-bottom: 2px dashed #ffe520;
  }
  &:after {
    content: "";
    position: absolute;
    display: block;
    background: url(~static/17.png) no-repeat;
    background-size: 100% 100%;
    width: 1.5rem;
    height: 1rem;
    bottom: -0.6rem;
    left: 50%;
    margin-left: -0.75rem;
  }
  &:before {
    content: " ";
    display: block;
    position: absolute;
    left: 0.4rem;
    top: 0.3rem;
    width: 1.9rem;
    height: 0.7rem;
    background: url(~static/13.png) no-repeat;
    background-size: contain;
  }
}

.btns {
  text-align: center;
  img {
    width: 5rem;
    &:last-child {
      margin-left: 0.5rem;
    }
  }
}
.logo {
  position: absolute;
  bottom: 0rem;
  left: 50%;
  margin-left: -1.5rem;
  img {
    width: 3rem;
  }
}

// .share_button {
//   width: 6.025rem;
//   height: 2.4rem;
//   margin: 0.8rem auto 0;
//   background: url(../../images/4-3.png) no-repeat 0.4rem 0;
//   background-size: 5.825rem 100%;
// }
// .share_code {
//   width: 5.3rem;
//   margin: 1.5rem auto 0;
//   .share_header {
//     color: #664718;
//     font-size: 0.475rem;
//     font-family: "Microsoft YaHei";
//     width: 7rem;
//     font-weight: 500;
//   }
//   .code_img {
//     height: 5.3rem;
//     width: 5.3rem;
//     margin-top: 0.5rem;
//   }
// }
// .share_cover {
//   position: fixed;
//   bottom: 0;
//   right: 0;
//   top: 0;
//   left: 0;
//   background: url(../../images/5-1.png) no-repeat;
//   background-size: 100% 100%;
//   opacity: 0.92;
// }
// .share_img {
//   height: 10.975rem;
//   width: 11.95rem;
//   position: fixed;
//   top: 0.5rem;
//   left: 50%;
//   margin-left: -5.975rem;
// }
</style>
