import Layout from '_views/layout/Layout.vue'

export default {
  path: '/charts',
  component: Layout,
  redirect: '/charts/line',
  meta: { title: '图表组件', icon: 'code' },
  children: [
    {
      path: '/charts/line',
      name: 'Line',
      component: () => import(/* webpackChunkName:"charts"*/ '_views/charts/Line.vue'),
      meta: { title: '折线图', icon: 'code', cache: true }
    },
    {
      path: '/charts/bar',
      name: 'Bar',
      component: () => import(/* webpackChunkName:"charts"*/ '_views/charts/bar.vue'),
      meta: { title: '柱状图', icon: 'code', cache: true }
    },
    {
      path: '/charts/map',
      name: 'Map',
      component: () => import(/* webpackChunkName:"charts"*/ '_views/charts/map.vue'),
      meta: { title: '地图', icon: 'code', cache: true }
    }
  ]
}
