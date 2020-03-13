import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/index.less'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/assets/icons/iconfont.css'

import './plugins/antd'

// 全局常量及方法
import * as global from './libs/global'
Vue.prototype.$g = global

// 过滤器
import * as filters from './filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 指令
import directives from './directives'
Vue.use(directives)

// 组件
import components from './components'
Vue.use(components)

// 鉴权
import './permission'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
