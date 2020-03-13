import Layout from '_views/layout/Layout.vue'

export default {
  path: '/form',
  component: Layout,
  redirect: '/form/select',
  meta: {
    title: '表单',
    icon: 'code'
  },
  children: [
    {
      path: '/form/select',
      name: 'Select',
      meta: {
        cache: true,
        title: '选择器',
        icon: 'code'
      },
      component: () => import(/* webpackChunkName:"form"*/ '_views/form/Select.vue')
    }
  ]
}
