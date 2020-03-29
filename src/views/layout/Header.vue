<template>
  <div class="header-navbar">
    <div class="header-navbar-left">
      <a-tooltip :title="sidebar ? '展开侧边栏' : '收起侧边栏'">
        <span class="header-navbar-trigger" @click="$store.dispatch('app/toggleSideBar')">
          <a-icon :type="sidebar ? 'menu-unfold' : 'menu-fold'" style="font-size:18px;" />
        </span>
      </a-tooltip>
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
            <a-menu-item key="2">
              <a-icon type="github" />
              Github
            </a-menu-item>
            <a-menu-item key="2">
              <a-icon type="code" />
              查看文档
            </a-menu-item>
            <a-menu-item key="3">
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
  }

  .header-navbar-right {
    float: right;

    .header-navbar-user-info {
      display: inline-block;
      height: @header-height;

      .header-navbar-user-name {
        margin-left: 12px;
      }
    }
  }
}
</style>
