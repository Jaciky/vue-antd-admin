<script>
import store from '@/store'

export default {
  functional: true,
  props: {
    authority: {
      type: [Array, Number],
      required: true
    }
  },
  render(h, context) {
    const { permissions } = store.getters
    const {
      props: { authority },
      scopedSlots
    } = context
    let hasPermission = false

    if (authority instanceof Array) {
      hasPermission = permissions.some(id => authority.includes(id))
    } else {
      hasPermission = permissions.includes(authority)
    }

    return hasPermission ? scopedSlots.default() : null
  }
}
</script>
