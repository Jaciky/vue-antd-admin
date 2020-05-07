import { RouteView } from '@/layouts'

// account
export default {
  path: '/account',
  component: RouteView,
  redirect: '/account/center',
  name: 'account',
  meta: { title: '个人页', icon: 'user', keepAlive: true, permission: ['user'] },
  children: [
    {
      path: '/account/center',
      name: 'center',
      component: () => import('@/views/account/center/Index'),
      meta: { title: '个人中心', keepAlive: true, permission: ['user'] }
    },
    {
      path: '/account/settings',
      name: 'settings',
      component: () => import('@/views/account/settings/Index'),
      meta: { title: '个人设置', hideHeader: true, permission: ['user'] },
      redirect: '/account/settings/base',
      hideChildrenInMenu: true,
      children: [
        {
          path: '/account/settings/base',
          name: 'BaseSettings',
          component: () => import('@/views/account/settings/BaseSetting'),
          meta: { title: '基本设置', hidden: true, permission: ['user'] }
        },
        {
          path: '/account/settings/security',
          name: 'SecuritySettings',
          component: () => import('@/views/account/settings/Security'),
          meta: { title: '安全设置', hidden: true, keepAlive: true, permission: ['user'] }
        },
        {
          path: '/account/settings/custom',
          name: 'CustomSettings',
          component: () => import('@/views/account/settings/Custom'),
          meta: { title: '个性化设置', hidden: true, keepAlive: true, permission: ['user'] }
        },
        {
          path: '/account/settings/binding',
          name: 'BindingSettings',
          component: () => import('@/views/account/settings/Binding'),
          meta: { title: '账户绑定', hidden: true, keepAlive: true, permission: ['user'] }
        },
        {
          path: '/account/settings/notification',
          name: 'NotificationSettings',
          component: () => import('@/views/account/settings/Notification'),
          meta: { title: '新消息通知', hidden: true, keepAlive: true, permission: ['user'] }
        }
      ]
    }
  ]
}
