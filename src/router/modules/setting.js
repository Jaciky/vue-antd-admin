import Layout from '_views/layout/Layout.vue'

export default {
  path: '/setting',
  component: Layout,
  redirect: '/setting/user',
  meta: { title: '设置页面', icon: 'code' },
  children: [
    {
      path: '/setting/user',
      name: 'User',
      component: () => import(/* webpackChunkName:"setting"*/ '_views/setting/user.vue'),
      meta: { title: '个人中心', icon: '', cache: true }
    },
    {
      path: '/setting/account',
      name: 'Account',
      component: () => import(/* webpackChunkName:"setting"*/ '_views/setting/account.vue'),
      meta: { title: '个人设置', icon: '', cache: true }
    }
  ]
}
