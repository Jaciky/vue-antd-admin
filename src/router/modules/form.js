import { PageView } from '@/layouts'

// forms
export default {
  path: '/form',
  redirect: '/form/base-form',
  component: PageView,
  meta: { title: '表单页', icon: 'form' },
  children: [
    {
      path: '/form/base-form',
      name: 'BaseForm',
      component: () => import('@/views/form/BasicForm'),
      meta: { title: '基础表单', keepAlive: true }
    },
    {
      path: '/form/step-form',
      name: 'StepForm',
      component: () => import('@/views/form/stepForm/StepForm'),
      meta: { title: '分步表单', keepAlive: true }
    },
    {
      path: '/form/advanced-form',
      name: 'AdvanceForm',
      component: () => import('@/views/form/advancedForm/AdvancedForm'),
      meta: { title: '高级表单', keepAlive: true }
    }
  ]
}
