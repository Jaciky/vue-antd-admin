import Layout from '_views/layout/Layout.vue'

export default {
  path: '/tool',
  component: Layout,
  redirect: '/tool/log',
  meta: { title: '工具', icon: 'code' },
  children: [
    {
      path: '/tool/log',
      component: { render: h => h('router-view') },
      redirect: '/tool/log/record',
      meta: { title: '日志' },
      children: [
        {
          path: '/tool/log/record',
          name: 'LogRecord',
          component: () => import(/* webpackChunkName:"tool_log"*/ '_views/tool/log/record.vue'),
          meta: { title: '日志记录' }
        },
        {
          path: '/tool/log/error',
          name: 'LogError',
          component: () => import(/* webpackChunkName:"tool_log"*/ '_views/tool/log/error.vue'),
          meta: { title: '错误捕捉' }
        },
        {
          path: '/tool/log/ajax',
          name: 'LogAjax',
          component: () => import(/* webpackChunkName:"tool_log"*/ '_views/tool/log/ajax.vue'),
          meta: { title: 'Ajax 错误' }
        },
        {
          path: '/tool/log/console',
          name: 'LogConsole',
          component: () => import(/* webpackChunkName:"tool_log"*/ '_views/tool/log/console.vue'),
          meta: { title: '控制台日志' }
        }
      ]
    },
    {
      path: '/tool/page-cache',
      component: { render: h => h('router-view') },
      redirect: '/tool/page-cache/on',
      meta: { title: '页面缓存' },
      children: [
        {
          path: '/tool/page-cache/on',
          name: 'CacheOn',
          component: () => import(/* webpackChunkName:"tool_cache"*/ '_views/tool/page-cache/on.vue'),
          meta: { title: '开启缓存' }
        },
        {
          path: '/tool/page-cache/off',
          name: 'CacheOff',
          component: () => import(/* webpackChunkName:"tool_cache"*/ '_views/tool/page-cache/off.vue'),
          meta: { title: '关闭缓存' }
        },
        {
          path: '/tool/page-cache/params',
          name: 'CacheParams',
          component: () => import(/* webpackChunkName:"tool_cache"*/ '_views/tool/page-cache/params.vue'),
          meta: { title: '带参路由缓存1' }
        },
        {
          path: '/tool/page-cache/params',
          name: 'CacheParams',
          component: () => import(/* webpackChunkName:"tool_cache"*/ '_views/tool/page-cache/params.vue'),
          meta: { title: '带参路由缓存2' }
        }
      ]
    }
  ]
}
