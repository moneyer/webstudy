/*
入口js
 */
import Vue from 'Vue'
import App from './App.vue'
import router from './router/router.js'


// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

import VueLazyLoad from 'vue-lazyload'

// 按需导入 Mint-UI 中的组件
// import { Header, Swipe, SwipeItem } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
