<template>
  <div class="documentation-content">
    <a class="document-btn" target="_blank" href="https://jaciky.github.io/vue-antd-admin-site/">文档</a>
    <a class="document-btn" target="_blank" href="https://github.com/Jaciky/vue-antd-admin/">Github</a>
  </div>
</template>
<script>
export default {
  name: 'Documentation',
  components: {},
  filters: {},
  mixins: [],
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  methods: {}
}
</script>
<style lang="less" scoped>
.documentation-content {
  margin: 50px;
  overflow: hidden;
  .document-btn {
    float: left;
    margin-left: 50px;
    display: block;
    cursor: pointer;
    background: black;
    color: white;
    height: 60px;
    width: 200px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
    &:hover {
      color: @primary-color;
    }
  }
}
</style>
