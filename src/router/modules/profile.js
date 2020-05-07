import { RouteView } from '@/layouts'

// profile
export default {
  path: '/profile',
  name: 'profile',
  component: RouteView,
  redirect: '/profile/basic',
  meta: { title: '详情页', icon: 'profile', permission: ['profile'] },
  children: [
    {
      path: '/profile/basic',
      name: 'ProfileBasic',
      component: () => import('@/views/profile/basic/Index'),
      meta: { title: '基础详情页', permission: ['profile'] }
    },
    {
      path: '/profile/advanced',
      name: 'ProfileAdvanced',
      component: () => import('@/views/profile/advanced/Advanced'),
      meta: { title: '高级详情页', permission: ['profile'] }
    }
  ]
}
