<template>
  <ECharts v-if="options" :id="id" ref="echarts" :options="options" :re-option="endOptions" />
</template>

<script>
import { fontSize, translateColor, transformNumber } from './utils'
import sameOptions from './mixins' // 共同的配置项
export default {
  mixins: [sameOptions],
  methods: {
    setOptions() {
      if (!this.isHasDatas) return
      const series = []
      const xName = []
      this.endDatas.map((items, index) => {
        items.map((nameItem) => {
          if (xName.indexOf(nameItem.name) <= -1) {
            xName.push(nameItem.name)
          }
        })
        series.push({
          type: 'bar',
          name: this.legendDatas ? this.legendDatas[index] : '',
          data: items,
          barWidth: fontSize(0.10),
          itemStyle: {
            barBorderRadius: [10, 10, 10, 10],
            color: translateColor('rgba(25, 188, 156, 1)', 'rgba(54, 223, 203, 1)')
          }
        })
      })
      this.defaultOptions = {
        title: {
          left: 'center',
          top: fontSize(0.2),
          textStyle: {
            color: '#fff',
            fontSize: fontSize(0.18),
            fontWeight: 500
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '15%',
          bottom: '12%',
          left: '2%',
          right: '10%',
          containLabel: true
        },
        legend: {
          show: false,
          top: '0',
          right: fontSize(0.5),
          itemWidth: fontSize(0.12),
          itemHeight: fontSize(0.12),
          itemGap: fontSize(0.20),
          textStyle: {
            color: '#FFF',
            fontSize: fontSize(0.12)
          },
          data: this.legendDatas
        },
        // eslint-disable-next-line
        yAxis: {
          type: 'category',
          nameLocation: 'start',
          inverse: true, // 方向坐标
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
            fontSize: fontSize(0.12)
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
          data: xName
        },
        // eslint-disable-next-line
        xAxis: {
          type: this.intervalBiger(this.endDatas),
          nameTextStyle: {
            color: 'rgba(93, 98, 120, 1)',
            fontSize: fontSize(0.12)
          },
          nameLocation: 'center',
          nameGap: fontSize(0.25),
          splitLine: {
            show: false,
            lineStyle: {
              color: 'rgba(255,255,255,0.1)'
            }
          },
          axisLabel: {
            color: '#5D6278',
            formatter(value) {
              return transformNumber(value)
            },
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
          }
        },
        series: series
      }
      this.merge()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
