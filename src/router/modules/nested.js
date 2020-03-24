import Layout from '_views/layout/Layout.vue'

export default {
  path: '/nested',
  component: Layout,
  redirect: '/nested/menu1',
  meta: {
    title: '多级路由',
    icon: 'code'
  },
  children: [
    {
      path: '/nested/menu1',
      name: 'menu1',
      meta: {
        title: '菜单1',
        icon: ''
      },
      component: () => import(/* webpackChunkName:"form"*/ '_views/nested/Menu1.vue')
    }
  ]
}
