<template>
  <div>角色列表</div>
</template>
<script>
export default {
  name: 'Roles',
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
      console.log('value: ', value);
      console.log(`selected ${value}`)
    }
  }
}
</script>
<style lang="scss" scoped></style>
