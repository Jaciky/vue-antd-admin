const state = {
  sidebar: sessionStorage.sidebarStatus ? !+sessionStorage.sidebarStatus : false
}

const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.sidebar = !state.sidebar
    state.sidebar ? sessionStorage.setItem('sidebarStatus', 0) : sessionStorage.setItem('sidebarStatus', 1)
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
