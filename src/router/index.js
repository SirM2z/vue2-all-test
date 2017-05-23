import Vue from 'vue'
import Router from 'vue-router'

const index = resolve => require(['@/pages/index'], resolve)
const test = resolve => require(['@/pages/test'], resolve)
const test1 = resolve => require(['@/pages/test/test1'], resolve)
const test2 = resolve => require(['@/pages/test/test2'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/hello',
      meta: { title: '你好' },
      name: 'hello',
      component: index
    },
    {
      path: '/test',
      meta: { title: '测试页面也很霸气' },
      name: 'test',
      component: test,
      children: [
        {
          path: 'test1',
          meta: { title: '测试页面1' },
          name: 'test1',
          component: test1
        },
        {
          path: 'test2',
          meta: { title: '测试页面2' },
          name: 'test2',
          component: test2
        }
      ]
    },
    {
      path: '*',
      redirect: '/hello'
    }
  ]
})
