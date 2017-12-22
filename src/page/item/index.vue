<template>
  	<div>
    	<itemcontainer father-component="item"></itemcontainer>
  	</div>
</template>

<script>
import itemcontainer from "../../components/itemcontainer";

export default {
  name: "item",
  components: {
    itemcontainer
  },
  created() {
        document.body.style.backgroundImage = 'url(./static/img/16.jpg)';

    // document.body.style.backgroundImage = 'url(../../images/DIR/16.jpg)';
    //进入题目页面，开始计时
    this.$store.commit("REMBER_TIME");
    var music = document.getElementsByClassName("music")[0];
    music.style.display="block"
  }
};
</script>

<style lang="less">
body {
  background-image: url(../../images/DIR/16.jpg);
}
</style>
