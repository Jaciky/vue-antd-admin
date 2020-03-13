import { asyncRoutes, constantRoutes } from '@/router'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta?.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: [],
  cachedRoutes: [] // 缓存路由
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  },
  SET_CACHED_ROUTES: (state, name) => {
    state.cachedRoutes.push(name)
  }
}

const actions = {
  generateRoutes({ commit, rootState }) {
    return new Promise(resolve => {
      const { roles } = rootState.user
      let accessedRoutes
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes || []
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  },
  updateCachedRoutes({ state, commit }, route) {
    if (route.name && route.meta?.cache) {
      if (!state.cachedRoutes.includes(route.name)) {
        commit('SET_CACHED_ROUTES', route.name)
      }
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
