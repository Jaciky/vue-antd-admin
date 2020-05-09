import deboun from 'lodash/debounce'

// 节流
export const debounce = (f, t = 1000, immediate = true) => {
  if (typeof f !== 'function') return
  return deboun(f, t, { leading: immediate, trailing: !immediate })
}

export { default as cloneDeep } from 'lodash/cloneDeep'
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

export const sex = [
  { label: '男', value: 1 },
  { label: '女', value: 0 }
]

export const yn = [
  { label: '是', value: '1' },
  { label: '否', value: '0' }
]

// 对外公开客服电话
export const telephone = '400-1877-888'

// 全局图表一致性色彩表现
export const colors = ['#01A1AC', '#739AFF', '#61a0a8', '#d48265', '#91c7ae']
