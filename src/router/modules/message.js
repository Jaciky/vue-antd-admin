import Layout from '_views/layout/Layout.vue'

export default {
  path: '/message',
  component: Layout,
  redirect: '/message/index',
  meta: {
    title: '消息反馈',
    icon: 'code'
  },
  children: [
    {
      path: '/message/index',
      name: 'Message',
      meta: {
        title: '消息反馈',
        icon: ''
      },
      component: () => import(/* webpackChunkName:"message"*/ '_views/message/index.vue')
    }
  ]
}
