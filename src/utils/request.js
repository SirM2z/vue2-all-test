import store from '@/store'
import axios from 'axios'
// import qs from 'qs' axios发送的数据不是json格式，若需要json格式，添加此库

import config from '../../config'

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
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  // 关闭loading动画
  store.dispatch('popup/loading/hideLoading')
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl)

export default axios
