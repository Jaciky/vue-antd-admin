import Layout from '_views/layout/Layout.vue'

export default {
  path: '/permission',
  component: Layout,
  redirect: '/permission/page',
  meta: { title: '权限测试', icon: 'code' },
  children: [
    {
      path: '/permission/page',
      name: 'PermissionPage',
      component: () => import(/* webpackChunkName:"permission"*/ '_views/permission/page.vue'),
      meta: { title: '页面权限', icon: '' }
    },
    {
      path: '/permission/button',
      name: 'PermissionButton',
      component: () => import(/* webpackChunkName:"permission"*/ '_views/permission/button.vue'),
      meta: { title: '功能权限', icon: '' }
    },
    {
      path: '/permission/roles',
      name: 'PermissionRoles',
      component: () => import(/* webpackChunkName:"permission"*/ '_views/permission/roles.vue'),
      meta: { title: '角色列表', icon: '' }
    }
  ]
}
