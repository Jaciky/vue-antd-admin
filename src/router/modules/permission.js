import Layout from '_views/layout/Layout.vue'

export default {
  path: '/permission',
  component: Layout,
  redirect: '/permission/permi-page',
  meta: {
    title: '权限',
    icon: 'code'
  },
  children: [
    {
      path: '/permission/permi-page',
      name: 'PermiPage',
      meta: {
        title: '页面权限',
        icon: ''
      },
      component: () => import(/* webpackChunkName:"permission"*/ '_views/permission/PermiPage.vue')
    },
    {
      path: '/permission/permi-button',
      name: 'PermiButton',
      meta: {
        title: '按钮级别',
        icon: ''
      },
      component: () => import(/* webpackChunkName:"permission"*/ '_views/permission/PermiButton.vue')
    },
    {
      path: '/permission/roles',
      name: 'Roles',
      meta: {
        title: '角色列表',
        icon: ''
      },
      component: () => import(/* webpackChunkName:"permission"*/ '_views/permission/Roles.vue')
    }
  ]
}
