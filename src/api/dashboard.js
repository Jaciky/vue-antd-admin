import axios from '@/utils/request'

// 本地调试api前缀
const LOCAL_API_PREFIX = ''

const api = {
  Activity: `${LOCAL_API_PREFIX}/workplace/activity`,
  Teams: `${LOCAL_API_PREFIX}/workplace/teams`,
  Radar: `${LOCAL_API_PREFIX}/workplace/radar`,
  Projects: `${LOCAL_API_PREFIX}/list/search/projects`,
  ServerList: `${LOCAL_API_PREFIX}/service`,
  article: `${LOCAL_API_PREFIX}/list/article`
}

export default api

export function getProjects() {
  return axios({
    url: api.Projects,
    method: 'get'
  })
}

export function getActivity() {
  return axios({
    url: api.Activity,
    method: 'get'
  })
}

export function getTeams() {
  return axios({
    url: api.Teams,
    method: 'get'
  })
}

export function getRadar() {
  return axios({
    url: api.Radar,
    method: 'get'
  })
}

export function getArticle(params) {
  return axios({
    url: api.article,
    method: 'get',
    data: params
  })
}
