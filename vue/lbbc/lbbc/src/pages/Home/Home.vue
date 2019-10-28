<template>
    <div class="container">
      <!-- 滑动导航栏 -->
      <!--<div class="header-container">-->
        <!-- 取货点  搜索 -->
        <!--<div class="header-wrapper">-->
          <!--<div class="ship-shop-info-wrapper">-->
            <!--<span class="shopname">选择取货点</span>-->
          <!--</div>-->
          <!--<a></a>-->
        <!--</div>-->
        <!-- 顶部滑动条区域 -->
        <!--<div class="tc-scroll-wrapper">-->
          <!--<div class="tc-sroll-content">-->
            <!--<div class="tc-scroll-list-wrapper">-->
              <!-- 滑动分类选择区域-->
              <div id="slider" class="mui-slider top">
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
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->

      <!-- 轮播 商品  等等 -->
      <div class="tc-scroll-list-container">
        <!-- 占有屏幕主体大小 -->
        <div class="tc-scroll-wrapper">
          <!-- 很长很长 可以上下拉动-->
          <div class="tc-scroll-content">

            <div class="tc-scroll-list-wrapper">
              <div>
                <div class="scroll-header-body">
                  <!-- 轮播组件 -->
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
                  <!-- 分类 -->
                  <!--  十个格子分类 -->
                  <div class="next-category-list-wrapper">
                    <div class="tc-enter next-category-item tc-enter__medium">
                      <div class="tc-badge-wrapper">
                        <img src="./images/grid/pic_011.png" alt="春游必备">
                      </div>
                      <span class="tc-enter__title tc-enter__title-medium">春游必备</span>
                    </div>
                    <div class="tc-enter next-category-item tc-enter__medium">
                      <div class="tc-badge-wrapper">
                        <img src="./images/grid/pic_012.png" alt="小路优选">
                      </div>
                      <span class="tc-enter__title tc-enter__title-medium">小萝优选</span>
                    </div>
                    <div class="tc-enter next-category-item tc-enter__medium">
                      <div class="tc-badge-wrapper">
                        <img src="./images/grid/pic_013.png" alt="生鲜">
                      </div>
                      <span class="tc-enter__title tc-enter__title-medium">生鲜</span>
                    </div>
                    <div class="tc-enter next-category-item tc-enter__medium">
                      <div class="tc-badge-wrapper">
                        <img src="./images/grid/pic_014.png" alt="百货">
                      </div>
                      <span class="tc-enter__title tc-enter__title-medium">百货</span>
                    </div>
                    <div class="tc-enter next-category-item tc-enter__medium">
                      <div class="tc-badge-wrapper">
                        <img src="./images/grid/pic_015.png" alt="电器">
                      </div>
                      <span class="tc-enter__title tc-enter__title-medium">电器</span>
                    </div>
                    <div class="tc-enter next-category-item tc-enter__medium">
                      <div class="tc-badge-wrapper">
                        <img src="./images/grid/pic_016.png" alt="母婴">
                      </div>
                      <span class="tc-enter__title tc-enter__title-medium">母婴</span>
                    </div>
                    <div class="tc-enter next-category-item tc-enter__medium">
                      <div class="tc-badge-wrapper">
                        <img src="./images/grid/pic_017.png" alt="家纺">
                      </div>
                      <span class="tc-enter__title tc-enter__title-medium">家纺</span>
                    </div>
                    <div class="tc-enter next-category-item tc-enter__medium">
                      <div class="tc-badge-wrapper">
                        <img src="./images/grid/pic_018.png" alt="领券中心">
                      </div>
                      <span class="tc-enter__title tc-enter__title-medium">领券中心</span>
                    </div>
                    <div class="tc-enter next-category-item tc-enter__medium">
                      <div class="tc-badge-wrapper">
                        <img src="./images/grid/pic_019.png" alt="华为专场">
                      </div>
                      <span class="tc-enter__title tc-enter__title-medium">华为专场</span>
                    </div>
                    <div class="tc-enter next-category-item tc-enter__medium">
                      <div class="tc-badge-wrapper">
                        <img src="./images/grid/pic_020.png" alt="超值换购">
                      </div>
                      <span class="tc-enter__title tc-enter__title-medium">超值换购</span>
                    </div>

                  </div>
                  <!-- 惠拼推荐商品 -->
                  <GroupBuy/>

                  <!-- -->
                  <div class="door-blank-container">

                  </div>
                </div>
              </div>
              <!-- 商品列表-->
              <GoodsList/>
            </div>
          </div>
        </div>
      </div>


    </div>
</template>

<script>
  // 1. 导入 mui 的js文件
  import mui from "../../lib/mui/js/mui.min.js";

  import axios from 'axios'

  // import VueLazyLoad from 'vue-lazyload'

  import 'swiper/dist/css/swiper.css'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

  import GoodsList from '../../components/GoodsList/GoodsList.vue'
  import GroupBuy from '../../components/GroupBuy/GroupBuy.vue'


  // Vue.use(VueLazyLoad,{
  //   error:'./static/error.png',
  //   loading:'./static/loading.png'
  // })

  export default {
    data (){
      return {
        clsList:[]
      };
    },
    created () {
      this.getClsList()
    },
    mounted () {
      new Swiper('.swiper-container',{
        loop : true,
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
    methods: {
      getClsList () {
        // 使用 axios 发送ajax请求
        axios.get('http://localhost:8080/static/Home/CatrgoryCellList.json').then(
          response => {
            // 成功了
            const result = response.data
            this.clsList = result.CatrgoryCellList
          }).catch(error => {
          // alert('请求失败了')
        })
      }
    },
    components: {
      Swiper,
      SwiperSlide,
      GroupBuy,
      GoodsList
    }
  }
</script>

<style lang="scss" scoped>

  * {
    touch-action: pan-y;
  }
  *{
    margin:0;
    padding: 0;
  }
  .unshow {
    display: none;
  }
  .header-container {
    width: 100%;
    height: 80px;
  }
    .header-wrapper {
      width: 100%;
      height: 45px;
    }
      .ship-shop-info-wrapper {
        width: 140px;
        height: 40px;
        line-height: 40px;
        margin: auto auto;
        text-align: center;
      }
        .shopname {
          text-align: center;
          font-size: 15px;
          color: #333;
          overflow: hidden;
        }
  .top {
    position: fixed;
    top: 0;
    z-index:222;
    background-color: #fff;
  }

  .tc-scroll-list-container {
    padding-top: 45px;
    padding-bottom: 50px;
  }
  .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active {
    color: #44ad19;
  }
  .swiper-container {
    width: 100%;
    height: 187.5px;

    .swiper-wrapper{
      width: 100%;
      height: 100%;
    }

    .swiper-slide a img {
      width: 100%;
      height: 100%;
    }
  }
  .next-category-list-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0.4rem 0;
  }
  .tc-enter{
    text-align: center;
  }
  .next-category-item {
    width: 20%;
  }
  .tc-enter__medium {
    margin: 0.133333rem 0;
  }
  .tc-enter__title-medium {
    font-size: 13px;
    text-align: center;
  }
  .header-right {
    float: left;
  }

  .scroll-content {
    display: inline-block;
  }
  .recommend-group-buy-item-container {
    display: inline-block;
  }
  .recommend-group-buy-item-container.recommend-group-buy-item-wrapper {
    position: relative;
  }

</style>
