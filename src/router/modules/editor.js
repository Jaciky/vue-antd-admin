import Layout from '_views/layout/Layout.vue'

export default {
  path: '/editor',
  component: Layout,
  redirect: '/editor/tinymce',
  meta: { title: '编辑器', icon: 'code' },
  children: [
    {
      path: '/editor/tinymce',
      name: 'Tinymce',
      component: () => import(/* webpackChunkName:"editor"*/ '_views/editor/tinymce.vue'),
      meta: { title: '富文本编辑器', icon: '' }
    },
    {
      path: '/editor/markdown',
      name: 'Markdown',
      component: () => import(/* webpackChunkName:"editor"*/ '_views/editor/markdown.vue'),
      meta: { title: 'Markdown 编辑器', icon: '' }
    }
  ]
}
