<template>
  <!-- 商品列表-->
  <div class="tc-scroll-context">
    <!--  Xx类商品  及商品列表-->
    <div>
      <div class="tc-categroy-item">
        <!-- XX类商品图片-->
        <div>
          <img src="./goods/pic_030.png" class="banner">
        </div>
        <!-- XX类商品列表 -->
        <div class="tc-goods-item">
          <div class="img-wrapper">
            <img src="./goods/pic_031.png" class="img">
          </div>
          <div class="info-wrapper">
            <span class="goods-name goods-name__two-line">海信49寸智能4K超清液晶电视</span>
            <span class="describe">摩卡金色 14核配置运行更快</span>
            <!--<div class="tag-wrapper"></div>-->
            <div class="price-container">
              <div class="price-wrapper">
                <span class="rmb">￥</span>
                <span class="price-number" >2299.0</span>
                <span class="discount-price"><del>￥3499.00</del></span>
                <span class="goods-spec"></span>
                <span class="item_icon">
                  <i class="iconfont icongouwuche"></i>
                </span>
                <div class="dividing-line"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="tc-goods-item">
          <div class="img-wrapper">
            <img src="./goods/pic_032.png" class="img">
          </div>
          <div class="info-wrapper">
            <span class="goods-name goods-name__two-line">海信49寸智能4K超清液晶电视</span>
            <span class="describe">摩卡金色 14核配置运行更快</span>
            <!--<div class="tag-wrapper"></div>-->
            <div class="price-container">
              <div class="price-wrapper">
                <span class="rmb">￥</span>
                <span class="price-number" >2299.0</span>
                <span class="discount-price"><del>￥3499.00</del></span>
                <span class="goods-spec"></span>
                <span class="item_icon">
                  <i class="iconfont icongouwuche"></i>
                </span>
                <div class="dividing-line"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="tc-goods-item">
          <div class="img-wrapper">
            <img src="./goods/pic_033.png" class="img">
          </div>
          <div class="info-wrapper">
            <span class="goods-name goods-name__two-line">海信49寸智能4K超清液晶电视</span>
            <span class="describe">摩卡金色 14核配置运行更快</span>
            <!--<div class="tag-wrapper"></div>-->
            <div class="price-container">
              <div class="price-wrapper">
                <span class="rmb">￥</span>
                <span class="price-number" >2299.0</span>
                <span class="discount-price"><del>￥3499.00</del></span>
                <span class="goods-spec"></span>
                <span class="item_icon">
                  <i class="iconfont icongouwuche"></i>
                </span>
                <div class="dividing-line"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="tc-goods-item">
          <div class="img-wrapper">
            <img src="./goods/pic_034.png" class="img">
          </div>
          <div class="info-wrapper">
            <span class="goods-name goods-name__two-line">海信49寸智能4K超清液晶电视</span>
            <span class="describe">摩卡金色 14核配置运行更快</span>
            <!--<div class="tag-wrapper"></div>-->
            <div class="price-container">
              <div class="price-wrapper">
                <span class="rmb">￥</span>
                <span class="price-number" >2299.0</span>
                <span class="discount-price"><del>￥3499.00</del></span>
                <span class="goods-spec"></span>
                <span class="item_icon">
                  <i class="iconfont icongouwuche"></i>
                </span>
                <div class="dividing-line"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="tc-goods-item">
          <div class="img-wrapper">
            <img src="./goods/pic_035.png" class="img">
          </div>
          <div class="info-wrapper">
            <span class="goods-name goods-name__two-line">海信49寸智能4K超清液晶电视</span>
            <span class="describe">摩卡金色 14核配置运行更快</span>
            <!--<div class="tag-wrapper"></div>-->
            <div class="price-container">
              <div class="price-wrapper">
                <span class="rmb">￥</span>
                <span class="price-number" >2299.0</span>
                <span class="discount-price"><del>￥3499.00</del></span>
                <span class="goods-spec"></span>
                <span class="item_icon">
                  <i class="iconfont icongouwuche"></i>
                </span>
                <div class="dividing-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
  .banner {
    width: 100%;
    height: 100%;
  }
  .tc-goods-item {
    display: flex;
    padding: 0.133333rem 0.266667rem;
    width: 100%;
    height: 124.25px;
  }
  .img-wrapper {
    position: relative;
    float: left;
    width: 120px;
    height: 120px;
  }
  .img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .info-wrapper {
    float: right;
    width: 220px;
    height: 120px;
    background-color: #fff;
  }
  .item_icon i {
    color: #4cd964;
  }
</style>
