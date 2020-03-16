import Layout from '_views/layout/Layout.vue'

export default {
  path: '/components',
  component: Layout,
  redirect: '/components/tinymce',
  meta: {
    title: '组件',
    icon: 'code'
  },
  children: [
    {
      path: '/components/tinymce',
      name: 'Tinymce',
      meta: {
        cache: true,
        title: '富文本编辑器',
        icon: 'code'
      },
      component: () => import(/* webpackChunkName:"components"*/ '_views/components/Tinymce.vue')
    }
  ]
}
