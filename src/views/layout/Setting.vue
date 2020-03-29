<template>
  <a-drawer title="设置" :visible="visible" @close="onClose">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<script>
// import config from '@/config'

export default {
  name: 'Setting',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    onClose() {
      this.$emit('update:visible', false)
      // this.visible = false
    }
  }
}
</script>

<style lang="less" scoped></style>
