const requiredBlur= { required: true, trigger: 'blur' }
const requiredChange = { required: true, trigger: 'change' }
const requiredChangeBlur = { required: true, trigger: ['blur', 'change'] }

// 用户名
const username = {
  pattern: /^(?=.*[a-zA-Z])[a-zA-Z\d]+$/,
  message: '仅限输入字母、数字且必须包含字母',
  trigger: ['blur', 'change']
}

// 密码
const password = { pattern: /^[a-zA-Z0-9._]+$/, message: '仅限输入字母、数字、下划线、.', trigger: ['blur', 'change'] }

// 中文字符
const chineseCharacter = { pattern: /^[\u4E00-\u9FA5]+$/, message: '请输入中文字符', trigger: ['blur', 'change'] }

// 数字
const number = { pattern: /^[0-9]+$/, message: '请输入数字', trigger: ['blur', 'change'] }

export default {
  requiredBlur,
  requiredChange,
  requiredChangeBlur,
  username,
  password,
  chineseCharacter,
  number
}
