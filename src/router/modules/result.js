import { PageView } from '@/layouts'

// result
export default {
  path: '/result',
  name: 'result',
  component: PageView,
  redirect: '/result/success',
  meta: { title: '结果页', icon: 'check-circle-o', permission: ['result'] },
  children: [
    {
      path: '/result/success',
      name: 'ResultSuccess',
      component: () => import(/* webpackChunkName: "result" */ '@/views/result/Success'),
      meta: { title: '成功', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
    },
    {
      path: '/result/fail',
      name: 'ResultFail',
      component: () => import(/* webpackChunkName: "result" */ '@/views/result/Error'),
      meta: { title: '失败', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
    }
  ]
}
