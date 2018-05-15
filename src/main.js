//import core
import Vue from 'vue'
import App from './App'
//import 3rd module
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSimplemde from 'vue-simplemde'

//import my module
import router from './router'
import Rest from './api'
import Tool from './common'

Vue.use(ElementUI, axios, VueAxios,VueSimplemde);

//init parameter
Vue.prototype.$Rest = Rest;
Vue.prototype.$Tool = Tool;

Vue.config.productionTip = false;
//setup
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
