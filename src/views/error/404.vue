<template>
  <div class="error-container">
    <div class="error-404">
      <img src="@/assets/images/404-bg.png" alt="404" class="main-404-bg">
      <p class="error-404-content">报告！404~~您的页面飞走了~</p>
      <back-btn-group class="back-btn-group" />
    </div>
  </div>
</template>

<script>
import './error.less'
import backBtnGroup from './back-btn-group.vue'
export default {
  name: 'Error404',
  components: {
    backBtnGroup
  },
  data() {
    return {}
  }
}
</script>
