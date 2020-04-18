<template>
  <div ref="tagsNav" class="layout-tags-nav">
    <div class="tags-nav-main">
      <a-tabs v-model="activeKey" type="editable-card" hide-add :animated="false" size="small" :tab-bar-gutter="10" @edit="onEdit">
        <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable"></a-tab-pane>
      </a-tabs>

      <a-dropdown placement="bottomCenter">
        <div class="tags-close-btn">
          <a-icon type="down" />
        </div>
        <a-menu slot="overlay" @click="onClick">
          <a-menu-item key="1">
            <a-icon type="arrow-left" />
            关闭左侧
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="arrow-right" />
            关闭右侧
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="close" />
            关闭其它
          </a-menu-item>
          <a-menu-item key="4">
            <a-icon theme="filled" type="close-circle" />
            关闭全部
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
// import { getTagsFormSessionStorage } from '@/libs/utils'

export default {
  name: 'TagsNav',
  data() {
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
      { title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false }
    ]
    return {
      activeKey: panes[0].key,
      panes,
      newTabIndex: 0
    }
  },
  computed: {
    ...mapGetters(['tagsList']),
    layout() {
      return this.$store.state.layout
    }
  },
  watch: {
    $route() {
      // this.addTagsNav()
    }
  },
  created() {
    // this.getHomePage(this.$router.options.routes)
    this.handleScroll = this.$g.debounce(this.handleScroll, 20, false)
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapMutations('tagsNav', ['ADD_TAG', 'SET_HOME_PAGE_ROUTE', 'INIT_TAG']),
    ...mapActions('tagsNav', ['delCurTagAct', 'delAllAct', 'delOthersTagAct']),
    onClick({ key }) {
      console.log(key)
    },
    callback(key) {
      console.log(key)
    },
    onEdit(targetKey, action) {
      this[action](targetKey)
    },
    add() {
      const panes = this.panes
      const activeKey = `newTab${this.newTabIndex++}`
      panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey })
      this.panes = panes
      this.activeKey = activeKey
    },
    remove(targetKey) {
      let activeKey = this.activeKey
      let lastIndex
      this.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1
        }
      })
      const panes = this.panes.filter(pane => pane.key !== targetKey)
      if (panes.length && activeKey === targetKey) {
        if (lastIndex >= 0) {
          activeKey = panes[lastIndex].key
        } else {
          activeKey = panes[0].key
        }
      }
      this.panes = panes
      this.activeKey = activeKey
    },
    handleScroll() {
      let { headerHeight, tagsNavFix, headerFix, tagsNavShow } = this.layout

      if (!headerFix && tagsNavFix && tagsNavShow) {
        let scrollTop = document.documentElement?.scrollTop || document.body.scrollTop
        let top = headerHeight - scrollTop
        if (top <= 0) {
          this.$refs.tagsNav.style.top = '0'
        } else {
          this.$refs.tagsNav.style.top = top + 'px'
        }
        console.log(top)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.layout-tags-nav {
  width: 100%;
  background-color: #f0f2f5;
  transition: all 0.2s ease-in-out;
}

.tags-nav-main {
  display: flex;
  padding: 6px 0;
  margin: 0 12px 0 12px;

  /deep/.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-nav-container {
    height: auto;
  }

  /deep/.ant-tabs-bar {
    margin: 0;
    border-bottom: none;
  }

  /deep/.ant-tabs-tab-prev {
    box-shadow: 5px 0 10px #fff;
  }

  /deep/.ant-tabs-tab-next {
    box-shadow: -5px 0 10px #fff;
  }

  /deep/.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
    height: 32px;
    line-height: 1.5;
    background: #fff;
    border: none;
    border-radius: 3px;
    margin-right: 6px;
    color: #808695;
    padding: 5px 16px 4px;
    transition: all 0.3s ease-in-out;
  }

  /deep/.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active {
    color: @primary-color;
  }
  /deep/.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab .ant-tabs-close-x {
    color: #999;
    &:hover {
      color: #333;
    }
  }

  .ant-tabs {
    box-flex: 1;
    flex-grow: 1;
    flex-shrink: 1;
  }

  .tags-close-btn {
    box-flex: 0;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 18px;
    color: #515a6e;
    text-align: center;
    width: 32px;
    height: 32px;
    line-height: 32px;
    background: #fff;
    border-radius: 2px;
    cursor: pointer;
  }
}
</style>
