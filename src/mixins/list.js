export default {
  data() {
    return {
      page: {
        total: 1,
        page: 1,
        limit: 20
      },
      tableMaxHeight: 10000, // table初始高度
      tableData: [], // 列表数据
      tableLoading: false // 加载
    }
  },
  created() {
    this.setTableMaxHeight = this.$g.debounce(this.setTableMaxHeight, 200, false, true)
    this.handleSearch = this.$g.debounce(this.handleSearch)
  },
  mounted() {
    this.setTableMaxHeight()
    window.addEventListener('resize', this.setTableMaxHeight.bind(this))
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setTableMaxHeight)
  },
  methods: {
    /**
     * 动态设置table高度
     * 凡是涉及分页列表页，需保持页面结构和既定模版一致，即：头部 search-area 内容 content-list 底部 page-area
     */
    setTableMaxHeight() {
      this.$nextTick().then(() => {
        this.sEle = this.sEle || this.$el.querySelector('.search-area')
        this.pEle = this.pEle || this.$el.querySelector('.page-area')

        this.searchAreaHeight = this.sEle?.offsetHeight // 搜索域高度
        this.pageHeight = this.pageHeight || this.pEle?.offsetHeight // 分页高度

        if (this.searchAreaHeight && this.pageHeight) {
          this.tableMaxHeight = this.$el.offsetHeight - this.searchAreaHeight - this.pageHeight - 30 // 30 内容区域与搜索域及分页的上下间距15
        }
      })
    },
    /**
     * 获取列表数据
     */
    getList() {
      return new Promise(async (resolve, reject) => {
        this.tableLoading = true
        try {
          let deleKeys
          if (this._beforeGetList) {
            deleKeys = await this._beforeGetList()
          }

          const query = this.getQuery(this.search, deleKeys)
          const { data } = await this.getListApi(query)

          this._afterGetList && data && (await this._afterGetList(data))

          this.page.total = ~~data.total
          this.page.pages = ~~data.totalPage
          this.tableData = data.list || []

          this.tableLoading = false
          resolve()
        } catch (error) {
          error && (this.tableLoading = false)
          reject(error)
        }
      })
    },
    /**
     * 操作列表时，数据更新(delete)须刷新当前页数据时，有一种情况：即当处于最后一页时，数据被更新后页码减少，需要更新当前页码参数，否则会出现没有数据情.
     */
    checkPages(deles) {
      let { page, pages } = this.page
      if (page == pages) {
        deles == this.tableData.length && this.page.page--
      }
    },
    /**
     * 搜索列表
     */
    handleSearch() {
      this.page.page = 1
      this.getList()
    },
    /**
     * 重置搜索域
     * @param {string} formName 组件实例
     */
    async resetSearch(formName) {
      await new Promise(resolve => {
        this.dateRange && (this.dateRange = [])
        this.$refs[formName].resetFields()
        resolve()
      })
      this.handleSearch()
    },
    /**
     * 获取查询参数，包含分页信息 page - 当前页码和 limit - 每页显示条数
     * @param {object} more 增加的参数
     * @param {boolean} clean 是否移除空值参数(null undefined NaN ... )，默认为 true 移除
     */
    getQuery(more, deleKeys = []) {
      let { page, limit } = this.page
      let params = Object.assign({}, { pageNum: page, pageSize: limit }, more)

      for (let i in params) {
        if (!this.$g.isNumber(params[i]) && !params[i]) {
          delete params[i]
        }

        deleKeys.includes(i) && delete params[i]
      }

      return params
    }
  }
}
