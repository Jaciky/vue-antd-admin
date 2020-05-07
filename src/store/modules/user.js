import Vue from 'vue'
import { login, getInfo, logout, getPermission } from '@/api/login'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { welcome } from '@/utils/util'

const user = {
  state: {
    token: '',
    name: '',
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
            const result = response.data
            Vue.ls.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
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
            const result = response.data

            console.log(result)

            if (!result.id) reject('获取用户信息失败，请重试！')
            try {
              await dispatch('getPermission')
            } catch (error) {
              reject('获取用户权限失败，请重试！')
            }

            commit('SET_NAME', { name: result.name, welcome: welcome() })
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
            const permissions = response.data
            commit('SET_PERMISSIONS', permissions)
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
            Vue.ls.remove(ACCESS_TOKEN)
          })
      })
    }
  }
}

export default user
