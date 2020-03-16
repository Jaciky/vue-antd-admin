import Layout from '_views/layout/Layout.vue'

export default {
  path: '/error-log',
  component: Layout,
  redirect: '/error-log/log',
  meta: {
    title: '错误日志',
    icon: 'code'
  },
  children: [
    {
      path: '/error-log/log',
      name: 'Log',
      meta: {
        title: '错误日志',
        icon: 'code'
      },
      component: () => import(/* webpackChunkName:"error-log"*/ '_views/error-log/Log.vue')
    }
  ]
}
