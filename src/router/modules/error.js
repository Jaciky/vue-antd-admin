import Layout from '_views/layout/Layout.vue'

export default {
  path: '/error',
  component: Layout,
  // hidden: true,
  redirect: '/error/401',
  meta: {
    title: '错误页面',
    icon: 'code'
  },
  children: [
    {
      path: '/error/401',
      name: 'Error401',
      meta: {
        title: '401',
        icon: 'code'
      },
      component: () => import(/* webpackChunkName:"error"*/ '_views/error/401.vue')
    },
    {
      path: '/error/404',
      name: 'Error404',
      meta: {
        title: '404',
        icon: 'code'
      },
      component: () => import(/* webpackChunkName:"error"*/ '_views/error/404.vue')
    },
    {
      path: '/error/500',
      name: 'Error500',
      meta: {
        title: '500',
        icon: 'code'
      },
      component: () => import(/* webpackChunkName:"error"*/ '_views/error/500.vue')
    }
  ]
}
