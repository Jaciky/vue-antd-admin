import { isIdcard } from './validate'
let isIdCard = (rule, value, callback) => {
  !isIdcard(value) ? callback(new Error('身份证号格式错误')) : callback()
}

export const reqb = { required: true, trigger: 'blur' }
export const reqc = { required: true, trigger: 'change' }

// < **子规则**>--------------------------------------------------------------------------< **子规则**>-//

// 用户名
export const ac = { pattern: /^(?=.*[a-zA-Z])[a-zA-Z\d]+$/, message: '仅限输入字母、数字且必须包含字母', trigger: ['blur', 'change'] }

// 密码
export const pw = { pattern: /^[a-zA-Z0-9._]+$/, message: '仅限输入字母、数字、下划线、.', trigger: ['blur', 'change'] }

// 中文
export const ch = { pattern: /^[\u4E00-\u9FA5]+$/, message: '请输入中文字符', trigger: ['blur', 'change'] }

// 数字
export const num = { pattern: /^[0-9]+$/, message: '请输入数字', trigger: ['blur', 'change'] }

// < **子规则**>--------------------------------------------------------------------------< **子规则**>-//

// < **固定规则**>--------------------------------------------------------------------------< **固定规则**>-//

// input - required
export const input = { ...reqb, message: '请输入' }

// select - required
export const select = { ...reqc, message: '请选择' }

// 身份证
export const idcard = [
  { ...reqb, message: '请输入身份证号' },
  { validator: isIdCard, trigger: 'blur' }
]

// 用户名
export const account = [{ ...reqb, message: '请输入用户名' }, { min: 6, max: 16, message: '长度为6 - 16个字符', trigger: 'blur' }, ac]

// 中文姓名
export const name = [
  { ...reqb, message: '请输入姓名' },
  { min: 2, max: 15, message: '长度为2 - 15个中文字符', trigger: 'blur' },
  { pattern: /^[a-zA-Z|\u4E00-\u9FA5]+$/, message: '请输入2-15个中文或英文字符', trigger: ['blur', 'change'] }
]

// 手机号码
export const phone = [
  { ...reqb, message: '请输入手机号码' },
  { pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/, message: '手机号码格式有误', trigger: 'blur' }
]

// 登录及注册密码
export const password = [{ ...reqb, message: '请输入密码' }, { min: 8, max: 20, message: '长度为8 - 20个字符', trigger: 'blur' }, pw]

// 机构名称
export const orgName = [
  { ...reqb, message: '请输入机构全称' },
  { min: 4, max: 50, message: '长度为5 - 50个字符', trigger: 'blur' }
]

// 详细地址
export const address = [
  { ...reqb, message: '请输入详细地址' },
  { min: 2, max: 50, message: '长度为2 - 50个字符', trigger: 'blur' }
]

// 开始日期
export const startTime = { ...reqc, message: '请选择开始日期' }

// 开始日期
export const endTime = { ...reqc, message: '请选择结束日期' }

// < **固定规则**>--------------------------------------------------------------------------< **固定规则**>-//
