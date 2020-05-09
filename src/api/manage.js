import axios from '@/utils/request'

// 本地调试api前缀
const LOCAL_API_PREFIX = ''

const api = {
  user: `${LOCAL_API_PREFIX}/user`,
  role: `${LOCAL_API_PREFIX}/role`,
  service: `${LOCAL_API_PREFIX}/service`,
  permission: `${LOCAL_API_PREFIX}/permission`,
  permissionNoPager: `${LOCAL_API_PREFIX}/permission/no-pager`,
  orgTree: `${LOCAL_API_PREFIX}/org/tree`
}

export default api

export function getUserList(parameter) {
  return axios({
    url: api.user,
    method: 'get',
    params: parameter
  })
}

export function getRoleList(parameter) {
  return axios({
    url: api.role,
    method: 'get',
    params: parameter
  })
}

export function getServiceList(parameter) {
  return axios({
    url: api.service,
    method: 'get',
    params: parameter
  })
}

export function getPermissions(parameter) {
  return axios({
    url: api.permissionNoPager,
    method: 'get',
    params: parameter
  })
}

export function getOrgTree(parameter) {
  return axios({
    url: api.orgTree,
    method: 'get',
    params: parameter
  })
}

// id == 0 add     post
// id != 0 update  put
export function saveService(parameter) {
  return axios({
    url: api.service,
    method: parameter.id === 0 ? 'post' : 'put',
    data: parameter
  })
}
