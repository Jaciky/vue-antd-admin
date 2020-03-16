import Layout from '_views/layout/Layout.vue'

export default {
  path: '/system',
  component: Layout,
  redirect: '/system/introduce',
  meta: {
    title: '系统',
    icon: 'code'
  },
  children: [
    {
      path: '/system/introduce',
      name: 'Introduce',
      meta: {
        cache: true,
        title: '系统介绍',
        icon: ''
      },
      component: () => import(/* webpackChunkName:"system"*/ '_views/system/Introduce.vue')
    },
    {
      path: '/system/route',
      name: 'Route',
      meta: {
        cache: true,
        title: '路由设计',
        icon: ''
      },
      component: () => import(/* webpackChunkName:"system"*/ '_views/system/Route.vue')
    },
    {
      path: '/system/permission',
      name: 'Permission',
      meta: {
        cache: true,
        title: '系统鉴权',
        icon: ''
      },
      component: () => import(/* webpackChunkName:"system"*/ '_views/system/Permission.vue')
    },
    {
      path: '/system/vuex',
      name: 'Vuex',
      meta: {
        cache: true,
        title: 'Vuex 最佳实践',
        icon: ''
      },
      component: () => import(/* webpackChunkName:"system"*/ '_views/system/Vuex.vue')
    },
    {
      path: '/system/axios',
      name: 'Axios',
      meta: {
        cache: true,
        title: 'Axios 封装',
        icon: ''
      },
      component: () => import(/* webpackChunkName:"system"*/ '_views/system/Axios.vue')
    },
    {
      path: '/system/less',
      name: 'Less',
      meta: {
        cache: true,
        title: 'Less 引用',
        icon: ''
      },
      component: () => import(/* webpackChunkName:"system"*/ '_views/system/Less.vue')
    },
    {
      path: '/system/antd',
      name: 'Antd',
      meta: {
        cache: true,
        title: 'Antd UI组件库',
        icon: ''
      },
      component: () => import(/* webpackChunkName:"system"*/ '_views/system/Antd.vue')
    },
    {
      path: '/system/eslint',
      name: 'Eslint',
      meta: {
        cache: true,
        title: 'Eslint 和 Prettier',
        icon: ''
      },
      component: () => import(/* webpackChunkName:"system"*/ '_views/system/Eslint.vue')
    }
  ]
}
