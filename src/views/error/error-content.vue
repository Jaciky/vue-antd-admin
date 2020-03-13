<template>
  <div class="error-container">
    <div>
      <img :src="src" alt="401" class="main-bg" />
      <img src="@/assets/images/401-person.png" alt="401" class="main-person" />
      <div class="error-card">
        <p>
          <img src="@/assets/images/logo.png" alt="logo" />
          <span>筛查管理系统</span>
        </p>
        <p class="error-content">{{ desc }}</p>
      </div>
      <back-btn-group class="back-btn-group" />
    </div>
  </div>
</template>

<script>
import './error.less'
import backBtnGroup from './back-btn-group.vue'
export default {
  name: 'ErrorContent',
  components: {
    backBtnGroup
  },
  props: {
    code: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    }
  }
}
</script>
