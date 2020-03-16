import Layout from '_views/layout/Layout.vue'

export default {
  path: '/experience',
  component: Layout,
  redirect: '/experience/async-await',
  meta: {
    title: '经验总结',
    icon: 'code'
  },
  children: [
    {
      path: '/experience/async-await',
      name: 'AsyncAwait',
      meta: {
        cache: true,
        title: 'async/await 使用',
        icon: ''
      },
      component: () => import(/* webpackChunkName:"experience"*/ '_views/experience/AsyncAwait.vue')
    },
    {
      path: '/experience/code-simplify',
      name: 'CodeSimplify',
      meta: {
        cache: true,
        title: '代码简化技巧',
        icon: ''
      },
      component: () => import(/* webpackChunkName:"experience"*/ '_views/experience/CodeSimplify.vue')
    },
    {
      path: '/experience/component-communication',
      name: 'ComponentCommunication',
      meta: {
        cache: true,
        title: '组件通信实践经验',
        icon: ''
      },
      component: () => import(/* webpackChunkName:"experience"*/ '_views/experience/ComponentCommunication .vue')
    }
  ]
}
