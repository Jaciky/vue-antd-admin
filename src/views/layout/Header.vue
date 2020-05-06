<template>
  <div class="header-navbar">
    <Logo v-if="headerStick" />
    <span
      v-if="sidebarFoldTrigger"
      class="header-navbar-trigger"
      @click="$store.dispatch('layout/toggleSideBar')"
    >
      <a-icon :type="sidebar ? 'menu-unfold' : 'menu-fold'" />
    </span>

    <a-tooltip v-if="reloadTrigger" title="刷新当前页">
      <span class="header-navbar-trigger">
        <a-icon type="redo" />
      </span>
    </a-tooltip>

    <a-breadcrumb v-if="breadcrumbShow">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>
        <a href>表单页面</a>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <a href>动态表单</a>
      </a-breadcrumb-item>
    </a-breadcrumb>

    <div class="header-navbar-float-right">
      <a-tooltip title="全屏">
        <span class="header-navbar-trigger">
          <a-icon type="fullscreen" />
        </span>
      </a-tooltip>

      <a-tooltip title="调试">
        <span class="header-navbar-trigger">
          <a-icon type="bug" />
        </span>
      </a-tooltip>

      <span class="header-navbar-trigger">
        <a-badge dot>
          <a-icon type="mail" />
        </a-badge>
      </span>

      <a-dropdown placement="bottomCenter">
        <span class="header-navbar-trigger">
          <a-avatar class="header-navbar-user-avator" :size="24">L</a-avatar>
          <span class="header-navbar-user-name">{{ $store.getters.userName }}</span>
        </span>
        <a-menu slot="overlay" @click="onClick">
          <a-menu-item key="1">
            <router-link to="/setting/user">
              <a-icon type="smile" />个人中心
            </router-link>
          </a-menu-item>

          <a-menu-item key="2">
            <router-link to="/setting/account">
              <a-icon type="setting" />设置
            </router-link>
          </a-menu-item>

          <a-menu-item key="3">
            <a href="https://github.com/Jaciky/vue-antd-admin/tree/master" target="_blank">
              <a-icon type="github" />Github
            </a>
          </a-menu-item>

          <a-menu-item key="4">
            <a href="https://jaciky.github.io/vue-antd-admin-site/guide/" target="_blank">
              <a-icon type="code" />查看文档
            </a>
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item key="5">
            <a-icon type="logout" />退出
          </a-menu-item>
        </a-menu>
      </a-dropdown>

      <span class="header-navbar-trigger" @click="showDrawer">
        <a-icon type="more" />
      </span>
    </div>

    <Setting class="header-navbar-trigger" :visible.sync="visible" />
    <!-- Setting Drawer (show in development mode) -->
    <setting-drawer v-if="!production"></setting-drawer>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import Setting from './Setting'
import SettingDrawer from '@/components/SettingDrawer'
import Logo from './Logo'

export default {
  components: { Setting, SettingDrawer, Logo },
  data() {
    return {
      visible: false
    }
  },
  computed: {
    ...mapState('layout', ['sidebarFoldTrigger', 'headerStick', 'reloadTrigger', 'breadcrumbShow']),
    ...mapGetters(['sidebar'])
  },
  methods: {
    async onClick({ key }) {
      console.log(`Click on item ${key}`)

      if (key == 5) {
        await this.$store.dispatch('user/logout')
        this.$router.push({ path: '/login' })
      }
    },
    showDrawer() {
      this.visible = true
    }
  }
}
</script>

<style lang="less" scoped>
.header-navbar {
  height: @header-height;
  line-height: @header-height;

  .anticon {
    // font-size: 18px;
    line-height: 1;
  }

  .header-navbar-trigger {
    display: inline-block;
    height: @header-height;
    padding: 0 12px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #f8f8f9;
    }
  }

  .ant-breadcrumb {
    display: inline-block;
    padding-left: 12px;
  }

  .header-navbar-float-right {
    height: @header-height;
    float: right;

    .header-navbar-user-name {
      margin-left: 12px;
    }
  }
}
</style>
