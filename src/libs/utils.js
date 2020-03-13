import Cookies from 'js-cookie'
import config from '@/config'

const { title, cookieExpires } = config

/**
 * 用户token相关
 */
export const TOKEN_KEY = 'token'

export const setToken = token => {
  Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 })
}

export const getToken = () => {
  return Cookies.get(TOKEN_KEY)
}

export const removeToken = () => {
  return Cookies.remove(TOKEN_KEY)
}

/**
 * @description 设置窗口title
 */
export const getPageTitle = pageTitle => {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}

/**
 * @param {Array} routers 路由列表数组
 * @description 用于找到路由列表中和name匹配的路由对象
 */
export const getRouteByName = (routers, routeName = 'home') => {
  let i = -1
  const len = routers.length
  let route = {}
  while (++i < len) {
    const item = routers[i]
    if (item.children && item.children.length) {
      const res = getRouteByName(item.children, routeName)
      if (res.name) return res
    } else {
      if (item.name === routeName) route = item
    }
  }
  return route
}

/**
 * @param {String} url
 * @description 从URL中解析参数
 */
export const getParams = url => {
  const keyValueArr = url.split('?')[1].split('&')
  const paramObj = {}
  keyValueArr.forEach(item => {
    const keyValue = item.split('=')
    paramObj[keyValue[0]] = keyValue[1]
  })
  return paramObj
}

/**
 * @description 设置标签页本地存储
 */
export const setTagsInSessionStorage = list => {
  sessionStorage.setItem('tags', JSON.stringify(list))
}

/**
 * @description 获取本地存储标签页
 */
export const getTagsFormSessionStorage = () => {
  return new Promise(resolve => {
    const list = sessionStorage.getItem('tags')
    list ? resolve(JSON.parse(list)) : resolve(false)
  })
}

export const download = (data, fileName) => {
  if (!data) return

  let url = window.URL.createObjectURL(new Blob([data]))
  let link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  link.setAttribute('download', fileName)

  document.body.appendChild(link)
  link.click()

  document.body.removeChild(link)
}

/**
 * @description 全屏打开窗口
 * @param {Sting} url
 * @param {Sting} title
 * @param {Number} w
 * @param {Number} h
 */
export const openWindow = (url, title, w = 0, h = 0) => {
  // Fixes dual-screen position                            Most browsers       Firefox
  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top

  const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
  const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height

  w = +w === 0 ? width : w
  h = +h === 0 ? height : h

  const left = width / 2 - w / 2 + dualScreenLeft
  const top = height / 2 - h / 2 + dualScreenTop
  const newWindow = window.open(
    url,
    title,
    'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left
  )

  // Puts focus on the newWindow
  if (window.focus) {
    newWindow.focus()
  }
}
