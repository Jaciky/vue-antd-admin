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
    <a-divider />
    <div class="msg-wrapper">
      <h3 class="title">Modal 对话框</h3>
      <p class="need-time">何时使用</p>
      <ul class="features">
        <li>可提供成功、警告和错误等反馈信息。</li>
        <li>顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。</li>
      </ul>
      <div class="btns">
        <a-button v-auth="[admin]" @click="success">Success</a-button>
        <a-button @click="error">Error</a-button>
        <a-button @click="warning">Warning</a-button>
      </div>
    </div>
    <a-divider />
    <div class="msg-wrapper">
      <h3 class="title">全局顶部提示</h3>
      <p class="need-time">何时使用</p>
      <ul class="features">
        <li>可提供成功、警告和错误等反馈信息。</li>
        <li>顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。</li>
      </ul>
      <div class="btns">
        <a-button @click="success">Success</a-button>
        <a-button @click="error">Error</a-button>
        <a-button @click="warning">Warning</a-button>
      </div>
    </div>
    <a-divider />
    <div class="msg-wrapper">
      <h3 class="title">通知提醒框</h3>
      <p class="need-time">何时使用</p>
      <ul class="features">
        <li>较为复杂的通知内容。</li>
        <li>带有交互的通知，给出用户下一步的行动点</li>
        <li>系统主动推送。</li>
      </ul>
      <div class="btns">
        <a-button @click="success">Success</a-button>
        <a-button @click="error">Error</a-button>
        <a-button @click="warning">Warning</a-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Feedback',
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
