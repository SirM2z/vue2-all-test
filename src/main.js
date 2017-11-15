import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import request from './utils/request'
import * as filters from './filters'

Vue.config.productionTip = false

Vue.prototype.$http = request

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// element-ui按需加载，避免全部引入导致最终包过大，自行加入所需组件
import {
  Select
} from 'element-ui'
Vue.use(Select)
// Message组件引入
import Message from 'element-ui/lib/message'
Vue.prototype.$message = Message
// Notification组件引入
import Notification from 'element-ui/lib/notification'
Vue.prototype.$notify = Notification

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  // template: '<App/>',
  // components: { App }
  render: h => h(App)
})
