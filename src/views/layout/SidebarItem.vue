<template functional>
  <a-sub-menu :key="props.item.path">
    <span slot="title">
      <a-icon v-if="props.item.meta.icon" :type="props.item.meta.icon" />
      <span>{{ props.item.meta.title }}</span>
    </span>

    <template v-for="child in props.item.children">
      <template v-if="!child.hidden">
        <a-menu-item v-if="!child.children" :key="child.path">
          <a-icon v-if="child.meta.icon" :type="child.meta.icon" />
          <span>{{ child.meta.title }}</span>
        </a-menu-item>

        <sidebar-item v-else :key="child.path" :item="child" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  props: ['item']
}
</script>
