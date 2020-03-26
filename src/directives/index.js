import auth from './auth.js' // 按钮级别鉴权

const install = function(vm) {
  vm.directive('auth', auth)
}

export default { install }
