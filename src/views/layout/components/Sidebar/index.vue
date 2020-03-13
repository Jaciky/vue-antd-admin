<template>
  <div>
    <!-- <logo v-if="true" :collapse="sidebar" /> -->

    <a-menu theme="light" mode="inline" :selected-keys="[activeMenu]" @click="routerGo">
      <template v-for="route in routes">
        <sidebar-item v-if="!route.hidden" :key="route.path" :item="route" />
      </template>
    </a-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Logo from './Logo'
import SidebarItem from './SidebarItem'

export default {
  name: 'Sidebar',
  components: {
    SidebarItem
    // Logo
  },
  computed: {
    ...mapGetters(['routes', 'sidebar']),
    activeMenu() {
      const { meta, path } = this.$route
      // if set path, the sidebar will highlight the path you set
      return meta?.activeMenu ?? path
    }
  },
  created() {},
  methods: {
    routerGo(route) {
      console.log(route)
    }
  }
}
</script>
