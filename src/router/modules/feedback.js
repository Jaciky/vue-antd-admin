import Layout from '_views/layout/Layout.vue'

export default {
  path: '/feedback',
  component: Layout,
  redirect: '/feedback/message',
  meta: { title: '信息反馈', icon: 'code' },
  children: [
    {
      path: '/feedback/message',
      name: 'FeedbackMessage',
      component: () => import(/* webpackChunkName:"feedback"*/ '_views/feedback/message.vue'),
      meta: { title: '消息', icon: '' }
    },
    {
      path: '/feedback/modal',
      name: 'FeedbackModal',
      component: () => import(/* webpackChunkName:"feedback"*/ '_views/feedback/modal.vue'),
      meta: { title: '弹框', icon: '' }
    },
    {
      path: '/feedback/loading',
      name: 'FeedbackLoading',
      component: () => import(/* webpackChunkName:"feedback"*/ '_views/feedback/loading.vue'),
      meta: { title: '加载中', icon: '' }
    }
  ]
}
