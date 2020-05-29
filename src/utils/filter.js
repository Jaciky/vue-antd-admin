import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

// 设置数字千位符
export function setThousandSeparator(value) {
  let f, r

  if ((!value && value != 0) || Number.isNaN(Number(value))) return ''

  !Number.isInteger(Number(value)) ? ([r, f] = value.toString().split('.')) : (r = value.toString())

  r = r.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断

  if (f) {
    return r + '.' + f
  }

  return r
}

// 格式化日期
export function dateFormat(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
}
