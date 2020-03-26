import router from './router'
import store from './store'
import { getToken, getPageTitle } from '@/libs/utils'
import { Modal } from 'ant-design-vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()

  // 销毁所有提示框
  Modal.destroyAll()

  // 设置网页标题
  document.title = getPageTitle(to.meta?.title)

  // 判断用户是否已登录
  const hasToken = getToken()
  // 判断是否拉取用户信息
  const hasRoles = store.getters.roles?.length

  if (hasToken) {
    if (hasRoles) {
      if (to.path === '/login') {
        next({ path: '/' })
        NProgress.done()
      } else {
        next()
      }
    } else {
      try {
        // 获取用户角色信息
        await store.dispatch('user/getInfo')

        // 根据用户角色生成可访问路由
        await store.dispatch('auth/generateRoutes')

        // 动态添加可访问路由
        router.addRoutes(store.state.auth.addRoutes)

        // 设置 replace: true， 防止用户信息更新后权限变更，而进入的是404
        next({ ...to, replace: true })
      } catch (error) {
        // 清除登录信息跳转至登录页
        await store.dispatch('user/clearInfo')
        next({ path: '/login', query: { redirect: to.path, ...to.query }, replace: true })
        NProgress.done()
      }
    }
  } else {
    /* has no token*/
    if (whiteList.includes(to.path)) {
      // 进入免登陆页面
      next()
    } else {
      next({ path: '/login', replace: true })
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
