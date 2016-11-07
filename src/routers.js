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
      component: (resolve) => require(['./views/index.vue'], resolve)
    },
    { 
      path: '/test', 
      name: '测试页面也很霸气',
      component: (resolve) => require(['./views/test.vue'], resolve),
      children: [
        {
          path: 'test1',
          name: '测试页面1',
          component: (resolve) => require(['./views/test/test1.vue'], resolve)
        },
        {
          path: 'test2',
          name: '测试页面2',
          component: (resolve) => require(['./views/test/test2.vue'], resolve)
        }
      ]
    },
    { 
      path: '*', 
      redirect: '/hello' 
    }
  ]
})
