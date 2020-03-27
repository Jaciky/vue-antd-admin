import Layout from '_views/layout/Layout.vue'

export default {
  path: '/list',
  component: Layout,
  redirect: '/list/basic-list',
  meta: { title: '列表页面', icon: 'code' },
  children: [
    {
      path: '/list/basic-list',
      name: 'BasicList',
      component: () => import(/* webpackChunkName:"list"*/ '_views/list/basic-list.vue'),
      meta: { title: '基础列表', icon: '' }
    },
    {
      path: '/list/card-list',
      name: 'CardList',
      component: () => import(/* webpackChunkName:"list"*/ '_views/list/card-list.vue'),
      meta: { title: '卡片列表', icon: '' }
    },
    {
      path: '/list/table-list',
      name: 'TableList',
      component: () => import(/* webpackChunkName:"list"*/ '_views/list/table-list.vue'),
      meta: { title: 'table查询', icon: '' }
    }
  ]
}
