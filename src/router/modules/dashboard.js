import { RouteView } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

// dashboard
export default {
  path: 'dashboard',
  name: 'dashboard',
  redirect: '/dashboard/workplace',
  component: RouteView,
  meta: { title: '仪表盘', keepAlive: true, icon: bxAnaalyse },
  children: [
    {
      path: 'analysis/:pageNo([1-9]\\d*)?',
      name: 'Analysis',
      component: () => import('@/views/dashboard/Analysis'),
      meta: { title: '分析页', keepAlive: false }
    },
    // 外部链接
    {
      path: 'https://www.baidu.com/',
      name: 'Monitor',
      meta: { title: '监控页（外部）', target: '_blank' }
    },
    {
      path: 'workplace',
      name: 'Workplace',
      component: () => import('@/views/dashboard/Workplace'),
      meta: { title: '工作台', keepAlive: true }
    },
    {
      path: 'test-work',
      name: 'TestWork',
      component: () => import('@/views/dashboard/TestWork'),
      meta: { title: '测试功能', keepAlive: true }
    }
  ]
}
