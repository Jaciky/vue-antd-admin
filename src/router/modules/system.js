import Layout from '_views/layout/Layout.vue'

export default {
  path: '/system',
  component: Layout,
  redirect: '/system/introduce',
  meta: {
    title: '系统',
    icon: 'code'
  },
  children: [
    {
      path: '/system/introduce',
      name: 'Introduce',
      meta: {
        cache: true,
        title: '介绍',
        icon: 'code'
      },
      component: () => import(/* webpackChunkName:"system"*/ '_views/system/Introduce.vue')
    }
  ]
}
