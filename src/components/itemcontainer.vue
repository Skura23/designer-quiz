<template>
  	<section>
    	<header :class="{'top_tips':fatherComponent == 'item'}">
    		<span class="num_tip" :class="{'item10':itemNum==10}" v-if="fatherComponent == 'item'">{{itemNum}}</span>
    	</header>
    	<div v-if="fatherComponent == 'home'" class="ov">
    		<!-- <div class="home_logo item_container_style"></div> -->
				<img class="home-title" src="../images/DIR/7.png" alt="" width="80%">
				<!-- <div>你好啊</div> -->
    		<div class="start button_style" ></div>
    		<router-link to="item" tag="div" class="home-mask" ></router-link>
        <!-- <div class="" to="item"></div> -->
    	</div>
    	<div v-if="fatherComponent == 'item'" >
        <div class="item-wra ov" :class="'ques'+itemNum">
          <p class="tc">{{itemDetail[itemNum-1].topic_name}}</p>
          <div class="answers">
            <div class="ans-i">
              <div class="tc mb" v-if="itemNum == 8">
              <img width="60%" :src="'/static/'+itemDetail[itemNum-1].quesImg" alt="">
              </div>
              <p class="opt" v-for="(item, index) in itemDetail[itemNum-1].topic_answer" @click="choosed(index, item.topic_answer_id)">
                <img v-if="item.answer_img" :src="'/static/'+item.answer_img" width="100%" alt="">
                <span v-if="item.answer_name"><i>{{chooseType(index)}}.</i>{{item.answer_name}}</span>
              </p>
              <!-- <p>234</p>
              <p>234</p>
              <p>234</p> -->
            </div>
          </div>
        </div>
    		<!-- <div class="item_back item_container_style">
    			<div class="item_list_container" v-if="itemDetail.length > 0">
    				<header class="item_title">{{itemDetail[itemNum-1].topic_name}}</header>
    				<ul>
    					<li  v-for="(item, index) in itemDetail[itemNum-1].topic_answer" @click="choosed(index, item.topic_answer_id)" class="item_list">
    						<span class="option_style" v-bind:class="{'has_choosed':choosedNum==index}">{{chooseType(index)}}</span>
    						<span class="option_detail">{{item.answer_name}}</span>
    					</li>
    				</ul>
    			</div>
    		</div> -->
    	</div>
  	</section>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "itemcontainer",
  data() {
    return {
      itemId: null, //题目ID
      choosedNum: null, //选中答案索引
      choosedId: null //选中答案id
    };
  },
  props: ["fatherComponent"],
  computed: mapState([
    "itemNum", //第几题
    "level", //第几周
    "itemDetail", //题目详情
    "timer" //计时器
  ]),
  methods: {
    ...mapActions(["addNum", "initializeData"]),
    //点击下一题
    nextItem() {
      if (this.itemNum < this.itemDetail.length) {
        if (this.choosedNum !== null) {
          this.choosedNum = null;
          //保存答案, 题目索引加一，跳到下一题
          this.addNum(this.choosedId);
        } else {
          alert("您还没有选择答案哦");
        }
      } else {
        this.submitAnswer();
      }
    },
    //索引0-3对应答案A-B
    chooseType: type => {
      switch (type) {
        case 0:
          return "A";
        case 1:
          return "B";
        case 2:
          return "C";
        case 3:
          return "D";
      }
    },
    //选中的答案信息
    choosed(type, id) {
      this.choosedNum = type;
      this.choosedId = id;
      this.nextItem();
    },
    //到达最后一题，交卷，请空定时器，跳转分数页面
    submitAnswer() {
      if (this.choosedNum !== null) {
        this.addNum(this.choosedId);
        clearInterval(this.timer);
        this.$router.push("score");
      } else {
        alert("您还没有选择答案哦");
      }
    }
  },
  created() {
    // 初始化信息
    this.initializeData();
  }
};
</script>

<style lang="less">
// 导入字体
@font-face {
  font-family: Litchi;
  src: url("../style/Litchi.ttf");
  src: url("../style/Litchi.ttf") format("truetype");
}

.home-mask {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
}

body {
  color: #000;
}
.top_tips {
  position: absolute;
  height: 3.25rem;
  width: 3.25rem;
  top: 1.7rem;
  left: 1.6rem;
  background: url(../images/DIR/12.png) no-repeat;
  background-size: 100% 100%;
  z-index: 10;
  .num_tip {
    position: absolute;
    left: 0.48rem;
    bottom: 1.3rem;
    // height: 0.7rem;
    // width: 2.5rem;
    font-size: 1.6rem;
    // font-family: "黑体";
    // color: #a57c50;
    text-align: center;
  }
  .item10{
    font-size: 1.4rem;
    text-indent: -9px;
  }
}

.item_container_style {
  height: 11.625rem;
  width: 13.15rem;
  background-repeat: no-repeat;
  position: absolute;
  top: 4.1rem;
  left: 1rem;
}
.home-title {
  margin: 0 auto;
  display: block;
  margin-top: 5.9rem;
}
// .item_back {
//   background-image: url(../images/2-1.png);
//   background-size: 100% 100%;
// }
// .button_style {
//   display: block;
//   height: 4.7rem;
//   width: 7.35rem;
//   background-size: 100% 100%;
//   position: absolute;
//   top: 16.9rem;
//   left: 58.8%;
//   margin-left: -2.4rem;
//   background-repeat: no-repeat;
// }
// .start {
//   background-image: url(../images/DIR/8.png);
// }
// .next_item {
//   background-image: url(../images/2-2.png);
// }
// .submit_item {
//   background-image: url(../images/3-1.png);
// }
.item_list_container {
  position: absolute;
  height: 7rem;
  width: 8rem;
  top: 2.4rem;
  left: 3rem;
  -webkit-font-smoothing: antialiased;
}
.item_title {
  font-size: 0.65rem;
  color: #fff;
  line-height: 0.7rem;
}
.item_list {
  font-size: 0;
  margin-top: 0.4rem;
  width: 10rem;
  span {
    display: inline-block;
    font-size: 0.6rem;
    color: #fff;
    vertical-align: middle;
  }
  .option_style {
    height: 0.725rem;
    width: 0.725rem;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 0.725rem;
    text-align: center;
    margin-right: 0.3rem;
    font-size: 0.5rem;
    font-family: "Arial";
  }
  .has_choosed {
    background-color: #ffd400;
    color: #575757;
    border-color: #ffd400;
  }
  .option_detail {
    width: 7.5rem;
    padding-top: 0.11rem;
  }
}

.item-wra {
  // width: 8rem;
  position: absolute;
  top: 5.7rem;
  left: 1.7rem;
  right: 1.7rem;
  border: 2px solid #0e050a;
  border-radius: 0.5rem;
  box-shadow: 0.17rem 0.17rem #deaf1f;
  > p {
    padding: 0.7rem 0.6rem;
    background: #0e050a;
    color: #ffe100;
    &:before {
      content: " ";
      display: block;
      position: absolute;
      left: 0.1rem;
      top: 0.1rem;
      width: 1.9rem;
      height: 0.7rem;
      background: url(../images/DIR/13.png) no-repeat;
      background-size: contain;
    }
  }
  // 第一题的answers样式
  // 无背景, 有虚线, 为absolute
  &.ques1,
  &.ques3,
  &.ques6,
  &.ques9 {
    .answers {
      height: 12rem;
      .ans-i {
        p {
          width: 4.5rem;
          height: 4.5rem;
          position: absolute;
          background: none;
          &:first-child {
            left: 0;
            top: 0;
          }
          &:nth-child(2) {
            right: 0;
            top: 0;
          }
          &:nth-child(3) {
            left: 0;
            bottom: 0;
          }
          &:last-child {
            right: 0;
            bottom: 0;
          }
        }
        &:before {
          content: " ";
          display: block;
          position: absolute;
          width: 100%;
          border: 1px dashed #393939;
          top: 50%;
        }
        &:after {
          content: " ";
          display: block;
          position: absolute;
          height: 100%;
          border: 1px dashed #393939;
          left: 50%;
          top: 0;
        }
      }
    }
  }

  &.ques3,
  &.ques9 {
    .ans-i {
      p.opt {
        margin-bottom: 0.5rem;
        width: 3.9rem;
        height: 3.9rem;
        span {
          position: absolute;
          display: inline-block;
          width: 100%;
          text-align: center;
          left: 0;
          bottom: -0.9rem;
          font-size: 0.6rem;
        }
      }
    }
  }
  &.ques4 {
    > p {
      padding: 0.7rem 1.2rem;
    }
  }
  &.ques5 {
    > p {
      font-size: 0.8rem;
    }
  }
  &.ques6 {
    .answers {
      height: 10.3rem;
      p.opt {
        height: auto;
      }
    }
  }
  &.ques7 {
    p.opt {
      font-size: 0.7rem;
      &:nth-child(3){
        padding-left: 1.3rem!important;
        padding-right: 1.3rem!important;
      }
    }
  }
  &.ques8 {
    .ans-i{
      // text-align: center;
      overflow: hidden;
    }
    p.opt {
      float: left;
      font-size: 0.6rem;
      width: 4.7rem;
      &:nth-child(3),&:nth-child(5){
        margin-left: 0.8rem;
      }
    }
  }  

  // 第二题及其他纯文字题的answers样式
  // 有背景, 有虚线, 非absolute
  &.ques2,
  &.ques4,
  &.ques5,
  &.ques7,
  &.ques8,
  &.ques10 {
    .answers {
      background: #fff;
      padding: 1rem;
      .ans-i {
        width: 100%;
        height: 100%;
        position: relative;
        > p {
          background: url(/static/10.png) no-repeat;
          background-size: 100% 100%;
          padding: 8px;
          text-align: center;
          margin-bottom: 0.6rem;
          &:last-child {
            margin-bottom: 0rem;
          }
        }
      }
    }
  }
  .answers {
    background: #fff;
    padding: 1rem;
    .ans-i {
      width: 100%;
      height: 100%;
      position: relative;
    }
  }
}
</style>
