import Mock from 'mockjs2'
import { builder } from '../util'

const info = () => {
  const userInfo = {
    id: '4291d7da9005377ec9aec4a71ea837f',
    name: '天野远子',
    username: 'admin',
    password: '',
    avatar: '/avatar2.jpg',
    status: 1,
    telephone: '',
    lastLoginIp: '27.154.74.117',
    lastLoginTime: 1534837621348,
    creatorId: 'admin',
    createTime: 1497160610259,
    merchantCode: 'TLif2btpzg079h15bk',
    deleted: 0,
    roleId: 'admin',
    role: {}
  }
  return builder(userInfo, '获取用户信息成功')
}

const permissions = () => {
  const permissions = [100, 101, 102, 103, 104, 105, 106]
  return builder(permissions, '获取用户权限成功')
}

Mock.mock(/\/user\/info/, 'get', info)
Mock.mock(/\/user\/permissions/, 'get', permissions)
