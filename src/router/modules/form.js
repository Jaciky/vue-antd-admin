import Layout from '_views/layout/Layout.vue'

export default {
  path: '/form',
  component: Layout,
  redirect: '/form/basic-form',
  meta: { title: '表单页面', icon: 'code' },
  children: [
    {
      path: '/form/basic-form',
      name: 'BasicForm',
      component: () => import(/* webpackChunkName:"form"*/ '_views/form/basic-form.vue'),
      meta: { title: '基础表单', icon: '' }
    },
    {
      path: '/form/dynamic-form',
      name: 'DynamicForm',
      component: () => import(/* webpackChunkName:"form"*/ '_views/form/dynamic-form.vue'),
      meta: { title: '动态表单', icon: '' }
    },
    {
      path: '/form/step-form',
      name: 'StepForm',
      component: () => import(/* webpackChunkName:"form"*/ '_views/form/step-form.vue'),
      meta: { title: '分步表单', icon: '' }
    },
    {
      path: '/form/detail',
      name: 'DetailForm',
      component: () => import(/* webpackChunkName:"form"*/ '_views/form/detail.vue'),
      meta: { title: '表单详情', icon: '' }
    }
  ]
}
