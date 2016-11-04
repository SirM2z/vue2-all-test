import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { 
      path: '/hello', 
      title: '你好~我的哥！',
      component: (resolve) => require(['./components/Hello.vue'], resolve)
    },
    { 
      path: '/test', 
      title: '测试页面也很霸气',
      component: (resolve) => require(['./views/test.vue'], resolve)
    },
    { 
      path: '*', 
      redirect: '/hello' 
    }
  ]
})
