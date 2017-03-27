import store from '@/store'
import axios from 'axios'
// import qs from 'qs' axios发送的数据不是json格式，若需要json格式，添加此库

import config from '../../config'

// Add a request interceptor
axios.interceptors.request.use(config => {
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
axios.interceptors.response.use(response => {
  // Do something with response data
  // 关闭loading动画
  store.dispatch('popup/loading/hideLoading')
  return response.data
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

// axios.defaults.baseURL = (process.env.NODE_ENV !== 'production' ? config.dev.httpUrl : config.build.httpUrl)
// export default axios
const baseURL = (process.env.NODE_ENV !== 'production' ? config.dev.httpUrl : config.build.httpUrl)

export default {
  get (url, params) {
    return axios({
      method: 'get',
      url: baseURL + url,
      params,
      // withCredentials: true,
      timeout: 30000
    })
  },
  post (url, data) {
    return axios({
      method: 'post',
      url: baseURL + url,
      data: qs.stringify(data),
      timeout: 30000,
      // withCredentials: true,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  },
  form (url, formdata) {
    return axios({
      method: 'post',
      url: baseURL + url,
      data: formdata,
      // withCredentials: true,
      timeout: 30000
    })
  }
}
