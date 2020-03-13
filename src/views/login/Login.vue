<template>
  <div class="login">
    <a-card title="欢迎登录">
      <login-form @on-success-valid="handleLogin" />
    </a-card>
  </div>
</template>

<script>
import LoginForm from './components/login-form'

export default {
  components: {
    LoginForm
  },
  data() {
    return {
      loading: false,
      errorInfo: ''
    }
  },
  computed: {},
  watch: {
    $route: {
      handler({ query }) {
        if (query.redirect) {
          this.redirect = query.redirect
          delete query.redirect
        }
        this.query = query || {}
      },
      immediate: true
    }
  },
  methods: {
    async handleLogin() {
      this.loading = true
      try {
        await this.$store.dispatch('user/login')
        this.$router.push({ path: this.redirect || '/', query: this.query })
        // this.loading = false
        this.errorInfo = ''
      } catch (error) {
        this.errorInfo = error || ''
        this.loading = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 400px;
  .fxied-center();
  background-color: #cccccc;
}
</style>
