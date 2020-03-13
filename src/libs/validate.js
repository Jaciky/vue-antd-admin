/**
 * 邮箱
 * @param {*} s
 */
export function isEmail(s) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

/**
 * 手机号码
 * @param {*} s
 */
export function isMobile(s) {
  return /^1[0-9]{10}$/.test(s)
}

/**
 * 电话号码
 * @param {*} s
 */
export function isPhone(s) {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

// 手机号和电话号
export function isTel(mobile) {
  const isPhone = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/ // 手机正则
  const isMob = /^((0\d{2,3})-?)(\d{7,8})(-(\d{3,}))?$/ // 座机
  if (isPhone.test(mobile) || isMob.test(mobile)) {
    return true
  } else {
    return false
  }
}

// 判断是否为数字
export function isNumber(s) {
  const re = /^[0-9]+.?[0-9]*$/ // 判断字符串是否为数字 //判断正整数 /^[1-9]+[0-9]*]*$/
  if (s) {
    if (!re.test(s)) {
      return false
    } else {
      return true
    }
  } else {
    return true
  }
}

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

// 身份证验证
export function isIdcard(idCard) {
  if (!idCard) return false
  const idCards = trim(idCard.replace(/ /g, ''))
  if (idCard.length === 15) {
    return isValidityBrithBy15IdCard(idCards)
  } else if (idCards.length === 18) {
    const idCardS = idCards.split('') // 得到身份证数组
    if (isValidityBrithBy18IdCard(idCards) && isTrueValidateCodeBy18IdCard(idCardS)) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }

  function isTrueValidateCodeBy18IdCard(aIdCard) {
    const Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]
    const ValideCode = ['1', '0', '10', '9', '8', '7', '6', '5', '4', '3', '2']
    let sum = 0
    const AidCard = aIdCard
    if (AidCard[17].toLowerCase() === 'x') {
      AidCard[17] = '10'
    }
    for (let i = 0; i < 17; i += 1) {
      sum += Wi[i] * AidCard[i]
    }
    const valCodePosition = sum % 11
    if (AidCard[17] === ValideCode[valCodePosition]) {
      return true
    } else {
      return false
    }
  }

  function isValidityBrithBy18IdCard(idCard18) {
    const year = idCard18.substring(6, 10)
    const month = idCard18.substring(10, 12)
    const day = idCard18.substring(12, 14)
    const tempDate = new Date(year, parseFloat(month) - 1, parseFloat(day))
    if (tempDate.getFullYear() !== parseFloat(year) || tempDate.getMonth() !== parseFloat(month) - 1 || tempDate.getDate() !== parseFloat(day)) {
      return false
    } else {
      return true
    }
  }

  function isValidityBrithBy15IdCard(idCard15) {
    const year = idCard15.substring(6, 8)
    const month = idCard15.substring(8, 10)
    const day = idCard15.substring(10, 12)
    const tempDate = new Date(year, parseFloat(month) - 1, parseFloat(day))
    if (tempDate.getYear() !== parseFloat(year) || tempDate.getMonth() !== parseFloat(month) - 1 || tempDate.getDate() !== parseFloat(day)) {
      return false
    } else {
      return true
    }
  }

  function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '')
  }
}
