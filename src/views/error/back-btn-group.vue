<template>
  <div>
    <a-button type="link" @click="backHome">返回首页</a-button>
    <a-button type="link" @click="backPrev">返回上一页({{ second }}s)</a-button>
  </div>
</template>

<script>
import './error.less'
export default {
  name: 'BackBtnGroup',
  data() {
    return {
      second: 5,
      timer: null
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.second === 0) this.backPrev()
      else this.second--
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    backHome() {
      this.$router.replace({
        path: '/'
      })
    },
    backPrev() {
      this.$router.go(-1)
    }
  }
}
</script>
