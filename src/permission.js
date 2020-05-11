import Vue from 'vue'
import router from './router'
import store from './store'

import { clearPending } from '@/utils/request'
import notification from 'ant-design-vue/es/notification'
import config from '@/config'
import NProgress from 'nprogress'
import '@/components/NProgress/nprogress.less' // progress bar custom style
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { setDocumentTitle } from '@/utils/domUtil'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['login', 'register', 'registerResult'] // no redirect whitelist
const defaultRoutePath = config.path
const domTitle = config.title

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()

  // 清空http请求队列
  clearPending({}, true)

  // 设置网页标题
  to.meta?.title && setDocumentTitle(`${to.meta.title} - ${domTitle}`)

  // 判断用户是否已登录
  const hasToken = Vue.ls.get(ACCESS_TOKEN)

  if (hasToken) {
    if (to.path === '/user/login') {
      next({ path: defaultRoutePath })
      NProgress.done()
    } else {
      // 判断是否拉取用户信息
      const hasUserId = store.getters.userId

      if (hasUserId) {
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
        } catch (error) {
          notification.error({
            message: '错误',
            description: '请求用户信息失败，请重试'
          })

          await store.dispatch('Logout')
          next({ path: '/user/login', query: { redirect: to.fullPath } })
        }
      }
    }
  } else {
    /* has no token*/
    if (whiteList.includes(to.name)) {
      // 进入免登陆页面
      next()
    } else {
      next({ path: '/user/login', query: { redirect: to.fullPath } })
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
