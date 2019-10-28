<template>
  <div class="container tc-view">
    <div class="context-wrapper">
      <div class="container">
        <!-- 搜索框 -->
        <a href="#goods-search" class="a-search">
          <div class="search-bar">
            <i class="iconfont iconfenleixuanzhong"></i>
            <span class="tip-text">搜索好物</span>
          </div>
        </a>
        <!-- 左侧分类 和右侧分类-->
        <div class="category-wrapper">
           <!--左侧分类导航 -->
          <div class="tc-scroll-wrapper sort">
            <div class="item-text"><span>生鲜</span></div>
            <div class="item-text"><span>小萝优选</span></div>
            <div class="item-text"><span>母婴</span></div>
            <div class="item-text"><span>百货</span></div>
            <div class="item-text"><span>电器</span></div>
            <div class="item-text"><span>家纺</span></div>

          </div>
          <!-- 右侧商品类别-->
          <div class="tc-scroll-wrapper category-body"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {}
</script>

<style>
  .container{
    width: 100%;
    height: 100%;
    /*background-color: black;*/
  }
  .context-wrapper {
    width: 100%;
    height: 100%;
  }
  .search-bar {
    text-align: center;
    width: 355px;
    height: 25px;
    background-color: #f6f6f6;
  }
  .category-wrapper {
    display: flex;
    background-color: #fff;
  }
  .sort {
    width: 71px;
    height: 732px;
    background-color: #fff;
    left: 0px;
  }
  .item-text {
    width: 70px;
    height: 63px;
    margin-top: 0px;
    margin-right:0px;
    padding: 0px;
    text-align: center;
    background-color: #fff;
  }
  .category-body {

  }
</style>
