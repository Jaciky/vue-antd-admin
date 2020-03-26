<script>
import store from '@/store'

export default {
  functional: true,
  props: {
    authority: {
      type: Array,
      required: true
    }
  },
  render(h, context) {
    const roles = store.getters?.roles
    const { props, scopedSlots } = context

    const hasPermission = roles.some(role => props.authority.includes(role))

    return hasPermission ? scopedSlots.default() : null
  }
}
</script>
