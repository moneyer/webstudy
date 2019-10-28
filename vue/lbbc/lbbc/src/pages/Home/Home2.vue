<template>
  <div main-container>
    <h1>home</h1>
    <!-- 滑动导航栏 -->
    <div></div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>

    <!--<div>-->
    <!--&lt;!&ndash; 九宫格 到 6宫格 的改造工程    10个格子&ndash;&gt;-->
    <!--<ul class="mui-table-view mui-grid-view mui-grid-9">-->
    <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">-->
    <!--<router-link to="/home/newslist">-->
    <!--<img src="../../images/menu1.png" alt="">-->
    <!--<div class="mui-media-body">新闻资讯</div></router-link></li>-->
    <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">-->
    <!--<img src="../../images/menu2.png" alt="">-->
    <!--<div class="mui-media-body">图片分享</div></a></li>-->
    <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">-->
    <!--<img src="../../images/menu3.png" alt="">-->
    <!--<div class="mui-media-body">商品购买</div></a></li>-->
    <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">-->
    <!--<img src="../../images/menu4.png" alt="">-->
    <!--<div class="mui-media-body">留言反馈</div></a></li>-->
    <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">-->
    <!--<img src="../../images/menu5.png" alt="">-->
    <!--<div class="mui-media-body">视频专区</div></a></li>-->
    <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">-->
    <!--<img src="../../images/menu6.png" alt="">-->
    <!--<div class="mui-media-body">联系我们</div></a></li>-->
    <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">-->
    <!--<img src="../../images/menu3.png" alt="">-->
    <!--<div class="mui-media-body">商品购买</div></a></li>-->
    <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">-->
    <!--<img src="../../images/menu4.png" alt="">-->
    <!--<div class="mui-media-body">留言反馈</div></a></li>-->
    <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">-->
    <!--<img src="../../images/menu5.png" alt="">-->
    <!--<div class="mui-media-body">视频专区</div></a></li>-->
    <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">-->
    <!--<img src="../../images/menu6.png" alt="">-->
    <!--<div class="mui-media-body">联系我们</div></a></li>-->
    <!--</ul>-->

  </div>

  <!--<div class="swiper-container">-->
  <!--<div class="swiper-wrapper">-->
  <!--<div class="swiper-slide">1</div>-->
  <!--<div class="swiper-slide">2</div>-->
  <!--<div class="swiper-slide">3</div>-->
  <!--</div>-->
  <!--&lt;!&ndash; swiper轮播图圆点 &ndash;&gt;-->
  <!--<div class="swiper-pagination"></div>-->
  <!--</div>-->
  </div>
</template>

<script>
  // import 'swiper/dist/css/swiper.css'
  // // import '../../lib/swiper/css/swiper.css'
  // import { swiper, swiperSlide } from 'vue-awesome-swiper'
  //
  // export default {
  //   mounted () {
  //     new swiper('.swiper-container',{
  //       autoplay: true,
  //       // 如果需要分页器
  //       pagination: {
  //         el: '.swiper-pagination',
  //         clickable: true
  //       }
  //     })
  //   },
  //   components: {
  //     swiper,
  //     swiperSlide
  //   }
  // }
</script>

<style lang="scss" scoped>
  .main-container {
    width: 100%;
    height: 100%;
  }
  .mt-swipe{
    height: 200px;

    .mt-swipe-item:nth-child(1){
      background-color: red;
    }
    .mt-swipe-item:nth-child(2){
      background-color: yellow;
    }
    .mt-swipe-item:nth-child(3){
      background-color: black;
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
