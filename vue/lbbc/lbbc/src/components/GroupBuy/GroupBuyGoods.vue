<template>
  <div class="recommend-group-buy-item-container">
    <div class="recommend-group-buy-item-wrapper">
      <span class="sell-count-text">已拼XXXX件</span>
      <img class="goods-image" src="./images/group/pic_022.png">
      <span class="goods-name">【预售】越南红心火龙果</span>
      <div class="price-wrapper">
        <span class="group-buy-tag">拼</span>
        <span class="price"><span class="price-tag">￥</span>29.9</span>
      </div>
      <span class="auxiliary-text">原价<span class="original-price"><del>36</del></span></span>
    </div>
  </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
  .header-wrapper {
    width: 100%;
    height: 45px;
    text-align: center;
  }
  .group-buy-title {
    font-size: 16px;
  }
  .auxiliary-text {
    font-size: 13px;
  }
  .more {
    float: right;
    font-size: 13px;
  }
  .header-right {
    float: left;
  }
  .tc-scroll-wrapper {
    width: 100%;
    height: 185px;
  }

  .scroll-content {
    display: inline-block;
    width: 424px;
    height: 185px;
  }
  .tc-scroll-list-wrapper {
    display: inline-block;
    width: 424px;
    height: 185px;
  }
  .recommend-group-buy-item-container {
    display: inline-block;
    height: 84.97px;
    width: 22%;
  }
  .recommend-group-buy-item-wrapper {
    width: 96px;
    height: 100%;
    margin-left: .266667rem;
    position: relative;
  }
  .sell-count-text{
    font-size: 13px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: red;
    color: white;
  }
  .goods-name {
    font-size: 15px;
  }
  .goods-image {
    height: 96px;
    width: 96px;
  }
</style>
