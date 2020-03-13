<template>
  <a-menu :theme="theme" mode="inline" :selected-keys="[activeMenu]" @click="routerGo">
    <template v-for="route in $store.getters.routes">
      <template v-if="!route.hidden">
        <a-menu-item v-if="!route.children" :key="route.path">
          <a-icon v-if="route.meta.icon" :type="route.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>

        <sidebar-item v-else :key="route.path" :item="route" />
      </template>
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
    activeMenu() {
      const { meta, path } = this.$route
      // if set path, the sidebar will highlight the path you set
      return meta?.activeMenu ?? path
    }
  },
  created() {
    console.log(this.$store.getters.routes)
  },
  methods: {
    routerGo({ key }) {
      console.log(key)
      this.$router.push({ path: key })
    }
  }
}
</script>
