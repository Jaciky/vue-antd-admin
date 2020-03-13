import authority from './authority/authority' // 按钮级别鉴权

const install = function(vm) {
  vm.directive('auth', authority)
}

export default { install }
