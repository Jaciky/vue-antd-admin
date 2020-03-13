<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="$store.state.auth.cachedRoutes" :max="10">
        <router-view />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {}
}
</script>

<style lang="less" scoped>
.app-main {
  position: relative;
  padding: 20px;
  background: #fff;
}
</style>
