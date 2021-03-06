import Mock from 'mockjs2'
import { builder, getBody } from '../util'

const username = ['admin']
const password = ['e10adc3949ba59abbe56e057f20f883e'] // 123456

const login = options => {
  const body = getBody(options)
  console.log('mock: body', body)

  if (!username.includes(body.username) || !password.includes(body.password)) {
    return builder('', '账户或密码错误', '200', false)
  }

  return builder('4291d7da9005377ec9aec4a71ea837f')
}

const logout = () => {
  return builder({}, '注销成功')
}

const smsCaptcha = () => {
  return builder({ captcha: Mock.mock('@integer(10000, 99999)') })
}

const twofactor = () => {
  return builder({ stepCode: Mock.mock('@integer(0, 1)') })
}

Mock.mock(/\/auth\/login/, 'post', login)
Mock.mock(/\/auth\/logout/, 'post', logout)
Mock.mock(/\/account\/sms/, 'post', smsCaptcha)
Mock.mock(/\/auth\/2step-code/, 'post', twofactor)
