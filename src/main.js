// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import axios from 'axios'
// import qs from 'qs' axios发送的数据不是json格式，若需要json格式，添加此库

import * as filters from './filters'

import config from '../config'

Vue.config.productionTip = false

// element-ui按需加载，避免全部引入导致最终包过大，自行加入所需组件
import {
  Select
} from 'element-ui'
Vue.component(Select.name, Select)
// Message组件引入
import Message from 'element-ui/lib/message'
Vue.prototype.$message = Message
// Notification组件引入
import Notification from 'element-ui/lib/notification'
Vue.prototype.$notify = Notification

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 路由跳转之前操作
// router.beforeEach((to, from, next) => {
//   console.log('to----');
//   console.log(to);
//   console.log('from----');
//   console.log(from);
//   next();
// })

router.afterEach(route => {
  // console.log(route);
  document.title = route.meta.title
})

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  // config.withCredentials = true  // 需要跨域打开此配置
  // post提交 data存在 并且 data不是FormData对象时对数据进行json化处理
  // if(config.method==='post' && config.data && config.data.constructor !== FormData){
  //   config.data = qs.stringify(config.data)
  //   config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  // }
  // 开启loading动画
  store.dispatch('popup/loading/showLoading')
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  // 关闭loading动画
  store.dispatch('popup/loading/hideLoading')
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
})

axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);
Vue.prototype.$http = axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
