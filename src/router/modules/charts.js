import Layout from '_views/layout/Layout.vue'

export default {
  path: '/charts',
  component: Layout,
  redirect: '/charts/line',
  meta: {
    title: '图表',
    icon: 'code'
  },
  children: [
    {
      path: '/charts/line',
      name: 'Line',
      meta: {
        cache: true,
        title: '折线图',
        icon: 'code'
      },
      component: () => import(/* webpackChunkName:"charts"*/ '_views/charts/Line.vue')
    }
  ]
}
