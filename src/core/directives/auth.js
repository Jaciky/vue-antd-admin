import store from '@/store'

/**
 *  权限指令
 */
export default {
  inserted(el, binding) {
    const { value } = binding
    const { permissions } = store.getters
    let hasPermission = false

    if (value) {
      if (value instanceof Array) {
        hasPermission = permissions.some(id => value.includes(id))
      } else {
        hasPermission = permissions.includes(value)
      }

      if (!hasPermission) {
        el.parentNode?.removeChild(el)
      }
    }
  }
}
