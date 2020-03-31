import { setTagsInSessionStorage } from '@/libs/utils'

const state = {
  homePageRoute: {}, // 首页
  tagsList: [], // 已经点击的路由
  cachedRoutes: [] // 需要缓存的路由
}

const mutations = {
  // 设置首页
  SET_HOME_PAGE_ROUTE: (state, homeRoute) => {
    state.homePageRoute = homeRoute
    state.tagsList = [homeRoute]
    if (homeRoute.noCache) {
      // 不缓存首页
      state.cachedRoutes = []
    } else {
      state.cachedRoutes = [homeRoute.name]
    }
  },
  INIT_TAG(state, list) {
    state.tagsList = list
  },
  // 添加一条记录
  ADD_TAG: (state, route) => {
    if (!state.tagsList.some(v => v.path === route.path)) {
      state.tagsList.push({
        title: route.meta.title,
        path: route.path,
        name: route.name
      })
      // tag栏最多只能存在8个
      if (state.tagsList.length > 8) {
        let routeName = state.tagsList[1].name
        let tagIdx = state.tagsList.findIndex(v => v.name === routeName)
        let cacheIdx = state.cachedRoutes.findIndex(v => v === routeName)
        state.tagsList.splice(tagIdx, 1)
        cacheIdx !== -1 && state.cachedRoutes.splice(cacheIdx, 1)
        setTagsInSessionStorage(state.tagsList)
      }
    }
    if (!state.cachedRoutes.some(v => v === route.name)) {
      !route.meta.noCache && state.cachedRoutes.push(route.name)
    }
    setTagsInSessionStorage(state.tagsList)
  },
  DEL_CUR_TAG: (state, routeName) => {
    let tagIdx = state.tagsList.findIndex(v => v.name === routeName)
    let cacheIdx = state.cachedRoutes.findIndex(v => v === routeName)
    state.tagsList.splice(tagIdx, 1)
    cacheIdx !== -1 && state.cachedRoutes.splice(cacheIdx, 1)
    setTagsInSessionStorage(state.tagsList)
  },
  DEL_OTHERS_TAG: (state, route) => {
    const { tagsList, homePageRoute } = state
    state.tagsList = tagsList.filter(item => item.name === homePageRoute.name || item.name === route.name)
    if (!homePageRoute.noCache) {
      state.cachedRoutes = [homePageRoute.name].concat(route.name)
    } else {
      state.cachedRoutes = [route.name]
    }
    setTagsInSessionStorage(state.tagsList)
  },
  DEL_ALL: (state, homePageRoute) => {
    // if (!homePageRoute.keys().length) return;

    state.tagsList = [homePageRoute]
    if (!homePageRoute.noCache) {
      state.cachedRoutes = [homePageRoute.name]
    } else {
      state.cachedRoutes = []
    }
    setTagsInSessionStorage(state.tagsList)
  }
}

const actions = {
  delCurTagAct({ commit, state }, routeName) {
    return new Promise(resolve => {
      commit('DEL_CUR_TAG', routeName)
      resolve(state.tagsList[state.tagsList.length - 1].path)
    })
  },
  delOthersTagAct({ commit, state }, route) {
    const { homePageRoute } = state
    if (route.name === homePageRoute.name) {
      commit('DEL_ALL', homePageRoute)
    } else {
      commit('DEL_OTHERS_TAG', route)
    }
  },
  delAllAct({ commit, state }) {
    return new Promise(resolve => {
      commit('DEL_ALL', state.homePageRoute)
      resolve(state.tagsList[0].path)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
