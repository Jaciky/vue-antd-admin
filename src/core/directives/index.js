import auth from './auth'
import drag from './drag'

const install = function (Vue) {
  Vue.directive('auth', auth)
  Vue.directive('drag', drag)
}

export default { install }
