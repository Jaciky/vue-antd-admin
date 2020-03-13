<template>
  <a-menu-item v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow" :key="onlyOneChild.path">
    <a-icon :type="onlyOneChild.meta.icon" />
    <span>{{ onlyOneChild.meta.title }}</span>
  </a-menu-item>

  <!-- 多级菜单 递归 -->
  <!-- <a-sub-menu v-else :key="item.path">
    <a-icon :type="item.meta.icon" />
    <span>{{ item.meta.title }}</span>
    <sidebar-item v-for="child in item.children" :key="child.path" :item="child" />
  </a-sub-menu> -->
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    // route object
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    this.onlyOneChild = null
    return {}
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    }
  }
}
</script>
