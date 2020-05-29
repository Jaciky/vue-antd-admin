// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './mock'

import initializer from './core/bootstrap'
import './core/library'
import './permission' // permission control
import './assets/styles/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created: initializer,
  render: h => h(App)
}).$mount('#app')
