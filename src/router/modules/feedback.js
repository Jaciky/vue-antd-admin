import Layout from '_views/layout/Layout.vue'

export default {
  path: '/feedback',
  component: Layout,
  redirect: '/feedback/index',
  meta: {
    title: '消息反馈',
    icon: 'code'
  },
  children: [
    {
      path: '/feedback/index',
      name: 'Feedback',
      meta: {
        title: '消息反馈',
        icon: 'coffee'
      },
      component: () => import(/* webpackChunkName:"feedback"*/ '_views/feedback/index.vue')
    }
  ]
}
