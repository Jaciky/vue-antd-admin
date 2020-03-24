<template>
  <div>
    行内编辑table
  </div>
</template>
<script>
export default {
  name: 'Select',
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
    handleChange(value) {
      console.log(`selected ${value}`)
    }
  }
}
</script>
<style lang="less" scoped></style>
