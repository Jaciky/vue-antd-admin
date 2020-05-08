<template>
  <a-tooltip>
    <template slot="title">
      <span>{{ title }}</span>
    </template>
    <slot>
      <a-icon type="question-circle" style="color: rgba(0, 0, 0, 0.4);" />
    </slot>
  </a-tooltip>
</template>
<script>
export default {
  name: 'Help',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  computed: {}
}
</script>
