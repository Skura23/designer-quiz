<template>
  	<div class="home_container">
        <itemcontainer father-component="home"></itemcontainer>
    </div>
</template>

<script>
import itemcontainer from "../../components/itemcontainer";

export default {
  name: "home",
  components: {
    itemcontainer
  },
  created() {
    // 这句用于页面后退时, 更换为正确的背景图
    // 这里用static路径(要确保此图片路径在整个项目里有被使用才能用static路径找到)
    // created内不能用原来的路径 '../../images/DIR/1.png' 么?
    // 因为此时页面已解析完成?
    document.body.style.backgroundImage = 'url(./static/img/1.png)';
  }
};
</script>

<style lang="less" scoped>
.home_container {
}
</style>
