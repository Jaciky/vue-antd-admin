import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layout */
import Layout from '_views/layout/Layout.vue'

/* Router Modules */
import system from './modules/system'
import charts from './modules/charts'
import error from './modules/error'
import icon from './modules/icon'
import form from './modules/form'
import permission from './modules/permission'
import feedback from './modules/feedback'
import list from './modules/list'
import editor from './modules/editor'
import tool from './modules/tool'
import profile from './modules/profile'

/**
 * hidden: true                   //当值为Truthy，该路由将会在导航栏中隐藏，如401、login等页面，或一些编辑页面/edit/1
 * alwaysShow: true               //当值为Truthy，当路由有且含有一个非隐藏的子路由的情况下，始终显示父级菜单
 * name:'router-name'             //须与对应组件的name保持一致，否则<keep-alive>不生效
 * meta : {
    roles: ['admin','editor']    //设置该路由访问权限，支持多个权限叠加，不设置此字段表示无权限限制
    title: 'title'               //设置该路由在导航栏中展示的名字
    icon: 'icon-class-name'      //设置该路由在导航栏中展示的图标
    cache: true                  //当值为Truthy，<keep-alive>才会生效(默认 false)
    activeMenu: '/example/list'  //当访问一个被隐藏菜单的路由时，此属性可指定菜单激活项
  }
 **/

/**
 * 初始路由
 */
export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/introduce',
    meta: { title: '介绍', icon: 'smile' },
    children: [
      {
        path: '/introduce',
        name: 'introduce',
        component: () => import(/* webpackChunkName:"introduce"*/ '_views/introduce/index.vue'),
        meta: { title: '介绍', icon: 'smile' }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('_views/login/Login.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error/401'),
    hidden: true
  },
  {
    path: '/500',
    component: () => import('@/views/error/500'),
    hidden: true
  }
]

/**
 * 动态路由
 */
export const asyncRoutes = [
  system,
  form,
  list,
  permission,
  profile,
  icon,
  charts,
  error,
  feedback,
  editor,
  tool,

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/error/404', hidden: true }
]

const router = new VueRouter({
  // mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: constantRoutes
})

export default router
