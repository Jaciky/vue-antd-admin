const state = {
  sidebar: sessionStorage.sidebarStatus ? !+sessionStorage.sidebarStatus : false,
  sidebarWidth: 256,
  collapsedWidth: 80,
  headerFix: false // 固定顶部导航栏
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
