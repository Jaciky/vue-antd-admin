import axios from '@/utils/request'

// 本地调试api前缀
const LOCAL_API_PREFIX = ''

const api = {
  Login: `${LOCAL_API_PREFIX}/auth/login`,
  Logout: `${LOCAL_API_PREFIX}/auth/logout`,
  ForgePassword: `${LOCAL_API_PREFIX}/auth/forge-password`,
  Register: `${LOCAL_API_PREFIX}/auth/register`,
  TwoStepCode: `${LOCAL_API_PREFIX}/auth/2step-code`,
  SendSms: `${LOCAL_API_PREFIX}/account/sms`,
  SendSmsErr: `${LOCAL_API_PREFIX}/account/sms_err`,
  UserInfo: `${LOCAL_API_PREFIX}/user/info`,
  Permissions: `${LOCAL_API_PREFIX}/user/permissions`
}

export default api

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function login(parameter) {
  return axios({
    url: api.Login,
    method: 'post',
    data: parameter
  })
}

export function getSmsCaptcha(parameter) {
  return axios({
    url: api.SendSms,
    method: 'post',
    data: parameter
  })
}

export function getInfo() {
  return axios({
    url: api.UserInfo,
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function logout() {
  return axios({
    url: api.Logout,
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * get user 2step code open?
 * @param parameter {*}
 */
export function get2step(parameter) {
  return axios({
    url: api.TwoStepCode,
    method: 'post',
    data: parameter
  })
}

/**
 * 获取用户权限id集合
 */
export const getPermission = () => {
  return axios({
    url: api.Permissions,
    method: 'get'
  })
}
