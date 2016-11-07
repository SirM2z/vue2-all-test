import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { 
      path: '/hello', 
      name: '你好~我的哥！',
      title: '你好~我的哥！',
      component: (resolve) => require(['./components/Hello.vue'], resolve)
    },
    { 
      path: '/test', 
      name: '测试页面也很霸气',
      title: '测试页面也很霸气',
      component: (resolve) => require(['./views/test.vue'], resolve)
    },
    { 
      path: '*', 
      redirect: '/hello' 
    }
  ]
})
