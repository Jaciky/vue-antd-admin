<template>
  <div>
    <h3>全局顶部提示</h3>
    <p>顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。</p>
    <div>
      <a-button @click="success">Success</a-button>
      <a-button @click="error">Error</a-button>
      <a-button @click="warning">Warning</a-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Message',
  components: {},
  filters: {},
  mixins: [],
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  methods: {
    async success() {
      await this.$g.confirm(h => <div style="color:red;">Some descriptions</div>, { okType: 'danger' })
    },
    error() {
      this.$success('This is an error message')
    },
    warning() {
      this.$message.warning('This is a warning message')
    }
  }
}
</script>
<style lang="less" scoped></style>
