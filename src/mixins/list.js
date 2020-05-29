import { debounce } from '@/utils/util'

export default {
  data() {
    return {
      tableMaxHeight: 10000, // table初始高度
      tableData: [], // 列表数据
      tableLoading: false // 加载
    }
  },
  created() {
    this.handleSearch = debounce(this.handleSearch)
  },
  mounted() {},
  methods: {
    // 搜索列表
    handleSearch() {
      // ...
    },
    // 重置搜索域
    resetSearch(formName) {
      this.$refs[formName].resetFields()
      this.handleSearch()
    }
  }
}
