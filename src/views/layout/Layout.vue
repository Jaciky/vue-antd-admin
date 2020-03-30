<template>
  <a-layout>
    <!-- 侧边导航 -->
    <a-layout-sider class="layout-sidebar" v-bind="siderOptiions">
      <Logo :collapse="layout.sidebar" />
      <sidebar :theme="navTheme" :collapsed="layout.sidebar" />
    </a-layout-sider>

    <a-layout>
      <!-- 顶部菜单 -->
      <a-layout-header :class="['layout-header', { 'header-fix': layout.headerFix }]" :style="layoutHeaderStyle">
        <Header />
      </a-layout-header>

      <!-- 页面主体 -->
      <a-layout-content :class="['layout-content', { 'fix-with-header': layout.headerFix }]" :style="layoutContentStyle">
        <Content />
      </a-layout-content>

      <!-- 页面底部 -->
      <a-layout-footer v-if="false" class="layout-footer" :style="layoutFooterStyle">
        <Footer />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Logo from './Logo'

export default {
  name: 'Layout',
  components: {
    Header,
    Content,
    Footer,
    Sidebar,
    Logo
  },
  computed: {
    layout() {
      return this.$store.state.layout
    },
    navTheme() {
      return 'dark'
    },
    siderOptiions() {
      let { sidebar, sidebarWidth, collapsedWidth } = this.layout
      return {
        collapsed: sidebar, // 收起状态
        width: sidebarWidth, // 宽度
        theme: this.navTheme, // 主题
        collapsible: true, // 可收起
        collapsedWidth: collapsedWidth, // 收起转态时宽度
        breakpoint: 'md', // 响应式触发边界
        trigger: null // 自定义 trigger，设置为 null 时隐藏 trigger
      }
    },
    layoutHeaderStyle() {
      let { sidebar, headerFix } = this.layout
      return {
        left: headerFix && sidebar ? '80px' : '256px'
      }
    },
    layoutContentStyle() {
      return {}
    },
    layoutFooterStyle() {
      return {}
    }
  }
}
</script>

<style lang="less" scoped>
.layout-sidebar {
  height: 100vh;
  width: @sider-width;
}
.layout-header {
  display: block;
  background: @header-color;
  padding: 0;
  height: @header-height;
  line-height: @header-height;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  transition: all 0.2s ease-in-out;
  z-index: 3;
}

.header-fix {
  position: fixed;
  top: 0;
  right: 0;
  // left: 256px;
  z-index: 11;
}

.layout-content {
  // height: calc(~'100vh - @{header-height}'); /* $header-height 导航栏高度  */
  background: #f0f2f5;
  overflow: auto;
}

.fix-with-header {
  padding-top: @header-height;
}

.layout-footer {
  text-align: center;
}
</style>
