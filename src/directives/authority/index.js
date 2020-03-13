import authority from './authority'

const install = function(Vue) {
  Vue.directive('authority', authority)
}

export default { install }
