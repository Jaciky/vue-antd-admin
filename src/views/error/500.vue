<template>
  <error-content code="500" desc="Oh~~鬼知道服务器经历了什么~" :src="src" />
</template>

<script>
import error500 from '@/assets/images/500-bg.png'
import errorContent from './error-content.vue'
export default {
  name: 'Error500',
  components: {
    errorContent
  },
  data() {
    return {
      src: error500
    }
  }
}
</script>
