import Layout from '_views/layout/Layout.vue'

export default {
  path: '/system',
  component: Layout,
  redirect: '/system/dashboard',
  meta: { title: '系统', icon: 'code' },
  children: [
    {
      path: '/system/dashboard',
      name: 'Dashboard',
      component: () => import(/* webpackChunkName:"system"*/ '_views/system/dashboard.vue'),
      meta: { title: '主控台', icon: '', cache: true }
    },
    {
      path: '/system/monitor',
      name: 'Monitor',
      component: () => import(/* webpackChunkName:"system"*/ '_views/system/monitor.vue'),
      meta: { title: '系统监控', icon: '', cache: true }
    },
    {
      path: '/system/workplace',
      name: 'Workplace',
      component: () => import(/* webpackChunkName:"system"*/ '_views/system/workplace.vue'),
      meta: { title: '工作台', icon: '', cache: true }
    }
  ]
}
