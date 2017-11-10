/**
 * 路由配置
 */
//  引用vue包
import Vue from 'vue'
import VueRouter from 'vue-router'
//  引用模板页面
import index from '../pages/index.vue'
import content from '../pages/content.vue'

//  使用路由
Vue.use(VueRouter)
//  配置路由数组 ,通过export导出给其他文件使用
export default new VueRouter({
  routes: [{
    path: '/',
    component: index
  }, {
    path: '/content',
    component: content
  }]
})
