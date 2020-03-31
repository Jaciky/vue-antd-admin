<template>
  <transition name="fade-transform" mode="out-in">
    <keep-alive :include="$store.state.auth.cachedRoutes" :max="10">
      <router-view />
    </keep-alive>
  </transition>
</template>

<script>
export default {
  name: 'Content',
  computed: {}
}
</script>

<style lang="less" scoped></style>
