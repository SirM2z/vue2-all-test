// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './routers'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'
import axios from 'axios'
require('es6-promise').polyfill();
import * as filters from './filters'

var config = require('../config')

// element-ui按需加载，避免全部引入导致最终包过大
// Message组件引入
import Message from 'element-ui/lib/message'
Vue.prototype.$message = Message;
// Notification组件引入
import Notification from 'element-ui/lib/notification'
Vue.prototype.$notify = Notification;

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 路由跳转之前，判断是否需要验证登录
// router.beforeEach((to, from, next) => {
//   console.log('to----');
//   console.log(to);
//   console.log('from----');
//   console.log(from);
//   next();
// })

router.afterEach(route => {
  // console.log(route.name);
  document.title = route.name;
})

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  store.dispatch('showLoading')
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  store.dispatch('hideLoading')
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
