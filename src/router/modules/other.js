import { PageView, RouteView } from '@/layouts'

// other
export default {
  path: '/other',
  name: 'otherPage',
  component: PageView,
  meta: { title: '其他组件', icon: 'slack' },
  redirect: '/other/icon-selector',
  children: [
    {
      path: '/other/icon-selector',
      name: 'TestIconSelect',
      component: () => import('@/views/other/IconSelectorView'),
      meta: { title: 'IconSelector', icon: 'tool', keepAlive: true }
    },
    {
      path: '/other/list',
      component: RouteView,
      meta: { title: '业务布局', icon: 'layout', permission: ['support'] },
      redirect: '/other/list/tree-list',
      children: [
        {
          path: '/other/list/tree-list',
          name: 'TreeList',
          component: () => import('@/views/other/TreeList'),
          meta: { title: '树目录表格', keepAlive: true }
        },
        {
          path: '/other/list/edit-table',
          name: 'EditList',
          component: () => import('@/views/other/TableInnerEditList'),
          meta: { title: '内联编辑表格', keepAlive: true }
        },
        {
          path: '/other/list/user-list',
          name: 'UserList',
          component: () => import('@/views/other/UserList'),
          meta: { title: '用户列表', keepAlive: true }
        },
        {
          path: '/other/list/role-list',
          name: 'RoleList',
          component: () => import('@/views/other/RoleList'),
          meta: { title: '角色列表', keepAlive: true }
        },
        {
          path: '/other/list/system-role',
          name: 'SystemRole',
          component: () => import('@/views/role/RoleList'),
          meta: { title: '角色列表2', keepAlive: true }
        },
        {
          path: '/other/list/permission-list',
          name: 'PermissionList',
          component: () => import('@/views/other/PermissionList'),
          meta: { title: '权限列表', keepAlive: true }
        }
      ]
    }
  ]
}
