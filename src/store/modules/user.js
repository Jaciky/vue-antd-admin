import Vue from 'vue'
import { login, getInfo, logout, getPermission } from '@/api/user'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { welcome } from '@/utils/util'
import config from '@/config'

const user = {
  state: {
    token: '',
    name: '',
    id: '',
    welcome: '',
    avatar: '',
    roles: [],
    permissions: [], // 权限id
    info: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, { name, welcome }) => {
      state.name = name
      state.welcome = welcome
    },
    SET_USERID: (state, id) => {
      state.id = id
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
    },
    SET_INFO: (state, info) => {
      state.info = info
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then(response => {
            const result = response.result
            Vue.ls.set(ACCESS_TOKEN, result.token, config.tokenExpires)
            commit('SET_TOKEN', result.token)
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 获取用户信息
    GetInfo({ commit, dispatch }) {
      return new Promise((resolve, reject) => {
        getInfo()
          .then(async response => {
            const result = response.result

            if (!result.id) reject('获取用户信息失败，请重试！')
            console.log('用户信息:', result)

            try {
              await dispatch('GetPermissions')
            } catch (error) {
              reject('获取用户权限失败，请重试！')
            }
            commit('SET_INFO', result)
            commit('SET_NAME', { name: result.name, welcome: welcome() })
            commit('SET_USERID', result.id)
            commit('SET_AVATAR', result.avatar)

            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 获取用户权限信息
    GetPermissions({ commit }) {
      return new Promise((resolve, reject) => {
        getPermission()
          .then(response => {
            const permissions = response.result

            commit('SET_PERMISSIONS', permissions)
            console.log('用户权限:', permissions)

            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 登出
    Logout({ commit, state: { token } }) {
      return new Promise(resolve => {
        logout(token)
          .then(() => {
            resolve()
          })
          .catch(() => {
            resolve()
          })
          .finally(() => {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            commit('SET_USERID', '')
            Vue.ls.remove(ACCESS_TOKEN)
          })
      })
    }
  }
}

export default user
