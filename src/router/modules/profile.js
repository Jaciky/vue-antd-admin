import Layout from '_views/layout/Layout.vue'

export default {
  path: '/profile',
  component: Layout,
  redirect: '/profile/basic',
  meta: { title: '详情页面', icon: 'code' },
  children: [
    {
      path: '/profile/basic',
      name: 'ProfileBasic',
      component: () => import(/* webpackChunkName:"profile"*/ '_views/profile/basic.vue'),
      meta: { title: '基础详情页', icon: 'code', cache: true }
    },
    {
      path: '/profile/advanced',
      name: 'ProfileAdvanced',
      component: () => import(/* webpackChunkName:"profile"*/ '_views/profile/advanced.vue'),
      meta: { title: '复杂详情页', icon: 'code', cache: true }
    }
  ]
}
