<template>
  <router-link class="layout-header-logo" :class="{ 'header-logo-stick': layout.headerStick }" :style="logoStyle" to="/">
    <img v-if="logo" class="logo-image" :src="logo" />
    <span v-if="!layout.sidebar || layout.headerStick" class="logo-title">{{ title }}</span>
  </router-link>
</template>

<script>
import config from '@/config'

export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: config.title,
      logo: require('@/assets/images/logo.png')
    }
  },
  computed: {
    layout() {
      return this.$store.state.layout
    },
    logoStyle() {
      let { sidebarWidth, headerStick, sidebar, collapsedWidth } = this.layout
      return {
        width: headerStick ? `${sidebarWidth}px` : sidebar ? `${collapsedWidth}px` : `${sidebarWidth}px`
      }
    }
  }
}
</script>

<style lang="less" scoped>
.layout-header-logo {
  display: inline-block;
  height: @header-height;
  width: @sider-width;
  line-height: @header-height;
  color: #fff;
  text-align: center;
  background: transparent;
  cursor: pointer;
  transition: color 0.2s ease;

  * {
    vertical-align: middle;
  }

  .logo-image {
    width: 32px;
    height: 32px;
  }

  .logo-title {
    font-size: 24px;
    // font-weight: bold;
    margin-left: 10px;
  }
}

.header-logo-stick {
  color: #333;
}
</style>
