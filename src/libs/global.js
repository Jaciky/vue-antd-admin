import deboc from 'lodash/debounce'

// 节流
export const debounce = (f, t = 1000, le = true, tr = false) => {
  if (typeof f !== 'function') return
  return deboc(f, t, { leading: le, trailing: tr })
}

export { default as once } from 'lodash/once' // _.once(func) 创建一个只能调用 func 一次的函数。 重复调用返回第一次调用的结果。
export { default as delay } from 'lodash/delay'

export { default as cloneDeep } from 'lodash/cloneDeep'
export { default as isEmpty } from 'lodash/isEmpty' // _.isEmpty(value) 检查 value 是否为一个空对象，集合，映射或者set。
export { default as keys } from 'lodash/keys'
export { default as isEqual } from 'lodash/isEqual'
export { default as forIn } from 'lodash/forIn'
export { default as pickBy } from 'lodash/pickBy'

export { default as find } from 'lodash/find'
export { default as each } from 'lodash/forEach'
export { default as every } from 'lodash/every'
export { default as some } from 'lodash/some'
export { default as map } from 'lodash/map'
export { default as sortBy } from 'lodash/sortBy'
export { default as uniq } from 'lodash/uniq'
export { default as sumBy } from 'lodash/sumBy'

export { default as random } from 'lodash/random'
