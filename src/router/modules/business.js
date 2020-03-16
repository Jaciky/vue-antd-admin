import Layout from '_views/layout/Layout.vue'

export default {
  path: '/business',
  component: Layout,
  redirect: '/business/user-sign-in',
  meta: {
    title: '业务逻辑',
    icon: 'code'
  },
  children: [
    {
      path: '/business/user-sign-in',
      name: 'UserSignIn',
      meta: {
        title: '用户登录',
        icon: 'code'
      },
      component: () => import(/* webpackChunkName:"business"*/ '_views/business/UserSignIn.vue')
    },
    {
      path: '/business/router-cache',
      name: 'RouterCache',
      meta: {
        title: '页面缓存',
        icon: 'code'
      },
      component: () => import(/* webpackChunkName:"business"*/ '_views/business/RouterCache.vue')
    },
    {
      path: '/business/form-validator',
      name: 'FormValidator',
      meta: {
        title: '表单验证',
        icon: 'code'
      },
      component: () => import(/* webpackChunkName:"business"*/ '_views/business/FormValidator.vue')
    }
  ]
}
