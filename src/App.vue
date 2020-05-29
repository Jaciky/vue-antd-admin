<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { AppDeviceEnquire } from '@/mixins/app'

export default {
  mixins: [AppDeviceEnquire],
  data() {
    return {}
  },
  mounted() {}
}
</script>
