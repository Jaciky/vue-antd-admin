<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item label="任务名称" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-input v-decorator="['taskName', { rules: [{ required: true, message: '请输入任务名称' }] }]" />
    </a-form-item>
    <a-form-item label="开始时间" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-date-picker
        v-decorator="['startTime', { rules: [{ required: true, message: '请选择开始时间' }] }]"
        style="width: 100%;"
      />
    </a-form-item>
    <a-form-item label="任务负责人" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-select v-decorator="['owner', { rules: [{ required: true, message: '请选择开始时间' }] }]">
        <a-select-option :value="0">付晓晓</a-select-option>
        <a-select-option :value="1">周毛毛</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="产品描述" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-textarea v-decorator="['desc']"></a-textarea>
    </a-form-item>
  </a-form>
</template>

<script>

export default {
  name: 'TaskForm',
  props: {
    record: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 }
      },
      form: this.$form.createForm(this)
    }
  },
  mounted() {
    console.log('this.', this.record)
    if (this.record) {
      this.form.setFieldsValue(this.$g.pick(this.record, ['taskName']))
    }
  },
  methods: {
    onOk() {
      return new Promise(resolve => {
        resolve(true)
      })
    },
    onCancel() {
      return new Promise(resolve => {
        resolve(true)
      })
    },
    handleSubmit() {
      const {
        form: { validateFields }
      } = this
      this.visible = true
      validateFields((errors, values) => {
        if (!errors) {
          console.log('values', values)
        }
      })
    }
  }
}
</script>
