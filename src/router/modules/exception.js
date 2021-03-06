import { RouteView } from '@/layouts'

// exception
export default {
  path: '/exception',
  name: 'exception',
  component: RouteView,
  redirect: '/exception/403',
  meta: { title: '异常页', icon: 'warning' },
  children: [
    {
      path: '/exception/403',
      name: 'Exception403',
      component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
      meta: { title: '403' }
    },
    {
      path: '/exception/404',
      name: 'Exception404',
      component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
      meta: { title: '404' }
    },
    {
      path: '/exception/500',
      name: 'Exception500',
      component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),
      meta: { title: '500' }
    }
  ]
}
