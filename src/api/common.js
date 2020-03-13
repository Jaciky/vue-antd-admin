import request from '../libs/request'
const BASE_MODEL = '/basic'
/**
 * @description 发送短信
 */
export const sendSMS = data => {
  return request({
    url: '/auth/sms/sendSMS',
    method: 'post',
    data
  })
}

/**
 * @description 机构列表(学校、医院、政府机构)
 */
export const getOrgList = data => {
  return request({
    url: `${BASE_MODEL}/org/orgList`,
    method: 'get',
    params: data
  })
}
/**
 * @description 机构列表(学校、医院、政府机构)
 */
export const getSpinner = pId => {
  return request({
    url: `${BASE_MODEL}/common/getSpinner`,
    method: 'get',
    params: {
      pId
    }
  })
}
