/**
 * index.html是默认的主页
 * main.js是默认的主控脚本
 */
import Vue from 'vue'
//  引入入口文件
import App from './App.vue'
//  引入路由配置
import router from './config/router'
//  引入api
//  import api from './config/api'
//  Vue.prototype.$api = api

Vue.config.productionTip = false

//  对index.html创建vue实例
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  /*
  在el下渲染一个template ,等效于下面的render函数
  template: '<App/>',
  components: {App}
  */
  render: (h) => h(App) // render渲染一个view并替换el元素 ; 箭头是ES6的lambda简写
})