<template>
  <div>
    <div class="msg-wrapper">
      <h3 class="title">Alert 警告提示</h3>
      <p class="need-time">何时使用</p>
      <ul class="features">
        <li>当某个页面需要向用户显示警告的信息时。</li>
        <li>非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。</li>
      </ul>
      <a-alert message="Success Text" type="success" />
      <a-alert message="Very long warning text warning text text text text text text text" banner closable />
      <a-alert message="Success Tips" description="Detailed description and advices about successful copywriting." type="success" show-icon />
      <a-alert message="Error Text" type="error" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'FeedbackModal',
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
<style lang="less" scoped>
.msg-wrapper {
  margin-bottom: 20px;
  .title {
    line-height: 40px;
    font-weight: bold;
  }
  .need-time {
    color: #52c41a;
  }
  .features {
    li {
      line-height: 30px;
    }
  }
  .btns {
    margin-top: 20px;
    /deep/ .ant-btn {
      margin-right: 10px;
    }
  }

  /deep/ .ant-alert {
    margin-bottom: 20px;
  }
}
</style>
