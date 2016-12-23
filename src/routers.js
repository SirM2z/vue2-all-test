import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/hello',
      title: '你好',
      name: 'hello',
      component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
      path: '/test',
      title: '测试页面也很霸气',
      name: 'test',
      component: (resolve) => require(['./views/test.vue'], resolve),
      children: [
        {
          path: 'test1',
          title: '测试页面1',
          name: 'test1',
          component: (resolve) => require(['./views/test/test1.vue'], resolve)
        },
        {
          path: 'test2',
          title: '测试页面2',
          name: 'test2',
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
