<template>
  <a-layout>
    <!-- 侧边导航 -->
    <a-layout-sider class="layout-sidebar" v-bind="siderOptiions">
      <!-- <Logo /> -->
      <sidebar :theme="navTheme" :collapsed="$store.state.app.sidebar" />
    </a-layout-sider>

    <a-layout>
      <!-- 顶部菜单 -->
      <a-layout-header class="layout-header">
        <Header />
      </a-layout-header>

      <!-- 页面主体 -->
      <a-layout-content class="layout-content">
        <Content />
      </a-layout-content>

      <!-- 页面底部 -->
      <a-layout-footer v-if="false" class="layout-footer">
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
// import Logo from './logo'

export default {
  name: 'Layout',
  components: {
    Header,
    Content,
    Footer,
    Sidebar
    // Logo
  },
  computed: {
    navTheme() {
      return 'dark'
    },
    siderOptiions() {
      return {
        collapsed: this.$store.state.app.sidebar, // 收起状态
        width: 200, // 宽度
        theme: this.navTheme, // 主题
        collapsible: true, // 可收起
        collapsedWidth: 80, // 收起转态时宽度
        breakpoint: 'md', // 响应式触发边界
        trigger: null // 自定义 trigger，设置为 null 时隐藏 trigger
      }
    }
  }
}
</script>

<style lang="less" scoped>
.layout-sidebar {
}
.layout-header {
  background: @header-color;
  padding: 0;
  height: @header-height;
  line-height: @header-height;
}
.layout-content {
  height: calc(~'100vh - @{header-height}'); /* $header-height 导航栏高度  */
  padding: 24px 16px;
  background: #f0f2f5;
  overflow: auto;
}
.layout-footer {
  text-align: center;
}
</style>
