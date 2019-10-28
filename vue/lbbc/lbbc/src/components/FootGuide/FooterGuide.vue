<template>
  <div class="footer_guide">
    <span class="guide_item" :class="{on: '/home'===$route.path}" @click="goTo('/home')">
      <span class="item_icon">
        <i class="iconfont iconHome"></i>
      </span>
      <span>首页</span>
    </span>
    <a href="javascript:;" class="guide_item" :class="{on: '/search'===$route.path}" @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont iconfenleixuanzhong"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/group'===$route.path}" @click="goTo('/group')">
      <span class="item_icon">
        <i class="iconfont iconpin"></i>
      </span>
      <span>惠拼</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/shopcar'===$route.path}" @click="goTo('/shopcar')">
      <span class="item_icon">
        <i class="iconfont icongouwuche"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/personal'===$route.path}" @click="goTo('/personal')">
      <span class="item_icon">
        <i class="iconfont iconwo"></i>
      </span>
      <span>我</span>
    </a>
  </div>
</template>

<script>
  export default {
    methods: {
      goTo (path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .footer_guide {
    top-border-1px:e4e4e4;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    height: 50px;
    display: flex;
  }
  .guide_item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;;
    margin: 5px;
    color: #999999;
  }
  .on {
    color: #02a774;
  }
  span {
    font-size: 12px;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  .iconfont {
    font-size: 22px;
  }
</style>
