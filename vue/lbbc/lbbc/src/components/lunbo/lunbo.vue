<template>
    <div>
      <!-- 轮播组件 -->
      <!-- 轮播图区域 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><a href="#"><img src="../../../static/images/lunbo/pic_001.png"></a></div>
          <div class="swiper-slide"><a href="#"><img src="../../../static/images/lunbo/pic_002.png"></a></div>
          <div class="swiper-slide"><a href="#"><img src="../../../static/images/lunbo/pic_003.png"></a></div>
          <div class="swiper-slide"><a href="#"><img src="../../../static/images/lunbo/pic_004.png"></a></div>
          <div class="swiper-slide"><a href="#"><img src="../../../static/images/lunbo/pic_005.png"></a></div>
          <div class="swiper-slide"><a href="#"><img src="../../../static/images/lunbo/pic_006.png"></a></div>
          <div class="swiper-slide"><a href="#"><img src="../../../static/images/lunbo/pic_007.png"></a></div>
          <div class="swiper-slide"><a href="#"><img src="../../../static/images/lunbo/pic_008.png"></a></div>
        </div>
        <!-- 轮播图页码 -->
        <div class="swiper-pagination"></div>
      </div>

      <div><h1>123456</h1></div>
      <div v-for="(bannerPic, index) in bannerPicCellList"><span>{{bannerPic.bannerPictureUrl}}  {{bannerPic.bannerTargetAddress}}</span>
        <img v-lazy="bannerPic.bannerPictureUrl">
      </div>

      </div>
    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

  export default {
    data () {
      return {
        bannerPicCellList:[]
      }
    },
    created () {
      this.getBannerPicCellList()
      // this.getGroupBuyGoodsList()
    },
    mounted() {
      new Swiper('.swiper-container',{
        loop : true,
        autoplay: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    },
    methods: {
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
    },
    components: {
      Swiper,
      SwiperSlide,
    }
  }
</script>

<style>
  .swiper-container {
    width: 100%;
    height: 187.5px;
  }

  .swiper-wrapper{
    width: 100%;
    height: 100%;
  }

  .swiper-slide a img {
    width: 100%;
    height: 100%;
  }

</style>
