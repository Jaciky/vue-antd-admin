import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import app from './modules/app'
import auth from './modules/auth'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  getters,
  modules: {
    app,
    auth,
    user
  }
})

export default store
