<template>
  <div class="header-navbar">
    <div class="header-navbar-left">
      <span class="header-navbar-trigger" @click="$store.dispatch('layout/toggleSideBar')">
        <a-icon :type="sidebar ? 'menu-unfold' : 'menu-fold'" />
      </span>

      <a-tooltip title="刷新当前页">
        <span class="header-navbar-trigger">
          <a-icon type="redo" />
        </span>
      </a-tooltip>

      <a-breadcrumb>
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">表单页面</a></a-breadcrumb-item>
        <a-breadcrumb-item><a href="">动态表单</a></a-breadcrumb-item>
      </a-breadcrumb>
    </div>

    <div class="header-navbar-right">
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

      <span class="header-navbar-trigger">
        <a-dropdown placement="bottomCenter">
          <span class="header-navbar-user-info">
            <a-avatar class="header-navbar-user-avator" :size="24" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <span class="header-navbar-user-name">{{ $store.getters.userName }}</span>
          </span>
          <a-menu slot="overlay" @click="onClick">
            <a-menu-item key="1">
              <a-icon type="smile" />
              个人中心
            </a-menu-item>

            <a-menu-item key="2">
              <a-icon type="setting" />
              设置
            </a-menu-item>
            <a-menu-item key="3">
              <a-icon type="github" />
              Github
            </a-menu-item>
            <a-menu-item key="4">
              <a-icon type="code" />
              查看文档
            </a-menu-item>
            <a-menu-item key="5">
              <a-icon type="logout" />
              退出
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </span>

      <span class="header-navbar-trigger" @click="showDrawer">
        <a-icon type="more" />
      </span>
    </div>

    <Setting class="header-navbar-trigger" :visible.sync="visible" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Setting from './Setting'

export default {
  components: { Setting },
  data() {
    return {
      visible: false
    }
  },
  computed: {
    ...mapGetters(['sidebar'])
  },
  methods: {
    async onClick({ key }) {
      console.log(`Click on item ${key}`)
      await this.$store.dispatch('user/logout')
      this.$router.push({ path: '/login' })
    },
    showDrawer() {
      this.visible = true
    }
  }
}
</script>

<style lang="less" scoped>
.header-navbar {
  position: relative;
  height: @header-height;

  .header-navbar-left,
  .header-navbar-right {
    height: @header-height;
  }

  .anticon {
    font-size: 18px;
    font-weight: 400;
    line-height: 1;
    vertical-align: middle;
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

  .header-navbar-left {
    float: left;

    .ant-breadcrumb {
      display: inline-block;
      line-height: @header-height;
    }
  }

  .header-navbar-right {
    float: right;

    .header-navbar-user-info {
      display: inline-block;
      line-height: @header-height;

      .header-navbar-user-name {
        margin-left: 12px;
      }
    }
  }
}
</style>
