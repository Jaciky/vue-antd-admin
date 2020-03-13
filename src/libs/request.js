import axios from 'axios'
import store from '@/store'
import router from '../router'
import { getToken } from '@/libs/utils'
import { debounce, isEqual, message, notify } from './global'
import resCode from './resCode'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 300000
})

/**
 * 错误消息提示组件
 */
export const showErrorMsg = debounce(function(msg, type = 'error', dur = 5000) {
  message(msg, {
    type: type,
    showClose: true,
    duration: dur
  })
})

/**
 * 消息提示组件
 */
export const showMsg = debounce(function(msg) {
  notify(msg, {
    type: 'info',
    iconClass: 'icon iconfont iconunhappy',
    customClass: 'notification-global',
    offset: 50,
    showClose: true
  })
})

/**
 * 请求队列
 * @description 全局过滤恶意频繁请求，登出清空队列
 */
const pendings = []

/**
 * 阻止重复请求
 * @param {object} pending 当前请求
 * @param {function} cancel 取消请求的方法
 * @description 当pendings中存在请求和当次请求相同（url,method,data/params） 则当次请求会被取消
 */
const cancelDuplicatedRequest = (pending, cancel) => {
  for (let i = 0; i < pendings.length; i++) {
    if (isEqual(pendings[i], pending)) {
      cancel(`${pending.url} 请求被中断`)
      return
    }
  }
  pendings.unshift(pending)
}

/**
 * 移出请求队列
 * @param {object} pending 当前请求
 * @description 请求完成（成功/失败），从pendings移出
 */
const clearRequestedReqs = pending => {
  let { baseURL, url, method, data, params } = pending
  let query = getRequestQuery({ data, params })

  for (let i = 0; i < pendings.length; i++) {
    if (isEqual(pendings[i], { url: baseURL + url, method, query })) {
      pendings.splice(i, 1)
      break
    }
  }
}

/**
 * 对象参数合并stringify,提升请求比对性能
 */
const getRequestQuery = ({ data, params }) => {
  data = data || ''
  params = params || ''
  typeof data === 'object' && (data = JSON.stringify(data))
  typeof params === 'object' && (params = JSON.stringify(params))

  return data + params
}

/**
 * 请求拦截器
 */
service.interceptors.request.use(
  config => {
    let { baseURL, url, method, data, params } = config
    let query = getRequestQuery({ data, params })

    // 设置请求token
    store.getters.token && (config.headers['Authorization'] = getToken())

    // 重复请求会被取消
    config.cancelToken = new axios.CancelToken(cancel => {
      cancelDuplicatedRequest({ url: baseURL + url, method, query }, cancel)
    })

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * 异常码
 * 1、判定为成功的白名单code列表
 * 2、需重定向的code列表
 */
// const whiteList = ['200']
const ridrectCode = ['600', '601', '605', '612', '614', '616']

/**
 * 响应拦截器
 */
service.interceptors.response.use(
  response => {
    const { data, config } = response

    // 增加延迟，相同请求不得在短时间内重复发送
    setTimeout(clearRequestedReqs, 200, config)

    if (data.success) {
      return data
    } else {
      if (ridrectCode.includes(data.code)) {
        // 防止并发接口
        if (store.getters.userId) {
          const { path, query } = router.currentRoute
          store.dispatch('user/clearInfo').then(() => {
            router.push({ path: '/login', query: { redirect: path, ...query }, replace: true })
          })
        }
      }

      // 无权访问
      if (data.code == '602') {
        // store.dispatch('user/getPermission')
        router.push({ path: '/401', replace: true })
      }

      let msg = resCode[data.code] || data.message || '系统异常'
      showMsg(msg)
      return Promise.reject(msg)
    }
  },
  error => {
    if (axios.isCancel(error)) {
      console.log(error.message)
      // showErrorMsg('正在拼命加载，请耐心等待！', 'info', 2000)
      return Promise.reject()
    } else {
      let msg = error.response ? '系统开小差了，请联系管理人员！' : '您的网络不稳定，请检查后重试！'
      showErrorMsg(msg)

      // 针对异常请求可适当减少请求间隔时间
      setTimeout(clearRequestedReqs, 100, error.config)

      return Promise.reject(error)
    }
  }
)

export default service
