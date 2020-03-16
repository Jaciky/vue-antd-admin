import Layout from '_views/layout/Layout.vue'

export default {
  path: '/table',
  component: Layout,
  redirect: '/table/inline-edit-table',
  meta: {
    title: 'Table',
    icon: 'code'
  },
  children: [
    {
      path: '/table/inline-edit-table',
      name: 'InlineEditTable',
      meta: {
        cache: true,
        title: '行内编辑',
        icon: 'code'
      },
      component: () => import(/* webpackChunkName:"table"*/ '_views/table/InlineEditTable.vue')
    }
  ]
}
