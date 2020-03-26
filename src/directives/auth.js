import store from '@/store'

export default {
  inserted(el, binding) {
    const { value } = binding

    if (value && value instanceof Array) {
      const roles = store.getters?.roles
      const hasPermission = roles.some(role => value.includes(role))

      !hasPermission && el.parentNode?.removeChild(el)
    }
  }
}
