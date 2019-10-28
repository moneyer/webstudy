/*
路由器对象模块
 */
import Vue from 'Vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Search from '../pages/Search/Search.vue'
import Group from '../pages/Group/Group.vue'
import ShopCar from '../pages/ShopCar/ShopCar.vue'
import Personal from '../pages/Personal/Personal.vue'


// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/group',
      component: Group
    },
    {
      path: '/shopcar',
      component: ShopCar
    },
    {
      path: '/personal',
      component: Personal
    }
  ]
})
