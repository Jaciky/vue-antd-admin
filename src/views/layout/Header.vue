<template>
  <div class="navbar">
    <a-icon class="trigger" :type="sidebar ? 'menu-unfold' : 'menu-fold'" @click="$store.dispatch('app/toggleSideBar')" />

    <div class="user-info" style="">
      <a-dropdown>
        <span>
          <span>{{ $store.getters.userName }}&nbsp;</span>
          <a-icon type="down" />
        </span>
        <a-menu slot="overlay" @click="onClick">
          <a-menu-item key="1">登出</a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['sidebar'])
  },
  methods: {
    async onClick({ key }) {
      console.log(`Click on item ${key}`)
      await this.$store.dispatch('user/logout')
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  position: relative;
  height: 100%;

  .trigger {
    font-size: 18px;
    line-height: @header-height;
    padding: 0 8px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }

  .user-info {
    float: right;
    height: @header-height;
  }
}
</style>
