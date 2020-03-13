import request from '../libs/request'

/**
 * @description 登录
 */
export const login = data => {
  return request({
    url: '/auth/system/backstageLogin',
    method: 'post',
    data
  })
}

/**
 * @description 登出
 */
export const logout = () => {
  return request({
    url: '/auth/system/backstageLogout',
    method: 'post'
  })
}

/**
 * @description 获取用户信息
 */
export const getInfo = () => {
  return request({
    url: '/auth/system/backstageUserInfo',
    method: 'get'
  })
}
/**
 * @description 手机号/身份证号是否已被注册
 * @param {Number} type 10-注册，20-忘记密码，30-前台给用户编辑账号，35-前台新增账号
 */
export const isRegistedPhoneOrIdCard = (phone, idcard, type) => {
  return request({
    url: '/auth/system/isExistsByPhoneOrIdCard',
    method: 'get',
    params: {
      phone,
      idcard,
      type
    }
  })
}
/**
 * @description 判断用户是否已注册
 */
export const isRegisted = account => {
  return request({
    url: '/auth/system/isExistsByAccount',
    method: 'get',
    params: {
      account
    }
  })
}
