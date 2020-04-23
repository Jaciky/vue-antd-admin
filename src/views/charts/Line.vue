<template>
  <div>
    <div id="canvas"></div>
  </div>
</template>

<script>
import { Line } from '@antv/g2plot'

export default {
  name: 'Line',
  components: {},
  filters: {},
  mixins: [],
  data() {
    this.data = [
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4.9 },
      { year: '1996', value: 6 },
      { year: '1997', value: 7 },
      { year: '1998', value: 9 },
      { year: '1999', value: 13 }
    ]
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      const linePlot = new Line('canvas', {
        title: {
          visible: true,
          text: '这是一个基础折线图'
        },
        description: {
          visible: true,
          text: '折线图用于表示连续时间跨度内的数据，它通常用于显示某变量随时间的变化模式。'
        },
        data: this.data,
        xField: 'year',
        yField: 'value',
        color: '#FE740C', // 折线颜色
        point: {
          visible: true,
          size: 5,
          color: 'white',
          style: {
            stroke: '#FE740C',
            lineWidth: 2,
            fillOpacity: 0.6
          }
        },
        yAxis: {
          formatter: v => {
            return v + 'k'
          }
        },
        label: {
          visible: true
        }
      })
      linePlot.render()
    }
  }
}
</script>

<style lang="less" scoped></style>
