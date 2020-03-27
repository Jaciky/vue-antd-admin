import Layout from '_views/layout/Layout.vue'

export default {
  path: '/icon',
  component: Layout,
  redirect: '/icon/index',
  meta: { title: '图标', icon: 'code' },
  children: [
    {
      path: '/icon/index',
      name: 'iconfont',
      component: () => import(/* webpackChunkName:"icon"*/ '_views/icon/index.vue'),
      meta: { title: '字体图标', icon: 'code', cache: true }
    }
  ]
}
