<template>
  <ECharts v-if="options" :id="id" ref="echarts" :options="options" />
</template>

<script>
import { fontSize } from './utils'
import sameOptions from './mixins' // 共同的配置项
import jsonData from './json/testData'
export default {
  name: 'lineCharts',
  mixins: [sameOptions],
  data () {
    return {
      color: ['rgba(26, 116, 218, 1)', 'rgba(80, 194, 254, 1)', 'rgba(25, 188, 156, 1)', 'rgba(251, 178, 65, 1)', 'rgba(222, 76, 105, 1)', 'rgba(228, 214, 160, 1)']
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  methods: {
    initChart () {
      this.defaultOptions = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '15%',
          bottom: '15%',
          left: '15%',
          right: '10%'
        },
        // eslint-disable-next-line
        xAxis: {
          type: 'category',
          axisLabel: {
            color: 'rgba(93, 98, 120, 1)',
            fontSize: fontSize(0.12)
          },
          nameTextStyle: {
            color: 'rgba(93, 98, 120, 1)',
            fontSize: fontSize(0.12)
          },
          data: jsonData.chartData1.map((item) => {
            return item.name
          }),
          boundaryGap: false
        },
        // eslint-disable-next-line
        yAxis: {
          type: 'value',
          axisLabel: {
            color: 'rgba(93, 98, 120, 1)',
            fontSize: fontSize(0.12)
          },
          nameTextStyle: {
            color: 'rgba(93, 98, 120, 1)',
            fontSize: fontSize(0.12)
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, .1)'
            }
          }
        },
        series: [{
          type: 'line',
          data: jsonData.chartData1,
          smooth: true,
          itemStyle: {
            color: this.isDiffColor ? (params) => {
              return this.color[params.dataIndex % 6]
            } : 'rgba(80, 254, 202, 1)'
          }
        }]
      }
      // 深度合并选项
      this.merge()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
