export const reqb = { required: true, trigger: 'blur' }
export const reqc = { required: true, trigger: 'change' }

// 用户名
export const ac = {
  pattern: /^(?=.*[a-zA-Z])[a-zA-Z\d]+$/,
  message: '仅限输入字母、数字且必须包含字母',
  trigger: ['blur', 'change']
}

// 密码
export const pw = { pattern: /^[a-zA-Z0-9._]+$/, message: '仅限输入字母、数字、下划线、.', trigger: ['blur', 'change'] }

// 中文
export const ch = { pattern: /^[\u4E00-\u9FA5]+$/, message: '请输入中文字符', trigger: ['blur', 'change'] }

// 数字
export const num = { pattern: /^[0-9]+$/, message: '请输入数字', trigger: ['blur', 'change'] }
