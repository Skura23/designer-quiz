<template>
  	<div>
    	<div class="me-title">
          <p v-text="openIdName">杨帅</p>
          <p>在IDR全球三千万设计师排行榜中</p>
      </div>
      <div class="me-info re">
        <div class="up">
          <p class="p1">你的排名</p>
          <p class="p2 mb"> NO.{{scoreData.rank}}</p>
        </div>
        <div class="down">
          <p class="p1 mt">你的身价</p>
          <p class="p2">¥{{scoreData.worth}}</p>
        </div>
      </div>
      <div class="me-descri tc mb">
        <p>{{scoreData.tip}}</p>
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
        [
          "Oh 霾god! 阁下乃设计届之旷世奇才, 这里有个CEO的小职位愿意来坐坐吗! ",
          "恭喜你，你的设计身价和排名已超过全球99%的设计师！",
          "题目太简单？为你骄傲！为你自豪！",
          "好了好了，领教你的厉害了。请继续努力不断超越自己！"
        ],
        [
          "设计界扛把子! 已经有183位猎头请求添加你为好友.",
          "制霸设计圈的原来是你！站在设计之巅傲视群雄的感觉如何？天冷，你在上面多穿点！",
          "你的存在，就是设计师与美工区别的最好诠释",
          "如果多一点你这样的设计师，这个世界会多很多美好"
        ],
        [
          "久仰久仰, 设计届大佬! 以后有问题还请多指教.",
          "设计界翘楚！请一定要在设计界继续发光发热",
          "等着吧，不用多久，你就会升职加薪，出任CEO，拿国际设计奖",
          "是你让我看到设计致富这条路的曙光"
        ],
        [
          "骚年, 你这么值钱, 老板知道吗? ",
          "据说身价越高发量越少…你赚的钱都买霸王了吧",
          "本来我超羡慕你身价的，但是看看你的发际线…罢了罢了",
          "下次别人提改稿意见之前，先给他们看看这张图"
        ],
        [
          "年终奖发多少? 老板看了这张图难道还没点X数? ",
          "有这样的身价，你一定不用看甲方脸色了吧",
          "比稿之前，咱先比比身价表",
          "建议将身价表打印张贴在工作台，保你明年不再改稿"
        ],
        [
          "是时候把这张图片转发给那些叫你美工的",
          "再有人问你“上次那个设计师，一个Logo只要50块”，建议你用身价表回复他",
          "就凭这身价，买Mac指日可待了",
          "有了这张身价表加成buff，保佑你年底的过稿率蹭蹭蹭上涨"
        ],
        [
          "这张图建议中午看, 因为你早晚都要改稿",
          "互联网设计民工 鉴定完毕",
          "海南椰汁系设计师 鉴定完毕",
          "原来你就是传说中的佛系设计师“身价什么的无所谓啦，我做设计完全是随缘”"
        ],
        [
          "其实, 做一个美工也挺好, 至少不丑",
          "有时间做测试不如多花时间学习大师作品提升自己啦",
          "下次保洁阿姨给你提改稿意见时，你一定要虚怀若谷",
          "你被AI设计师取代的可能性高达66%"
        ],
        [
          "改行吧, 你更适合做",
          "恭喜你，你的身价和排名已超过全球0.01%的设计师",
          "朋友，真的不考虑换个职业？",
          "推荐你看本书《你真的不适合做设计师》"
        ],
        [
          "外行瞎凑什么",
          "设计跟你什么仇什么怨，你要干设计？",
          "设计跟你什么仇什么怨，你要干设计？",
          "出题人成心难为你？没事，听听背景音乐放松下也好"
        ]
      ],
      // 身价集合
      worthArr: [
        [2000,2900],
        [1000,1990],
        [500,999],
        [250,449],
        [150,249],
        [110,149],
        [60,109],
        [40,59],
        [30,39],
        [10,29]
      ],
      // 排名
      meRank: "",
      meTip: "",
      img5: require("../../../static/5.png"),
      img6: require("../../../static/6.png")
    };
  },
  computed: mapState(["answerid", "allTime", "scoreData", "openIdName"]),
  created() {
    this.computedScore();
    if (!this.scoreData.worth) {
      this.getMeResult();
    }
    // var url = require('~static/3.png')
    document.body.style.backgroundImage = "url(./static/3.png)";
    var music = document.getElementsByClassName("music")[0];
    // console.log(music);
    music.style.display = "none";
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
    getMeResult: function() {
      var _this = this;
      console.log(_this.rightNum);
      // var randomScope = randomScope || 1;
      var worth = 0;
      var tip =
        _this.scoreTipsArr[10 - _this.rightNum][
          Math.floor(Math.random() * 4 + 0)
        ];
      var rank = "";
      var data = [];
      worth = getRandomByScope(this.worthArr[10 - _this.rightNum][0],this.worthArr[10 - _this.rightNum][1])*10000

      data.push(tip);
      data.push(worth);
      

      if (this.rightNum == 10) {
        getRank(3, 10);
      }
      if (this.rightNum == 9) {
        getRank(11, 50);
      }
      if (this.rightNum == 8) {
        getRank(51, 100);
      }
      if (this.rightNum == 7) {
        getRank(101, 500, 11);
      }
      if (this.rightNum == 6) {
        getRank(501, 2000, 11);
      }
      if (this.rightNum == 5) {
        getRank(2001, 5000, 111);
      }
      if (this.rightNum == 4) {
        getRank(5001, 10000, 111);
      }
      if (this.rightNum == 3) {
        getRank(10001, 15000, 111);
      }
      if (this.rightNum == 2) {
        getRank(15001, 20000, 111);
      }
      if (this.rightNum == 1) {
        getRank(20001, 30000, 111);
      }
      data.push(rank);
      _this.getScoreData(data);

      // 获取范围内随机数
      function getRandomByScope(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      function getRank(floorNum, ceilNum, randomScope) {
        var n = _this.allTime > 10 ? _this.allTime : 10;
        // randomNum为随机数, maxN为根据随机数算出的最大时间
        var randomNum = null,
          maxN = null;
        randomNum = randomScope
          ? Math.floor(Math.random() * 9 + randomScope)
          : 1;
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
        return rank;
        // _this.meRank = rank;
        // _this.meTip = tip;
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
  bottom: 0.5rem;
  left: 50%;
  margin-left: -1.5rem;
  img {
    width: 3rem;
  }
}
.me-descri p{
  padding: 0 1rem;
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
