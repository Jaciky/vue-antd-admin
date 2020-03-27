import Layout from '_views/layout/Layout.vue'

export default {
  path: '/error',
  component: Layout,
  redirect: '/error/401',
  meta: { title: '异常页面', icon: 'code' },
  children: [
    {
      path: '/error/401',
      name: 'Error401',
      component: () => import(/* webpackChunkName:"error"*/ '_views/error/401.vue'),
      meta: { title: '401', icon: '' }
    },
    {
      path: '/error/404',
      name: 'Error404',
      component: () => import(/* webpackChunkName:"error"*/ '_views/error/404.vue'),
      meta: { title: '404', icon: '' }
    },
    {
      path: '/error/500',
      name: 'Error500',
      component: () => import(/* webpackChunkName:"error"*/ '_views/error/500.vue'),
      meta: { title: '500', icon: '' }
    }
  ]
}
