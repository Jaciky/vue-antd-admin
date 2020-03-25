import Layout from '_views/layout/Layout.vue'

export default {
  path: '/list',
  component: Layout,
  redirect: '/list/index',
  meta: {
    title: '列表',
    icon: 'code'
  },
  children: [
    {
      path: '/list/index',
      name: 'List',
      meta: {
        title: '列表',
        icon: ''
      },
      component: () => import(/* webpackChunkName:"list"*/ '_views/list/index.vue')
    }
  ]
}
