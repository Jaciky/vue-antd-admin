import router from './router'
import store from './store'
import storage from 'store'

import config from '@/config/settings'
import NProgress from 'nprogress'
import '@/components/NProgress/nprogress.less' // progress bar custom style
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { setDocumentTitle } from '@/utils/domUtil'
import { clearPending } from '@/utils/request'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['login', 'register', 'registerResult'] // no redirect whitelist
const defaultRoutePath = config.path
const loginRoutePath = '/user/login'
const domTitle = config.title

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()

  // 清空http请求队列
  clearPending({}, true)

  // 设置网页标题
  to.meta?.title && setDocumentTitle(`${to.meta.title} - ${domTitle}`)

  // 判断用户是否已登录
  if (storage.get(ACCESS_TOKEN)) {
    if (to.path === loginRoutePath) {
      next({ path: defaultRoutePath })
      NProgress.done()
    } else {
      // 判断是否拉取用户信息
      if (store.getters.userId) {
        next()
      } else {
        try {
          // 获取用户角色信息
          await store.dispatch('GetInfo')

          // 根据用户角色生成可访问路由
          await store.dispatch('GenerateRoutes')

          // 动态添加可访问路由
          router.addRoutes(store.getters.addRouters)

          // 请求带有 redirect 重定向时，登录自动重定向到该地址
          const redirect = decodeURIComponent(from.query.redirect || to.path)

          // hack方法 确保addRoutes已完成
          to.path === redirect ? next({ ...to, replace: true }) : next({ path: redirect })
        } catch {
          await store.dispatch('Logout')
          next({ path: loginRoutePath, query: { redirect: to.fullPath } })
        }
      }
    }
  } else {
    /* has no token*/
    if (whiteList.includes(to.name)) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next({ path: loginRoutePath, query: { redirect: to.fullPath } })
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
