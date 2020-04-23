<template>
  <div>
    <div id="canvas"></div>
  </div>
</template>

<script>
import { Column } from '@antv/g2plot'

export default {
  name: 'Bar',
  data() {
    this.data = [
      {
        type: '家具家电',
        sales: 38
      },
      {
        type: '粮油副食',
        sales: 52
      },
      {
        type: '生鲜水果',
        sales: 61
      },
      {
        type: '美容洗护',
        sales: 145
      },
      {
        type: '母婴用品',
        sales: 48
      },
      {
        type: '进口食品',
        sales: 38
      },
      {
        type: '食品饮料',
        sales: 38
      },
      {
        type: '家庭清洁',
        sales: 38
      }
    ]
    return {}
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      const columnPlot = new Column('canvas', {
        title: {
          visible: true,
          position: 'left',
          text: '基础柱状图',
          style: {
            fontSize: 18,
            fill: 'black'
          }
        },
        // forceFit: true,
        data: this.data,
        padding: 'auto',
        xField: 'type',
        yField: 'sales',
        color: '#000000',
        // 全局化配置图表数据元信息
        meta: {
          type: {
            alias: '类别'
          },
          sales: {
            alias: '销售额(万)'
          }
        },
        description: {
          visible: true,
          position: 'left',
          text: '这是柱状图的描述内容',
          style: {
            fontSize: 12,
            fill: 'grey'
          }
        },
        xAxis: {
          visible: true,
          // 网格线
          grid: {
            visible: false,
            style: {}
          },
          // 坐标轴轴线
          line: {
            visible: false
          },
          // 坐标轴刻度
          tickLine: {
            visible: true
          },
          // 坐标轴标签
          label: {
            visible: true,
            autoRotate: true,
            autoHide: true
          },
          // 坐标轴标题
          title: {
            visible: true,
            offset: 0,
            text: '销售额(万)',
            style: {
              fontSize: 18
            }
          }
        },
        yAxis: {
          visible: true,
          grid: {
            visible: true
          },
          line: {
            visible: false
          },
          tickLine: {
            visible: false
          },
          label: {
            visible: true
          },
          title: {
            visible: true,
            offset: 0,
            text: '类别',
            style: {
              fontSize: 18
            }
          }
        },
        legend: {
          visible: true,
          position: 'top',
          flipPage: true
        }
      })
      columnPlot.render()
    }
  }
}
</script>

<style lang="less" scoped></style>
