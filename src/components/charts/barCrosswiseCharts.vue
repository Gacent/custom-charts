<template>
  <ECharts v-if="options" :id="id" ref="echarts" :options="options" />
</template>

<script>
import { fontSize, translateColor } from './utils'
import sameOptions from './mixins' // 共同的配置项
import jsonData from './json/testData'
export default {
  mixins: [sameOptions],
  data () {
    return {
      options: null,
      defaultOptions: null
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
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '15%',
          bottom: '15%',
          left: '15%',
          right: '10%'
        },
        // eslint-disable-next-line
        yAxis: {
          type: 'category',
          nameTextStyle: {
            color: 'rgba(93, 98, 120, 1)',
            fontSize: fontSize(0.12)
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.1)'
            }
          },
          axisLabel: {
            color: '#5D6278',
            fontSize: fontSize(0.12),
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.1)'
            }
          },
          axisTick: {
            show: false
          },
          data: jsonData.chartData1.map((item) => {
            return item.name
          })
        },
        // eslint-disable-next-line
        xAxis: {
          type: 'value',
          nameTextStyle: {
            color: 'rgba(93, 98, 120, 1)',
            fontSize: fontSize(0.12)
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: 'rgba(255,255,255,0.1)'
            }
          },
          axisLabel: {
            color: '#5D6278',
            fontSize: fontSize(0.12)
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: 'rgba(255,255,255,0.1)'
            }
          },
          axisTick: {
            show: false
          },
        },
        series: [{
          type: 'bar',
          data: jsonData.chartData1,
          barWidth: 10,
          itemStyle: {
            barBorderRadius: [10, 10, 10, 10],
            color: translateColor('rgba(25, 188, 156, 1)', 'rgba(54, 223, 203, 1)')
          }
        }]
      }
      this.merge()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
