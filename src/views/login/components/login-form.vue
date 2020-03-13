<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item>
      <a-input v-decorator="['userName', { rules: [{ required: true, message: 'Please input your username!' }] }]" placeholder="Username">
        <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>

    <a-form-item>
      <a-input v-decorator="['password', { rules: [{ required: true, message: 'Please input your Password!' }] }]" type="password" placeholder="Password">
        <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>

    <a-form-item>
      <a-button type="primary" html-type="submit">
        登录
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script>
export default {
  name: 'LoginForm',
  props: {},
  data() {
    return {
      form: this.$form.createForm(this, { name: 'horizontal_login' })
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values)
          this.$emit('on-success-valid', values)
        }
      })
    }
  }
}
</script>
<style lang="less" scoped></style>
