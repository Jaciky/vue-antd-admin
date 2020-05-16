import axios from '@/utils/request'

// 本地调试api前缀
const LOCAL_API_PREFIX = ''

const api = {
  role: `${LOCAL_API_PREFIX}/other/role`
}

export default api

export function getRoles(params) {
  return axios({
    url: api.role,
    method: 'get',
    data: params
  })
}
