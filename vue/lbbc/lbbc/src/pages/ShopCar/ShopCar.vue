<template>
    <div>
      <div id="slider" class="mui-slider top">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div class="mui-scroll">
            <a :class="['mui-control-item mui-active', index == 0 ? 'mui-active': '']" href="#" v-for="(item,index) in clsList">{{ item.clsName }}</a>
          </div>
        </div>
      </div>
      <div v-for="(bannerPic, index) in bannerPicCellList">
        <span>图片地址{{bannerPic.bannerPictureUrl}} 链接 {{bannerPic.bannerTargetAddress}}</span>
      </div>
      <!--<img src="/static/images/lunbo/pic_001.png">-->
      <div class="tc-scroll-list-container">
        <!-- 占有屏幕主体大小 -->
        <div class="tc-scroll-wrapper">
          <!-- 很长很长 可以上下拉动-->
          <div class="tc-scroll-content">

            <div class="tc-scroll-list-wrapper">
              <div>
                <div class="scroll-header-body">
                  <!--轮播图区域-->
                  <div class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide" v-for="(bannerPic, index) in bannerPicCellList">
                        <a href="bannerPic.bannerTargetAddress"><img src="bannerPic.bannerPictureUrl"></a>
                      </div>
                    </div>
                    <!-- 轮播图页码 -->
                    <div class="swiper-pagination"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  // 1. 导入 mui 的js文件
  import mui from "../../lib/mui/js/mui.min.js";


  import 'swiper/dist/css/swiper.css'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

  import axios from 'axios'


  export default {
    data (){
      return {
        clsList:[],
        bannerPicCellList:[]
      };
    },
    created () {
      this.getClsList()
      this.getBannerPicCellList()
      // this.getGroupBuyGoodsList()
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
        //  http://localhost:8080/static/images/lunbo/pic_001.png
        axios.get('http://localhost:8080/static/Home/CatrgoryCellList.json').then(
          response => {
            // 成功了
            const result = response.data
            this.clsList = result.CatrgoryCellList
          }).catch(error => {
          // alert('请求失败了')
        })
      },
      getBannerPicCellList () {
        // 使用 axios 发送ajax请求
        axios.get('http://localhost:8080/static/Home/bannerPicCellList2.json').then(
          response => {
            // 成功了
            const result = response.data
            this.bannerPicCellList = result.bannerPicCellList
          }).catch(error => {
          // alert('请求失败了')
        })
      }
    }
  }
</script>

<style>
  * {
    touch-action: pan-y;
  }
  .top {
    position: fixed;
    top: 0;
    z-index:222;
    background-color: #fff;
  }


  .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active {
    color: #44ad19;
  }
  .tc-scroll-list-container {
    padding-top: 45px;
    padding-bottom: 50px;
  }
  .swiper-container {
    width: 100%;
    height: 187.5px;
  }
  .swiper-wrapper{
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
  }

</style>
