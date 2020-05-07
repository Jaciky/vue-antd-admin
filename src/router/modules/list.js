import { PageView } from '@/layouts'

// list
export default {
  path: '/list',
  name: 'list',
  component: PageView,
  redirect: '/list/table-list',
  meta: { title: '列表页', icon: 'table' },
  children: [
    {
      path: '/list/table-list/:pageNo([1-9]\\d*)?',
      name: 'TableListWrapper',
      hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
      component: () => import('@/views/list/TableList'),
      meta: { title: '查询表格', keepAlive: true }
    },
    {
      path: '/list/basic-list',
      name: 'BasicList',
      component: () => import('@/views/list/StandardList'),
      meta: { title: '标准列表', keepAlive: true }
    },
    {
      path: '/list/card',
      name: 'CardList',
      component: () => import('@/views/list/CardList'),
      meta: { title: '卡片列表', keepAlive: true }
    },
    {
      path: '/list/search',
      name: 'SearchList',
      component: () => import('@/views/list/search/SearchLayout'),
      redirect: '/list/search/article',
      meta: { title: '搜索列表', keepAlive: true },
      children: [
        {
          path: '/list/search/article',
          name: 'SearchArticles',
          component: () => import('@/views/list/search/Article'),
          meta: { title: '搜索列表（文章）' }
        },
        {
          path: '/list/search/project',
          name: 'SearchProjects',
          component: () => import('@/views/list/search/Projects'),
          meta: { title: '搜索列表（项目）' }
        },
        {
          path: '/list/search/application',
          name: 'SearchApplications',
          component: () => import('@/views/list/search/Applications'),
          meta: { title: '搜索列表（应用）' }
        }
      ]
    }
  ]
}
