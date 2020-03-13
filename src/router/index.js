import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layout */
import Layout from '_views/layout/Layout.vue'

/* Router Modules */
import system from './modules/system'
import icon from './modules/icon'
import form from './modules/form'

/**
 * hidden: true                   //当值为Truthy，该路由将会在导航栏中隐藏，如401、login等页面，或一些编辑页面/edit/1
 * alwaysShow: true               //当值为Truthy，当路由有且含有一个非隐藏的子路由的情况下，始终显示父级菜单
 * name:'router-name'             //须与对应组件的name保持一致，否则<keep-alive>不生效
 * meta : {
    roles: ['admin','editor']    //设置该路由访问权限，支持多个权限叠加，不设置此字段表示无权限限制
    title: 'title'               //设置该路由在导航栏中展示的名字
    icon: 'icon-class-name'      //设置该路由在导航栏中展示的图标
    cache: true                  //当值为Truthy，<keep-alive>才会生效
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
    redirect: '/home',
    // alwaysShow: true,
    meta: {
      title: '首页',
      icon: 'smile'
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName:"home"*/ '_views/home/Home.vue'),
        meta: {
          title: '首页',
          icon: 'smile'
        }
      }
    ]
  },
  {
    path: '/login',
    hidden: true,
    component: () => import('_views/login/Login.vue')
  },
  {
    path: '/401',
    hidden: true,
    component: () => import('_views/error/401.vue')
  },
  {
    path: '/404',
    hidden: true,
    component: () => import('_views/error/404.vue')
  },
  {
    path: '/500',
    hidden: true,
    component: () => import('_views/error/500.vue')
  }
]

/**
 * 动态路由
 */
export const asyncRoutes = [
  system,
  icon,
  form,

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  // mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: constantRoutes
})

export default router
