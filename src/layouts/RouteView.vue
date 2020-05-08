<script>
export default {
  name: 'RouteView',
  props: {
    keepAlive: {
      type: Boolean,
      default: true
    }
  },
  render() {
    return this.$route.meta?.keepAlive ? (
      <keep-alive>
        <router-view />
      </keep-alive>
    ) : (
      <router-view />
    )
  }
}
</script>
