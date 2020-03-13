// import { login, logout, getInfo } from '_api/system'
import { getToken, setToken, removeToken } from '@/libs/utils'

const state = {
  token: getToken(),
  name: '',
  userId: '',
  avatar: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USERID: (state, userId) => {
    state.userId = userId
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // 登录
  login({ commit }, userInfo) {
    // const { account, password } = userInfo
    return new Promise((resolve, reject) => {
      // login({ account, password })
      //   .then(res => {
      //     commit('SET_TOKEN', res.data)
      //     setToken(res.data) // 存储本地
      //     resolve()
      //   })
      //   .catch(err => {
      //     reject(err)
      //   })

      setTimeout(() => {
        commit('SET_TOKEN', 'ant-token')
        setToken('ant-token') // 存储本地
        resolve()
      }, 300)
    })
  },

  // 退出登录
  async logout({ dispatch }) {
    await dispatch('clearInfo')
  },

  // 清除登录信息
  async clearInfo({ commit }) {
    commit('SET_TOKEN', '')
    commit('SET_ROLES', [])
    commit('SET_NAME', '')
    commit('SET_USERID', '')
    removeToken()
  },

  // 获取用户信息
  getInfo({ state, commit }) {
    return new Promise((resolve, reject) => {
      // getInfo(state.token)
      //   .then(res => {
      //     const { roles, realName, avatar, userId } = res.data

      //     // if (!id) {
      //     //   reject('拉取用户信息失败，请重新登录！')
      //     // }

      //     commit('SET_ROLES', ['admin'])
      //     commit('SET_NAME', realName)
      //     // commit('SET_AVATAR', avatar)
      //     commit('SET_USERID', userId)
      //     resolve(res.data)
      //   })
      //   .catch(err => {
      //     reject(err)
      //   })

      setTimeout(() => {
        commit('SET_ROLES', ['admin'])
        commit('SET_NAME', 'amdin')
        commit('SET_USERID', '001')
        resolve('ant-token')
      }, 300)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
