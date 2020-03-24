import Layout from '_views/layout/Layout.vue'

export default {
  path: '/documentation',
  component: Layout,
  redirect: '/documentation/index',
  meta: {
    title: '文档',
    icon: 'code'
  },
  children: [
    {
      path: '/documentation/index',
      name: 'Documentation',
      meta: {
        cache: true,
        title: '文档',
        icon: ''
      },
      component: () => import(/* webpackChunkName:"documentation"*/ '_views/documentation/index.vue')
    }
  ]
}
