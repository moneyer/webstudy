<template>
  <div main-container>
    <!-- 滑动导航栏 -->
    <div>
      <!-- 顶部滑动条区域 -->
      <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div class="mui-scroll">
            <a class="mui-control-item mui-active" href="#">推荐</a>
            <a class="mui-control-item" href="#">小萝优选</a>
            <a class="mui-control-item" href="#">生鲜</a>
            <a class="mui-control-item" href="#">母婴</a>
            <a class="mui-control-item" href="#">家纺</a>
            <a class="mui-control-item" href="#">电器</a>
            <a class="mui-control-item" href="#">百货</a>
          </div>
        </div>
      </div>
    </div>
    <!-- 轮播图区域 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><a href="#"><img src="./images/lunbo/pic_001.png"></a></div>
        <div class="swiper-slide"><a href="#"><img src="./images/lunbo/pic_002.png"></a></div>
        <div class="swiper-slide"><a href="#"><img src="./images/lunbo/pic_003.png"></a></div>
        <div class="swiper-slide"><a href="#"><img src="./images/lunbo/pic_004.png"></a></div>
        <div class="swiper-slide"><a href="#"><img src="./images/lunbo/pic_005.png"></a></div>
        <div class="swiper-slide"><a href="#"><img src="./images/lunbo/pic_006.png"></a></div>
        <div class="swiper-slide"><a href="#"><img src="./images/lunbo/pic_007.png"></a></div>
        <div class="swiper-slide"><a href="#"><img src="./images/lunbo/pic_008.png"></a></div>
      </div>
      <!-- 轮播图页码 -->
      <div class="swiper-pagination"></div>
    </div>

    <!--  十个格子分类 -->
    <div>
      <!-- 九宫格 到 6宫格 的改造工程 -->
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newslist">
            <img src="./images/grid/pic_011.png" alt="">
            <div class="mui-media-body">春游必备</div>
          </router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/photolist">
            <img src="./images/grid/pic_012.png" alt="">
            <div class="mui-media-body">小萝优选</div>
          </router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newslist">
            <img src="./images/grid/pic_013.png" alt="">
            <div class="mui-media-body">生鲜</div>
          </router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/photolist">
            <img src="./images/grid/pic_014.png" alt="">
            <div class="mui-media-body">百货</div>
          </router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newslist">
            <img src="./images/grid/pic_015.png" alt="">
            <div class="mui-media-body">电器</div>
          </router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/photolist">
            <img src="./images/grid/pic_016.png" alt="">
            <div class="mui-media-body">母婴</div>
          </router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newslist">
            <img src="./images/grid/pic_017.png" alt="">
            <div class="mui-media-body">家纺</div>
          </router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/photolist">
            <img src="./images/grid/pic_018.png" alt="">
            <div class="mui-media-body">领券中心</div>
          </router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newslist">
            <img src="./images/grid/pic_019.png" alt="">
            <div class="mui-media-body">华为专场</div>
          </router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/photolist">
            <img src="./images/grid/pic_020.png" alt="">
            <div class="mui-media-body">超值换购</div>
          </router-link></li>
      </ul>
    </div>

  </div>
</template>

<script>
  // 1. 导入 mui 的js文件
  import mui from "../../lib/mui/js/mui.min.js";

  import 'swiper/dist/css/swiper.css'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'


  export default {
    mounted () {
      new Swiper('.swiper-container',{
        autoplay: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }

      })
      // 当 组件中的DOM结构被渲染好并放到页面中后，会执行这个 钩子函数
      // 如果要操作元素了，最好在 mounted 里面，因为，这里时候的 DOM 元素 是最新的
      // 2. 初始化滑动控件
      mui(".mui-scroll-wrapper").scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      })

    },
    components: {
      Swiper,
      SwiperSlide
    }
  }
</script>

<style lang="scss" scoped>
  /*.swiper-container {*/
  /*width: 100%;*/
  /*height: 270px;*/
  /*}*/
  /*.mint-swipe {*/
  /*height: 270px;*/
  /*width: 100%;*/

  /*.mint-swipe-item {*/
  /*&:nth-child(1) {*/
  /*background-color: red;*/
  /*}*/
  /*&:nth-child(2) {*/
  /*background-color: blue;*/
  /*}*/
  /*&:nth-child(3) {*/
  /*background-color: cyan;*/
  /*}*/

  /*img {*/
  /*width: 100%;*/
  /*height: 100%;*/
  /*}*/
  /*}*/
  /*}*/
  * {
    touch-action: pan-y;
  }
  /*.mui-control-item .mui-active {*/
  /*color: greenyellow;*/
  /*}*/
  .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active {
    color: #44ad19;
  }
  .swiper-container {
    width: 100%;
    height: 270px;

    .swiper-wrapper{
      width: 100%;
      height: 270px;
      /*.swiper-slide:nth-child(1){*/
      /*background-color: red;*/
      /*}*/
      /*.swiper-slide:nth-child(2){*/
      /*background-color: yellow;*/
      /*}*/
      /*.swiper-slide:nth-child(3){*/
      /*background-color: black;*/
      /*}*/
    }

    .swiper-slide a img {
      width: 100%;
      height: 100%;
    }
  }
</style>
