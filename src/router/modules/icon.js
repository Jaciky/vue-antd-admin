import Layout from '_views/layout/Layout.vue'

export default {
  path: '/icon',
  component: Layout,
  redirect: '/icon/icon',
  meta: {
    title: '图标',
    icon: 'code'
  },
  children: [
    {
      path: '/icon/icon',
      name: 'iconfont',
      meta: {
        cache: true,
        title: '字体图标',
        icon: 'code'
      },
      component: () => import(/* webpackChunkName:"icon"*/ '_views/icon/Icon.vue')
    }
  ]
}
