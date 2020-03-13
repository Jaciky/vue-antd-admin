<template>
  <error-content code="401" desc="Oh~~您没有浏览这个页面的权限~" :src="src" />
</template>

<script>
import error401 from '@/assets/images/401-bg.png'
import errorContent from './error-content.vue'
export default {
  name: 'Error401',
  components: {
    errorContent
  },
  data() {
    return {
      src: error401
    }
  }
}
</script>
