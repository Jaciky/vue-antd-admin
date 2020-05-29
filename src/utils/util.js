// lodash api
import deboun from 'lodash/debounce'
export { default as cloneDeep } from 'lodash/cloneDeep'
export { default as isNumber } from 'lodash/isNumber'
export { default as isEqual } from 'lodash/isEqual'
export { default as forIn } from 'lodash/forIn'
export { default as pick } from 'lodash/pick'
export { default as pickBy } from 'lodash/pickBy'
export { default as get } from 'lodash/get'
export { default as find } from 'lodash/find'
export { default as uniq } from 'lodash/uniq'
export { default as sortBy } from 'lodash/sortBy'
export { default as sumBy } from 'lodash/sumBy'
export { default as random } from 'lodash/random'

// 节流
export function debounce(f, t = 1000, immediate = true) {
  if (typeof f !== 'function') return
  return deboun(f, t, { leading: immediate, trailing: !immediate })
}

export function timeFix() {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好'
}

export function welcome() {
  const arr = ['休息一会儿吧', '准备吃什么呢?', '要不要打一把 DOTA', '我猜你可能累了']
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

/**
 * 触发 window.resize
 */
export function triggerWindowResizeEvent() {
  const event = document.createEvent('HTMLEvents')
  event.initEvent('resize', true, true)
  event.eventType = 'message'
  window.dispatchEvent(event)
}

export function handleScrollHeader(callback) {
  let timer = 0

  let beforeScrollTop = window.pageYOffset
  callback = callback || function () {}
  window.addEventListener(
    'scroll',
    event => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        let direction = 'up'
        const afterScrollTop = window.pageYOffset
        const delta = afterScrollTop - beforeScrollTop
        if (delta === 0) {
          return false
        }
        direction = delta > 0 ? 'down' : 'up'
        callback(direction)
        beforeScrollTop = afterScrollTop
      }, 50)
    },
    false
  )
}

export function isIE() {
  const bw = window.navigator.userAgent
  const compare = s => bw.indexOf(s) >= 0
  const ie11 = (() => 'ActiveXObject' in window)()
  return compare('MSIE') || ie11
}

/**
 * Remove loading animate
 * @param id parent element id or class
 * @param timeout
 */
export function removeLoadingAnimate(id = '', timeout = 1500) {
  if (id === '') {
    return
  }
  setTimeout(() => {
    document.body.removeChild(document.getElementById(id))
  }, timeout)
}
