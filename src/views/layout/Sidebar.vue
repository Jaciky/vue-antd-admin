<template>
  <a-menu class="layout-sidebar-menu a-scrollbar-hide" :theme="theme" mode="inline" :selected-keys="[activeMenu]" @click="routerGo">
    <template v-for="route in menus">
      <a-menu-item v-if="!route.children" :key="route.path">
        <a-icon v-if="route.meta.icon" :type="route.meta.icon" />
        <span>{{ route.meta.title }}</span>
      </a-menu-item>

      <sidebar-item v-else :key="route.path" :item="route" />
    </template>
  </a-menu>
</template>

<script>
import SidebarItem from './SidebarItem'

export default {
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  props: {
    theme: {
      type: String,
      default: 'dark'
    },
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    menus() {
      const munus = this.$store.getters.routes
      return this.filterRoutes(munus)
    },
    activeMenu() {
      const { meta, path } = this.$route
      // if set path, the sidebar will highlight the path you set
      return meta?.activeMenu ?? path
    }
  },
  created() {
    console.log(this.menus)
  },
  methods: {
    routerGo({ key }) {
      console.log(key)
      this.$router.push({ path: key })
    },
    filterRoutes(routes = []) {
      const res = []

      routes.forEach(item => {
        if (!item.hidden) {
          const showingChildren = item.children?.filter(item => !item.hidden)

          if (showingChildren?.length == 0) {
            delete item.children
            res.push(item)
          } else if (showingChildren?.length == 1) {
            !item.alwaysShow ? res.push(showingChildren[0]) : res.push(item)
          } else {
            res.push(item)
            this.filterRoutes(item.children)
          }
        }
      })

      return res
    }
  }
}
</script>

<style lang="less" scoped>
.layout-sidebar-menu {
  height: calc(~'100vh - @{header-height}');
  overflow-y: auto;
}
</style>
