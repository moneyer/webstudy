<template>
  <div main-container>
    <h1>home</h1>
    <!-- 滑动导航栏 -->
    <div></div>
    <!-- 轮播图区域 -->
    <div class="swiper-container">
      <mt-swipe :auto="4000">
        <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
        <mt-swipe-item>
          <img src="./images/lunbo/pic_001.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./images/lunbo/pic_002.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./images/lunbo/pic_003.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./images/lunbo/pic_004.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./images/lunbo/pic_005.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./images/lunbo/pic_006.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./images/lunbo/pic_007.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./images/lunbo/pic_008.png" alt="">
        </mt-swipe-item>
      </mt-swipe>
      <!--<div class="swiper-wrapper">-->
      <!--<div class="swiper-slide">-->
      <!--<a href="javascript:" class="link_to_food">-->
      <!--<div class="food_container">-->
      <!--<img src="./images/lunbo/pic_001.png">-->
      <!--</div>-->
      <!--</a>-->
      <!--<a href="javascript:" class="link_to_food">-->
      <!--<div class="food_container">-->
      <!--<img src="./images/lunbo/pic_002.png">-->
      <!--</div>-->
      <!--</a>-->
      <!--&lt;!&ndash;下面的图片省略&ndash;&gt;-->
      <!--</div>-->
      <!--<div class="swiper-slide">-->
      <!--<a href="javascript:" class="link_to_food">-->
      <!--<div class="food_container">-->
      <!--<img src="./images/lunbo/pic_003.png">-->
      <!--</div>-->
      <!--</a>-->
      <!--&lt;!&ndash;同样省略&ndash;&gt;-->
      <!--</div>-->
      <!--</div>-->
      <!--&lt;!&ndash; 轮播图页码 &ndash;&gt;-->
      <!--<div class="swiper-pagination"></div>-->
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        lunbotuList: [
          { id: 1, img: './images/lunbo/pic_001.png'},
          { id: 2, img: './images/lunbo/pic_002.png'},
          { id: 3, img: './images/lunbo/pic_003.png'},
          { id: 4, img: './images/lunbo/pic_004.png'},
          { id: 5, img: './images/lunbo/pic_005.png'},
          { id: 6, img: './images/lunbo/pic_006.png'},
          { id: 7, img: './images/lunbo/pic_007.png'},
          { id: 8, img: './images/lunbo/pic_008.png'}
        ] // 保存轮播图的数组
      };
    }
  }
</script>

<style lang="scss" scoped>
  .swiper-container {
    width: 100%;
    height: 270px;
  }
  .mint-swipe {
    height: 270px;
    width: 100%;

    .mint-swipe-item {
      &:nth-child(1) {
        background-color: red;
      }
      &:nth-child(2) {
        background-color: blue;
      }
      &:nth-child(3) {
        background-color: cyan;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  /*.swiper-container {*/
  /*width: 100%;*/
  /*height: 300px;*/

  /*.swiper-wrapper{*/

  /*.swiper-slide:nth-child(1){*/
  /*background-color: red;*/
  /*}*/
  /*.swiper-slide:nth-child(2){*/
  /*background-color: yellow;*/
  /*}*/
  /*.swiper-slide:nth-child(3){*/
  /*background-color: black;*/
  /*}*/
  /*}*/
  /*}*/
</style>
