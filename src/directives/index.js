import auth from './auth.js' // 按钮级别鉴权

function install(vm) {
  vm.directive('auth', auth)
}

export default { install }
