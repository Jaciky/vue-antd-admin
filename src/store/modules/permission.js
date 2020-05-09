import { asyncRouterMap, constantRouterMap } from '@/router/router.config'

/**
 * Use meta.permission to determine if the current user has permission
 *
 * @param permissions 用户权限id集合
 * @param route 当前路由
 * @returns {boolean}
 */
function hasPermission(permissions, route) {
  if (route.meta?.permission) {
    if (route.meta.permission instanceof Array) {
      return permissions.some(id => route.meta.permission.includes(id))
    } else {
      return permissions.includes(route.meta.permission)
    }
  }
  return true
}

/**
 * Filter asyncRouterMap routing tables by recursion
 *
 * @param routerMap asyncRouterMap
 * @param permissions 用户权限id集合
 */
function filterAsyncRouter(routerMap, permissions) {
  const accessedRouters = routerMap.filter(route => {
    if (hasPermission(permissions, route)) {
      if (route.children?.length) {
        route.children = filterAsyncRouter(route.children, permissions)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit, rootState: { user } }) {
      return new Promise(resolve => {
        const accessedRouters = filterAsyncRouter(asyncRouterMap, user.permissions)
        commit('SET_ROUTERS', accessedRouters)
        resolve(accessedRouters)
      })
    }
  }
}

export default permission
