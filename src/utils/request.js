import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import notification from 'ant-design-vue/es/notification'
import { ACCESS_TOKEN } from '@/store/mutation-types'

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL, // api base_url
  timeout: 6 * 1000 // 请求超时时间
})

/**
 * 请求队列
 * @description 过滤重复请求，路由跳转时取消当前所有pending中的请求
 */
const pendings = []

// request interceptor
service.interceptors.request.use(
  config => {
    // 过滤重复请求
    clearPending(config)

    // 获取本地token
    const token = Vue.ls.get(ACCESS_TOKEN)

    // 设置请求token
    token && (config.headers['Access-Token'] = token)

    // 取消重复请求
    config.cancelToken = new axios.CancelToken(cancel => {
      pendings.push({ url: getUrl(config), cancel })
    })

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * 状态码
 * 1、判定为成功的白名单code列表
 * 2、需重定向的code列表
 */
const successCodes = [200]
const ridrectCodes = ['600', '601', '605', '612', '614', '616']

// response interceptor
service.interceptors.response.use(response => {
  const { data, code, config } = response

  // 在请求完成后，自动移出队列
  clearPending(config)

  if (successCodes.includes(code)) {
    return data
  } else {
    if (ridrectCodes.includes(code)) {
      const token = Vue.ls.get(ACCESS_TOKEN)

      token &&
        store.dispatch('Logout').then(() => {
          setTimeout(() => {
            window.location.reload()
          }, 1500)
        })
    }

    notification.error({
      message: '错误',
      description: data?.message || '请求出现错误，请稍后再试'
    })

    return Promise.reject(response)
  }
}, httpErrorHandler)

// error回调
function httpErrorHandler(error) {
  if (axios.isCancel(error)) {
    console.log(error.message)
    return Promise.reject()
  }

  const { config, response } = error

  notification.error({
    message: 'Forbidden',
    description: response ? '系统开小差了，请联系管理人员！' : '您的网络不稳定，请检查后重试！'
  })

  // 在请求完成后，自动移出队列
  clearPending(config)

  return Promise.reject(error)
}

/**
 * 清除请求队列
 */
function clearPending(config, all) {
  for (let i = 0; i < pendings.length; i++) {
    const { url, cancel } = pendings[i]

    // 在路由守卫中引用 跳转时取消当前所有pending中的请求
    if (all) {
      cancel(`${url} 请求被取消`)
      break
    }

    if (url === getUrl(config)) {
      cancel(`${config.url} 重复请求被取消！`)
      pendings.splice(i, 1)
      break
    }
  }
}

// url + method 相同 被视为重复请求
function getUrl({ url, method }) {
  return `${url}_${method}`
}

export { clearPending }
export default service
