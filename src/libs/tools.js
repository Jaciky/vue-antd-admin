import { isIdcard } from './validate'

/**
 * @returns {String} 当前浏览器名称
 */
export const getExplorer = () => {
  const ua = window.navigator.userAgent
  const isExplorer = exp => {
    return ua.indexOf(exp) > -1
  }
  if (isExplorer('MSIE')) return 'IE'
  else if (isExplorer('Firefox')) return 'Firefox'
  else if (isExplorer('Chrome')) return 'Chrome'
  else if (isExplorer('Opera')) return 'Opera'
  else if (isExplorer('Safari')) return 'Safari'
}

/**
 * get chrome version
 */
export const chromeVersion = () => {
  var arr = navigator.userAgent.split(' ')
  var chromeVersion = ''
  for (var i = 0; i < arr.length; i++) {
    if (/chrome/i.test(arr[i])) {
      chromeVersion = arr[i]
    }
  }
  if (chromeVersion) {
    return Number(chromeVersion.split('/')[1].split('.')[0])
  } else {
    return false
  }
}

/**
 * get ie version
 */
export const IEVersion = () => {
  var userAgent = navigator.userAgent // 取得浏览器的userAgent字符串
  var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 // 判断是否IE<11浏览器
  var isEdge = userAgent.indexOf('Edge') > -1 && !isIE // 判断是否IE的Edge浏览器
  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1

  if (isEdge) {
    return 'edge' // edge
  } else if (isIE11) {
    return 11 // IE11
  } else {
    return false
  }
}

/**
 * 根据身份证号来自动填写性别
 */
export const getSexFromIdCard = idCard => {
  if (!isIdcard(idCard)) return
  if (idCard.length == 15) {
    if (idCard.substring(14, 15) % 2 == 0) {
      return '女'
    } else {
      return '男'
    }
  } else if (idCard.length == 18) {
    if (idCard.substring(14, 17) % 2 == 0) {
      return '女'
    } else {
      return '男'
    }
  } else {
    return null
  }
}

/**
 * 根据身份证号来自动填写出生年月
 */
export const getBirthdayFromIdCard = idCard => {
  if (!isIdcard(idCard)) return
  var birthday = ''
  if (idCard != null && idCard != '') {
    if (idCard.length == 15) {
      birthday = '19' + idCard.substr(6, 6)
    } else if (idCard.length == 18) {
      birthday = idCard.substr(6, 8)
    }
    birthday = birthday.replace(/(.{4})(.{2})/, '$1-$2-')
  }
  return birthday
}
/**
 * 获取query数据
 */
export const getQueryString = name => {
  var result = window.location.href.match(new RegExp('[?&]' + name + '=([^&]+)', 'i'))
  if (result == null || result.length < 1) {
    return ''
  }
  return result[1]
}

/**
 * 获取当前报告生成时间
 */
export const getNowTime = () => {
  let date = new Date()
  let dateArr = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  }
  for (let k in dateArr) {
    if (dateArr[k] < 10) {
      dateArr[k] = '0' + dateArr[k]
    }
  }
  let fullDate = dateArr.year + '-' + dateArr.month + '-' + dateArr.day + ' ' + dateArr.hours + ':' + dateArr.minutes + ':' + dateArr.seconds
  return fullDate
}

/**
 * 检测浏览器是否缩放
 */
export const detectZoom = () => {
  let ratio = 0
  let screen = window.screen
  let ua = navigator.userAgent.toLowerCase()

  if (window.devicePixelRatio !== undefined) {
    ratio = window.devicePixelRatio
  } else if (~ua.indexOf('msie')) {
    if (screen.deviceXDPI && screen.logicalXDPI) {
      ratio = screen.deviceXDPI / screen.logicalXDPI
    }
  } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
    ratio = window.outerWidth / window.innerWidth
  }

  if (ratio) {
    ratio = Math.round(ratio * 100)
  }

  return ratio
}

export const createStaticArray = (start, end, step = 1, fixedInt = 1) => {
  let arr = []
  let getStatic = start => {
    if (start <= end) {
      arr.push({ value: start.toFixed(fixedInt) })
      getStatic(start + step)
    }
  }
  getStatic(start)
  return arr
}
