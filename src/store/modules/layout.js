const state = {
  sidebar: sessionStorage.sidebarStatus ? !+sessionStorage.sidebarStatus : false,
  sidebarWidth: 256,
  collapsedWidth: 80,
  sidebarFix: true, // 固定侧边栏
  headerHeight: 64,
  headerFix: true, // 固定顶部导航栏
  tagsNavFix: true, // 固定快速导航栏
  tagsNavShow: true // 显示多页签
}

const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.sidebar = !state.sidebar
    state.sidebar ? sessionStorage.setItem('sidebarStatus', 0) : sessionStorage.setItem('sidebarStatus', 1)
  },
  TOGGLE_FIX(state, name) {
    state[name] = !state[name]
    console.log(name)
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
